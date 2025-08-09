import React from 'react';
import { Modal, Container, Row, Col, Carousel } from 'react-bootstrap';
import { X, Calendar, User, Tag } from 'lucide-react';

const ProjectModal = ({ show, onHide, project }) => {
    if (!project) return null;

    return (
        <Modal
            show={show}
            onHide={onHide}
            size="xl"
            centered
            className="project-modal"
        >
            <Modal.Header className="border-0 pb-0">
                <button
                    type="button"
                    className="btn-close position-absolute top-0 end-0 m-3 z-3"
                    onClick={onHide}
                    style={{
                        background: 'var(--primary-gold)',
                        borderRadius: '50%',
                        width: '40px',
                        height: '40px'
                    }}
                >
                    <X size={20} className="text-white" />
                </button>
            </Modal.Header>

            <Modal.Body className="p-0">
                <Container fluid>
                    <Row>
                        <Col lg={8} className="p-0">
                            <Carousel className="project-gallery-carousel">
                                {project.gallery.map((image, index) => (
                                    <Carousel.Item key={index}>
                                        <img
                                            src={image}
                                            alt={`${project.title} - ${index + 1}`}
                                            className="w-100"
                                            style={{ height: '500px', objectFit: 'cover' }}
                                        />
                                    </Carousel.Item>
                                ))}
                            </Carousel>
                        </Col>

                        <Col lg={4} className="p-5">
                            <div className="project-details">
                                <div className="mb-3">
                                    <span className="badge bg-gold text-white px-3 py-2 rounded-0">
                                        {project.category}
                                    </span>
                                </div>

                                <h2
                                    className="fw-bold mb-4"
                                    style={{ fontFamily: 'Playfair Display, serif' }}
                                >
                                    {project.title}
                                </h2>

                                <p className="text-muted mb-4 lh-lg">
                                    {project.description}
                                </p>

                                <div className="project-meta mb-4">
                                    <div className="d-flex align-items-center mb-3">
                                        <User size={18} className="text-gold me-3" />
                                        <div>
                                            <small className="text-muted d-block">Client</small>
                                            <span className="fw-semibold">{project.client}</span>
                                        </div>
                                    </div>

                                    <div className="d-flex align-items-center mb-3">
                                        <Calendar size={18} className="text-gold me-3" />
                                        <div>
                                            <small className="text-muted d-block">Year</small>
                                            <span className="fw-semibold">{project.year}</span>
                                        </div>
                                    </div>

                                    <div className="d-flex align-items-center mb-4">
                                        <Tag size={18} className="text-gold me-3" />
                                        <div>
                                            <small className="text-muted d-block">Category</small>
                                            <span className="fw-semibold">{project.category}</span>
                                        </div>
                                    </div>
                                </div>

                                <div className="border-top pt-4">
                                    <h5 className="fw-bold mb-3">Project Highlights</h5>
                                    <ul className="list-unstyled">
                                        <li className="mb-2">✓ Premium cinematography and editing</li>
                                        <li className="mb-2">✓ Multi-platform campaign delivery</li>
                                        <li className="mb-2">✓ Arabic and English versions</li>
                                        <li className="mb-2">✓ Social media optimization</li>
                                    </ul>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </Modal.Body>

            <style jsx>{`
        .project-modal .modal-content {
          border: none;
          border-radius: 0;
          overflow: hidden;
        }
        
        .project-gallery-carousel .carousel-control-prev,
        .project-gallery-carousel .carousel-control-next {
          width: 50px;
          height: 50px;
          top: 50%;
          transform: translateY(-50%);
          background-color: rgba(212, 175, 55, 0.9);
          border-radius: 50%;
        }
        
        .project-gallery-carousel .carousel-indicators button {
          width: 40px;
          height: 3px;
          background-color: var(--primary-gold);
          border-radius: 0;
        }
      `}</style>
        </Modal>
    );
};

export default ProjectModal;