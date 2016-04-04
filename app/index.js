'use strict';

var generators = require('yeoman-generator'),
    yosay = require('yosay');


module.exports = generators.Base.extend({
    initializing:function(){
        this.log('initializing!');
    },
    prompting:function(){
            this.log(yosay('Welcome to Webgo generator!'));
            
            var done = this.async();
            this.prompt([{
                type: 'input',
                name: 'ngappname',
                message: 'Angular App Name (ng-app)',
                default: 'app'
            },
            {
                type: 'checkbox',
                name: 'jslibs',
                message: 'Which JS libraries would you like to include?',
                choices: [
                    {
                        name: 'lodash',
                        value: 'lodash',
                        checked: true
                    }
                ]
            }], function(answers){
               this.log(answers);
               this.ngappname = answers.ngappname;             
               done(); 
            }.bind(this));
    },
    configuring:function(){
        this.log('configuring');
    },
    default:function(){
        this.log('writing');
    },
    writing:{
         gulpfile: function(){
            this.log("copy gulpfile");
        },
        packageJSON: function(){
            this.copy('_package.json', 'package.json');
        },
        appStaticFiles:function(){
            this.copy('_favicon.ico',"favicon.ico");
            this.directory('styles','styles/')
        },
        bowerJSON:function(){
            var bowerJson = {
                name: this.appname,
                license: 'MIT',
                dependencies: {}  
            };
            bowerJson.dependencies['angular'] = '~1.4.6';
            bowerJson.dependencies['angular-bootstrap'] = '~0.13.4';
            bowerJson.dependencies['bootstrap-css-only'] = '~3.3.5';
            bowerJson.dependencies['angular-ui-router'] = '~0.2.15';
            if (this.includeLodash){
                bowerJson.dependencies['lodash'] = '~3.10.1';                
            }
            this.fs.writeJSON('bower.json', bowerJson);
        },
        script:function(){
            this.fs.copyTpl(
                this.templatePath('app/_app.js'),
                this.destinationPath('app/app.js'),
                {
                    ngapp: this.ngappname
                }
            );
            this.fs.copyTpl(
                this.templatePath('app/home/_home-controller.js'),
                this.destinationPath('app/home/home-controller.js'),
                {
                    ngapp: this.ngappname
                });
             this.fs.copyTpl(
                this.templatePath('app/layout/_layout-controller.js'),
                this.destinationPath('app/layout/layout-controller.js'),
                {
                    ngapp: this.ngappname
                });
            this.fs.copyTpl(
                this.templatePath('app/about/_about-controller.js'),
                this.destinationPath('app/about/about-controller.js'),
                {
                    ngapp: this.ngappname
                });
        },
        html:function(){
            this.fs.copyTpl(
                this.templatePath('_index.html'),
                this.destinationPath('index.html'),{
                    ngapp:this.ngappname
                }
            );
            this.fs.copy(
                this.templatePath('app/layout/_layout.tpl.html'),
                this.destinationPath('app/layout/layout.tpl.html'),{
                    ngapp:this.ngappname
                }
            );
            this.fs.copy(
                this.templatePath('app/home/_home.tpl.html'),
                this.destinationPath('app/home/home.tpl.html'));
            this.fs.copy(
                this.templatePath('app/about/_about.tpl.html'),
                this.destinationPath('app/about/about.tpl.html'));
        }
    },
    install: function(){
        //this.bowerInstall();
        //this.npmInstall();
        this.installDependencies({
            skipInstall: this.options['skip-install']
        });
    },
    conflicts:function(){
    },
    end:function(){
        this.log('end');
    }
})

