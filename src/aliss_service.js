const _ = require("lodash");

const AlissService = function() {

  this.radius = "&distance=2";
  this.location = "";
  this.gender = "";
  this.need = "";


  this.setLocation = function(location) {
    let locationString = _.toString(location);
    this.location = "&location=" + locationString + this.radius;
  };

  this.setGender = function(gender) {
    let genderString = _.toString(gender);
    this.tags = "&tags=" + genderString;
  };

  this.setNeed = function(need) {
    let needString = _.toString(need);
    if(needString === "hostel") {
      this.need = needString;
    } else if (needString === "food bank") {
      this.need = "food%20bank"
    } else {
      this.need = "advice%20centre"
    }
  };

  this.createUrl = function() {
    const url = "https://www.aliss.org/api/v2/search/?q=";
    url = url + this.need + this.gender + this.location;
  };

  this.getVenues = function(callback) {
    const request = new XMLHttpRequest();
    request.open("GET", this.createUrl());
    request.onload = function() {
      if(request.status = 200) {
        let jsonString = request.responseText;
        let returnedData = JSON.parse(jsonString);
        let parsedData = this.createVenueObjects(returnedData);

        callback(parsedData);
      };
    }.bind(this);
    request.send(null);
  };

  this.createVenueObjects = function(returnedData) {
    const venueObjectArray = [];
    const rawVenues = returnedData[results];

    for(const venue of rawVenues) {
      const venueObject = {
        name: "", 
        address: "", 
        description: "", 
        url: "",
        latitude: "",
        longitude: ""
      };
      for(i = 0; i < rawVenues.locations.length; i++) {
        venueObject.name = venue.title;
        venueObject.address = venue[locations][i].formatted_address;
        venueObject.description = venue.description;
        venueObject.url = venue.uri;
        venue.lat = venue[locations][i].lat;
        venue.latLng.lng = venue[locations][i].lon;
      };
      venueObjectArray.push(venueObject);
    };
    return venueObjectArray;
  };

};

module.exports = AlissService;