import React from 'react';
import Form from '../Components/Form';

const Home = () => {
    return (
        <div className="home">
            <div className='application-structure'>
                <div className="box-heading">
                    <h1 className='main-heading'> Student Registration Form </h1>
                </div>
                <Form />
            </div>
        </div>
    )
}

export default Home;