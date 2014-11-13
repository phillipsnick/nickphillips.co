module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    bower: {
      install: {
        options: {
          copy: false
        }
      }
    },

    jshint: {
      all: ['gruntfile.js']
    },

    lesslint: {
      src: [
        'bower_components/bootstrap/less/*.less',
        'src/**/*.less'
      ]
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

    phpcs: {
      application: {
        dir: [
          'src/'
        ]
      },
      options: {
        standard: 'PSR2'
      }
    },

    phplint: {
      options: {
        swapPath: '/tmp'
      },
      all: [
        'src'
      ]
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

  grunt.loadNpmTasks('grunt-bower-task');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-lesslint');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-phpcs');
  grunt.loadNpmTasks('grunt-phplint');
  grunt.loadNpmTasks('grunt-symfony2');

  grunt.registerTask('default', ['bower', 'jshint', 'less', 'uglify']);
  grunt.registerTask('test', ['phpcs', 'jshint', 'lesslint', 'sf2-console']);
};