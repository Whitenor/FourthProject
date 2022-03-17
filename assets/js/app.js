// Initialize and add the map
function initMap() {
    // The location of Uluru
    const campus = { lat: 46.6687245, lng: 5.5536708 };
    // The map, centered at Uluru
    const map = new google.maps.Map(document.getElementById("map"), {
      zoom: 15,
      center: campus,
      mapId:'7281ddf8448cb43b'
    });
    // The marker, positioned at Uluru
    const marker = new google.maps.Marker({
      position: campus,
      map: map,
    });
  }