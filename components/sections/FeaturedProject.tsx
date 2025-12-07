export function FeaturedProject() {
    return (
        <section id="konta" className="py-10">
            <div className="flex items-center gap-4 mb-10">
                <h2 className="text-3xl font-bold text-foreground">Featured Product</h2>
                <div className="h-px flex-1 bg-border"></div>
            </div>

            <div className="glass rounded-2xl p-1 border border-white/10 overflow-hidden relative group">
                <div className="absolute inset-0 bg-linear-to-r from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition duration-700"></div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 lg:gap-12">

                    <div className="p-8 lg:p-12 flex flex-col justify-center">
                        <div className="flex items-center gap-3 mb-4">
                            <span className="text-primary font-bold text-xl tracking-wider">KONTA</span>
                            <span className="bg-primary/10 text-primary border border-primary/20 text-[10px] px-2 py-0.5 rounded uppercase font-bold tracking-wide">SaaS B2B</span>
                        </div>

                        <h3 className="text-2xl md:text-3xl font-bold mb-4 text-foreground">
                            Intelligent Financial Automation.
                        </h3>

                        <p className="text-text-muted mb-6 leading-relaxed">
                            Una piattaforma enterprise per l'automazione contabile.
                            Konta elimina il data-entry manuale utilizzando un <strong>motore AI Ibrido</strong> (Parser XML + Gemini Vision) e un'architettura asincrona su PostgreSQL.
                        </p>

                        <div className="flex flex-wrap gap-2 mb-8">
                            <span className="px-3 py-1 bg-surface border border-border rounded text-xs text-gray-300 font-mono">Next.js 15</span>
                            <span className="px-3 py-1 bg-surface border border-border rounded text-xs text-gray-300 font-mono">FastAPI</span>
                            <span className="px-3 py-1 bg-surface border border-border rounded text-xs text-gray-300 font-mono">Gemini Vision</span>
                            <span className="px-3 py-1 bg-surface border border-border rounded text-xs text-gray-300 font-mono">Twilio</span>
                            <span className="px-3 py-1 bg-surface border border-border rounded text-xs text-gray-300 font-mono">Docker</span>
                        </div>

                        <div className="grid grid-cols-2 gap-4 mb-8">
                            <div className="border-l-2 border-primary/50 pl-4">
                                <div className="text-foreground font-bold">99.9%</div>
                                <div className="text-xs text-text-muted">Parsing Accuracy</div>
                            </div>
                            <div className="border-l-2 border-primary/50 pl-4">
                                <div className="text-foreground font-bold">Real-time</div>
                                <div className="text-xs text-text-muted">WhatsApp Sync</div>
                            </div>
                        </div>

                        <div className="flex gap-4">
                            <button className="text-foreground text-sm font-semibold border-b border-primary pb-0.5 hover:text-primary transition cursor-pointer">
                                Vedi Architettura System Design
                            </button>
                        </div>
                    </div>

                    <div className="bg-surface relative min-h-[300px] lg:min-h-full border-t lg:border-t-0 lg:border-l border-border flex flex-col items-center justify-center p-8 overflow-hidden">
                        <div className="w-full max-w-sm bg-card border border-border rounded-xl shadow-2xl p-4 relative z-10 transform transition group-hover:scale-105 duration-500">
                            <div className="flex items-center justify-between mb-4 border-b border-border pb-2">
                                <div className="flex gap-1.5">
                                    <div className="w-2.5 h-2.5 rounded-full bg-red-500/50"></div>
                                    <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/50"></div>
                                    <div className="w-2.5 h-2.5 rounded-full bg-green-500/50"></div>
                                </div>
                                <div className="text-[10px] text-text-muted font-mono">dashboard.konta.app</div>
                            </div>
                            <div className="space-y-3">
                                <div className="flex justify-between items-center">
                                    <div className="h-8 w-24 bg-border/50 rounded animate-pulse"></div>
                                    <div className="h-8 w-8 bg-primary/20 rounded-full flex items-center justify-center text-primary text-xs">AI</div>
                                </div>
                                <div className="h-32 bg-background rounded border border-border/50 p-3 space-y-2">
                                    <div className="flex justify-between items-center p-2 bg-card rounded border border-border/30">
                                        <div className="h-2 w-16 bg-text-muted/20 rounded"></div>
                                        <div className="h-2 w-8 bg-primary/40 rounded"></div>
                                    </div>
                                    <div className="flex justify-between items-center p-2 bg-card rounded border border-border/30">
                                        <div className="h-2 w-20 bg-text-muted/20 rounded"></div>
                                        <div className="h-2 w-8 bg-primary/40 rounded"></div>
                                    </div>
                                    <div className="flex justify-between items-center p-2 bg-card rounded border border-border/30">
                                        <div className="h-2 w-12 bg-text-muted/20 rounded"></div>
                                        <div className="h-2 w-8 bg-primary/40 rounded"></div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-40 h-40 bg-primary/20 blur-[60px] rounded-full pointer-events-none"></div>
                    </div>
                </div>
            </div>
        </section>
    );
}
