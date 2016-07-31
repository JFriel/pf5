import React ,{ Component } from 'react';
import Container from './Container';

const _ = require("lodash");

export default class DisplayInfo extends Component {
    constructor(props){
        super(props);
        this.state = {radius:'&distance=2',location:'',gender:'',need:'',tag:''}
    }
    setLocation = function(location) {
        let locationString = _.toString(location);
        this.setState({location: "&location=" + locationString + this.state.radius});
    };
    setGender = function(gender) {
        this.setState({gender:gender});
        this.setState({tags : "&tags=" + gender});
    };
    setNeed = function(need) {
        let needString = _.toString(need);
        if(needString === "hostel") {
        this.setState({need : needString});
        } else if (needString === "food bank") {
        this.setState({need : "food%20bank"})
        }   else {
        this.setState({need : "advice%20centre"})
        }
    };


createUrl = function() {
    let url = "https://www.aliss.org/api/v2/search/?q=";
    url = url + this.state.need + this.state.gender + this.statelocation;
    return url;
  };

  getVenues = function(callback) {
    const request = new XMLHttpRequest();
    request.open("GET", this.createUrl());
    request.onload = function() {
      if(request.responce= 200) {
        let jsonString = request.responseText;
        let returnedData = JSON.parse(jsonString);
        let parsedData = this.createVenueObjects(returnedData);
        return (parsedData);
      };
    }.bind(this);
    request.send(null);
  };

  createVenueObjects = function(returnedData) {
    const venueObjectArray = [];
    const rawVenues = returnedData['results'];
    for(const venue of rawVenues) {
      const venueObject = {
        name: "", 
        address: "", 
        description: "", 
        url: "",
        latitude: "",
        longitude: ""
      };
      for(let i = 0; i < venue['locations'].length; i++) {
        venueObject.name = venue.title;
        venueObject.address = venue['locations'][i].formatted_address;
        venueObject.description = venue.description;
        venueObject.url = venue.uri;
        venue.lat = venue['locations'][i].lat;
        venue.lng = venue['locations'][i].lon;
      };
      venueObjectArray.push(venueObject);
    };
    return venueObjectArray;
  };
    componentWillMount(){
        this.setLocation(this.props.postcode);
        this.setGender(this.props.gender);
        this.setNeed(this.props.need);
    }



    render(){
        let data = this.getVenues();
        let containers = '';
        setTimeout(()=>{
        containers = data.map(function(dataPoint){
            return <Container title={dataPoint['name']} description={dataPoint["description"]} address={dataPoint["address"]}/>;
        });
        return(
        <div>
        {containers}
        </div>);
        },3000)
        };
        
}
