import React, { useState } from 'react'
import LockSlider from './LockSlider'
import { AiFillUnlock } from "react-icons/ai"

export default function SlideToUnlockApp() {

    const [showLockSlider, setShowLockSlider] = useState(true)
  return (
    <div className="container text-center d-flex flex-column mt-1 border-20" style={{
        height: "70vh",
        marginTop: "15vh",
        width: 340,
        border: "4px solid #000"
    }}>
            <h1 className='subtitle'>Lock Screen</h1>
            {showLockSlider ? <LockSlider width={"250px"}/> : <AiFillUnlock className='unlockIcon'/>}
            
            
    </div>
    
  )
}
