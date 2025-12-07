"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { Mail, MapPin, Send, Github, Linkedin, MessageSquare } from "lucide-react";

export function Contact() {
    return (
        <section id="contact" className="py-20 relative overflow-hidden">
            {/* Background Gradients */}
            <div className="absolute top-0 right-0 -mr-20 w-96 h-96 bg-primary/5 rounded-full blur-3xl pointer-events-none"></div>
            <div className="absolute bottom-0 left-0 -ml-20 w-64 h-64 bg-blue-500/5 rounded-full blur-3xl pointer-events-none"></div>

            <div className="max-w-6xl mx-auto px-6 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="grid lg:grid-cols-2 gap-12 lg:gap-24"
                >
                    {/* Left Column: Form */}
                    <div className="bg-card border border-border p-8 rounded-2xl shadow-sm">
                        <h2 className="text-3xl font-bold text-foreground mb-6">Contattami</h2>
                        <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                            <div className="space-y-2">
                                <label htmlFor="name" className="text-sm font-medium text-text-muted">Nome</label>
                                <input
                                    type="text"
                                    id="name"
                                    placeholder="Il tuo nome"
                                    className="w-full bg-background border border-border rounded-lg px-4 py-3 text-foreground focus:outline-none focus:border-primary transition"
                                />
                            </div>

                            <div className="space-y-2">
                                <label htmlFor="email" className="text-sm font-medium text-text-muted">Email</label>
                                <input
                                    type="email"
                                    id="email"
                                    placeholder="latua@email.com"
                                    className="w-full bg-background border border-border rounded-lg px-4 py-3 text-foreground focus:outline-none focus:border-primary transition"
                                />
                            </div>

                            <div className="space-y-2">
                                <label htmlFor="message" className="text-sm font-medium text-text-muted">Messaggio</label>
                                <textarea
                                    id="message"
                                    rows={5}
                                    placeholder="Scrivi il tuo messaggio..."
                                    className="w-full bg-background border border-border rounded-lg px-4 py-3 text-foreground focus:outline-none focus:border-primary transition resize-none"
                                ></textarea>
                            </div>

                            <Button className="w-full gap-2 text-base">
                                Invia Messaggio <Send className="w-4 h-4" />
                            </Button>
                        </form>
                    </div>

                    {/* Right Column: Contact Info */}
                    <div className="flex flex-col justify-center space-y-12">
                        <div>
                            <h3 className="text-2xl font-bold text-foreground mb-4">Parliamo del tuo progetto</h3>
                            <p className="text-text-muted text-lg leading-relaxed">
                                Hai un'idea in mente o bisogno di una consulenza tecnica?
                                Scrivimi i dettagli e ti risponderò il prima possibile per discutere come posso aiutarti.
                            </p>
                        </div>

                        <div className="space-y-6">
                            <motion.a
                                href="mailto:contatto@alessioprosperi.it"
                                whileHover={{ x: 5 }}
                                className="flex items-center gap-4 text-text-muted hover:text-primary transition group"
                            >
                                <div className="p-3 bg-surface rounded-full border border-border group-hover:border-primary/50 transition">
                                    <Mail className="w-5 h-5" />
                                </div>
                                <span className="text-lg">contatto@alessioprosperi.it</span>
                            </motion.a>

                            <div className="flex items-center gap-4 text-text-muted">
                                <div className="p-3 bg-surface rounded-full border border-border">
                                    <MapPin className="w-5 h-5" />
                                </div>
                                <span className="text-lg">Italia (Disponibile da Remoto)</span>
                            </div>
                        </div>

                        <div>
                            <h4 className="font-semibold text-foreground mb-4">Seguimi su</h4>
                            <div className="flex gap-4">
                                <motion.a
                                    href="https://github.com/SaltyEner"
                                    target="_blank"
                                    whileHover={{ y: -5 }}
                                    className="p-3 bg-card border border-border rounded-lg text-text-muted hover:text-foreground hover:border-primary/50 transition shadow-sm"
                                >
                                    <Github className="w-5 h-5" />
                                </motion.a>
                                <motion.a
                                    href="https://linkedin.com"
                                    target="_blank"
                                    whileHover={{ y: -5 }}
                                    className="p-3 bg-card border border-border rounded-lg text-text-muted hover:text-blue-500 hover:border-blue-500/50 transition shadow-sm"
                                >
                                    <Linkedin className="w-5 h-5" />
                                </motion.a>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
