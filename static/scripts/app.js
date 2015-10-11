/**
 * App
 */

$(document).ready(function(){

    var source   = $("#entry-template").html();
    var template = Handlebars.compile(source);
    var context = {title: "My New Post", body: "This is my first post!"};
    var errormessage =
        '<div class="error">' +
            'Be sure to add a title and a date' +
        '</div>'
    ;

    $('.menu-trigger').click(function(e){
        var $self = $(this),
            activeClass = 'is-active',
            active = true;
        $self.parent().addClass(activeClass);
        e.preventDefault();
    });
    $('.menu-option a').each(function(){
        $(this).click(function(e){
            var type = $(this).data('type');
            var target = '.' + type;
            $('.entry--add').removeClass('is-active');
            $(target).addClass('is-active');
            $('.menu').removeClass('is-active');
            e.preventDefault();
        });
    });

    $('.entry-form').each(function(){
        var $self = $(this);
        var hasError = false;
        $(this).find('button').click(function(e){
            var obj = {},
                inputs = $self.find('input'),
                vals = [];
            for(var i=0;i<inputs.length;i++){
                var $input = $(inputs[i]),
                    inputlabel = $input.attr('id'),
                    inputval = $input.val();
                vals.push(inputval);
                obj[inputlabel] = inputval;
            }
            console.log(obj,vals.length,vals);
            if(vals[1]!== '' && vals[2]!== ''){
                var html = template(obj);
                $('.entries').prepend(html);
                $self.closest('.entry--add').removeClass('is-active');
            }else{
                if(!hasError){
                    $self.prepend(errormessage);
                    hasError = true;
                }
            }
            e.preventDefault();
        });
    });

});

