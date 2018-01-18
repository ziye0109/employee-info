import React from 'react';
import Card from './Card.js';
import './CardList.css';

export default (props) =>{


    let {cards,nextPage,lastPage} = props;

    let cardsContainer =  cards.map(card=>{

        let {id,first_name,last_name,avatar} = card;

        return (<div>   
        
            <Card id={id} firstName={first_name} lastName={last_name} url={avatar}/>
    
        </div>) 


    });

    return (<div className='cardlist'>

                <div className='cardlist-header'>User Profile</div>

                <div className='cardlist-pager'>
                    <div>
                        <a href='#' onClick={lastPage}><div className ='cardlist-pager-back'>Back</div></a>
                        <a href='#' onClick={nextPage}><div className ='cardlist-pager-next'>Next</div></a>
                    </div>
                </div>

                <div className='cardlist-content'>
                     {cardsContainer}
                </div>
                
                <div>


                </div>
            </div>)
    
}