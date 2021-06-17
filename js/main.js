//SHOWCASE TIMELINE 

var togglerStatus = 1;
var vw = $(window).width();
var prevWidth = vw;



var toggler = function(status) {
    togglerStatus = status;
    var ideazione = $("#ideazione");
    var scrittura = $("#scrittura");
    var preprod = $("#preprod");
    var produzione = $("#produzione");
    var postprod = $("#postprod");
    var distribuzione = $("#distribuzione");


    if (togglerStatus == 1) {

        $("#documentario").addClass("selected-toggler");
        $("#horror").removeClass("selected-toggler");
        $("#animazione").removeClass("selected-toggler");

        $(".showcase-title").velocity({ opacity: '0' }, 500,
            function() {
                $(".showcase-title").addClass("hide");
                $("#documentario-title").removeClass("hide");
                $(".showcase-title").velocity({ opacity: '1' });
            })

        $(".showcase-background").velocity({ opacity: '0' }, 500,
            function() {
                $(".showcase-background").addClass("hide");
                $("#documentario-background").removeClass("hide");
                $(".showcase-background").velocity({ opacity: '1' });
            })

        if (vw > 750) {
            ideazione.velocity({ width: '10%' }, 250);
            scrittura.velocity({ width: '13%' }, 250);
            preprod.velocity({ width: '15%' }, 250);
            produzione.velocity({ width: '16%' }, 250);
            postprod.velocity({ width: '15%' }, 250);
            distribuzione.velocity({ width: '13%' }, 250);
        } else {
            ideazione.velocity({ width: '27%' }, 250);
            scrittura.velocity({ width: '20%' }, 250);
            preprod.velocity({ width: '40%' }, 250);
            produzione.velocity({ width: '80%' }, 250);
            postprod.velocity({ width: '40%' }, 250);
            distribuzione.velocity({ width: '30%' }, 250);
        }

    } else if (togglerStatus == 2) {

        $("#horror").addClass("selected-toggler");
        $("#documentario").removeClass("selected-toggler");
        $("#animazione").removeClass("selected-toggler");


        $(".showcase-title").velocity({ opacity: '0' }, 500,
            function() {
                $(".showcase-title").addClass("hide");
                $("#horror-title").removeClass("hide");
                $(".showcase-title").velocity({ opacity: '1' });
            })

        $(".showcase-background").velocity({ opacity: '0' }, 500,
            function() {
                $(".showcase-background").addClass("hide");
                $("#horror-background").removeClass("hide");
                $(".showcase-background").velocity({ opacity: '1' });
            })

        if (vw > 750) {
            ideazione.velocity({ width: '14%' }, 250);
            scrittura.velocity({ width: '8.5%' }, 250);
            preprod.velocity({ width: '15%' }, 250);
            produzione.velocity({ width: '15%' }, 250);
            postprod.velocity({ width: '18%' }, 250);
            distribuzione.velocity({ width: '12%' }, 250);
        } else {
            console.log("picio")
            ideazione.velocity({ width: '30%' }, 250);
            scrittura.velocity({ width: '25%' }, 250);
            preprod.velocity({ width: '40%' }, 250);
            produzione.velocity({ width: '40%' }, 250);
            postprod.velocity({ width: '75%' }, 250);
            distribuzione.velocity({ width: '35%' }, 250);
        }

    } else if (togglerStatus == 3) {

        $("#animazione").addClass("selected-toggler");
        $("#documentario").removeClass("selected-toggler");
        $("#horror").removeClass("selected-toggler");

        $(".showcase-title").velocity({ opacity: '0' }, 500,
            function() {
                $(".showcase-title").addClass("hide");
                $("#animazione-title").removeClass("hide");
                $(".showcase-title").velocity({ opacity: '1' });
            })

        $(".showcase-background").velocity({ opacity: '0' }, 500,
            function() {
                $(".showcase-background").addClass("hide");
                $("#animazione-background").removeClass("hide");
                $(".showcase-background").velocity({ opacity: '1' });
            })

        if (vw > 750) {
            ideazione.velocity({ width: '10%' }, 250);
            scrittura.velocity({ width: '12%' }, 250);
            preprod.velocity({ width: '15%' }, 250);
            produzione.velocity({ width: '10%' }, 250);
            postprod.velocity({ width: '25%' }, 250);
            distribuzione.velocity({ width: '12%' }, 250);
        } else {
            ideazione.velocity({ width: '27%' }, 250);
            scrittura.velocity({ width: '33%' }, 250);
            preprod.velocity({ width: '42%' }, 250);
            produzione.velocity({ width: '25%' }, 250);
            postprod.velocity({ width: '67%' }, 250);
            distribuzione.velocity({ width: '30%' }, 250);

        }
    }

    console.log(vw)

};

//SHOWCASE ANIMATION

$(window).scroll(function() {
    var top_of_element = $("#showcase").offset().top;
    var bottom_of_element = $("#showcase").offset().top + $("#showcase").outerHeight();
    var bottom_of_screen = $(window).scrollTop() + $(window).innerHeight();
    var top_of_screen = $(window).scrollTop();

    if ((bottom_of_screen > top_of_element) && (top_of_screen < bottom_of_element)) {
        $("#showcase").css("width", "100%");
        setTimeout(function() { $("#showcase-content").css("opacity", "1"); }, 1200);
    } else {
        $("#showcase").css("width", "0");
        $("#showcase-content").css("opacity", "0");
    }

});

//SHOWCASE ON RESIZE

$(window).resize(function() {

    vw = $(window).width();

    if (prevWidth >= 750 && vw < 750) {
        toggler(togglerStatus);
    } else if (prevWidth <= 750 && vw > 750) {
        toggler(togglerStatus);

    }

    prevWidth = vw;
});


//COLLABORAZIONE

$(window).scroll(function() {
    if (vw > 1120) {
        var top_of_element = $("#slide-frame").offset().top;
        var top_of_screen = $(window).scrollTop();

        var topDist = top_of_element - top_of_screen;
        const map = (value, x1, y1, x2, y2) => (value - x1) * (y2 - x2) / (y1 - x1) + x2;
        var newWidth = map(topDist, 700, 120, 0, 50);
        if (topDist < 120) {
            newWidth = 50
        }
        var input = String(newWidth) + "%"
        $("#slide-frame").css("width", input)

    }
})

//KINO MESSAGES 

$(window).scroll(
    function() {
        var previousHeight = 0;
        var firstOffset = $(".first").css("top");
        var stackHeight = parseInt(firstOffset, 10);
        var padding = 16;

        var containerBottom = $("#kino-container").offset().top + $("#kino-container").outerHeight() - 2;

        $(".msg-wrapper").each(function() {

            if ($(this).is("#first") != true) {
                stackHeight += (previousHeight + padding);
                newOffset = String(stackHeight);
                $(this).css("top", newOffset + 'px');
            }

            itemPos = $(this).offset().top
            midPoint = ($(window).scrollTop() + (0.75 * window.innerHeight))

            itemBottom = $(this).offset().top + $(this).outerHeight();

            getOpacity = parseInt($(this).css("opacity"), 10)

            if (itemBottom >= containerBottom) {
                if (getOpacity == 1) {
                    $(this).stop().animate({ opacity: '0' }, 150)
                    console.log("tocca")
                }
            } else if (itemPos < midPoint) {
                if (getOpacity == 0) {
                    $(this).stop().animate({ opacity: '1' }, 500)
                }
            }

            previousHeight = $(this).outerHeight();

        })

    }

)