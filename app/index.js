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
    writing:function(){
        this.log('writing');
    },
    conflicts:function(){
        this.log('install');
    },
    end:function(){
        this.log('end');
    }
})

