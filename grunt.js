module.exports = function (grunt) {

  function readBookContent() {
    var _ = grunt.utils._;
    var content = grunt.file.read('src/Book.txt', { encoding: 'utf8' });
    var chapters = _.lines(content).filter(function (line) { return !_.isBlank(line); }).map(function (line) { return 'src/' + line; });
    grunt.verbose.writeln('Found chapters: ' + chapters);
    return chapters;
  }

  grunt.initConfig({

    chapters: readBookContent(),

    watch: {
      files: ['grunt.js', 'src/html/*.html', 'src/chapters/*.md', 'src/sass/*.scss'],
      tasks: 'wbb:html'
    },

    sass: {
      compile: {
        files: {
          'src/css/main.css': 'src/sass/*.scss'
        }
      }
    },

    copy: {

      chapters: {
        files: {
          'builds/leanpub/chapters/': '<config:chapters>',
        }
      },

      leanpub_images: {
        files: {
          'builds/leanpub/images/': 'src/images/**'
        }
      },

      leanpub_files: {
        files: {
          'builds/leanpub/': 'src/*.txt'
        }
      },

      html_images: {
        files: {
          'builds/html/images/': 'src/images/**'
        }
      },

      minified_css: {
        files: {
          'builds/html/': 'src/css/main.min.css'
        }
      },

      mobi: {
        files: {
          'builds/mobi/': 'builds/epub/*.mobi'
        }
      }
    },

    concat: {
      markdown: {
        src: '<config:chapters>',
        dest: 'src/index.md'
      },

      css: {
        src: 'src/css/*.css',
        dest: 'src/css/main.min.css'
      }
    },

    mincss: {
      main: {
        files: {
          'src/css/main.min.css': 'src/css/main.min.css'
        }
      }
    },

    shell: {
      make_html: {
        command: 'make html'
      },

      make_epub: {
        command: 'make epub'
      },

      make_rtf: {
        command: 'make rtf'
      },

      make_mobi: {
        command: 'make mobi'
      },
    },

    clean: {
      tmp: 'tmp',
      css: 'src/css/main.min.css',
      epub: 'builds/epub/*.mobi',
      index: 'src/index.md'
    }
  });

  grunt.loadNpmTasks('grunt-contrib');
  grunt.loadNpmTasks('grunt-shell');
  grunt.loadNpmTasks('grunt-sass');

  grunt.registerTask('wbb:html', [
    'concat:markdown',
    'sass:compile',
    'concat:css',
    'mincss:main',
    'copy:minified_css',
    'copy:html_images',
    'shell:make_html',
    'clean:index',
    'clean:css'
  ].join(' '));

  grunt.registerTask('wbb:epub', [
    'concat:markdown',
    'shell:make_epub',
    'clean:index'
  ].join(' '));

  grunt.registerTask('wbb:rtf', [
    'concat:markdown',
    'shell:make_rtf',
    'clean:index'
  ].join(' '));

  grunt.registerTask('wbb:mobi', [
    'concat:markdown',
    'shell:make_mobi',
    'copy:mobi',
    'clean:epub',
    'clean:index'
  ].join(' '));

  grunt.registerTask('wbb:leanpub', [
    'copy:chapters',
    'copy:leanpub_images',
    'copy:leanpub_files'
  ].join(' '));

  grunt.registerTask('wbb:publish', [
    'wbb:html',
    'wbb:epub',
    'wbb:rtf',
    'wbb:mobi',
    'wbb:leanpub'
  ].join(' '));
};
