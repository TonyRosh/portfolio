import React from "react";
import Typing from "./Typing";

function About() {
    
    let randomSpeachBubble = () => {
        let speechBubbleArray = ['https://i.imgur.com/dWixIkt.png', 'https://i.imgur.com/TBYUeQE.png', 'https://i.imgur.com/qMQhe6S.png', 'https://i.imgur.com/UGNGnMJ.png', 'https://i.imgur.com/3V5fZ3u.png', 'https://i.imgur.com/GQXb8H1.png', 'https://i.imgur.com/XOEzuKR.png', 'https://i.imgur.com/0FzoRlW.png', 'https://i.imgur.com/aflmjjM.png', 'https://i.imgur.com/EnXnRF3.png', 'https://i.imgur.com/5HBznVL.png', 'https://i.imgur.com/H05yshs.png', 'https://i.imgur.com/UG0PsrN.png']
        let randomBubble = Math.floor(Math.random() * speechBubbleArray.length);
        return speechBubbleArray[randomBubble];
    }

    let randomImage = () => {
        let imagesArray = ['https://i.imgur.com/5kYCkbO.png', 'https://i.imgur.com/dHNyGxM.png', 'https://i.imgur.com/TsIIkjp.png', 'https://i.imgur.com/QJFf58C.png', 'https://i.imgur.com/7xPvMkh.png', 'https://i.imgur.com/qXtX2Lu.png', 'https://i.imgur.com/oFcFHtj.png', 'https://i.imgur.com/CXwne0r.png', 'https://i.imgur.com/QuguiOp.png', 'https://i.imgur.com/61DJZQq.png', 'https://i.imgur.com/pc8i2Dc.png', 'https://i.imgur.com/Y01ZirK.png', 'https://i.imgur.com/t00y5r6.png', 'https://i.imgur.com/uQLM6ye.png', 'https://i.imgur.com/TuHWZ9d.png', 'https://i.imgur.com/AO1bFnx.png', 'https://i.imgur.com/7UuZHI1.png']
        let randomPic = Math.floor(Math.random() * imagesArray.length);
        return imagesArray[randomPic];
    }

    let randomBackground = () => {
        let backgroundsArray = ['https://i.imgur.com/QTn8D4L.jpg', 'https://i.imgur.com/eJUy1Qi.jpg', 'https://i.imgur.com/hrDdBCT.jpg', 'https://i.imgur.com/eg8JPvU.png', 'https://i.imgur.com/txHyfdK.jpg', 'https://i.imgur.com/OE8AuYt.jpg']
        let randomPic = Math.floor(Math.random() * backgroundsArray.length);
        return backgroundsArray[randomPic];
    }
    
    return (
        <div>
        <div className='about'>
            <div className='about-image'>
                <img className='image' src={randomImage()} alt="my face" />
                <img className='speech-bubble' src={randomSpeachBubble()} alt="speech bubble" />
                <img className='background' src={randomBackground()} alt="speech bubble" />
            </div>
        </div>
        <Typing />
        </div>
    )
}

export default About;