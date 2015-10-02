module.exports = function(grunt){
    //project configuration
    grunt.initConfig({
        pkg:grunt.file.readJSON('package.JSON'),
        uglify: {
            options: {
                //banner:'/*!<%=pkg.name%><%=grunt.template.today("yyyy-mm-dd")%>*/\n'
            },
            build:{
                src:'client/app.js',
                dest:'server/public/assets/scripts/app.min.js'
            }
        },
        copy: {
            main: {
                expand:true,
                cwd:"node_modules/",
                src: [
                    "jquery/dist/jquery.min.js",
                    "jquery/dist/jquery.min.map",
                    "bootstrap/dist/js/bootstrap.min.js",
                    "bootstrap/dist/css/bootstrap-theme.min.css",
                    "bootstrap/dist/fonts/glyphicons-halflings-regular.ttf",
                    "bootstrap/dist/fonts/glyphicons-halflings-regular.woff",
                    "bootstrap/dist/fonts/glyphicons-halflings-regular.woff2"
                ],

                "dest": "server/public/vendor/"
            }
        }

    });
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    // Default task(s).
    grunt.registerTask('default', ['copy', 'uglify']);

};
