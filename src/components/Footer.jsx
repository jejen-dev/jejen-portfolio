import { motion } from "framer-motion";
import { useLanguage } from "../i18n";

export default function Footer() {
    const { t } = useLanguage();

    return (
        <motion.footer
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="border-t border-black/5 dark:border-white/5 py-10"
        >
            <div className="mx-auto max-w-6xl px-6 flex flex-col md:flex-row items-center justify-between gap-4">
                <a
                    href="/"
                    dir="ltr"
                    className="text-sm font-black tracking-[0.3em] text-black/30 dark:text-white/30 hover:text-black/60 dark:hover:text-white/60 transition"
                >
                    JEJEN
                </a>

                <p className="text-xs text-black/20 dark:text-white/20 font-mono">
                    © 2026 — {t.footer.built}
                </p>

                <a
                    href="#"
                    onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: "smooth" }); }}
                    className="text-xs text-black/25 dark:text-white/25 hover:text-black/55 dark:hover:text-white/55 transition font-mono tracking-wide"
                >
                    {t.footer.top}
                </a>
            </div>
        </motion.footer>
    );
}
