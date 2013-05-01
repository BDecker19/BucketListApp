var map = undefined;

function initMap() {
  var mapOptions = {
    center: new google.maps.LatLng(40.7399977, -73.9900976),
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
    console.log(map.getBounds().getSouthWest());
    console.log(map.getBounds().getNorthEast());
  });
}

function addMarker(latitude, longitude, title) {
  var marker = new google.maps.Marker({
    position: new google.maps.LatLng(latitude, longitude),
    map : map,
    title : title
  });
}