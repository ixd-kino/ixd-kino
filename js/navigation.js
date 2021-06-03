//MOBILE MENU

var toggleNav = function() {
    $("#nav-bar").toggleClass("expanded");
    $(".nav-items").toggleClass("expanded");
    $("body").toggleClass("lock");
    $(".logo").toggleClass("hide");
    $(".icon").toggleClass("hide");
}

//NAVBAR SCROLL TOGGLER

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