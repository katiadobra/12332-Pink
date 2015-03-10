module.exports = function(grunt) {

  require('load-grunt-tasks')(grunt);

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),


    // Lint Spaces in code
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




  grunt.registerTask('style', [
    'less',
    'autoprefixer',
    'cssmin'
  ]);



  grunt.registerTask('lint', [
    'lintspaces'
  ]);
};
