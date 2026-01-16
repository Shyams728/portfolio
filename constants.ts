export const projects = [
    {
        id: 'p1',
        title: 'Maintenance Analytics Dashboard',
        description: 'Industrial IoT dashboard for tracking machine downtime, RCFA, and predictive maintenance schedules. Directly leverages manufacturing domain expertise.',
        tech: ['Python', 'Streamlit', 'Pandas', 'Plotly'],
        link: 'https://github.com/Shyams728/maintanance_analytics_dashboard',
        demoLink: 'https://shyamsmaintananceanalyticsdashboard.streamlit.app/',
        category: 'Analytics',
        stats: { label: 'Utility', value: 'High' }
    },
    {
        id: 'p3',
        title: 'PhonePe Data Visualization',
        description: 'Geo-spatial analysis of digital transaction data across India using PhonePe pulse data.',
        tech: ['Python', 'GeoPandas', 'Streamlit', 'Plotly'],
        link: 'https://github.com/Shyams728/phonepe_data_visualisation',
        demoLink: 'https://shyamsphonepedatavisualisation.streamlit.app/',
        category: 'Analytics'
    },
    {
        id: 'p4',
        title: 'RedBus Data Scraping',
        description: 'Automated pipeline to scrape bus routes, pricing, and availability to analyze transport trends.',
        tech: ['Selenium', 'Python', 'SQL', 'Automation'],
        link: 'https://github.com/Shyams728/redbus-data-scraping',
        category: 'Web Scraping'
    },
    {
        id: 'p7',
        title: 'Machine Learning Projects',
        description: 'A comprehensive collection of various ML algorithms and experiments, demonstrating breadth of knowledge in predictive modeling.',
        tech: ['Python', 'Scikit-Learn', 'Jupyter', 'Algorithms'],
        link: 'https://github.com/Shyams728/machine_learning_projects',
        category: 'Machine Learning'
    },
    {
        id: 'p2',
        title: 'Kannada LMV (LLM)',
        description: 'A specialized Large Language Model fine-tuned for the Kannada language, enabling vernacular NLP applications.',
        tech: ['PyTorch', 'Transformers', 'NLP', 'HuggingFace'],
        link: 'https://github.com/Shyams728/kannada_lmv7',
        category: 'Machine Learning'
    },
    {
        id: 'p6',
        title: 'Kannada MNIST',
        description: 'Computer Vision model trained to recognize handwritten Kannada numerals, similar to the classic MNIST dataset.',
        tech: ['Scikit-Learn', 'CNN', 'Deep Learning'],
        link: 'https://github.com/Shyams728/kannada_MNIST',
        category: 'Machine Learning'
    },
    {
        id: 'p5',
        title: 'BizCard OCR',
        description: 'Optical Character Recognition application to digitize business cards and store contact info in a database.',
        tech: ['EasyOCR', 'OpenCV', 'SQL', 'Streamlit'],
        link: 'https://github.com/Shyams728/bizcard_ocr_project',
        demoLink: 'https://shyams-ocr-project.streamlit.app/',
        category: 'OCR'
    },
    {
        id: 'p8',
        title: 'YouTube Data Dashboard',
        description: 'End-to-end data pipeline to extract, store, and analyze YouTube channel data. Features NLP for comment sentiment and interactive Plotly visualizations.',
        tech: ['Python', 'Streamlit', 'SQL', 'MongoDB', 'YouTube API', 'NLP'],
        link: 'https://github.com/Shyams728/youtube_project',
        demoLink: 'https://shyams-youtube-dashboard-project.streamlit.app/',
        category: 'Analytics'
    },
    {
        id: 'p9',
        title: 'Clothing Customer Behavior Analytics',
        description: 'Advanced Power BI dashboard for retail analytics, featuring RFM segmentation, cohort retention analysis, and executive KPI tracking.',
        tech: [' Power BI', 'DAX', 'Power Query', 'Data Modeling'],
        link: 'https://github.com/Shyams728/clothing_customer_behavior_analytics',
        category: 'Analytics'
    }
];

export const experiences = [
    {
        id: 'exp1',
        role: 'Data Science Upskilling',
        company: 'IIT Madras (GUVI) & IIM Madras',
        period: '2023 - Present',
        location: 'Remote / Hybrid',
        description: 'Specialized training in predictive modeling and big data analytics.',
        achievements: [
            'Advanced Professional Program in Master Data Science',
            'Advanced Python for Data Science certification',
            'Applied statistical models to manufacturing maintenance datasets'
        ],
        type: 'education'
    },
    {
        id: 'exp2',
        role: 'Service Engineer',
        company: 'Larsen & Toubro (Construction & Mining)',
        period: 'Sep 2012 - Mar 2017',
        location: 'Kanchipuram / Chennai',
        description: 'Managed end-to-end service lifecycle for Heavy Earth Moving Machinery (HEMM).',
        achievements: [
            'Analyzed breakdown data to improve machine availability to 20+ hours/day',
            'Used SAP (HANA) for service orders, spares tracking, and cost estimation',
            'Site In-Charge for large irrigation projects (Telangana)',
            'Received CEO Award for operational excellence'
        ],
        type: 'work'
    },
    {
        id: 'exp3',
        role: 'Diploma in Electrical & Electronics',
        company: 'Technical Board',
        period: '2010 - 2012',
        location: 'Karnataka',
        description: 'Foundation in electrical systems and electronics.',
        achievements: [],
        type: 'education'
    }
];

