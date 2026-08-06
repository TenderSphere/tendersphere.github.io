// script.js
    // 1. Dynamic Navbar Scroll Logic
    const nav = document.getElementById('mainNav');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            nav.classList.add('scrolled');
        } else {
            nav.classList.remove('scrolled');
        }
    });

    // 4. Form Submission Logic
    document.getElementById('demoForm').addEventListener('submit', (e) => {
        e.preventDefault();
        const submitBtn = e.target.querySelector('button');
        const originalText = submitBtn.innerText;
        submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Processing Request...';
        
        setTimeout(() => {
            alert("Success! Your private demo request has been prioritized. A specialist will contact you on your corporate email shortly.");
            submitBtn.innerText = originalText;
            e.target.reset();
        }, 1200);
    });


function portalRouter(state) {
    const urls = {
        // States
        "Andhra Pradesh": "https://tender.apeprocurement.gov.in/",
        "Arunachal Pradesh": "https://arunachaletenders.gov.in/",
        "Assam": "https://assamtenders.gov.in/",
        "Bihar": "https://eproc2.bihar.gov.in/",
        "Chhattisgarh": "https://eproc.cgstate.gov.in/",
        "Goa": "https://eprocure.goa.gov.in/",
        "Gujarat": "https://www.nprocure.com/",
        "Haryana": "https://etenders.hry.nic.in/",
        "Himachal Pradesh": "https://hptenders.gov.in/",
        "Jharkhand": "https://jharkhandtenders.gov.in/",
        "Karnataka": "https://kppp.karnataka.gov.in/",
        "Kerala": "https://etenders.kerala.gov.in/",
        "Madhya Pradesh": "https://mptenders.gov.in/",
        "Maharashtra": "https://mahatenders.gov.in/",
        "Manipur": "https://manipurtenders.gov.in/",
        "Meghalaya": "https://meghalayatenders.gov.in/",
        "Mizoram": "https://mizoramtenders.gov.in/",
        "Nagaland": "https://nagalandtenders.gov.in/",
        "Odisha": "https://tendersodisha.gov.in/",
        "Punjab": "https://eproc.punjab.gov.in/",
        "Rajasthan": "https://eproc.rajasthan.gov.in/",
        "Sikkim": "https://sikkimtender.gov.in/",
        "Tamil Nadu": "https://tntenders.gov.in/",
        "Telangana": "https://tender.telangana.gov.in/",
        "Tripura": "https://tripuratenders.gov.in/",
        "Uttar Pradesh": "https://etender.up.nic.in/",
        "Uttarakhand": "https://uktenders.gov.in/",
        "West Bengal": "https://wbtenders.gov.in/",
        
        // Union Territories
        "Andaman & Nicobar": "https://eprocure.gov.in/epublish/app",
        "Chandigarh": "https://etenders.chd.nic.in/",
        "D&N Haveli & Daman": "https://dnhtenders.gov.in/",
        "Delhi (NCT)": "https://govtprocurement.delhi.gov.in/",
        "Jammu & Kashmir": "https://jktenders.gov.in/",
        "Ladakh": "https://eprocure.gov.in/eprocure/app",
        "Lakshadweep": "https://tendersutl.gov.in/",
        "Puducherry": "https://pudutenders.gov.in/"
    };

    const targetUrl = urls[state];

    if (targetUrl) {
        // Elite Transition Effect
        const loadingDiv = document.createElement('div');
        loadingDiv.style.cssText = `
            position: fixed; top: 0; left: 0; width: 100%; height: 100%;
            background: rgba(3, 3, 11, 0.95); backdrop-filter: blur(15px);
            display: flex; flex-direction: column; align-items: center; justify-content: center;
            z-index: 10000; color: white; transition: 0.5s;
        `;
        loadingDiv.innerHTML = `
            <div style="font-size: 2rem; font-weight: 800; margin-bottom: 20px;">
                Tender<span style="color: #00f2ff;">Sphere</span>
            </div>
            <div style="width: 50px; height: 50px; border: 3px solid #7000ff; border-top-color: #00f2ff; border-radius: 50%; animation: spin 0.8s linear infinite;"></div>
            <p style="margin-top: 20px; letter-spacing: 2px; color: #a0a0b5;">REDIRECTING TO ${state.toUpperCase()} PORTAL</p>
        `;
        
        // Add animation keyframes
        if (!document.getElementById('spinStyle')) {
            const style = document.createElement('style');
            style.id = 'spinStyle';
            style.innerHTML = "@keyframes spin { to { transform: rotate(360deg); } }";
            document.head.appendChild(style);
        }

        document.body.appendChild(loadingDiv);

        // Open portal in new tab and remove loader
        setTimeout(() => {
            window.open(targetUrl, '_blank');
            loadingDiv.style.opacity = '0';
            setTimeout(() => document.body.removeChild(loadingDiv), 500);
        }, 1500);
    }
}

