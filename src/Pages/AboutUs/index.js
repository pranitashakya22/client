import React from 'react';
import userProf from '../../images/userProf.jpg';

const AboutUs = () => {
    return (
        <div className="about-container">
            {/* Hero Section */}
            <section className="hero_about">
                <h1>About Us</h1>
                <p>Your one-stop shop for Nepal local-made products.</p>
            </section>

            {/* Mission Section */}
            <section className="mission">
                <h2 className='text-center'>Our Mission</h2>
                <p>At Nonabazzar, our mission is to showcase the rich heritage and craftsmanship of Nepal to the world. We specialize in offering a wide range of authentic, locally-made products that reflect the culture, artistry, and traditions of our country. From handcrafted goods to organic produce, every item is a testament to the unique skills and creativity of Nepalese artisans.</p>
                <h4>Why Choose Nonabazzar?</h4>
                <ul className='mb-4 pt-2'>
                    <li className='pb-2'><strong>Authenticity Guaranteed:</strong> We bring you products that are not just made in Nepal but are deeply rooted in its culture and heritage.</li>
                    <li className='pb-2'><strong>Empowering Local Artisans:</strong> By sourcing directly from local producers and artisans, we support communities and help preserve traditional crafts.
                    </li>
                    <li className='pb-2'><strong>Bringing Nepal to Your Doorstep:</strong> Wherever you are in the world, we ensure that the essence of Nepal reaches you through our carefully curated products.
                    </li>
                    <li className='pb-2'><strong>Sustainable Practices:</strong> We are committed to eco-friendly and sustainable practices, reflecting Nepal's deep respect for nature.
                    </li>
                </ul>
            </section>

            {/* Values Section */}
            <section className="values">
                <h2 className='text-center'>Our Values</h2>
                <div className="values-list">
                    <div className="value-item">
                        <h3>Quality</h3>
                        <p>We ensure every product meets the highest standards of quality.</p>
                    </div>
                    <div className="value-item">
                        <h3>Trust</h3>
                        <p>Building trust with our customers is at the heart of everything we do.</p>
                    </div>
                    <div className="value-item">
                        <h3>Innovation</h3>
                        <p>We embrace creativity to bring you the latest trends and solutions.</p>
                    </div>
                </div>
            </section>

            {/* Team Section */}
            <section className="team">
                <h2 className='text-center'>Meet the Team</h2>
                <div className="team-members">
                    <div className="team-member">
                        <img src={userProf} alt="Team Member 1" />
                        <h5>John Doe</h5>
                        <p>Founder & CEO</p>
                    </div>
                    <div className="team-member">
                        <img src={userProf} alt="Team Member 2" />
                        <h5>Jane Smith</h5>
                        <p>Marketing Head</p>
                    </div>
                    <div className="team-member">
                        <img src={userProf} alt="Team Member 2" />
                        <h5>Suraj Ghimire</h5>
                        <p>Social Media Head</p>
                    </div>
                    <div className="team-member">
                        <img src={userProf} alt="Team Member 2" />
                        <h5>Rashmita Basnet</h5>
                        <p>Human Resources</p>
                    </div>
                </div>
            </section>

            {/* Contact Section */}
            <section className="contact">
                <h2>Contact Us</h2>
                <p>Got questions? We’d love to hear from you!</p>
                <a href="/contact" className="btn">Get in Touch</a>
            </section>
        </div>
    );
};

export default AboutUs;
