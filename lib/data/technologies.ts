
export type Category = "All" | "Frontend" | "Backend" | "AI & Data" | "Blockchain" | "Infrastructure" | "Architecture";

export interface Technology {
    slug: string;
    name: string;
    description: string;
    category: Category;
}

export const TECHNOLOGIES: Technology[] = [
    {
        slug: "ai-algorithms",
        name: "AI Algorithms",
        description: "Algoritmi avanzati di intelligenza artificiale per l'analisi dei dati, il riconoscimento di pattern e l'automazione decisionale.",
        category: "AI & Data"
    },
    {
        slug: "assembly-yul",
        name: "Assembly (Yul)",
        description: "Linguaggio intermedio per Ethereum che permette ottimizzazioni a basso livello e manipolazione diretta della memoria negli Smart Contract.",
        category: "Blockchain"
    },
    {
        slug: "bpmn",
        name: "BPMN",
        description: "Business Process Model and Notation. Standard grafico per la modellazione dei processi aziendali in un diagramma di flusso workflow.",
        category: "Architecture"
    },
    {
        slug: "choreography",
        name: "Choreography",
        description: "Modello di interazione decentralizzata dove le parti collaborano scambiando messaggi senza un coordinatore centrale.",
        category: "Architecture"
    },
    {
        slug: "chor-js",
        name: "chor.js",
        description: "Libreria JavaScript basata su bpmn-io per visualizzare e modellare diagrammi di coreografia BPMN direttamente nel browser.",
        category: "Frontend"
    },
    {
        slug: "claude-3-5-sonnet",
        name: "Claude 3.5 Sonnet",
        description: "Modello AI avanzato di Anthropic, noto per le sue capacità superiori di ragionamento, codifica e comprensione delle sfumature.",
        category: "AI & Data"
    },
    {
        slug: "cryptography",
        name: "Cryptography",
        description: "Tecniche matematiche per proteggere le informazioni, garantire l'integrità dei dati e autenticare l'identità nelle comunicazioni digitali.",
        category: "Architecture"
    },
    {
        slug: "css",
        name: "CSS",
        description: "Cascading Style Sheets. Linguaggio utilizzato per descrivere la presentazione di un documento scritto in HTML, gestendo layout, colori e font.",
        category: "Frontend"
    },
    {
        slug: "deepseek-v3",
        name: "DeepSeek-V3",
        description: "Modello linguistico open-source avanzato ottimizzato per compiti di ragionamento complesso e codifica.",
        category: "AI & Data"
    },
    {
        slug: "docker",
        name: "Docker",
        description: "Piattaforma per lo sviluppo, il rilascio e l'esecuzione di applicazioni in container, garantendo coerenza tra diversi ambienti.",
        category: "Infrastructure"
    },
    {
        slug: "ethereum",
        name: "Ethereum",
        description: "Piattaforma blockchain decentralizzata open-source che abilita la creazione e l'esecuzione di Smart Contracts e applicazioni distribuite (DApps).",
        category: "Blockchain"
    },
    {
        slug: "fastapi",
        name: "FastAPI",
        description: "Framework web moderno e ad alte prestazioni per la costruzione di API con Python 3.7+, basato su standard come OpenAPI e JSON Schema.",
        category: "Backend"
    },
    {
        slug: "ganache",
        name: "Ganache",
        description: "Blockchain Ethereum personale per lo sviluppo di DApps, che permette di eseguire test, comandi e ispezionare lo stato in un ambiente sicuro.",
        category: "Blockchain"
    },
    {
        slug: "gemini-3-0-flash",
        name: "Gemini 3.0 Flash",
        description: "Versione rapida ed efficiente del modello multimodale di Google, ottimizzata per bassa latenza e compiti ad alta frequenza.",
        category: "AI & Data"
    },
    {
        slug: "gemini-vision",
        name: "Gemini Vision",
        description: "Modello multimodale di Google capace di comprendere e analizzare immagini, documenti e testo visivo con elevata precisione.",
        category: "AI & Data"
    },
    {
        slug: "github-actions",
        name: "GitHub Actions",
        description: "Piattaforma di integrazione e distribuzione continua (CI/CD) che permette di automatizzare le pipeline di build, test e deployment direttamente da GitHub.",
        category: "Infrastructure"
    },
    {
        slug: "gpt-4o",
        name: "GPT-4o",
        description: "Modello di punta di OpenAI ('Omni'), capace di ragionare su audio, visione e testo in tempo reale con prestazioni di livello umano.",
        category: "AI & Data"
    },
    {
        slug: "hardhat",
        name: "Hardhat",
        description: "Ambiente di sviluppo per Ethereum che facilita la compilazione, il deployment, il testing e il debugging del software basato su blockchain.",
        category: "Blockchain"
    },
    {
        slug: "html",
        name: "HTML",
        description: "HyperText Markup Language. Linguaggio di markup standard per la creazione della struttura delle pagine web.",
        category: "Frontend"
    },
    {
        slug: "iot",
        name: "IoT",
        description: "Internet of Things. Rete di dispositivi fisici interconnessi che raccolgono e scambiano dati, permettendo automazione e monitoraggio remoto.",
        category: "Architecture"
    },
    {
        slug: "javascript",
        name: "JavaScript",
        description: "Linguaggio di programmazione essenziale per lo sviluppo web, permette di rendere le pagine interattive e dinamiche.",
        category: "Frontend"
    },
    {
        slug: "kafka",
        name: "Kafka",
        description: "Piattaforma di event streaming distribuita utilizzata per pipeline di dati ad alte prestazioni, analisi in tempo reale e integrazione di dati.",
        category: "Backend"
    },
    {
        slug: "manus-ai",
        name: "Manus AI",
        description: "Agente AI autonomo progettato per eseguire compiti complessi e workflow completi con minima supervisione umana.",
        category: "AI & Data"
    },
    {
        slug: "mongodb",
        name: "MongoDB",
        description: "Database NoSQL orientato ai documenti, ideale per gestire grandi volumi di dati non strutturati con flessibilità e scalabilità.",
        category: "Backend"
    },
    {
        slug: "mysql",
        name: "MySQL",
        description: "Sistema di gestione di database relazionale open-source molto diffuso, noto per la sua velocità e affidabilità.",
        category: "Backend"
    },
    {
        slug: "next-js-15",
        name: "Next.js 15",
        description: "Framework React per la produzione che offre rendering lato server (SSR), generazione statica e funzionalità avanzate per web app scalabili.",
        category: "Frontend"
    },
    {
        slug: "node-js",
        name: "Node.js",
        description: "Runtime JavaScript basato sul motore V8 di Chrome, che permette di eseguire codice JavaScript lato server.",
        category: "Backend"
    },
    {
        slug: "openai-o1",
        name: "OpenAI o1",
        description: "Serie di modelli di OpenAI progettati per spendere più tempo a 'ragionare' prima di rispondere, eccellendo in compiti complessi di scienza e matematica.",
        category: "AI & Data"
    },
    {
        slug: "openlayers",
        name: "OpenLayers",
        description: "Libreria JavaScript open source ad alte prestazioni per renderizzare mappe interattive e dati geospaziali in un browser web.",
        category: "Frontend"
    },
    {
        slug: "postgresql",
        name: "PostgreSQL",
        description: "Sistema di gestione di database relazionale a oggetti open-source, noto per la sua affidabilità, robustezza e conformità agli standard SQL.",
        category: "Backend"
    },
    {
        slug: "python",
        name: "Python",
        description: "Linguaggio di programmzione di alto livello versatile, ampiamente usato per sviluppo web, data science, AI e scripting.",
        category: "Backend"
    },
    {
        slug: "railway",
        name: "Railway",
        description: "Piattaforma di infrastruttura cloud che semplifica il deployment di applicazioni e database backend.",
        category: "Infrastructure"
    },
    {
        slug: "react",
        name: "React",
        description: "Libreria JavaScript per la costruzione di interfacce utente interattive e component-based, sviluppata e mantenuta da Facebook.",
        category: "Frontend"
    },
    {
        slug: "react-server-components",
        name: "React Server Components",
        description: "Architettura React che permette ai componenti di essere renderizzati esclusivamente sul server, riducendo il bundle size inviato al client.",
        category: "Frontend"
    },
    {
        slug: "remix-ide",
        name: "Remix IDE",
        description: "Ambiente di sviluppo integrato basato sul web per scrivere, compilare e distribuire Smart Contracts in Solidity.",
        category: "Blockchain"
    },
    {
        slug: "shadcn-ui",
        name: "Shadcn/UI",
        description: "Collezione di componenti UI riutilizzabili e accessibili, costruiti su Radix UI e Tailwind CSS.",
        category: "Frontend"
    },
    {
        slug: "smart-contracts",
        name: "Smart Contracts",
        description: "Contratti auto-eseguibili con i termini dell'accordo scritti direttamente nel codice, che girano su una blockchain decentralizzata.",
        category: "Blockchain"
    },
    {
        slug: "solidity",
        name: "Solidity",
        description: "Linguaggio di programmazione orientato agli oggetti specificamente progettato per scrivere Smart Contracts su piattaforme blockchain come Ethereum.",
        category: "Blockchain"
    },
    {
        slug: "sqlite",
        name: "SQLite",
        description: "Libreria database SQL C-language leggera e autonoma, che non richiede un server separato.",
        category: "Backend"
    },
    {
        slug: "tailwind-css",
        name: "Tailwind CSS",
        description: "Framework CSS utility-first che permette di costruire rapidamente interfacce utente personalizzate direttamente nel markup.",
        category: "Frontend"
    },
    {
        slug: "twilio",
        name: "Twilio",
        description: "Piattaforma di comunicazione cloud che permette agli sviluppatori di integrare programmaticamente chiamate, messaggi e altre funzioni di comunicazione.",
        category: "Backend"
    },
    {
        slug: "typescript",
        name: "TypeScript",
        description: "Superset tipizzato di JavaScript che scala lo sviluppo web aggiungendo tipi statici, migliorando la manutenibilità e la qualità del codice.",
        category: "Frontend"
    },
    {
        slug: "vercel",
        name: "Vercel",
        description: "Piattaforma cloud per frontend framework e siti statici, ottimizzata per integrarsi perfettamente con Next.js.",
        category: "Infrastructure"
    },
    {
        slug: "web3-js",
        name: "Web3.js",
        description: "Collezione di librerie che permettono di interagire con un nodo Ethereum locale o remoto utilizzando connessioni HTTP, IPC o WebSocket.",
        category: "Blockchain"
    }
];

export function getTechnologyBySlug(slug: string) {
    return TECHNOLOGIES.find(t => t.slug === slug);
}

export function getSlugByName(name: string) {
    // Normalizza il nome (minuscolo, rimuovi versioni se necessario per match impreciso, ma qui proviamo match esatto o quasi)
    // Per ora match esatto case-insensitive
    const tech = TECHNOLOGIES.find(t => t.name.toLowerCase() === name.toLowerCase());
    return tech ? tech.slug : null;
}

export function getAllTechnologies() {
    return TECHNOLOGIES.sort((a, b) => a.name.localeCompare(b.name));
}
