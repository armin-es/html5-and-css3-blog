module.exports = function(grunt) {
    // Do grunt-related things in here.
    grunt.initConfig({
        // Project configuration
        pkg: grunt.file.readJSON('package.json'),

        jshint: {
            files: ['gruntfile.js'],
        }
    });

    // Load the plugins that provides the tasks:
    grunt.loadNpmTasks('grunt-contrib-jshint');

    // Default tasks:
    grunt.registerTask('default', ['jshint']);

};