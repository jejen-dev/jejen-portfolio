import { motion } from "framer-motion";

export default function Footer() {
    return (
        <motion.footer
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="border-t border-white/[0.05] py-10"
        >
            <div className="mx-auto max-w-6xl px-6 flex flex-col md:flex-row items-center justify-between gap-4">
                <a
                    href="/"
                    className="text-sm font-black tracking-[0.3em] text-white/30 hover:text-white/60 transition"
                >
                    JEJEN
                </a>

                <p className="text-xs text-white/20 font-mono">
                    © 2026 — Built with React, Tailwind CSS & Framer Motion
                </p>

                <a
                    href="#"
                    onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: "smooth" }); }}
                    className="text-xs text-white/25 hover:text-white/55 transition font-mono tracking-wide"
                >
                    BACK TO TOP ↑
                </a>
            </div>
        </motion.footer>
    );
}
