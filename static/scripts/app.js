/**
 * App
 */

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

var obj = {};

