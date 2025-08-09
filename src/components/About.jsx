import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { useI18n } from '../i18n.jsx';

const About = () => {
    const { t } = useI18n();
    return (
        <section id="about" className="section-padding bg-light">
            <Container>
                <Row className="align-items-center gy-4">
                    <Col lg={6}>
                        <h2 className="display-5 fw-bold mb-3" style={{ fontFamily: 'Readex Pro, sans-serif' }}>
                            {t('about.heading')} <span className="text-gold"></span>
                        </h2>
                        <div className="mb-3" style={{ width: '80px', height: '3px', background: 'var(--primary-gold)' }} />
                        <p className="lead text-muted mb-4">
                            {t('about.blurb')}
                        </p>
                        <Row className="g-3">
                            <Col sm={6}>
                                <div className="p-3 bg-white" style={{ borderLeft: '4px solid var(--primary-gold)' }}>
                                    <h6 className="fw-bold mb-1">{t('about.item1Title')}</h6>
                                    <p className="mb-0 text-muted">{t('about.item1Desc')}</p>
                                </div>
                            </Col>
                            <Col sm={6}>
                                <div className="p-3 bg-white" style={{ borderLeft: '4px solid var(--primary-gold)' }}>
                                    <h6 className="fw-bold mb-1">{t('about.item2Title')}</h6>
                                    <p className="mb-0 text-muted">{t('about.item2Desc')}</p>
                                </div>
                            </Col>
                        </Row>
                    </Col>
                    <Col lg={6}>
                        <div className="ratio ratio-16x9 luxury-shadow">
                            <iframe
                                src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                                title="About video"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                allowFullScreen
                            />
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default About;


