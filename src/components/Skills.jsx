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
                <p className="font-mono text-xs tracking-[0.25em] text-white/25 mb-4">EXPERTISE</p>
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
                                className="glass-card rounded-2xl p-6 border border-white/5 hover:border-white/12 transition-all duration-300 group"
                            >
                                {/* HEADER */}
                                <div className="flex items-center gap-3 mb-5">
                                    <div className="w-8 h-8 rounded-xl bg-white/[0.04] border border-white/8 flex items-center justify-center group-hover:border-white/15 transition">
                                        <Icon size={15} className="text-white/45" />
                                    </div>
                                    <h3 className="text-sm font-semibold text-white/70 tracking-wide">
                                        {cat.name}
                                    </h3>
                                </div>

                                {/* SKILLS */}
                                <div className="flex flex-wrap gap-2">
                                    {cat.skills.map((skill) => (
                                        <span
                                            key={skill}
                                            className="rounded-full border border-white/8 bg-white/[0.03] px-3.5 py-1.5 text-xs text-white/60 hover:border-white/20 hover:text-white/85 hover:bg-white/[0.06] transition-all duration-200"
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
