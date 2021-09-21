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
                        'RESUME COMING SOON!',
                    ]}
                    multiTextDelay={2500}
                    typeSpeed={150}
                />
                </div>
        </div>
    )
}

export default Resume
