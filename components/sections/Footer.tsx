
export function Footer() {
    return (
        <footer className="py-20 border-t border-border text-center">
            <h2 className="text-3xl font-bold mb-6 text-foreground">Pronto a scalare il tuo business?</h2>
            <p className="text-text-muted mb-8 max-w-xl mx-auto">
                Che tu voglia acquistare la tecnologia di KONTA o assumermi come consulente tecnico, sono a disposizione.
            </p>
            <div className="flex justify-center gap-6">
                <a href="mailto:contatto@alessioprosperi.it" className="bg-primary text-black px-8 py-3 rounded-full font-bold hover:bg-primary-hover transition">
                    Invia una Email
                </a>
                <a href="#" className="text-foreground flex items-center gap-2 hover:text-primary transition font-medium">
                    LinkedIn
                </a>
            </div>
            <p className="text-xs text-neutral-600 mt-16">
                &copy; {new Date().getFullYear()} Alessio Prosperi. Built with Next.js & Tailwind.
            </p>
        </footer>
    );
}
