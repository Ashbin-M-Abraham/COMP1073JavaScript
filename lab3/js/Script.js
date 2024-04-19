//iniInitialize Google Maps and Add the location of Georgian College
let map;

async function initMap() {
  const { Map } = await google.maps.importLibrary("maps");

  map = new Map(document.getElementById("map"), {
    center: { lat: 44.412833478479456, lng: -79.66962453538743 },
    zoom: 15,
  });
}

initMap();
