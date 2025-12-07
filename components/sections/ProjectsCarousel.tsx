"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, ExternalLink, Github } from "lucide-react";

interface Project {
    id: number;
    title: string;
    category: string;
    description: string;
    stack: string[];
    color: string;
}

const PROJECTS: Project[] = [
    {
        id: 1,
        title: "E-Commerce AI",
        category: "Web App",
        description: "Piattaforma di vendita con raccomandazioni prodotti basate su algoritmi di Machine Learning.",
        stack: ["Next.js", "Python", "TensorFlow"],
        color: "bg-blue-500",
    },
    {
        id: 2,
        title: "Crypto Dashboard",
        category: "Fintech",
        description: "Dashboard in tempo reale per monitoraggio prezzi e gestione portafoglio crypto.",
        stack: ["React", "WebSocket", "Tailwind"],
        color: "bg-purple-500",
    },
    {
        id: 3,
        title: "Task Manager Pro",
        category: "Productivity",
        description: "Applicazione per la gestione di team con funzionalità di chat e calendarizzazione.",
        stack: ["Vue.js", "Firebase", "Node.js"],
        color: "bg-orange-500",
    },
];

export function ProjectsCarousel() {
    const [currentIndex, setCurrentIndex] = useState(0);

    const nextSlide = () => {
        setCurrentIndex((prev) => (prev + 1) % PROJECTS.length);
    };

    const prevSlide = () => {
        setCurrentIndex((prev) => (prev - 1 + PROJECTS.length) % PROJECTS.length);
    };

    return (
        <section className="py-20 overflow-hidden relative">
            <div className="max-w-6xl mx-auto px-6">
                <div className="flex items-center justify-between mb-12">
                    <div>
                        <h2 className="text-3xl font-bold text-foreground mb-2">Altri Progetti</h2>
                        <p className="text-text-muted">Esplora altre applicazioni che ho sviluppato.</p>
                    </div>

                    <div className="flex gap-2">
                        <button
                            onClick={prevSlide}
                            className="p-3 rounded-full border border-border bg-card hover:bg-border transition text-foreground"
                        >
                            <ChevronLeft className="w-5 h-5" />
                        </button>
                        <button
                            onClick={nextSlide}
                            className="p-3 rounded-full border border-border bg-card hover:bg-border transition text-foreground"
                        >
                            <ChevronRight className="w-5 h-5" />
                        </button>
                    </div>
                </div>

                <div className="relative h-[400px] w-full">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={currentIndex}
                            initial={{ opacity: 0, x: 100 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -100 }}
                            transition={{ duration: 0.3 }}
                            className="absolute inset-0"
                        >
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 h-full bg-card border border-border rounded-2xl overflow-hidden glass hover:border-primary/30 transition duration-500">
                                {/* Left Side: Content */}
                                <div className="p-8 md:p-12 flex flex-col justify-center">
                                    <div className={`inline-flex self-start px-3 py-1 rounded text-xs font-bold mb-6 bg-white/5 text-white border border-white/10 uppercase tracking-widest`}>
                                        {PROJECTS[currentIndex].category}
                                    </div>

                                    <h3 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                                        {PROJECTS[currentIndex].title}
                                    </h3>

                                    <p className="text-text-muted text-lg leading-relaxed mb-8">
                                        {PROJECTS[currentIndex].description}
                                    </p>

                                    <div className="flex flex-wrap gap-2 mb-8">
                                        {PROJECTS[currentIndex].stack.map((tech) => (
                                            <span key={tech} className="px-3 py-1 bg-surface border border-border rounded text-sm text-gray-300 font-mono">
                                                {tech}
                                            </span>
                                        ))}
                                    </div>

                                    <div className="flex gap-4">
                                        <button className="flex items-center gap-2 text-primary font-bold hover:underline">
                                            <ExternalLink className="w-4 h-4" /> Live Demo
                                        </button>
                                        <button className="flex items-center gap-2 text-text-muted hover:text-foreground transition">
                                            <Github className="w-4 h-4" /> Code
                                        </button>
                                    </div>
                                </div>

                                {/* Right Side: Visual Placeholder */}
                                <div className="bg-surface relative flex items-center justify-center p-8 border-l border-border/50">
                                    {/* Abstract Visual based on color */}
                                    <div className={`w-32 h-32 rounded-full ${PROJECTS[currentIndex].color} blur-[100px] opacity-20 absolute`}></div>

                                    <div className="relative z-10 w-full max-w-sm aspect-video bg-background border border-border rounded-lg shadow-2xl flex items-center justify-center">
                                        <span className="text-text-muted font-mono text-sm">Preview UI</span>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </AnimatePresence>
                </div>
            </div>
        </section>
    );
}
