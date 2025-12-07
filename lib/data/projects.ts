
export interface Project {
    id: string;
    slug: string;
    title: string;
    category: string;
    shortDescription: string;
    fullDescription: string;
    techStack: string[];
    features: string[];
    images: {
        hero: string;
        gallery: string[];
    };
    links: {
        demo?: string;
        github?: string;
    };
    color: string;
}

export const PROJECTS: Project[] = [
    {
        id: "1",
        slug: "konta",
        title: "Konta",
        category: "SaaS B2B",
        shortDescription: "Piattaforma enterprise per l'automazione contabile con motore AI ibrido.",
        fullDescription: `
            Konta è una piattaforma avanzata progettata per rivoluzionare la gestione contabile aziendale. 
            Il problema principale che risolve è l'inserimento manuale dei dati dalle fatture e dagli estratti conto, 
            un processo lento e soggetto ed errori.

            Utilizzando un motore AI ibrido che combina parser XML deterministici per la massima precisione 
            con modelli di visione come Gemini Vision per documenti non strutturati, Konta offre un'accuratezza del 99.9%.

            L'intera architettura è costruita su Next.js e FastAPI, con un sistema di code asincrono per gestire 
            grandi volumi di documenti senza bloccare l'interfaccia utente.
        `,
        techStack: ["Next.js 15", "FastAPI", "PostgreSQL", "Gemini Vision", "Docker", "Twilio"],
        features: [
            "Parsing automatico fatture XML/PDF",
            "Riconciliazione bancaria con AI",
            "Integrazione WhatsApp per upload rapido",
            "Dashboard finanziaria in tempo reale",
            "Esportazione dati per commercialisti"
        ],
        images: {
            hero: "/konta-preview.png", // Assicurati che questa immagine esista in public
            gallery: []
        },
        links: {
            demo: "#",
            github: "#"
        },
        color: "bg-primary"
    },
    {
        id: "2",
        slug: "ecommerce-ai",
        title: "E-Commerce AI",
        category: "Web App",
        shortDescription: "Piattaforma di vendita con raccomandazioni prodotti basate su ML.",
        fullDescription: `
            Una piattaforma e-commerce moderna che non si limita a vendere prodotti, ma capisce i gusti degli utenti.
            Integrando TensorFlow, il sistema analizza la navigazione e gli acquisti passati per suggerire 
            prodotti pertinenti in tempo reale, aumentando il tasso di conversione.
        `,
        techStack: ["Next.js", "Python", "TensorFlow", "Redis", "Stripe"],
        features: [
            "Ricerca semantica vettoriale",
            "Raccomandazioni personalizzate",
            "Carrello persistente",
            "Checkout sicuro con Stripe"
        ],
        images: {
            hero: "/placeholder-project.png", // Da sostituire
            gallery: []
        },
        links: {
            demo: "#",
            github: "#"
        },
        color: "bg-blue-500"
    },
    {
        id: "3",
        slug: "crypto-dashboard",
        title: "Crypto Dashboard",
        category: "Fintech",
        shortDescription: "Monitoraggio in tempo reale di asset crypto con WebSocket.",
        fullDescription: `
            Dashboard professionale per trader che necessitano di dati aggiornati al millisecondo.
            Utilizzando WebSocket, la dashboard mostra i prezzi di centinaia di criptovalute senza 
            necessità di refresh della pagina, con grafici interattivi e avvisi di prezzo.
        `,
        techStack: ["React", "WebSocket", "Tailwind CSS", "Recharts"],
        features: [
            "Live price feed",
            "Analisi tecnica base",
            "Gestione portfolio simulato",
            "Avvisi prezzo via notifica browser"
        ],
        images: {
            hero: "/placeholder-project.png",
            gallery: []
        },
        links: {
            demo: "#",
            github: "#"
        },
        color: "bg-purple-500"
    }
];

export function getProjectBySlug(slug: string) {
    return PROJECTS.find(p => p.slug === slug);
}
