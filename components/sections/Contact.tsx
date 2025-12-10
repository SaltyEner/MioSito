"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { Mail, MapPin, Send, Github, Linkedin, MessageSquare } from "lucide-react";

import { useState } from "react";

export function Contact() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: ""
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const subject = encodeURIComponent(`Contatto dal Portfolio da: ${formData.name}`);
        const body = encodeURIComponent(`Nome: ${formData.name}\nEmail: ${formData.email}\n\nMessaggio:\n${formData.message}`);

        // Alert to confirm action to the user
        alert("Sto provando ad aprire il tuo client di posta predefinito con i dati inseriti.");

        window.location.href = `mailto:alessio2066@gmail.com?subject=${subject}&body=${body}`;
    };

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
                    viewport={{ once: false, amount: 0.2 }}
                    className="grid lg:grid-cols-2 gap-12 lg:gap-24"
                >
                    {/* Left Column: Form */}
                    <div className="bg-card border border-border p-8 rounded-2xl shadow-sm">
                        <h2 className="text-3xl font-bold text-foreground mb-6">Contattami</h2>
                        <form className="space-y-6" onSubmit={handleSubmit}>
                            <div className="space-y-2">
                                <label htmlFor="name" className="text-sm font-medium text-text-muted">Nome</label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    placeholder="Il tuo nome"
                                    required
                                    className="w-full bg-background border border-border rounded-lg px-4 py-3 text-foreground focus:outline-none focus:border-primary transition"
                                />
                            </div>

                            <div className="space-y-2">
                                <label htmlFor="email" className="text-sm font-medium text-text-muted">Email</label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    placeholder="latua@email.com"
                                    required
                                    className="w-full bg-background border border-border rounded-lg px-4 py-3 text-foreground focus:outline-none focus:border-primary transition"
                                />
                            </div>

                            <div className="space-y-2">
                                <label htmlFor="message" className="text-sm font-medium text-text-muted">Messaggio</label>
                                <textarea
                                    id="message"
                                    name="message"
                                    rows={5}
                                    value={formData.message}
                                    onChange={handleChange}
                                    placeholder="Scrivi il tuo messaggio..."
                                    required
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
                            <h3 className="text-2xl font-bold text-foreground mb-4">Aperto a nuove sfide</h3>
                            <p className="text-text-muted text-lg leading-relaxed">
                                Il mio obiettivo è contribuire attivamente a progetti interessanti. Sono alla ricerca di un'opportunità che mi permetta di imparare e portare valore,
                                mettendomi alla prova anche su tecnologie nuove.
                            </p>
                        </div>

                        <div className="space-y-6">
                            <motion.a
                                href="mailto:alessio2066@gmail.com"
                                whileHover={{ x: 5 }}
                                className="flex items-center gap-4 text-text-muted hover:text-primary transition group"
                            >
                                <div className="p-3 bg-surface rounded-full border border-primary text-primary group-hover:bg-primary/10 transition">
                                    <Mail className="w-5 h-5" />
                                </div>
                                <span className="text-lg">alessio2066@gmail.com</span>
                            </motion.a>

                            <div className="flex items-center gap-4 text-text-muted">
                                <div className="p-3 bg-surface rounded-full border border-primary text-primary">
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
                                    className="p-3 bg-card border border-primary rounded-lg text-primary hover:text-primary hover:bg-primary/10 transition shadow-sm"
                                >
                                    <Github className="w-5 h-5" />
                                </motion.a>
                                <motion.a
                                    href="https://www.linkedin.com/in/alessio-prosperii/"
                                    target="_blank"
                                    whileHover={{ y: -5 }}
                                    className="p-3 bg-card border border-blue-500 rounded-lg text-blue-500 hover:text-blue-500 hover:bg-blue-500/10 transition shadow-sm"
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
