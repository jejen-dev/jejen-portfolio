import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";

export default function MusicPlayer() {
    const [isPlaying, setIsPlaying] = useState(false);
    const audioRef = useRef(null);

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
            <audio ref={audioRef} src="/consume.mp3" preload="auto" />

            <motion.button
                onClick={togglePlay}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="relative flex items-center gap-2 rounded-full border border-black/10 dark:border-white/10 bg-black/5 dark:bg-white/5 px-3 py-2 backdrop-blur-sm transition-all hover:border-black/30 dark:hover:border-white/30 hover:bg-black/10 dark:hover:bg-white/10"
                title={isPlaying ? "Pause music" : "Play music"}
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

                <span className="text-xs text-black/60 dark:text-white/60">
                    {isPlaying ? "⏸" : "▶"}
                </span>
            </motion.button>
        </>
    );
}