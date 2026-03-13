"use client";
import { motion } from "framer-motion";

export default function About({ id }: { id: string }) {
  return (
    <section id={id} className="w-full">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="flex flex-col gap-6"
      >
        <h2 className="pixel-font text-2xl font-bold tracking-tight text-white/90">
          / ABOUT
        </h2>
        
        <div className="glass-card p-8 md:p-10 rounded-xl leading-relaxed text-lg text-white/70">
          <p>
            I am an Electronics and Communication Engineering student passionate about robotics, 
            embedded systems, and modern web development. I enjoy building systems that solve 
            real-world problems while continuously improving my technical skills.
          </p>
        </div>
      </motion.div>
    </section>
  );
}
