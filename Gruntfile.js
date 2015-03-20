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
      svg: {
        title: 'svg task complete',  // optional 
        message: 'SVG done' //required 
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
    


    cssmin: {
      target: {
        src: 'css/style.css',
        dest: 'css/style.min.css'
      }
    },

    // SVG

    grunticon: {
      makesvg: {
        files: [{
          expand: true, //
          cwd: 'assets/img',
          src: ['*.svg', '*.png'], // old files
          dest: 'svg' // new files
        }],
        options: {
          enhanceSVG: true, // style and animate with CSS or add interactivity with JS
        
        // имена CSS-файлов
          datasvgcss : 'css/grunticon-icons.data.svg.css', 
          datapngcss : 'css/grunticon-icons.data.png.css',
          urlpngcss : 'css/grunticon-icons.fallback.css',

        // имя HTML-файла с предварительным просмотром всех иконок
          previewhtml : '_grunticon-preview.html',

        // имя папки, в которую будут записаны PNG
          pngfolder : 'img/svg/png-grunticon',

        // префикс для CSS-классов
          cssprefix: "icon-",

          pngpath : '../img/svg/png-grunticon',
          template : 'assets/_svg/_template.hbs',

        // ширина и высота по умолчанию, либо указывать вручную в css
          defaultWidth : '20px',
          defaultHeight: '20px'
        }
      }
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
    'cssmin',
    'notify:less'
  ]);

  grunt.registerTask('lint', [
    'lintspaces'
  ]);

  grunt.registerTask('svg', [
    'grunticon'
    // 'notify:svg'
  ]);
};
