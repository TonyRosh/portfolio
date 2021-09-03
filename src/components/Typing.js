import React from 'react'
import TypeWriter from 'react-typewriter';

function Typing() {
    return (
        <div className='typing'>
            <TypeWriter typing={1} style={{color: 'blue'}}>Hey there! Thanks for stopping by!</TypeWriter>
        </div>
    )
}

export default Typing
