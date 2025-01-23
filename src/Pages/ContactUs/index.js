import React from 'react';

const ContactUs = () => {
    return (
        <>
            <div className="contact-container">
                <header>
                    <h2 className="text-center mb-4">Contact Us</h2>
                    <p className="lead text-center mb-5">
                        Have any questions? We're here to help! Feel free to reach out to us through the contact form, or use the details provided below.
                    </p>
                </header>
                <section className="contact-info">
                    <div className="row">
                        <div className="col-md-6 mb-4">
                            <h3>Contact Information</h3>
                            <address>
                            <ul className="list-unstyled">
                                <li><strong>Address:</strong> Gairidhara, Nepal</li>
                                <li><strong>Phone:</strong> +977-987654321</li>
                                <li><strong>Email:</strong> support@nonabazzar.com</li>
                            </ul>
                            </address>
                            
                            <div className="mt-4">
                                <iframe
                                    src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d220.74700873369426!2d85.32559942471407!3d27.71876395139729!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2snp!4v1737633164245!5m2!1sen!2snp"
                                    width="100%" height="380" frameBorder="0" style={{border:0}} allowFullScreen="" aria-hidden="false" tabIndex="0"></iframe>
                            </div>
                        </div>
                        
                        <article className="col-md-6">
                            <h3>Send Us a Message</h3>
                            <form className='contact-form' action="submit_form.php" method="POST">
                                <div className="mb-3">
                                    <label htmlFor="name" className="form-label">Your Name</label>
                                    <input type="text" className="form-control" id="name" name="name" required />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="email" className="form-label">Your Email</label>
                                    <input type="email" className="form-control" id="email" name="email" required />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="subject" className="form-label">Subject</label>
                                    <input type="text" className="form-control" id="subject" name="subject" required />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="message" className="form-label">Message</label>
                                    <textarea className="form-control" id="message" name="message" rows="5" required></textarea>
                                </div>
                                <button type="submit" className="btn btn-primary">Send Message</button>
                            </form>
                        </article>
                    </div>
                </section>
            </div>
        </>
    );
};

export default ContactUs;