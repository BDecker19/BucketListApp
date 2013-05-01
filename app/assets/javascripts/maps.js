var map = undefined;

function initMap() {
  var mapOptions = {
    center: new google.maps.LatLng(42.3584308, -71.0597732),
    zoom: 12,
    mapTypeId: google.maps.MapTypeId.ROADMAP
  };
  map = new google.maps.Map($("#map-canvas")[0], mapOptions);

  google.maps.event.addListener(map, "projection_changed", function() {
    console.log("hi");
  });

  google.maps.event.addListener(map, "zoom_changed", function() {
    console.log(map.getZoom());
  });

  google.maps.event.addListener(map, "center_changed", function() {
    $.ajax({
       url: '/destinations',
       data: {
         latitude : map.getCenter().lat(),
         longitude: map.getCenter().lng()
       },
       contentType: 'text/javascript',
       beforeSend: function(xhr) {
         xhr.setRequestHeader('accept', 'text/javascript');
       }
    });
  });
}

function addMarker(latitude, longitude, title) {
  var marker = new google.maps.Marker({
    position: new google.maps.LatLng(latitude, longitude),
    map : map,
    title : title
  });
}