import React from 'react';
import { Container } from 'react-bootstrap';

const partnerLogos = [
    '/src/resources/partners/1.png',
    '/src/resources/partners/2.png',
    '/src/resources/partners/3.png',
    '/src/resources/partners/4.png',
    '/src/resources/partners/5.png',
    '/src/resources/partners/6.png',
    '/src/resources/partners/7.png',
    '/src/resources/partners/8.png',
    '/src/resources/partners/9.png',
    '/src/resources/partners/10.png',
    '/src/resources/partners/11.png',
    '/src/resources/partners/12.png',
    '/src/resources/partners/13.png',
    '/src/resources/partners/14.png',
    '/src/resources/partners/15.png',
    '/src/resources/partners/16.png',
    '/src/resources/partners/17.png',
    '/src/resources/partners/18.png'
];

const Partners = () => {
    return (
        <section id="partners" className="section-padding bg-light">
            <Container>
                <div className="text-center mb-5">
                    <h2 className="display-5 fw-bold" style={{ fontFamily: 'Readex Pro, sans-serif' }}>
                        Our <span className="text-gold">Partners</span>
                    </h2>
                    <p className="text-muted">Trusted by leading organizations we proudly collaborate with</p>
                </div>
                <div className="d-flex flex-wrap justify-content-center align-items-center gap-4">
                    {partnerLogos.map((src, idx) => (
                        <div key={idx} className="p-3 bg-white luxury-shadow d-flex align-items-center justify-content-center" style={{ width: '160px', height: '90px' }}>
                            <img src={src} alt={`Partner ${idx + 1}`} style={{ maxWidth: '100%', maxHeight: '100%', objectFit: 'contain' }} />
                        </div>
                    ))}
                </div>
            </Container>
        </section>
    );
};

export default Partners;


