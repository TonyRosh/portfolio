import React from "react";
import Typing from "./Typing";

function About() {
    
    
    return (
        <div>
        <div className='about'>
            <div className='about-image'>
                <img className='image' src="https://i.imgur.com/7xPvMkh.png" alt="my face" />
                <img className='speech-bubble' src="https://i.imgur.com/B6dS3Tq.png" alt="speech bubble" />
            </div>
        </div>
        <Typing />
        </div>
    )
}

export default About;