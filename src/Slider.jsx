import React from 'react'
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';

const Slider = ({data, index, leftButton, rightButton}) => {
  return (
    <div className='slider'>
        <button onClick={leftButton}><KeyboardArrowLeftIcon className='slider_button' /></button>
        <div className='content'>
           <div className='left_content'>
             <img className='person_photo' src={data[index].image} alt='name-of-placed-person' />
             <h4> {data[index].name} </h4>
             <img className='company_logo' src={data[index].company } alt="name-of-company"/>
           </div>
           <div className='right_content'>
             <p> {data[index].description} </p>
             <a href='https://www.geekster.in/student-testimony' target="_blank" rel="noreferrer"> Read More </a>
            </div>
        </div>
        <button onClick={rightButton}><KeyboardArrowRightIcon className='slider_button'/></button>
       </div>
  )
}

export default Slider