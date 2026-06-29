import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, Download, Sparkles } from "lucide-react";
import { useState, useEffect } from "react";

const typingTexts = [
    "modern web apps",
    "responsive UIs",
    "clean, fast code",
    "great experiences",
];

const stats = [
    { value: "3+", label: "Projects" },
    { value: "React", label: "Ecosystem" },
    { value: "UI", label: "Focused" },
];

export default function Hero() {
    const [textIndex, setTextIndex] = useState(0);
    const [displayText, setDisplayText] = useState("");
    const [isDeleting, setIsDeleting] = useState(false);

    // ===== STATE UNTUK ROTATING BADGE =====
    const [badgeIndex, setBadgeIndex] = useState(0);
    const badges = ["Open to work", "Front-End Developer", "Based in 🇮🇩"];

    // ===== EFFECT UNTUK TYPING =====
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
    }, [displayText, isDeleting, textIndex]);

    // ===== EFFECT UNTUK ROTATING BADGE =====
    useEffect(() => {
        const interval = setInterval(() => {
            setBadgeIndex((prev) => (prev + 1) % badges.length);
        }, 4000);
        return () => clearInterval(interval);
    }, [badges.length]);

    return (
        <section className="relative flex min-h-screen items-center px-6 pt-20">
            {/* SUBTLE GRID — TETAP SAMA */}
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

            <div className="mx-auto grid max-w-6xl w-full items-center gap-16 md:grid-cols-2">
                {/* ===== LEFT COL — TETAP SAMA PERSIS ===== */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, ease: "easeOut" }}
                >
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="mb-6 flex flex-wrap items-center gap-2"
                    >
                        <span className="inline-flex items-center gap-1.5 rounded-full border border-white/12 bg-white/[0.04] px-4 py-1.5 text-xs font-medium text-white/80 tracking-wide">
                            <Sparkles size={11} className="text-white/60" />
                            Front-End Developer
                        </span>
                        <span className="rounded-full border border-white/8 px-3 py-1.5 text-xs text-white/45">
                            React
                        </span>
                        <span className="rounded-full border border-white/8 px-3 py-1.5 text-xs text-white/45">
                            Tailwind CSS
                        </span>
                    </motion.div>

                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.35 }}
                        className="font-mono text-sm text-white/35 tracking-wide"
                    >
                        I build{" "}
                        <span className="text-white/75 font-medium">{displayText}</span>
                        <span className="typing-cursor" />
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4, duration: 0.6 }}
                        className="mt-4"
                    >
                        <h1 className="text-[clamp(4rem,10vw,7rem)] font-black leading-[0.9] tracking-[-0.04em] bg-gradient-to-r from-white via-white/60 to-white/20 bg-clip-text text-transparent">
                            JEJEN
                        </h1>
                        <div className="flex items-center gap-4 mt-2">
                            <div className="h-px flex-1 bg-gradient-to-r from-transparent to-white/20" />
                            <span className="text-white/90 text-sm tracking-[0.3em] font-light">DEVELOPER</span>
                            <div className="h-px flex-1 bg-gradient-to-l from-transparent to-white/20" />
                        </div>
                    </motion.div>

                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.55 }}
                        className="mt-7 max-w-md text-base leading-[1.75] text-white/45"
                    >
                        Front-End Developer with a background in Light Vehicle
                        Engineering — passionate about building responsive, modern,
                        and user-friendly web apps with React and Tailwind CSS.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.65 }}
                        className="mt-9 flex flex-wrap gap-3"
                    >
                        <motion.a
                            whileHover={{ scale: 1.03 }}
                            whileTap={{ scale: 0.97 }}
                            href="#projects"
                            className="btn-primary rounded-full px-6 py-3.5 text-sm"
                        >
                            View Projects
                        </motion.a>
                        <motion.a
                            whileHover={{ scale: 1.03 }}
                            whileTap={{ scale: 0.97 }}
                            href="https://github.com/jejen-dev"
                            target="_blank"
                            rel="noreferrer"
                            className="btn-secondary inline-flex items-center gap-2 rounded-full px-6 py-3.5 text-sm"
                        >
                            GitHub
                            <ArrowUpRight size={15} />
                        </motion.a>
                        <motion.a
                            whileHover={{ scale: 1.03 }}
                            whileTap={{ scale: 0.97 }}
                            href="/cv.pdf"
                            className="btn-secondary inline-flex items-center gap-2 rounded-full px-6 py-3.5 text-sm"
                        >
                            Resume
                            <Download size={15} />
                        </motion.a>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.8 }}
                        className="mt-12 flex gap-8 border-t border-white/5 pt-8"
                    >
                        {stats.map((stat) => (
                            <div key={stat.label}>
                                <p className="text-2xl font-bold text-white tracking-tight">
                                    {stat.value}
                                </p>
                                <p className="mt-0.5 text-xs text-white/30 tracking-wide">{stat.label}</p>
                            </div>
                        ))}
                    </motion.div>
                </motion.div>

                {/* ===== RIGHT COL — FOTO dengan HOVER + ROTATING BADGE ===== */}
                <motion.div
                    initial={{ opacity: 0, x: 40 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.9, delay: 0.2 }}
                    className="flex justify-center"
                >
                    {/* WRAPPER FOTO — HOVER ZOOM */}
                    <motion.div
                        whileHover={{ scale: 1.03 }}
                        transition={{ duration: 0.3, ease: "easeOut" }}
                        className="relative cursor-pointer"
                    >
                        {/* GLOW BEHIND IMAGE — TETAP SAMA */}
                        <div
                            className="absolute inset-0 rounded-[40px] blur-3xl opacity-20 transition-opacity duration-300 group-hover:opacity-40"
                            style={{ background: "radial-gradient(circle, rgba(255,255,255,0.15), transparent 70%)" }}
                        />

                        {/* FOTO */}
                        <img
                            src="/profile.jpg"
                            alt="Jejen — Front-End Developer"
                            loading="eager"
                            className="hero-image relative z-10 h-[500px] w-[360px] rounded-[40px] object-cover transition-shadow duration-300 hover:shadow-2xl hover:shadow-white/10"
                        />

                        {/* ===== ROTATING BADGE — TAMBAHAN BARU ===== */}
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={badges[badgeIndex]}
                                initial={{ opacity: 0, y: 10, scale: 0.9 }}
                                animate={{ opacity: 1, y: 0, scale: 1 }}
                                exit={{ opacity: 0, y: -10, scale: 0.9 }}
                                transition={{ duration: 0.3 }}
                                className="absolute -bottom-4 -left-4 z-20 glass-card rounded-2xl px-4 py-3 border border-white/10"
                            >
                                <p className="text-xs text-white/40 font-mono">STATUS</p>
                                <p className="text-sm font-semibold text-white flex items-center gap-2 mt-0.5">
                                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                                    {badges[badgeIndex]}
                                </p>
                            </motion.div>
                        </AnimatePresence>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}