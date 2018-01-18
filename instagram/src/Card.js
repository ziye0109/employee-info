import React from 'react'
import './Card.css';

export default (props) =>{

    let {id} = props;

    return (<div className='card'>
    
        <div><img src={`${props.url}`}/></div>

        <div className ='card-content-name'>
            <span>{props.firstName}</span> <span>{props.lastName}</span>
        </div>           
        
        <div className='card-content-title'>
        
            <div> FrontEnd Developer</div>
        
        </div>
        
        <div className='card-content-skill'>
        
            <div> Javascript </div>
    
       </div>

    
    </div>)

}

