import React from 'react'
import './HeroVideo.css'

const HeroVideo = () => {
    const poster = "https://res.cloudinary.com/du4oldiab/image/upload/v1623378148/race-stats-tracker/running_09_videvo_poster_a6w9sg.jpg"
    const video = 'https://res.cloudinary.com/du4oldiab/video/upload/v1623376539/race-stats-tracker/running_09_videvo_wkncxu.mp4'
    return (
        <div>
            <video id="hero-video" autoPlay muted loop>
                <source src={video} poster={poster} type='video/mp4' />
                Your browser does not support video.
            </video>
        </div>
    )
}

export default HeroVideo