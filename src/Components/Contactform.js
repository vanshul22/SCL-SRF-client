import React from 'react'

const Contactform = () => {
    return (
        <>
            <form className="form-light mt-20">
                <div className="form-group mt-4">
                    <label>Name</label>
                    <input type="text" className="form-control my-2" placeholder="Your name" name="name" required="required" />
                </div>
                <div className="row">
                    <div className="col-md-6">
                        <div className="form-group">
                            <label>Email</label>
                            <input type="email" className="form-control my-2" placeholder="Email address" name="email" required="required" />
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="form-group">
                            <label>Phone</label>
                            <input type="text" className="form-control my-2" placeholder="Phone number" name="phone" required="required" />
                        </div>
                    </div>
                </div>
                <div className="form-group">
                    <label>Subject</label>
                    <input type="text" className="form-control my-2" placeholder="Subject" name="subject" required="required" />
                </div>
                <div className="form-group">
                    <label>Message</label>
                    <textarea className="form-control my-2" id="message" placeholder="Write your message here..." style={{ "height": "100px" }} name="message" required="required"></textarea>
                </div>
                <button type="submit" className="btn btn-primary my-2" name="submit">Send message</button>
            </form>

            <hr />

            <div className="container my-5">
                <h2><u>Superior CodeLabs</u></h2>
                <div className="col-md-6">
                    <div className="row">
                        <div className="col-md-9">
                            <h3 className="section-title">Reach Us</h3>
                            <div className="contact-info">
                                <h5>Address :</h5>
                                <p>
                                    #25/3, 3rd floor,
                                    Leela Bhavan, Musnishwarappa Road,
                                    J.C.Nagar Post, Bangalore, Land Mark : Fun World.
                                </p>
                                <h5>Email :</h5>
                                <p>contact@superiorcodelabs.com</p>
                                <h5>Phone :</h5>
                                <p>+91 8431381009</p>
                            </div>
                        </div>
                    </div>
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15549.84923643522!2d77.5937741!3d13.0062053!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x16a7009ac852d3ce!2sSuperior%20Codelabs!5e0!3m2!1sen!2sin!4v1662625051679!5m2!1sen!2sin"
                        width={400}
                        height={300}
                        style={{ border: 0 }}
                        allowFullScreen=""
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        title='map'
                    />
                </div>

            </div>
        </>
    )
}

export default Contactform;