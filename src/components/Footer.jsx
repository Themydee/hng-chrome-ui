import React from 'react'
import logo from '../assets/white.png'

const Footer = () => {
  return (
    <footer>
        <div className="producer">
            <div className="width">
                <div>
                    <img  src={logo} alt="" />
                </div>

                <div className="width__length">
                    <h3>Menu</h3>

                    <ul className="size">
                        <li>
                            <a href="#">
                                Home
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                Converter
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                How It Works
                            </a>
                        </li>
                    </ul>
                </div>

                <div className="width__length">
                    <h3>About Us</h3>

                    <ul className="size">
                        <li>
                            <a href="#">
                                About
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                Contact Us
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                Privacy Policy
                            </a>
                        </li>
                    </ul>
                </div>

                <div className="width__length">
                    <h3>Screen Record</h3>

                    <ul className="size">
                        <li>
                            <a href="#">
                                Browser Window
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                Desktop
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                Application
                            </a>
                        </li>
                    </ul>
                </div>

                
            </div>
        </div>
    </footer>
  )
}

export default Footer