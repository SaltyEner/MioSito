"use client";

import { motion } from "framer-motion";

export function Footer() {
    return (
        <footer className="py-20 border-t border-border text-center">
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: false, amount: 0.3 }}
            >
                <h2 className="text-3xl font-bold mb-6 text-foreground">Interessato al mio profilo?</h2>
                <p className="text-text-muted mb-8 max-w-xl mx-auto">
                    Se le mie competenze e il mio stack tecnologico sono in linea con quello che cercate, sarei felice di approfondire con una chiacchierata conoscitiva.
                </p>
                <div className="flex justify-center gap-6 flex-wrap">
                    <motion.a
                        href="mailto:alessio2066@gmail.com?subject=Richiesta%20da%20Portfolio"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="bg-primary text-black px-8 py-3 rounded-full font-bold hover:bg-primary-hover transition shadow-lg shadow-primary/20"
                    >
                        Invia una Email
                    </motion.a>
                    <motion.a
                        href="/CV_Alessio_Prosperi.pdf"
                        download="CV_Alessio_Prosperi.pdf"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="bg-card border border-border text-foreground px-8 py-3 rounded-full font-bold hover:border-primary/50 transition shadow-lg"
                    >
                        Scarica CV
                    </motion.a>
                    <motion.a
                        href="https://www.linkedin.com/in/alessio-prosperii/"
                        target="_blank"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="bg-[#0077b5] text-white px-8 py-3 rounded-full font-bold hover:bg-[#006396] transition shadow-lg flex items-center gap-2"
                    >
                        LinkedIn
                    </motion.a>
                </div>
            </motion.div>
            <p className="text-xs text-neutral-600 mt-16">
                &copy; {new Date().getFullYear()} Alessio Prosperi. Built with Next.js & Tailwind.
            </p>
        </footer>
    );
}
