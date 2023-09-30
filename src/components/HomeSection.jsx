import React from 'react'
import arrow from '../assets/arrow-right.png'
import img from '../assets/groupImg.png'

const HomeSection = () => {
  return (
    <section>
        <div className="producer">
            <div className="homesection">
                <div className="textarea">
                    <h3 className="maintext">
                        Show Them <br />
                        Don’t Just Tell
                    </h3>
                    <p className="color3">
                        Help your friends and loved ones by creating and sending <br /> videos on how to get things done on a website.
                    </p>
                    <button className="btn">
                        Install HelpMeOut <img className="arrow" src={arrow} alt="" />
                    </button>
                </div>

                <div>
                    <img className="leftimg" src={img} alt="" />
                </div>
            </div>
        </div>
    </section>
  )
}

export default HomeSection