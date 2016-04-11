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
            },
            goldRayCss: {
                files: ['plugins/GoldRay/src/Sass/**/*.sass'],
                tasks: ['compass:goldRay'],
            },
            goldRayJs: {
                files: ['plugins/GoldRay/src/Js/**/*.js'],
                tasks: ['copy:goldRay']
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
            goldRay: {
                options: {
                    sassDir: 'plugins/GoldRay/src/Sass',
                    cssDir: 'plugins/GoldRay/webroot/css',
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
                cwd: 'plugins/GoldRay/src/Js',
                expand: true,
                src: '**',
                dest: 'plugins/GoldRay/webroot/js'
            },
            goldRay:{
                cwd: 'src/Js',
                expand: true,
                src: '**',
                dest: 'webroot/js'
            }
        },
        browserSync: {
            GoldRay: {
                bsFiles: {
                    src : 'plugins/GoldRay/webroot/css'
                },
                options: {
                    proxy: "gym.dev"
                }
            },
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