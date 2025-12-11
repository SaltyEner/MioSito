
"use client";

import { notFound, useParams } from "next/navigation";
import { getProjectBySlug } from "@/lib/data/projects";
import { getSlugByName } from "@/lib/data/technologies";
import { Navbar } from "@/components/ui/Navbar";
import { Footer } from "@/components/sections/Footer";
import { motion, Variants } from "framer-motion";
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

    const containerVariants: Variants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1
            }
        }
    };

    const itemVariants: Variants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.5, ease: "easeOut" }
        }
    };

    return (
        <main className="min-h-screen bg-background text-foreground relative overflow-x-hidden">
            {/* Background Decoration */}
            <div className="fixed inset-0 bg-grid pointer-events-none z-0 opacity-50"></div>
            <div className={`fixed top-0 right-0 w-[500px] h-[500px] ${project.color.replace('bg-', 'bg-')}/5 rounded-full blur-[120px] pointer-events-none z-0`}></div>

            <div className="max-w-6xl mx-auto px-6 relative z-10">
                <Navbar />

                <motion.div
                    className="py-12 md:py-20"
                    initial="hidden"
                    animate="visible"
                    variants={containerVariants}
                >
                    {/* Back Link */}
                    <motion.div variants={itemVariants}>
                        <Link href="/" className="inline-flex items-center gap-2 text-text-muted hover:text-foreground transition mb-8 group">
                            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                            Torna alla Home
                        </Link>
                    </motion.div>

                    {/* Header */}
                    <motion.div variants={itemVariants} className="mb-16">
                        <div className="flex items-center gap-3 mb-6">
                            <span className={`px-3 py-1 rounded-full text-xs font-bold bg-white/5 border border-white/10 uppercase tracking-widest`}>
                                {project.category}
                            </span>
                        </div>
                        <h1 className="text-4xl md:text-6xl font-bold mb-6 text-foreground">{project.title}</h1>
                        <p className="text-xl text-text-muted max-w-2xl leading-relaxed">
                            {project.shortDescription}
                        </p>

                        <div className="flex gap-4 mt-8">
                            {project.links.demo && (
                                <motion.a
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    href={project.links.demo}
                                    target="_blank"
                                    className="bg-primary text-black px-6 py-3 rounded-lg font-bold hover:bg-primary-hover transition flex items-center gap-2"
                                >
                                    <ExternalLink className="w-4 h-4" /> Live Demo
                                </motion.a>
                            )}
                            {project.links.github && (
                                <motion.a
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    href={project.links.github}
                                    target="_blank"
                                    className="bg-card border border-border px-6 py-3 rounded-lg font-bold hover:bg-gray-800 transition flex items-center gap-2"
                                >
                                    <Github className="w-4 h-4" /> View Code
                                </motion.a>
                            )}
                        </div>
                    </motion.div>

                    {/* Content Grid */}
                    <div className="grid lg:grid-cols-3 gap-12">
                        {/* Main Content */}
                        <div className="lg:col-span-2 space-y-12">
                            {/* Hero Image */}
                            <motion.div
                                variants={itemVariants}
                                className="rounded-2xl overflow-hidden border border-border shadow-2xl relative aspect-video"
                            >
                                <Image
                                    src={project.images.hero}
                                    alt={project.title}
                                    fill
                                    className="object-contain"
                                />
                            </motion.div>

                            {/* Description */}
                            <motion.section variants={itemVariants}>
                                <h2 className="text-2xl font-bold mb-6 border-l-4 border-primary pl-4 text-foreground">About the Project</h2>
                                <div className="text-lg text-text-muted leading-relaxed whitespace-pre-line">
                                    {project.fullDescription}
                                </div>
                            </motion.section>
                            {/* Features */}
                            <motion.section variants={itemVariants}>
                                <h2 className="text-2xl font-bold mb-6 border-l-4 border-primary pl-4 text-foreground">Key Features</h2>
                                <div className="grid sm:grid-cols-2 gap-4">
                                    {project.features.map((feature, idx) => (
                                        <motion.div
                                            key={idx}
                                            variants={{
                                                hidden: { opacity: 0, x: -20 },
                                                visible: { opacity: 1, x: 0 }
                                            }}
                                            whileHover={{ scale: 1.02 }}
                                            className="flex items-start gap-3 p-4 bg-primary/5 border border-primary/10 rounded-xl hover:bg-primary/10 transition-colors"
                                        >
                                            <CheckCircle className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                                            <span className="text-gray-200">{feature}</span>
                                        </motion.div>
                                    ))}
                                </div>
                            </motion.section>
                        </div>

                        {/* Sidebar */}
                        <motion.div variants={itemVariants} className="space-y-8">
                            <div className="p-6 rounded-xl sticky top-24 border bg-brand-red/5 border-brand-red/10">
                                <h3 className="text-lg font-bold mb-6 text-brand-red">Technologies</h3>
                                <div className="flex flex-wrap gap-2">
                                    {project.techStack.map((tech) => {
                                        const slug = getSlugByName(tech);
                                        return slug ? (
                                            <Link key={tech} href={`/technologies#${slug}`}>
                                                <motion.span
                                                    whileHover={{ scale: 1.05 }}
                                                    className="px-3 py-1.5 bg-brand-red/5 border border-brand-red/50 rounded text-sm text-tech-text font-mono select-none hover:text-brand-red transition-colors inline-block"
                                                >
                                                    {tech}
                                                </motion.span>
                                            </Link>
                                        ) : (
                                            <motion.span
                                                key={tech}
                                                whileHover={{ scale: 1.05 }}
                                                className="px-3 py-1.5 bg-brand-red/5 border border-brand-red/50 rounded text-sm text-tech-text font-mono select-none"
                                            >
                                                {tech}
                                            </motion.span>
                                        );
                                    })}
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </motion.div>

                <Footer />
            </div>
        </main>
    );
}
