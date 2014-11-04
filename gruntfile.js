module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    jshint: {
      all: ['gruntfile.js']
    },

    'sf2-console': {
      'twig-lint': {
        cmd: 'twig:lint src'
      }
    },

    less: {
      files: {
        src: 'bower_components/bootstrap/less/bootstrap.less',
        dest: 'web/assets/css/style.css'
      }
    },

    uglify: {
      scripts: {
        files: {
          'web/assets/js/main.js': [
            'bower_components/angular/angular.min.js',
            'bower_components/angular-bootstrap/ui-bootstrap.min.js'
          ]
        }
      }
    },

    watch: {
      scripts: {
        files: [],
        tasks: ['uglify']
      },
      styles: {
        files: ['**/*.less'],
        tasks: ['less']
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-symfony2');

  grunt.registerTask('default', ['jshint', 'less', 'uglify']);
  grunt.registerTask('test', ['jshint', 'sf2-console']);
};