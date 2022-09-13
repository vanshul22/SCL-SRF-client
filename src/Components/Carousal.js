import React from 'react';

const Carousal = () => {
    return (

        <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel" >
            <div className="carousel-indicators">
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to={0} className="active" aria-current="true" aria-label="Slide 1" />
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to={1} aria-label="Slide 2" />
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to={2} aria-label="Slide 3" />
            </div>
            <div className="carousel-inner">
                <div className="carousel-item active">
                    <img src="https://superiorcodelabs.com/assets/images/logo-design.jpg" className="d-block w-100" alt="Carousal 1" />
                    <div className="carousel-caption d-none d-md-block">
                    </div>
                </div>
                <div className="carousel-item">
                    <img src="https://superiorcodelabs.com/assets/images/ecommerce2.png" className="d-block w-100" alt="Carousal 2" />
                    <div className="carousel-caption d-none d-md-block">
                    </div>
                </div>
                <div className="carousel-item">
                    <img src="https://superiorcodelabs.com/assets/images/1.png" className="d-block w-100" alt="Carousal 3" />
                    <div className="carousel-caption d-none d-md-block">
                    </div>
                </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev" >
                <span className="carousel-control-prev-icon" aria-hidden="true" />
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next" >
                <span className="carousel-control-next-icon" aria-hidden="true" />
                <span className="visually-hidden">Next</span>
            </button>
        </div>
    )
}
export default Carousal;