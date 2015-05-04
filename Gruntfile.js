module.exports = function (grunt) {

    // Project configuration.
    grunt.initConfig({

        //Read the package.json (optional)
        pkg: grunt.file.readJSON('package.json'),

        // Task configuration.
        compass: {
            dev: {
                options: {
                    sassDir: 'sass',
                    cssDir: 'css'
                }
            }
        },

        cssmin: {
            target: {
                files: [{
                    expand: true,
                    cwd: 'css',
                    src: ['*.css', '!*.min.css'],
                    dest: 'css/min',
                    ext: '.min.css'
                }]
            }
        },

        clean: ["css/*.css", "css/min/*.css"],

        karma: {
            all: {
                options: {
                    configFile: 'karma.conf.js'
                }
            }
        },

        requirejs: {
            registrationBuild: {
                options: {
                    mainConfigFile: "js/common/require.conf.js",
                    optimize: "uglify",
                    name: "js/registration",
                    out: "js/site/registration.min.js",
                    exclude: ['jQuery'],
                    include: ['requireLib']
                }
            },
            registrationDeploy: {
                options: {
                    mainConfigFile: "js/common/require.conf.js",
                    optimize: "none",
                    name: "js/registration",
                    out: "js/site/registration.js",
                    exclude: ['jQuery'],
                    include: ['requireLib']
                }
            },
        },

        handlebars: {
            compile: {
                options: {
                  amd: true,
                    processName: function(filePath) {
                        return filePath.split("/").pop().replace(".html", "");
                    }
                },
                files: {
                    "js/common/compiledTemplates/registration.js": "templates/registration/*.html"
                }
            }
        }
    });

    // These plugins provide necessary tasks.
    grunt.loadNpmTasks('grunt-contrib-compass');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-karma');
    grunt.loadNpmTasks('grunt-contrib-requirejs');
    grunt.loadNpmTasks('grunt-contrib-handlebars');

    grunt.registerTask('compileCSS', ['clean', 'compass', 'cssmin']);
    grunt.registerTask('compileJS', ['handlebars', 'requirejs']);
    // Default task
    grunt.registerTask('default', ['compileCSS']);

};