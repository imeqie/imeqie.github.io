requirejs.config({
    //本地路径目录
    baseUrl: 'js', 
    //路径内容
    paths: {
        "jquery" : ["https://cdn.jsdelivr.net/npm/jquery@1.12.4/dist/jquery.min"],
        // "jquery" : ["jquery.min"],
        "bootstrap":["https://cdn.jsdelivr.net/npm/bootstrap@3.3.7/dist/js/bootstrap.min"],
        // "bootstrap" : ["bootstrap.min"],
        "myapp":["myapp"]

    },
    map: {
        '*': {
            'css': 'https://cdn.jsdelivr.net/npm/require-css@0.1.10/css.min.js'
            //'css': 'css.min.js'
        }
    },
    shim:{ //依赖
        'bootstrap':{
            deps: ['jquery','css!https://cdn.jsdelivr.net/npm/bootstrap@3.3.7/dist/css/bootstrap.min.css']
           
        },
        'myapp':['jquery']
    },
})
require(["jquery","bootstrap","myapp"], function ($) {
    $(function () {
        //页面切换
        var hash='#action';
        $('input[name=bgdate]').val(app.getdate(0));
        $('input[name=endate]').val(app.getdate(0));
        $('#myTabs a').click(function (e) {
            e.preventDefault();
            $(this).tab('show');
            $('table>thead').html('');
            $('table>tbody').html('');
            hash = $(this)[0].hash;
            if (hash == '#action') {
                $('input[name=bgdate]').val(app.getdate(0));
                $('input[name=endate]').val(app.getdate(0));
            }
        })
        //按钮提交
        $('button.btn').on('click', function () {
            var contents = $(this).parent().serialize();
            contents=app.formToJson(contents);
            console.log(contents)
        })
    })
})
