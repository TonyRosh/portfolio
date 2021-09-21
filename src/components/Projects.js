import React from 'react'
import TypeWriterEffect from 'react-typewriter-effect';
import cssScrollSnapPolyfill from 'css-scroll-snap-polyfill'

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
                    cursorColor="#ffffff"
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
		<h2 className='projects-title'>My THREE.js Universe</h2>
        <p>An amusing and intereactive way to get a glimpse into my life, this 3D universe was an absolute blast for me to build! Check out the <a className="projects-links" href="https://github.com/TonyRosh/tonys-universe">GitHub Repo Here!</a> </p>
        <a href="https://github.com/TonyRosh/tonys-universe" target="_blank" rel="noreferrer"><img src="https://i.imgur.com/in2rddO.jpg" alt="3d world" /></a>
	</section>
	<section>
		<h2 className='projects-title'>Sky Bear Brewery</h2>
        <p>The homepage for Sky Bear Brewery in Loveland Colorado! Check out the <a className="projects-links" href="https://github.com/TonyRosh/brewery-frontend">Front End Here</a> and the <a className="projects-links" href="https://github.com/TonyRosh/brewery_backend">Back End Here,</a> or click the image for a YouTube demo!</p>
        <a href="https://www.youtube.com/watch?v=aIBO73XwNDA&t=73s" target="_blank" rel="noreferrer"><img src="https://i.imgur.com/puRZH9l.png" alt="Sky Bear Brewery" /></a>
	</section>
	<section>
		<h2 className='projects-title'>Snack Pak Records</h2>
        <p>A landing page for a mock record label! Check out the <a className="projects-links" href="https://github.com/TonyRosh/snack-pak-frontend">Front End Here</a> and the <a className="projects-links" href="https://github.com/TonyRosh/snack-pak-backend">Back End Here,</a> or click the image for a YouTube demo!</p>
        <a href="https://www.youtube.com/watch?v=pJ9tbZiHnVQ&t=15s" target="_blank" rel="noreferrer"><img src="https://i.imgur.com/cTe7HEV.jpg" alt="Snack Pak Records" /></a>
	</section>
	<section>
		<h2 className='projects-title'>Gym App</h2>
        <p>My first partnered project from my time at Flatiron School! Check out the <a className="projects-links" href="https://github.com/TonyRosh/gym-app">GitHub Repo Here,</a> or click the image for a YouTube demo!</p>
        <a href="https://www.youtube.com/watch?v=3QUCyPf4BEI" target="_blank" rel="noreferrer"><img src="https://i.imgur.com/5J34s2N.jpg" alt="Gym App" /></a>
	</section>
</div>
<div>
            <div className='swipe-right-typing'>
                <TypeWriterEffect
                    textStyle={{
                        fontFamily: 'Press Start 2P',
                    }}
                    cursorColor="#ffffff"
                    multiText={[
                        '← SWIPE →',
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
