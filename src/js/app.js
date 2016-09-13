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
  this.$main.on("submit", "form", this.handleForm);
  // this.$main.on('submit', 'form', this.addFeminist);

  if (this.getToken()) {
    this.loggedInState();
  } else {
    this.loggedOutState();
  }
};

App.toggleForm = function() {
  $('form').slideToggle();
};

App.getCurrentLocation = function() {
  navigator.geolocation.getCurrentPosition( function (position) {
    let marker = new google.maps.Maker({
      position: new
      google.maps.LatLng(position.coords.latitude, position.coords.longitude),
      map: App.map,
      animation: google.maps.Animation.Drop,
      icon: {
        url: "http://furtaev.ru/preview/user_on_map_2_small.png",
        scaledSize: new
        google.maps.Size(56, 56)
      }
    });
    App.map.setCenter(marker.getPosition());
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
    mapTypeId: google.maps.MapTypeId.ROADMAP
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
