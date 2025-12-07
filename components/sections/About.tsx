export function About() {
    return (
        <section id="about" className="py-20 relative">
            <div className="absolute top-0 right-0 -mr-20 w-72 h-72 bg-primary/5 rounded-full blur-3xl pointer-events-none"></div>

            <div className="flex items-center gap-4 mb-10">
                <h2 className="text-3xl font-bold text-foreground">Chi Sono</h2>
                <div className="h-px flex-1 bg-border"></div>
            </div>

            <div className="bg-card border border-border p-8 md:p-12 rounded-2xl relative overflow-hidden">
                {/* Decorative quote icon */}
                <div className="absolute top-6 right-8 text-primary/10 text-9xl font-serif leading-none select-none">
                    &rdquo;
                </div>

                <div className="relative z-10 max-w-4xl">
                    <p className="text-lg md:text-xl text-text-muted leading-relaxed mb-6">
                        Sono uno studente di Informatica di 24 anni con una passione viscerale per la tecnologia.
                        Nonostante stia ancora perfezionando il mio percorso accademico, ho già costruito solide basi in programmazione, algoritmi e database.
                    </p>
                    <p className="text-lg md:text-xl text-text-muted leading-relaxed mb-8">
                        Mi definisco un "Builder": amo prendere un problema complesso e trasformarlo in una soluzione software funzionante.
                        Esperienze come lo sviluppo di <strong>Konta</strong> mi hanno permesso di andare oltre la teoria, affrontando sfide reali di architettura, deployment e integrazione AI.
                        Cerco un ambiente stimolante dove poter imparare dai migliori e contribuire con la mia proattività.
                    </p>

                    <div className="flex gap-4">
                        <div className="flex flex-col">
                            <span className="text-3xl font-bold text-foreground">24</span>
                            <span className="text-xs text-text-muted uppercase tracking-wider">Anni</span>
                        </div>
                        <div className="w-px bg-border mx-4"></div>
                        <div className="flex flex-col">
                            <span className="text-3xl font-bold text-foreground">5+</span>
                            <span className="text-xs text-text-muted uppercase tracking-wider">Progetti</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
