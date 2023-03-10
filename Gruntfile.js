'use strict';

module.exports = function (grunt) {
// Time how long tasks take. Can help when optimizing build times
require('time-grunt')(grunt);

// Automatically load required Grunt tasks
require('jit-grunt')(grunt);  // Define the configuration for all the tasks

const sass = require('node-sass');
  grunt.initConfig({
    sass: {
        options: {
            implementation: sass,
            sourceMap: true,
          },
        dist: {
            files: {
                'CSS/styles.css': 'CSS/styles.scss'
            }
        }
    },
        watch: {
            files: 'css/*.scss',
            tasks: ['sass']
        },
        browserSync: {
            dev: {
                bsFiles: {
                    src : [
                        'css/*.css',
                        '*.html',
                        'js/*.js'
                    ]
                },
                options: {
                    watchTask: true,
                    server: {
                        baseDir: "./"
                    }
                }
            }
        }
  });
  grunt.registerTask('css', ['sass']);
  grunt.registerTask('default', ['browserSync', 'watch']);
};