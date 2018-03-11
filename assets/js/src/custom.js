$(document).ready(function () {

    $(".dropbtn").click(function () {
        console.log(true);
        $(".dropdown-content").removeClass("show");
        $(".dropbtn").css("color", "white");
        $(this).css("color", "#333333");
        $(this).next().toggleClass("show")
    });

    window.onclick = function (event) {
        if (!$(event.target).hasClass('dropbtn')) {
            $(".dropbtn").css("color", "white");
            $(".dropdown-content").removeClass("show");
        }
    };

    $('#nav-icon').click(function () {
        $(this).toggleClass('open');
        if ($("#nav-icon").hasClass("open")) {
            $('.menu-down').addClass("show")
        }
        else {
            $('.menu-down').removeClass("show")
        }
    });

    $(window).on('resize', function(){
        var width = $(window).width();
        if (width<=1024 && width>=767) {
            $(".dropdown-content:last").addClass("move");
        }
        else {
             $(".dropdown-content:last").removeClass("move");
        }
     }).trigger('resize');

});





