import React from 'react';
import Card from '../Components/Card';
import laptop_settings from "../assets/ICONS/laptop-settings.gif";
import react_native from "../assets/ICONS/react-native.gif";
import tech_support from "../assets/ICONS/tech-support.gif";
import figma from "../assets/ICONS/figma.gif";
import black_crystal from "../assets/IMG/black_crystal.jpg";
import languages_ad from "../assets/IMG/languages_ad.png";
import superior_codelabs_logo from "../assets/IMG/superior_codelabs_logo.png"

const Home = () => {

    return (
        <div className="home">
            <div className="img-text">
                <img src={black_crystal} className="img-fluid" alt='black_crystals' />
                <h2>Superior CodeLabs</h2>
                <span>Grab the way of success </span>
            </div>

            <div className="cards d-flex justify-content-evenly py-5 flex-wrap">
                <Card image={laptop_settings} link="https://superiorcodelabs.com/webdevelopment.php" title="Web Development" desc="Web development is the main work for the business to be continous growth, as we have clients for whom we give outstanding work in web development." />
                <Card image={react_native} title="UI Design" link="https://superiorcodelabs.com/uidesign.php" desc="We make attractive design with great user interface. customer needs are the first phase of our designing and resulting with creative thoughts." />
                <Card image={tech_support} title="100% Support" link="https://superiorcodelabs.com/support.php" desc="We Give 100% and 24/7 support for customers. As a company, we always stands ahead for customer queries and feed back. we recognised by our support towards our clients." />
                <Card image={figma} title="Web Services" link="https://superiorcodelabs.com/services.php" desc="All type of web services we do, Web hosting, SEO, deevelopment and We give service for the customers who are already having website and need development and modification." />
            </div>

            <div className='center'>
                <img src={languages_ad} className="img-fluid" alt="languages_ad" />
            </div>

            <div className="process center pb-0">
                <h3 className='display-3'>Our Process</h3>
                <p className='display-6 mx-3'>Planning is the main part of work,</p>
                <p className='display-6 mx-3'>We make perfect structure planning for our projects to be execute from day one.</p>
            </div>

            <div>
                <div className="d-flex justify-content-evenly flex-wrap mb-3">
                    <div
                        className="wow fadeInUp mx-3 center"
                        data-wow-duration="400ms"
                        data-wow-delay="0ms"
                    >
                        <div className="icon-circle my-1">
                            <i className="fa fa-coffee fa-3x" />
                        </div>
                        <h3>MEET</h3>
                    </div>
                    <div
                        className="wow fadeInUp mx-3 center"
                        data-wow-duration="400ms"
                        data-wow-delay="100ms"
                    >
                        <div className="icon-circle my-1">
                            <i className="fa fa-cogs fa-3x" />
                        </div>
                        <h3>PLAN</h3>
                    </div>
                    <div
                        className="wow fadeInUp mx-3 center"
                        data-wow-duration="400ms"
                        data-wow-delay="200ms"
                    >
                        <div className="icon-circle my-1">
                            <i className="fa fa-tachometer fa-3x" />
                        </div>
                        <h3>DESIGN</h3>
                    </div>
                    <div
                        className="wow fadeInUp mx-3 center"
                        data-wow-duration="400ms"
                        data-wow-delay="300ms"
                    >
                        <div className="icon-circle my-1">
                            <i className="fa fa-shopping-cart fa-3x" />
                        </div>
                        <h3>DEVELOP</h3>
                    </div>
                    <div
                        className="wow fadeInUp mx-3 center"
                        data-wow-duration="400ms"
                        data-wow-delay="400ms"
                    >
                        <div className="icon-circle my-1">
                            <i className="fa fa-shield fa-3x" />
                        </div>
                        <h3>TESTING</h3>
                    </div>
                    <div
                        className="wow fadeInUp mx-3 center"
                        data-wow-duration="400ms"
                        data-wow-delay="500ms"
                    >
                        <div className="icon-circle my-1">
                            <i className="fa fa-anchor fa-3x" />
                        </div>
                        <h3>LAUNCH</h3>
                    </div>

                </div>

            </div>

            <div className='superiorcodelabslogo text-center my-5'>
                <img className='img-fluid w-50 mb-5 mt-3' src={superior_codelabs_logo} alt="superior_codelabs_logo" />
                <h5 className='m-auto fw-bold'>Superior Codelabs web solutions is an Indian based company started in 2015.</h5>
                <p className='w-75 m-auto'>We are into the business of web application development, we have been creating quality web applications,
                    provides web application services, we design interfaces,Develop mobile application.</p>
                <p className='w-75 m-auto'>We have completely involvement in the integration and development of APIs.</p>
                <p className='w-75 m-auto'>We develop websites covering a range of businesses and functionalities. What your requirements are, based on those we’ll have that type of projects just right for you. We also work on existing websites or build a new one from the scratch to create unique and attractive, that meets your specific requirements. Our applications are highly adaptable and customizable and can be extended quickly and easily to meet your changing business needs.</p>
            </div>
        </div>
    )
}

export default Home;