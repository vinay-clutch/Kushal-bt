"use client";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Download } from "iconoir-react";

export default function Hero({ id }: { id: string }) {
  return (
    <section 
      id={id} 
      className="flex flex-col items-start justify-center pt-40 pb-20 relative bg-black"
    >
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="w-full flex flex-col gap-8"
      >
        <div className="flex items-center gap-4">
            <div className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
            <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-white/30">Available for Work</span>
        </div>

        <div className="flex flex-col gap-4">
          <h1 className="pixel-font text-5xl md:text-7xl font-bold tracking-tighter text-white leading-none">
            Kushal B T<span className="text-white/10">_</span>
          </h1>
          <h2 className="text-2xl md:text-3xl font-medium text-white/40 max-w-xl">
            Electronics Engineer <span className="text-white/10">&</span> Full Stack Developer
          </h2>
        </div>
        
        <p className="text-white/60 text-xl leading-relaxed max-w-xl">
          Crafting high-performance <span className="text-white">embedded systems</span> and modern 
          web experiences with a focus on precision and design.
        </p>

        <div className="flex flex-wrap items-center gap-8 mt-4">
          <div className="flex gap-4">
            <a
                href="https://github.com/kushalbt05"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 flex items-center justify-center rounded-xl bg-white/5 border border-white/5 hover:bg-white/10 transition-all text-white/40 hover:text-white"
            >
                <Github className="w-6 h-6" />
            </a>
            
            <a
                href="https://www.linkedin.com/in/kushal-bt-4357812a6/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 flex items-center justify-center rounded-xl bg-white/5 border border-white/5 hover:bg-white/10 transition-all text-white/40 hover:text-white"
            >
                <Linkedin className="w-6 h-6" />
            </a>

            <a
                href="mailto:kushalbt05@gmail.com"
                className="w-12 h-12 flex items-center justify-center rounded-xl bg-white/5 border border-white/5 hover:bg-white/10 transition-all text-white/40 hover:text-white"
                title="kushalbt05@gmail.com"
            >
                <Mail className="w-6 h-6" />
            </a>
          </div>

          <a
            href="/resume.pdf"
            download="Kushal_BT_Resume.pdf"
            className="flex items-center gap-2 px-6 py-3 bg-white text-black font-bold text-xs uppercase tracking-widest rounded-xl hover:bg-white/90 transition-all"
          >
            Download Resume <Download className="w-4 h-4" />
          </a>
        </div>
      </motion.div>
    </section>
  );
}
