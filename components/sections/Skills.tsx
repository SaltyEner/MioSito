

export function Skills() {
    return (
        <section id="stack" className="py-20">
            <h2 className="text-2xl font-bold mb-8 text-foreground">Tech Stack & Tools</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">

                <div className="col-span-2 md:col-span-2 bg-card border border-border p-6 rounded-xl hover:border-primary/30 transition">
                    <div className="text-primary text-2xl mb-2">⚛️</div>
                    <h3 className="font-bold text-foreground mb-1">Frontend Engineering</h3>
                    <p className="text-sm text-text-muted">Next.js 15, React Server Components, TypeScript, Tailwind CSS, Shadcn/UI.</p>
                </div>

                <div className="col-span-2 md:col-span-1 bg-card border border-border p-6 rounded-xl hover:border-primary/30 transition">
                    <div className="text-blue-400 text-2xl mb-2">🐍</div>
                    <h3 className="font-bold text-foreground mb-1">Core & API</h3>
                    <p className="text-sm text-text-muted">Python FastAPI, Node.js, Background Tasks.</p>
                </div>

                <div className="col-span-1 md:col-span-1 bg-card border border-border p-6 rounded-xl hover:border-primary/30 transition">
                    <div className="text-indigo-400 text-2xl mb-2">🐘</div>
                    <h3 className="font-bold text-foreground mb-1">Database</h3>
                    <p className="text-sm text-text-muted">PostgreSQL, Prisma/Drizzle, Redis.</p>
                </div>

                <div className="col-span-1 md:col-span-1 bg-card border border-border p-6 rounded-xl hover:border-primary/30 transition">
                    <div className="text-purple-400 text-2xl mb-2">✨</div>
                    <h3 className="font-bold text-foreground mb-1">AI Models</h3>
                    <p className="text-sm text-text-muted">Gemini Pro 1.5, OpenAI GPT-4, LangChain.</p>
                </div>

                <div className="col-span-2 md:col-span-3 bg-card border border-border p-6 rounded-xl hover:border-primary/30 transition">
                    <div className="text-foreground text-2xl mb-2">🚀</div>
                    <h3 className="font-bold text-foreground mb-1">Infrastructure & DevOps</h3>
                    <p className="text-sm text-text-muted">Vercel, Docker, GitHub Actions, CI/CD, Neon Serverless.</p>
                </div>
            </div>
        </section>
    );
}
