import React, { useEffect } from 'react'
import "./Success.css"
import { useNavigate } from 'react-router-dom';
import Logo from "../images/Website-logo.jpg"

const Success = () => {

  const navigate = useNavigate();
  useEffect(() => {
    const timeout = setTimeout(() => {
      navigate('/');
    }, 5000);

    return () => clearTimeout(timeout);
  }, [navigate]);

  return (
    <>
      <div className="success-navbar">
        <div className="success-navbar-content">
          <img src={Logo} alt="" />
        </div>
      </div>
      <div className="success">
        <div className="tick">
          <svg width="68" height="68" viewBox="0 0 68 68" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M34.0014 67.3219C15.5919 67.3219 0.668091 52.3979 0.668091 33.9886C0.668091 15.5791 15.5919 0.655273 34.0014 0.655273C52.4107 0.655273 67.3347 15.5791 67.3347 33.9886C67.3347 52.3979 52.4107 67.3219 34.0014 67.3219ZM30.6768 47.3219L54.2471 23.7517L49.5331 19.0377L30.6768 37.8939L21.2488 28.4656L16.5347 33.1799L30.6768 47.3219Z" fill="#28B246" />
          </svg>
        </div>
        <div className="title">
          Success Submitted
        </div>
        <div className="congrats">
          Congratulations
        </div>
        <div className="message">
          Your request has been successfully submitted to us. We will validate your information and reach out to your shortly with updates
        </div>
        <div className="redirect">
          Redirecting you to Homepage in <span className='second'>5 Seconds</span>
        </div>
      </div>
    </>
  )
}

export default Success
