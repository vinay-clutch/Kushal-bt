"use client";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, Github, Eye, Box, ElectronicsChip } from "iconoir-react";

const projects = [
  {
    title: "Edge Avoiding Robot",
    description: "8051 microcontroller robot capable of detecting edges and avoiding obstacles with ultrasonic precision.",
    tech: ["8051", "C", "Sensors"],
    links: { github: "#", view: "#" },
    icon: Eye,
    accent: "#ffffff"
  },
  {
    title: "Real-Time Slot Booking",
    description: "High-performance full stack booking engine with real-time state synchronization and REST optimization.",
    tech: ["React", "Node.js", "SQL"],
    links: { github: "#", view: "#" },
    icon: Box,
    accent: "#ffffff"
  },
  {
    title: "Military Spying Robot",
    description: "Advanced Arduino & ESP32 surveillance system with live telemetry and metal detection arrays.",
    tech: ["ESP32", "IoT", "Robotics"],
    links: { github: "#", view: "#" },
    icon: ElectronicsChip,
    accent: "#ffffff"
  }
];

export default function Projects({ id }: { id: string }) {
  return (
    <section id={id} className="w-full bg-black">
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="flex flex-col gap-12"
      >
        <div className="flex flex-col gap-2">
            <h2 className="pixel-font text-2xl font-bold text-white tracking-tight">
                / PROJECTS
            </h2>
            <div className="h-1 w-12 bg-white/10 rounded-full" />
        </div>

        <div className="grid grid-cols-1 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="glass-card group relative p-8 rounded-3xl border border-white/5 bg-black"
            >
              <div className="relative z-10 flex flex-col md:flex-row gap-8 items-start">
                <div 
                  className="w-16 h-16 shrink-0 flex items-center justify-center rounded-2xl bg-white/5 border border-white/10 transition-all duration-300 group-hover:bg-white/10"
                >
                  {project.icon ? (
                    <project.icon className="w-8 h-8 text-white/40 group-hover:text-white transition-colors" strokeWidth={1.5} />
                  ) : (
                    <Box className="w-8 h-8 text-white/40 group-hover:text-white transition-colors" strokeWidth={1.5} />
                  )}
                </div>

                <div className="flex flex-col gap-5 flex-grow">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                    <h2 className="pixel-font text-xl font-bold text-white tracking-tight">
                      / {project.title}
                    </h2>
                    <div className="flex gap-3">
                      <a 
                        href={project.links.github} 
                        className="p-3 rounded-full bg-white/5 border border-white/5 hover:border-white/20 transition-all"
                        aria-label="GitHub"
                      >
                        <Github className="w-5 h-5 opacity-60 group-hover:opacity-100 text-white" />
                      </a>
                      <a 
                        href={project.links.view}
                        className="px-6 py-2.5 rounded-full bg-white text-black font-bold text-sm flex items-center gap-2 hover:bg-white/90 transition-all"
                      >
                        Live Demo <ArrowUpRight className="w-4 h-4" />
                      </a>
                    </div>
                  </div>
                  
                  <p className="text-white/50 leading-relaxed text-lg max-w-2xl">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2.5 mt-2">
                    {project.tech.map(t => (
                        <span key={t} className="px-4 py-1.5 text-[10px] font-bold uppercase tracking-widest bg-white/5 border border-white/10 rounded-full text-white/40">
                            {t}
                        </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
