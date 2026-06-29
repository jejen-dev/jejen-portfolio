import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect, useRef } from "react";
import { Terminal as TerminalIcon, X, Minus } from "lucide-react";

const COMMANDS = {
    help: () => [
        "┌─────────────────────────────────────────┐",
        "│           AVAILABLE COMMANDS            │",
        "├─────────────────────────────────────────┤",
        "│  help        Show available commands    │",
        "│  whoami      Display identity           │",
        "│  skills      List tech skills           │",
        "│  projects    View projects              │",
        "│  experience  Show journey               │",
        "│  about       About me                   │",
        "│  contact     Contact info               │",
        "│  date        Current date & time        │",
        "│  echo [text] Print text                 │",
        "│  clear       Clear terminal             │",
        "│  open [url]  Open link (demo/github)   │",
        "└─────────────────────────────────────────┘",
    ],
    whoami: () => [
        "  Name   : JEJEN",
        "  Role   : Front-End Developer",
        "  Stack  : React · Tailwind CSS · Framer Motion",
        "  Status : OPEN TO WORK ✓",
        "  Based  : Indonesia 🇮🇩",
    ],
    skills: () => [
        "  FRONTEND",
        "    ├── React",
        "    ├── JavaScript (ES6+)",
        "    ├── Tailwind CSS",
        "    ├── HTML5 & CSS3",
        "    └── Framer Motion",
        "",
        "  TOOLS",
        "    ├── Git & GitHub",
        "    ├── Vite",
        "    ├── Vercel / Netlify",
        "    └── Figma",
    ],
    projects: () => [
        "  [1] Jonkira",
        "      Restaurant landing page — React, Tailwind, Vite",
        "      → jonkira.vercel.app",
        "",
        "  [2] Task Manager",
        "      Kanban app — React, DnD Kit, Local Storage",
        "",
        "  [3] Weather App",
        "      Real-time weather — React, OpenWeather API",
        "",
        "  [4] Portfolio",
        "      This very website you're looking at 👀",
    ],
    experience: () => [
        "  2024  ─  SMK Light Vehicle Engineering (Graduated)",
        "  2024  ─  Internship @ PT Suzuki",
        "  2025  ─  Started learning Front-End Development",
        "  2026  ─  Building production-ready React apps",
    ],
    about: () => [
        "  Self-taught Front-End Developer from Indonesia.",
        "  Background in automotive engineering, pivoted to",
        "  software out of curiosity. Passionate about clean",
        "  UI, smooth animations, and great user experience.",
    ],
    contact: () => [
        "  GitHub    → github.com/jejen-dev",
        "  LinkedIn  → linkedin.com/in/jejen-dev",
        "  Email     → jejen.profile@gmail.com",
        "  Telegram  → @jennndv",
        "  Instagram → @jaendv",
    ],
    date: () => [
        `  ${new Date().toLocaleString("en-US", {
            weekday: "long", year: "numeric",
            month: "long", day: "numeric",
            hour: "2-digit", minute: "2-digit", second: "2-digit",
        })}`,
    ],
};

