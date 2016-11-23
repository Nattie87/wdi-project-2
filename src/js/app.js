const App = App || {};

App.api_url = 'https://infinite-waters-70510.herokuapp.com/api';

App.init = function() {
  this.eventListeners();
  this.homepage();
};

App.eventListeners = function() {
  this.$main  = $('main');

  $('.location').on('click', this.getCurrentLocation);
  $('.new').on('click', this.toggleForm);
  $('.register').on('click', this.register.bind(this));
  $('.login').on('click', this.login.bind(this));
  $('.logout').on('click', this.logout.bind(this));
  $('.home').on('click', this.homepage.bind(this));
  $('.map').on('click', this.mapSetup.bind(this));
  $('.dropdown-menu .dropdown-item').on('click', this.changeMapLocation);
  this.$main.on('submit', 'form', this.handleForm);

  if (this.getToken()) {
    this.loggedInState();
  } else {
    this.loggedOutState();
  }
};

App.homepage = function () {
  $('header h1').hide();
  this.$main.html(`
    <div class="centered">
    <h1><img src="/images/pin-large.png" alt="Suffragette Pin">The Suffragette Map</h1>
    <h3>Freedom or death</h3>
    <a href="http://thenewcode.com/777/Create-Fullscreen-HTML5-Page-Background-Video"></a>
    <p>"We women, in trying to make our case clear, always have to make as part of our argument, and urge upon men in our audience the fact - a very simple fact - that women are human beings."

    "We were called militant, and we were quite willing to accept the name. We were determined to press this question of the enfranchisement of women to the point where we were no longer to be ignored by the politicians."

    "We wear no mark; we belong to every class; we permeate every class of the community from the highest to the lowest; and so you see in the woman's civil war the dear men of my country are discovering it is absolutely impossible to deal with it: you cannot locate it, and you cannot stop it."

    "As long as women consent to be unjustly governed, they can be, but directly women say: "We withhold our consent, we will not be governed any longer so long as that government is unjust."</p>
    </div>

    `);
};
App.changeMapLocation = function() {
  App.mapSetup();
  const id = $(this).attr('id').split(',');

  const latlng = new
  google.maps.LatLng(id[0],  id[1]);

  App.map.setCenter(latlng);
};

App.toggleForm = function() {
  $('form').slideToggle();
};

App.getCurrentLocation = function() {
  navigator.geolocation.getCurrentPosition( function (position) {
    App.currentLocation = {
      lat: position.coords.latitude,
      lng: position.coords.longitude
    };

    var icon = {
      url: 'images/pin-large.png', // url
      scaledSize: new google.maps.Size(40, 65), // scaled size
      origin: new google.maps.Point(0,0), // origin
      anchor: new google.maps.Point(0, 0) // anchor
    };

    const marker = new google.maps.Marker({
      position: App.currentLocation,
      map: App.map,
      animation: google.maps.Animation.DROP,
      icon
    });
    App.map.panTo(App.currentLocation);
  });
};


App.addFeminist = function() {
  event.preventDefault();
  $.ajax({
    method: 'POST',
    url: 'https://infinite-waters-70510.herokuapp.com/api/feminists',
    data: $(this).serialize()
  }).done(data => {
    console.log(data.feminist);
    App.createMarkerForFeminist(null, data.feminist);
    $('form').reset().hide();
  });
};

App.mapSetup = function() {
  $('header h1').show();
  $('main').html('<div id=\'map\'></div>');
  const canvas = document.getElementById('map');
  const mapOptions = {
    zoom: 13,
    center: new google.maps.LatLng(51.506178, -0.088369),
    styles: [{'featureType': 'water','elementType': 'geometry','stylers': [{'color': '#e9e9e9'},{'lightness': 17}]},{'featureType': 'landscape','elementType': 'geometry','stylers': [{'color': '#e2d8b5'},{'lightness': 0}]},{'featureType': 'road.highway','elementType': 'geometry.fill','stylers': [{'color': '#ffffff'},{'lightness': 17}]},{'featureType': 'road.highway','elementType': 'geometry.stroke','stylers': [{'color': '#ffffff'},{'lightness': 29},{'weight': 0.2}]},{'featureType': 'road.arterial','elementType': 'geometry','stylers': [{'color': '#ffffff'},{'lightness': 18}]},{'featureType': 'road.local','elementType': 'geometry','stylers': [{'color': '#be3075'},{'lightness': 16}]},{'featureType': 'poi','elementType': 'geometry','stylers': [{'color': '#e2d8b5'},{'lightness': 21}]},{'featureType': 'poi.park','elementType': 'geometry','stylers': [{'color': '#e2d8b5'},{'lightness': 21}]},{'elementType': 'labels.text.stroke','stylers': [{'visibility': 'on'},{'color': '#ffffff'},{'lightness': 16}]},{'elementType': 'labels.text.fill','stylers': [{'saturation': 36},{'color': '#be3075'},{'lightness': 40}]},{'elementType': 'labels.icon','stylers': [{'visibility': 'off'}]},{'featureType': 'transit','elementType': 'geometry','stylers': [{'color': '#e2d8b5'},{'lightness': -10}]},{'featureType': 'administrative','elementType': 'geometry.fill','stylers': [{'color': '#e2d8b5'},{'lightness': 20}]},{'featureType': 'administrative','elementType': 'geometry.stroke','stylers': [{'color': '#e2d8b5'},{'lightness': 17},{'weight': 1.2}]}]
  };
  this.map = new google.maps.Map(canvas, mapOptions);
  this.getFeminists();
};

