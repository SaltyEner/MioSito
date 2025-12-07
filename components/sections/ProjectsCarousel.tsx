"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, BookOpen } from "lucide-react";
import Link from "next/link";
import { PROJECTS } from "@/lib/data/projects";

export function ProjectsCarousel() {
    // Filter out the main featured project (Konta) to show only "Other Projects"
    const carouselProjects = PROJECTS.filter(p => p.slug !== 'konta');
    const [currentIndex, setCurrentIndex] = useState(0);

    const nextSlide = () => {
        setCurrentIndex((prev) => (prev + 1) % carouselProjects.length);
    };

    const prevSlide = () => {
        setCurrentIndex((prev) => (prev - 1 + carouselProjects.length) % carouselProjects.length);
    };

    const currentProject = carouselProjects[currentIndex];

    return (
        <section id="projects" className="py-20 overflow-hidden relative">
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="max-w-6xl mx-auto px-6"
            >
                <div className="flex items-center justify-between mb-12">
                    <div>
                        <h2 className="text-3xl font-bold text-foreground mb-2">Altri Progetti</h2>
                        <p className="text-text-muted">Esplora altre applicazioni che ho sviluppato.</p>
                    </div>

                    <div className="flex gap-2">
                        <motion.button
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            onClick={prevSlide}
                            className="p-3 rounded-full border border-border bg-card hover:bg-border transition text-foreground"
                        >
                            <ChevronLeft className="w-5 h-5" />
                        </motion.button>
                        <motion.button
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            onClick={nextSlide}
                            className="p-3 rounded-full border border-border bg-card hover:bg-border transition text-foreground"
                        >
                            <ChevronRight className="w-5 h-5" />
                        </motion.button>
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
                                <div className="p-6 md:p-10 flex flex-col justify-center h-full">
                                    <div className={`inline-flex self-start px-2 py-1 rounded text-[10px] font-bold mb-4 bg-white/5 text-white border border-white/10 uppercase tracking-widest`}>
                                        {currentProject.category}
                                    </div>

                                    <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-3">
                                        {currentProject.title}
                                    </h3>

                                    <p className="text-text-muted text-base leading-relaxed mb-6 line-clamp-3">
                                        {currentProject.shortDescription}
                                    </p>

                                    <div className="flex flex-wrap gap-2 mb-6">
                                        {currentProject.techStack.map((tech) => (
                                            <span key={tech} className="px-2 py-1 bg-surface border border-border rounded text-xs text-gray-300 font-mono">
                                                {tech}
                                            </span>
                                        ))}
                                    </div>

                                    <div className="mt-auto">
                                        <Link href={`/projects/${currentProject.slug}`} className="inline-flex items-center gap-2 text-primary font-bold hover:underline mb-2">
                                            <BookOpen className="w-4 h-4" /> Leggi Case Study
                                        </Link>
                                    </div>
                                </div>

                                {/* Right Side: Visual Placeholder - Clickable */}
                                <Link
                                    href={`/projects/${currentProject.slug}`}
                                    className="bg-surface relative flex items-center justify-center p-8 border-l border-border/50 group cursor-pointer"
                                >
                                    {/* Abstract Visual based on color */}
                                    <div className={`w-32 h-32 rounded-full ${currentProject.color} blur-[100px] opacity-20 absolute group-hover:opacity-40 transition-opacity duration-500`}></div>

                                    <div className="relative z-10 w-full max-w-sm aspect-video bg-background border border-border rounded-lg shadow-2xl flex items-center justify-center overflow-hidden group-hover:scale-105 transition-transform duration-500">
                                        {/* Ideally we would use Next/Image here if we had a real image, keeping the placeholder logic for now but making it clearer it's a preview */}
                                        <span className="text-text-muted font-mono text-sm group-hover:text-primary transition-colors">Preview UI</span>
                                    </div>
                                </Link>
                            </div>
                        </motion.div>
                    </AnimatePresence>
                </div>
            </motion.div>
        </section>
    );
}
