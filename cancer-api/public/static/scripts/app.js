/**
 * App
 */

$('.menu-trigger').click(function(e){
    var $self = $(this),
        activeClass = 'is-active',
        active = true;
        active = true;
    $self.parent().addClass(activeClass);
    e.preventDefault();
});
