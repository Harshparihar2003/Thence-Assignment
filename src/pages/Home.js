import React from 'react'
import "./Home.css"
import Spark from "../images/Sparkle.svg"
import logo from "../images/Spaceship.svg"
import girl from "../images/Girl.png"
import arrow from "../images/Vector-arrow.png"
import stroke from "../images/Union.svg"
import Query from '../components/Query'

const Home = () => {
    return (
        <>
            <div className="heading">
                <div className='heading-title'>Success Stories</div>
                <div className="heading-description">Every success journey we’ve encountered.</div>
            </div>
            <div className="about">
                <div className="container-1">
                    <div className="image">
                        <img src={girl} alt="Girl Image" />
                        <div className='price'>
                            <div className="price-amount">
                                <span className='span-1'>$0.5</span>
                                <span className='span-2'>MILLION</span>
                            </div>
                            <div className="price-description">
                                Reduced client expenses by saving on hiring and employee costs.
                            </div>
                        </div>
                        <div className='discount'>

                            <div className="discount-title">
                                <img src={Spark} alt="" />
                                40%
                            </div>
                            <div className="discount-description">
                                Achieved reduction in project execution time by optimising team availability
                            </div>
                        </div>
                        <div className="days">
                            <div className="days-content-1">
                                <img src={logo} alt="" />
                            </div>
                            <div className="days-content-2">
                                <div className="title">
                                    10 days
                                </div>
                                <div className="description">
                                    Staff Deployment
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container-2">
                    <div className='content'>
                        Enhance fortune 50 company’s insights teams research capabilities
                    </div>
                    <div className='carasoul'>
                        <span class="dot-1"></span>
                        <span class="dot" ></span>
                        <span class="dot"></span>
                    </div>
                    <button className='button'>
                        Explore More
                        <img src={arrow} className='arrow' alt="" />
                    </button>
                </div>
            </div>
            <div className='question'>
                <div className="title">
                    <span className='mind'>Whats on your mind</span>
                    <span className='ask'>Ask Questions</span>
                    <div className="stroke">
                        <img src={stroke} alt="" />
                    </div>

                </div>
                <div className='queries'>
                    <Query title="Do you offer freelancers?" />
                    <Query title=" What’s the guarantee that I will be satisfied
                            with the hired talent?"/>
                    <div className="query">
                        <div className="query-content">
                            <span>
                                Can I hire multiple talents at once?
                            </span>
                            <br />
                            <span className="sub-content">
                                If unhappy with a project, communicate with the freelancer, allow for revisions, and refer to the agreement. Escalate to platform support if needed, considering mediation. Review policies, seek collaborative solutions for resolution.
                            </span>
                        </div>
                        <div className="plus">
                            <svg width="14" height="2" viewBox="0 0 14 2" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M0 0V2H14V0H0Z" fill="black" />
                            </svg>

                        </div>
                    </div><hr />
                    <Query title="Why should I not go to an agency directly?" />
                    <Query title="Who can help me pick a right skillset
                            and duration for me?"/>
                </div>
            </div>

            <div className="footer">
                <div className="footer-content-1">
                    <span className='copyright'>
                        <svg width="21" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M14.7877 7.42773C13.913 5.97351 12.3195 5 10.5 5C7.73999 5 5.5 7.23999 5.5 10C5.5 12.76 7.73999 15 10.5 15C12.3195 15 13.913 14.0265 14.7877 12.5723L13.0729 11.5442C12.5483 12.4166 11.5927 13 10.5 13C8.8425 13 7.5 11.6575 7.5 10C7.5 8.3425 8.8425 7 10.5 7C11.593 7 12.5491 7.58386 13.0735 8.4568L14.7877 7.42773ZM20.5 10C20.5 4.47998 16.02 0 10.5 0C4.97998 0 0.5 4.47998 0.5 10C0.5 15.52 4.97998 20 10.5 20C16.02 20 20.5 15.52 20.5 10ZM2.5 10C2.5 5.57996 6.07996 2 10.5 2C14.92 2 18.5 5.57996 18.5 10C18.5 14.42 14.92 18 10.5 18C6.07996 18 2.5 14.42 2.5 10Z" fill="#1C1C1C" />
                        </svg>
                    </span>
                    <span>
                        Talup 2023. All rights reserved
                    </span>
                </div>
                <div className="footer-content-2">
                    <a href="#">Terms & Conditions</a>
                    <a href="#">Privacy Policy</a>
                </div>
            </div>
        </>
    )
}

export default Home
