"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export function Hero() {
    return (
        <header className="py-20 md:py-32 grid lg:grid-cols-2 gap-12 items-center">
            <div className="flex flex-col items-start">
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    whileHover={{ scale: 1.05, backgroundColor: "rgba(16, 185, 129, 0.1)" }}
                    transition={{ duration: 0.8, type: "spring", bounce: 0.4 }}
                    className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-card border border-border text-xs font-medium text-primary mb-8"
                >
                    <span className="relative flex h-2 w-2">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                    </span>
                    Pronto a collaborare su progetti innovativi e sfide tecnologiche
                </motion.div>

                <motion.h1
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    whileHover={{ scale: 1.02, originX: 0, transition: { duration: 0.2 } }}
                    transition={{ duration: 0.8, delay: 0.2, type: "spring", bounce: 0.4 }}
                    className="text-5xl md:text-7xl font-bold tracking-tight mb-6 leading-[1.1] text-foreground"
                >
                    Costruisco Prodotti <br />
                    <span className="text-transparent bg-clip-text bg-linear-to-r from-white via-gray-200 to-gray-500">
                        Digitali Complessi.
                    </span>
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 0.4, type: "spring", bounce: 0.4 }}
                    className="text-lg md:text-xl text-text-muted max-w-2xl mb-10 leading-relaxed"
                >
                    Sono uno sviluppatore Full Stack focalizzato su architetture SaaS scalabili.
                    Trasformo processi business manuali in software automatizzati, sicuri e performanti.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.6, type: "spring", bounce: 0.4 }}
                    className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto"
                >
                    <motion.a
                        href="#konta"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="bg-primary text-black px-8 py-3.5 rounded-lg font-bold hover:bg-primary-hover transition flex items-center justify-center gap-2"
                    >
                        Vedi Progetto KONTA
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path></svg>
                    </motion.a>
                    <motion.a
                        href="https://github.com/SaltyEner"
                        target="_blank"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="border border-border bg-card text-foreground px-8 py-3.5 rounded-lg font-medium hover:bg-border transition flex items-center justify-center gap-2"
                    >
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" /></svg>
                        GitHub Profile
                    </motion.a>
                </motion.div>
            </div>

            <motion.div
                initial={{ opacity: 0, scale: 0.5, rotate: -10 }}
                animate={{ opacity: 1, scale: 1, rotate: 0 }}
                whileHover={{ scale: 1.05, rotate: 5, transition: { duration: 0.3 } }}
                transition={{ duration: 1, delay: 0.4, type: "spring" }}
                className="relative hidden lg:block"
            >
                <div className="absolute inset-0 bg-primary/20 blur-[80px] rounded-full animate-blob"></div>
                <div className="relative aspect-square w-full max-w-[320px] mx-auto overflow-hidden rounded-full border-2 border-primary/20 shadow-2xl shadow-primary/10">
                    <Image
                        src="/avatar-real.png"
                        alt="Alessio Prosperi Avatar"
                        fill
                        className="object-cover"
                        priority
                    />
                </div>
            </motion.div>
        </header>
    );
}
