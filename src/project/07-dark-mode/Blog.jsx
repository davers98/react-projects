import React, { useContext } from 'react'
import Title from '../components/Title'
import Button from '../components/Button'
import { ThemeContext } from './context/theme-context';

export default function Blog() {

    const { theme, changeTheme } = useContext(ThemeContext);
    return (
        <div className="container p-1 text-center">

            <Title text={`Working with ${theme} Theme`} />
            <span 
            style={{ 
                position: "absolute", 
                top: 10, 
                right: 10 }}>

                <Button 
                text={theme === "Dark" ? "Day" : "Night"} 
                btnClass={theme === "Dark" ? "btn-light btn-sm" : "btn-dark btn-sm"} 
                onClick={changeTheme} />
            </span>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reprehenderit aliquam quae quibusdam error vel blanditiis explicabo placeat itaque cum fuga natus soluta voluptatibus, ipsam laudantium repudiandae. Ipsa deserunt quam temporibus.</p>

        </div>
    )
}
