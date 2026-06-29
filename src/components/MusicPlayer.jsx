import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";

export default function MusicPlayer() {
    const [isPlaying, setIsPlaying] = useState(false);
    const audioRef = useRef(null);

    // ===== TOGGLE PLAY/PAUSE =====
    const togglePlay = () => {
        if (isPlaying) {
            audioRef.current.pause();
        } else {
            audioRef.current.play();
        }
        setIsPlaying(!isPlaying);
    };

    // ===== AUTO-STOP SAAT MUSIK HABIS =====
    useEffect(() => {
        const audio = audioRef.current;
        if (!audio) return;

        const handleEnded = () => {
            setIsPlaying(false);
        };

        audio.addEventListener("ended", handleEnded);
        return () => {
            audio.removeEventListener("ended", handleEnded);
        };
    }, []);

    return (
        <>
            {/* ELEMEN AUDIO — TERSEMBUNYI */}
            <audio ref={audioRef} src="/consume.mp3" preload="auto" />

            {/* TOMBOL MUSIK — DI NAVBAR */}
            <motion.button
                onClick={togglePlay}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="relative flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-2 backdrop-blur-sm transition-all hover:border-white/30 hover:bg-white/10"
                title={isPlaying ? "Pause music" : "Play music"}
            >
                {/* PIRINGAN BERPUTAR */}
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

                {/* INDIKATOR PLAY/PAUSE */}
                <span className="text-xs text-white/60">
                    {isPlaying ? "⏸" : "▶"}
                </span>
            </motion.button>
        </>
    );
}