import React from 'react'

const Card = ({ image, title, desc, link }) => {
    return (
        <div className="card text-center shadow rounded pt-5 pb-2 mb-5" style={{ width: "18rem" }}>
            <img className="card-img-top m-auto" src={image} style={{ "width": "11em", "height": "11em" }} alt="Card images" />
            <div className="card-body">
                <h5 className="card-title"> {title} </h5>
                <p className="card-text"> {desc} </p>
                <a href={link} className="btn btn-primary"> Read More </a>
            </div>
        </div>
    )
}

export default Card;