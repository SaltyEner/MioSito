"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import Link from "next/link";
import { PROJECTS } from "@/lib/data/projects";
import { ChevronDown } from "lucide-react";

export function Navbar() {
    const [isProjectsOpen, setIsProjectsOpen] = useState(false);

    return (
        <nav className="flex justify-between items-center py-6 md:py-8 relative z-50">
            <Link href="/" className="text-xl font-bold tracking-tight select-none text-foreground">
                alessioprosperi<span className="text-primary">.it</span>
            </Link>

            <div className="hidden md:flex items-center gap-8 text-sm font-medium text-text-muted">
                {/* My Projects Dropdown */}
                <div
                    className="relative"
                    onMouseEnter={() => setIsProjectsOpen(true)}
                    onMouseLeave={() => setIsProjectsOpen(false)}
                >
                    <button className="flex items-center gap-1 hover:text-foreground transition-colors py-2">
                        My Projects
                        <ChevronDown className={`w-4 h-4 transition-transform ${isProjectsOpen ? "rotate-180" : ""}`} />
                    </button>

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

                <Link href="/#about" className="hover:text-foreground transition-colors">
                    About Me
                </Link>

                <Link href="/#contact" className="hover:text-foreground transition-colors">
                    Contact Me
                </Link>
            </div>

            {/* Mobile Menu Placeholder - For now just a simple contact button on mobile or hidden links */}
            <div className="md:hidden">
                <Link
                    href="/#contact"
                    className="bg-foreground text-background text-sm font-semibold px-4 py-2 rounded-full"
                >
                    Contattami
                </Link>
            </div>
        </nav>
    );
}
