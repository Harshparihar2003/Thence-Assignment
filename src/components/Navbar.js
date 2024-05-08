import React from 'react'
import "./Navbar.css"
import Logo from "../images/Website-logo.jpg"
const Navbar = () => {
    return (
        <>
            <div className="navbar">
                <div className="navbar-content">
                    <div className="navbar-content-1">
                        <img src={Logo} alt="" />
                    </div>
                    <div className="navbar-content-2">
                        <button className='button btn-1'>
                            Get Projects
                        </button>
                        <button className='button btn-2'>
                            Onboard Talent
                        </button>
                    </div>
                </div>

            </div>
        </>
    )
}

export default Navbar