export default function Terminal() {
    const [input, setInput] = useState("");
    const [history, setHistory] = useState([]);
    const [bootComplete, setBootComplete] = useState(false);
    const [bootLines, setBootLines] = useState([]);
    const [isOpen, setIsOpen] = useState(false);
    const [cmdHistory, setCmdHistory] = useState([]);
    const [historyIdx, setHistoryIdx] = useState(-1);
    const inputRef = useRef(null);
    const bodyRef = useRef(null);

    // ===== BOOTING MESSAGES =====
    const bootMessages = [
        { type: "system", content: "  ═══════════════════════════════════════" },
        { type: "system", content: "     JEJEN's TERMINAL v2.0" },
        { type: "system", content: "  ═══════════════════════════════════════" },
        { type: "system", content: "  > Initializing... ✓" },
        { type: "system", content: "  > Loading modules... ✓" },
        { type: "system", content: "  > Establishing connection... ✓" },
        { type: "system", content: "  > System ready." },
        { type: "dim", content: "" },
        { type: "system", content: "  Type 'help' to see available commands." },
        { type: "dim", content: "" },
    ];

    // ===== BOOTING EFFECT =====
    useEffect(() => {
        if (!isOpen || bootComplete) return;

        let i = 0;
        const timer = setInterval(() => {
            if (i < bootMessages.length) {
                setBootLines(prev => [...prev, bootMessages[i]]);
                i++;
            } else {
                clearInterval(timer);
                setBootComplete(true);
                setHistory([...bootMessages]);
            }
        }, 200);

        return () => clearInterval(timer);
    }, [isOpen, bootComplete]);

    useEffect(() => {
        if (bodyRef.current) {
            bodyRef.current.scrollTop = bodyRef.current.scrollHeight;
        }
    }, [history, bootLines]);

    useEffect(() => {
        if (isOpen && bootComplete) setTimeout(() => inputRef.current?.focus(), 80);
    }, [isOpen, bootComplete]);

    const run = (cmd) => {
        const raw = cmd.trim();
        const lower = raw.toLowerCase();

        setCmdHistory((p) => [...p, raw]);
        setHistoryIdx(-1);

        const pushInput = { type: "input", content: `$ ${raw}` };

        if (lower === "clear") {
            setHistory([]);
            setInput("");
            return;
        }

        if (lower === "") {
            setHistory((p) => [...p, { type: "input", content: "$ " }]);
            setInput("");
            return;
        }

        let lines = [];

        if (COMMANDS[lower]) {
            lines = COMMANDS[lower]().map((c) => ({ type: "output", content: c }));
        } else if (lower.startsWith("echo ")) {
            lines = [{ type: "output", content: `  ${raw.slice(5)}` }];
        } else if (lower.startsWith("open ")) {
            const target = raw.slice(5).trim();
            const urls = {
                demo: "https://jonkira.vercel.app/",
                github: "https://github.com/jejen-dev",
                linkedin: "https://www.linkedin.com/in/jejen-dev/",
            };
            const url = urls[target] || (target.startsWith("http") ? target : null);
            if (url) {
                window.open(url, "_blank", "noreferrer");
                lines = [{ type: "output", content: `  Opening ${url}...` }];
            } else {
                lines = [{ type: "error", content: `  Unknown target: '${target}'. Try: demo, github, linkedin` }];
            }
        } else {
            lines = [{ type: "error", content: `  Command not found: '${lower}'. Type 'help' for commands.` }];
        }

        setHistory((p) => [...p, pushInput, ...lines, { type: "dim", content: "" }]);
        setInput("");
    };

    const onKey = (e) => {
        if (e.key === "Enter") return run(input);
        if (e.key === "ArrowUp") {
            e.preventDefault();
            const idx = Math.min(historyIdx + 1, cmdHistory.length - 1);
            setHistoryIdx(idx);
            setInput(cmdHistory[cmdHistory.length - 1 - idx] ?? "");
        }
        if (e.key === "ArrowDown") {
            e.preventDefault();
            if (historyIdx <= 0) { setHistoryIdx(-1); setInput(""); return; }
            const idx = historyIdx - 1;
            setHistoryIdx(idx);
            setInput(cmdHistory[cmdHistory.length - 1 - idx] ?? "");
        }
        if (e.key === "Tab") {
            e.preventDefault();
            const match = Object.keys(COMMANDS).find((k) => k.startsWith(input.toLowerCase()));
            if (match) setInput(match);
        }
    };

    /* BUTTON — background putih, icon hitam */
    if (!isOpen) {
        return (
            <motion.button
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1 }}
                onClick={() => setIsOpen(true)}
                className="fixed bottom-6 right-6 z-50 w-12 h-12 border border-white/30 bg-white/90 backdrop-blur-xl hover:bg-white hover:border-white/50 transition-all duration-200 pixel-corners flex items-center justify-center group"
                aria-label="Open Terminal"
            >
                <TerminalIcon
                    size={18}
                    className="text-black group-hover:text-black/70 transition"
                />
            </motion.button>
        );
    }

    return (
        <AnimatePresence>
            <motion.div
                initial={{ opacity: 0, scale: 0.95, y: 16 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 16 }}
                transition={{ duration: 0.2, ease: "easeOut" }}
                className="fixed bottom-0 right-0 z-50 w-full max-w-[560px] md:bottom-6 md:right-6 border border-white/10 shadow-2xl pixel-corners"
                style={{
                    background: "rgba(232, 232, 232, 0.6)",
                    backdropFilter: "blur(24px)",
                    WebkitBackdropFilter: "blur(24px)",
                }}
            >
                {/* TITLEBAR */}
                <div className="flex items-center justify-between px-4 py-2.5 border-b border-white/20 bg-white/10">
                    <div className="flex items-center gap-2">
                        <TerminalIcon size={12} className="text-black" />
                        <span className="font-mono text-[10px] tracking-[0.3em] text-black font-semibold">
                            TERMINAL
                        </span>
                    </div>
                    <div className="flex items-center gap-1.5">
                        <button
                            onClick={() => setIsOpen(false)}
                            className="w-5 h-5 rounded-full bg-black/10 hover:bg-black/20 flex items-center justify-center transition"
                            title="Minimise"
                        >
                            <Minus size={9} className="text-black" />
                        </button>
                        <button
                            onClick={() => { setHistory([]); setBootComplete(false); setBootLines([]); setIsOpen(false); }}
                            className="w-5 h-5 rounded-full bg-black/10 hover:bg-red-500/50 flex items-center justify-center transition"
                            title="Close"
                        >
                            <X size={9} className="text-black" />
                        </button>
                    </div>
                </div>

                {/* BODY */}
                <div
                    ref={bodyRef}
                    className="terminal-scroll h-72 overflow-y-auto p-4 font-mono text-xs leading-[1.7]"
                    style={{ fontFamily: "'JetBrains Mono', 'Courier New', monospace" }}
                    onClick={() => inputRef.current?.focus()}
                >
                    {/* SCANLINES */}
                    <div
                        className="pointer-events-none absolute inset-0 opacity-[0.03]"
                        style={{
                            background: "repeating-linear-gradient(0deg, transparent, transparent 2px, #000 2px, #000 4px)",
                        }}
                    />

                    {/* BOOTING TEXT */}
                    {!bootComplete && bootLines.map((item, i) => {
                        if (!item) return null;
                        return (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 2 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.1 }}
                                className={`
                                    ${item.type === "system" ? "text-black/60" : ""}
                                    ${item.type === "dim" ? "h-2" : ""}
                                `}
                            >
                                {item.content}
                            </motion.div>
                        );
                    })}

                    {/* HISTORY (setelah boot selesai) */}
                    {bootComplete && history.map((item, i) => {
                        if (!item) return null;
                        return (
                            <div
                                key={i}
                                className={`
                                    ${item.type === "input" ? "text-black font-medium" : ""}
                                    ${item.type === "output" ? "text-black/80" : ""}
                                    ${item.type === "system" ? "text-black/60" : ""}
                                    ${item.type === "error" ? "text-red-600 font-medium" : ""}
                                    ${item.type === "dim" ? "h-2" : ""}
                                `}
                            >
                                {item.content}
                            </div>
                        );
                    })}

                    {/* INPUT LINE — hanya muncul setelah boot selesai */}
                    {bootComplete && (
                        <div className="flex items-center mt-1 text-black">
                            <span className="mr-1 text-black/50 font-bold">$</span>
                            <input
                                ref={inputRef}
                                type="text"
                                value={input}
                                onChange={(e) => setInput(e.target.value)}
                                onKeyDown={onKey}
                                className="flex-1 bg-transparent outline-none text-black font-medium"
                                style={{ fontFamily: "'JetBrains Mono', 'Courier New', monospace", fontSize: "12px" }}
                                spellCheck={false}
                                autoComplete="off"
                            />
                            <span className="w-1.5 h-3.5 bg-black animate-pulse ml-0.5" />
                        </div>
                    )}
                </div>

                {/* STATUS BAR */}
                <div className="flex items-center justify-between border-t border-white/20 bg-white/5 px-4 py-1.5">
                    <span className="font-mono text-[9px] tracking-[0.25em] text-black/50 font-semibold">
                        {bootComplete ? "[ READY ]" : "[ BOOTING ]"}
                    </span>
                    <span className="font-mono text-[9px] text-black/50">
                        {new Date().toLocaleTimeString()}
                    </span>
                </div>
            </motion.div>
        </AnimatePresence>
    );
}