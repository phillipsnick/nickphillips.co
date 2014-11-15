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
          'app/*.php',
          'src/'
        ]
      },
      options: {
        bin: './vendor/squizlabs/php_codesniffer/scripts/phpcs',
        standard: './app/Resources/phpcs/ruleset.xml'
      }
    },

    phplint: {
      options: {
        swapPath: '/tmp'
      },
      all: [
        'app/*.php',
        'src/**/*.php'
      ]
    },

    update_json: {
      options: {
        src: 'composer.json',
        indent: '  '
      },
      bower: {
        dest: 'bower.json',
        fields: {
          'name':         null,
          'description':  null,
          'license':      null
        }
      },
      package: {
        dest: 'package.json',
        fields: {
          'name':         null,
          'description':  null,
          'license':      null,
          'version':      null,
          'homepage':     null
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

  require('load-grunt-tasks')(grunt);

  grunt.registerTask('json', 'update_json');
  grunt.registerTask('default', ['bower', 'less', 'uglify']);
  grunt.registerTask('test', ['phpcs', 'phplint', 'jshint', 'lesslint', 'sf2-console']);
};