module.exports = function(grunt) {
    // Do grunt-related things in here.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        // Project configuration
    });

    // Load the plugins that provides the tasks:
    grunt.loadNpmTasks(''); // plugin name inside ''

    // Default tasks:
    grunt.registerTask('default', ['']); // task name inside ''

};