import React, { useEffect, useRef, useState, useCallback } from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { useI18n } from '../i18n.jsx';

const SiteNavbar = () => {
    const navbarRef = useRef(null);
    const [isSolid, setIsSolid] = useState(false);

    const updateNavbarStyle = useCallback(() => {
        const navbarHeight = navbarRef.current ? navbarRef.current.offsetHeight : 80;
        const heroSection = document.getElementById('home');
        const currentScroll = window.scrollY || window.pageYOffset;
        if (heroSection) {
            const heroHeight = heroSection.offsetHeight;
            setIsSolid(currentScroll >= Math.max(0, heroHeight - navbarHeight - 1));
        } else {
            setIsSolid(currentScroll > 10);
        }
    }, []);

    useEffect(() => {
        updateNavbarStyle();
        window.addEventListener('scroll', updateNavbarStyle, { passive: true });
        window.addEventListener('resize', updateNavbarStyle);
        return () => {
            window.removeEventListener('scroll', updateNavbarStyle);
            window.removeEventListener('resize', updateNavbarStyle);
        };
    }, [updateNavbarStyle]);

    const { t, lang, setLang } = useI18n();

    return (
        <Navbar
            ref={navbarRef}
            expand="lg"
            className="fixed-top navbar-dark py-3"
            style={{
                backgroundColor: isSolid ? 'rgba(26, 26, 26, 0.85)' : 'transparent',
                borderBottom: isSolid ? '1px solid var(--primary-gold)' : '1px solid transparent',
                backdropFilter: isSolid ? 'blur(4px)' : 'none',
                transition: 'background-color 0.3s ease, border-color 0.3s ease, backdrop-filter 0.3s ease'
            }}
        >
            <Container>
                <Navbar.Brand href="#home" className="d-flex align-items-center gap-2 text-white fw-bold" style={{ letterSpacing: '1px' }}>
                    <img src="/src/resources/imgs/rayan-logo.svg" alt="Rayan AlNjem Logo" style={{ width: '170px' }} />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="main-nav" className="border-0" />
                <Navbar.Collapse id="main-nav">
                    <Nav className="ms-auto align-items-lg-center">
                        <Nav.Link href="#home" className="text-white px-3 text-lg">{t('nav.home')}</Nav.Link>
                        <Nav.Link href="#about" className="text-white px-3 text-lg">{t('nav.about')}</Nav.Link>
                        <Nav.Link href="#portfolio" className="text-white px-3 text-lg">{t('nav.portfolio')}</Nav.Link>
                        <Nav.Link href="#partners" className="text-white px-3 text-lg">{t('nav.partners')}</Nav.Link>
                        <Nav.Link href="#testimonials" className="text-white px-3 text-lg">{t('nav.testimonials')}</Nav.Link>
                        <Nav.Link href="#contact" className="text-white px-3 text-lg">{t('nav.contact')}</Nav.Link>
                        <div className="d-flex align-items-center ms-lg-3 mt-3 mt-lg-0" style={{ gap: '8px' }}>
                            <button type="button" aria-label="Arabic" onClick={() => setLang('ar')} className="border-0 p-0 bg-transparent">
                                <img src="https://flagcdn.com/w40/sa.png" alt="SA" style={{ width: '32px', height: '22px', objectFit: 'cover', borderRadius: '3px' }} />
                            </button>
                            <button type="button" aria-label="English" onClick={() => setLang('en')} className="border-0 p-0 bg-transparent">
                                <img src="https://flagcdn.com/w40/gb.png" alt="UK" style={{ width: '32px', height: '22px', objectFit: 'cover', borderRadius: '3px' }} />
                            </button>
                        </div>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default SiteNavbar;

