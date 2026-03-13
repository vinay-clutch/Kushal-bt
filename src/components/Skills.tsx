"use client";
import { motion } from "framer-motion";
import { 
  Code, 
  Settings, 
  Server,
  Cloud,
  ElectronicsChip,
  Database,
  Box,
  Keyframe
} from "iconoir-react";

// Using Keyframe or Code as fallbacks for HTML/CSS icons to ensure stability
const skillCategories = [
  {
    name: "Embedded & IoT",
    skills: [
      { name: "Arduino / ESP32", Icon: ElectronicsChip, color: "#00979D" },
      { name: "8051 Controllers", Icon: Settings, color: "#666666" },
      { name: "Sensors & IoT", Icon: Server, color: "#FF9900" },
    ]
  },
  {
    name: "Web Development",
    skills: [
      { name: "React", Icon: Cloud, color: "#61DAFB" },
      { name: "Node.js", Icon: Server, color: "#339933" },
      { name: "Python", Icon: Code, color: "#3776AB" },
      { name: "JavaScript", Icon: Code, color: "#F7DF1E" },
      { name: "Tailwind CSS", Icon: Settings, color: "#06B6D4" },
      { name: "HTML5", Icon: Code, color: "#E34F26" },
      { name: "CSS3", Icon: Code, color: "#1572B6" },
    ]
  }
];

export default function Skills({ id }: { id: string }) {
  return (
    <section id={id} className="w-full bg-black">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="flex flex-col gap-12"
      >
        <div className="flex flex-col gap-2">
            <h2 className="pixel-font text-2xl font-bold text-white tracking-tight">
                / SKILLS
            </h2>
            <div className="h-1 w-12 bg-white/10 rounded-full" />
        </div>

        <div className="grid grid-cols-1 gap-12">
          {skillCategories.map((category) => (
            <div key={category.name} className="flex flex-col gap-6">
              <h3 className="text-xs font-bold uppercase tracking-[0.3em] text-white/30">
                {category.name}
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                {category.skills.map((skill) => (
                  <motion.div
                    key={skill.name}
                    whileHover={{ scale: 1.02, backgroundColor: "rgba(255,255,255,0.06)" }}
                    className="flex flex-col items-center justify-center gap-3 p-6 rounded-2xl bg-white/[0.03] border border-white/5 transition-all cursor-default text-center group"
                  >
                    <div 
                      className="p-3 rounded-xl bg-black/40 group-hover:bg-black/60 transition-colors"
                      style={{ color: skill.color }}
                    >
                      {skill.Icon ? (
                        <skill.Icon className="w-6 h-6" />
                      ) : (
                        <Code className="w-6 h-6" />
                      )}
                    </div>
                    <span className="text-xs font-semibold text-white/60 group-hover:text-white transition-colors whitespace-nowrap">
                      {skill.name}
                    </span>
                  </motion.div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
