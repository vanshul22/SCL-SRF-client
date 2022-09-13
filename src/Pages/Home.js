import React from 'react';

const Home = (props) => {
    const ok = () => {
        console.log(props.location)
    }
    return (
        <div className="home">
            <button onClick={ok}>okk</button>
        </div>
    )
}

export default Home;