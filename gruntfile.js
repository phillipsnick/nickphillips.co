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

    shell: {
      twiglint: {
        command: [
          'app/console twig:lint app/Resources/views',
          'app/console twig:lint src'
        ].join('&&'),
        options: {
          callback: function (err, stdout, stderr, cb) {
            if (stdout.indexOf('KO in') > -1) {
              cb(new Error('Failure in twig lint'));
              return;
            }

            cb();
          }
        }
      }
    },

    less: {
      files: {
        src: [
          'bower_components/bootstrap/less/bootstrap.less',
          'src/**/*.less'
        ],
        dest: 'web/assets/css/style.css'
      }
    },

    uglify: {
      scripts: {
        files: {
          'web/assets/js/main.js': [
            'bower_components/angular/angular.min.js',
            'bower_components/angular-bootstrap/ui-bootstrap.min.js',
            'src/**/*.js'
          ]
        }
      }
    },

    karma: {
      unit: {
        configFile: 'test/js/karma.config.js',
        singleRun: true
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
        files: ['src/**/*.js'],
        tasks: ['uglify']
      },
      styles: {
        files: ['src/**/*.less'],
        tasks: ['less']
      }
    },

    bump: {
      options: {
        files: ['composer.json', 'package.json'],
        commitFiles: ['composer.json', 'package.json'],
        push: false
      }
    }
  });

  require('load-grunt-tasks')(grunt);

  grunt.registerTask('json', 'update_json');
  grunt.registerTask('default', ['bower', 'less', 'uglify']);
  grunt.registerTask('test', ['phpcs', 'phplint', 'jshint', 'karma:unit', 'lesslint', 'shell:twiglint']);
};