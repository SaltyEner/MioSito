"use client";

import { motion, AnimatePresence } from "framer-motion";
import { getAllTechnologies, Category } from "@/lib/data/technologies";
import { Navbar } from "@/components/ui/Navbar";
import { Footer } from "@/components/sections/Footer";
import { useState } from "react";

export default function TechnologiesPage() {
    const technologies = getAllTechnologies();
    const [selectedCategory, setSelectedCategory] = useState<Category | "All">("All");

    const categories: (Category | "All")[] = ["All", "AI & Data", "Blockchain", "Frontend", "Backend", "Infrastructure", "Architecture"];

    const filteredTechnologies = selectedCategory === "All"
        ? technologies
        : technologies.filter(tech => tech.category === selectedCategory);

    return (
        <main className="min-h-screen bg-background relative overflow-hidden">
            <Navbar />

            {/* Background elements */}
            <div className="fixed inset-0 pointer-events-none">
                <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]" />
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-red/5 rounded-full blur-[100px] animate-pulse" />
                <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-brand-red/5 rounded-full blur-[100px] animate-pulse" />
            </div>

            <div className="relative pt-32 pb-20 px-6">
                <div className="max-w-6xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="mb-16 text-center"
                    >
                        <h1 className="text-4xl md:text-5xl font-bold mb-6 text-brand-red">Technologies</h1>
                        <p className="text-xl text-text-muted max-w-2xl mx-auto mb-10">
                            Le tecnologie, i framework e gli strumenti che utilizzo per creare soluzioni digitali innovative.
                        </p>

                        {/* Filter Buttons */}
                        <div className="flex flex-wrap justify-center gap-3">
                            {categories.map((category) => (
                                <button
                                    key={category}
                                    onClick={() => setSelectedCategory(category)}
                                    className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${selectedCategory === category
                                        ? "bg-brand-red text-white shadow-lg shadow-brand-red/25"
                                        : "bg-surface border border-border text-text-muted hover:border-brand-red/50 hover:text-foreground"
                                        }`}
                                >
                                    {category}
                                </button>
                            ))}
                        </div>
                    </motion.div>

                    <motion.div
                        layout
                        className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
                    >
                        <AnimatePresence mode="popLayout">
                            {filteredTechnologies.map((tech) => (
                                <motion.div
                                    layout
                                    key={tech.slug}
                                    id={tech.slug}
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0, scale: 0.9 }}
                                    transition={{ duration: 0.3 }}
                                    className="bg-brand-red/5 border border-brand-red/20 p-6 rounded-xl hover:bg-brand-red/10 transition-colors group"
                                >
                                    <div className="flex items-center justify-between mb-3">
                                        <h2 className="text-xl font-bold text-foreground group-hover:text-brand-red transition-colors">
                                            {tech.name}
                                        </h2>
                                        <span className="text-[10px] uppercase tracking-wider text-text-muted border border-border px-2 py-0.5 rounded-full bg-surface/50">
                                            {tech.category}
                                        </span>
                                    </div>
                                    <p className="text-text-muted text-sm leading-relaxed">
                                        {tech.description}
                                    </p>
                                </motion.div>
                            ))}
                        </AnimatePresence>
                    </motion.div>
                </div>
            </div>
            <Footer />
        </main>
    );
}
