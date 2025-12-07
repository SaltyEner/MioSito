
"use client";

import { notFound, useParams } from "next/navigation";
import { getProjectBySlug } from "@/lib/data/projects";
import { Navbar } from "@/components/ui/Navbar";
import { Footer } from "@/components/sections/Footer";
import { motion } from "framer-motion";
import { ArrowLeft, ExternalLink, Github, CheckCircle } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function ProjectPage() {
    const params = useParams();
    const slug = params?.slug as string;

    const project = getProjectBySlug(slug);

    if (!project) {
        return notFound();
    }

    return (
        <main className="min-h-screen bg-background text-foreground relative overflow-x-hidden">
            {/* Background Decoration */}
            <div className="fixed inset-0 bg-grid pointer-events-none z-0 opacity-50"></div>
            <div className={`fixed top-0 right-0 w-[500px] h-[500px] ${project.color.replace('bg-', 'bg-')}/5 rounded-full blur-[120px] pointer-events-none z-0`}></div>

            <div className="max-w-6xl mx-auto px-6 relative z-10">
                <Navbar />

                <div className="py-12 md:py-20">
                    {/* Back Link */}
                    <Link href="/" className="inline-flex items-center gap-2 text-text-muted hover:text-foreground transition mb-8 group">
                        <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                        Torna alla Home
                    </Link>

                    {/* Header */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="mb-16"
                    >
                        <div className="flex items-center gap-3 mb-6">
                            <span className={`px-3 py-1 rounded-full text-xs font-bold bg-white/5 border border-white/10 uppercase tracking-widest`}>
                                {project.category}
                            </span>
                        </div>
                        <h1 className="text-4xl md:text-6xl font-bold mb-6">{project.title}</h1>
                        <p className="text-xl text-text-muted max-w-2xl leading-relaxed">
                            {project.shortDescription}
                        </p>

                        <div className="flex gap-4 mt-8">
                            {project.links.demo && (
                                <a href={project.links.demo} target="_blank" className="bg-primary text-black px-6 py-3 rounded-lg font-bold hover:bg-primary-hover transition flex items-center gap-2">
                                    <ExternalLink className="w-4 h-4" /> Live Demo
                                </a>
                            )}
                            {project.links.github && (
                                <a href={project.links.github} target="_blank" className="bg-card border border-border px-6 py-3 rounded-lg font-bold hover:bg-gray-800 transition flex items-center gap-2">
                                    <Github className="w-4 h-4" /> View Code
                                </a>
                            )}
                        </div>
                    </motion.div>

                    {/* Content Grid */}
                    <div className="grid lg:grid-cols-3 gap-12">
                        {/* Main Content */}
                        <div className="lg:col-span-2 space-y-12">
                            {/* Hero Image */}
                            <motion.div
                                initial={{ opacity: 0, scale: 0.95 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ delay: 0.2 }}
                                className="rounded-2xl overflow-hidden border border-border shadow-2xl relative aspect-video bg-surface"
                            >
                                <Image
                                    src={project.images.hero}
                                    alt={project.title}
                                    fill
                                    className="object-cover"
                                />
                            </motion.div>

                            {/* Description */}
                            <section>
                                <h2 className="text-2xl font-bold mb-6 border-l-4 border-primary pl-4">About the Project</h2>
                                <div className="text-lg text-text-muted leading-relaxed whitespace-pre-line">
                                    {project.fullDescription}
                                </div>
                            </section>

                            {/* Features */}
                            <section>
                                <h2 className="text-2xl font-bold mb-6 border-l-4 border-primary pl-4">Key Features</h2>
                                <div className="grid sm:grid-cols-2 gap-4">
                                    {project.features.map((feature, idx) => (
                                        <div key={idx} className="flex items-start gap-3 p-4 bg-card border border-border rounded-xl">
                                            <CheckCircle className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                                            <span className="text-gray-300">{feature}</span>
                                        </div>
                                    ))}
                                </div>
                            </section>
                        </div>

                        {/* Sidebar */}
                        <div className="space-y-8">
                            <div className="bg-card border border-border p-6 rounded-xl sticky top-24">
                                <h3 className="text-lg font-bold mb-6">Technologies</h3>
                                <div className="flex flex-wrap gap-2">
                                    {project.techStack.map((tech) => (
                                        <span key={tech} className="px-3 py-1.5 bg-surface border border-border rounded text-sm text-gray-300 font-mono">
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <Footer />
            </div>
        </main>
    );
}
