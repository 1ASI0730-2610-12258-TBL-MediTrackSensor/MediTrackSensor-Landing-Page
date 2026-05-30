/**
 * MediTrack Sensor — i18n (ES / EN)
 */
(function () {
    const STORAGE_KEY = 'meditrack_lang';

    const TRANSLATIONS = {
        es: {
            lang_group_aria: 'Seleccionar idioma',
            meta_title: 'MediTrack Sensor',
            meta_desc:
                'MediTrack Sensor - Monitoreo IoT en tiempo real para medicamentos por TechnoByteLambders (UPC). Preservando la salud a través de datos precisos.',
            nav_inicio: 'Inicio',
            nav_tecnologia: 'Tecnología',
            nav_sectores: 'Sectores',
            nav_nosotros: 'Nosotros',
            nav_equipo: 'Equipo',
            nav_planes: 'Planes',
            footer_nav_contact: 'Contacto',
            hero_tagline: 'Monitoreo IoT para Medicamentos',
            hero_title: 'Control en tiempo real de temperatura, humedad y luz',
            hero_desc:
                'Plataforma web para clínicas, farmacias y hospitales. Alertas automáticas y trazabilidad total.',
            hero_btn_login: 'Iniciar sesión',
            float_h1: 'control de Temperatura',
            float_p1:
                'Monitoreo continuo de temperatura para biológicos y vacunas que requieren cadena de frío.',
            float_h2: 'Humedad y Luz',
            float_p2:
                'Control de humedad relativa y exposición lumínica para evitar degradación química.',
            float_h3: 'Trazabilidad Total',
            float_p3: 'Registros históricos para auditorías y cumplimiento normativo DIGEMID/MINSA.',
            about_innov: 'Innovación UPC',
            about_tag: 'QUIÉNES SOMOS',
            about_h2: 'Soluciones tecnológicas para la conservación de medicamentos',
            about_lead_html:
                '<strong>TechnoByteLambders</strong> es una startup de estudiantes de la <strong>UPC</strong> comprometida con el uso de la tecnología para mejorar el monitoreo y conservación de medicamentos en el sector salud del Perú.',
            about_mission_t: 'MISIÓN',
            about_mission_p:
                'Diseñar soluciones tecnológicas para el monitoreo en tiempo real de temperatura, humedad y luz.',
            about_vision_t: 'VISIÓN',
            about_vision_p:
                'Modernizar la gestión de medicamentos mediante IoT y plataformas digitales.',
            about_chk1: 'Integridad del producto',
            about_chk2: 'Soluciones escalables',
            about_chk3: 'Necesidades reales',
            about_team_h: 'Equipo TechnoByteLambders',
            about_team_p: 'Estudiantes UPC - Desarrollo de Software',
            tech_wm: 'MONITOREO 360',
            tech_kicker: 'Monitoreo 360°',
            tech_h2: 'Tecnología Inteligente',
            tech_lead:
                'Nuestra plataforma web permite monitorear en tiempo real temperatura, humedad y luz, generando alertas automáticas y facilitando la gestión de la conservación de medicamentos.',
            tech_f1h: 'Temperatura',
            tech_f1p:
                'Control estricto para vacunas y biológicos en rangos críticos de 2°C a 8°C.',
            tech_f2h: 'Humedad',
            tech_f2p:
                'Evitamos la degradación química y proliferación de microorganismos.',
            tech_f3h: 'Iluminación',
            tech_f3p:
                'Protección avanzada contra la fotodegradación para medicamentos sensibles.',
            tech_f4h: 'Conectividad 24/7',
            tech_f4p:
                'Alertas inmediatas vía IoT incluso en zonas de baja cobertura regional.',
            dash_sub: 'Logística Farmacéutica · DIGEMID / MINSA',
            dash_h3: 'Panel en vivo — Nodo 01',
            dash_active: 'Sistema activo',
            dash_unit_c: '°Celsius',
            dash_range_c: 'Rango: 2 – 8°C',
            dash_range_h: 'Rango: 30 – 70% RH',
            dash_range_l: 'Rango: 0 – 1000 Lux',
            dash_lux: 'Intensidad Lux',
            dash_footer_l:
                'SEGURIDAD AES-256 · GRADO FARMACÉUTICO',
            dash_footer_r: 'Última actualización: hace 2 min',
            mini_alerts: 'ALERTAS HOY',
            mini_refresh: 'REFRESCO',
            tech_bottom_p:
                'MediTrack Sensor permite monitorear en tiempo real las condiciones de almacenamiento de medicamentos, generando alertas automáticas y almacenando datos históricos para garantizar su conservación adecuada.',
            tech_cta: 'Ver Planes de Monitoreo',
            sec_wm: 'SEGMENTOS',
            sec_kicker: 'Sectores Objetivo',
            sec_h2: 'Implementación estratégica',
            sec_lead:
                'Soluciones de monitoreo adaptadas a las necesidades de hospitales, clínicas, farmacias y almacenes farmacéuticos.',
            sec_b1: 'Salud',
            sec_t1: 'Hospitales y Clínicas',
            sec_p1:
                'Monitoreo integral para almacenes hospitalarios y áreas de almacenamiento de biológicos. Cumplimiento normativo MINSA.',
            sec_tag1a: ' tiempo real',
            sec_tag1b: 'MINSA',
            sec_tag1c: 'Cadena de frío',
            sec_l1: 'SABER MÁS',
            sec_b2: 'Distribución',
            sec_t2: 'Centros de Distribución',
            sec_p2:
                'Optimización para almacenes farmacéuticos y centros de distribución como los de Lurín. Multi-sedes centralizado.',
            sec_tag2a: 'Multi-sedes',
            sec_tag2b: 'Centralizado',
            sec_tag2c: 'Alertas',
            sec_l2: 'MÁS INFO',
            sec_b3: 'Retail',
            sec_t3: 'Farmacias',
            sec_p3:
                'Soluciones compactas para cumplimiento de normas DIGEMID. Control de temperatura y humedad en zonas de visualización.',
            sec_tag3a: 'Compacto',
            sec_tag3b: 'DIGEMID',
            sec_tag3c: 'Instalación sencilla',
            sec_l3: 'VER PLANES',
            stat_l1: 'Sensores Instalados',
            stat_l2: 'Hubs Logísticos',
            stat_l3: 'Eficiencia Logística',
            stat_l4: 'Activos para ti',
            team_h2: 'Integrantes del Equipo',
            team_lead:
                'Impulsando la transformación digital en el sector salud a través de innovación, compromiso y precisión técnica.',
            plan_wm: 'NUESTROS PLANES',
            plan_kicker: 'Inversión Inteligente',
            plan_h2: 'Planes de Monitoreo',
            plan_lead:
                'Soluciones de monitoreo adaptadas a las necesidades específicas de cada nivel de la cadena',
            plan_basic: 'BÁSICO',
            plan_pro: 'PROFESIONAL',
            plan_prem: 'PREMIUM',
            plan_period: '/mes',
            plan_custom: 'Personalizado',
            plan_rec: 'RECOMENDADO',
            plan_d1: 'Ideal para farmacias y clínicas con una sola sede. Monitoreo básico en tiempo real.',
            plan_d2: 'Para centros de distribución y hospitales con múltiples áreas o sucursales.',
            plan_d3: 'Para cadenas farmacéuticas y redes de salud con múltiples sedes a nivel nacional.',
            plan1_f1: 'Monitoreo de 1 sede',
            plan1_f2: 'Visualización en tiempo real',
            plan1_f3: 'Alertas básicas por email',
            plan1_f4: '30 días de historial',
            plan1_f5: 'Múltiples áreas',
            plan1_f6: 'Reportes avanzados',
            plan1_btn: 'Seleccionar Básico',
            plan2_f1: 'Supervisión de varias áreas',
            plan2_f2: 'Alertas avanzadas (SMS/WhatsApp)',
            plan2_f3: '1 año de historial',
            plan2_f4: 'Reportes y dashboards',
            plan2_f5: 'Historial extendido',
            plan2_f6: 'Integración con sistemas',
            plan2_btn: 'Comenzar ahora',
            plan3_f1: 'Monitoreo multi-sedes',
            plan3_f2: 'Gestión centralizada',
            plan3_f3: 'Automatización total',
            plan3_f4: 'Análisis de tendencias',
            plan3_f5: 'Soporte prioritario 24/7',
            plan3_f6: 'Cumplimiento DIGEMID/MINSA',
            plan3_btn: 'Contactar ventas',
            plan_note:
                'Todos los planes incluyen cifrado AES-256 y cumplimiento normativo farmacéutico',
            contact_kicker: 'Soporte Especializado',
            contact_h2: 'Habla con Expertos',
            contact_lead:
                'Nuestro equipo de especialistas en IoT está listo para ayudarte a optimizar tu cadena de frío. Contáctanos para una demostración personalizada y garantiza la integridad de tu inventario.',
            contact_loc: 'Ubicación',
            contact_loc_p: 'Universidad Peruana de Ciencias Aplicadas <br> Lima, Perú',
            contact_mail: 'Email',
            contact_phone: 'Teléfono',
            contact_hours: 'Horario',
            contact_hours_p: 'Lun - Vie: 09:00 - 18:00',
            contact_social: 'Sigue nuestras redes sociales',
            contact_card_h3: '¿Listo para reducir pérdidas y mejorar la conservación?',
            contact_card_p: 'MediTrack Sensor entrega telemetría confiable para optimizar el almacenamiento, humedad y luz. Comienza con un piloto rápido y comprueba el impacto en tu operación.',
            contact_btn_start: 'Empezar ahora',
            contact_btn_demo: 'Agendar demo comercial',
            contact_li1: 'Instalación y prueba en sede en 2 semanas',
            contact_li2: 'Onboarding y soporte incluidos',
            contact_li3: 'Resultados medibles en 30 días',
            footer_tagline: 'Monitoreo inteligente para medicamentos.',
            footer_subscribe: 'Suscríbete al boletín',
            ph_subscribe: 'Tu correo electrónico',
            footer_copy: '© 2024 TechnoByteLambders (UPC). Todos los derechos reservados.',
            footer_terms: 'Términos y Condiciones',
            footer_legal_copy: '© 2026 MediTrack Sensor (UPC). Todos los derechos reservados.',
            terms_back: 'Volver al sitio',
            terms_doc_title: 'Términos y Condiciones | MediTrack Sensor (UPC)',
            terms_modal_title: 'Términos y Condiciones',
            modal_ok: 'Entendido',
            terms_body_html: `<p class="terms-lead text-secondary mb-4">Última actualización: mayo de 2026 · Proyecto académico — Universidad Peruana de Ciencias Aplicadas (UPC)</p>
<p class="terms-section-title">1. Identificación</p>
<p>El presente sitio web divulga el proyecto MediTrack Sensor, desarrollado por el equipo TechnoByteLambders como parte de su formación en Ingeniería de Software en la UPC. Los datos de contacto publicados en la landing son referenciales para fines educativos y de demostración.</p>
<p class="terms-section-title">2. Objeto</p>
<p>Estas condiciones regulan el acceso y uso del sitio informativo. El contenido tiene carácter descriptivo sobre una solución IoT de monitoreo; no constituye por sí mismo una oferta comercial vinculante salvo que se formalice por otros medios acordados con los titulares del proyecto.</p>
<p class="terms-section-title">3. Uso permitido</p>
<p>El usuario se compromete a:</p>
<ul class="terms-list mb-3">
<li>Utilizar el sitio de forma lícita y respetuosa con la normativa vigente.</li>
<li>No intentar vulnerar la seguridad, la disponibilidad ni la integridad del sitio o de sistemas vinculados.</li>
<li>No reproducir masivamente los contenidos sin mención de autoría y fines académicos o informativos.</li>
</ul>
<p class="terms-section-title">4. Propiedad intelectual</p>
<p>Marca, logotipos, textos, imágenes y diseño de la landing son obra del equipo o materiales utilizados con fines académicos. Queda prohibido el uso comercial no autorizado que implique confusión sobre el origen del proyecto.</p>
<p class="terms-section-title">5. Limitación de responsabilidad</p>
<p>La información se ofrece «tal cual», sin garantía de exhaustividad. MediTrack Sensor no se responsabiliza por decisiones empresariales tomadas únicamente con base en el material de este sitio, ni por interrupciones temporales del servicio de alojamiento.</p>
<p class="terms-section-title">6. Enlaces externos</p>
<p>Los enlaces a aplicaciones o demos de terceros (por ejemplo, entornos de prueba en la nube) se ofrecen para conveniencia del visitante. No controlamos esos destinos; su uso queda sujeto a las políticas de cada plataforma.</p>
<p class="terms-section-title">7. Datos personales y formularios</p>
<p>Cualquier tratamiento real de datos personales deberá contar con bases legales y medidas técnicas adecuadas conforme a la normativa peruana de protección de datos aplicable en el momento del tratamiento.</p>
<p class="terms-section-title">8. Modificaciones</p>
<p>El equipo puede actualizar estos términos para reflejar cambios en el proyecto o requisitos académicos. La fecha de «última actualización» indicará la versión vigente.</p>
<p class="terms-section-title">9. Legislación aplicable</p>
<p>Para cualquier controversia relacionada con el uso de este sitio informativo, resultarán aplicables las leyes de la República del Perú, sometiéndose las partes a los tribunales competentes de Lima, salvo norma imperativa en contrario.</p>
<p class="terms-section-title">10. Contacto</p>
<p>Para consultas sobre estos términos o el proyecto, puede utilizarse el correo indicado en la sección de contacto de la página principal: <a href="mailto:contacto@technobytelambders.pe">contacto@technobytelambders.pe</a>.</p>`
        },
        en: {
            lang_group_aria: 'Choose language',
            meta_title: 'MediTrack Sensor',
            meta_desc:
                'MediTrack Sensor — Real-time IoT monitoring for medicines by TechnoByteLambders (UPC). Protecting health through accurate data.',
            nav_inicio: 'Home',
            nav_tecnologia: 'Technology',
            nav_sectores: 'Sectors',
            nav_nosotros: 'About',
            nav_equipo: 'Team',
            nav_planes: 'Plans',
            footer_nav_contact: 'Contact',
            hero_tagline: 'IoT monitoring for medicines',
            hero_title: 'Real-time control of temperature, humidity, and light',
            hero_desc:
                'Web platform for clinics, pharmacies, and hospitals. Automated alerts and full traceability.',
            hero_btn_login: 'Log in',
            float_h1: 'Temperature control',
            float_p1:
                'Continuous temperature monitoring for biologics and vaccines that require the cold chain.',
            float_h2: 'Humidity and light',
            float_p2:
                'Relative humidity and light exposure control to avoid chemical degradation.',
            float_h3: 'Full traceability',
            float_p3:
                'Historical records for audits and DIGEMID/MINSA regulatory compliance.',
            about_innov: 'UPC innovation',
            about_tag: 'WHO WE ARE',
            about_h2: 'Technology solutions for medicine storage',
            about_lead_html:
                '<strong>TechnoByteLambders</strong> is a student startup from <strong>UPC</strong> committed to using technology to improve monitoring and preservation of medicines in Peru’s health sector.',
            about_mission_t: 'MISSION',
            about_mission_p:
                'Design technology solutions for real-time monitoring of temperature, humidity, and light.',
            about_vision_t: 'VISION',
            about_vision_p:
                'Modernize medicine management through IoT and digital platforms.',
            about_chk1: 'Product integrity',
            about_chk2: 'Scalable solutions',
            about_chk3: 'Real-world needs',
            about_team_h: 'TechnoByteLambders team',
            about_team_p: 'UPC students — Software development',
            tech_wm: '360 MONITORING',
            tech_kicker: '360° monitoring',
            tech_h2: 'Smart technology',
            tech_lead:
                'Our web platform monitors temperature, humidity, and light in real time, generates automatic alerts, and supports proper medicine storage management.',
            tech_f1h: 'Temperature',
            tech_f1p:
                'Strict control for vaccines and biologics in critical 2°C to 8°C ranges.',
            tech_f2h: 'Humidity',
            tech_f2p:
                'We help prevent chemical degradation and microbial growth.',
            tech_f3h: 'Lighting',
            tech_f3p:
                'Advanced protection against photodegradation for light-sensitive medicines.',
            tech_f4h: '24/7 connectivity',
            tech_f4p:
                'Immediate IoT alerts, even in areas with limited regional coverage.',
            dash_sub: 'Pharmaceutical logistics · DIGEMID / MINSA',
            dash_h3: 'Live dashboard — Node 01',
            dash_active: 'System active',
            dash_unit_c: '°Celsius',
            dash_range_c: 'Range: 2 – 8°C',
            dash_range_h: 'Range: 30 – 70% RH',
            dash_range_l: 'Range: 0 – 1000 Lux',
            dash_lux: 'Lux intensity',
            dash_footer_l: 'AES-256 SECURITY · PHARMACEUTICAL GRADE',
            dash_footer_r: 'Last updated: 2 min ago',
            mini_alerts: 'ALERTS TODAY',
            mini_refresh: 'REFRESH',
            tech_bottom_p:
                'MediTrack Sensor monitors storage conditions for medicines in real time, generates automatic alerts, and stores historical data to help ensure proper preservation.',
            tech_cta: 'View monitoring plans',
            sec_wm: 'SEGMENTS',
            sec_kicker: 'Target sectors',
            sec_h2: 'Strategic implementation',
            sec_lead:
                'Monitoring solutions tailored to hospitals, clinics, pharmacies, and pharmaceutical warehouses.',
            sec_b1: 'Health',
            sec_t1: 'Hospitals and clinics',
            sec_p1:
                'End-to-end monitoring for hospital warehouses and biological storage areas. MINSA regulatory alignment.',
            sec_tag1a: ' real time',
            sec_tag1b: 'MINSA',
            sec_tag1c: 'Cold chain',
            sec_l1: 'LEARN MORE',
            sec_b2: 'Distribution',
            sec_t2: 'Distribution centers',
            sec_p2:
                'Optimization for pharmaceutical warehouses and hubs such as Lurín. Centralized multi-site.',
            sec_tag2a: 'Multi-site',
            sec_tag2b: 'Centralized',
            sec_tag2c: 'Alerts',
            sec_l2: 'MORE INFO',
            sec_b3: 'Retail',
            sec_t3: 'Pharmacies',
            sec_p3:
                'Compact solutions for DIGEMID compliance. Temperature and humidity control in display areas.',
            sec_tag3a: 'Compact',
            sec_tag3b: 'DIGEMID',
            sec_tag3c: 'Easy setup',
            sec_l3: 'VIEW PLANS',
            stat_l1: 'Sensors deployed',
            stat_l2: 'Logistics hubs',
            stat_l3: 'Logistics efficiency',
            stat_l4: 'Always on for you',
            team_h2: 'Team members',
            team_lead:
                'Driving digital transformation in healthcare through innovation, commitment, and technical precision.',
            plan_wm: 'OUR PLANS',
            plan_kicker: 'Smart investment',
            plan_h2: 'Monitoring plans',
            plan_lead:
                'Monitoring solutions adapted to each level of the supply chain.',
            plan_basic: 'BASIC',
            plan_pro: 'PROFESSIONAL',
            plan_prem: 'PREMIUM',
            plan_period: '/mo',
            plan_custom: 'Custom',
            plan_rec: 'RECOMMENDED',
            plan_d1: 'Ideal for pharmacies and clinics with a single site. Basic real-time monitoring.',
            plan_d2: 'For distribution centers and hospitals with multiple areas or branches.',
            plan_d3: 'For pharmacy chains and health networks with multiple sites nationwide.',
            plan1_f1: 'Single-site monitoring',
            plan1_f2: 'Real-time visualization',
            plan1_f3: 'Basic email alerts',
            plan1_f4: '30-day history',
            plan1_f5: 'Multiple areas',
            plan1_f6: 'Advanced reports',
            plan1_btn: 'Choose Basic',
            plan2_f1: 'Multi-area supervision',
            plan2_f2: 'Advanced alerts (SMS/WhatsApp)',
            plan2_f3: '1-year history',
            plan2_f4: 'Reports and dashboards',
            plan2_f5: 'Extended history',
            plan2_f6: 'Systems integration',
            plan2_btn: 'Get started',
            plan3_f1: 'Multi-site monitoring',
            plan3_f2: 'Centralized management',
            plan3_f3: 'Full automation',
            plan3_f4: 'Trend analysis',
            plan3_f5: 'Priority 24/7 support',
            plan3_f6: 'DIGEMID/MINSA compliance',
            plan3_btn: 'Contact sales',
            plan_note:
                'All plans include AES-256 encryption and pharmaceutical regulatory alignment',
            contact_kicker: 'Specialized support',
            contact_h2: 'Talk to experts',
            contact_lead:
                'Our IoT specialists are ready to help you optimize your cold chain. Contact us for a tailored demo and protect your inventory integrity.',
            contact_loc: 'Location',
            contact_loc_p: 'Universidad Peruana de Ciencias Aplicadas <br> Lima, Peru',
            contact_mail: 'Email',
            contact_phone: 'Phone',
            contact_hours: 'Hours',
            contact_hours_p: 'Mon – Fri: 09:00 – 18:00',
            contact_social: 'Follow us on social media',
            contact_card_h3: 'Ready to reduce losses and improve preservation?',
            contact_card_p: 'MediTrack Sensor delivers reliable telemetry to optimize storage, humidity, and light. Start with a quick pilot and see the impact on your operation.',
            contact_btn_start: 'Get started now',
            contact_btn_demo: 'Schedule commercial demo',
            contact_li1: 'On-site installation and testing in 2 weeks',
            contact_li2: 'Onboarding and support included',
            contact_li3: 'Measurable results in 30 days',
            footer_tagline: 'Smart monitoring for medicines.',
            footer_subscribe: 'Subscribe to the newsletter',
            ph_subscribe: 'Your email address',
            footer_copy: '© 2024 TechnoByteLambders (UPC). All rights reserved.',
            footer_terms: 'Terms and Conditions',
            footer_legal_copy: '© 2026 MediTrack Sensor (UPC). All rights reserved.',
            terms_back: 'Return to site',
            terms_doc_title: 'Terms and Conditions | MediTrack Sensor (UPC)',
            terms_modal_title: 'Terms and Conditions',
            modal_ok: 'Got it',
            terms_body_html: `<p class="terms-lead text-secondary mb-4">Last updated: May 2026 · Academic project — Universidad Peruana de Ciencias Aplicadas (UPC)</p>
<p class="terms-section-title">1. Identification</p>
<p>This website presents the MediTrack Sensor project, developed by the TechnoByteLambders team as part of their Software Engineering studies at UPC. Contact details on the landing page are indicative for educational and demonstration purposes.</p>
<p class="terms-section-title">2. Purpose</p>
<p>These terms govern access to and use of this informational site. The content describes an IoT monitoring solution in general terms; it does not constitute a binding commercial offer unless agreed separately with the project owners.</p>
<p class="terms-section-title">3. Permitted use</p>
<p>Users agree to:</p>
<ul class="terms-list mb-3">
<li>Use the site lawfully and in compliance with applicable regulations.</li>
<li>Not attempt to compromise the security, availability, or integrity of the site or related systems.</li>
<li>Not mass-reproduce content without attribution and without academic or informational intent.</li>
</ul>
<p class="terms-section-title">4. Intellectual property</p>
<p>Branding, logos, text, images, and landing design are the team’s work or materials used for academic purposes. Unauthorized commercial use that creates confusion about the project’s origin is prohibited.</p>
<p class="terms-section-title">5. Limitation of liability</p>
<p>Information is provided “as is” without a guarantee of completeness. MediTrack Sensor is not liable for business decisions based solely on this site’s materials, nor for temporary interruptions of hosting services.</p>
<p class="terms-section-title">6. External links</p>
<p>Links to third-party applications or demos (e.g. cloud test environments) are provided for convenience. We do not control those destinations; use is subject to each platform’s policies.</p>
<p class="terms-section-title">7. Personal data and forms</p>
<p>Any real processing of personal data must have a lawful basis and appropriate technical measures under applicable Peruvian data-protection law at the time of processing.</p>
<p class="terms-section-title">8. Changes</p>
<p>The team may update these terms to reflect project or academic requirement changes. The “last updated” date will indicate the current version.</p>
<p class="terms-section-title">9. Applicable law</p>
<p>For disputes related to use of this informational site, the laws of the Republic of Peru apply, and the parties submit to the competent courts of Lima, unless mandatory law provides otherwise.</p>
<p class="terms-section-title">10. Contact</p>
<p>For questions about these terms or the project, use the email shown in the main page contact section: <a href="mailto:contacto@technobytelambders.pe">contacto@technobytelambders.pe</a>.</p>`
        }
    };

    let currentLang = 'en';

    function getTable(lang) {
        return TRANSLATIONS[lang] || TRANSLATIONS.es;
    }

    function applyI18n(lang) {
        currentLang = lang === 'en' ? 'en' : 'es';
        localStorage.setItem(STORAGE_KEY, currentLang);
        document.documentElement.lang = currentLang;

        const T = getTable(currentLang);
        const metaDesc = document.querySelector('meta[name="description"]');
        if (metaDesc && T.meta_desc) metaDesc.setAttribute('content', T.meta_desc);
        if (document.body.classList.contains('page-terms') && T.terms_doc_title) {
            document.title = T.terms_doc_title;
        } else if (T.meta_title) {
            document.title = T.meta_title;
        }

        document.querySelectorAll('[data-i18n]').forEach((el) => {
            const key = el.getAttribute('data-i18n');
            if (key && T[key] !== undefined) el.textContent = T[key];
        });

        document.querySelectorAll('[data-i18n-html]').forEach((el) => {
            const key = el.getAttribute('data-i18n-html');
            if (key && T[key] !== undefined) el.innerHTML = T[key];
        });

        document.querySelectorAll('[data-i18n-placeholder]').forEach((el) => {
            const key = el.getAttribute('data-i18n-placeholder');
            if (key && T[key] !== undefined) el.setAttribute('placeholder', T[key]);
        });

        document.querySelectorAll('[data-i18n-aria]').forEach((el) => {
            const key = el.getAttribute('data-i18n-aria');
            if (key && T[key] !== undefined) el.setAttribute('aria-label', T[key]);
        });

        document.querySelectorAll('.lang-switch [data-lang]').forEach((btn) => {
            btn.classList.toggle('active', btn.getAttribute('data-lang') === currentLang);
            btn.setAttribute('aria-pressed', btn.classList.contains('active') ? 'true' : 'false');
        });

        window.dispatchEvent(new CustomEvent('meditrack:i18n', { detail: { lang: currentLang } }));
    }

    function bindLangSwitcher() {
        document.querySelectorAll('.lang-switch [data-lang]').forEach((btn) => {
            btn.addEventListener('click', () => {
                const lang = btn.getAttribute('data-lang');
                applyI18n(lang);
            });
        });
    }

    window.MEDITRACK_I18N = {
        apply: applyI18n,
        getLang: () => currentLang,
        getHero: () => {
            const T = getTable(currentLang);
            return {
                tagline: T.hero_tagline,
                title: T.hero_title,
                desc: T.hero_desc
            };
        },
        translations: TRANSLATIONS
    };

    document.addEventListener('DOMContentLoaded', () => {
        const saved = localStorage.getItem(STORAGE_KEY) || 'en';
        applyI18n(saved);
        bindLangSwitcher();
    });
})();
