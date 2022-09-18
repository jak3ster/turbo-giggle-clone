import React from 'react';
//import "../css/about.css";
import about1 from '../assets/images/about/about1.jpg';
import about2 from '../assets/images/about/about2.jpg';
import about3 from '../assets/images/about/about3.jpg';
import about4 from '../assets/images/about/about4.jpg';
import about5 from '../assets/images/about/about5.jpg';
import about6 from '../assets/images/about/about6.jpg';

export const About = () => {
    return (
        <>

            <h2 className='display-3 bg-primary mb-3'>Excellent Care That's Here for Good</h2>
            <div className='card-deck'>
                <div className="card bg-primary text-center mb-3">
                    <div className="card-body">
                        <h5 className="card-title">MedPort is a trusted leader for quality health care</h5>
                        <p className="card-text text-white">
                            Each day at MedPort, we put the vision of our founders into action, dedicating ourselves to quality, safe, cost-efficient, socially responsible health care for everyone we serve. We keep that vision at the forefront as we care for patients, engage in clinical research and ultimately improve community health.
                        </p>
                        <p className="card-text text-white">
                            With MedPort, you get an ally. A friend. A partner who believes in the healthiest version of you. And we do everything within our power to get you there and keep you there.
                        </p>
                        <p className="card-text text-white">
                            We do all of this in a supportive, collaborative and caring environment. We do this to make a positive, measurable difference in the health of our patients and nationwide. We do this to ensure you and your family have access to the best possible care when and where you need it — at every stage in your life. We do this because it is a calling, our mission and our promise to you. We're here for you. We're here for good.
                        </p>
                    </div>
                    <img className="card-img-bottom" src={about1} alt="Woman hugging kid"></img>
                </div>
                <div className="card bg-primary text-center mb-3">
                    <div className="card-body">
                        <h5 className="card-title">Here for you</h5>
                        <p className="card-text text-white">
                            We're a $3.1 billion not-for-profit health care organization whose legacy spans decades for one shining reason — excellence. It's a high bar we've set for the entire organization — 15,000 employees, 3,000 affiliated physicians and more than 2,000 volunteers strong.
                        </p>
                        <p className="card-text text-white">
                            It's been this way since we started. It's who we are today. It's where we'll keep going as we face the challenges of tomorrow.
                        </p>
                    </div>
                    <img className="card-img-bottom" src={about2} alt="Doctor talking to patient"></img>
                </div>
            </div>
            <div className='card-deck'>
                <div className="card bg-primary text-center mb-3">
                    <div className="card-body">
                        <h5 className="card-title">Here to inspire</h5>
                        <p className="card-text text-white">
                            Our founders were the visionaries of their time who inspire us today. We're also inspired by our exceptional physicians, nurses and staff on the front lines of health care every day. Most of all, we're inspired by our patients who show tremendous courage on their journeys back to health.
                        </p>
                    </div>
                    <img className="card-img-bottom" src={about3} alt="female doctor in the background, side of male doctor in the foreground"></img>
                </div>
                <div className="card bg-primary text-center mb-3">
                    <div className="card-body">
                        <h5 className="card-title">Here to give back</h5>
                        <p className="card-text text-white">
                            As a not-for-profit organization, it's our mission to care for everyone who comes through our doors — including devoting significant resources to those who are vulnerable or underserved. It's this unwavering commitment to our community that defines us.
                        </p>
                    </div>
                    <img className="card-img-bottom" src={about4} alt="Female doctor listening to patient's heart"></img>
                </div>
            </div>
            <div className='card-deck'>
                <div className="card bg-primary text-center mb-3">
                    <div className="card-body">
                        <h5 className="card-title">Here to serve</h5>
                        <p className="card-text text-white">
                            In addition to our drive for excellence, we believe that diversity and inclusivity make us strong and help us all work smarter for a healthy San Diego. That's just one of the reasons we're ranked in the Top 100 Places to Work in the nation — and a place where thousands of volunteers serve.
                        </p>
                    </div>
                    <img className="card-img-bottom" src={about5} alt="Female doctor talking to patient"></img>
                </div>
                <div className="card bg-primary text-center mb-3">
                    <div className="card-body">
                        <h5 className="card-title">Here to connect</h5>
                        <p className="card-text text-white">
                            From the customer engagement center for physician referrals to billing and medical records, interpreters, human resources, media and more, we're here for you. Browse our contact list to find the department or business unit you'd like to reach.
                        </p>
                    </div>
                    <img className="card-img-bottom" src={about6} alt="Female doctor talking to patient"></img>
                </div>
            </div>
        </>
    );
};

export default About;
