import { motion } from "framer-motion";
import { GraduationCap, Briefcase, Code, Rocket } from "lucide-react";

const journey = [
    {
        year: "2024",
        title: "SMK Light Vehicle Engineering",
        company: null,
        description: "Graduated with a focus in automotive engineering — built discipline, precision, and problem-solving skills that still shape how I write code.",
        icon: GraduationCap,
    },
    {
        year: "2024",
        title: "Production Operator Internship",
        company: "PT Suzuki",
        description: "Real-world manufacturing experience that taught me rigorous attention to detail, teamwork, and professional work ethic.",
        icon: Briefcase,
    },
    {
        year: "2025",
        title: "Learning Front-End Development",
        company: null,
        description: "Self-taught HTML, CSS, JavaScript, and React from scratch. Started building small projects, reading documentation obsessively, and never looking back.",
        icon: Code,
    },
    {
        year: "2026",
        title: "Building Production-Ready React Projects",
        company: null,
        description: "Created real-world applications including Jonkira (restaurant landing page), Task Manager (Kanban), and Weather App (real-time API integration).",
        icon: Rocket,
    },
];

export default function Experience() {
    return (
        <section id="experience" className="mx-auto max-w-6xl px-6 py-28">
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
            >
                <p className="font-mono text-xs tracking-[0.25em] text-white/25 mb-4">TIMELINE</p>
                <h2 className="section-title">My Journey</h2>
                <div className="section-divider" />

                <div className="relative mt-2 space-y-4">
                    {/* VERTICAL LINE */}
                    <div className="absolute left-[19px] top-6 bottom-6 w-px bg-gradient-to-b from-white/10 via-white/6 to-transparent" />

                    {journey.map((item, index) => {
                        const Icon = item.icon;
                        return (
                            <motion.div
                                key={item.year + item.title}
                                initial={{ opacity: 0, x: -16 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.08, duration: 0.45 }}
                                className="flex gap-5"
                            >
                                {/* ICON DOT */}
                                <div className="relative z-10 mt-5 flex-shrink-0 w-10 h-10 rounded-full bg-[#0d0d0d] border border-white/10 flex items-center justify-center">
                                    <Icon size={16} className="text-white/45" />
                                </div>

                                {/* CARD */}
                                <motion.div
                                    whileHover={{ y: -3 }}
                                    transition={{ duration: 0.2 }}
                                    className="flex-1 glass-card rounded-2xl p-5 border border-white/5 hover:border-white/12 transition-all duration-300"
                                >
                                    <div className="flex items-start justify-between gap-4 flex-wrap">
                                        <div>
                                            <h3 className="text-base font-semibold text-white/90 leading-tight">
                                                {item.title}
                                            </h3>
                                            {item.company && (
                                                <p className="text-xs text-white/35 mt-0.5">{item.company}</p>
                                            )}
                                        </div>
                                        <span className="font-mono text-xs text-white/25 border border-white/8 rounded-full px-3 py-1 flex-shrink-0">
                                            {item.year}
                                        </span>
                                    </div>
                                    <p className="mt-3 text-sm leading-relaxed text-white/45">
                                        {item.description}
                                    </p>
                                </motion.div>
                            </motion.div>
                        );
                    })}
                </div>
            </motion.div>
        </section>
    );
}
