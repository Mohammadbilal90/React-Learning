import React, { useState, useEffect } from 'react'

const Home = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    
    const slides = [
        {
            id: 1,
            image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&h=400&fit=crop",
            title: "Modern Architecture",
            description: "Discover stunning architectural designs"
        },
        {
            id: 2,
            image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&h=400&fit=crop",
            title: "Business Solutions",
            description: "Innovative solutions for your business"
        },
        {
            id: 3,
            image: "https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=800&h=400&fit=crop",
            title: "Technology Excellence",
            description: "Cutting-edge technology services"
        }
    ];

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % slides.length);
        }, 4000);

        return () => clearInterval(timer);
    }, [slides.length]);

    useEffect(() => {
        // Initialize AOS for homepage animations
        if (window.AOS) {
            window.AOS.init({
                duration: 800,
                easing: 'ease-in-out',
                once: false,
                mirror: false,
                offset: 100,
                delay: 0
            });
            window.AOS.refresh();
        }
    }, []);

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev + 1) % slides.length);
    };

    const prevSlide = () => {
        setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    };

    const goToSlide = (index) => {
        setCurrentSlide(index);
    };

    return (
        <div className="home-container">
            {/* Hero Section with Slider - Keeping Existing */}
            <section className="hero-section">
                <div className="slider-container">
                    <div className="slider">
                        {slides.map((slide, index) => (
                            <div
                                key={slide.id}
                                className={`slide ${index === currentSlide ? 'active' : ''}`}
                                style={{
                                    transform: `translateX(${(index - currentSlide) * 100}%)`
                                }}
                            >
                                <img src={slide.image} alt={slide.title} />
                                <div className="slide-content">
                                    <h2>{slide.title}</h2>
                                    <p>{slide.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                    
                    {/* Navigation Arrows */}
                    <button className="slider-btn prev" onClick={prevSlide}>
                        &#8249;
                    </button>
                    <button className="slider-btn next" onClick={nextSlide}>
                        &#8250;
                    </button>
                    
                    {/* Dots Indicator */}
                    <div className="slider-dots">
                        {slides.map((_, index) => (
                            <button
                                key={index}
                                className={`dot ${index === currentSlide ? 'active' : ''}`}
                                onClick={() => goToSlide(index)}
                            />
                        ))}
                    </div>
                </div>
            </section>

            {/* About Section */}
            <section className="about-section">
                <div className="container">
                    <div className="about-content">
                        <div className="about-text" data-aos="fade-up" data-aos-duration="1000">
                            <h2>Transforming Businesses Through Technology</h2>
                            <p>At Centric.DXB, we specialize in creating innovative software solutions that drive business growth and digital transformation. Our team of experts combines cutting-edge technology with industry best practices to deliver exceptional results.</p>
                            <div className="stats">
                                <div className="stat-item" data-aos="fade-up" data-aos-delay="200" data-aos-duration="800">
                                    <h3>500+</h3>
                                    <p>Projects Completed</p>
                                </div>
                                <div className="stat-item" data-aos="fade-up" data-aos-delay="400" data-aos-duration="800">
                                    <h3>50+</h3>
                                    <p>Happy Clients</p>
                                </div>
                                <div className="stat-item" data-aos="fade-up" data-aos-delay="600" data-aos-duration="800">
                                    <h3>24/7</h3>
                                    <p>Support Available</p>
                                </div>
                            </div>
                        </div>
                        <div className="about-image" data-aos="fade-left" data-aos-duration="1000">
                            <img src="https://images.unsplash.com/photo-1551434678-e076c223a692?w=600&h=400&fit=crop" alt="Team Collaboration" />
                        </div>
                    </div>
                </div>
            </section>

            {/* Services Section */}
            <section className="services-section">
                <div className="container">
                    <h2 data-aos="fade-up" data-aos-duration="1000">Our Core Services</h2>
                    <div className="services-grid">
                        <div className="service-card" data-aos="fade-up" data-aos-delay="100" data-aos-duration="800">
                            <div className="service-icon">💻</div>
                            <h3>Custom Software Development</h3>
                            <p>Tailored solutions designed to meet your specific business requirements and scale with your growth.</p>
                        </div>
                        <div className="service-card" data-aos="fade-up" data-aos-delay="200" data-aos-duration="800">
                            <div className="service-icon">☁️</div>
                            <h3>Cloud Solutions</h3>
                            <p>Secure, scalable cloud infrastructure and migration services for modern businesses.</p>
                        </div>
                        <div className="service-card" data-aos="fade-up" data-aos-delay="300" data-aos-duration="800">
                            <div className="service-icon">📊</div>
                            <h3>Data Analytics</h3>
                            <p>Transform your data into actionable insights with our advanced analytics platform.</p>
                        </div>
                        <div className="service-card" data-aos="fade-up" data-aos-delay="400" data-aos-duration="800">
                            <div className="service-icon">🔒</div>
                            <h3>Cybersecurity</h3>
                            <p>Comprehensive security solutions to protect your digital assets and maintain compliance.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="cta-section">
                <div className="container">
                    <div className="cta-content" data-aos="fade-up" data-aos-duration="1000">
                        <div className="cta-text">
                            <h2>Ready to Transform Your Business?</h2>
                        </div>
                        <div className="cta-buttons">
                            <button className="cta-btn primary" data-aos="fade-up" data-aos-delay="200" data-aos-duration="800">Get Started</button>
                            <button className="cta-btn secondary" data-aos="fade-up" data-aos-delay="400" data-aos-duration="800">Learn More</button>
                        </div>
                    </div>
                </div>
            </section>

            {/* Testimonials Section */}
            <section className="testimonials-section">
                <div className="container">
                    <h2 data-aos="fade-up" data-aos-duration="1000">What Our Clients Say</h2>
                    <div className="testimonials-grid">
                        <div className="testimonial-card" data-aos="fade-up" data-aos-delay="100" data-aos-duration="800">
                            <div className="testimonial-content">
                                <p>"Centric.DXB delivered an exceptional solution that exceeded our expectations. Their team's expertise and professionalism are unmatched."</p>
                            </div>
                            <div className="testimonial-author">
                                <h4>Sarah Johnson</h4>
                                <span>CEO, TechCorp</span>
                            </div>
                        </div>
                        <div className="testimonial-card" data-aos="fade-up" data-aos-delay="200" data-aos-duration="800">
                            <div className="testimonial-content">
                                <p>"The cloud migration project was seamless and efficient. Their attention to detail and ongoing support have been invaluable."</p>
                            </div>
                            <div className="testimonial-author">
                                <h4>Ahmed Al-Rashid</h4>
                                <span>CTO, InnovateTech</span>
                            </div>
                        </div>
                        <div className="testimonial-card" data-aos="fade-up" data-aos-delay="300" data-aos-duration="800">
                            <div className="testimonial-content">
                                <p>"Working with Centric.DXB has transformed our business operations. Their solutions are innovative and reliable."</p>
                            </div>
                            <div className="testimonial-author">
                                <h4>Maria Rodriguez</h4>
                                <span>Operations Director, GlobalSoft</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Home