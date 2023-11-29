import React, { useState, useEffect } from 'react'
import Button from './Button'


export default function Alerts({ type, message, delay = false, delayTime = 5000 }) {
    const [showAlert, setShowAlert] = useState(true)
    const CloseAlert = (e) => {
        e.target.parentElement.parentElement.classList.add("fadedAlert");

        setTimeout(() => {
            setShowAlert(false);
        }, 500)

    };
    useEffect(() => {
        delay &&
            setTimeout(() => {
                setShowAlert(false);
            }, delayTime)
    });


    return showAlert && (
        <div className={`alert alert-${type}`}>
            <div className="alert-close">
                <span className="mr-1">{message}</span>
                <Button btnClass={"btn-close"} text='X' onClick={CloseAlert}></Button>
            </div>

        </div>


    )

}
