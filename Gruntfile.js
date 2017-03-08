'use strict';

module.exports = function(grunt) {
    // Load tasks from Grunt dependencies
    require("matchdep").filterAll("grunt-*").forEach(grunt.loadNpmTasks);
    
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        
        app_path: 'src',
        dist_path: 'dist',


        /**
         * JAVASCRIPT
         */
        concat: {
            dist: {
                src: ['<%= app_path %>/js/*.js'],
                dest: '<%= app_path %>/js/bundle.js'
            }
        },
        uglify: {
            source: {
                files: {
                    '<%= dist_path %>/js/main.min.js': '<%= app_path %>/js/bundle.js'
                }
            }
        },


        /**
         * CSS
         */
        sass: {
            options: {
                sourceMap: true
            },
            dist: {
                files: {
                    '<%= app_path %>/css/main.css': '<%= app_path %>/sass/main.scss' 
                }
            }
        },
        cssmin: {
            source: {
                files: {
                    '<%= dist_path %>/css/main.min.css': '<%= app_path %>/css/main.css'
                }
            },
          critical: {
            files: {
              'critical.css': 'critical.css'
            }
          }
        },
        uncss: {
            dist: {
                options: {
                    ignore: ['.active', '#cta', 'ul.actions', 'icon']
                },
                files: {
                    '<%= dist_path %>/css/main.css': ['<%= dist_path %>/*.html']
                }
            }
        },



        imagemin: {
            build: {
                files: [{
                    expand: true,
                    cwd: 'src/',
                    src: 'images/**/*.{png,jpg}',
                    dest: 'dist/'
                }]
            }
        },


        /**
         * PERFORMANCE OPTIMIZATION
         */

        criticalcss: {
            desktop: {
                options: {
                    url: 'http://localhost:3000',
                    filename: 'dist/css/main.min.css',
                    outputfile: 'critical.css'
                }
            }
        }



    });
    
    grunt.registerTask('js', ['concat', 'uglify']);
    grunt.registerTask('css', ['sass', 'cssmin:source', 'uncss']);
    
    grunt.registerTask('default', ['js', 'css']);
    
};