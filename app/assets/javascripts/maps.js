var map = undefined;

function initMap() {
  var mapOptions = {
    center: new google.maps.LatLng(40.7399977, -73.9900976),
    zoom: 12,
    mapTypeId: google.maps.MapTypeId.ROADMAP
  };
  map = new google.maps.Map($("#map-canvas")[0], mapOptions);
}

function addMarker(latitude, longitude, title) {
  var marker = new google.maps.Marker({
    position: new google.maps.LatLng(latitude, longitude),
    map : map,
    title : title
  });
}