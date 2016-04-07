module.exports = function(grunt) {
    "use strict";

    // Load modules
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-coffee');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-coffee-jshint');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-copy');


    grunt.initConfig({
        // Init GruntJS config
        pkg: grunt.file.readJSON('package.json'),
        // clean app folder
        clean: {
            all: [
                '.tmp',
                '.grunt',
                'app'
            ]
        },
        // compile to simple JS
        coffee: {
            glob_to_multiple: {
                expand: true,
                flatten: true,
                cwd: './dev/',
                src: ['*.coffee'],
                dest: './app/',
                ext: '.js'
            }
        },
        
        // Check javascript code
        jshint: {
            beforeconcat: ['./app/*.js'],
            // afterconcat: ['app/js/vendor/test.min.js'],
            options: {
                node: true,
                curly: true,
                eqnull: true,
                eqeqeq: true,
                undef: true,
                forin: true,
                funcscope: false,
                latedef: true,
                nonew: true,
                strict: false,
                unused: true,
                supernew: true,
                maxdepth: 3,
                maxparams: 5,
                noempty: 5,
                globals: {
                    console: true,
                    module: true
                }
            },
            all: [
                'Gruntfile.js'
            ],

        },
        // watcher
        watch: {
            options: {
                livereload: true
            },
            coffee: {
                files: ['dev/*.{coffee}'],
                tasks: ['coffee:glob_to_multiple']
            }
        },
        // copy not coffee files
        copy: {
            main: {
                files: [
                    {
                        expand: true,
                        cwd :"dev/",
                        src: ['**', '!*.coffee'],
                        dest: './app/',
                        filter: 'isFile'
                    },

                ],
            },
        },
    });
    // two task
    grunt.registerTask('default', ['clean', 'copy', 'coffee']);
    // dev with watcher
    grunt.registerTask('dev', ['clean', 'copy', 'coffee', 'watch']);

};