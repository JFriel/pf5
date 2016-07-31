import React ,{ Component } from 'react';
import Container from './Container';

export default class DisplayInfo extends Component {
    

    render(){
       let data = APIcall();
       let containers = data.map(function(dataPoint){
            return <Container title={dataPoint['name']} description={dataPoint["description"]} address={dataPoint["address"]}/>;
        });
        if(containers.length <1){
            containers = "Sorry, no results Found"
        }
        return(
        <div>
        {containers}
        </div>
        );
    }
}
