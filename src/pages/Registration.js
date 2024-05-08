import React, { useState } from 'react'
import "./Registration.css"
import Logo from "../images/Website-logo.jpg"
import { useNavigate } from 'react-router-dom';

const Registration = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [error, setError] = useState(false);
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("click")

        if (!isValidEmail(email) || !name) {
            setError(true);
            console.log("true")
        } else {
            setError(false);
            console.log("false")
            navigate('/success');
        }
    }
    const isValidEmail = (email) => {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(String(email).toLowerCase());
    };

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
        if (error && isValidEmail(e.target.value)) {
            setError(false);
        }
    };
    return (
        <>

            <div className="reg-navbar">
                <div className="reg-navbar-content">
                    <div className="reg-navbar-content-1">
                        <img src={Logo} alt="" />
                    </div>
                    <div className="reg-navbar-content-2">

                        <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect x="0.5" y="0.5" width="63" height="63" rx="31.5" stroke="#CACACA" />
                            <g clip-path="url(#clip0_11_214)">
                                <path d="M40 24L24 40" stroke="#0C1319" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                <path d="M24 24L40 40" stroke="#0C1319" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                            </g>
                            <defs>
                                <clipPath id="clip0_11_214">
                                    <rect width="32" height="32" fill="white" transform="translate(16 16)" />
                                </clipPath>
                            </defs>
                        </svg>

                    </div>
                </div>

            </div>


            <div className="form" >
                <div className="form-title">
                    <span className='title'>Registration Form</span>
                    <span className='quote'>Start your success Journey here!</span>
                </div>
                <div className="registration-box">
                    <form onSubmit={handleSubmit} noValidate>
                        <div className="form-group">
                            <input type="text" className='form-group-text' id="name" placeholder="Enter your name" value={name} onChange={(e) => setName(e.target.value)} />
                        </div>
                        <div className="form-group">
                            <input type="email" className='form-group-text' value={email}
                                id="email" onChange={handleEmailChange} placeholder="Enter your email" />
                        </div>
                        {error && <div className="error-message">
                            <svg width="15" height="14" viewBox="0 0 15 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M7.50162 13.6666C3.81973 13.6666 0.834961 10.6818 0.834961 6.99992C0.834961 3.31802 3.81973 0.333252 7.50162 0.333252C11.1835 0.333252 14.1683 3.31802 14.1683 6.99992C14.1683 10.6818 11.1835 13.6666 7.50162 13.6666ZM6.83496 8.99992V10.3332H8.16829V8.99992H6.83496ZM6.83496 3.66658V7.66658H8.16829V3.66658H6.83496Z" fill="#FF0808" />
                            </svg>Enter a valid email address.</div>}
                        <button className={`${(!email.length || !name.length) ? 'disabled' : 'button'}`} disabled={!email.length || !name.length}>
                            Submit
                        </button>
                    </form>

                </div>
            </div>
        </>
    )
}

export default Registration
