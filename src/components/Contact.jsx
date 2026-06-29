import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Send, Instagram } from "lucide-react";
import ContactForm from "./ContactForm";
import { useLanguage } from "../i18n";

const contacts = [
    { title: "GitHub", icon: Github, href: "https://github.com/jejen-dev" },
    { title: "LinkedIn", icon: Linkedin, href: "https://www.linkedin.com/in/jejen-dev/" },
    { title: "Email", icon: Mail, href: "mailto:jejen.profile@gmail.com" },
    { title: "Telegram", icon: Send, href: "https://t.me/jennndv" },
    { title: "Instagram", icon: Instagram, href: "https://www.instagram.com/jaendv" },
];

export default function Contact() {
    const { t } = useLanguage();

    return (
        <section id="contact" className="mx-auto max-w-6xl px-6 py-28">
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
            >
                <p className="font-mono text-xs tracking-[0.25em] text-black/25 dark:text-white/25 mb-4 text-center">{t.contact.eyebrow}</p>
                <h2 className="section-title text-center">{t.contact.title}</h2>
                <p className="mt-4 text-center text-sm text-black/35 dark:text-white/35 max-w-md mx-auto leading-relaxed">
                    {t.contact.description}
                </p>
                <div className="section-divider mx-auto" />

                {/* FORM */}
                <div className="max-w-2xl mx-auto">
                    <ContactForm />
                </div>

                {/* SOCIAL LINKS */}
                <div className="mt-8 flex flex-wrap justify-center gap-3">
                    {contacts.map((contact, i) => {
                        const Icon = contact.icon;
                        return (
                            <motion.a
                                key={contact.title}
                                href={contact.href}
                                target="_blank"
                                rel="noreferrer"
                                initial={{ opacity: 0, y: 12 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.06, duration: 0.4 }}
                                whileHover={{ y: -3 }}
                                className="glass-card flex items-center gap-2.5 rounded-2xl px-5 py-3 border border-black/5 dark:border-white/5 hover:border-black/15 dark:hover:border-white/15 transition-all duration-200"
                            >
                                <Icon size={15} className="text-black/45 dark:text-white/45" />
                                <span className="text-sm text-black/60 dark:text-white/60 hover:text-black/85 dark:hover:text-white/85 transition">
                                    {contact.title}
                                </span>
                            </motion.a>
                        );
                    })}
                </div>
            </motion.div>
        </section>
    );
}