App.getFeminists = function(){
  return $.get(`${this.api_url}/feminists`).done(this.loopThroughFeminists.bind(this));
};

App.loopThroughFeminists = function(data) {
  return $.each(data.feminists, this.createMarkerForFeminist.bind(this));
};

App.createMarkerForFeminist = function(index, feminist) {
  const latlng = new
  google.maps.LatLng(feminist.lat, feminist.lng);

  var icon = {
    url: '/images/pin-large.png', // url
    scaledSize: new google.maps.Size(40, 65), // scaled size
    origin: new google.maps.Point(0,0), // origin
    anchor: new google.maps.Point(0, 0) // anchor
  };

  const marker = new
  google.maps.Marker({
    position: latlng,
    map: this.map,
    animation: google.maps.Animation.DROP,
    icon

  });
  this.addInfoWindowForFeminist(feminist, marker);
};

App.addInfoWindowForFeminist = function(feminist, marker) {
  google.maps.event.addListener(marker, 'click', () => {
    if (typeof this.infowindow !== 'undefined')
      this.infowindow.close();
    this.infowindow = new google.maps.InfoWindow({
      content: `
      <div class="infowindow">
      <img class="suffragetteImage"src="${ feminist.image}">
      <h3>${feminist.name }</h3>
      <p>${ feminist.date}</p>
      <p>${ feminist.location}</p>
      <p>${ feminist.description}</p>
      </div>
      `
    });

    this.infowindow.open(this.map, marker);
    this.map.setCenter(marker.getPosition());
  });
};

App.loggedInState = function(){
  $('.loggedOut').hide();
  $('.loggedIn').show();
  this.mapSetup();
};

App.loggedOutState = function() {
  $('.loggedOut').show();
  $('.loggedIn').hide();
  this.homepage();
};

App.register = function() {
  if (event) event.preventDefault();
  this.$main.html( `
    <section class="container">
      <h2>Register</h2>
      <form method="post" action="/register">
      <div class="form-group">
        <input class="form-control" type="text" name="user[username]" placeholder="Username">
      </div>
      <div class="form-group">
        <input class="form-control" type="email" name="user[email]" placeholder="Email">
      </div>
      <div class="form-group">
        <input class="form-control" type="password" name="user[password]" placeholder="Password">
      </div>
      <div class="form-group">
        <input class="form-control" type="password" name="user[passwordConfirmation]" placeholder="Password Confirmation">
      </div>
      <input class="btn btn-primary" type="submit" value="Register">
      </form>
    </section>
  `);
};

App.login = function() {
  event.preventDefault();
  this.$main.html(`
    <section class="container">
      <h2>Login</h2>
      <form method="post" action="/login">
      <div class="form-group">
      <input class="form-control" type="email"
      name="email" placeholder="Email">
      </div>
      <div class="form-group">
      <input class="form-control" type="password"
      name="password" placeholder="Password">
      </div>
      <input class="btn btn-primary" type="submit"
      value="Login">
      </form>
    </section>
  `);
};

App.logout = function(){
  event.preventDefault();
  this.removeToken();
  this.loggedOutState();
};

App.handleForm = function(){
  event.preventDefault();

  const url = `${App.api_url}${$(this).attr('action')}`;
  const method = $(this).attr('method');
  const data = $(this).serialize();

  return App.ajaxRequest(url, method, data, (data) => {
    if (data.token) App.setToken(data.token);
    App.loggedInState();
  });
};

App.ajaxRequest = function(url, method, data, callback){
  return $.ajax({
    url,
    method,
    data,
    beforeSend: this.setRequestHeader.bind(this)
  })
  .done(callback)
  .fail(data => {
    console.log(data);
  });
};

App.setRequestHeader = function(xhr, settings) {
  return xhr.setRequestHeader('Authorization', `Bearer ${this.getToken()}`);
};

App.setToken = function(token){
  return window.localStorage.setItem('token', token);
};

App.getToken = function(){
  return window.localStorage.getItem('token');
};

App.removeToken = function(){
  return window.localStorage.clear();
};

$(App.init.bind(App));
