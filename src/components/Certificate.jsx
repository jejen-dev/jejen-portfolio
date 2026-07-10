import { motion, AnimatePresence } from "framer-motion";
import { Award, ExternalLink, Download, Calendar, CheckCircle, X } from "lucide-react";
import { useState } from "react";
import { useLanguage } from "../i18n";

export default function Certificate() {
    const { t } = useLanguage();
    const certificateLink = "https://coursera.org/share/e6e492e9d524a97170d4d1d77a599b91";
    const [isZoomOpen, setIsZoomOpen] = useState(false);

    const skills = [
        "React",
        "JavaScript",
        "HTML5",
        "CSS3",
        "UX/UI Design",
        "Version Control",
        "Responsive Design",
        "Git",
    ];

    const courses = [
        "Introduction to Front-End Development",
        "Programming with JavaScript",
        "Version Control",
        "HTML and CSS in depth",
        "React Basics",
        "Advanced React",
        "Principles of UX/UI Design",
        "Front-End Developer Capstone",
        "Coding Interview Preparation",
    ];

    return (
        <section className="mx-auto max-w-6xl px-6 py-28" id="certificate">
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
            >
                <p className="font-mono text-xs tracking-[0.25em] text-black/25 dark:text-white/25 mb-4">{t.certificate.eyebrow}</p>
                <h2 className="section-title">{t.certificate.title}</h2>
                <div className="section-divider" />

                <div className="glass-card rounded-3xl border border-black/5 dark:border-white/5 p-6 md:p-8 grid md:grid-cols-5 gap-8 hover:border-black/15 dark:hover:border-white/15 transition-all duration-300">

                    {/* THUMBNAIL — KLIK UNTUK ZOOM */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1, duration: 0.5 }}
                        className="md:col-span-2"
                    >
                        <div
                            onClick={() => setIsZoomOpen(true)}
                            className="rounded-2xl overflow-hidden border border-black/10 dark:border-white/10 bg-black/5 dark:bg-white/5 hover:border-black/25 dark:hover:border-white/25 transition group relative cursor-pointer"
                        >
                            <img
                                src="/certificate-thumbnail.jpg"
                                alt="Meta Front-End Developer Certificate"
                                className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-[1.02]"
                                loading="lazy"
                            />
                            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                                <span className="text-xs text-white/80 font-mono tracking-wider border border-white/30 rounded-full px-4 py-2">
                                    {t.certificate.zoom}
                                </span>
                            </div>
                        </div>
                    </motion.div>

                    {/* CONTENT */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2, duration: 0.5 }}
                        className="md:col-span-3 flex flex-col justify-between"
                    >
                        <div>
                            <div className="flex items-center gap-2 mb-2">
                                <Award size={16} className="text-black/40 dark:text-white/40" />
                                <span className="font-mono text-[10px] tracking-[0.2em] text-black/30 dark:text-white/30">META · COURSERA</span>
                            </div>
                            <h3 className="text-2xl font-bold text-black/90 dark:text-white/90 tracking-tight">
                                {t.certificate.subtitle}
                            </h3>
                            <div className="flex items-center gap-4 mt-1.5 flex-wrap">
                                <p className="text-sm text-black/50 dark:text-white/50 flex items-center gap-1.5">
                                    <Calendar size={13} className="text-black/30 dark:text-white/30" />
                                    {t.certificate.date}
                                </p>
                                <span className="w-px h-3 bg-black/10 dark:bg-white/10" />
                                <p className="text-sm text-black/50 dark:text-white/50 flex items-center gap-1.5">
                                    <CheckCircle size={13} className="text-emerald-400/60" />
                                    {t.certificate.verified}
                                </p>
                            </div>
                        </div>

                        <p className="text-sm text-black/45 dark:text-white/45 leading-relaxed mt-4">
                            {t.certificate.description}
                        </p>

                        <div className="flex flex-wrap gap-2 mt-4">
                            {skills.map((skill) => (
                                <span
                                    key={skill}
                                    className="rounded-full border border-black/8 dark:border-white/8 bg-black/5 dark:bg-white/5 px-3 py-1.5 text-xs text-black/55 dark:text-white/55 hover:border-black/20 dark:hover:border-white/20 hover:text-black/85 dark:hover:text-white/85 hover:bg-black/10 dark:hover:bg-white/10 transition-all duration-200"
                                >
                                    {skill}
                                </span>
                            ))}
                        </div>

                        <details className="mt-4 group">
                            <summary className="text-xs font-mono text-black/30 dark:text-white/30 hover:text-black/60 dark:hover:text-white/60 transition cursor-pointer list-none flex items-center gap-2">
                                <span className="inline-block w-4 h-px bg-black/20 dark:bg-white/20 group-hover:bg-black/40 dark:group-hover:bg-white/40 transition" />
                                <span>{t.certificate.completed}</span>
                                <span className="text-[10px] text-black/20 dark:text-white/20 group-open:rotate-180 transition-transform">▼</span>
                            </summary>
                            <div className="mt-3 grid grid-cols-1 md:grid-cols-2 gap-1.5">
                                {courses.map((course, i) => (
                                    <div key={i} className="flex items-center gap-2 text-xs text-black/35 dark:text-white/35 py-1">
                                        <span className="w-1 h-1 rounded-full bg-black/15 dark:bg-white/15 flex-shrink-0" />
                                        {course}
                                    </div>
                                ))}
                            </div>
                        </details>

                        <div className="flex flex-wrap gap-3 mt-6 pt-4 border-t border-black/5 dark:border-white/5">
                            <a
                                href={certificateLink}
                                target="_blank"
                                rel="noreferrer"
                                className="btn-primary inline-flex items-center gap-2 rounded-xl px-5 py-3 text-sm"
                            >
                                {t.certificate.view} <ExternalLink size={15} />
                            </a>
                            <a
                                href="/Coursera.pdf"
                                target="_blank"
                                rel="noreferrer"
                                className="inline-flex items-center gap-2 rounded-xl px-5 py-3 text-sm border border-black/20 dark:border-white/20 bg-black/5 dark:bg-white/5 text-black/80 dark:text-white/80 hover:bg-black/10 dark:hover:bg-white/10 hover:text-black dark:hover:text-white transition"
                            >
                                <Download size={15} /> {t.certificate.download}
                            </a>
                        </div>
                    </motion.div>
                </div>
            </motion.div>

            {/* ===== ZOOM MODAL ===== */}
            <AnimatePresence>
                {isZoomOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.2 }}
                        className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 backdrop-blur-md p-4"
                        onClick={() => setIsZoomOpen(false)}
                    >
                        <motion.div
                            initial={{ scale: 0.8, y: 20 }}
                            animate={{ scale: 1, y: 0 }}
                            exit={{ scale: 0.8, y: 20 }}
                            transition={{ duration: 0.3, ease: "easeOut" }}
                            className="relative max-w-4xl w-full max-h-[90vh]"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <button
                                onClick={() => setIsZoomOpen(false)}
                                className="absolute -top-12 right-0 text-white/60 hover:text-white transition"
                                aria-label={t.certificate.closeZoom}
                            >
                                <X size={28} />
                            </button>
                            <img
                                src="/certificate-thumbnail.jpg"
                                alt="Meta Front-End Developer Certificate - zoomed"
                                className="w-full h-auto rounded-2xl border border-white/10 shadow-2xl"
                            />
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
}
