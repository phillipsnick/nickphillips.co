module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    /**
     * Front end packages
     */
    bower: {
      install: {
        options: {
          copy: false
        }
      }
    },


    /**
     * LESS/CSS
     */
    less: {
      files: {
        src: [
          'bower_components/bootstrap/less/bootstrap.less',
          'src/**/*.less'
        ],
        dest: 'web/assets/css/style.css'
      }
    },

    lesslint: {
      src: [
        'bower_components/bootstrap/less/*.less',
        'src/**/*.less'
      ]
    },


    /**
     * JavaScript
     */
    jshint: {
      all: ['gruntfile.js']
    },

    karma: {
      unit: {
        configFile: 'test/js/karma.config.js',
        singleRun: true
      }
    },

    uglify: {
      options: {
        beautify: true,
        mangle: false
      },
      scripts: {
        files: {
          'web/assets/js/main.js': [
            'bower_components/angular/angular.min.js',
            'bower_components/angular-bootstrap/ui-bootstrap.min.js',
            'src/**/Resources/public/js/**/*.js',
            '<%= ngtemplates.app.dest %>'
          ]
        }
      }
    },


    /**
     * Twig
     */
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


    /**
     * AngularJS
     */
    ngtemplates: {
      app: {
        src: 'src/**/Resources/public/partials/**/*.html',
        dest: 'app/tmp/ngtemplates.js',
        options: {
          url: function(url) {
            var url = url.substring(4);
            var parts = url.split('/Resources/public/partials/');
            var bundleName = (parts[0].split('/')).join('');

            return 'assets/partials/' + bundleName + '/' + parts[1];
          }
        }
      }
    },


    /**
     * PHP
     */
    phplint: {
      options: {
        swapPath: '/tmp'
      },
      all: [
        'app/*.php',
        'src/**/*.php'
      ]
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

    phpunit: {
      app: {
        options: {
          configuration: 'app'
        }
      }
    },


    /**
     * Version Control
     */
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

    bump: {
      options: {
        files: ['composer.json', 'package.json'],
        commitFiles: ['composer.json', 'package.json'],
        push: false
      }
    },


    /**
     * Grunt Specific
     */
    watch: {
      scripts: {
        files: ['src/**/*.js'],
        tasks: ['uglify']
      },
      styles: {
        files: ['src/**/*.less'],
        tasks: ['less']
      },
      partials: {
        files: ['src/**/Resources/public/partials/**/*.html'],
        tasks: ['js']
      }
    }
  });

  require('load-grunt-tasks')(grunt);

  grunt.registerTask('json', 'update_json');
  grunt.registerTask('js', ['ngtemplates', 'uglify']);
  grunt.registerTask('test', ['lesslint', 'jshint', 'karma:unit', 'shell:twiglint', 'phplint', 'phpcs', 'phpunit']);
  grunt.registerTask('default', ['bower', 'less', 'js']);
};