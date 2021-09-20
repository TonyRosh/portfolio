import React from 'react'
import TypeWriterEffect from 'react-typewriter-effect';

function Typing() {
    return (
        <div>
            <div className='typing'>
                <TypeWriterEffect
                    textStyle={{
                        fontFamily: 'Press Start 2P',
                    }}
                    cursorColor="#d3d3d3"
                    multiText={[
                        'Software Engineer',
                        'Lifelong Learner',
                        'Pizza Enthusiast',
                        'Merrymaker',
                        'Music Producer',
                        'Foodie',
                        'Web Designer',
                        'Beach Addict',
                        'Concert Reveler',
                        'Dog Lover',
                        'Halloween Fanatic',
                        'Adventurer',
                        'Kind Human Being',
                        'Fullstack Developer',
                    ]}
                    multiTextDelay={1500}
                    typeSpeed={75}
                />
            </div>
        </div>
    )
}

export default Typing
