import React, { Component} from 'react';
import reactCSS from 'reactcss';


export default class Banner extends Component {
    render(){
        const styles = reactCSS({
            'default':{
                'div':{
                    'width': '80%',
                    'text-align':'center'
                },
                'header':{
                    'wifht':'100%',
                    'text-align':'center'
                },
                'subtext':{
                    'width':'100%',
                    'text-align':'center',
                    'color':'red'
                }
            }
        })

        return(
            <div>
            <h1 style={styles.header}>Temporary Name</h1>
            <h2 style={styles.subtext}> If you are in immediate danger, dial 999</h2>
            </div> 
        )
    }

}
