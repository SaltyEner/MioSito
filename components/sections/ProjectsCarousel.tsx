"use client";

import { useState, useRef } from "react";
import { motion, AnimatePresence, useMotionValue, useSpring, useTransform } from "framer-motion";
import { ChevronLeft, ChevronRight, BookOpen } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { PROJECTS } from "@/lib/data/projects";
import { getSlugByName } from "@/lib/data/technologies";

function TiltedCard({ children }: { children: React.ReactNode }) {
    const ref = useRef<HTMLDivElement>(null);

    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const mouseXSpring = useSpring(x);
    const mouseYSpring = useSpring(y);

    const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["15deg", "-15deg"]);
    const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-15deg", "15deg"]);

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        if (!ref.current) return;

        const rect = ref.current.getBoundingClientRect();

        const width = rect.width;
        const height = rect.height;

        const mouseX = e.clientX - rect.left;
        const mouseY = e.clientY - rect.top;

        const xPct = mouseX / width - 0.5;
        const yPct = mouseY / height - 0.5;

        x.set(xPct);
        y.set(yPct);
    };

    const handleMouseLeave = () => {
        x.set(0);
        y.set(0);
    };

    return (
        <motion.div
            ref={ref}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{
                rotateY,
                rotateX,
                transformStyle: "preserve-3d",
            }}
            className="relative w-full h-full flex items-center justify-center p-8 group"
        >
            <div
                style={{
                    transform: "translateZ(75px)",
                    transformStyle: "preserve-3d",
                }}
                className="relative w-full shadow-2xl rounded-xl transition-all duration-300"
            >
                {children}
            </div>
        </motion.div>
    );
}

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
                viewport={{ once: false, amount: 0.2 }}
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

                <div className="relative min-h-[500px] w-full">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={currentIndex}
                            initial={{ opacity: 0, x: 50 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -50 }}
                            transition={{ duration: 0.5 }}
                            className="absolute inset-0"
                        >
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-0 md:gap-8 h-full bg-card border border-border rounded-2xl overflow-hidden glass hover:border-primary/30 transition duration-500">
                                {/* Left Side: Content */}
                                <div className="p-6 md:p-12 flex flex-col justify-center h-full order-2 md:order-1 relative z-10 bg-card/50 md:bg-transparent">
                                    <motion.div
                                        initial={{ opacity: 0, x: -30 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ duration: 0.5, delay: 0.2 }}
                                        className={`inline-flex self-start px-2 py-1 rounded text-[10px] font-bold mb-3 md:mb-4 bg-white/5 text-white border border-white/10 uppercase tracking-widest`}
                                    >
                                        {currentProject.category}
                                    </motion.div>

                                    <motion.h3
                                        initial={{ opacity: 0, x: -30 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ duration: 0.5, delay: 0.3 }}
                                        className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-3 md:mb-4"
                                    >
                                        {currentProject.title}
                                    </motion.h3>

                                    <motion.p
                                        initial={{ opacity: 0, x: -30 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ duration: 0.5, delay: 0.4 }}
                                        className="text-text-muted text-base md:text-lg leading-relaxed mb-6 md:mb-8 line-clamp-3 md:line-clamp-none max-w-sm md:max-w-none"
                                    >
                                        {currentProject.shortDescription}
                                    </motion.p>

                                    <motion.div
                                        initial={{ opacity: 0, scale: 0.9 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        transition={{ duration: 0.5, delay: 0.5 }}
                                        className="flex flex-wrap gap-2 mb-6 md:mb-8"
                                    >
                                        {currentProject.techStack.map((tech) => {
                                            const slug = getSlugByName(tech);
                                            return slug ? (
                                                <Link key={tech} href={`/technologies#${slug}`}>
                                                    <span className="px-2 py-1 bg-red-500/5 border border-red-500/50 rounded text-[10px] md:text-xs text-[#E0E0E0] font-mono hover:text-red-500 transition-colors">
                                                        {tech}
                                                    </span>
                                                </Link>
                                            ) : (
                                                <span key={tech} className="px-2 py-1 bg-red-500/5 border border-red-500/50 rounded text-[10px] md:text-xs text-[#E0E0E0] font-mono">
                                                    {tech}
                                                </span>
                                            );
                                        })}
                                    </motion.div>

                                    <motion.div
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.5, delay: 0.6 }}
                                        className="mt-auto"
                                    >
                                        <Link href={`/projects/${currentProject.slug}`} className="inline-flex items-center gap-2 text-primary font-bold hover:underline mb-2 text-sm md:text-base p-2 md:p-0 -ml-2 md:ml-0 bg-primary/10 rounded-lg md:bg-transparent md:rounded-none w-fit">
                                            <BookOpen className="w-4 h-4" /> Leggi Case Study
                                        </Link>
                                    </motion.div>
                                </div>

                                {/* Right Side: Visual Placeholder - Clickable */}
                                <div className="bg-surface relative flex items-center justify-center border-b md:border-b-0 md:border-l border-border/50 order-1 md:order-2 overflow-hidden perspective-1000 min-h-[200px] md:min-h-auto">
                                    {/* Background Blur */}
                                    <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 rounded-full ${currentProject.color} blur-[80px] opacity-30 pointer-events-none`}></div>

                                    <Link href={`/projects/${currentProject.slug}`} className="block w-full h-full relative z-0">
                                        <div className="md:hidden absolute inset-0 z-10"></div> {/* Interceptor for mobile if needed, though TiltedCard usually works better on desktop mouse. On mobile we might want just static image. Keeping structure for now but ensuring image is visible */}
                                        <TiltedCard>
                                            <div className="relative rounded-xl overflow-hidden border border-white/10 shadow-2xl aspect-video w-[85%] mx-auto md:w-full">
                                                <Image
                                                    src={currentProject.images.hero}
                                                    alt={currentProject.title}
                                                    width={600}
                                                    height={400}
                                                    className={`w-full h-full ${currentProject.slug === 'envchor-modeler' ? 'object-contain' : 'object-cover'}`}
                                                />
                                                {/* Reflection overlay */}
                                                <div className="absolute inset-0 bg-linear-to-tr from-white/10 to-transparent opacity-50 pointer-events-none"></div>
                                            </div>
                                        </TiltedCard>
                                    </Link>
                                </div>
                            </div>
                        </motion.div>
                    </AnimatePresence>
                </div>
            </motion.div>
        </section>
    );
}
