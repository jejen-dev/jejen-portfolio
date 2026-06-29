import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

const CHARS = "JEJEN".split("");

export default function IntroAnimation({ onComplete }) {
    const [phase, setPhase] = useState("enter"); // enter → hold → exit
    const [visible, setVisible] = useState(true);

    useEffect(() => {
        const t1 = setTimeout(() => setPhase("hold"), 800);
        const t2 = setTimeout(() => setPhase("exit"), 1800);
        const t3 = setTimeout(() => {
            setVisible(false);
            onComplete?.();
        }, 2500);
        return () => {
            clearTimeout(t1);
            clearTimeout(t2);
            clearTimeout(t3);
        };
    }, [onComplete]);

    return (
        <AnimatePresence>
            {visible && (
                <motion.div
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.4 }}
                    className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-[#060606]"
                    style={{ pointerEvents: "none" }}
                >
                    {/* CHARACTERS */}
                    <div className="flex gap-1.5 md:gap-2">
                        {CHARS.map((char, i) => (
                            <motion.span
                                key={i}
                                initial={{ y: -120, opacity: 0 }}
                                animate={
                                    phase === "enter"
                                        ? { y: 0, opacity: 1 }
                                        : phase === "exit"
                                        ? { y: -60, opacity: 0, scale: 0.8 }
                                        : { y: 0, opacity: 1 }
                                }
                                transition={{
                                    delay: phase === "enter" ? i * 0.08 : i * 0.04,
                                    duration: phase === "enter" ? 0.55 : 0.35,
                                    type: "spring",
                                    stiffness: 280,
                                    damping: 22,
                                }}
                                className="inline-block text-[5rem] md:text-[7rem] lg:text-[9rem] font-black tracking-[0.05em] text-white"
                                style={{ textShadow: "0 0 80px rgba(255,255,255,0.1)" }}
                            >
                                {char}
                            </motion.span>
                        ))}
                    </div>

                    {/* SUBTITLE */}
                    <motion.p
                        initial={{ opacity: 0, y: 8 }}
                        animate={
                            phase === "enter"
                                ? { opacity: 0 }
                                : phase === "exit"
                                ? { opacity: 0 }
                                : { opacity: 1, y: 0 }
                        }
                        transition={{ duration: 0.4 }}
                        className="mt-4 font-mono text-xs tracking-[0.35em] text-white/25"
                    >
                        FRONT-END DEVELOPER
                    </motion.p>

                    {/* AMBIENT GLOW */}
                    <div
                        className="absolute inset-0 pointer-events-none"
                        style={{
                            background: "radial-gradient(ellipse 60% 50% at 50% 50%, rgba(255,255,255,0.04), transparent 70%)",
                        }}
                    />
                </motion.div>
            )}
        </AnimatePresence>
    );
}
