import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const SiteFooter = () => {
    return (
        <footer className="pt-5 pb-4" style={{ backgroundColor: 'var(--deep-black)', color: 'white', borderTop: '1px solid var(--primary-gold)' }}>
            <Container>
                <Row className="gy-4">
                    <Col md={6}>
                        <img src="/src/resources/imgs/rayan-logo-footer.svg" alt="Rayan Al-Najm Footer Logo" style={{ height: '35px' }} />
                        <p className="text-white-50 mb-0 mt-3" style={{ maxWidth: '520px' }}>
                            Premium advertising and media production for elite sports clubs across Saudi Arabia.
                        </p>
                    </Col>
                    <Col md={3}>
                        <h6 className="text-gold fw-semibold mb-3">Quick Links</h6>
                        <ul className="list-unstyled m-0 p-0">
                            <li><a href="#home" className="text-decoration-none text-white-50 d-inline-block py-1">Home</a></li>
                            <li><a href="#portfolio" className="text-decoration-none text-white-50 d-inline-block py-1">Portfolio</a></li>
                            <li><a href="#testimonials" className="text-decoration-none text-white-50 d-inline-block py-1">Testimonials</a></li>
                            <li><a href="#about" className="text-decoration-none text-white-50 d-inline-block py-1">About</a></li>
                        </ul>
                    </Col>
                    <Col md={3}>
                        <h6 className="text-gold fw-semibold mb-3">Contact</h6>
                        <ul className="list-unstyled m-0 p-0 text-white-50">
                            <li className="py-1">Riyadh, Saudi Arabia</li>
                            <li className="py-1"><a href="mailto:info@rayananljem.com" className="text-decoration-none text-white-50">info@rayananljem.com</a></li>
                            <li className="py-1"><a href="tel:+966501234567" className="text-decoration-none text-white-50">+966 50 123 4567</a></li>
                        </ul>
                    </Col>
                </Row>
                <hr className="border-secondary mt-4 mb-3" />
                <div className="d-flex flex-column flex-md-row justify-content-between align-items-center gap-2">
                    <small className="text-white-50">© {new Date().getFullYear()} Rayan AlNjem. All rights reserved.</small>
                    <div className="d-flex gap-3">
                        <a href="#" className="text-white-50 text-decoration-none">Privacy Policy</a>
                        <a href="#" className="text-white-50 text-decoration-none">Terms</a>
                    </div>
                </div>
            </Container>
        </footer>
    );
};

export default SiteFooter;

