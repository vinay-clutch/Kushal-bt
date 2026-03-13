"use client";
import { motion } from "framer-motion";

export default function Education({ id }: { id: string }) {
  const education = [
    {
      institution: "SJB Institute of Technology",
      degree: "Bachelor of Engineering",
      subject: "Electronics & Communication Engineering",
      period: "2022 – 2026",
      score: "CGPA 7.95"
    },
    {
      institution: "Mandavya Excellence PU College",
      degree: "Pre-University (PCMC)",
      subject: "",
      period: "2020 – 2022",
      score: "Score: 92%"
    }
  ];

  return (
    <section id={id} className="w-full bg-black">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="flex flex-col gap-10"
      >
        <h2 className="pixel-font text-xl font-bold text-white tracking-tight">
          / EDUCATION
        </h2>

        <div className="flex flex-col gap-10">
          {education.map((item) => (
            <div
              key={item.institution}
              className="flex flex-col gap-2 group"
            >
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-semibold text-white/90">
                  {item.institution}
                </h3>
                <span className="text-sm text-white/30 font-medium">
                  {item.period}
                </span>
              </div>
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                <p className="text-white/50 text-sm">
                  {item.degree} {item.subject && `· ${item.subject}`}
                </p>
                <div className="text-xs font-bold text-white/20 uppercase tracking-widest">
                  {item.score}
                </div>
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
