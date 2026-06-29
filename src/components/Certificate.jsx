import { motion } from "framer-motion";
import { Award, ExternalLink, Download, Calendar, CheckCircle } from "lucide-react";

export default function Certificate() {
    const certificateLink = "https://coursera.org/share/e6e492e9d524a97170d4d1d77a599b91";

    // Daftar skill yang diambil dari sertifikat
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

    // Daftar kursus yang diselesaikan
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
                {/* LABEL */}
                <p className="font-mono text-xs tracking-[0.25em] text-white/25 mb-4">CERTIFICATION</p>
                <h2 className="section-title">Professional Certificate</h2>
                <div className="section-divider" />

                {/* CARD UTAMA */}
                <div className="glass-card rounded-3xl border border-white/5 p-6 md:p-8 grid md:grid-cols-5 gap-8 hover:border-white/12 transition-all duration-300">

                    {/* ===== KOLOM KIRI: THUMBNAIL ===== */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1, duration: 0.5 }}
                        className="md:col-span-2"
                    >
                        <div className="rounded-2xl overflow-hidden border border-white/10 bg-white/[0.03] hover:border-white/25 transition group relative">
                            <img
                                src="/certificate-thumbnail.jpg"
                                alt="Meta Front-End Developer Certificate"
                                className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-[1.02]"
                            />
                            {/* OVERLAY KETIKA HOVER */}
                            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                                <span className="text-xs text-white/80 font-mono tracking-wider border border-white/30 rounded-full px-4 py-2">
                                    View Certificate
                                </span>
                            </div>
                        </div>
                    </motion.div>

                    {/* ===== KOLOM KANAN: KONTEN ===== */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2, duration: 0.5 }}
                        className="md:col-span-3 flex flex-col justify-between"
                    >
                        {/* HEADER */}
                        <div>
                            <div className="flex items-center gap-2 mb-2">
                                <Award size={16} className="text-white/40" />
                                <span className="font-mono text-[10px] tracking-[0.2em] text-white/30">META · COURSERA</span>
                            </div>
                            <h3 className="text-2xl font-bold text-white/90 tracking-tight">
                                Front-End Developer Specialization
                            </h3>
                            <div className="flex items-center gap-4 mt-1.5 flex-wrap">
                                <p className="text-sm text-white/50 flex items-center gap-1.5">
                                    <Calendar size={13} className="text-white/30" />
                                    June 2026
                                </p>
                                <span className="w-px h-3 bg-white/10" />
                                <p className="text-sm text-white/50 flex items-center gap-1.5">
                                    <CheckCircle size={13} className="text-emerald-400/60" />
                                    Verified
                                </p>
                            </div>
                        </div>

                        {/* DESCRIPTION */}
                        <p className="text-sm text-white/45 leading-relaxed mt-4">
                            Official certification from Meta, covering comprehensive front-end development
                            skills — from HTML and CSS fundamentals to advanced React, UX/UI design, and
                            coding interview preparation.
                        </p>

                        {/* SKILLS TAGS */}
                        <div className="flex flex-wrap gap-2 mt-4">
                            {skills.map((skill) => (
                                <span
                                    key={skill}
                                    className="rounded-full border border-white/8 bg-white/[0.03] px-3 py-1.5 text-xs text-white/55 hover:border-white/20 hover:text-white/85 transition-all duration-200"
                                >
                                    {skill}
                                </span>
                            ))}
                        </div>

                        {/* COURSES (Collapsible) */}
                        <details className="mt-4 group">
                            <summary className="text-xs font-mono text-white/30 hover:text-white/60 transition cursor-pointer list-none flex items-center gap-2">
                                <span className="inline-block w-4 h-px bg-white/20 group-hover:bg-white/40 transition" />
                                <span>9 courses completed</span>
                                <span className="text-[10px] text-white/20 group-open:rotate-180 transition-transform">▼</span>
                            </summary>
                            <div className="mt-3 grid grid-cols-1 md:grid-cols-2 gap-1.5">
                                {courses.map((course, i) => (
                                    <div key={i} className="flex items-center gap-2 text-xs text-white/35 py-1">
                                        <span className="w-1 h-1 rounded-full bg-white/15 flex-shrink-0" />
                                        {course}
                                    </div>
                                ))}
                            </div>
                        </details>

                        {/* TOMBOL AKSI */}
                        <div className="flex flex-wrap gap-3 mt-6 pt-4 border-t border-white/5">
                            <a
                                href={certificateLink}
                                target="_blank"
                                rel="noreferrer"
                                className="btn-primary inline-flex items-center gap-2 rounded-xl px-5 py-3 text-sm"
                            >
                                View Certificate <ExternalLink size={15} />
                            </a>
                            <a
                                href="/Coursera.pdf"
                                target="_blank"
                                rel="noreferrer"
                                className="btn-secondary inline-flex items-center gap-2 rounded-xl px-5 py-3 text-sm"
                            >
                                <Download size={15} /> Download PDF
                            </a>
                        </div>
                    </motion.div>
                </div>
            </motion.div>
        </section>
    );
}