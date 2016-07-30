import React, { Component } from 'react';

import Banner from './Banner';
import DetailsForm from './DetailsForm';

export default class App extends Component {
  
  getFormData(data){
    console.log("allo");
    console.log(data);
    this.setState(data);
  }

  render(){
    return (
        <div>
        <Banner/>
        <DetailsForm formData={this.getFormData.bind(this)}/>
        </div>
    );
  }
}
