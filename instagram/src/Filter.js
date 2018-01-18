import React from 'react';
import './Filter.css'
import SliderFilter from './SliderFilter';




export default (props) => {

    return (<div className='filter-section'>

        <div className='filter-header'>
            Filter
        </div>

        <div className='filter-content'>


            <div className='filter-suggetstion-section'>
                <div className='filter-suggestion-label'> Tag</div>
                <div className='filter-suggestion'>
                    <span className='filter-suggestion-keyword'>Javascript</span>
                    <span className='filter-suggestion-keyword'>NodeJs</span>
                    <span className='filter-suggestion-keyword'>Java</span>
                    <span className='filter-suggestion-keyword'>C#</span>
                    <span className='filter-suggestion-keyword'>Database</span>
                    <span className='filter-suggestion-keyword'>Network</span>
                    <span className='filter-suggestion-keyword'>UX</span>
                    <span className='filter-suggestion-keyword'>Ruby</span>
                    <span className='filter-suggestion-keyword'>.Net</span>
                </div>
            </div>



            <div className='filter-dateRange-section'>
                <div className='filter-dateRange-label'>
                    Date Range
                 </div>
                <div classNmae='filter-dateRange'>
     

                    
                </div>
            </div>



            <div className='filter-age-section'>
                <div className='filter-age-label'>
                    Age
                </div>
                <div classNmae='filter-age'>

                    <SliderFilter />

                </div>
            </div>


            <div className='filter-gender-section'>
                <div className='filter-gender-label'>Gender</div>

                <div classNmae='filter-gender'>



                </div>
            </div>



            <div className='filter-availablity-section'>
                <div className='filter-availablity-label'>Avaiablity</div>

                <div className='filter-availablity'>

                </div>
            </div>


        </div>



    </div>
    )








}