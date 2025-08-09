import React, { useState, useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { useI18n } from '../i18n.jsx';
import { Quote, Star } from 'lucide-react';

const Testimonials = () => {
    const [activeTestimonial, setActiveTestimonial] = useState(0);
    const { t } = useI18n();

    const testimonials = [
        {
            id: 1,
            name: 'Mohammed Al-Fahad',
            position: 'Marketing Director, Al-Najma FC',
            company: 'Al-Najma Football Club',
            testimonial: 'Rayan transformed our brand identity with his exceptional creative vision. The championship campaign exceeded all expectations and elevated our club\'s image to international standards.',
            rating: 5,
            avatar: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=150'
        },
        {
            id: 2,
            name: 'Fahad Al-Rashid',
            position: 'CEO, Saudi Sports Marketing',
            company: 'Saudi Sports Marketing',
            testimonial: 'Working with Rayan is always a premium experience. His attention to detail and understanding of Saudi sports culture is unmatched. Every project delivers exceptional results.',
            rating: 5,
            avatar: 'https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=150'
        },
        {
            id: 3,
            name: 'Abdullah Al-Mubaraki',
            position: 'Brand Manager, Al-Hilal FC',
            company: 'Al-Hilal Football Club',
            testimonial: 'Rayan\'s creative campaigns have consistently elevated our brand presence. His professional approach and innovative storytelling make him our go-to media producer.',
            rating: 5,
            avatar: 'https://images.pexels.com/photos/2381069/pexels-photo-2381069.jpeg?auto=compress&cs=tinysrgb&w=150'
        }
    ];

    const clientLogos = [
        { name: 'Al-Najma FC', logo: '🏆' },
        { name: 'Al-Hilal FC', logo: '⚽' },
        { name: 'Saudi Pro League', logo: '🇸🇦' },
        { name: 'Sports Authority', logo: '🏟️' }
    ];

    useEffect(() => {
        const interval = setInterval(() => {
            setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
        }, 5000);

        return () => clearInterval(interval);
    }, [testimonials.length]);

    return (
        <section id="testimonials" className="section-padding bg-deep-black text-white">
            <Container>
                {/* Section Header */}
                <Row className="mb-5">
                    <Col lg={8} className="mx-auto text-center">
                        <h2
                            className="display-4 fw-bold mb-4"
                            style={{ fontFamily: 'Readex Pro, sans-serif' }}
                        >
                            <span className="text-gold">{t('testimonials.heading')}</span>
                        </h2>
                        <p className="lead" style={{ color: 'rgba(255,255,255,0.85)' }}>
                            {t('testimonials.sub')}
                        </p>
                    </Col>
                </Row>

                {/* Testimonials Carousel */}
                <Row className="mb-5">
                    <Col lg={10} className="mx-auto">
                        <div className="testimonial-carousel position-relative">
                            {testimonials.map((testimonial, index) => (
                                <div
                                    key={testimonial.id}
                                    className={`testimonial-slide ${index === activeTestimonial ? 'active' : ''}`}
                                    style={{
                                        display: index === activeTestimonial ? 'block' : 'none',
                                        opacity: index === activeTestimonial ? 1 : 0,
                                        transition: 'opacity 0.5s ease-in-out'
                                    }}
                                >
                                    <Row className="align-items-center">
                                        <Col lg={2} className="text-center mb-4 mb-lg-0">
                                            <img
                                                src={testimonial.avatar}
                                                alt={testimonial.name}
                                                className="rounded-circle"
                                                style={{ width: '100px', height: '100px', objectFit: 'cover' }}
                                            />
                                        </Col>
                                        <Col lg={10}>
                                            <div className="testimonial-content">
                                                <Quote size={40} className="text-gold mb-3" />
                                                <p
                                                    className="fs-4 mb-4 lh-lg"
                                                    style={{
                                                        fontStyle: 'italic',
                                                        fontWeight: '300'
                                                    }}
                                                >
                                                    "{testimonial.testimonial}"
                                                </p>
                                                <div className="d-flex align-items-center justify-content-between">
                                                    <div>
                                                        <h5 className="fw-bold mb-1">{testimonial.name}</h5>
                                                        <p className="text-gold mb-1">{testimonial.position}</p>
                                                        <p className="text-white-50 mb-0 small">{testimonial.company}</p>
                                                    </div>
                                                    <div className="d-flex">
                                                        {[...Array(testimonial.rating)].map((_, i) => (
                                                            <Star key={i} size={20} className="text-gold me-1" fill="currentColor" />
                                                        ))}
                                                    </div>
                                                </div>
                                            </div>
                                        </Col>
                                    </Row>
                                </div>
                            ))}
                        </div>

                        {/* Testimonial Indicators */}
                        <div className="d-flex justify-content-center mt-4">
                            {testimonials.map((_, index) => (
                                <button
                                    key={index}
                                    className={`testimonial-indicator me-2 ${index === activeTestimonial ? 'active' : ''}`}
                                    onClick={() => setActiveTestimonial(index)}
                                    style={{
                                        width: '40px',
                                        height: '4px',
                                        border: 'none',
                                        backgroundColor: index === activeTestimonial ? 'var(--primary-gold)' : 'rgba(255,255,255,0.3)',
                                        transition: 'all 0.3s ease'
                                    }}
                                />
                            ))}
                        </div>
                    </Col>
                </Row>

                {/* Client Logos */}
                <Row>
                    <Col>
                        <div className="text-center">
                            <h5 className="text-white-50 mb-4 text-uppercase letter-spacing">{t('testimonials.trustedBy')}</h5>
                            <div className="d-flex justify-content-center align-items-center flex-wrap gap-4">
                                {clientLogos.map((client, index) => (
                                    <div
                                        key={index}
                                        className="client-logo d-flex align-items-center gap-2 px-4 py-2 transition-smooth"
                                        style={{
                                            backgroundColor: 'rgba(255,255,255,0.05)',
                                            borderRadius: '8px',
                                            minWidth: '150px',
                                            justifyContent: 'center'
                                        }}
                                    >
                                        <span style={{ fontSize: '24px' }}>{client.logo}</span>
                                        <span className="fw-semibold">{client.name}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>

            <style jsx>{`
        .client-logo:hover {
          background-color: rgba(212, 175, 55, 0.1) !important;
          transform: translateY(-2px);
        }
        
        .testimonial-indicator:hover {
          background-color: var(--primary-gold) !important;
        }
        
        .letter-spacing {
          letter-spacing: 2px;
        }
      `}</style>
        </section>
    );
};

export default Testimonials;