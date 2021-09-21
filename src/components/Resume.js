import React from 'react'
import TypeWriterEffect from 'react-typewriter-effect';


function Resume() {

    return (
        <div className='resume-page'>
        <div className='resume-typing'>
            <TypeWriterEffect
                    textStyle={{
                        fontFamily: 'Press Start 2P',
                    }}
                    cursorColor="#ffffff"
                    multiText={[
                        'RESUME',
                    ]}
                    multiTextDelay={2500}
                    typeSpeed={150}
                />
        </div>
        <div className="resume-image">
        <img className="resume" src="https://i.imgur.com/ln4gxjH.png" alt="resume" />
        </div>
        <a href='https://drive.google.com/file/d/1l89jH9I7hev-7TvkJSnSpN6w5-QbGoVo/view?usp=sharing' target="_blank" rel="noopener noreferrer" download>
        <div className='take-one-typing'>
            <TypeWriterEffect
                    textStyle={{
                        fontFamily: 'Press Start 2P',
                    }}
                    cursorColor="#ffffff"
                    multiText={[
                        'Take a copy!',
                    ]}
                    multiTextDelay={2500}
                    typeSpeed={150}
                />
        </div>
        </a>
        </div>
    )
}

export default Resume
