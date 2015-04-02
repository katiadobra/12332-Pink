module.exports = function(grunt) {

  require('load-grunt-tasks')(grunt);

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),


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
      }
    },


    lintspaces: {
      all: {
        src: [
          '*.html'
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
        src: 'less/style.less',
        dest: 'css/style.css'
      }
    },



    autoprefixer: {
      
      style: {
        options: {
          browsers: ['last 2 versions', 'ie 9']
        },
        src: 'css/style.css'
      },
    },
    
    cmq: {
      style: {
        files: {
          'css/style.css': ['css/style.css']
        }
      }
    },


    cssmin: {
      target: {
        src: 'css/style.css',
        dest: 'css/style.min.css'
      }
    },


    // SVG
    svgmin: {
      options: {
        plugins: [
          {
            removeDesc: true
          }
        ]
      },
      dist: {
        files: [{
          expand: true,
          cwd: 'svgs',
          src: ['!!ai','*.svg'],
          dest: 'svgmin'
        }]
      }
    },

    grunticon: {
      makesvg: {
        files: [{
          expand: true, //
          // cwd: 'assets/svgmin',
          src: ['svgmin/*.svg', '*.png'], // old files
          dest: 'svg' // new files
        }],
        options: {
          enhanceSVG: true, // style and animate with CSS or add interactivity with JS
        
        // имена CSS-файлов
          datasvgcss : 'css/grunticon-icons.data.svg.css',
          datapngcss : 'css/grunticon-icons.data.png.css',
          urlpngcss : 'css/grunticon-icons.fallback.css',
        // имя HTML-файла с предварительным просмотром всех иконок
          previewhtml : 'preview.html',
        // grunticon loader code snippet filename
          loadersnippet: "grunticon.loader.js",
        // имя папки, в которую будут записаны PNG
          pngfolder : 'css/png',
            pngpath : '../css/png',
        // префикс для CSS-классов
          cssprefix: ".icon-",

          template : 'svg/template.hbs',
        // ширина и высота по умолчанию, либо указывать вручную в css
          defaultWidth : '20px',
          defaultHeight: '20px'
        }
      }
    },


    // clean
    clean: {
      svg: [
        'svgmin',
        'svg/png',
        'svg/css/grunticon*',
        'svg/*.html'
      ]
    },


    // Watch 

    watch: {
      less: {
        files: 'less/**/*.less',
        tasks: ['style'],
        options: {
          spawn: false,
          livereload: true
        }
      },
      html: {
        files: '*.html',
        options: {
          livereload: true
        }
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

  grunt.registerTask('svg', [
    'clean:svg',
    'svgmin',
    'grunticon',
    'notify:grunticon'
  ]);
};
