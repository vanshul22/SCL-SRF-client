import React from 'react';
import Carousal from '../Components/Carousal';

const About = () => {
  return (
    <div className='aboutus mt-2'>
      <h1 className='user-select-none'>About US</h1>
      <h4 className='user-select-none shadow-sm p-3 mb-5 bg-body rounded'>
        The Web development company
        <small class="text-muted"> with effective result oriented work </small>
      </h4>
      <Carousal />
    </div>
  )
}

export default About;