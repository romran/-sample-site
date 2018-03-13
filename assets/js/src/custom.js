$(document).ready(function () {

    //Dropdown menu
    $(".dropbtn").click(function () {
        $(".dropdown-content").removeClass("show");
        $(".dropbtn").css("color", "white");
        $(this).css("color", "#333333");
        $(this).next().toggleClass("show")
    });

    //Close dropdown menu when clicking outside
    window.onclick = function (event) {
        if (!$(event.target).hasClass('dropbtn')) {
            $(".dropbtn").css("color", "white");
            $(".dropdown-content").removeClass("show");
        }
    };

    //Hamburger
    $('#nav-icon').click(function () {
        $(this).toggleClass('open');
        if ($("#nav-icon").hasClass("open")) {
            $('.menu-down').addClass("show")
        }
        else {
            $('.menu-down').removeClass("show")
        }
    });

    //Change position of the last dropdown menu
    $(window).on('resize', function () {
        var width = $(window).width();
        if (width <= 1024 && width >= 767) {
            $(".dropdown-content:last").addClass("move");
        }
        else {
            $(".dropdown-content:last").removeClass("move");
        }
    }).trigger('resize');

    //Form validation
    var inputs = $('input');

    $(inputs).each(function () {
        $(this).keyup(function (e) {
            var regex = /^[a-zA-Z_ ]+$/;
            if (regex.test(this.value) !== true)
                this.value = this.value.replace(/[^a-zA-Z_ ]+/, '');
        });
    });

    $('#submit').on('click', function () {
        $('#form *').filter(':input').each(function () {
            $(this).val($.trim($(this).val()));
        });
    });

    //Notification if user uses IE 10 or older version
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





