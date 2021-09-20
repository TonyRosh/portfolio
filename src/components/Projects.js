import React from 'react'
import TypeWriterEffect from 'react-typewriter-effect';

function Projects() {
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
        </div>
    )
}

export default Projects
