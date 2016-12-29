module.exports = function(grunt) {
    // Do grunt-related things in here.
    grunt.initConfig({
        // Project configuration
        pkg: grunt.file.readJSON('package.json'),

        jshint: {
            files: ['gruntfile.js'],
        },

        concat: {
            css: {
                src: ['node_modules/normalize.css/normalize.css', 'src/css/style.css'],
                dest: 'dist/css/style.css'
            }
        },

        cssmin: {
            target: {
                files: [{
                    expand: true,
                    cwd: 'dist/css',
                    src: '*.css',
                    dest: 'dist/css',
                    ext: '.min.css'
                }]
            }
        },

        processhtml: {
            dist: {
                files: {
                    'dist/index.html': ['src/index.html']
                }
            }
        },

        copy: {
            main: {
                expand: true,
                cwd: 'src/img/',
                src: '*',
                dest: 'dist/img/',
            }
        },

        watch: {
            html: {
                files: ['src/index.html'],
                tasks: ['processhtml']
            },
            css: {
                files: ['app/css/*.*'],
                tasks: ['concat', 'cssmin']
            },
            gruntfile: {
                files: ['gruntfile.js'],
                tasks: ['jshint']
            },
            img: {
                files: ['src/img/*'],
                tasks: ['copy']
            },

        }
    });

    // Load the plugins that provides the tasks:
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-processhtml');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-watch');

    // Default tasks:
    grunt.registerTask('default', ['jshint', 'concat', 'cssmin', 'processhtml', 'copy']);

};