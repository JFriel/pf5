import React ,{ Component } from 'react';
import reactCSS from 'reactcss';

export default class Container extends Component {
    constructor(props){
        super(props);
    }
    render(){
        const styles = reactCSS({
            'default':{
                'div':{
                    'height':'200px',
                    'border':'2px solid black',
                    'textAlign':'center',
                    'fontSize': '16'
                }
            }
        })
        return(
        <div style={styles.div}>
        {this.props.title}<br/>
        {this.props.description}<br/>
        {this.props.address}
        </div>
        );
    }
}
