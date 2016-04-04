'use strict';

var generators = require('yeoman-generator');


module.exports = generators.Base.extend({
    initializing:function(){
        this.log('initializing!');
    },
    prompting:function(){
        this.log('prompting');
    },
    configuring:function(){
        this.log('configuring');
    },
    default:function(){
        this.log('writing');
    },
    writing:{
        appStaticFiles:function(){
            this.copy('_favicon.ico',"favicon.ico");
            this.directory('styles','styles/')
        },
        html:function(){
            this.fs.copyTpl(
                this.templatePath('_index.html'),
                this.destinationPath('index.html')
            );
        }
    },
    conflicts:function(){
        this.log('install');
    },
    end:function(){
        this.log('end');
    }
})

