import React, { Component } from 'react';
import reactCSS from 'reactcss';

import DisplayInfo from './DisplayInfo';

export default class DetailsForm extends Component {
    constructor(props){
        super(props);
        this.state = {gender:null, age:null,postcode:null,location:null,needs:[],dataInput:false};
    }

    handleGender(event){
        this.setState({gender: event.target.value});
    }
    handleAge(event){
        this.setState({age: event.target.value});
    }
    handlePostcode(event){
        this.setState({postcode: event.target.value});
    }
    handleLocation(){
        this.setState({location: 'EH3'});
    }
    handleNeeds(event){
        this.setState({needs: event.target.value});
    }
    handleSubmit(event){
        console.log('update?');
        this.setState({dataInput:true});
    }
    render(){
        const styles = reactCSS({
            'default':{
                'div':{
                    'width':'100%',
                    'margin': 'auto',
                    'textAlign':'center',
                    'fontSize':'20px'
                },
                'input':{
                    'textAlign':'center'
                },
                'button':{
                    'width':'200px',
                    'height':'35px'
                },
                'input':{
                    'text-align':'center'
                }
            }
        })
        if(this.state.dataInput === false){
            return(

            <div style={styles.div}>
                <form>
                    <h4>Tell us about yourself so we can find you the help you need</h4>
                    <input type='text' name='gender' placeholder='Gender' onChange={() =>{this.handleGender}} style={styles.input}/><br/>
                    <input type='text' name='age' placeholder='Age'onChange={()=>{this.handleAge}} style={styles.input}/><br/>
                    <h4>Tell us where you are:</h4>
                    <input type='text' name='Postcode' placeholder='Postcode'onChange={()=>{this.handlePostcode}} style={styles.input}/>
                    <h5>Or use your current location</h5>
                    <input type='button' name='CurrentLocation' value='Current Location'onChange={()=>{this.handleLocation}}/><br/>
                    <h3>What service do you need?</h3>
                    <input type='checkbox' name='Shelter'onChange={()=>{this.handleNeeds}}  style={styles.input}/>A Place To Stay<br/>

                    <input type='checkbox' name='Advice Centre' onChange={()=>{this.handleNeeds}} style={styles.input}/>An Advice Centre<br/>

                    <input type='checkbox' name='Food Bank'onChange={()=>{this.handleNeeds}} style={styles.input}/>A Food Bank<br/>
                </form>
                <br/>
                <button onClick={this.handleSubmit.bind(this)} style={styles.button}>Confirm Details and Continue</button>
                <br/>
                <br/>
                </div>
        )
        }else{
            return(
                <DisplayInfo gender={this.state.gender} age={this.state.age} postcode={this.state.postcode} location={this.state.location} needs={this.state.needs}/>    
            )
        }
    }        
}
