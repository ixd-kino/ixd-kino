var mywindow = $(window);
var mypos = mywindow.scrollTop();
var up = false;
var newscroll;

$(window).scroll(function() {
    newscroll = mywindow.scrollTop();
    if (newscroll > mypos && !up) {
        $('#nav-bar').toggleClass("up");
        up = !up;
    } else if (newscroll < mypos && up) {
        $('#nav-bar').toggleClass("up");
        up = !up;
    }
    mypos = newscroll;
});