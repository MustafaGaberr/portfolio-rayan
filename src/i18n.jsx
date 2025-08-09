import React, { createContext, useContext, useEffect, useMemo, useState } from 'react';

const translations = {
    en: {
        nav: { home: 'Home', about: 'About', portfolio: 'Portfolio', partners: 'Partners', testimonials: 'Testimonials', contact: 'Contact' },
        hero: { tagline: "Creating Premium Advertising Campaigns for Elite Sports Clubs Across Saudi Arabia", viewPortfolio: 'View Portfolio', getInTouch: 'Get in Touch' },
        about: {
            heading: 'About Us',
            blurb: 'We craft premium visual stories and advertising campaigns tailored for elite sports clubs across Saudi Arabia. Our work blends cinematic production quality with data-informed strategy to deliver measurable impact.',
            item1Title: 'Cinematic Production', item1Desc: 'High-end visuals, editing, and sound design.',
            item2Title: 'Campaign Strategy', item2Desc: 'Creative built on audience insights.'
        },
        portfolio: { heading: 'Portfolio', sub: "Showcasing premium advertising campaigns and visual storytelling for Saudi Arabia's elite sports organizations", client: 'Client', year: 'Year', viewMore: 'View More' },
        partners: { heading: 'Our Partners', sub: 'Trusted by leading organizations we proudly collaborate with' },
        testimonials: { heading: 'Client Testimonials', sub: 'What elite sports organizations say about our premium campaigns', trustedBy: 'Trusted by Elite Clients' },
        contact: {
            heading: 'Get in Touch', sub: "Ready to elevate your sports organization with premium advertising campaigns? Let's discuss your next project.",
            startYourProject: 'Start Your Project',
            fullName: 'Full Name', email: 'Email Address', projectType: 'Project Type', projectDetails: 'Project Details', placeholder: 'Tell me about your project goals, timeline, and vision...', send: 'Send Message', followWork: 'Follow My Work'
        },
        modal: { client: 'Client', year: 'Year', category: 'Category', highlights: 'Project Highlights', h1: 'Premium cinematography and editing', h2: 'Multi-platform campaign delivery', h3: 'Arabic and English versions', h4: 'Social media optimization' },
        footer: { quickLinks: 'Quick Links', privacy: 'Privacy Policy', terms: 'Terms', desc: 'Premium advertising and media production for elite sports clubs across Saudi Arabia.', rights: 'All rights reserved.' }
    },
    ar: {
        nav: { home: 'الرئيسية', about: 'من نحن', portfolio: 'الأعمال', partners: 'شركاؤنا', testimonials: 'آراء العملاء', contact: 'تواصل' },
        hero: { tagline: 'نصنع حملات إعلانية فاخرة للأندية الرياضية النخبوية في المملكة العربية السعودية', viewPortfolio: 'استعراض الأعمال', getInTouch: 'تواصل معنا' },
        about: {
            heading: 'من نحن',
            blurb: 'نبتكر قصصًا بصريّة فاخرة وحملات إعلانية مخصّصة للأندية الرياضية في السعودية، بجودة إنتاج سينمائي واستراتيجية مدروسة لتحقيق أثر ملموس.',
            item1Title: 'إنتاج سينمائي', item1Desc: 'جودة بصرية عالية، مونتاج وصوت احترافي.',
            item2Title: 'استراتيجية الحملات', item2Desc: 'إبداع مبني على فهم الجمهور.'
        },
        portfolio: { heading: 'الأعمال', sub: 'نعرض حملاتنا الإعلانية وقصصنا البصريّة لأبرز الجهات الرياضية في السعودية', client: 'العميل', year: 'السنة', viewMore: 'اعرف المزيد' },
        partners: { heading: 'شركاؤنا', sub: 'موثوقون من قبل مؤسسات رائدة نتشرف بالتعاون معها' },
        testimonials: { heading: 'آراء العملاء', sub: 'ماذا تقول الجهات الرياضية عن حملاتنا المتميّزة', trustedBy: 'موضع ثقة عملاء نخبة' },
        contact: {
            heading: 'تواصل معنا', sub: 'هل أنت مستعد للارتقاء بمنظمتك الرياضية عبر حملات إعلانية فاخرة؟ لنتحدث عن مشروعك القادم.',
            startYourProject: 'ابدأ مشروعك',
            fullName: 'الاسم الكامل', email: 'البريد الإلكتروني', projectType: 'نوع المشروع', projectDetails: 'تفاصيل المشروع', placeholder: 'أخبرني عن أهداف المشروع والجدول الزمني والرؤية...', send: 'إرسال الرسالة', followWork: 'تابع أعمالي'
        },
        modal: { client: 'العميل', year: 'السنة', category: 'الفئة', highlights: 'أبرز ملامح المشروع', h1: 'تصوير ومونتاج سينمائي', h2: 'تسليم متعدد المنصات', h3: 'نسختان عربية وإنجليزية', h4: 'تحسين لمنصات التواصل' },
        footer: { quickLinks: 'روابط سريعة', privacy: 'الخصوصية', terms: 'الشروط', desc: 'إنتاج إعلامي وإعلاني فاخر للأندية الرياضية النخبوية في السعودية.', rights: 'جميع الحقوق محفوظة.' }
    }
};

const LanguageContext = createContext({ lang: 'en', dir: 'ltr', setLang: () => { }, t: (k) => k });

export const LanguageProvider = ({ children }) => {
    const [lang, setLang] = useState('en');
    const dir = lang === 'ar' ? 'rtl' : 'ltr';

    useEffect(() => {
        document.documentElement.setAttribute('lang', lang);
        document.documentElement.setAttribute('dir', dir);
    }, [lang, dir]);

    const t = useMemo(() => (key) => {
        const parts = key.split('.');
        return parts.reduce((acc, cur) => (acc && acc[cur] !== undefined ? acc[cur] : null), translations[lang]) ?? key;
    }, [lang]);

    const value = useMemo(() => ({ lang, dir, setLang, t }), [lang, dir, t]);
    return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
};

export const useI18n = () => useContext(LanguageContext);


