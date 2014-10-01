module.exports = function (grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    browserify: {
      options: {
        debug: true,
        transform: ['reactify']
      },
      dev: {
        src: ['src/scripts/site.js'],
        dest: 'dist/scripts/site.js'
      }
    },

    replace: {
      root: {
        src: ['src/*.html'],
        dest: 'dist/',
        replacements: [{
          from: '%root%',
          to: ''
        }]
      }
    },

    copy: {
      styles: {
        cwd: 'src/styles',
        src: '**/*',
        dest: 'dist/styles',
        expand: true
      }
    },

    watch: {
      react: {
        files: ['src/scripts/**/*.js'],
        tasks: ['browserify']
      },
      html: {
        files: ['src/**/*.html'],
        tasks: ['replace']
      },
      assets: {
        files: ['src/styles/**/*'],
        tasks: ['copy']
      }
    }
  });

  grunt.loadNpmTasks('grunt-browserify');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-text-replace');

  grunt.registerTask('default', ['browserify', 'replace', 'copy']);
};
