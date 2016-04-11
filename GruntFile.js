module.exports = function(grunt){

    grunt.initConfig({
        watch: {
            css: {
                files: ['src/Sass/**/*.sass'],
                tasks: ['compass:dev'],
            },
            js: {
                files: ['src/Js/**/*.js'],
                tasks: ['copy:main']
            }

        },
        compass: {                  // Task
            dist: {                   // Target
                options: {              // Target options
                    sassDir: 'src/Sass/',
                    cssDir: 'webroot/css',
                    environment: 'production'
                }
            },
            dev: {                    // Another target
                options: {
                    sassDir: 'src/Sass/',
                    cssDir: 'webroot/css'
                }
            }
        },
        copy: {
            main: {
                cwd: 'src/Js',
                expand: true,
                src: '**',
                dest: 'webroot/js'
            }
        },
        browserSync: {
            dev: {
                bsFiles: {
                    src : 'webroot/css/'
                },
                options: {
                    proxy: "gym.dev"
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-compass');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-browser-sync');
    grunt.registerTask('default','watch');

};