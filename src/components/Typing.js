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
                    startDelay={500}
                    cursorColor="#00ff00"
                    multiText={[
                        'Fullstack Web Developer',
                        'Lifelong Learner',
                        'Responsive Design',
                        'Merrymaker',
                        'Pizza Enthusiast',
                        'Music Producer',
                        'Foodie',
                        'Beach Addict',
                        'Concert Goer',
                        'Dog Lover',
                        'Adventurer',
                        'Kind Human Being',
                        'Tony Roscioli'
                    ]}
                    multiTextDelay={1500}
                    typeSpeed={75}
                />
            </div>
        </div>
    )
}

export default Typing
