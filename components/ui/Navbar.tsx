"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import Link from "next/link";
import { PROJECTS } from "@/lib/data/projects";
import { ChevronDown, Menu, X, Download } from "lucide-react";

export function Navbar() {
    const [isProjectsOpen, setIsProjectsOpen] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isMobileProjectsOpen, setIsMobileProjectsOpen] = useState(false);

    return (
        <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-background/80 border-b border-white/5 transition-all duration-300">
            <div className="max-w-6xl mx-auto px-6 flex justify-between items-center py-4">
                <Link href="/" className="text-xl font-bold tracking-tight select-none text-foreground z-50">
                    alessioprosperi<span className="text-primary">.it</span>
                </Link>

                {/* Desktop Menu */}
                <div className="hidden md:flex items-center gap-8 text-sm font-medium text-text-muted">
                    <Link href="/#hero" className="hover:text-foreground transition-colors">
                        Home
                    </Link>

                    {/* My Projects Dropdown */}
                    <div
                        className="relative"
                        onMouseEnter={() => setIsProjectsOpen(true)}
                        onMouseLeave={() => setIsProjectsOpen(false)}
                    >
                        <Link href="/#projects" className="flex items-center gap-1 hover:text-foreground transition-colors py-2">
                            My Projects
                            <ChevronDown className={`w-4 h-4 transition-transform ${isProjectsOpen ? "rotate-180" : ""}`} />
                        </Link>

                        <AnimatePresence>
                            {isProjectsOpen && (
                                <motion.div
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: 10 }}
                                    transition={{ duration: 0.2 }}
                                    className="absolute left-0 top-full pt-2 w-56"
                                >
                                    <div className="bg-card border border-border rounded-xl shadow-xl overflow-hidden p-2 flex flex-col gap-1">
                                        {PROJECTS.map((project) => (
                                            <Link
                                                key={project.id}
                                                href={`/projects/${project.slug}`}
                                                className="block px-4 py-2 hover:bg-surface rounded-lg text-text-muted hover:text-foreground transition-colors"
                                            >
                                                {project.title}
                                            </Link>
                                        ))}
                                    </div>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>

                    <Link href="/technologies" className="hover:text-foreground transition-colors">
                        Technologies
                    </Link>

                    <Link href="/#about" className="hover:text-foreground transition-colors">
                        About Me
                    </Link>

                    <Link href="/#contact" className="hover:text-foreground transition-colors">
                        Contact Me
                    </Link>

                    <a
                        href="/CV_Alessio_Prosperi.pdf"
                        download="CV_Alessio_Prosperi.pdf"
                        className="flex items-center gap-2 hover:text-primary transition-colors border border-border px-3 py-1.5 rounded-full bg-surface"
                    >
                        <Download className="w-4 h-4" />
                        CV
                    </a>
                </div>

                {/* Mobile Menu Toggle */}
                <button
                    className="md:hidden z-50 p-2 text-foreground"
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                >
                    {isMobileMenuOpen ? <X /> : <Menu />}
                </button>

                {/* Mobile Menu Overlay */}
                <AnimatePresence>
                    {isMobileMenuOpen && (
                        <motion.div
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            className="absolute top-0 left-0 w-full bg-background border-b border-white/10 shadow-2xl md:hidden pt-24 pb-10 px-6 flex flex-col gap-6"
                        >
                            <Link
                                href="/#hero"
                                className="text-lg font-medium text-foreground"
                                onClick={() => setIsMobileMenuOpen(false)}
                            >
                                Home
                            </Link>

                            {/* Mobile Projects Dropdown */}
                            <div>
                                <button
                                    onClick={() => setIsMobileProjectsOpen(!isMobileProjectsOpen)}
                                    className="flex items-center justify-between w-full text-lg font-medium text-foreground mb-4"
                                >
                                    My Projects
                                    <ChevronDown className={`w-5 h-5 transition-transform ${isMobileProjectsOpen ? "rotate-180" : ""}`} />
                                </button>
                                <AnimatePresence>
                                    {isMobileProjectsOpen && (
                                        <motion.div
                                            initial={{ height: 0, opacity: 0 }}
                                            animate={{ height: "auto", opacity: 1 }}
                                            exit={{ height: 0, opacity: 0 }}
                                            className="overflow-hidden pl-4 border-l-2 border-primary/20 flex flex-col gap-3"
                                        >
                                            {PROJECTS.map((project) => (
                                                <Link
                                                    key={project.id}
                                                    href={`/projects/${project.slug}`}
                                                    className="text-text-muted hover:text-primary py-1 block"
                                                    onClick={() => setIsMobileMenuOpen(false)}
                                                >
                                                    {project.title}
                                                </Link>
                                            ))}
                                            <Link
                                                href="/#projects"
                                                className="text-primary font-bold py-1 block mt-2"
                                                onClick={() => setIsMobileMenuOpen(false)}
                                            >
                                                Vedi Tutti
                                            </Link>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>

                            <Link
                                href="/technologies"
                                className="text-lg font-medium text-foreground"
                                onClick={() => setIsMobileMenuOpen(false)}
                            >
                                Technologies
                            </Link>

                            <Link
                                href="/#about"
                                className="text-lg font-medium text-foreground"
                                onClick={() => setIsMobileMenuOpen(false)}
                            >
                                About Me
                            </Link>

                            <a
                                href="/CV_Alessio_Prosperi.pdf"
                                download="CV_Alessio_Prosperi.pdf"
                                className="text-lg font-medium text-foreground flex items-center gap-2"
                                onClick={() => setIsMobileMenuOpen(false)}
                            >
                                <Download className="w-5 h-5" />
                                Scarica CV
                            </a>

                            <Link
                                href="/#contact"
                                className="bg-primary text-black text-center font-bold px-4 py-3 rounded-lg mt-4"
                                onClick={() => setIsMobileMenuOpen(false)}
                            >
                                Contattami
                            </Link>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </nav>
    );
}
