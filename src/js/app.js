const App = App || {};

App.api_url = "http://localhost:3000/api";

App.init = function() {
  this.eventListeners();
  this.mapSetup();
};

App.eventListeners = function() {
  this.$main  = $("main");

  $('.location').on('click', this.getCurrentLocation);
  $('.new').on('click', this.toggleForm);
  $(".register").on("click", this.register.bind(this));
  $(".login").on("click", this.login.bind(this));
  $(".logout").on("click", this.logout.bind(this));
  $(".home").on("click", this.mapSetup.bind(this));
  $('.dropdown-menu .dropdown-item').on('click', this.changeMapLocation);
  this.$main.on("submit", "form", this.handleForm);
  // this.$main.on('submit', 'form', this.addFeminist);

  if (this.getToken()) {
    this.loggedInState();
  } else {
    this.loggedOutState();
  }
};

App.changeMapLocation = function() {
  let id = $(this).attr('id').split(',');

  let latlng = new
  google.maps.LatLng(id[0],  id[1]);

  App.map.setCenter(latlng);
};

App.toggleForm = function() {
  $('form').slideToggle();
};

App.getCurrentLocation = function() {
  navigator.geolocation.getCurrentPosition( function (position) {
    let icon = {
               url:("./images/suffragette.png"), // url
               scaledSize: new google.maps.Size(50, 50), // scaled size
               origin:     new google.maps.Point(0,0), // origin
               anchor:     new google.maps.Point(0, 0) // anchor
             };
    let marker = new google.maps.Maker({
      position: new
      google.maps.LatLng(position.coords.latitude, position.coords.longitude),
      map: App.map,
      animation: google.maps.Animation.DROP,
      icon,
        scaledSize: new google.maps.Size(56, 56)
      }
    );
    googleMap.map.setCenter(marker.getPosition());
  });
};


App.addFeminist = function() {
  event.preventDefault();
  $.ajax({
    method: "POST",
    url: "http://localhost:3000/api/feminists",
    data: $(this).serialize()
  }).done(data => {
    console.log(data.feminist);
    App.createMarkerForFeminist(null, data.feminist);
    $('form').reset().hide();
  });
};

App.mapSetup = function() {
  $("main").html("<div id='map'></div>");
  let canvas = document.getElementById('map');
  let mapOptions = {
    zoom: 13,
    center: new google.maps.LatLng(51.506178, -0.088369),
    styles: [{"featureType":"all","elementType":"all","stylers":[{"color":"#d4b78f"},{"visibility":"on"}]},{"featureType":"all","elementType":"geometry.stroke","stylers":[{"color":"#0d0000"},{"visibility":"on"},{"weight":1}]},{"featureType":"administrative","elementType":"labels.text.fill","stylers":[{"color":"#98290e"},{"visibility":"on"}]},{"featureType":"administrative","elementType":"labels.text.stroke","stylers":[{"visibility":"off"}]},{"featureType":"administrative.province","elementType":"all","stylers":[{"visibility":"off"}]},{"featureType":"administrative.locality","elementType":"labels.text.fill","stylers":[{"color":"#98290e"},{"visibility":"on"}]},{"featureType":"administrative.locality","elementType":"labels.text.stroke","stylers":[{"visibility":"off"}]},{"featureType":"administrative.neighborhood","elementType":"all","stylers":[{"visibility":"on"}]},{"featureType":"landscape","elementType":"all","stylers":[{"color":"#d4b78f"},{"visibility":"on"}]},{"featureType":"poi","elementType":"all","stylers":[{"visibility":"off"}]},{"featureType":"poi.park","elementType":"all","stylers":[{"color":"#c4b17e"},{"visibility":"on"}]},{"featureType":"road","elementType":"labels.icon","stylers":[{"visibility":"off"}]},{"featureType":"road.highway","elementType":"geometry.stroke","stylers":[{"visibility":"off"}]},{"featureType":"road.highway","elementType":"labels.text.fill","stylers":[{"color":"#0d0000"},{"visibility":"on"}]},{"featureType":"road.highway","elementType":"labels.text.stroke","stylers":[{"color":"#d9be94"},{"visibility":"on"}]},{"featureType":"road.highway.controlled_access","elementType":"geometry.fill","stylers":[{"color":"#0d0000"},{"visibility":"off"},{"weight":2}]},{"featureType":"road.arterial","elementType":"all","stylers":[{"visibility":"off"}]},{"featureType":"road.local","elementType":"all","stylers":[{"visibility":"off"}]},{"featureType":"transit","elementType":"all","stylers":[{"visibility":"off"}]},{"featureType":"water","elementType":"geometry","stylers":[{"color":"#a8ac91"}]},{"featureType":"water","elementType":"labels.text.fill","stylers":[{"color":"#98290e"},{"visibility":"on"}]},{"featureType":"water","elementType":"labels.text.stroke","stylers":[{"visibility":"off"}]}]
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
  let latlng = new
  google.maps.LatLng(feminist.lat, feminist.lng);

  let marker = new
  google.maps.Marker({
    position: latlng,
    map: this.map,
    icon: {
      url: "https://pixabay.com/static/uploads/photo/2015/12/14/20/29/tracker-1093167_960_720.png",
      scaledSize: new
      google.maps.Size(56,56)
    }
  });
  this.addInfoWindowForFeminist(feminist, marker);
};

App.addInfoWindowForFeminist = function(feminist, marker) {
  google.maps.event.addListener(marker, 'click', () => {
    if (typeof this.infowindow != "undefined")
    this.infowindow.close();
    this.infowindow = new google.maps.InfoWindow({
      content: `
      <div class="infowindow">
      <img src="${ feminist.image}">
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
  $(".loggedOut").hide();
  $(".loggedIn").show();
  this.mapSetup();
};

App.loggedOutState = function() {
  $(".loggedOut").show();
  $(".loggedIn").hide();
  this.register();
};

App.register = function() {
  if (event) event.preventDefault();
  this.$main.html( `
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
  `);
};

App.login = function() {
  event.preventDefault();
  this.$main.html(`
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
  `);
};

App.logout = function(){
  event.preventDefault();
  this.removeToken();
  this.loggedOutState();
};

App.handleForm = function(){
  event.preventDefault();

  let url = `${App.api_url}${$(this).attr("action")}`;
  let method = $(this).attr("method");
  let data = $(this).serialize();

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
  return xhr.setRequestHeader("Authorization", `Bearer ${this.getToken()}`);
};

App.setToken = function(token){
  return window.localStorage.setItem("token", token);
};

App.getToken = function(){
  return window.localStorage.getItem("token");
};

App.removeToken = function(){
  return window.localStorage.clear();
};

$(App.init.bind(App));
