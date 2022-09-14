import React from 'react';
import Card from '../Components/Card';
import img1 from "../assets/ICONS/laptop-settings.gif";
import img2 from "../assets/ICONS/react-native.gif";
import img4 from "../assets/ICONS/figma.gif";
import img3 from "../assets/ICONS/tech-support.gif";


const Home = (props) => {

    return (
        <div className="home">
            <div className="cards d-flex justify-content-evenly py-5 flex-wrap">
                <Card image={img1} link="https://superiorcodelabs.com/webdevelopment.php" title="Web Development" desc="Web development is the main work for the business to be continous growth, as we have clients for whom we give outstanding work in web development." />
                <Card image={img2} title="UI Design" link="https://superiorcodelabs.com/uidesign.php" desc="We make attractive design with great user interface. customer needs are the first phase of our designing and resulting with creative thoughts." />
                <Card image={img3} title="100% Support" link="https://superiorcodelabs.com/support.php" desc="We Give 100% and 24/7 support for customers. As a company, we always stands ahead for customer queries and feed back. we recognised by our support towards our clients." />
                <Card image={img4} title="Web Services" link="https://superiorcodelabs.com/services.php" desc="All type of web services we do, Web hosting, SEO, deevelopment and We give service for the customers who are already having website and need development and modification." />
            </div>
        </div>
    )
}

export default Home;