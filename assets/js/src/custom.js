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


    $("#firstname").keyup(function (e) {
        var regex = /^[a-zA-Z]+$/;
        if (regex.test(this.value) !== true)
            this.value = this.value.replace(/[^a-zA-Z]+/, '');
    });

    $("#lastname").keyup(function (e) {
        var regex = /^[a-zA-Z]+$/;
        if (regex.test(this.value) !== true)
            this.value = this.value.replace(/[^a-zA-Z]+/, '');
    });

    $('#submit').on('click', function () {
        $("#message").val($.trim($("#message").val()));
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





