import { motion } from "framer-motion";
import { Layout, GitBranch, Brush, Terminal } from "lucide-react";

const skillCategories = [
    {
        name: "Frontend",
        icon: Layout,
        skills: ["React", "JavaScript", "HTML5", "CSS3", "Tailwind CSS"],
    },
    {
        name: "Tools & Version Control",
        icon: GitBranch,
        skills: ["Git", "GitHub", "Vite", "npm", "ESLint"],
    },
    {
        name: "Design & Motion",
        icon: Brush,
        skills: ["Responsive UI", "Framer Motion", "Figma", "Glassmorphism", "Dark Mode"],
    },
    {
        name: "Deployment & APIs",
        icon: Terminal,
        skills: ["Vercel", "Netlify", "API Integration", "Serverless Functions", "EmailJS"],
    },
];

export default function Skills() {
    return (
        <section id="skills" className="mx-auto max-w-6xl px-6 py-28">
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
            >
                <p className="font-mono text-xs tracking-[0.25em] text-black/25 dark:text-white/25 mb-4">EXPERTISE</p>
                <h2 className="section-title">Skills</h2>
                <div className="section-divider" />

                <div className="grid gap-4 md:grid-cols-2">
                    {skillCategories.map((cat, index) => {
                        const Icon = cat.icon;
                        return (
                            <motion.div
                                key={cat.name}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.08, duration: 0.4 }}
                                whileHover={{ y: -4 }}
                                className="glass-card rounded-2xl p-6 border border-black/5 dark:border-white/5 hover:border-black/15 dark:hover:border-white/15 transition-all duration-300 group"
                            >
                                {/* HEADER */}
                                <div className="flex items-center gap-3 mb-5">
                                    <div className="w-8 h-8 rounded-xl bg-black/5 dark:bg-white/5 border border-black/8 dark:border-white/8 flex items-center justify-center group-hover:border-black/15 dark:group-hover:border-white/15 transition">
                                        <Icon size={15} className="text-black/45 dark:text-white/45" />
                                    </div>
                                    <h3 className="text-sm font-semibold text-black/70 dark:text-white/70 tracking-wide">
                                        {cat.name}
                                    </h3>
                                </div>

                                {/* SKILLS */}
                                <div className="flex flex-wrap gap-2">
                                    {cat.skills.map((skill) => (
                                        <span
                                            key={skill}
                                            className="rounded-full border border-black/8 dark:border-white/8 bg-black/5 dark:bg-white/5 px-3.5 py-1.5 text-xs text-black/60 dark:text-white/60 hover:border-black/20 dark:hover:border-white/20 hover:text-black/85 dark:hover:text-white/85 hover:bg-black/10 dark:hover:bg-white/10 transition-all duration-200"
                                        >
                                            {skill}
                                        </span>
                                    ))}
                                </div>
                            </motion.div>
                        );
                    })}
                </div>
            </motion.div>
        </section>
    );
}