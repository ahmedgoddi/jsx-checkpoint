import React from "react";
import Img1 from '../image/logo-2582748_1280.png'
import './style.css'






const myStyle = {
    border : "solid 1px black",
    maxWidth : "100vw"
}


const Code = () =>{
    return (
        <div style={myStyle}>
            <h1 className ="title-red"> AHMED GODDI</h1>
            <br/>
            <img className="imag1" src={Img1} alt="react-logo"/>
            <br/>
            <img className="imag1" src="CSS3_logo_and_wordmark.svg.png" alt="react-logo2"/>           
        </div>
    )
}


export default Code 