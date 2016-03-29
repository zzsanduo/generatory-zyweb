'use strict';

var generators = require('yeoman-generator');


module.exports = generators.Base.extend({
    test:function(){
        this.log('hello,world');
    }
})

