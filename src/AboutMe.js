import { useState } from 'react'
import './App.css'

function AboutMe() {

    const images = [
        '/aboutme/image-1.jpg',
        '/aboutme/image-2.jpg',
        '/aboutme/image-3.jpg',
        // '/aboutme/image-4.jpg',
        // '/aboutme/image-5.jpg',
    ]

    const [currentImage, setCurrentImage] = useState(0)
    const previousImage = () => {
        setCurrentImage(current => (current - 1 + images.length) % images.length)
    }
        const nextImage = () => {
        setCurrentImage(current => (current + 1) % images.length)
    }

    return (
        <>
            <div className="App">
                <header className="App-header aboutme-page">
                    <div className="AboutMe">
                        <div className="image-container">
                            <button onClick={previousImage}>
                                <img
                                    src="/icon/next.png"
                                    alt="Previous"
                                    className="previous-img"
                                />
                            </button>
                            <img
                                src={images[currentImage]}
                                alt="About me"
                                className="about-image"
                            />
                            <button onClick={nextImage}>
                                <img
                                    src="/icon/next.png"
                                    alt="Next"
                                    className="next-img"
                                />
                            </button>
                        </div>
                        <div>
                            <div className="full-name">
                                <p className="hello"> HELLO! I AM</p>
                                <h1 className="first-name">
                                    Sofia Paris
                                </h1>
                                <h1 className="last-name">
                                    Arrieta
                                </h1>
                            </div>
                            <div className="about-description">
                                <h1 className="about-heading">
                                    ABOUT ME!
                                </h1>
                                <p className="about-paragraph"> 
                                    Hi, I’m Sofia Paris Arrieta, better known as Pawie. A second-year BSIT student who’s deeply passionate about the world of art, so much so that it feels like a core part of who I am. Basically, I’m 50% paintbrushes, 50% pixels, and 100% obsessed with the color pink and sunflowers. <br /><br />
                                    While my degree grounds me in the technical side of computing, my heart has always belonged to creativity. That passion led me to join SAMAHAN Systems Development as a UI/UX designer,  and excited to bridge that gap even further by learning front-end development so I can bring my own designs to life through code. 

                                </p>
                            </div>
                        </div>

                    </div>
                </header>
            </div>
        </>
    )
}

export default AboutMe;