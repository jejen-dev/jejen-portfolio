import { motion, useScroll, useMotionValueEvent, AnimatePresence } from "framer-motion";
import { Github, Languages, Menu, X } from "lucide-react";
import { useState, useRef, useEffect } from "react";
import ThemeToggle from "./ThemeToggle";
import { useLanguage } from "../i18n";

export default function Navbar() {
    const { language, setLanguage, languages, t } = useLanguage();
    const { scrollYProgress } = useScroll();
    const [scrolled, setScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);

    const [isPlaying, setIsPlaying] = useState(false);
    const [showTooltip, setShowTooltip] = useState(false);
    const audioRef = useRef(null);

    useMotionValueEvent(scrollYProgress, "change", (latest) => {
        setScrolled(latest > 0.01);
    });

    const togglePlay = () => {
        if (isPlaying) {
            audioRef.current.pause();
        } else {
            audioRef.current.play();
        }
        setIsPlaying(!isPlaying);
    };

    useEffect(() => {
        const audio = audioRef.current;
        if (!audio) return;
        const handleEnded = () => setIsPlaying(false);
        audio.addEventListener("ended", handleEnded);
        return () => audio.removeEventListener("ended", handleEnded);
    }, []);

    useEffect(() => {
        if (menuOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "";
        }
        return () => {
            document.body.style.overflow = "";
        };
    }, [menuOpen]);

    const navLinks = [
        { href: "#about", label: t.nav.about },
        { href: "#experience", label: t.nav.journey },
        { href: "#skills", label: t.nav.skills },
        { href: "#projects", label: t.nav.projects },
        { href: "#certificate", label: t.nav.certificate },
        { href: "#contact", label: t.nav.contact },
    ];

    const languageSelect = (
        <label className="relative flex items-center gap-1.5 rounded-full border border-black/10 dark:border-white/10 bg-black/[0.03] dark:bg-white/[0.03] px-3 py-2 text-xs text-black/60 dark:text-white/60">
            <Languages size={14} />
            <span className="sr-only">{t.nav.language}</span>
            <select
                value={language}
                onChange={(e) => setLanguage(e.target.value)}
                className="bg-transparent text-xs font-medium outline-none"
                aria-label={t.nav.language}
            >
                {languages.map((item) => (
                    <option key={item.code} value={item.code}>
                        {item.short}
                    </option>
                ))}
            </select>
        </label>
    );

    return (
        <>
            <audio ref={audioRef} src="/consume.mp3" preload="auto" />

            <motion.div
                className="fixed top-0 left-0 right-0 z-[60] h-px origin-left"
                style={{
                    scaleX: scrollYProgress,
                    background: "linear-gradient(90deg, rgba(255,255,255,0.8), rgba(255,255,255,0.3))",
                }}
            />

            <motion.nav
                initial={{ y: -80, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className={`fixed top-0 z-50 w-full transition-all duration-500 ${scrolled
                        ? "border-b border-black/8 dark:border-white/8 bg-white/80 dark:bg-[#060606]/80 backdrop-blur-2xl"
                        : "bg-transparent"
                    }`}
            >
                <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
                    {/* LOGO */}
                    <a
                        href="/"
                        dir="ltr"
                        className="text-sm font-black tracking-[0.3em] text-black dark:text-white hover:text-black/80 dark:hover:text-white/80 transition-colors"
                    >
                        JEJEN
                    </a>

                    {/* DESKTOP NAV */}
                    <div className="hidden items-center gap-1 md:flex">
                        {navLinks.map((link) => (
                            <a
                                key={link.href}
                                href={link.href}
                                className="rounded-full px-4 py-2 text-sm text-black/45 dark:text-white/45 transition-all duration-200 hover:bg-black/10 dark:hover:bg-white/10 hover:text-black dark:hover:text-white"
                            >
                                {link.label}
                            </a>
                        ))}
                    </div>

                    {/* ===== RIGHT SIDE ===== */}
                    <div className="flex items-center gap-3">
                        {/* THEME TOGGLE */}
                        <ThemeToggle />

                        <div className="hidden md:block">{languageSelect}</div>

                        {/* MUSIC PLAYER */}
                        <div className="relative hidden md:block">
                            <motion.button
                                onClick={togglePlay}
                                onMouseEnter={() => setShowTooltip(true)}
                                onMouseLeave={() => setShowTooltip(false)}
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.85 }}
                                className={`relative flex items-center justify-center rounded-full border p-2 backdrop-blur-sm transition-all ${isPlaying
                                        ? "border-black/30 dark:border-white/30 bg-black/10 dark:bg-white/10"
                                        : "border-black/10 dark:border-white/10 bg-white/5 dark:bg-white/5 hover:border-black/30 dark:hover:border-white/30 hover:bg-black/10 dark:hover:bg-white/10"
                                    }`}
                                title={isPlaying ? "Pause music" : "Play music"}
                                aria-label={isPlaying ? t.nav.pause : t.nav.play}
                            >
                                <motion.img
                                    src="/consume.png"
                                    alt="Music player"
                                    className="h-6 w-6 rounded-full object-cover"
                                    animate={{ rotate: isPlaying ? 360 : 0 }}
                                    transition={{
                                        duration: 3,
                                        ease: "linear",
                                        repeat: isPlaying ? Infinity : 0,
                                    }}
                                />
                                <span
                                    className={`absolute -right-0.5 -top-0.5 h-2.5 w-2.5 rounded-full border border-[#060606] ${isPlaying ? "bg-emerald-400 animate-pulse" : "bg-black/20 dark:bg-white/20"
                                        }`}
                                />
                            </motion.button>

                            <AnimatePresence>
                                {showTooltip && (
                                    <motion.div
                                        initial={{ opacity: 0, y: 5 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, y: 5 }}
                                        transition={{ duration: 0.15 }}
                                        className="absolute -bottom-8 left-1/2 -translate-x-1/2 whitespace-nowrap rounded bg-black/80 px-2 py-1 text-[10px] text-white/70"
                                    >
                                        {isPlaying ? t.nav.pause : t.nav.play} {t.nav.music}
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>

                        {/* GITHUB BUTTON */}
                        <motion.a
                            whileHover={{ scale: 1.03 }}
                            whileTap={{ scale: 0.97 }}
                            href="https://github.com/jejen-dev"
                            target="_blank"
                            rel="noreferrer"
                            className="hidden md:flex items-center gap-2 rounded-full border border-black/10 dark:border-white/10 bg-black/[0.03] dark:bg-white/[0.03] px-4 py-2 text-sm text-black/70 dark:text-white/70 transition-all hover:border-black/25 dark:hover:border-white/25 hover:bg-black/10 dark:hover:bg-white/10 hover:text-black dark:hover:text-white"
                        >
                            <Github size={15} />
                            GitHub
                        </motion.a>

                        {/* MOBILE MENU BUTTON */}
                        <button
                            onClick={() => setMenuOpen(!menuOpen)}
                            className="flex md:hidden p-2 text-black/60 dark:text-white/60 hover:text-black dark:hover:text-white transition relative z-[100]"
                            aria-label="Toggle menu"
                        >
                            {menuOpen ? <X size={20} /> : <Menu size={20} />}
                        </button>
                    </div>
                </div>
            </motion.nav>

            {/* ===== MOBILE MENU OVERLAY ===== */}
            <AnimatePresence>
                {menuOpen && (
                    <>
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.2 }}
                            className="fixed inset-0 z-[90] bg-black/60 backdrop-blur-sm md:hidden"
                            onClick={() => setMenuOpen(false)}
                        />

                        <motion.div
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{ duration: 0.25, ease: "easeInOut" }}
                            className="fixed top-[72px] left-0 right-0 z-[95] border-t border-black/5 dark:border-white/5 bg-white/95 dark:bg-[#060606]/95 backdrop-blur-2xl md:hidden"
                            style={{ pointerEvents: "auto" }}
                        >
                            <div className="flex flex-col gap-1 px-6 py-4">
                                {navLinks.map((link) => (
                                    <a
                                        key={link.href}
                                        href={link.href}
                                        onClick={() => setMenuOpen(false)}
                                        className="rounded-xl px-4 py-3 text-sm text-black/60 dark:text-white/60 hover:bg-black/10 dark:hover:bg-white/10 hover:text-black dark:hover:text-white transition"
                                        style={{ pointerEvents: "auto", cursor: "pointer" }}
                                    >
                                        {link.label}
                                    </a>
                                ))}

                                <div className="flex items-center justify-between rounded-xl border border-black/10 dark:border-white/10 px-4 py-3">
                                    <span className="text-sm text-black/60 dark:text-white/60">{t.nav.language}</span>
                                    {languageSelect}
                                </div>

                                {/* MUSIC PLAYER MOBILE */}
                                <div className="flex items-center justify-between rounded-xl border border-black/10 dark:border-white/10 px-4 py-3">
                                    <span className="text-sm text-black/60 dark:text-white/60">{t.nav.music}</span>
                                    <button
                                        onClick={togglePlay}
                                        className={`flex items-center gap-2 rounded-full p-1.5 transition ${isPlaying
                                                ? "bg-black/10 dark:bg-white/10"
                                                : "bg-black/5 dark:bg-white/5 hover:bg-black/10 dark:hover:bg-white/10"
                                            }`}
                                        style={{ pointerEvents: "auto", cursor: "pointer" }}
                                        aria-label={isPlaying ? t.nav.pause : t.nav.play}
                                    >
                                        <motion.img
                                            src="/consume.png"
                                            alt="Music"
                                            className="h-6 w-6 rounded-full object-cover"
                                            animate={{ rotate: isPlaying ? 360 : 0 }}
                                            transition={{
                                                duration: 3,
                                                ease: "linear",
                                                repeat: isPlaying ? Infinity : 0,
                                            }}
                                        />
                                    </button>
                                </div>

                                {/* GITHUB MOBILE */}
                                <a
                                    href="https://github.com/jejen-dev"
                                    target="_blank"
                                    rel="noreferrer"
                                    onClick={() => setMenuOpen(false)}
                                    className="mt-1 flex items-center gap-2 rounded-xl border border-black/10 dark:border-white/10 px-4 py-3 text-sm text-black/60 dark:text-white/60 hover:text-black dark:hover:text-white transition"
                                    style={{ pointerEvents: "auto", cursor: "pointer" }}
                                >
                                    <Github size={15} /> GitHub
                                </a>
                            </div>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </>
    );
}
