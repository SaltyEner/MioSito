"use client";

import { motion } from "framer-motion";

export function About() {
    return (
        <section id="about" className="py-20 relative">
            <div className="absolute top-0 right-0 -mr-20 w-72 h-72 bg-primary/5 rounded-full blur-3xl pointer-events-none"></div>

            <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: false, amount: 0.3 }}
                className="flex items-center gap-4 mb-10"
            >
                <h2 className="text-3xl font-bold text-foreground">Chi Sono</h2>
                <div className="h-px flex-1 bg-border"></div>
            </motion.div>

            <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: false, amount: 0.3 }}
                className="bg-card border border-border p-8 md:p-12 rounded-2xl relative overflow-hidden"
            >
                {/* Decorative quote icon */}
                <motion.div
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="absolute top-6 right-8 text-primary/10 text-9xl font-serif leading-none select-none"
                >
                    &rdquo;
                </motion.div>

                <div className="relative z-10 max-w-4xl">
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                        className="text-lg md:text-xl text-text-muted leading-relaxed mb-6"
                    >
                        Ho 24 anni e sono un laureato in Computer Science, con specializzazione in Business Informatics e Data Science,
                        guidato da una forte passione per la tecnologia. Nel corso del mio percorso accademico ho sviluppato solide competenze in programmazione, algoritmi e gestione dei dati, costruendo una base tecnica robusta e orientata alla crescita.
                    </motion.p>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        className="text-lg md:text-xl text-text-muted leading-relaxed mb-8"
                    >
                        Mi definisco un &quot;Builder&quot;: amo prendere un problema complesso e trasformarlo in una soluzione software funzionante.
                        Esperienze come lo sviluppo di <strong>Konta</strong> mi hanno permesso di andare oltre la teoria, affrontando sfide reali di architettura, deployment e integrazione AI.
                        Cerco un ambiente stimolante dove poter imparare dai migliori e contribuire con la mia proattività.
                    </motion.p>

                    <div className="flex gap-4">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6, delay: 0.6 }}
                            className="flex flex-col"
                        >
                            <span className="text-3xl font-bold text-foreground">24</span>
                            <span className="text-xs text-text-muted uppercase tracking-wider">Anni</span>
                        </motion.div>
                        <div className="w-px bg-border mx-4"></div>
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6, delay: 0.7 }}
                            className="flex flex-col"
                        >
                            <span className="text-3xl font-bold text-foreground">5+</span>
                            <span className="text-xs text-text-muted uppercase tracking-wider">Progetti</span>
                        </motion.div>
                    </div>
                </div>
            </motion.div>
        </section>
    );
}
