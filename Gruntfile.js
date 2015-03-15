



module.exports = function(grunt){

  // configuração do grunt
  grunt.initConfig({
    copy:{
      //configurações da Copy
      project:{
        expand: true,
        cwd:'.',
        src: ['**','Gruntfile.js','!package.json',
                   '!public/bower.json'],
        dest:'dist'
      }
    },
    // tarefa para limpas arquivo past dist
    clean: {
        dist:{
          src:'dist'
        }
      },
    usemin:{
      html: 'dist/app/views/**/*.ejs'
    },
    useminPrepare: {
      options:{
        root: 'dist/public',
        dest: 'dist/public'
      },
      html: 'dist/app/views/**/*.ejs'
    },
    ngAnnotate: {
      scripts:{
        expand:true,
        src: ['dist/public/js/**/*.js']
      }
    }
  });


  // configura a tarefa padrao para executar grunt sem parametros
  grunt.registerTask('default',['dist','minifica']);

  // configura as execução das tarefas
  grunt.registerTask('dist',['clean','copy']);
  grunt.registerTask('minifica',['useminPrepare','ngAnnotate','concat','uglify','cssmin','usemin']);
  //Faz carregamento do plugin do Grunt
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-concat');// concatenar arquivos
  grunt.loadNpmTasks('grunt-contrib-uglify');// minificar arquivos js
  grunt.loadNpmTasks('grunt-contrib-cssmin'); //minificar css
  grunt.loadNpmTasks('grunt-usemin');
  grunt.loadNpmTasks('grunt-ng-annotate');
};
