import React, { Component } from 'react'
import{Spring, Transition, config} from 'react-spring/renderprops';

const API_KEY = "AIzaSyA4LrSdVLZLIS3p-Ql63s4c0sLBjyR5PXI "; /*Personal hetalpatel0976 */

class DistanceTrack extends Component {
    constructor(props) {
        super(props);
        this.state ={
            latituteFrom:34.0522,
            longitudeFrom:34.0522,
            latituteTo:34.0522,
            longitudeTo:34.0522,
            distance:null,
            duration:null

        }
    }
    // IMPORTANT NOTE: Must active Billing in order to receive data from google plateform
    componentDidMount(){
        let url = `https://maps.googleapis.com/maps/api/distancematrix/json?origins=33.866669|-117.566666&destinations=34.052235|-118.243683&units=imperial&key=${API_KEY}`;

        fetch(url)
        .then(response => response.json())
        .then(data =>{
            this.setState({
                duration: data.row.elements[0].duration
            });
            console.log(`duration ${this.state.duration}`);
        })
    }
    render () {
        return (
            <Spring
            from={{
                opacity:0,
                marginLeft:'-10px',  
            }}
            to={{
                opacity:1,
                marginLeft:'0px',
            
            }}
            config={{
                delay:100,
                duration:1000,
             
            }}>

                {
                    animate => (
                    <div className="half-cir half-cir-left" style={animate}>
                        {this.props.duration}
                    </div>
                    )

                }
            </Spring>
            
        )
    }
}

export default DistanceTrack