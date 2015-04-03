module.exports = function(grunt) {

  require('load-grunt-tasks')(grunt);

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),


    config: {
      src: 'src',
      dist: 'build'
    },


    notify: {
      less: {
        options: {
          title: 'Complete',  // optional 
          message: 'LESS finished running' //required 
        }
      },
      grunticon: {
        options: {
          title: 'svg task complete',  // optional 
          message: 'SVG done' //required 
        }
      },
      build: {
        options: {
          title: 'Complete',  // optional 
          message: 'Build task finished' //required 
        }
      }
    },


    lintspaces: {
      all: {
        src: [
          '<%= config.dist %>/*.html'
        ],
        options: {
          newline: true,
          newlineMaximum: 2,
          trailingspaces: true,
          indentationGuess: true,
          editorconfig: '.editorconfig',
          ignores: [
            'html-comments',
            'js-comments'
          ],
          showTypes: true,
          showCodes: true
        }
      }
    },



    less: {
      build: {
        files: {
          '<%= config.src %>/css/style.css': ['<%= config.src %>/less/style.less']
        }
      }
    },



    autoprefixer: {
      style: {
        options: {
          browsers: ['last 2 versions', 'ie 9']
        },
        src: '<%= config.src %>/css/style.css'
      },
    },
    
    cmq: {
      style: {
        files: {
          '<%= config.src %>/css/style.css': ['<%= config.src %>/css/style.css']
        }
      }
    },


    cssmin: {
      target: {
        src: '<%= config.src %>/css/style.css',
        dest: '<%= config.src %>/css/style.min.css'
      }
    },


    // img
    imagemin: {
      images: {
        options: {
          optimizationLevel: 3
        },
        files: [{
          expand: true,
          cwd: '<%= config.src %>/img/',
          src: ['*.{jpg,gif,png}'],
          dest: '<%= config.src %>/img/'
        }]
      }
    },


    // SVG
    svgmin: {
      options: {
        plugins: [
          {
            removeDesc: true
          }, 
          { removeViewBox: false },
          { removeUselessStrokeAndFill: false },
          { removeEmptyAttrs: false }  
        ]
      },
      dist: {
        files: [{
          expand: true,
          cwd: '<%= config.src %>/svgs',
          src: ['*.svg'],
          dest: 'svgmin'
        }]
      }
    },

    grunticon: {
      makesvg: {
        files: [{
          expand: true, //
          cwd: '<%= config.src %>/_svg',
          src: ['svgs/*.svg', '*.png'], // old files
          dest: '<%= config.src %>' // new files
        }],
        options: {
          enhanceSVG: true, // style and animate with CSS or add interactivity with JS
          datasvgcss : 'css/grunticon-icons.data.svg.css',
          datapngcss : 'css/grunticon-icons.data.png.css',
          urlpngcss : 'css/grunticon-icons.fallback.css',
          previewhtml : '_preview.html',
          loadersnippet: 'grunticon.loader.js',
        // имя папки, в которую будут записаны PNG
          pngfolder : 'img/png',
            pngpath : '..img/png',
          cssprefix: ".icon-",

          template : '<%= config.src %>/_svg/template.hbs',
          defaultWidth : '20px',
          defaultHeight: '20px'
        }
      }
    },


    // Watch 
    watch: {
      less: {
        files: '<%= config.src %>/less/**/*.less',
        tasks: ['style'],
        options: {
          spawn: false,
          livereload: true
        }
      },
      html: {
        files: '<%= config.src %>/*.html',
        options: {
          livereload: true
        }
      }
    },


    // clean
    clean: {
      build: '<%= config.dist %>',
      svg: [
        '<%= config.src %>/_svg/svgmin',
        '<%= config.src %>/img/png',
        '<%= config.src %>/svg/css/grunticon*',
        '<%= config.src %>/svg/*.html'
      ],
    },


    // copy
    copy: {
      build: {
        files: [{
          expand: true,
          cwd: '<%= config.src %>',
          src: [
            '**',
            '!less/**', // no less
            '!_*/**', // ignore '_name' folders
            '!**/js/**' // ignore all js
            // 'js/build/*'
            // 'css/*',
            // 'img/**',
            // 'js/**',
            // '*.html'
          ],
          dest: '<%= config.dist %>'
        }]
      }
    }


  });



    // Tasks

  grunt.registerTask('style', [
    'less',
    'autoprefixer',
    'cmq',
    'cssmin',
    'notify:less'
  ]);

  grunt.registerTask('lint', [
    'lintspaces'
  ]);

  grunt.registerTask('img', [
    'imagemin'
  ]);

  grunt.registerTask('b', [
    'clean:build',
    'copy',
    'less',
    'autoprefixer',
    'cmq',
    'cssmin',
    'notify:build'
  ]);

  grunt.registerTask('svg', [
    'clean:svg',
    // 'svgmin',
    'grunticon',
    'notify:grunticon'
  ]);
};
