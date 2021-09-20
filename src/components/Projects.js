import React from 'react'
import TypeWriterEffect from 'react-typewriter-effect';
import cssScrollSnapPolyfill from 'css-scroll-snap-polyfill'
// import { gsap } from 'gsap';
// import { ScrollTrigger } from "gsap/ScrollTrigger";

function Projects() {

    const init = function(){
	cssScrollSnapPolyfill()
}
init();

    return (
        <div>
            <div>
            <div className='projects-typing'>
                <TypeWriterEffect
                    textStyle={{
                        fontFamily: 'Press Start 2P',
                    }}
                    cursorColor="#d3d3d3"
                    multiText={[
                        'PROJECTS',
                    ]}
                    multiTextDelay={1500}
                    typeSpeed={75}
                />
            </div>
        </div>
        <div class="slider">
	<section>
		<h2 className='projects-title'><a href="http://www.roscioli.dev" target="_blank" rel="noreferrer">My THREE.js Universe</a></h2>
        <p>An amusing and intereactive way to get a glimpse into my life, this 3D universe was an absolute blast for me to build!</p>
        <a href="http://www.roscioli.dev" target="_blank" rel="noreferrer"><img src="https://i.imgur.com/in2rddO.jpg" alt="3d world" /></a>
	</section>
	<section>
		<h2 className='projects-title'>Sky Bear Brewery</h2>
        <p>The homepage for Sky Bear Brewery in Loveland Colorado! LINK COMING SOON!</p>
        <img src="https://i.imgur.com/puRZH9l.png" alt="3d world" />
	</section>
	<section>
		<h2 className='projects-title'>Snack Pak Records</h2>
        <p>A landing page for a mock record label! LINK COMING SOON!</p>
        <img src="https://i.imgur.com/cTe7HEV.jpg" alt="3d world" />
	</section>
	<section>
		<h2 className='projects-title'>Gym App</h2>
        <p>My first partnered project from my time at Flatiron School! LINK COMING SOON!</p>
        <img src="https://i.imgur.com/5J34s2N.jpg" alt="3d world" />
	</section>
</div>
<div>
            <div className='projects-typing'>
                <TypeWriterEffect
                    textStyle={{
                        fontFamily: 'Press Start 2P',
                    }}
                    cursorColor="#d3d3d3"
                    multiText={[
                        'SWIPE RIGHT',
                    ]}
                    multiTextDelay={1500}
                    typeSpeed={75}
                />
            </div>
        </div>
        </div>
    )
}

export default Projects
