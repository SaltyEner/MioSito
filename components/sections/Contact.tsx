import { Button } from "@/components/ui/Button";

export function Contact() {
    return (
        <section className="py-24 px-4 sm:px-6 lg:px-8 bg-zinc-950/50 border-t border-border/50">
            <div className="container mx-auto max-w-3xl text-center">
                <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-6">
                    Ready to build something amazing?
                </h2>
                <p className="text-lg text-muted-foreground mb-8">
                    Whether you need a complex SaaS architecture or a full-stack renovation,
                    I bring technical precision and strategic thinking to every project.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Button size="lg" className="w-full sm:w-auto">
                        Get in touch
                    </Button>
                    <Button variant="outline" size="lg" className="w-full sm:w-auto">
                        Book a consultation
                    </Button>
                </div>
            </div>
        </section>
    );
}
