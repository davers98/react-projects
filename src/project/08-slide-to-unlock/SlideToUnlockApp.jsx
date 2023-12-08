import React, { useState } from 'react'
import LockSlider from './LockSlider'
import { AiFillUnlock } from "react-icons/ai"
import LockScreenImg from "./img/LockScreen.jpg"
import HomeScreenImg from "./img/HomeScreen.jpg"

export default function SlideToUnlockApp() {

    const [UiProps, setUiProps] = useState({
      UiText: "Unlock Screen",
      UiColor: "#eee",
      UiBg: `url(${LockScreenImg}) center/cover no-repeat`
    })
    const [showLockSlider, setShowLockSlider] = useState(true)
    const [lockSliderValue, setLockSliderValue] = useState(0)
    const handleLockSliderInput = (e) => { 
        setLockSliderValue(e.target.value);
        
        // setShowLockSlider(false)
        
    };
  return (
    <div className="container text-center d-flex flex-column mt-1 border-20 shadow-md" style={{
        height: "70vh",
        marginTop: "15vh",
        width: 340,
        border: "4px solid #000",
        background: UiProps.UiBg
    }}>
            <h1 
            className='subtitle' 
            style={{color: UiProps.UiColor}}>
              {UiProps.UiText}
              </h1>
            {showLockSlider ? <LockSlider width={"250px"} handleInput={handleLockSliderInput} value={lockSliderValue}/> : <AiFillUnlock className='unlockIcon'/>}
            
            
    </div>
    
  )
}
