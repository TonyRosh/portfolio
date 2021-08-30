import React from "react";
import image from "../bg.jpeg"

function Home() {
    return (
        <main>
            <img src={image} alt="dog picture" className="absolute object-cover w-full h-full"/>
            <section> 
                <h1>
                    HOLA! BONJOUR! HELLO! HALO! ALOHA!
                </h1>
            </section>
        </main>
    )
}

export default Home;