export const techData = [
    { name: 'Python', value: 90, color: '#38bdf8' },
    { name: 'SQL/NoSQL', value: 80, color: '#818cf8' },
    { name: 'Power BI / Tableau', value: 85, color: '#34d399' },
    { name: 'Pandas', value: 95, color: '#f472b6' },
    { name: 'Machine Learning', value: 75, color: '#fbbf24' },
];

export const domainData = [
    { subject: 'Maintenance', A: 95, fullMark: 100 },
    { subject: 'SAP/ERP', A: 85, fullMark: 100 },
    { subject: 'RCFA', A: 90, fullMark: 100 },
    { subject: 'Logistics', A: 75, fullMark: 100 },
    { subject: 'Cost Control', A: 80, fullMark: 100 },
    { subject: 'Safety', A: 85, fullMark: 100 },
];

export const resumes = [
    {
        id: 'r1',
        title: 'Data Science Resume',
        file: 'docs/data science shyam resume.pdf',
        description: 'Focused on ML, Python, and Predictive Analytics.'
    },
    {
        id: 'r2',
        title: 'SAP & Operations Resume',
        file: 'docs/sap shyam resume.pdf',
        description: 'Highlighting 5+ years of industrial field experience & SAP.'
    },
    {
        id: 'r3',
        title: 'HEMM Resume',
        file: 'docs/shyam cement factory resume.pdf',
        description: 'Specialized for Heavy Earth Moving Machinery & Cement Plant Operations.'
    }
];

export const certifications = [
    {
        url: 'photos/HCL GUVI Certification - 4N10712pv416Cz8m30.png',
        title: 'Data Science Certification',
        issuer: 'GUVI (IIT Madras)',
        verifyLink: 'https://www.guvi.in/verify-certificate?id=4N10712pv416Cz8m30'
    },
    {
        url: 'photos/Advanced Diploma in Python Programming .png',
        title: 'Advanced Diploma in Python Programming',
        issuer: 'Alison',
        verifyLink: 'https://alison.com/certification/check/4a40c55c78'
    },
    {
        url: 'photos/Diploma in Machine Learning with Python.png',
        title: 'Diploma in Machine Learning with Python',
        issuer: 'Alison',
        verifyLink: 'https://alison.com/certification/check/16010cd08f'
    },
    {
        url: 'photos/Python for Data Science From the Basics to Advanced.png',
        title: 'Python for Data Science',
        issuer: 'Alison',
        verifyLink: 'https://alison.com/certification/check/01b737a2f1'
    },
    {
        url: 'photos/Master the Pandas Library in Python Programming.png',
        title: 'Mastering Pandas Library',
        issuer: 'Alison',
        verifyLink: 'https://alison.com/certification/check/eaaf78d09b'
    },
    {
        url: 'photos/Diploma in Cognitive Behavioural Therapy.png',
        title: 'Diploma in Cognitive Behavioural Therapy',
        issuer: 'Alison',
        verifyLink: 'https://alison.com/certification/check/f4ff597b9a'
    },
    {
        url: 'photos/Mindful Meditation.png',
        title: 'Mindful Meditation',
        issuer: 'Alison',
        verifyLink: 'https://alison.com/certification/check/e85a44bdee'
    },
    {
        url: 'photos/Depression Treatment Therapies and Triggers.png',
        title: 'Depression: Treatment & Therapies',
        issuer: 'Alison',
        verifyLink: 'https://alison.com/certification/check/e2c5291f71'
    }
];

export const galleryImages = [
    {
        url: 'photos/award from CEO.jpg',
        title: 'CEO Award for Excellence',
        category: 'Achievement'
    },
    {
        url: 'photos/national safety day photo.jpg',
        title: 'National Safety Day',
        category: 'Site'
    },
    {
        url: 'photos/site photo.jpg',
        title: 'On-site Operations',
        category: 'Site'
    },
    {
        url: 'photos/site photo with Colleague .jpg',
        title: 'Collaborative Engineering',
        category: 'Team'
    },
    {
        url: 'photos/training period photo with batchmates.JPG',
        title: 'L&T Training Period',
        category: 'Training'
    }
];
