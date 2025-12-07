"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import React, { useRef } from "react";

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
                className="relative w-full max-w-md shadow-2xl rounded-xl transition-all duration-300"
            >
                {children}
            </div>
        </motion.div>
    );
}

export function FeaturedProject() {
    return (
        <section id="konta" className="py-20">
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="flex items-center gap-4 mb-16"
            >
                <h2 className="text-3xl font-bold text-foreground">Featured Product</h2>
                <div className="h-px flex-1 bg-border"></div>
            </motion.div>

            <div className="glass rounded-2xl p-1 border border-white/10 overflow-hidden relative group">
                <div className="absolute inset-0 bg-linear-to-r from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition duration-700 pointer-events-none"></div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 lg:gap-12">

                    <div className="p-8 lg:p-12 flex flex-col justify-center order-2 lg:order-1">
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8, type: "spring" }}
                            className="flex items-center gap-3 mb-6"
                        >
                            <span className="text-primary font-bold text-2xl tracking-wider">KONTA</span>
                            <span className="bg-primary/10 text-primary border border-primary/20 text-[10px] px-2 py-0.5 rounded uppercase font-bold tracking-wide">SaaS B2B</span>
                        </motion.div>

                        <motion.h3
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8, delay: 0.2, type: "spring" }}
                            className="text-3xl md:text-5xl font-bold mb-6 text-foreground"
                        >
                            Intelligent Financial Automation.
                        </motion.h3>

                        <motion.p
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8, delay: 0.4, type: "spring" }}
                            className="text-lg text-text-muted mb-8 leading-relaxed"
                        >
                            Una piattaforma enterprise per l'automazione contabile.
                            Konta elimina il data-entry manuale utilizzando un <strong>motore AI Ibrido</strong> (Parser XML + Gemini Vision) e un'architettura asincrona su PostgreSQL.
                        </motion.p>

                        <motion.div
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.8, delay: 0.5, type: "spring" }}
                            className="flex flex-wrap gap-2 mb-10"
                        >
                            <span className="px-3 py-1 bg-surface border border-border rounded text-xs text-gray-300 font-mono">Next.js 15</span>
                            <span className="px-3 py-1 bg-surface border border-border rounded text-xs text-gray-300 font-mono">FastAPI</span>
                            <span className="px-3 py-1 bg-surface border border-border rounded text-xs text-gray-300 font-mono">Gemini Vision</span>
                            <span className="px-3 py-1 bg-surface border border-border rounded text-xs text-gray-300 font-mono">Twilio</span>
                            <span className="px-3 py-1 bg-surface border border-border rounded text-xs text-gray-300 font-mono">Docker</span>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.6, type: "spring" }}
                            className="grid grid-cols-2 gap-4 mb-8"
                        >
                            <div className="border-l-2 border-primary/50 pl-4">
                                <div className="text-foreground font-bold text-xl">99.9%</div>
                                <div className="text-sm text-text-muted">Parsing Accuracy</div>
                            </div>
                            <div className="border-l-2 border-primary/50 pl-4">
                                <div className="text-foreground font-bold text-xl">Real-time</div>
                                <div className="text-sm text-text-muted">WhatsApp Sync</div>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.7, type: "spring" }}
                        >
                            <Link href="/projects/konta" className="text-foreground text-sm font-semibold border-b border-primary pb-0.5 hover:text-primary transition cursor-pointer">
                                Vedi Architettura System Design
                            </Link>
                        </motion.div>
                    </div>

                    <div className="bg-surface relative min-h-[400px] lg:min-h-full border-t lg:border-t-0 lg:border-l border-border flex flex-col items-center justify-center overflow-hidden order-1 lg:order-2 perspective-1000">
                        {/* Background Blur */}
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-primary/20 blur-[80px] rounded-full pointer-events-none"></div>

                        <Link href="/projects/konta" className="block w-full h-full">
                            <TiltedCard>
                                <div className="relative rounded-xl overflow-hidden border border-white/10 shadow-2xl">
                                    <Image
                                        src="/konta-preview.png"
                                        alt="Konta Dashboard"
                                        width={800}
                                        height={600}
                                        className="w-full h-auto object-cover"
                                    />
                                    {/* Reflection overlay */}
                                    <div className="absolute inset-0 bg-linear-to-tr from-white/10 to-transparent opacity-50 pointer-events-none"></div>
                                </div>
                            </TiltedCard>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
}
