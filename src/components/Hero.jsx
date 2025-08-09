import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { useI18n } from '../i18n.jsx';
import { ChevronDown } from 'lucide-react';

const Hero = () => {
    const { t } = useI18n();
    return (
        <div id="home" className="hero-section position-relative d-flex align-items-center justify-content-center overflow-hidden" style={{ minHeight: '100vh' }}>
            {/* Background Video */}
            <video
                autoPlay
                muted
                loop
                playsInline
                className="position-absolute w-100 h-100"
                style={{
                    objectFit: 'cover',
                    zIndex: -2,
                    filter: 'brightness(0.4)'
                }}
            >
                <source src="https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4" type="video/mp4" />
            </video>

            {/* Overlay */}
            <div
                className="position-absolute w-100 h-100"
                style={{
                    background: 'linear-gradient(135deg, rgba(26, 26, 26, 0.8), rgba(212, 175, 55, 0.2))',
                    zIndex: -1
                }}
            ></div>

            <Container className="text-center text-white position-relative">
                <Row className="justify-content-center">
                    <Col lg={10}>
                        <div className="fade-in-up">
                            {/* Logo/Brand Name */}
                            <div className="mb-4">
                                <h1
                                    className="display-3 fw-bold mb-3 text-shadow"
                                    style={{
                                        fontFamily: 'Readex Pro, sans-serif',
                                        letterSpacing: '2px'
                                    }}
                                >
                                    {t('hero.brandName')}
                                </h1>
                                <div
                                    className="mx-auto mb-4"
                                    style={{
                                        width: '100px',
                                        height: '3px',
                                        background: 'var(--primary-gold)'
                                    }}
                                ></div>
                            </div>

                            {/* Tagline */}
                            <p
                                className="lead mb-5 text-shadow"
                                style={{
                                    fontSize: '1.4rem',
                                    fontWeight: '300',
                                    letterSpacing: '1px',
                                    maxWidth: '600px',
                                    margin: '0 auto'
                                }}
                            >
                                {t('hero.tagline')}
                            </p>

                            {/* CTA Buttons */}
                            <div className="d-flex gap-3 justify-content-center flex-wrap">
                                <a href="#portfolio" className="btn btn-gold rounded-0 text-uppercase">
                                    {t('hero.viewPortfolio')}
                                </a>
                                <a href="#contact" className="btn btn-outline-gold rounded-0 text-uppercase">
                                    {t('hero.getInTouch')}
                                </a>
                            </div>
                        </div>
                    </Col>
                </Row>

            </Container>

            {/* Scroll Indicator (placed relative to hero wrapper) */}
            <a
                href="#about"
                aria-label="Scroll to next section"
                className="position-absolute bottom-0 start-50 translate-middle-x mb-4 text-decoration-none"
                style={{ animation: 'bounce 2s infinite', zIndex: 1 }}
            >
                <div
                    style={{
                        width: '46px',
                        height: '46px',
                        border: '2px solid var(--primary-gold)',
                        borderRadius: '9999px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        backgroundColor: 'rgba(0,0,0,0.25)'
                    }}
                >
                    <ChevronDown size={24} className="text-gold" />
                </div>
            </a>

            <style jsx>{`
        @keyframes bounce {
          0%, 20%, 50%, 80%, 100% {
            transform: translateY(0) translateX(-50%);
          }
          40% {
            transform: translateY(-10px) translateX(-50%);
          }
          60% {
            transform: translateY(-5px) translateX(-50%);
          }
        }
      `}</style>
        </div>
    );
};

export default Hero;