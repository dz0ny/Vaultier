Ember.TEMPLATES["Member/MemberIndex"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, stack2, hashContexts, hashTypes, options, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = '', stack1, hashContexts, hashTypes, options;
  data.buffer.push("\r\n\r\n        <div class=\"panel panel-default vlt-panel-permissions top-30\">\r\n            <div class=\"panel-heading\">\r\n                <div class=\"col-md-8\">\r\n                    <h4>\r\n                        collaborators of <b>Vault name</b> (3)\r\n                    </h4>\r\n                </div>\r\n                <div class=\"col-md-4 vlt-controls\">\r\n                    <a class=\"btn btn-default btn-sm\">\r\n                        <span class=\"glyphicon glyphicon-edit\"></span>\r\n                    </a>\r\n                </div>\r\n\r\n                <div class=\"clearfix\"></div>\r\n            </div>\r\n            <table class=\"table vlt-table\">\r\n                <tbody>\r\n                <tr>\r\n                    <td class=\"vlt-user\">\r\n                        ");
  hashContexts = {'size': depth0,'class': depth0};
  hashTypes = {'size': "INTEGER",'class': "STRING"};
  options = {hash:{
    'size': (50),
    'class': ("vlt-avatar")
  },contexts:[depth0],types:["STRING"],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  data.buffer.push(escapeExpression(((stack1 = helpers.gravatarImg || depth0.gravatarImg),stack1 ? stack1.call(depth0, "jan.misek@rclick.cz", options) : helperMissing.call(depth0, "gravatarImg", "jan.misek@rclick.cz", options))));
  data.buffer.push("\r\n                        <b>Jan Míšek</b><br/>\r\n                    <span class=\"help-block\">\r\n                        jan.misek@rclick.cz\r\n                    </span>\r\n                    </td>\r\n                    <td class=\"vlt-actions\">\r\n                    <span class=\"badge\">\r\n                        Read\r\n                    </span>\r\n                    </td>\r\n                </tr>\r\n                <tr>\r\n                    <td class=\"vlt-user\">\r\n                        ");
  hashContexts = {'size': depth0,'class': depth0};
  hashTypes = {'size': "INTEGER",'class': "STRING"};
  options = {hash:{
    'size': (50),
    'class': ("vlt-avatar")
  },contexts:[depth0],types:["STRING"],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  data.buffer.push(escapeExpression(((stack1 = helpers.gravatarImg || depth0.gravatarImg),stack1 ? stack1.call(depth0, "tomas.plesek@rclick.cz", options) : helperMissing.call(depth0, "gravatarImg", "tomas.plesek@rclick.cz", options))));
  data.buffer.push("\r\n                        <b>Jan Míšek</b><br/>\r\n                    <span class=\"help-block\">\r\n                        jan.misek@rclick.cz\r\n                    </span>\r\n                    </td>\r\n                    <td class=\"vlt-actions\">\r\n                    <span class=\"badge\">\r\n                        Read and create\r\n                    </span>\r\n                    </td>\r\n                </tr>\r\n                <tr>\r\n                    <td class=\"vlt-user\">\r\n                        ");
  hashContexts = {'size': depth0,'class': depth0};
  hashTypes = {'size': "INTEGER",'class': "STRING"};
  options = {hash:{
    'size': (50),
    'class': ("vlt-avatar")
  },contexts:[depth0],types:["STRING"],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  data.buffer.push(escapeExpression(((stack1 = helpers.gravatarImg || depth0.gravatarImg),stack1 ? stack1.call(depth0, "jakub.bokoc@rclick.cz", options) : helperMissing.call(depth0, "gravatarImg", "jakub.bokoc@rclick.cz", options))));
  data.buffer.push("\r\n                        <b>Jan Míšek</b><br/>\r\n                    <span class=\"help-block\">\r\n                        jan.misek@rclick.cz\r\n                    </span>\r\n                    </td>\r\n                    <td class=\"vlt-actions\">\r\n                    <span class=\"badge\">\r\n                        Manage\r\n                    </span>\r\n                    </td>\r\n                </tr>\r\n                </tbody>\r\n            </table>\r\n\r\n\r\n        </div>\r\n\r\n\r\n        <div class=\"clearfix\"></div>\r\n\r\n    ");
  return buffer;
  }

  data.buffer.push("<div class=\"vlt-page-nav\">\r\n\r\n    <div class=\"vlt-page-toolbar pull-right\">\r\n        <div>\r\n\r\n            <a href=\"#\" class=\"btn btn-primary\" data-toggle=\"tooltip\" title=\"first tooltip\">\r\n                <span class=\"glyphicon glyphicon-user\"></span>\r\n                Invite collaborator\r\n            </a>\r\n\r\n        </div>\r\n    </div>\r\n\r\n    <div class=\"pull-left\">\r\n        <h2>Collaborators</h2>\r\n    </div>\r\n\r\n    <div class=\"clearfix\"></div>\r\n\r\n    <div class=\"panel panel-default vlt-panel-permissions top-30\">\r\n        <div class=\"panel-heading\">\r\n            <div class=\"col-md-8\">\r\n                <h4>\r\n                    Collaborators of <b>secret name</b> (3)\r\n                </h4>\r\n            </div>\r\n            <div class=\"clearfix\"></div>\r\n        </div>\r\n        <table class=\"table vlt-table\">\r\n            <tbody>\r\n            <tr>\r\n                <td class=\"vlt-user\">\r\n                    ");
  hashContexts = {'size': depth0,'class': depth0};
  hashTypes = {'size': "INTEGER",'class': "STRING"};
  options = {hash:{
    'size': (50),
    'class': ("vlt-avatar")
  },contexts:[depth0],types:["STRING"],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  data.buffer.push(escapeExpression(((stack1 = helpers.gravatarImg || depth0.gravatarImg),stack1 ? stack1.call(depth0, "jan.misek@rclick.cz", options) : helperMissing.call(depth0, "gravatarImg", "jan.misek@rclick.cz", options))));
  data.buffer.push("\r\n                    <b>Jan Míšek</b><br/>\r\n                    <span class=\"help-block\">\r\n                        jan.misek@rclick.cz\r\n                    </span>\r\n                </td>\r\n                <td class=\"vlt-actions\">\r\n                    <div class=\"input-group\">\r\n                        <select class=\"form-control vlt-perms\">\r\n                            <option>Read</option>\r\n                            <option>Read and create</option>\r\n                            <option>Manage</option>\r\n                        </select>\r\n\r\n                        <a class=\"btn btn-default btn-sm input-group-btn\">\r\n                            <span class=\"glyphicon glyphicon-remove\"></span>\r\n                        </a>\r\n                    </div>\r\n                </td>\r\n            </tr>\r\n            <tr>\r\n                <td class=\"vlt-user\">\r\n                    ");
  hashContexts = {'size': depth0,'class': depth0};
  hashTypes = {'size': "INTEGER",'class': "STRING"};
  options = {hash:{
    'size': (50),
    'class': ("vlt-avatar")
  },contexts:[depth0],types:["STRING"],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  data.buffer.push(escapeExpression(((stack1 = helpers.gravatarImg || depth0.gravatarImg),stack1 ? stack1.call(depth0, "tomas.plesek@rclick.cz", options) : helperMissing.call(depth0, "gravatarImg", "tomas.plesek@rclick.cz", options))));
  data.buffer.push("\r\n                    <b>Jan Míšek</b><br/>\r\n                    <span class=\"help-block\">\r\n                        jan.misek@rclick.cz\r\n                    </span>\r\n                </td>\r\n                <td class=\"vlt-actions\">\r\n                    <div class=\"input-group\">\r\n                        <select class=\"form-control vlt-perms\">\r\n                            <option>Read</option>\r\n                            <option>Read and create</option>\r\n                            <option>Manage</option>\r\n                        </select>\r\n\r\n                        <a class=\"btn btn-default btn-sm input-group-btn\">\r\n                            <span class=\"glyphicon glyphicon-remove\"></span>\r\n                        </a>\r\n                    </div>\r\n                </td>\r\n            </tr>\r\n            <tr>\r\n                <td class=\"vlt-user\">\r\n                    ");
  hashContexts = {'size': depth0,'class': depth0};
  hashTypes = {'size': "INTEGER",'class': "STRING"};
  options = {hash:{
    'size': (50),
    'class': ("vlt-avatar")
  },contexts:[depth0],types:["STRING"],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  data.buffer.push(escapeExpression(((stack1 = helpers.gravatarImg || depth0.gravatarImg),stack1 ? stack1.call(depth0, "jakub.bokoc@rclick.cz", options) : helperMissing.call(depth0, "gravatarImg", "jakub.bokoc@rclick.cz", options))));
  data.buffer.push("\r\n                    <b>Jan Míšek</b><br/>\r\n                    <span class=\"help-block\">\r\n                        jan.misek@rclick.cz\r\n                    </span>\r\n                </td>\r\n                <td class=\"vlt-actions\">\r\n                    <div class=\"input-group\">\r\n                        <select class=\"form-control vlt-perms\">\r\n                            <option>Read</option>\r\n                            <option>Read and create</option>\r\n                            <option>Manage</option>\r\n                        </select>\r\n\r\n                        <a class=\"btn btn-default btn-sm input-group-btn\">\r\n                            <span class=\"glyphicon glyphicon-remove\"></span>\r\n                        </a>\r\n                    </div>\r\n                </td>\r\n            </tr>\r\n            </tbody>\r\n        </table>\r\n    </div>\r\n\r\n    <h2>Inherited collaborators</h2>\r\n\r\n    ");
  hashTypes = {};
  hashContexts = {};
  options = {hash:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0],types:["INTEGER"],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  stack2 = ((stack1 = helpers.times || depth0.times),stack1 ? stack1.call(depth0, 3, options) : helperMissing.call(depth0, "times", 3, options));
  if(stack2 || stack2 === 0) { data.buffer.push(stack2); }
  data.buffer.push("\r\n</div>");
  return buffer;
  
});