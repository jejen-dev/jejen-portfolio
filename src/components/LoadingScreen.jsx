import { motion } from "framer-motion";

export default function LoadingScreen() {
    return (
        <div className="fixed inset-0 z-[200] flex flex-col items-center justify-center bg-white dark:bg-[#060606]">
            <motion.div
                animate={{ opacity: [0.3, 1, 0.3] }}
                transition={{ duration: 1.4, repeat: Infinity, ease: "easeInOut" }}
                className="font-mono text-xs tracking-[0.4em] text-black/30 dark:text-white/30"
            >
                LOADING
            </motion.div>
            <div className="mt-5 w-24 h-px bg-black/8 dark:bg-white/8 rounded-full overflow-hidden">
                <motion.div
                    initial={{ x: "-100%" }}
                    animate={{ x: "200%" }}
                    transition={{ duration: 1.2, repeat: Infinity, ease: "easeInOut" }}
                    className="h-full w-1/2 bg-black/30 dark:bg-white/30 rounded-full"
                />
            </div>
        </div>
    );
}