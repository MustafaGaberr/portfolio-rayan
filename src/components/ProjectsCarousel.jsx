import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Carousel } from 'react-bootstrap';
import { Play, ExternalLink } from 'lucide-react';
import { useI18n } from '../i18n.jsx';
import ProjectModal from './ProjectModal';

const ProjectsCarousel = () => {
    const [showModal, setShowModal] = useState(false);
    const [selectedProject, setSelectedProject] = useState(null);
    const { t } = useI18n();

    const projects = [
        {
            id: 1,
            title: 'Al-Najma FC Championship Campaign',
            description: 'Premium advertising campaign celebrating Al-Najma FC\'s championship victory with cinematic storytelling.',
            thumbnail: 'https://images.pexels.com/photos/274506/pexels-photo-274506.jpeg?auto=compress&cs=tinysrgb&w=1200',
            category: 'Sports Campaign',
            client: 'Al-a FC',
            year: '2024',
            gallery: [
                'https://images.pexels.com/photos/274506/pexels-photo-274506.jpeg?auto=compress&cs=tinysrgb&w=1200',
                'https://images.pexels.com/photos/1884574/pexels-photo-1884574.jpeg?auto=compress&cs=tinysrgb&w=1200',
                'https://images.pexels.com/photos/209977/pexels-photo-209977.jpeg?auto=compress&cs=tinysrgb&w=1200'
            ]
        },
        {
            id: 2,
            title: 'Saudi League Season Launch',
            description: 'Comprehensive visual identity and campaign for the Saudi Professional League season opening.',
            thumbnail: 'https://images.pexels.com/photos/1884574/pexels-photo-1884574.jpeg?auto=compress&cs=tinysrgb&w=1200',
            category: 'League Campaign',
            client: 'Saudi Pro League',
            year: '2024',
            gallery: [
                'https://images.pexels.com/photos/1884574/pexels-photo-1884574.jpeg?auto=compress&cs=tinysrgb&w=1200',
                'https://images.pexels.com/photos/274506/pexels-photo-274506.jpeg?auto=compress&cs=tinysrgb&w=1200',
                'https://images.pexels.com/photos/442576/pexels-photo-442576.jpeg?auto=compress&cs=tinysrgb&w=1200'
            ]
        },
        {
            id: 3,
            title: 'Elite Athletes Documentary',
            description: 'Behind-the-scenes documentary series featuring Saudi Arabia\'s top football personalities.',
            thumbnail: 'https://images.pexels.com/photos/209977/pexels-photo-209977.jpeg?auto=compress&cs=tinysrgb&w=1200',
            category: 'Documentary',
            client: 'Saudi Sports Authority',
            year: '2023',
            gallery: [
                'https://images.pexels.com/photos/209977/pexels-photo-209977.jpeg?auto=compress&cs=tinysrgb&w=1200',
                'https://images.pexels.com/photos/442576/pexels-photo-442576.jpeg?auto=compress&cs=tinysrgb&w=1200',
                'https://images.pexels.com/photos/274506/pexels-photo-274506.jpeg?auto=compress&cs=tinysrgb&w=1200'
            ]
        }
    ];

    const handleViewMore = (project) => {
        setSelectedProject(project);
        setShowModal(true);
    };

    return (
        <section id="portfolio" className="section-padding bg-light">
            <Container>
                <Row className="mb-5">
                    <Col lg={8} className="mx-auto text-center">
                        <h2
                            className="display-4 fw-bold mb-4"
                            style={{ fontFamily: 'Readex Pro, sans-serif' }}
                        >
                            <span className="text-gold">{t('portfolio.heading')}</span>
                        </h2>
                        <p className="lead text-muted">
                            {t('portfolio.sub')}
                        </p>
                    </Col>
                </Row>

                <Row>
                    <Col>
                        <Carousel
                            interval={4000}
                            indicators={true}
                            controls={true}
                            className="luxury-carousel"
                        >
                            {projects.map((project) => (
                                <Carousel.Item key={project.id}>
                                    <div className="carousel-project-card">
                                        <Row className="align-items-center g-0">
                                            <Col lg={7}>
                                                <div className="project-image-container position-relative overflow-hidden">
                                                    <img
                                                        src={project.thumbnail}
                                                        alt={project.title}
                                                        className="w-100 h-100 transition-smooth"
                                                        style={{
                                                            objectFit: 'cover',
                                                            height: '500px',
                                                            filter: 'brightness(0.9)'
                                                        }}
                                                    />
                                                    <div className="position-absolute top-50 start-50 translate-middle">
                                                        <div
                                                            className="play-button bg-gold rounded-circle d-flex align-items-center justify-content-center transition-smooth"
                                                            style={{ width: '80px', height: '80px', cursor: 'pointer' }}
                                                            onClick={() => handleViewMore(project)}
                                                        >
                                                            <Play size={32} className="text-white ms-1" />
                                                        </div>
                                                    </div>
                                                    <div
                                                        className="position-absolute w-100 h-100 top-0 start-0 transition-smooth"
                                                        style={{ background: 'rgba(0,0,0,0.4)' }}
                                                    ></div>
                                                </div>
                                            </Col>
                                            <Col lg={5}>
                                                <div className="p-5">
                                                    <div className="mb-3">
                                                        <span className="badge bg-gold text-white px-3 py-2 rounded-0 fw-normal">
                                                            {project.category}
                                                        </span>
                                                    </div>
                                                    <h3
                                                        className="fw-bold mb-3"
                                                        style={{ fontFamily: 'Readex Pro, sans-serif' }}
                                                    >
                                                        {project.title}
                                                    </h3>
                                                    <p className="text-muted mb-4 lh-lg">
                                                        {project.description}
                                                    </p>
                                                    <div className="mb-4">
                                                        <div className="d-flex justify-content-between text-sm">
                                                            <span className="text-muted">{t('portfolio.client')}:</span>
                                                            <span className="fw-semibold">{project.client}</span>
                                                        </div>
                                                        <div className="d-flex justify-content-between text-sm">
                                                            <span className="text-muted">{t('portfolio.year')}:</span>
                                                            <span className="fw-semibold">{project.year}</span>
                                                        </div>
                                                    </div>
                                                    <button
                                                        className="btn btn-outline-gold rounded-0 d-flex align-items-center gap-2"
                                                        onClick={() => handleViewMore(project)}
                                                    >
                                                        <ExternalLink size={18} />
                                                        {t('portfolio.viewMore')}
                                                    </button>
                                                </div>
                                            </Col>
                                        </Row>
                                    </div>
                                </Carousel.Item>
                            ))}
                        </Carousel>
                    </Col>
                </Row>

                <ProjectModal
                    show={showModal}
                    onHide={() => setShowModal(false)}
                    project={selectedProject}
                />

                <style jsx>{`
          .carousel-project-card {
            background: white;
            border-radius: 0;
            overflow: hidden;
            box-shadow: 0 20px 60px rgba(0, 0, 0, 0.1);
          }

          .project-image-container:hover img {
            transform: scale(1.05);
          }

          .project-image-container:hover .play-button {
            transform: scale(1.1);
          }

          .luxury-carousel .carousel-indicators button {
            width: 50px;
            height: 4px;
            border-radius: 0;
            background-color: var(--primary-gold);
          }

          .luxury-carousel .carousel-control-prev,
          .luxury-carousel .carousel-control-next {
            width: 60px;
            height: 60px;
            top: 50%;
            transform: translateY(-50%);
            background-color: var(--primary-gold);
            border-radius: 50%;
            opacity: 0.9;
            box-shadow: 0 10px 25px rgba(0,0,0,0.2);
          }

          /* Default: keep a small offset on mobile */
          .luxury-carousel .carousel-control-prev { left: 10px; }
          .luxury-carousel .carousel-control-next { right: 10px; }

          /* On larger screens, push controls outside the carousel card */
          @media (min-width: 992px) {
            .luxury-carousel .carousel-control-prev { left: -80px; }
            .luxury-carousel .carousel-control-next { right: -80px; }
          }
        `}</style>
            </Container>
        </section>
    );
};

export default ProjectsCarousel;