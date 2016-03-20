'use strict';

module.exports = function(grunt) {
    // Load tasks from Grunt dependencies
    require("matchdep").filterAll("grunt-*").forEach(grunt.loadNpmTasks);
    
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        
        app_path: 'src',
        dist_path: 'dist',
        
        // HTML
        htmlhint: {
            build: {
                options: {
                    'tag-pair': true,
                    'tagname-lowercase': true,
                    'attr-lowercase': true,
                    'attr-value-double-quotes': true,
                    'spec-char-escape': true,
                    'id-unique': true,
                    'head-script-disabled': true,
                    'style-disabled': true
                },
                src: ['<%= app_path %>/*.html']
            }
        },
        
        
        // JAVASCRIPT
        jshint: {
            source: {
                options: {
                    "browser": true,
                    "curly": true,
                    "eqnull": true,
                    "eqeqeq": true,
                    "globalstrict": true, "strict": false,
                    "jquery": true,
                    "latedef": true,
                    "undef": true,
                    "devel": true
                },
                src: ["<%= app_path %>/js/main.js"]
            }
        },
        concat: {
            dist: {
                src: ['<%= app_path %>/js/*.js'],
                dest: '<%= app_path %>/js/bundle.js',
            }
        },
        uglify: {
            source: {
                files: {
                    '<%= dist_path %>/js/main.min.js': '<%= app_path %>/js/bundle.js'
                }
            }
        },
        
        
        // CSS
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
            }
        },
        
        
        // IMAGES
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
        
        
        watch: {
            html: {
                files: ['<%= app_path %>/*.html'],
                tasks: ['htmlhint']
            },
            js: {
                files: ['<%= app_path %>/js/**/*.js'],
                tasks: ['js']
            },
            scss: {
                files: ['<%= app_path %>/sass/**/*.scss'],
                tasks: ['sass']
            }
        }
        
        
    });
    
    grunt.registerTask('js', ['jshint', 'concat', 'uglify']);
    grunt.registerTask('css', ['sass', 'cssmin']);
    
    grunt.registerTask('default', ['htmlhint', 'js', 'css']);
    
};