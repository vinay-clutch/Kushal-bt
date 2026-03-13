"use client";
import { motion } from "framer-motion";
import { Star, Community, Trophy } from "iconoir-react";

const achievements = [
  { title: "Student Member – NSS", icon: Community },
  { title: "Science Exhibition Participant", icon: Star },
  { title: "State Level Basketball & Netball", icon: Trophy },
];

export default function Achievements({ id }: { id: string }) {
  return (
    <section id={id} className="w-full bg-black">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="flex flex-col gap-8"
      >
        <h2 className="pixel-font text-xl font-bold text-white tracking-tight">
          / ACHIEVEMENTS
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {achievements.map((item) => (
            <div
                key={item.title}
                className="flex items-center gap-4 p-4 rounded-xl bg-white/5 border border-white/5 hover:border-white/10 transition-colors"
            >
                <item.icon className="w-5 h-5 text-white/40" />
                <span className="text-sm font-medium text-white/60">
                    {item.title}
                </span>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
