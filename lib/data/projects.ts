
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
            demo: "contact",
            github: "private"
        },
        color: "bg-primary"
    },
    {
        id: "2",
        slug: "human-routine-recognition",
        title: "Human Routine Recognition",
        category: "AI / IoT",
        shortDescription: "Piattaforma innovativa per l'identificazione di routine umane da log IoT.",
        fullDescription: `
            Human Routine Recognition è una piattaforma innovativa progettata per identificare e analizzare le routine umane partendo dai log di eventi generati da dispositivi IoT. Il progetto utilizza avanzati algoritmi di Community Detection per trasformare dati grezzi in modelli comportamentali significativi, offrendo insight preziosi in contesti come l'Ambient Assisted Living (assistenza anziani), la sicurezza industriale e la domotica smart.

            Il sistema permette di caricare file di log (standard XES), visualizzare graficamente le routine identificate tramite Directly-Follows Graphs (DFGs) e configurare dinamicamente gli algoritmi di analisi per adattarsi a diversi scenari d'uso.
        `,
        techStack: ["React", "TypeScript", "Kafka", "Python", "AI Algorithms"],
        features: [
            "Analisi Log IoT (XES/CSV): Parsing avanzato per estrazione eventi.",
            "Community Detection con AI: Identificazione cluster di attività.",
            "Dashboard Interattiva: Visualizzazione DFG e grafici.",
            "Elaborazione Big Data: Architettura scalabile con Kafka.",
            "Export Reporting: Esportazione community e statistiche."
        ],
        images: {
            hero: "/placeholder-project.png", // Da sostituire con screenshot reale
            gallery: []
        },
        links: {
            // demo removed
            github: "university"
        },
        color: "bg-indigo-500"
    },
    {
        id: "3",
        slug: "trust-chain",
        title: "TrustChain",
        category: "Blockchain / Web3",
        shortDescription: "Sistema ibrido per la certificazione immutabile e verificabile di documenti tramite Blockchain Ethereum.",
        fullDescription: `
            Nell'attuale panorama digitale, la verificabilità e l'immutabilità delle informazioni rappresentano sfide critiche. Questo progetto nasce con l'obiettivo di superare i limiti dei sistemi di archiviazione centralizzati, vulnerabili a manomissioni e privi di trasparenza.

            L'architettura ibrida sviluppata combina l'efficienza della crittografia off-chain con la sicurezza della Blockchain. Il cuore del sistema è un generatore di codice hash personalizzato, capace di sintetizzare documenti di qualsiasi dimensione in un'impronta digitale univoca (fingerprint), ancorata successivamente su Ethereum tramite Smart Contracts.

            La soluzione garantisce la Proof of Existence (prova di esistenza) e la Proof of Integrity (prova di integrità) del dato originale senza esporre il contenuto sensibile, realizzando un sistema trustless garantito matematicamente.
        `,
        techStack: ["Ethereum", "Solidity", "Smart Contracts", "Cryptography", "React", "Web3.js"],
        features: [
            "Data Integrity & Immutability: Garanzia matematica anti-manomissione.",
            "Proof of Existence: Certificazione temporale su Blockchain pubblica.",
            "Off-chain Computation: Hashing locale per privacy e risparmio gas.",
            "Trustless Architecture: Sicurezza garantita dal protocollo, non da enti centrali.",
            "Smart Contracts: Notarizzazione automatizzata su Ethereum."
        ],
        images: {
            hero: "/TrustChain.png",
            gallery: []
        },
        links: {
            github: "https://github.com/SaltyEner/TrustChain"
        },
        color: "bg-blue-600"
    },
    {
        id: "4",
        slug: "loosely-specified-smart-contracts",
        title: "Loosely Specified Smart Contracts Framework",
        category: "Blockchain / R&D",
        shortDescription: "Framework avanzato per l'adattabilità dinamica su Ethereum.",
        fullDescription: `
            Loosely Specified Smart Contracts è un framework innovativo progettato per superare la rigidità intrinseca degli Smart Contract su Ethereum. Il problema principale che risolve è l'incapacità dei contratti tradizionali di gestire i "Loosely Specified Processes" (LSP), ovvero scenari in cui i requisiti cambiano in modo imprevedibile durante l'esecuzione.

            Utilizzando Solidity avanzato combinato con Low-level Assembly per la manipolazione diretta della memoria, la soluzione offre una flessibilità senza precedenti rispetto agli standard attuali.

            L'architettura implementa un Contract Deployer capace di iniettare bytecode a runtime e un sistema di Selector ottimizzati per il routing dinamico delle funzioni, garantendo adattabilità in settori complessi come Supply Chain e DeFi senza sacrificare l'efficienza del gas.
        `,
        techStack: ["Solidity", "Assembly (Yul)", "Ethereum", "Smart Contracts", "Hardhat"],
        features: [
            "Deployment dinamico a runtime tramite Bytecode",
            "Supporto nativo per Loosely Specified Processes (LSP)",
            "Ottimizzazione Gas con Inline Assembly",
            "Routing funzioni avanzato con Staticcall"
        ],
        images: {
            hero: "/loosely-contracts-final.png",
            gallery: []
        },
        links: {
            demo: "https://remix.ethereum.org/#url=https://github.com/SaltyEner/Loosely-specified-contracts/blob/master/contracts/core/ContractDeployer.sol",
            github: "https://github.com/SaltyEner/Loosely-specified-contracts"
        },
        color: "bg-slate-800"
    },
    {
        id: "5",
        slug: "envchor-modeler",
        title: "EnvChor Modeler",
        category: "Blockchain / BPMN",
        shortDescription: "Piattaforma full-stack per la modellazione di processi business su Blockchain con vincoli spaziali.",
        fullDescription: `
            EnvChor Modeler è una piattaforma full-stack innovativa progettata per colmare il divario tra la modellazione astratta dei processi aziendali e la loro esecuzione decentralizzata su Blockchain. Il problema principale che risolve è la natura statica dei modelli BPMN tradizionali, incapaci di adattarsi dinamicamente ai dati ambientali in tempo reale (come dati IoT o posizione) e privi di un'autorità centrale fidata nei processi distribuiti.

            Utilizzando un approccio model-driven, il sistema estende la notazione BPMN per includere vincoli spaziali e contestuali, traducendo automaticamente questi modelli visivi in Smart Contract Solidity eseguibili su rete Ethereum.

            L'architettura è costruita su un framework modulare che combina un modellatore di ambienti fisici/logici, un motore di coreografia e un sistema di deployment su Blockchain (Ganache), garantendo trasparenza, automazione e verificabilità senza necessità di coding manuale dello smart contract.
        `,
        techStack: ["BPMN", "chor.js", "OpenLayers", "Solidity", "Ethereum", "Ganache", "Choreography"],
        features: [
            "Generazione Automatica di Smart Contract: Traduzione istantanea diagrammi in Solidity.",
            "Modellazione Environment-Aware: Definizione topologie spaziali e attributi contestuali.",
            "Environmental Guards Dinamiche: Logiche condizionali basate su posizione e dati real-time.",
            "Animazione e Monitoraggio Real-Time: Visualizzazione esecuzione interattiva su mappa.",
            "Deployment Decentralizzato: Integrazione diretta con Blockchain locali (Ganache)."
        ],
        images: {
            hero: "/envchor-modeler.png",
            gallery: []
        },
        links: {
            // demo removed
            github: "university"
        },
        color: "bg-emerald-600"
    }
];

export function getProjectBySlug(slug: string) {
    return PROJECTS.find(p => p.slug === slug);
}
