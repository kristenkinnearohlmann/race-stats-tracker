import React from 'react'
import './About.css'
import CoolButton from './CoolButton'

const About = () => {
    return (
        <div className="about-wrapper">
            <div>
                <p>
                    About the site
                </p>
            </div>
            <div className="about-content-wrapper">
                <div>
                    <img alt="Woman running" src="https://res.cloudinary.com/du4oldiab/image/upload/v1623506873/race-stats-tracker/lincoln-2019-cropped_s70j16.jpg" />
                </div>
                <div>
                    <p>
                        <strong>Kristen Kinnear-Ohlmann</strong> is an amateur runner, developer, and data analyst from Bloomington, MN. After taking up running in earnest in 2009, she employed her love of data to create many lovely and complex Excel spreadsheets to track data in a way that conveyed meaning to her, in addition to a number of digital tools she used.
                    </p>
                    <p>
                        Race Stats Tracker is a migration of that work to a more interative tool.
                    </p>
                    <p>
                        To contact Kristen about run coaching: <a href="mailto:focusrunning.kko@gmail.com">focusrunning.kko@gmail.com</a>
                    </p>
                    <p>
                        To contact Kristen about development work: <a href="mailto:kristenkinnearohlmann@gmail.com">kristenkinnearohlmann@gmail.com</a> | <a href="https://github.com/kristenkinnearohlmann">GitHub</a>
                    </p>
                    <p>
                        Project code and contribution guide is located on GitHub: <a href="https://github.com/kristenkinnearohlmann/race-stats-tracker">race-stats-tracker</a>
                    </p>
                    <CoolButton />
                </div>
            </div>
        </div>
    )
}

export default About