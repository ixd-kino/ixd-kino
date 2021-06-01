$(window).scroll(function() {
    var top_of_element = $("#cinema-wrapper").offset().top;
    var top_of_screen = $(window).scrollTop();

    var topDist = top_of_element - top_of_screen;
    const map = (value, x1, y1, x2, y2) => (value - x1) * (y2 - x2) / (y1 - x1) + x2;
    var newWidth = map(topDist, 700, 140, 0, 100)
    var input = String(newWidth) + "%"
    $("#cinema-wrapper").css("width", input)
    console.log(newWidth)
})