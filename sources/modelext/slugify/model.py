from django.contrib.contenttypes.generic import GenericForeignKey
from django.contrib.contenttypes.models import ContentType
from django.db import models
from django.db.models.fields import PositiveIntegerField
from modelext.changes.changes import post_change, INSERT, UPDATE
from modelext.slugify.slugify import unique_slugify


class SlugManagerMixin(object):
    def on_model(self, signal=None, sender=None, instance=None, event_type=None, overwritten_values=None, **kwargs):
        try:
            instance.set_post_change_signal_enabled(False)

            # create slug with new instance
            if event_type == INSERT:
                self.create_slug_for_model(instance)

            # create slug when name of instance changed. Slugs are not deleted (permalink pattern)
            if event_type == UPDATE and overwritten_values.has_key('name'):
                self.create_slug_for_model(instance)
        finally:
            instance.set_post_change_signal_enabled(True)

    def create_slug_for_model(self, model):
        # prepare query set to generate slug
        model_type = ContentType.objects.get_for_model(model)
        queryset = self.get_queryset().exclude(
            object_id=model.id,
            content_type=model_type
        )

        # generate slugname
        slug_text = unique_slugify(model.name, queryset=queryset, default_slug=model.__class__.__name__)

        # if not slug exists, create
        if not self.get_queryset().filter(
            object_id=model.id,
            content_type=model_type,
            slug=slug_text
        ).count():
            s = self.create(content_object=model, slug=slug_text)
            s.save()

        # update slug on model
        model.slug = slug_text
        model.save()


class SlugMixin(models.Model):
    class Meta:
        abstract = True

    slug = models.CharField(max_length=255, unique=True, db_index=True)
    content_type = models.ForeignKey(ContentType)
    object_id = PositiveIntegerField()
    content_object = GenericForeignKey('content_type', 'object_id')
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)


def register_signals(slug_model, slugable_model):
    post_change.connect(slug_model.objects.on_model, sender=slugable_model)
