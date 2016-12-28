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
                dest: 'dist/style.css'
            }
        },

        cssmin: {
            target: {
                files: [{
                    expand: true,
                    cwd: 'dist',
                    src: '*.css',
                    dest: 'dist',
                    ext: '.min.css'
                }]
            }
        }
    });

    // Load the plugins that provides the tasks:
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-cssmin');

    // Default tasks:
    grunt.registerTask('default', ['jshint', 'concat', 'cssmin']);

};