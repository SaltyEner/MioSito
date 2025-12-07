export function Navbar() {
    return (
        <nav className="flex justify-between items-center py-6 md:py-8">
            <div className="text-xl font-bold tracking-tight select-none text-foreground">
                alessioprosperi<span className="text-primary">.it</span>
            </div>
            <div className="hidden md:flex gap-8 text-sm font-medium text-text-muted">
                <a href="#konta" className="hover:text-foreground transition-colors">Case Studies</a>
                <a href="#stack" className="hover:text-foreground transition-colors">Tech Stack</a>
                {/* <a href="#about" className="hover:text-foreground transition-colors">About</a> */}
            </div>
            <a
                href="mailto:contatto@alessioprosperi.it"
                className="bg-foreground text-background text-sm font-semibold px-5 py-2.5 rounded-full hover:bg-gray-200 transition shadow-lg shadow-white/5"
            >
                Contattami
            </a>
        </nav>
    );
}
