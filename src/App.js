import React, { useState } from 'react'
import {data} from "./data"
import Slider from './Slider';

const App = () => {
  
  const [index, setIndex] = useState(0)
  const [color] = useState({filter: "brightness(40%)"})
  const [state, setState] = useState({
    index1 : false,
    index2: true,
    index3: true,
    index4: true,
    index5: true,
    index6: true,
    index7: true,
    index8: true,
    index9: true,
    index10: true
  })
  console.log(index)
  
  const changeColorForRight = () => {
    if(index === 0){
      setState({...state, index1: true, index2: false})
     }
      if(index === 1){
      setState({...state, index2: true, index3: false})
     }
      if(index === 2){
      setState({...state, index3: true, index4: false})
     }
      if(index === 3){
      setState({...state, index4: true, index5: false})
     }
      if(index === 4){
      setState({...state, index5: true, index6: false})
     }
      if(index === 5){
      setState({...state, index6: true, index7: false})
     }
      if(index === 6){
      setState({...state, index7: true, index8: false})
     }
      if(index === 7){
      setState({...state, index8: true, index9: false})
     }
      if(index === 8){
      setState({...state,index9: true, index10: false})
     }

      if(index === 9){
      setState({
        index1 : false,
        index2: true,
        index3: true,
        index4: true,
        index5: true,
        index6: true,
        index7: true,
        index8: true,
        index9: true,
        index10: true
      })
     }
  }

  const changeColorForLeft = () => {
    setState({
      index1 : true,
      index2: true,
      index3: true,
      index4: true,
      index5: true,
      index6: true,
      index7: true,
      index8: true,
      index9: true,
      index10: false
    })
    if(index === 9){
      setState({...state, index10: true, index9: false})
    }
    if(index === 8){
      setState({...state, index9: true, index8: false})
    }
    if(index === 7){
      setState({...state, index8: true, index7: false})
    }
    if(index === 6){
      setState({...state, index7: true, index6: false})
    }
    if(index === 5){
      setState({...state, index6: true, index5: false})
    }
    if(index === 4){
      setState({...state, index5: true, index4: false})
    }
    if(index === 3){
      setState({...state, index4: true, index3: false})
    }
    if(index === 2){
      setState({...state, index3: true, index2: false})
    }
    if(index === 1){
      setState({...state, index2: true, index1: false})
    }
  }

  const rightButton = () => {
     if(index === data.length-1){
      setIndex(0)
     }else{
      setIndex(index+1)
     }
     changeColorForRight()
  }

  const leftButton = () => {
    if(index === 0){
      setIndex(data.length-1)
    }else{
      setIndex(index-1)
    }
    changeColorForLeft()
  }

  return (
    <div className='App'>
       <div className='header'>
        <h1> <span style={{color: "#2cbb68"}}> Thousands </span> of lives changed </h1>
        <p> Hear it from the ones who have been on this journey already </p>
       </div>
       <div className='mid_container'>
       <div className='left_image_container'>
        <div className='top-image'>
          <img  style={state.index1 ? color : null} src={data[0].image}  alt="person placed of geekster"/>
          <img style={state.index2 ? color : null} src={data[1].image}  alt="person placed of geekster"/>
        </div>
        <div className='mid-image'>
          <img style={state.index3 ? color : null} src={data[2].image}  alt="person placed of geekster"/>
        </div>
        <div className='bottom-image'>
          <img style={state.index4 ? color : null} src={data[3].image}  alt="person placed of geekster"/>
          <img style={state.index5 ? color : null} src={data[4].image}  alt="person placed of geekster"/>
        </div>
       </div>

       <Slider data={data} index={index} rightButton={rightButton} leftButton={leftButton}/>

       <div className='right_image_container'>
        <div className='top-image'>
          <img style={state.index6 ? color : null} src={data[5].image}  alt="person placed of geekster"/>
          <img style={state.index7 ? color : null} src={data[6].image}  alt="person placed of geekster"/>
        </div>
        <div className='mid-image'>
          <img style={state.index8 ? color : null} src={data[7].image}  alt="person placed of geekster"/>
        </div>
        <div className='bottom-image'>
          <img style={state.index9 ? color : null} src={data[8].image}  alt="person placed of geekster"/>
          <img style={state.index10 ? color : null} src={data[9].image}  alt="person placed of geekster"/>
        </div>
       </div>
       </div>
       
       <div className='more'>
        <a href='https://www.geekster.in/student-testimony' target="_blank" rel="noreferrer"><button> Read More Testimonials</button></a>
       </div>
    </div>
  )
}

export default App