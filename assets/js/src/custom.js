$(document).ready(function () {

    $(".dropbtn").click(function () {
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

    $(window).on('resize', function () {
        var width = $(window).width();
        if (width <= 1024 && width >= 767) {
            $(".dropdown-content:last").addClass("move");
        }
        else {
            $(".dropdown-content:last").removeClass("move");
        }
    }).trigger('resize');

    $("#submit").click(function () {
        if ($("#lastname").val().match('^[a-zA-Z]')) {
            $("#lastname").css("border", "none")
        }
        else {
            $("#lastname").css("border", "1px solid red");
            alert("Last name consists invalid characters");
        }

        if ($("#firstname").val().match('^[a-zA-Z]')) {
            $("#firstname").css("border", "none")
        }
        else {
            $("#firstname").css("border", "1px solid red");
            alert("First name consists invalid characters");
        }
    });

    function getIEVersion() {
        var rv = -1; // Return value assumes failure.
        if (navigator.appName == 'Microsoft Internet Explorer') {
            var ua = navigator.userAgent;
            var re = new RegExp("MSIE ([0-9]{1,}[\.0-9]{0,})");
            if (re.test(ua) != null)
                rv = parseFloat(RegExp.$1);
        }
        return rv;
    }

    function checkVersion() {
        var ver = getIEVersion();
        if (ver != -1) {
            if (ver <= 10.0) {
                alert("The Site don't support insecure browsers, please upgrade to Internet Explorer 11 or use another modern browser ");
            }
        }
    }

    checkVersion()
});





