const googleMap = googleMap || {};

googleMap.api_url = "http://localhost:3000/api";

googleMap.init = function() {
  this.mapSetup();
  // this.eventListeners();
};

// googleMap.eventListeners = function() {
//   $('.location').on('click', this.getCurrentLocation);
//   $('.new').on('click', this.toggleForm);
//   $('main').on('submit', 'form', this.addFeminist);
// };

// googleMap.toggleForm = function() {
//   $('form').slideToggle();
// };

// googleMap.getCurrentLocation = function() {
//   navigator.geolocation.getCurrentPosition( function (position) {
//     let marker = new google.maps.Maker({
//       position: new
//       google.maps.LatLng(position.coords.latitude, position.coords.longitude),
//       map: googleMap.map,
//       animation: google.maps.Animation.Drop,
//       icon: {
//         url: "http://furtaev.ru/preview/user_on_map_2_small.png",
//         scaledSize: new
//         google.maps.Size(56, 56)
//       }
//     });
//     googleMap.map.setCenter(marker.getPosition());
//   });
// };

googleMap.addFeminist = function() {
  event.preventDefault();
  $.ajax({
    method: "POST",
    url: "http://localhost:3000/api/restaurants",
    data: $(this).serialize()
  }).done(data => {
    console.log(data.feminist);
    googleMap.createMarkerForRestaurant(null, data.feminist);
    $('form').reset().hide();
  });
};

googleMap.mapSetup = function() {
  let canvas = document.getElementById('map-canvas');
  let mapOptions = {
    zoom: 13,
    center: new
    google.maps.LatLng(51.506178, -0.088369),
    mapTypeId:
    google.maps.MapTypeId.ROADMAP,
  };
  this.map = new
  google.maps.Map(canvas, mapOptions);
  // this.getFeminists();
};

googleMap.getFeminists = function(){
  return $.get(`${this.api_url}/feminists`).done(this.loopThroughFeminists.bind(this));
};

googleMap.loopThroughFeminists = function(data) {
  return $.each(data.feminists, this.createMarkerForFeminist.bind(this));
};

googleMap.createMarkerForFeminist = function(index, feminist) {
  let latlng = new
  google.maps.LatLng(feminist.lat, feminist.lng);

  let marker = new
  google.maps.Marker({
    position: latlng,
    map: this.map,
    icon: {
      url: "http://furtaev.ru/preview/restaurant_map_pointer_small.png",
      scaledSize: new
      google.maps.Size(56,56)
    }
  });
  this.addInfoWindowForFeminist(feminist, marker);
};

googleMap.addInfoWindowForFeminist = function(feminist, marker) {
  google.maps.event.addListener(marker, 'click', () => {
    if (typeof this.infowindow != "undefined")
    this.infowindow.close();
    // this.infowindow = new google.maps.InfoWindow({
    //   content:
    //   <div class="info">
    //             <img src="${ feminist.image}">
    //             <h3>${ feminist.name }</h3>
    //             <p>${ feminist.date}</p>
    //             <p>${ feminist.location}</p>
    //             <p>${ feminist.description}</p>
    //           </div>
  });

  this.infowindow.open(this.map, marker);
  this.map.setCenter(marker.getPosition());
  // });
};

$(googleMap.init.bind(googleMap));