// 1. Toggle Chat Visibility
function toggleChat() {
    const chat = document.getElementById('chatContainer');
    chat.style.display = (chat.style.display === 'flex') ? 'none' : 'flex';
}

// Attach to your existing chatbot button
document.getElementById('chatbotTrigger').onclick = toggleChat;

// 2. Chat Logic & Knowledge Base
// 2. Chat Logic & Knowledge Base
const botKnowledge = [
    {
        keywords: ["register", "sign up", "signup", "create account", "join"],
        response: "You can register for free — click 'Client Login' at the top, then 'Register Now' on that page. You'll need a username, email, phone, state, and your tender interests."
    },
    {
        keywords: ["login", "log in", "sign in", "password", "forgot password"],
        response: "Click 'Client Login' at the top of the page. Forgot your password? There's a 'Forgot Password?' link right on the login form."
    },
    {
        keywords: ["price", "pricing", "cost", "plan", "subscription", "fee", "pay", "payment"],
        response: "TenderSphere is currently free to use. Register for a free account to see full tender details, values, and documents."
    },
    {
        keywords: ["coverage", "states", "region", "location", "which state", "pan india"],
        response: "We're actively expanding coverage across Indian states and union territories. You can browse tenders by state on our Tenders page."
    },
    {
        keywords: ["category", "categories", "sector", "industry", "type of tender"],
        response: "We cover categories including Construction, IT & Software, Healthcare, Defence, Education, Transport, Energy, Agriculture, Insurance, Consultancy, Manufacturing, and more."
    },
    {
        keywords: ["how does", "how it works", "how this works", "what is tendersphere", "about"],
        response: "TenderSphere lists real government tenders across categories and states. Anyone can browse basic details; registered users unlock full descriptions, tender values, reference numbers, and document links."
    },
    {
        keywords: ["browse", "see tenders", "view tenders", "list of tenders", "find tender", "search tender"],
        response: "You can browse all tenders on our Tenders page, or use the search bar on the homepage to filter by keyword."
    },
    {
        keywords: ["document", "download", "nit", "tender document"],
        response: "Document links are available to registered, logged-in users on each tender listing."
    },
    {
        keywords: ["alert", "notification", "whatsapp", "email alert"],
        response: "Automated alerts aren't live yet, but they're on our roadmap. Register now and we'll notify you when this launches."
    },
    {
        keywords: ["deadline", "closing date", "last date", "submission date"],
        response: "Each tender listing shows its closing/submission deadline. Registered users also see the full reference number and document link."
    },
    {
        keywords: ["contact", "support", "help", "reach", "email us", "phone number"],
        response: "You can reach us using the call or WhatsApp buttons in the bottom-left corner, or through the 'Request Private Demo' form on this page."
    },
    {
        keywords: ["free", "cost anything", "is this free"],
        response: "Yes, registering and browsing tenders on TenderSphere is currently free."
    },
    {
        keywords: ["add tender", "submit tender", "contribute", "list a tender"],
        response: "Tender listings are currently added by our team after verification. Contact us if you'd like to contribute data."
    },
    {
        keywords: ["hi", "hello", "hey", "namaste"],
        response: "Hello! I'm the Sphere Assistant. Ask me about registering, browsing tenders, categories we cover, or how TenderSphere works."
    },
    {
        keywords: ["thank", "thanks"],
        response: "You're welcome! Let me know if you have any other questions."
    }
];

function handleChat() {
    const input = document.getElementById('chatInput');
    const body = document.getElementById('chatBody');
    const text = input.value.toLowerCase().trim();

    if (!text) return;

    body.innerHTML += `<div class="user-msg">${input.value}</div>`;
    input.value = "";
    body.scrollTop = body.scrollHeight;

    setTimeout(() => {
        let response = "I don't have an answer for that yet. Try asking about registration, tender categories, states we cover, or how TenderSphere works — or reach us directly via the call/WhatsApp buttons.";

        for (const entry of botKnowledge) {
            if (entry.keywords.some(k => text.includes(k))) {
                response = entry.response;
                break;
            }
        }

        body.innerHTML += `<div class="bot-msg"><b>Sphere Assistant:</b> ${response}</div>`;
        body.scrollTop = body.scrollHeight;
    }, 500);
}

// Allow "Enter" key to send message
document.getElementById('chatInput').addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        handleChat();
    }
});

// Track Contact Clicks
document.querySelectorAll('.action-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
        const type = btn.classList.contains('btn-call') ? 'Phone' : 'WhatsApp';
        console.log(`User initiated ${type} contact.`);
        // You can later connect this to Google Analytics
    });
});
