import { motion } from "framer-motion";
import { ArrowUpRight, Download, Sparkles } from "lucide-react";
import { useState, useEffect } from "react";
import { useLanguage } from "../i18n";

export default function Hero() {
    const { t } = useLanguage();
    const [textIndex, setTextIndex] = useState(0);
    const [displayText, setDisplayText] = useState("");
    const [isDeleting, setIsDeleting] = useState(false);
    const typingTexts = t.hero.typing;
    const stats = [
        { value: "3+", label: t.hero.stats[0] },
        { value: "React", label: t.hero.stats[1] },
        { value: "UI", label: t.hero.stats[2] },
    ];

    useEffect(() => {
        const current = typingTexts[textIndex];
        let timeout;
        if (!isDeleting) {
            if (displayText.length < current.length) {
                timeout = setTimeout(() => {
                    setDisplayText(current.slice(0, displayText.length + 1));
                }, 90);
            } else {
                timeout = setTimeout(() => setIsDeleting(true), 2200);
            }
        } else {
            if (displayText.length > 0) {
                timeout = setTimeout(() => {
                    setDisplayText(current.slice(0, displayText.length - 1));
                }, 45);
            } else {
                setIsDeleting(false);
                setTextIndex((p) => (p + 1) % typingTexts.length);
            }
        }
        return () => clearTimeout(timeout);
    }, [displayText, isDeleting, textIndex, typingTexts]);

    useEffect(() => {
        setDisplayText("");
        setIsDeleting(false);
        setTextIndex(0);
    }, [t]);

    return (
        <section className="relative flex min-h-screen items-center px-6 pt-20">
            <div
                className="absolute inset-0 pointer-events-none opacity-[0.015]"
                style={{
                    backgroundImage: `
                        linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px),
                        linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)
                    `,
                    backgroundSize: "60px 60px",
                }}
            />

            <div className="mx-auto flex w-full max-w-4xl items-center justify-center">
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, ease: "easeOut" }}
                    className="text-center"
                >
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="mb-6 flex flex-wrap items-center justify-center gap-2"
                    >
                        <span className="inline-flex items-center gap-1.5 rounded-full border border-black/12 dark:border-white/12 bg-black/[0.04] dark:bg-white/[0.04] px-4 py-1.5 text-xs font-medium text-black/80 dark:text-white/80 tracking-wide">
                            <Sparkles size={11} className="text-black/60 dark:text-white/60" />
                            {t.hero.role}
                        </span>
                        <span className="rounded-full border border-black/8 dark:border-white/8 px-3 py-1.5 text-xs text-black/45 dark:text-white/45">
                            React
                        </span>
                        <span className="rounded-full border border-black/8 dark:border-white/8 px-3 py-1.5 text-xs text-black/45 dark:text-white/45">
                            Tailwind CSS
                        </span>
                    </motion.div>

                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.35 }}
                        className="font-mono text-sm text-black/35 dark:text-white/35 tracking-wide"
                    >
                        {t.hero.typingPrefix}{" "}
                        <span className="text-black/75 dark:text-white/75 font-medium">{displayText}</span>
                        <span className="typing-cursor" />
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4, duration: 0.6 }}
                        className="mt-4"
                    >
                        <h1
                            dir="ltr"
                            className="text-[clamp(4rem,10vw,7rem)] font-black leading-[0.9] tracking-[-0.04em] bg-gradient-to-r from-black via-black/60 to-black/20 dark:from-white dark:via-white/60 dark:to-white/20 bg-clip-text text-transparent"
                        >
                            JEJEN
                        </h1>
                        <div className="flex items-center gap-4 mt-2">
                            <div className="h-px flex-1 bg-gradient-to-r from-transparent to-black/20 dark:to-white/20" />
                            <span className="text-black/90 dark:text-white/90 text-sm tracking-[0.3em] font-light">{t.hero.developer}</span>
                            <div className="h-px flex-1 bg-gradient-to-l from-transparent to-black/20 dark:to-white/20" />
                        </div>
                    </motion.div>

                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.55 }}
                        className="mx-auto mt-7 max-w-2xl text-base leading-[1.75] text-black/45 dark:text-white/45"
                    >
                        {t.hero.description}
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.65 }}
                        className="mt-9 flex flex-wrap justify-center gap-3"
                    >
                        <motion.a
                            whileHover={{ scale: 1.03 }}
                            whileTap={{ scale: 0.97 }}
                            href="#projects"
                            className="btn-primary rounded-full px-6 py-3.5 text-sm"
                        >
                            {t.hero.viewProjects}
                        </motion.a>

                        {/* TOMBOL GITHUB — SEKARANG IKUT MODE (hitam di light, putih di dark) */}
                        <motion.a
                            whileHover={{ scale: 1.03 }}
                            whileTap={{ scale: 0.97 }}
                            href="https://github.com/jejen-dev"
                            target="_blank"
                            rel="noreferrer"
                            className="inline-flex items-center gap-2 rounded-full border border-black/20 dark:border-white/20 bg-black/5 dark:bg-white/5 px-6 py-3.5 text-sm text-black/80 dark:text-white/80 transition-all hover:bg-black/10 dark:hover:bg-white/10 hover:text-black dark:hover:text-white"
                        >
                            GitHub <ArrowUpRight size={15} />
                        </motion.a>

                        {/* TOMBOL RESUME — SEKARANG IKUT MODE (hitam di light, putih di dark) */}
                        <motion.a
                            whileHover={{ scale: 1.03 }}
                            whileTap={{ scale: 0.97 }}
                            href="/cv.pdf"
                            className="inline-flex items-center gap-2 rounded-full border border-black/20 dark:border-white/20 bg-black/5 dark:bg-white/5 px-6 py-3.5 text-sm text-black/80 dark:text-white/80 transition-all hover:bg-black/10 dark:hover:bg-white/10 hover:text-black dark:hover:text-white"
                        >
                            {t.hero.resume} <Download size={15} />
                        </motion.a>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.8 }}
                        className="mt-12 flex justify-center gap-8 border-t border-black/5 dark:border-white/5 pt-8"
                    >
                        {stats.map((stat) => (
                            <div key={stat.label}>
                                <p className="text-2xl font-bold text-black dark:text-white tracking-tight">
                                    {stat.value}
                                </p>
                                <p className="mt-0.5 text-xs text-black/30 dark:text-white/30 tracking-wide">{stat.label}</p>
                            </div>
                        ))}
                    </motion.div>
                </motion.div>

            </div>
        </section>
    );
}
