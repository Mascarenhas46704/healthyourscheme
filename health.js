const schemes = [
    // Central Government Health Schemes
    {
        name: "Ayushman Bharat Pradhan Mantri Jan Arogya Yojana (PMJAY)",
        description: "Provides annual health coverage of ₹5,00,000 per family for secondary and tertiary care across empaneled hospitals.",
        link: "https://nha.gov.in/PM-JAY",
        type: "central"
    },
    {
        name: "Rashtriya Arogya Nidhi (RAN)",
        description: "Offers financial aid to BPL cancer patients for treatment in designated Regional Cancer Centers.",
        link: "https://www.india.gov.in/rashtriya-arogya-nidhi-scheme-ministry-health-and-family-welfare",
        type: "central"
    },
    {
        name: "Nikshay Poshan Yojana",
        description: "Provides nutritional support of ₹500/month to tuberculosis patients undergoing treatment.",
        link: "https://nikshay.in/",
        type: "central"
    },
    {
        name: "Niramaya Health Insurance Scheme",
        description: "Affordable health insurance for persons with disabilities, covering treatments and therapies up to ₹1,00,000.",
        link: "https://sjd.kerala.gov.in/scheme-info.php?scheme_id=NjY=",
        type: "central"
    },
    {
        name: "Pradhan Mantri Matru Vandana Yojana (PMMVY)",
        description: "Maternity benefit program offering financial assistance for the first live birth.",
        link: "https://pmmvy.wcd.gov.in/",
        type: "central"
    },
    {
        name: "Pradhan Mantri Garib Kalyan Package",
        description: "Provides life insurance for health workers fighting COVID-19, covering accidental death during duty.",
        link: "https://www.india.gov.in/spotlight/pradhan-mantri-garib-kalyan-package-pmgkp",
        type: "central"
    },

    // Karnataka State Health Schemes
    {
        name: "Arogya Karnataka Scheme",
        description: "Universal health coverage with free treatment for low-income individuals in public and private hospitals.",
        link: "https://arogya.karnataka.gov.in/",
        type: "state"
    },
    {
        name: "Yeshasvini Cooperative Farmers Health Care Scheme",
        description: "Affordable health insurance for cooperative farmers and their families.",
        link: "https://www.bankbazaar.com/health-insurance/yeshasvini-health-insurance-scheme.html",
        type: "state"
    },
    {
        name: "Jyothi Sanjeevini Scheme",
        description: "Cashless treatment for Karnataka government employees and their dependents in empaneled hospitals.",
        link: "https://arogya.karnataka.gov.in/sast/english/index.php/site-map/2017-12-20-22-15-29/jss/50-jyothi-sanjeevini-scheme",
        type: "state"
    },
    {
        name: "Vajpayee Arogyashree Scheme",
        description: "Covers catastrophic healthcare expenses for BPL families in Karnataka.",
        link: "https://bmcribengaluru.karnataka.gov.in/info-2/VAJPAYEE+AROGYASHREE/en",
        type: "state"
    },
    {
        name: "Indira Suraksha Yojane",
        description: "Provides medical assistance for injuries caused by accidents for Karnataka residents.",
        link: "https://www.arogya.karnataka.gov.in/sast/details/isy-nwh.pdf",
        type: "state"
    },
    {
        name: "Mukhyamantri Santwana Harish Scheme",
        description: "Offers free medical treatment for accident victims during the first 48 hours in empaneled hospitals.",
        link: "https://www.arogya.karnataka.gov.in/sast/English/index.php/using-joomla/extensions/components/content-component/article-categories/29-park-site/fruit-shop-site/72-mukhyamantrigala-santwana-harish-scheme-mss",
        type: "state"
    }
];

function populateSchemes() {
    const schemesContainer = document.getElementById('schemes');
    schemesContainer.innerHTML = ""; // Clear existing content
    schemes.forEach(scheme => {
        const schemeItem = document.createElement('div');
        schemeItem.classList.add('scheme-item');
        schemeItem.innerHTML = `
            <h3>${scheme.name}</h3>
            <p>${scheme.description}</p>
            <a href="${scheme.link}" target="_blank">Learn More</a>
        `;
        schemesContainer.appendChild(schemeItem);
    });
}

function filterSchemes() {
    const filterValue = document.getElementById('schemeType').value;
    const schemesContainer = document.getElementById('schemes');
    schemesContainer.innerHTML = ""; // Clear content for filtering
    schemes
        .filter(scheme => filterValue === 'all' || scheme.type === filterValue)
        .forEach(scheme => {
            const schemeItem = document.createElement('div');
            schemeItem.classList.add('scheme-item');
            schemeItem.innerHTML = `
                <h3>${scheme.name}</h3>
                <p>${scheme.description}</p>
                <a href="${scheme.link}" target="_blank">Learn More</a>
            `;
            schemesContainer.appendChild(schemeItem);
        });
}

window.onload = populateSchemes;

function toggleMenu() {
    const nav = document.querySelector('nav');
    nav.classList.toggle('active');
}
