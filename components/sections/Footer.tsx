"use client";

import { motion } from "framer-motion";

export function Footer() {
    return (
        <footer className="py-20 border-t border-border text-center">
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
            >
                <h2 className="text-3xl font-bold mb-6 text-foreground">Pronto a scalare il tuo business?</h2>
                <p className="text-text-muted mb-8 max-w-xl mx-auto">
                    Che tu voglia acquistare la tecnologia di KONTA o assumermi come consulente tecnico, sono a disposizione.
                </p>
                <div className="flex justify-center gap-6">
                    <motion.a
                        href="mailto:contatto@alessioprosperi.it"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="bg-primary text-black px-8 py-3 rounded-full font-bold hover:bg-primary-hover transition shadow-lg shadow-primary/20"
                    >
                        Invia una Email
                    </motion.a>
                    <motion.a
                        href="#"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="text-foreground flex items-center gap-2 hover:text-primary transition font-medium"
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
