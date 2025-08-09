import React, { useState } from 'react';
import { Container, Row, Col, Form } from 'react-bootstrap';
import { useI18n } from '../i18n.jsx';
import { Phone, MessageCircle, Mail, Instagram, Linkedin, MapPin, Send } from 'lucide-react';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });
    const { t, dir } = useI18n();

    const handleInputChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission here
        console.log('Form submitted:', formData);
        alert('Thank you for your message! I will get back to you soon.');
        setFormData({ name: '', email: '', subject: '', message: '' });
    };

    const contactInfo = [
        {
            icon: Phone,
            label: 'Phone',
            value: '+966 50 123 4567',
            link: 'tel:+966501234567'
        },
        {
            icon: MessageCircle,
            label: 'WhatsApp',
            value: 'Send Message',
            link: 'https://wa.me/966501234567'
        },
        {
            icon: Mail,
            label: 'Email',
            value: 'info@rayananljem.com',
            link: 'mailto:info@rayananljem.com'
        },
        {
            icon: MapPin,
            label: 'Location',
            value: 'Riyadh, Saudi Arabia',
            link: '#'
        }
    ];

    const socialMedia = [
        {
            icon: Instagram,
            name: 'Instagram',
            link: 'https://www.instagram.com/rayan9159/'
        },
        {
            icon: Linkedin,
            name: 'LinkedIn',
            link: 'https://www.linkedin.com/in/rayan-alnjem-b92868262/'
        }
    ];

    return (
        <section id="contact" className="section-padding bg-light">
            <Container>
                {/* Section Header */}
                <Row className="mb-5">
                    <Col lg={8} className="mx-auto text-center">
                        <h2
                            className="display-4 fw-bold mb-4"
                            style={{ fontFamily: 'Readex Pro, sans-serif' }}
                        >
                            <span className="text-gold">{t('contact.heading')}</span>
                        </h2>
                        <p className="lead text-muted">
                            {t('contact.sub')}
                        </p>
                    </Col>
                </Row>

                <Row>
                    {/* Contact Information */}
                    <Col lg={6} className="mb-5 mb-lg-0">
                        <div className="contact-info">
                            <h3
                                className="fw-bold mb-4"
                                style={{ fontFamily: 'Readex Pro, sans-serif' }}
                            >
                                {t('contact.startYourProject')}
                            </h3>
                            <p className="text-muted mb-4 lh-lg">
                                Based in Riyadh, I work with sports organizations across Saudi Arabia
                                to create compelling visual narratives that resonate with audiences
                                and drive engagement.
                            </p>

                            {/* Contact Details */}
                            <div className="contact-details mb-5">
                                {contactInfo.map((info, index) => (
                                    <a
                                        key={index}
                                        href={info.link}
                                        className="contact-item d-flex align-items-center p-3 mb-3 text-decoration-none transition-smooth"
                                        style={{
                                            backgroundColor: 'white',
                                            borderLeft: '4px solid var(--primary-gold)',
                                            color: 'inherit'
                                        }}
                                    >
                                        <div
                                            className="contact-icon me-3 d-flex align-items-center justify-content-center"
                                            style={{
                                                width: '50px',
                                                height: '50px',
                                                backgroundColor: 'var(--primary-gold)',
                                                borderRadius: '50%'
                                            }}
                                        >
                                            <info.icon size={24} className="text-white" />
                                        </div>
                                        <div>
                                            <small className="text-muted d-block">{info.label}</small>
                                            <span className="fw-semibold">{info.value}</span>
                                        </div>
                                    </a>
                                ))}
                            </div>

                            {/* Social Media */}
                            <div className="social-media">
                                <h5 className="fw-bold mb-3">Follow My Work</h5>
                                <div className="d-flex gap-3">
                                    {socialMedia.map((social, index) => (
                                        <a
                                            key={index}
                                            href={social.link}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="social-link d-flex align-items-center justify-content-center transition-smooth"
                                            style={{
                                                width: '50px',
                                                height: '50px',
                                                backgroundColor: 'var(--deep-black)',
                                                borderRadius: '50%',
                                                color: 'white'
                                            }}
                                        >
                                            <social.icon size={24} />
                                        </a>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </Col>

                    {/* Contact Form */}
                    <Col lg={6}>
                        <div
                            className="contact-form bg-white p-5"
                            style={{
                                borderRadius: '0',
                                boxShadow: '0 20px 60px rgba(0, 0, 0, 0.1)'
                            }}
                        >
                            <h3
                                className="fw-bold mb-4"
                                style={{ fontFamily: 'Readex Pro, sans-serif' }}
                            >
                                Start Your Project
                            </h3>

                            <Form onSubmit={handleSubmit}>
                                <Row>
                                    <Col md={6}>
                                        <Form.Group className="mb-3">
                                            <Form.Label className="fw-semibold">{t('contact.fullName')}</Form.Label>
                                            <Form.Control
                                                type="text"
                                                name="name"
                                                value={formData.name}
                                                onChange={handleInputChange}
                                                required
                                                className="form-control-custom"
                                                style={{
                                                    border: '2px solid #e9ecef',
                                                    borderRadius: '0',
                                                    padding: '12px 16px',
                                                    fontSize: '16px'
                                                }}
                                            />
                                        </Form.Group>
                                    </Col>
                                    <Col md={6}>
                                        <Form.Group className="mb-3">
                                            <Form.Label className="fw-semibold">{t('contact.email')}</Form.Label>
                                            <Form.Control
                                                type="email"
                                                name="email"
                                                value={formData.email}
                                                onChange={handleInputChange}
                                                required
                                                className="form-control-custom"
                                                style={{
                                                    border: '2px solid #e9ecef',
                                                    borderRadius: '0',
                                                    padding: '12px 16px',
                                                    fontSize: '16px'
                                                }}
                                            />
                                        </Form.Group>
                                    </Col>
                                </Row>

                                <Form.Group className="mb-3">
                                    <Form.Label className="fw-semibold">{t('contact.projectType')}</Form.Label>
                                    <Form.Select
                                        name="subject"
                                        value={formData.subject}
                                        onChange={handleInputChange}
                                        required
                                        className="form-control-custom"
                                        style={{
                                            border: '2px solid #e9ecef',
                                            borderRadius: '0',
                                            padding: '12px 16px',
                                            fontSize: '16px'
                                        }}
                                    >
                                        <option value="">Select project type...</option>
                                        <option value="sports-campaign">Sports Campaign</option>
                                        <option value="documentary">Documentary Production</option>
                                        <option value="commercial">Commercial Advertisement</option>
                                        <option value="social-media">Social Media Content</option>
                                        <option value="other">Other</option>
                                    </Form.Select>
                                </Form.Group>

                                <Form.Group className="mb-4">
                                    <Form.Label className="fw-semibold">{t('contact.projectDetails')}</Form.Label>
                                    <Form.Control
                                        as="textarea"
                                        rows={5}
                                        name="message"
                                        value={formData.message}
                                        onChange={handleInputChange}
                                        required
                                        placeholder={t('contact.placeholder')}
                                        className="form-control-custom"
                                        style={{
                                            border: '2px solid #e9ecef',
                                            borderRadius: '0',
                                            padding: '12px 16px',
                                            fontSize: '16px',
                                            resize: 'vertical'
                                        }}
                                    />
                                </Form.Group>

                                <button
                                    type="submit"
                                    className="btn btn-gold w-100 d-flex align-items-center justify-content-center gap-2"
                                    style={{ padding: '15px' }}
                                >
                                    <Send size={20} />
                                    {t('contact.send')}
                                </button>
                            </Form>
                        </div>
                    </Col>
                </Row>
            </Container>

            <style jsx>{`
        .contact-item:hover {
          background-color: var(--light-gray) !important;
          transform: translateX(10px);
        }
        
        .social-link:hover {
          background-color: var(--primary-gold) !important;
          transform: translateY(-3px);
        }
        
        .form-control-custom:focus {
          border-color: var(--primary-gold) !important;
          box-shadow: 0 0 0 0.2rem rgba(212, 175, 55, 0.25) !important;
        }
      `}</style>
        </section>
    );
};

export default Contact;