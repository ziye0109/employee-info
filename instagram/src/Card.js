import React from 'react'
import './Card.css';
import 'bulma/css/bulma.css'
import "font-awesome/css/font-awesome.css";


export default (props) =>{

    let {id} = props;

    return (<div className='card'>
    
        <div><img src={`${props.url}`}/></div>

        <div className ='card-content-name'>
    
            <div> <i className="fa fa-user-o" aria-hidden="true"></i> <span>{props.firstName}</span> <span>{props.lastName}</span></div>
            
        </div>           
        
        <div className='card-content-title'>
        
            <div> FrontEnd Developer</div>
        
        </div>
        
        <div className='card-content-skill'>
        
            <div> Javascript Java C# </div>
    
       </div>


       <div className='card-content-description'>
        
              <div> Description </div>

        </div>


    
    </div>)

}

