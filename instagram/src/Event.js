import React from 'react';
import './Event.css'
import {withProps,compose, branch, mapProps} from 'recompose';


const Event =  (props) => {

    let {eventName,eventDate} =props;

    return (<div className='event-section'>

                <div className='event-header'>
                    Event
                </div>
                <div className='event-content'>
                    <div>{eventName}</div>
                    <div>{eventDate}</div>
                </div>
    </div>
    )
}


//With Props
const EventWithData = withProps({eventName:'coding',eventDate:'01/18/2018'})(Event);



//Branch
let test = props => props.isLoading === 'true'? true:false;
let left = Component => ()=> (<div>Loading...</div>)
let right = Component => Component;

const BranchWithEvent = branch(props=>props.isLoading==='false',left,right)(EventWithData);



//Map Props 

const MapProps = mapProps(props=> ({
    eventName:'coding',
    eventDate:'01/18/2018'
}))(Event);


//




export default MapProps;