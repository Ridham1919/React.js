import React from "react";

const Contact = () => {

    return (
        <div className="container2">
            <div className="contact-form">
                <h1>Contact Us</h1>
                <h2>Write Us</h2>
                <div className="divider" />
                <p className="intro-text">Jot us a note and we'll get back to you as quickly as possible.</p>
                <form>
                    <div className="form-group">
                        <label htmlFor="name">Name <span className="required">*</span></label>
                        <input type="text" id="name" name="name" required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">Email <span className="required">*</span></label>
                        <input type="email1" id="email" name="email" required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="phone">Phone Number</label>
                        <input type="tel" id="phone" name="phone" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="message">What's on your mind? <span className="required">*</span></label>
                        <textarea id="message" name="message" required defaultValue={""} />
                    </div>
                    <button type="submit">SUBMIT</button>
                </form>
            </div>
            <div className="store-info">
                <h2>Etrend Store</h2>
                <div className="info-item">
                    <div className="info-label">Address:</div>
                    <div className="info-content">123 Street, City, London, 789AB</div>
                </div>
                <div className="info-item">
                    <div className="info-label">Phone:</div>
                    <div className="info-content">(123) 4567-890</div>
                </div>
                <div className="info-item">
                    <div className="info-label">Email:</div>
                    <div className="info-content">mail@example.com</div>
                </div>
            </div>
        </div>




    )
}

export default Contact