import React, { useEffect, useState } from 'react'
import './Navbar.css'
import logo from '../Pics/Group 1000002918.svg'
import whitelogo from '../Pics/Group 1000002925.svg'

import { Link } from 'react-router-dom'
import { useLocation } from 'react-router-dom'

function Navbar() {
    const location = useLocation()
    const [navlogo, setnavlogo] = useState(logo);
    const [colordark, setcolordark] = useState(false);
    const [activeStatus, setactiveStatus] = useState("home");
    const [toggle, settoggle] = useState(true);
    const [open, setopen] = useState(true);

    useEffect(() => {
        if (location.pathname == '/contact' || location.pathname == '/calculatetax') {
            setcolordark(true)
            setnavlogo(whitelogo)

        } else {
            setnavlogo(logo)
            setcolordark(false)
        }
    }, [location]);

    return (
        <div>
            <div className='container-fluid d-lg-flex justify-content-center d-none'>
                <div className='container position-absolute'>

                    <nav class="navbar navbar-expand-lg navbar-div1">
                        <Link class="navbar-brand" to="/"><img src={navlogo} alt="" srcset="" /></Link>
                        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon"></span>
                        </button>
                        <div class="collapse navbar-collapse " id="navbarNavDropdown">
                            <ul class="navbar-nav nav-ul1 ml-auto ">
                                <li class="nav-item active">
                                    <Link className={`${colordark ? "nav-link dark-nav-text1" : "nav-link nav-text1"
                                        }`} to="/">Home </Link>
                                </li>
                                <li class="nav-item">
                                    <Link className={`${colordark ? "nav-link dark-nav-text1" : "nav-link nav-text1"
                                        }`} to="/about">About Us</Link>
                                </li>
                                <li class="nav-item">
                                    <Link className={`${colordark ? "nav-link dark-nav-text1" : "nav-link nav-text1"
                                        }`} to="/services">Services</Link>
                                </li>
                                {/* <li class="nav-item">
                                <Link className={`${colordark ? "nav-link dark-nav-text1" : "nav-link nav-text1"
                                    }`} href="#">Client Reviews</Link>
                            </li> */}
                                <li class="nav-item">
                                    <Link className={`${colordark ? "nav-link dark-nav-text1" : "nav-link nav-text1"
                                        }`} to="/contact">Contact Us</Link>
                                </li>
                            </ul>
                        </div>

                        <div className='d-md-flex d-none nav-mainbtns-div1  '>
                            <div>
                                <Link to='/calculatetax' > <div className={`${!colordark ? "nav-btn-1" : "dark-nav-btn-1"
                                    }`}>Calculate Tax</div></Link>
                            </div>

                        </div>
                    </nav>
                </div>

            </div>



















            <div className='d-lg-none d-block'>

                <nav class="navbar mobile-navbar-div1 d-flex d-lg-none  ">
                    <Link
                        class="navbar-brand"
                        to="/"
                    >
                        <img src={navlogo} className="ml-3" width='70' />
                    </Link>
                    <button
                        class="navbar-toggler mobile-nav-toogler"
                        type="button"
                        // data-toggle="collapse"
                        data-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                        onClick={() => settoggle(!toggle)}
                    >
                        <svg className={`${colordark ? "dark-three-line-svg1" : "three-line-svg1"}`} xmlns="http://www.w3.org/2000/svg" width="36" height="24" viewBox="0 0 36 24" fill="none">
                            <rect x="0.600098" y="0.785645" width="35.4" height="3.04286" rx="1.52143" fill="#141414" />
                            <rect x="0.600098" y="10.8286" width="35.4" height="3.04286" rx="1.52143" fill="#141414" />
                            <rect x="0.600098" y="20.8716" width="35.4" height="3.04286" rx="1.52143" fill="#141414" />
                        </svg>
                    </button>

                    <div
                        class={`${toggle
                            ? "navbar-collapse mobile-navbar-div2"
                            : "navbar-collapse mobile-navbar-div2 show"
                            } `}
                        id="navbarSupportedContent"
                    >
                        <ul class="navbar-nav mx-auto">
                            <li
                                className={`${activeStatus === "home"
                                    ? "nav-item mobile-nav-item active home1"
                                    : "nav-item mobile-nav-item home1"
                                    }`}
                            >
                                <Link className={`${colordark ? "nav-link nav-text1" : "nav-link nav-text1"
                                    }`} to="/" onClick={() => {
                                        settoggle(!toggle);
                                    }}>Home </Link>

                            </li>
                            <li
                                className={`${activeStatus === "about"
                                    ? "nav-item mobile-nav-item active home1"
                                    : "nav-item mobile-nav-item home1"
                                    }`}
                            >
                                <Link className={`${colordark ? "nav-link nav-text1" : "nav-link nav-text1"
                                    }`} to="/about" onClick={() => {
                                        settoggle(!toggle);
                                    }}>About Us </Link>
                            </li>


                            <li
                                className={`${activeStatus === "career"
                                    ? "nav-item mobile-nav-item active home1"
                                    : "nav-item mobile-nav-item home1"
                                    }`}
                            >
                                <Link className={`${colordark ? "nav-link nav-text1" : "nav-link nav-text1"
                                    }`} to="/services" onClick={() => {
                                        settoggle(!toggle);
                                    }}>Services </Link>
                            </li>

                            <li
                                className={`${activeStatus === "contact"
                                    ? "nav-item mobile-nav-item active home1"
                                    : "nav-item mobile-nav-item home1"
                                    }`}
                            >
                                <Link className={`${colordark ? "nav-link nav-text1" : "nav-link nav-text1"
                                    }`} to="/calculatetax" onClick={() => {
                                        settoggle(!toggle);
                                    }}>Calculate Tax </Link>
                            </li>

                            <li
                                className={`${activeStatus === "contact"
                                    ? "nav-item mobile-nav-item active home1"
                                    : "nav-item mobile-nav-item home1"
                                    }`}
                            >
                                <Link className={`${colordark ? "nav-link nav-text1" : "nav-link nav-text1"
                                    }`} to="/contact" onClick={() => {
                                        settoggle(!toggle);
                                    }}>Contact Us </Link>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>



        </div>
    )
}

export default Navbar
