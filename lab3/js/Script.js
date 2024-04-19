let map;

async function initMap() {
  // Map initialization
  map = new google.maps.Map(document.getElementById('map'), {
    center: { lat: 44.412833478479456, lng: -79.66962453538743 },
    zoom: 15
  });
  // add marker
  new google.maps.Marker({
    position :{ lat: 44.412833478479456, lng: -79.66962453538743 },
    title:"Georgian College",
    map: map
  });
  //create  traffic layer
  const trafficLayer = new google.maps.TrafficLayer();
  trafficLayer.setMap(map);

}

//referecence 
//https://developers.google.com/maps/documentation/javascript
//https://youtu.be/CdDXbvBFXLY?si=tptHOKGzt-aEdzLS