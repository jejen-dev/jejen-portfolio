import { motion } from "framer-motion";
import { BookOpen, Code, Zap } from "lucide-react";

const learning = [
    {
        name: "TypeScript",
        description: "Adding type safety to JavaScript for more robust, maintainable code.",
        icon: Code,
        progress: 70,
    },
    {
        name: "Next.js",
        description: "Server-side rendering and static generation with React.",
        icon: Zap,
        progress: 50,
    },
    {
        name: "Advanced React",
        description: "Deep diving into hooks, context, and performance optimization patterns.",
        icon: BookOpen,
        progress: 65,
    },
];

export default function CurrentlyLearning() {
    return (
        <section className="mx-auto max-w-6xl px-6 py-28">
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
            >
                <p className="font-mono text-xs tracking-[0.25em] text-white/25 mb-4">IN PROGRESS</p>
                <h2 className="section-title">Currently Learning</h2>
                <div className="section-divider" />

                <div className="grid gap-4 md:grid-cols-3">
                    {learning.map((item, index) => {
                        const Icon = item.icon;
                        return (
                            <motion.div
                                key={item.name}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1, duration: 0.4 }}
                                whileHover={{ y: -4 }}
                                className="glass-card rounded-2xl p-6 border border-white/5 hover:border-white/12 transition-all duration-300"
                            >
                                {/* ICON + NAME */}
                                <div className="flex items-center gap-3 mb-4">
                                    <div className="w-8 h-8 rounded-xl bg-white/[0.04] border border-white/8 flex items-center justify-center">
                                        <Icon size={15} className="text-white/45" />
                                    </div>
                                    <h3 className="text-sm font-semibold text-white/80">{item.name}</h3>
                                </div>

                                {/* DESCRIPTION */}
                                <p className="text-xs leading-relaxed text-white/40">{item.description}</p>

                                {/* PROGRESS BAR */}
                                <div className="mt-5">
                                    <div className="flex justify-between text-[10px] text-white/25 mb-2 font-mono">
                                        <span>PROGRESS</span>
                                        <span>{item.progress}%</span>
                                    </div>
                                    <div className="h-px w-full bg-white/8 rounded-full overflow-hidden">
                                        <motion.div
                                            initial={{ width: 0 }}
                                            whileInView={{ width: `${item.progress}%` }}
                                            viewport={{ once: true }}
                                            transition={{ duration: 1.2, delay: 0.3, ease: "easeOut" }}
                                            className="h-full bg-white/35 rounded-full"
                                        />
                                    </div>
                                </div>
                            </motion.div>
                        );
                    })}
                </div>
            </motion.div>
        </section>
    );
}
