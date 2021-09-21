import React from 'react'
import TypeWriterEffect from 'react-typewriter-effect';


function Resume() {

    return (
        <div>
        <div className='projects-typing'>
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
        <div className="resume-div">
        <img className="resume" src="https://i.imgur.com/rlJtb62.png" alt="resume" />
        </div>
        </div>
    )
}

export default Resume
