import { motion } from "framer-motion";
import { useState } from "react";
import emailjs from "@emailjs/browser";
import { Send, Loader2, CheckCircle, AlertCircle } from "lucide-react";

const fields = [
    { name: "name", label: "Name", type: "text", placeholder: "Your full name", required: true },
    { name: "email", label: "Email", type: "email", placeholder: "you@example.com", required: true },
    { name: "subject", label: "Subject", type: "text", placeholder: "What's this about?", required: false },
];

export default function ContactForm() {
    const [formData, setFormData] = useState({ name: "", email: "", subject: "", message: "" });
    const [status, setStatus] = useState("idle"); // idle | loading | success | error

    const handleChange = (e) => {
        setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!formData.name || !formData.email || !formData.message) return;

        setStatus("loading");
        try {
            const result = await emailjs.send(
                import.meta.env.VITE_EMAILJS_SERVICE_ID,
                import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
                {
                    name: formData.name,
                    email: formData.email,
                    subject: formData.subject || "Message from Portfolio",
                    message: formData.message,
                },
                import.meta.env.VITE_EMAILJS_PUBLIC_KEY
            );
            if (result.status === 200) {
                setStatus("success");
                setFormData({ name: "", email: "", subject: "", message: "" });
            } else {
                setStatus("error");
            }
        } catch (err) {
            console.error("EmailJS Error:", err);
            setStatus("error");
        }
    };

    return (
        <motion.form
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            onSubmit={handleSubmit}
            className="glass-card rounded-3xl p-8 border border-white/5"
        >
            {/* SUCCESS */}
            {status === "success" && (
                <motion.div
                    initial={{ opacity: 0, y: -8 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mb-6 flex items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.04] px-5 py-4 text-sm text-white/80"
                >
                    <CheckCircle size={16} className="text-emerald-400 flex-shrink-0" />
                    Message sent! I'll get back to you soon.
                </motion.div>
            )}

            {/* ERROR */}
            {status === "error" && (
                <motion.div
                    initial={{ opacity: 0, y: -8 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mb-6 flex items-center gap-3 rounded-2xl border border-red-500/20 bg-red-500/[0.06] px-5 py-4 text-sm text-red-400"
                >
                    <AlertCircle size={16} className="flex-shrink-0" />
                    Failed to send. Try again or email directly.
                </motion.div>
            )}

            {/* FIELDS */}
            <div className="grid gap-4 md:grid-cols-2">
                {fields.map((field) => (
                    <div key={field.name} className={field.name === "subject" ? "md:col-span-2" : ""}>
                        <label className="mb-1.5 block font-mono text-[10px] tracking-[0.2em] text-white/30">
                            {field.label.toUpperCase()}{field.required && " *"}
                        </label>
                        <input
                            type={field.type}
                            name={field.name}
                            value={formData[field.name]}
                            onChange={handleChange}
                            placeholder={field.placeholder}
                            required={field.required}
                            className="w-full rounded-xl border border-white/8 bg-white/[0.03] px-4 py-3 text-sm text-white/90 placeholder-white/18 transition focus:border-white/25 focus:bg-white/[0.05] focus:outline-none"
                        />
                    </div>
                ))}
            </div>

            {/* MESSAGE */}
            <div className="mt-4">
                <label className="mb-1.5 block font-mono text-[10px] tracking-[0.2em] text-white/30">
                    MESSAGE *
                </label>
                <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={5}
                    placeholder="What's on your mind?"
                    required
                    className="w-full rounded-xl border border-white/8 bg-white/[0.03] px-4 py-3 text-sm text-white/90 placeholder-white/18 transition focus:border-white/25 focus:bg-white/[0.05] focus:outline-none resize-none"
                />
            </div>

            {/* SUBMIT */}
            <motion.button
                whileHover={{ scale: 1.01 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                disabled={status === "loading"}
                className="btn-primary mt-5 flex w-full items-center justify-center gap-2 rounded-xl py-3.5 text-sm disabled:opacity-50 disabled:cursor-not-allowed"
            >
                {status === "loading" ? (
                    <>
                        <Loader2 size={15} className="animate-spin" /> Sending...
                    </>
                ) : (
                    <>
                        Send Message <Send size={14} />
                    </>
                )}
            </motion.button>
        </motion.form>
    );
}
