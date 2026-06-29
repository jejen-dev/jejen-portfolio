import { motion, AnimatePresence } from "framer-motion";
import { X, ArrowUpRight, Github } from "lucide-react";
import { useEffect } from "react";

export default function ProjectModal({ project, isOpen, onClose }) {
    useEffect(() => {
        const handler = (e) => {
            if (e.key === "Escape") onClose();
        };
        if (isOpen) {
            document.addEventListener("keydown", handler);
            document.body.style.overflow = "hidden";
        }
        return () => {
            document.removeEventListener("keydown", handler);
            document.body.style.overflow = "";
        };
    }, [isOpen, onClose]);

    return (
        <AnimatePresence>
            {isOpen && project && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.2 }}
                    onClick={onClose}
                    className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-md"
                >
                    <motion.div
                        initial={{ scale: 0.92, y: 32, opacity: 0 }}
                        animate={{ scale: 1, y: 0, opacity: 1 }}
                        exit={{ scale: 0.92, y: 32, opacity: 0 }}
                        transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
                        onClick={(e) => e.stopPropagation()}
                        className="w-full max-w-2xl rounded-3xl border border-black/10 dark:border-white/10 overflow-hidden bg-white dark:bg-[#0d0d0d] shadow-2xl"
                        style={{ maxHeight: "85vh", overflowY: "auto" }}
                    >
                        {/* HEADER */}
                        <div className="flex items-center justify-between px-8 pt-8 pb-0">
                            <div>
                                <p className="font-mono text-[10px] tracking-[0.25em] text-black/40 dark:text-white/40 mb-1">PROJECT</p>
                                <h2 className="text-2xl font-bold text-black dark:text-white tracking-tight">
                                    {project.title}
                                </h2>
                            </div>
                            <button
                                onClick={onClose}
                                className="w-8 h-8 rounded-full border border-black/10 dark:border-white/10 flex items-center justify-center text-black/40 dark:text-white/40 hover:text-black dark:hover:text-white hover:border-black/25 dark:hover:border-white/25 transition"
                                aria-label="Close"
                            >
                                <X size={15} />
                            </button>
                        </div>

                        {/* SCREENSHOT */}
                        <div className="mt-6 mx-8 aspect-video rounded-2xl overflow-hidden bg-black/5 dark:bg-white/5 border border-black/6 dark:border-white/6 flex items-center justify-center">
                            {project.screenshot ? (
                                <img
                                    src={project.screenshot}
                                    alt={project.title}
                                    className="w-full h-full object-cover"
                                />
                            ) : (
                                <p className="text-xs text-black/30 dark:text-white/30 font-mono">Screenshot coming soon</p>
                            )}
                        </div>

                        {/* BODY */}
                        <div className="p-8 pt-6">
                            <p className="text-sm leading-relaxed text-black/60 dark:text-white/60">{project.description}</p>

                            {/* TECH STACK */}
                            <div className="flex flex-wrap gap-2 mt-5">
                                {project.tech.map((t) => (
                                    <span
                                        key={t}
                                        className="rounded-full border border-black/8 dark:border-white/8 bg-black/5 dark:bg-white/5 px-3.5 py-1.5 text-xs text-black/60 dark:text-white/60"
                                    >
                                        {t}
                                    </span>
                                ))}
                            </div>

                            {/* ACTIONS */}
                            <div className="flex flex-wrap gap-3 mt-7">
                                <a
                                    href={project.demo}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="btn-primary inline-flex items-center gap-2 rounded-xl px-5 py-3 text-sm"
                                >
                                    Live Demo <ArrowUpRight size={15} />
                                </a>
                                <a
                                    href={project.github}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="inline-flex items-center gap-2 rounded-xl px-5 py-3 text-sm border border-black/20 dark:border-white/20 bg-black/5 dark:bg-white/5 text-black/80 dark:text-white/80 hover:bg-black/10 dark:hover:bg-white/10 hover:text-black dark:hover:text-white transition"
                                >
                                    <Github size={15} /> Source Code
                                </a>
                            </div>
                        </div>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}