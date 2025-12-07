"use client";

import { motion } from "framer-motion";

const container = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1
        } as any
    }
};

const item = {
    hidden: { opacity: 0, y: 20 },
    show: {
        opacity: 1,
        y: 0,
        transition: {
            type: "spring",
            bounce: 0.4
        } as any
    }
};

export function Skills() {
    return (
        <section id="stack" className="py-20">
            <motion.h2
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                className="text-2xl font-bold mb-8 text-foreground"
            >
                Tech Stack & Tools
            </motion.h2>
            <motion.div
                variants={container}
                initial="hidden"
                whileInView="show"
                className="grid grid-cols-2 md:grid-cols-4 gap-4"
            >

                <motion.div variants={item} className="col-span-2 md:col-span-2 bg-card border border-border p-6 rounded-xl hover:border-primary/30 transition group">
                    <div className="text-primary text-2xl mb-2 group-hover:scale-110 transition duration-300 inline-block">⚛️</div>
                    <h3 className="font-bold text-foreground mb-1">Frontend Engineering</h3>
                    <p className="text-sm text-text-muted">Next.js 15, React Server Components, TypeScript, Tailwind CSS, Shadcn/UI.</p>
                </motion.div>

                <motion.div variants={item} className="col-span-2 md:col-span-1 bg-card border border-border p-6 rounded-xl hover:border-primary/30 transition group">
                    <div className="text-blue-400 text-2xl mb-2 group-hover:scale-110 transition duration-300 inline-block">🐍</div>
                    <h3 className="font-bold text-foreground mb-1">Core & API</h3>
                    <p className="text-sm text-text-muted">Python FastAPI, Node.js, Background Tasks.</p>
                </motion.div>

                <motion.div variants={item} className="col-span-1 md:col-span-1 bg-card border border-border p-6 rounded-xl hover:border-primary/30 transition group">
                    <div className="text-indigo-400 text-2xl mb-2 group-hover:scale-110 transition duration-300 inline-block">🐘</div>
                    <h3 className="font-bold text-foreground mb-1">Database</h3>
                    <p className="text-sm text-text-muted">PostgreSQL, Prisma/Drizzle, Redis.</p>
                </motion.div>

                <motion.div variants={item} className="col-span-1 md:col-span-1 bg-card border border-border p-6 rounded-xl hover:border-primary/30 transition group">
                    <div className="text-purple-400 text-2xl mb-2 group-hover:scale-110 transition duration-300 inline-block">✨</div>
                    <h3 className="font-bold text-foreground mb-1">AI Models</h3>
                    <p className="text-sm text-text-muted">Gemini 3.0 Flash, OpenAI o1 & GPT-4o, Claude 3.5 Sonnet, DeepSeek-V3, Manus AI</p>
                </motion.div>

                <motion.div variants={item} className="col-span-2 md:col-span-3 bg-card border border-border p-6 rounded-xl hover:border-primary/30 transition group">
                    <div className="text-foreground text-2xl mb-2 group-hover:scale-110 transition duration-300 inline-block">🚀</div>
                    <h3 className="font-bold text-foreground mb-1">Infrastructure & DevOps</h3>
                    <p className="text-sm text-text-muted">Vercel, Docker, GitHub Actions, CI/CD, Neon Serverless.</p>
                </motion.div>
            </motion.div>
        </section>
    );
}
