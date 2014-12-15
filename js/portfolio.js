$( document ).ready(function() {
    $("[rel='tooltip']").tooltip();

    $('.thumbnail').hover(
        function(){
            $(this).find('.caption').slideDown(300); //.fadeIn(250)
        },
        function(){
            $(this).find('.caption').slideUp(300,function(){$ (this).stop( true, true )}); //.fadeOut(205) and stop hover
        }
    );
});