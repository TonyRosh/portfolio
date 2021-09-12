import React, { useRef, useEffect } from "react";
import Typing from "./Typing";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { gsap } from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

function About() {
    
    let randomSpeachBubble = () => {
        let speechBubbleArray = ['https://i.imgur.com/dWixIkt.png', 'https://i.imgur.com/qMQhe6S.png', 'https://i.imgur.com/0FzoRlW.png', 'https://i.imgur.com/0FzoRlW.png', 'https://i.imgur.com/aflmjjM.png', 'https://i.imgur.com/aflmjjM.png', 'https://i.imgur.com/aflmjjM.png', 'https://i.imgur.com/aflmjjM.png', 'https://i.imgur.com/aflmjjM.png', 'https://i.imgur.com/aflmjjM.png', 'https://i.imgur.com/aflmjjM.png', 'https://i.imgur.com/EnXnRF3.png', 'https://i.imgur.com/5HBznVL.png', 'https://i.imgur.com/H05yshs.png', 'https://i.imgur.com/H05yshs.png', 'https://i.imgur.com/H05yshs.png', 'https://i.imgur.com/H05yshs.png', 'https://i.imgur.com/H05yshs.png', 'https://i.imgur.com/H05yshs.png', 'https://i.imgur.com/H05yshs.png', 'https://i.imgur.com/UG0PsrN.png']
        let randomBubble = Math.floor(Math.random() * speechBubbleArray.length);
        return speechBubbleArray[randomBubble];
    }

    let randomImage = () => {
        let imagesArray = ['https://i.imgur.com/5kYCkbO.png','https://i.imgur.com/5kYCkbO.png','https://i.imgur.com/5kYCkbO.png','https://i.imgur.com/5kYCkbO.png','https://i.imgur.com/5kYCkbO.png','https://i.imgur.com/5kYCkbO.png','https://i.imgur.com/5kYCkbO.png', 'https://i.imgur.com/dHNyGxM.png', 'https://i.imgur.com/TsIIkjp.png', 'https://i.imgur.com/QJFf58C.png', 'https://i.imgur.com/QJFf58C.png', 'https://i.imgur.com/QJFf58C.png', 'https://i.imgur.com/QJFf58C.png', 'https://i.imgur.com/QJFf58C.png', 'https://i.imgur.com/QJFf58C.png', 'https://i.imgur.com/QJFf58C.png', 'https://i.imgur.com/7xPvMkh.png', 'https://i.imgur.com/oFcFHtj.png', 'https://i.imgur.com/CXwne0r.png', 'https://i.imgur.com/QuguiOp.png', 'https://i.imgur.com/61DJZQq.png', 'https://i.imgur.com/uQLM6ye.png', 'https://i.imgur.com/TuHWZ9d.png', 'https://i.imgur.com/TuHWZ9d.png', 'https://i.imgur.com/TuHWZ9d.png', 'https://i.imgur.com/TuHWZ9d.png', 'https://i.imgur.com/TuHWZ9d.png', 'https://i.imgur.com/TuHWZ9d.png', 'https://i.imgur.com/TuHWZ9d.png']
        let randomPic = Math.floor(Math.random() * imagesArray.length);
        return imagesArray[randomPic];
    }

    let randomBackground = () => {
        let backgroundsArray = ['https://i.imgur.com/QTn8D4L.jpg', 'https://i.imgur.com/eJUy1Qi.jpg', 'https://i.imgur.com/hrDdBCT.jpg', 'https://i.imgur.com/eg8JPvU.png', 'https://i.imgur.com/txHyfdK.jpg', 'https://i.imgur.com/OE8AuYt.jpg']
        let randomPic = Math.floor(Math.random() * backgroundsArray.length);
        return backgroundsArray[randomPic];
    }

    AOS.init();

    const skillsRef = useRef(null);

    useEffect(() => {
        gsap.to(".scrolling-text", {
            scrollTrigger: {
            trigger: ".scrolling-text",
            scrub: 3,
            start: "top bottom",
            end: "bottom top"
        },
        xPercent: -50
        });
    }, []);

    const skillsRef2 = useRef(null);

    useEffect(() => {
        gsap.to(".scrolling-text2", {
            scrollTrigger: {
            trigger: ".scrolling-text2",
            scrub: 3,
            start: "top bottom",
            end: "bottom top",
        },
        xPercent: -50
        });
    }, []);

    
    return (
        <div className="about">
            <Typing />
            <div className='about-image'>
                <img className='image' src={randomImage()} alt="my face" />
                <img className='speech-bubble' src={randomSpeachBubble()} alt="speech bubble" />
                <img className='background' src={randomBackground()} alt="speech bubble" />
            </div>
            <div className='about-text-container'>
            <div className='about-text' data-aos="zoom-in-up">
                    <h2>Welcome!</h2>
                    <p>I'm Tony Roscioli, a 30 year-old Full-Stack Software Engineer residing in colorful Colorado.</p>
                    <p>I am eagerly seeking remote opprotunities to welcome my expertise and enthusiasim for web design and development! If you or your team are pursuing a passionate and motivated Full-Stack Web Developer, <strong><u><a href="mailto:adrprogramming@gmail.com">lets get in touch!</a></u></strong></p>
            </div>
            </div>
            <div className="scroll-div">
                <div className="scroll-container">
                    <div ref={skillsRef} className="scrolling-text">
                        <h2>👨🏻‍💻SKILLS👨🏻‍💻SKILLS👨🏻‍💻SKILLS👨🏻‍💻SKILLS👨🏻‍💻SKILLS👨🏻‍💻SKILLS👨🏻‍💻SKILLS👨🏻‍💻SKILLS👨🏻‍💻SKILLS👨🏻‍💻SKILLS👨🏻‍💻SKILLS👨🏻‍💻SKILLS👨🏻‍💻SKILLS👨🏻‍💻SKILLS👨🏻‍💻SKILLS👨🏻‍💻SKILLS👨🏻‍💻SKILLS👨🏻‍💻SKILLS👨🏻‍💻SKILLS👨🏻‍💻SKILLS👨🏻‍💻</h2>
                    </div>
                </div>
            </div>
            <div className="skills-container">
                <div className='skill'>
                    <div className='front-end-skills'>
                        <h2 data-aos="zoom-in-up">Front End</h2>
                        <ul>
                            <li data-aos="fade-up-left">React w/ Router</li>
                            <li data-aos="fade-up-left">JavaScript</li>
                            <li data-aos="fade-up-left">HTML</li>
                            <li data-aos="fade-up-left">CSS</li>
                        </ul>
                    </div>
                </div>
                    <div className='skill'>
                    <div className='design-skills'>
                        <h2 data-aos="zoom-in-up">UX/UI DESIGN</h2>
                        <ul>
                            <li data-aos="fade-up-right">THREE.js</li>
                            <li data-aos="fade-up-right">Tailwind</li>
                            <li data-aos="fade-up-right">Bootstrap</li>
                        </ul>
                    </div>
                    </div>
                    <div className='skill'>
                    <div className="back-end-skills">
                        <h2 data-aos="zoom-in-up">Back End</h2>
                        <ul>
                            <li data-aos="fade-up-left">Ruby</li>
                            <li data-aos="fade-up-left">Rails</li>
                            <li data-aos="fade-up-left">JWT</li>
                        </ul>
                    </div>
                    </div>
                    <div className='skill'>
                    <div className="other-skills">
                        <h2 data-aos="zoom-in-up">Other Skills</h2>
                        <ul>
                            <li data-aos="fade-up-right">GitHub</li>
                            <li data-aos="fade-up-right">Netlify</li>
                            <li data-aos="fade-up-right">Written & Verbal Communication</li>
                            <li data-aos="fade-up-right">Client Relationships</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="scroll-div2">
                <div className="scroll-container2">
                    <div ref={skillsRef2} className="scrolling-text2">
                        <h2>👋🏼THANKS FOR STOPPING BY!👋🏼THANKS FOR STOPPING BY!👋🏼THANKS FOR STOPPING BY!👋🏼THANKS FOR STOPPING BY!👋🏼THANKS FOR STOPPING BY!👋🏼THANKS FOR STOPPING BY!👋🏼THANKS FOR STOPPING BY!👋🏼</h2>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About;