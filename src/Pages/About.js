import React from 'react';
import Carousal from '../Components/Carousal';

const About = () => {
  return (
    <div className='aboutus mt-2 '>
      <h1 className='user-select-none display-4'>About US</h1>
      <h4 className='user-select-none shadow-sm p-3 mb-5 bg-body rounded'>
        The Web development company
        <small className="text-muted"> with effective result oriented work </small>
      </h4>
      <div style={{ "height": "25rem" }}> <Carousal /> </div>

      <figure className="text-center">
        <blockquote className="blockquote">
          <p className='col-8 mx-auto display-6'>Started in 2015, in a short time we have worked with many clients. Working with dedication is key point of our success and draging the customers ideas and thoughts into the projects is our major role. At every point of contact with customers we are best for providing best in class service with less time of duration.</p>
        </blockquote>
        <figcaption className="blockquote-footer my-2 display-6">
          Shaikh  <cite title="Source Title"> (Superior CodeLabs)</cite>
        </figcaption>
      </figure>

      <div className='text-center col-7 my-4'>
        <h3 className='display-3'>Our Mission</h3>
        <p className='display-6'>"To help customer achieve their business objectives by providing innovative, best-in-class consulting, IT solution and services and to make it a joy for all stakeholders to work with us"</p>
      </div>

      <div className='text-center col-6 my-3'>
        <h3 className='display-3'>Our Vision</h3>
        <p className='display-6'>"We believe in innovation of new technologies in line with changing business dynamics and change in business to bring affordable business solution, improved customer services and much more for end users."</p>
      </div>

      <div className='text-center col-6 my-3'>
        <h3 className='display-3'>Specialaize In</h3>
        <p className='display-6'>"We are specialized in working on open cart projects and E-commerce sites, we work on new projects and as well as existing projects," We also do complete web development of your Web applications and wesites.</p>
      </div>

    </div>
  )
}

export default About;