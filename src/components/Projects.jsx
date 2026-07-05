import { motion } from "framer-motion";
import { useState } from "react";
import { ArrowUpRight } from "lucide-react";
import ProjectModal from "./ProjectModal";
import { useLanguage } from "../i18n";

const projects = [
    {
        title: "Jonkira",
        description:
            "A modern restaurant landing page with clean design, smooth animations, and mobile-first responsiveness.",
        demo: "https://jonkira.vercel.app/",
        github: "https://github.com/jejen-dev/Jonkira",
        tech: ["React", "Tailwind CSS", "Vite"],
        screenshot: "/jonkira.jpg",
        year: "2026",
    },
    {
        title: "Task Manager",
        description:
            "Productivity-focused Kanban app with drag-and-drop interactions, local storage persistence, and clean UX.",
        demo: "https://task-manager-app-steel-ten.vercel.app/",
        github: "https://github.com/jejen-dev/Task-manager-app",
        tech: ["React", "DnD Kit", "Local Storage"],
        screenshot: "/task-manager.jpg",
        year: "2026",
    },
    {
        title: "Weather App",
        description:
            "Real-time weather application powered by OpenWeatherMap API, with Vercel Serverless Functions for secure key handling.",
        demo: "https://weather-app-two-delta-29.vercel.app/",
        github: "https://github.com/jejen-dev/weather-app",
        tech: ["React", "OpenWeather API", "Serverless"],
        screenshot: "/weather-app.jpg",
        year: "2025",
    },
];

export default function Projects() {
    const { t } = useLanguage();
    const [selected, setSelected] = useState(null);
    const translatedProjects = projects.map((project, index) => ({
        ...project,
        description: t.projects.descriptions[index],
    }));

    return (
        <section id="projects" className="mx-auto max-w-6xl px-6 py-28">
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
            >
                <p className="font-mono text-xs tracking-[0.25em] text-black/25 dark:text-white/25 mb-4">{t.projects.eyebrow}</p>
                <h2 className="section-title">{t.projects.title}</h2>
                <div className="section-divider" />
            </motion.div>

            <div className="grid gap-4 lg:grid-cols-3">
                {translatedProjects.map((project, index) => (
                    <motion.div
                        key={project.title}
                        initial={{ opacity: 0, y: 24 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.08, duration: 0.45 }}
                        whileHover={{ y: -6 }}
                        onClick={() => setSelected(project)}
                        className="glass-card group relative flex flex-col rounded-2xl p-6 border border-black/5 dark:border-white/5 hover:border-black/15 dark:hover:border-white/15 transition-all duration-300 cursor-pointer overflow-hidden"
                    >
                        {/* YEAR BADGE */}
                        <span className="absolute top-5 right-5 font-mono text-[10px] text-black/20 dark:text-white/20">
                            {project.year}
                        </span>

                        {/* TITLE */}
                        <h3 className="text-xl font-bold text-black/85 dark:text-white/85 group-hover:text-black dark:group-hover:text-white transition pr-12">
                            {project.title}
                        </h3>

                        {/* DESCRIPTION */}
                        <p className="mt-3 flex-1 text-sm leading-relaxed text-black/40 dark:text-white/40 group-hover:text-black/60 dark:group-hover:text-white/60 transition">
                            {project.description}
                        </p>

                        {/* TECH TAGS */}
                        <div className="mt-5 flex flex-wrap gap-1.5">
                            {project.tech.map((t) => (
                                <span
                                    key={t}
                                    className="rounded-full border border-black/7 dark:border-white/7 bg-black/5 dark:bg-white/5 px-2.5 py-1 text-[10px] text-black/45 dark:text-white/45"
                                >
                                    {t}
                                </span>
                            ))}
                        </div>

                        {/* FOOTER */}
                        <div className="mt-5 flex items-center justify-between border-t border-black/5 dark:border-white/5 pt-4">
                            <span className="text-xs text-black/25 dark:text-white/25 group-hover:text-black/50 dark:group-hover:text-white/50 transition">
                                {t.projects.click}
                            </span>
                            <div className="w-6 h-6 rounded-full border border-black/10 dark:border-white/10 flex items-center justify-center group-hover:border-black/30 dark:group-hover:border-white/30 group-hover:bg-black/10 dark:group-hover:bg-white/10 transition">
                                <ArrowUpRight size={12} className="text-black/30 dark:text-white/30 group-hover:text-black/70 dark:group-hover:text-white/70 transition" />
                            </div>
                        </div>

                        {/* HOVER GLOW */}
                        <div
                            className="absolute inset-0 rounded-2xl pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                            style={{ background: "radial-gradient(circle at 50% 0%, rgba(0,0,0,0.03), transparent 70%)" }}
                        />
                    </motion.div>
                ))}
            </div>

            <ProjectModal
                project={selected}
                isOpen={!!selected}
                onClose={() => setSelected(null)}
                labels={t.projects}
            />
        </section>
    );
}
