import { motion } from "framer-motion";

const highlights = ["React", "Tailwind CSS", "Responsive Design", "Modern UI", "Framer Motion", "Vite"];

export default function About() {
    return (
        <section id="about" className="mx-auto max-w-6xl px-6 py-28">
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
            >
                <p className="font-mono text-xs tracking-[0.25em] text-black/25 dark:text-white/25 mb-4">ABOUT</p>
                <h2 className="section-title">About Me</h2>
                <div className="section-divider" />

                <div className="grid md:grid-cols-5 gap-8">
                    <motion.div
                        initial={{ opacity: 0, y: 16 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.15, duration: 0.5 }}
                        className="glass-card rounded-3xl p-8 border border-black/5 dark:border-white/5 hover:border-black/15 dark:hover:border-white/15 transition-all duration-300 md:col-span-3"
                    >
                        <p className="text-base leading-[1.85] text-black/55 dark:text-white/55">
                            I'm a self-taught Front-End Developer with an unconventional background — I graduated
                            from SMK Light Vehicle Engineering, then pivoted to software development out of pure
                            curiosity and passion. Since 2025, I've been building web applications with{" "}
                            <span className="text-black/85 dark:text-white/85 font-medium">React</span> and{" "}
                            <span className="text-black/85 dark:text-white/85 font-medium">Tailwind CSS</span>, focusing on clean code,
                            smooth interactions, and interfaces that actually feel good to use.
                        </p>
                        <p className="mt-4 text-base leading-[1.85] text-black/55 dark:text-white/55">
                            When I'm not coding, I'm exploring new tools, reading documentation, and looking
                            for ways to make the web a little more beautiful.
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 16 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.25, duration: 0.5 }}
                        className="glass-card rounded-3xl p-6 border border-black/5 dark:border-white/5 hover:border-black/15 dark:hover:border-white/15 transition-all duration-300 md:col-span-2"
                    >
                        <p className="font-mono text-xs tracking-[0.2em] text-black/25 dark:text-white/25 mb-4">TECH I USE</p>
                        <div className="flex flex-wrap gap-2">
                            {highlights.map((h) => (
                                <span
                                    key={h}
                                    className="rounded-full border border-black/8 dark:border-white/8 bg-black/5 dark:bg-white/5 px-3.5 py-1.5 text-xs text-black/65 dark:text-white/65 hover:border-black/20 dark:hover:border-white/20 hover:text-black/90 dark:hover:text-white/90 hover:bg-black/10 dark:hover:bg-white/10 transition-all duration-200"
                                >
                                    {h}
                                </span>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </motion.div>
        </section>
    );
}