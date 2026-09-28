import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import SectionHeading from "../UI/SectionHeading";
import { profileData } from "../../data/profile";
import { Mail, Copy, Check, Send, ArrowUpRight } from "lucide-react";
import { Github, Linkedin } from "../UI/SocialIcons";

export default function Contact() {
  const [copied, setCopied] = useState(false);
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [sentMessage, setSentMessage] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [sending, setSending] = useState(false);

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(profileData.socialLinks.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch (error) {
      console.error("Failed to copy email:", error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setSending(true);
    setSentMessage(false);
    setErrorMessage("");

    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    if (!serviceId || !templateId || !publicKey) {
      setErrorMessage(
        "Email service is not configured. Please try again later."
      );
      setSending(false);
      return;
    }

    const templateParams = {
      from_name: formState.name,
      from_email: formState.email,
      message: formState.message,
      to_email: profileData.socialLinks.email,
    };

    try {
      await emailjs.send(
        serviceId,
        templateId,
        templateParams,
        publicKey
      );

      setSentMessage(true);

      setFormState({
        name: "",
        email: "",
        message: "",
      });

      setTimeout(() => setSentMessage(false), 5000);
    } catch (error) {
      console.error("EmailJS Error:", error);

      setErrorMessage(
        "Unable to send the message. Please try again or contact me directly by email."
      );
    } finally {
      setSending(false);
    }
  };

  return (
    <section id="contact" className="py-20 md:py-28 bg-slate-950/40 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="GET IN TOUCH"
          title="Let's Build Something Meaningful"
          subtitle="Open for Software Engineering internships, Full-Stack roles, Web3/Blockchain development, and AI engineering opportunities."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 max-w-5xl mx-auto items-start">

          {/* Contact Details & Links */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-6 rounded-2xl border border-slate-800/80 bg-slate-900/40 backdrop-blur-md space-y-4">
              <h3 className="text-lg font-bold text-white">
                Direct Communication
              </h3>

              <p className="text-xs text-slate-400 leading-relaxed">
                Whether you have an engineering role opening, an interesting
                technical challenge, or an open-source collaboration in mind,
                my inbox is open.
              </p>

              {/* Email Card */}
              <div className="p-4 rounded-xl bg-slate-950/60 border border-slate-800 flex items-center justify-between gap-3">
                <div className="flex items-center gap-3 overflow-hidden">
                  <div className="p-2 rounded-lg bg-cyan-950/60 text-cyan-400 shrink-0">
                    <Mail className="w-4 h-4" />
                  </div>

                  <div className="truncate">
                    <span className="block text-[10px] font-mono text-slate-400 uppercase">
                      Primary Email
                    </span>

                    <span className="text-xs font-mono text-slate-200 truncate block">
                      {profileData.socialLinks.email}
                    </span>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={handleCopyEmail}
                  className="p-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white transition-colors cursor-pointer shrink-0"
                  aria-label="Copy Email to Clipboard"
                  title="Copy to clipboard"
                >
                  {copied ? (
                    <Check className="w-4 h-4 text-emerald-400" />
                  ) : (
                    <Copy className="w-4 h-4" />
                  )}
                </button>
              </div>

              {/* Verified Profiles */}
              <div className="space-y-2 pt-2">
                <a
                  href={profileData.socialLinks.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-3.5 rounded-xl border border-slate-800 hover:border-slate-700 bg-slate-950/40 hover:bg-slate-900/60 transition-all text-xs font-mono text-slate-200 group"
                >
                  <div className="flex items-center gap-2.5">
                    <Linkedin className="w-4 h-4 text-cyan-400" />
                    <span>LinkedIn Profile</span>
                  </div>

                  <ArrowUpRight className="w-4 h-4 text-slate-500 group-hover:text-cyan-400 transition-colors" />
                </a>

                <a
                  href={profileData.socialLinks.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-3.5 rounded-xl border border-slate-800 hover:border-slate-700 bg-slate-950/40 hover:bg-slate-900/60 transition-all text-xs font-mono text-slate-200 group"
                >
                  <div className="flex items-center gap-2.5">
                    <Github className="w-4 h-4 text-purple-400" />
                    <span>GitHub Repositories</span>
                  </div>

                  <ArrowUpRight className="w-4 h-4 text-slate-500 group-hover:text-purple-400 transition-colors" />
                </a>
              </div>
            </div>
          </div>

          {/* Quick Message Form */}
          <div className="lg:col-span-7">
            <form
              onSubmit={handleSubmit}
              className="p-6 sm:p-8 rounded-2xl border border-slate-800/80 bg-slate-900/40 backdrop-blur-md space-y-4"
            >
              <h3 className="text-lg font-bold text-white mb-2">
                Send Direct Note
              </h3>

              {/* Name */}
              <div>
                <label className="block text-xs font-mono text-slate-400 uppercase mb-1.5">
                  Your Name / Organization
                </label>

                <input
                  type="text"
                  required
                  value={formState.name}
                  onChange={(e) =>
                    setFormState({
                      ...formState,
                      name: e.target.value,
                    })
                  }
                  placeholder="e.g. Hiring Manager / Recruiter"
                  className="w-full px-4 py-2.5 bg-slate-950/80 border border-slate-800 rounded-xl text-xs font-mono text-slate-200 placeholder-slate-600 focus:outline-none focus:border-cyan-500/60 transition-colors"
                />
              </div>

              {/* Email */}
              <div>
                <label className="block text-xs font-mono text-slate-400 uppercase mb-1.5">
                  Your Contact Email
                </label>

                <input
                  type="email"
                  required
                  value={formState.email}
                  onChange={(e) =>
                    setFormState({
                      ...formState,
                      email: e.target.value,
                    })
                  }
                  placeholder="name@company.com"
                  className="w-full px-4 py-2.5 bg-slate-950/80 border border-slate-800 rounded-xl text-xs font-mono text-slate-200 placeholder-slate-600 focus:outline-none focus:border-cyan-500/60 transition-colors"
                />
              </div>

              {/* Message */}
              <div>
                <label className="block text-xs font-mono text-slate-400 uppercase mb-1.5">
                  Message / Role Context
                </label>

                <textarea
                  required
                  rows={4}
                  value={formState.message}
                  onChange={(e) =>
                    setFormState({
                      ...formState,
                      message: e.target.value,
                    })
                  }
                  placeholder="Briefly describe the role, team, or problem statement..."
                  className="w-full px-4 py-2.5 bg-slate-950/80 border border-slate-800 rounded-xl text-xs font-mono text-slate-200 placeholder-slate-600 focus:outline-none focus:border-cyan-500/60 transition-colors resize-none"
                />
              </div>

              {/* Submit */}
              <button
                type="submit"
                disabled={sending}
                className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 disabled:opacity-60 disabled:cursor-not-allowed text-white font-mono text-xs font-semibold transition-all shadow-lg shadow-cyan-500/20"
              >
                <Send className="w-4 h-4" />

                <span>
                  {sending
                    ? "Transmitting..."
                    : "Transmit Message via Email"}
                </span>
              </button>

              {/* Success */}
              {sentMessage && (
                <div className="p-3 rounded-lg bg-emerald-950/40 border border-emerald-800/50 text-emerald-300 text-xs font-mono text-center">
                  Message sent successfully!
                </div>
              )}

              {/* Error */}
              {errorMessage && (
                <div className="p-3 rounded-lg bg-red-950/40 border border-red-800/50 text-red-300 text-xs font-mono text-center">
                  {errorMessage}
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}