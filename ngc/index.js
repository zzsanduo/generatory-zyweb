'use strict';
var generators = require('yeoman-generator'),
    _ = require("lodash");

module.exports = generators.Base.extend({
    // note: arguments and options should be defined in the constructor.
  constructor: function () {
    generators.Base.apply(this, arguments);

    // This makes `appname` a required argument.
    this.argument('ctrlName', { type: String, required: true });
    this.ctrlName = _.camelCase(this.ctrlName);

  },
    initializing: function () {
        this.log('inside ngc sub-generator', this);
        

        this.option('view', {
            desc: 'Determines if view is created along with controller',
            type: Boolean,
            default: false
        });
    },
    
    writing: function(){
        this.fs.copyTpl(
            this.templatePath('ng-controller.js'),
            this.destinationPath('app/' + this.ctrlName.toLowerCase() + '/' + this.ctrlName.toLowerCase() + '-controller.js'),
            {
                ctrlName: this.ctrlName+"Controller",
                appName: this.config.get('ngappname')
            }
        );
        
        if (this.options.view) {
            this.fs.copyTpl(
                this.templatePath('ng-view.html'),
                this.destinationPath('app/' + this.ctrlName.toLowerCase() + '/' + this.ctrlName.toLowerCase()+ '.tpl.html'),
                {
                    name: this.ctrlName
                });
        }
    }
});