import { motion } from "framer-motion";
import { GraduationCap, Code, Rocket, Truck, Coffee, Wrench } from "lucide-react";
import { useLanguage } from "../i18n";

const journey = [
    {
        year: "2023",
        title: "Mechanic",
        company: "Bengkel Mitra Suzuki",
        description: "", //diambil dari i18n.jsx
        icon: Wrench,
    },
    {
        year: "2024",
        title: "SMK Light Vehicle Engineering",
        company: null,
        description: "", //diambil dari i18n.jsx
        icon: GraduationCap,
    },
    {
        year: "2025",
        title: "Shipping Staff",
        company: "Indonesia Kesad'tria Perkasa",
        description: "", //diambil dari i18n.jsx
        icon: Truck,
    },
    {
        year: "2026",
        title: "Waiter",
        company: "JONKIRA",
        description: "", //diambil dari i18n.jsx
        icon: Coffee,
    },
    {
        year: "2025 — 2026",
        title: "Front-End Developer (Self-Taught)",
        company: null,
        description: "", //diambil dari i18n.jsx
        icon: Code,
    },
    {
        year: "2026",
        title: "Building Production-Ready React Projects",
        company: null,
        description: "", //diambil dari i18n.jsx
        icon: Rocket,
    },
];

export default function Experience() {
    const { t } = useLanguage();
    const translatedJourney = journey.map((item, index) => ({
        ...item,
        title: t.experience.items[index][0],
        description: t.experience.items[index][1],
    }));

    return (
        <section id="experience" className="mx-auto max-w-6xl px-6 py-28">
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
            >
                <p className="font-mono text-xs tracking-[0.25em] text-black/25 dark:text-white/25 mb-4">{t.experience.eyebrow}</p>
                <h2 className="section-title">{t.experience.title}</h2>
                <div className="section-divider" />

                <div className="relative mt-2 space-y-4">
                    {/* VERTICAL LINE */}
                    <div className="absolute left-[19px] top-6 bottom-6 w-px bg-gradient-to-b from-black/10 dark:from-white/10 via-black/6 dark:via-white/6 to-transparent" />

                    {translatedJourney.map((item, index) => {
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
                                <div className="relative z-10 mt-5 flex-shrink-0 w-10 h-10 rounded-full bg-[#f4f4f4] dark:bg-[#0d0d0d] border border-black/10 dark:border-white/10 flex items-center justify-center">
                                    <Icon size={16} className="text-black/45 dark:text-white/45" />
                                </div>

                                {/* CARD */}
                                <motion.div
                                    whileHover={{ y: -3 }}
                                    transition={{ duration: 0.2 }}
                                    className="flex-1 glass-card rounded-2xl p-5 border border-black/5 dark:border-white/5 hover:border-black/15 dark:hover:border-white/15 transition-all duration-300"
                                >
                                    <div className="flex items-start justify-between gap-4 flex-wrap">
                                        <div>
                                            <h3 className="text-base font-semibold text-black/90 dark:text-white/90 leading-tight">
                                                {item.title}
                                            </h3>
                                            {item.company && (
                                                <p className="text-xs text-black/35 dark:text-white/35 mt-0.5">{item.company}</p>
                                            )}
                                        </div>
                                        <span className="font-mono text-xs text-black/25 dark:text-white/25 border border-black/8 dark:border-white/8 rounded-full px-3 py-1 flex-shrink-0">
                                            {item.year}
                                        </span>
                                    </div>
                                    <p className="mt-3 text-sm leading-relaxed text-black/45 dark:text-white/45">
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
