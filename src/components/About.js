import React, { useRef, useEffect } from "react";
import Typing from "./Typing";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { gsap } from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SocialIcon } from "react-social-icons";

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
                    <p>I am eagerly seeking remote opprotunities to welcome my expertise and enthusiasim for web design and development! If you or your team are pursuing a passionate and motivated Full-Stack Web Developer, <strong><u><a href="mailto:adrprogramming@gmail.com">lets get in touch! ✉️</a></u></strong></p>
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
                            <li data-aos="zoom-in-right">React w/ Router</li>
                            <li data-aos="zoom-in-right">JavaScript</li>
                            <li data-aos="zoom-in-right">HTML</li>
                            <li data-aos="zoom-in-right">CSS</li>
                        </ul>
                    </div>
                </div>
                    <div className='skill'>
                    <div className='design-skills'>
                        <h2 data-aos="zoom-in-up">UX/UI DESIGN</h2>
                        <ul>
                            <li data-aos="zoom-in-left">THREE.js</li>
                            <li data-aos="zoom-in-left">Tailwind</li>
                            <li data-aos="zoom-in-left">Bootstrap</li>
                        </ul>
                    </div>
                    </div>
                    <div className='skill'>
                    <div className="back-end-skills">
                        <h2 data-aos="zoom-in-up">Back End</h2>
                        <ul>
                            <li data-aos="zoom-in-right">Ruby</li>
                            <li data-aos="zoom-in-right">Rails</li>
                            <li data-aos="zoom-in-right">JWT</li>
                        </ul>
                    </div>
                    </div>
                    <div className='skill'>
                    <div className="other-skills">
                        <h2 data-aos="zoom-in-up">Other Skills</h2>
                        <ul>
                            <li data-aos="zoom-in-left">GitHub</li>
                            <li data-aos="zoom-in-left">Netlify</li>
                            <li data-aos="zoom-in-left">Written & Verbal Communication</li>
                            <li data-aos="zoom-in-left">Client Relationships</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="scroll-div2">
                <div className="scroll-container2">
                    <div ref={skillsRef2} className="scrolling-text2">
                    <SocialIcon
                        url="https://www.linkedin.com/in/tony-roscioli-dev/"
                        className="mr-3"
                        target="_blank"
                        fgColor="#fff"
                        style={{ height: 50, width: 50 }}
                    />
                    <SocialIcon
                        url="https://github.com/TonyRosh"
                        className="mr-3"
                        target="_blank"
                        fgColor="#fff"
                        style={{ height: 50, width: 50 }}
                    />
                    <SocialIcon
                        url="https://www.facebook.com/tony.roscioli"
                        className="mr-3"
                        target="_blank"
                        fgColor="#fff"
                        style={{ height: 50, width: 50 }}
                    />
                    <SocialIcon
                        url="https://twitter.com/tonyRoscioli"
                        className="mr-3"
                        target="_blank"
                        fgColor="#fff"
                        style={{ height: 50, width: 50 }}
                    />
                    <SocialIcon
                        url="https://medium.com/@TonyRosh"
                        className="mr-3"
                        target="_blank"
                        fgColor="#fff"
                        style={{ height: 50, width: 50 }}
                    />
                    <SocialIcon
                        url="https://www.linkedin.com/in/tony-roscioli-dev/"
                        className="mr-3"
                        target="_blank"
                        fgColor="#fff"
                        style={{ height: 50, width: 50 }}
                    />
                    <SocialIcon
                        url="https://github.com/TonyRosh"
                        className="mr-3"
                        target="_blank"
                        fgColor="#fff"
                        style={{ height: 50, width: 50 }}
                    />
                    <SocialIcon
                        url="https://www.facebook.com/tony.roscioli"
                        className="mr-3"
                        target="_blank"
                        fgColor="#fff"
                        style={{ height: 50, width: 50 }}
                    />
                    <SocialIcon
                        url="https://twitter.com/tonyRoscioli"
                        className="mr-3"
                        target="_blank"
                        fgColor="#fff"
                        style={{ height: 50, width: 50 }}
                    />
                    <SocialIcon
                        url="https://medium.com/@TonyRosh"
                        className="mr-3"
                        target="_blank"
                        fgColor="#fff"
                        style={{ height: 50, width: 50 }}
                    />
                    <SocialIcon
                        url="https://www.linkedin.com/in/tony-roscioli-dev/"
                        className="mr-3"
                        target="_blank"
                        fgColor="#fff"
                        style={{ height: 50, width: 50 }}
                    />
                    <SocialIcon
                        url="https://github.com/TonyRosh"
                        className="mr-3"
                        target="_blank"
                        fgColor="#fff"
                        style={{ height: 50, width: 50 }}
                    />
                    <SocialIcon
                        url="https://www.facebook.com/tony.roscioli"
                        className="mr-3"
                        target="_blank"
                        fgColor="#fff"
                        style={{ height: 50, width: 50 }}
                    />
                    <SocialIcon
                        url="https://twitter.com/tonyRoscioli"
                        className="mr-3"
                        target="_blank"
                        fgColor="#fff"
                        style={{ height: 50, width: 50 }}
                    />
                    <SocialIcon
                        url="https://medium.com/@TonyRosh"
                        className="mr-3"
                        target="_blank"
                        fgColor="#fff"
                        style={{ height: 50, width: 50 }}
                    />
                    <SocialIcon
                        url="https://www.linkedin.com/in/tony-roscioli-dev/"
                        className="mr-3"
                        target="_blank"
                        fgColor="#fff"
                        style={{ height: 50, width: 50 }}
                    />
                    <SocialIcon
                        url="https://github.com/TonyRosh"
                        className="mr-3"
                        target="_blank"
                        fgColor="#fff"
                        style={{ height: 50, width: 50 }}
                    />
                    <SocialIcon
                        url="https://www.facebook.com/tony.roscioli"
                        className="mr-3"
                        target="_blank"
                        fgColor="#fff"
                        style={{ height: 50, width: 50 }}
                    />
                    <SocialIcon
                        url="https://twitter.com/tonyRoscioli"
                        className="mr-3"
                        target="_blank"
                        fgColor="#fff"
                        style={{ height: 50, width: 50 }}
                    />
                    <SocialIcon
                        url="https://medium.com/@TonyRosh"
                        className="mr-3"
                        target="_blank"
                        fgColor="#fff"
                        style={{ height: 50, width: 50 }}
                    />
                    <SocialIcon
                        url="https://www.linkedin.com/in/tony-roscioli-dev/"
                        className="mr-3"
                        target="_blank"
                        fgColor="#fff"
                        style={{ height: 50, width: 50 }}
                    />
                    <SocialIcon
                        url="https://github.com/TonyRosh"
                        className="mr-3"
                        target="_blank"
                        fgColor="#fff"
                        style={{ height: 50, width: 50 }}
                    />
                    <SocialIcon
                        url="https://www.facebook.com/tony.roscioli"
                        className="mr-3"
                        target="_blank"
                        fgColor="#fff"
                        style={{ height: 50, width: 50 }}
                    />
                    <SocialIcon
                        url="https://twitter.com/tonyRoscioli"
                        className="mr-3"
                        target="_blank"
                        fgColor="#fff"
                        style={{ height: 50, width: 50 }}
                    />
                    <SocialIcon
                        url="https://medium.com/@TonyRosh"
                        className="mr-3"
                        target="_blank"
                        fgColor="#fff"
                        style={{ height: 50, width: 50 }}
                    />
                    <SocialIcon
                        url="https://www.linkedin.com/in/tony-roscioli-dev/"
                        className="mr-3"
                        target="_blank"
                        fgColor="#fff"
                        style={{ height: 50, width: 50 }}
                    />
                    <SocialIcon
                        url="https://github.com/TonyRosh"
                        className="mr-3"
                        target="_blank"
                        fgColor="#fff"
                        style={{ height: 50, width: 50 }}
                    />
                    <SocialIcon
                        url="https://www.facebook.com/tony.roscioli"
                        className="mr-3"
                        target="_blank"
                        fgColor="#fff"
                        style={{ height: 50, width: 50 }}
                    />
                    <SocialIcon
                        url="https://twitter.com/tonyRoscioli"
                        className="mr-3"
                        target="_blank"
                        fgColor="#fff"
                        style={{ height: 50, width: 50 }}
                    />
                    <SocialIcon
                        url="https://medium.com/@TonyRosh"
                        className="mr-3"
                        target="_blank"
                        fgColor="#fff"
                        style={{ height: 50, width: 50 }}
                    />
                    <SocialIcon
                        url="https://www.linkedin.com/in/tony-roscioli-dev/"
                        className="mr-3"
                        target="_blank"
                        fgColor="#fff"
                        style={{ height: 50, width: 50 }}
                    />
                    <SocialIcon
                        url="https://github.com/TonyRosh"
                        className="mr-3"
                        target="_blank"
                        fgColor="#fff"
                        style={{ height: 50, width: 50 }}
                    />
                    <SocialIcon
                        url="https://www.facebook.com/tony.roscioli"
                        className="mr-3"
                        target="_blank"
                        fgColor="#fff"
                        style={{ height: 50, width: 50 }}
                    />
                    <SocialIcon
                        url="https://twitter.com/tonyRoscioli"
                        className="mr-3"
                        target="_blank"
                        fgColor="#fff"
                        style={{ height: 50, width: 50 }}
                    />
                    <SocialIcon
                        url="https://medium.com/@TonyRosh"
                        className="mr-3"
                        target="_blank"
                        fgColor="#fff"
                        style={{ height: 50, width: 50 }}
                    />
                    <SocialIcon
                        url="https://www.linkedin.com/in/tony-roscioli-dev/"
                        className="mr-3"
                        target="_blank"
                        fgColor="#fff"
                        style={{ height: 50, width: 50 }}
                    />
                    <SocialIcon
                        url="https://github.com/TonyRosh"
                        className="mr-3"
                        target="_blank"
                        fgColor="#fff"
                        style={{ height: 50, width: 50 }}
                    />
                    <SocialIcon
                        url="https://www.facebook.com/tony.roscioli"
                        className="mr-3"
                        target="_blank"
                        fgColor="#fff"
                        style={{ height: 50, width: 50 }}
                    />
                    <SocialIcon
                        url="https://twitter.com/tonyRoscioli"
                        className="mr-3"
                        target="_blank"
                        fgColor="#fff"
                        style={{ height: 50, width: 50 }}
                    />
                    <SocialIcon
                        url="https://medium.com/@TonyRosh"
                        className="mr-3"
                        target="_blank"
                        fgColor="#fff"
                        style={{ height: 50, width: 50 }}
                    />
                    <SocialIcon
                        url="https://www.linkedin.com/in/tony-roscioli-dev/"
                        className="mr-3"
                        target="_blank"
                        fgColor="#fff"
                        style={{ height: 50, width: 50 }}
                    />
                    <SocialIcon
                        url="https://github.com/TonyRosh"
                        className="mr-3"
                        target="_blank"
                        fgColor="#fff"
                        style={{ height: 50, width: 50 }}
                    />
                    <SocialIcon
                        url="https://www.facebook.com/tony.roscioli"
                        className="mr-3"
                        target="_blank"
                        fgColor="#fff"
                        style={{ height: 50, width: 50 }}
                    />
                    <SocialIcon
                        url="https://twitter.com/tonyRoscioli"
                        className="mr-3"
                        target="_blank"
                        fgColor="#fff"
                        style={{ height: 50, width: 50 }}
                    />
                    <SocialIcon
                        url="https://medium.com/@TonyRosh"
                        className="mr-3"
                        target="_blank"
                        fgColor="#fff"
                        style={{ height: 50, width: 50 }}
                    />
                    <SocialIcon
                        url="https://www.linkedin.com/in/tony-roscioli-dev/"
                        className="mr-3"
                        target="_blank"
                        fgColor="#fff"
                        style={{ height: 50, width: 50 }}
                    />
                    <SocialIcon
                        url="https://github.com/TonyRosh"
                        className="mr-3"
                        target="_blank"
                        fgColor="#fff"
                        style={{ height: 50, width: 50 }}
                    />
                    <SocialIcon
                        url="https://www.facebook.com/tony.roscioli"
                        className="mr-3"
                        target="_blank"
                        fgColor="#fff"
                        style={{ height: 50, width: 50 }}
                    />
                    <SocialIcon
                        url="https://twitter.com/tonyRoscioli"
                        className="mr-3"
                        target="_blank"
                        fgColor="#fff"
                        style={{ height: 50, width: 50 }}
                    />
                    <SocialIcon
                        url="https://medium.com/@TonyRosh"
                        className="mr-3"
                        target="_blank"
                        fgColor="#fff"
                        style={{ height: 50, width: 50 }}
                    />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About;