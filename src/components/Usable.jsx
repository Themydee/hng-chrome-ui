import React from 'react'
import imagery from '../assets/rec.png'
const Usable = () => {
  return (
    <section>
        <div className="producer">
            <div className="center">
                <h2 className="header">How It Works</h2>
            </div>

            <div className="how">
                <div className="visuals">
                    <h3 className="tags">1</h3>
                    <h3 className="text color1">Record Screen</h3>
                    <p className="color3">
                        Click the "Start Recording" button in our extension. choose
                        which part of your screen to capture and who you want to send it
                        to.
                    </p>
                    <img src={imagery} alt="" />
                </div>

                <div className="visuals">
                    <h3 className="tags">2</h3>
                    <h3 className="text color1">Share your recordin</h3>
                    <p className="color3">
                        Click the "Start Recording" button in our extension. choose
                        which part of your screen to capture and who you want to send it
                        to.
                    </p>
                    <img src={imagery} alt="" />
                </div>

                <div className="visuals">
                    <h3 className="tags">3</h3>
                    <h3 className="text color1">Learn Effortlessly</h3>
                    <p className="color3">
                        Click the "Start Recording" button in our extension. choose
                        which part of your screen to capture and who you want to send it
                        to.
                    </p>
                    <img src={imagery} alt="" />
                </div>
            </div>
        </div>
    </section>
  )
}

export default Usable