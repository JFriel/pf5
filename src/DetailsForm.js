import React, { Component } from 'react';
import reactCSS from 'reactcss';

export default class DetailsForm extends Component {
    constructor(props){
        super(props);
        this.state = {gender:null, age:null,postcode:null,location:null,needs:[]};
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
    handleLocation(event){
        this.setState({location: event.target.value});
    }
    handleNeeds(event){
        this.setState({needs: event.target.value});
    }
    handleSubmit(event){
        event.preventDefault();
        this.props.formData({gender:this.state.gender,age:this.state.age,postcode:this.state.postcode});
    }
    render(){
        const styles = reactCSS({
            'default':{
                'div':{
                    'textAlign':'center'
                },
                'input':{
                    'textAlign':'center'
                }
            }
        })
        return(
            <div style={styles.div}>
            <form onSubmit={() => {this.handleSubmit}}>
                <h3>Tell us about yourself so we can find you the help you need</h3>
                <input type='text' name='gender' placeholder='gender' onChange={() =>{this.handleGender}}/><br/>
                <input type='text' name='age' placeholder='age'onChange={()=>{this.handleAge}}/><br/>

                <h3>Tell us where you are:</h3>
                <input type='text' name='Postcode' placeholder='Postcode'onChange={()=>{this.handlePostcode}}/><br/>
                <h3>Or use your current location</h3>
                <input type='button' name='CurrentLocation' value='Current Location'onChange={()=>{this.handleLocation}}/><br/>

                <h3>What service do you need?</h3>
                <input type='checkbox' name='Shelter'onChange={()=>{this.handleNeeds}}/>A Place To Stay<br/>

                <input type='checkbox' name='Advicde Centre' onChange={()=>{this.handleNeeds}}/>An Advice Centre<br/>

                <input type='checkbox' name='Food Bank'onChange={()=>{this.handleNeeds}}/>A Food Bank<br/>
                <input type='submit' name='Submit' onClick = {() => {this.handleSubmit}}/>
            </form>
            </div>
        );
    }        
}
