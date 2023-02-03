$(function() {
    $(".holder + input").keyup(function() {
        if($(this).val().length) {
            $(this).prev('.holder').hide();
        } else {
            $(this).prev('.holder').show();
        }
    });
    $(".holder").click(function() {
        $(this).next().focus();
    });
});