import { motion } from "framer-motion";
import { useLanguage } from "../i18n";

const highlights = ["React", "Tailwind CSS", "Responsive Design", "Modern UI", "Framer Motion", "Vite"];

export default function About() {
    const { t } = useLanguage();

    return (
        <section id="about" className="mx-auto max-w-6xl px-6 py-28">
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
            >
                <p className="font-mono text-xs tracking-[0.25em] text-black/25 dark:text-white/25 mb-4">{t.about.eyebrow}</p>
                <h2 className="section-title">{t.about.title}</h2>
                <div className="section-divider" />

                <div className="grid md:grid-cols-5 gap-8">
                    <motion.div
                        initial={{ opacity: 0, y: 16 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.15, duration: 0.5 }}
                        className="glass-card rounded-3xl p-8 border border-black/5 dark:border-white/5 hover:border-black/15 dark:hover:border-white/15 transition-all duration-300 md:col-span-3"
                    >
                        <p className="text-base leading-[1.85] text-black/55 dark:text-white/55">
                            {t.about.p1}
                        </p>
                        <p className="mt-4 text-base leading-[1.85] text-black/55 dark:text-white/55">
                            {t.about.p2}
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 16 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.25, duration: 0.5 }}
                        className="glass-card rounded-3xl p-6 border border-black/5 dark:border-white/5 hover:border-black/15 dark:hover:border-white/15 transition-all duration-300 md:col-span-2"
                    >
                        <p className="font-mono text-xs tracking-[0.2em] text-black/25 dark:text-white/25 mb-4">{t.about.tech}</p>
                        <div className="flex flex-wrap gap-2">
                            {highlights.map((h) => (
                                <span
                                    key={h}
                                    className="rounded-full border border-black/8 dark:border-white/8 bg-black/5 dark:bg-white/5 px-3.5 py-1.5 text-xs text-black/65 dark:text-white/65 hover:border-black/20 dark:hover:border-white/20 hover:text-black/90 dark:hover:text-white/90 hover:bg-black/10 dark:hover:bg-white/10 transition-all duration-200"
                                >
                                    {h}
                                </span>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </motion.div>
        </section>
    );
}
