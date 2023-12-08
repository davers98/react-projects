import React, { useState } from 'react'
import SliderComp from './SliderComp'
import Title from '../components/Title'

export default function SliderApp() {
    const [SlideValue, setSlideValue] = useState(0)

    const handleSlideValueChange = (e) => {
        setSlideValue(e.target.value)
    }
    let bgColor;
    let textColor;

    if(SlideValue <= 25){
        bgColor = "red" 
    }
    if(SlideValue > 25 && SlideValue <= 50){
        bgColor = "blue"
    }
    if(SlideValue > 50 && SlideValue <= 75) {
        bgColor = "green"
        textColor = "white"
    }
    if(SlideValue > 75){
        bgColor = "orange"
        textColor = "white"
    }
    return (
        <div className='container text-center'>
            <Title text={"Slide to grow"} />
            <SliderComp setValue={SlideValue} handleInput={handleSlideValueChange} bgColor={bgColor} textColor={textColor}/>

        </div>
    )
}
