import React from 'react'
import logo from '../assets/Frame 1000002536.png'
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
        <header>
            <div className="producer">
                <nav>
                    <img src={logo} className="logo" alt="" />

                    <div>
                        <ul className="nav_menu">
                            <li>
                                <Link to="/" >
                                    <a href="#featured">
                                        Features
                                    </a>
                                </Link>
                            </li>
                            <li>
                                <Link to="/"  href="#usage">
                                    How it works
                                </Link>
                            </li>
                        </ul>
                    </div>

                    <h3 className="color1">Get Started</h3>
                </nav>
            </div>
        </header>
    </>
  )
}

export default Navbar