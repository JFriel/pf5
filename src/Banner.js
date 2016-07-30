import React, { Component} from 'react';
import reactCSS from 'reactcss';


export default class Banner extends Component {
    render(){
        const styles = reactCSS({
            'default':{
                'div':{
                    'width': '100%',
                    'text-align':'center',
                    'border-bottom': '2px solid #2AFF31'
                },
                'header':{
                    'widht':'100%',
                    'textAlign':'center',
                    'fontFamily': 'sans-serif',
                    'font-size': '32px' 
                },
                'subtext':{
                    'width':'100%',
                    'textAlign':'center',
                    'color':'red'
                }
            }
        })

        return(
            <div style={styles.div}>
            <h1 style={styles.header}>Assistiva</h1>
            <h2 style={styles.subtext}> If you are in immediate danger, dial 999</h2>
            </div> 
        )
    }

}
