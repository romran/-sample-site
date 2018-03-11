(function ($) {
    'use strict';

    var map; //<-- This is now available to both event listeners and the initialize() function
    var mapCenter; // Declare a variable to store the center of the map
    var centerMarker; // declare your marker

    var exhlat = '54.679176';
    var exhlng = '25.276102';

    if ($('#map').hasClass('exh')) {
        exhlat = $('#map').data('lat');
        exhlng = $('#map').data('lng');
    }

    function initialize() {
        var mapOptions = {
            // How zoomed in you want the map to start at (always required)
            zoom: 13,
            panControl: false,
            rotateControl: false,
            scaleControl: false,
            mapTypeControl: false,
            streetViewControl: false,
            scrollwheel: false,
            zoomControl: true,

            // The latitude and longitude to center the map (always required)
            //center: new google.maps.LatLng(55.894844, 23.362054), // center

            // How you would like to style the map.
            // This is where you would paste any style found on Snazzy Maps.
            styles: [{"featureType":"administrative.country","elementType":"geometry.stroke","stylers":[{"lightness":"40"},{"visibility":"on"}]},{"featureType":"administrative.country","elementType":"labels","stylers":[{"visibility":"simplified"}]},{"featureType":"administrative.province","elementType":"geometry.stroke","stylers":[{"visibility":"off"}]},{"featureType":"administrative.province","elementType":"labels","stylers":[{"visibility":"simplified"},{"lightness":"10"}]},{"featureType":"administrative.locality","elementType":"geometry.stroke","stylers":[{"visibility":"on"}]},{"featureType":"administrative.locality","elementType":"labels","stylers":[{"visibility":"simplified"},{"lightness":"25"}]},{"featureType":"administrative.neighborhood","elementType":"labels.text.fill","stylers":[{"color":"#243c64"}]},{"featureType":"landscape","elementType":"all","stylers":[{"hue":"#ff8800"},{"saturation":"19"},{"lightness":"11"},{"gamma":1}]},{"featureType":"poi","elementType":"all","stylers":[{"saturation":-1.0989010989011234},{"lightness":11.200000000000017},{"gamma":1}]},{"featureType":"poi","elementType":"labels.text.fill","stylers":[{"color":"#576377"},{"lightness":"31"},{"saturation":"-30"}]},{"featureType":"road","elementType":"geometry","stylers":[{"visibility":"on"},{"lightness":"30"}]},{"featureType":"road","elementType":"labels.text","stylers":[{"weight":"1"},{"saturation":"0"},{"lightness":"10"},{"gamma":"1"},{"visibility":"on"}]},{"featureType":"road","elementType":"labels.text.fill","stylers":[{"color":"#243c64"},{"lightness":"-32"},{"saturation":"43"}]},{"featureType":"road.highway","elementType":"all","stylers":[{"hue":"#ff8800"},{"saturation":-61.8},{"lightness":"81"},{"gamma":1}]},{"featureType":"road.arterial","elementType":"all","stylers":[{"hue":"#ff0300"},{"saturation":-100},{"lightness":51.19999999999999},{"gamma":1}]},{"featureType":"road.local","elementType":"all","stylers":[{"hue":"#FF0300"},{"saturation":-100},{"lightness":52},{"gamma":1}]},{"featureType":"water","elementType":"all","stylers":[{"hue":"#0080ff"},{"saturation":"-7"},{"lightness":"7"},{"gamma":1}]},{"featureType":"water","elementType":"labels","stylers":[{"visibility":"off"},{"lightness":"30"}]}]
        };

        mapCenter = new google.maps.LatLng(exhlat, exhlng);


        if ($('#map').length > 0) {
            map = new google.maps.Map(document.getElementById("map"), mapOptions);
            map.setCenter(mapCenter);
        }

        var image = 'http://autare.notyet.live/wp-content/themes/autare/assets/images/pin.png';

        centerMarker = new google.maps.Marker({
            position: new google.maps.LatLng(exhlat, exhlng),
            map: map,
            icon: image,
            title: ''
        });

    }

    if ($('#map').length > 0) {
        google.maps.event.addDomListener(window, 'load', initialize);
    }
})(jQuery);