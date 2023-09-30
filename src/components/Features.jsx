import React from 'react'
import circle from '../assets/circle.png'
import telegram from '../assets/telegram.png'
import refresh from '../assets/refresh.png'
import video from '../assets/video.png'
const Features = () => {
  return (
    <section >
        <div className="producer" >
            <div className="center">
                <h2 className="header">Features</h2>
                <p className="color3">Key Highlights of Our Extension</p>
            </div>

            <div className="featured">
                <div className="teach">
                    <div className="restrain">
                        <div>
                            <img
                                className="icon"
                                src={circle}
                                alt=""
                            />
                        </div>
                        <div className="text-inner">
                            <h3 className="top-text color2">Simple Screen Recording</h3>
                            <p className="color3 bottom-text">
                                Effortless screen recording for everyone. Record <br />
                                with ease, no tech expertise required.
                            </p>
                        </div>
                    </div>
                    <div className="restrain">
                        <div>
                            <img
                                className="icon"
                                src={telegram}
                                alt=""
                            />
                        </div>
                        <div className="text-inner">
                            <h3 className="top-text color2">Easy-to-Share URL</h3>
                            <p className="color3 bottom-text">
                            Share your recordings instantly with a single link. <br />
                            No attachments, no downloads.
                            </p>
                        </div>
                    </div>
                    <div className="restrain">
                        <div>
                            <img
                                className="icon"
                                src={refresh}
                                alt=""
                            />
                        </div>
                        <div className="text-inner">
                            <h3 className="top-text color2">Revisit Recordings</h3>
                            <p className="color3 bottom-text">
                            Access and review your past content effortlessly.<br />
                             Your recordings, always at your fingertips.
                            </p>
                        </div>
                    </div>
                </div>

                <div>
                    <img
                        className="featureimg"
                        src={video}
                        alt=""
                    />
                </div>
            </div>
        </div>
    </section>
  )
}

export default Features