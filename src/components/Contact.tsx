"use client";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, ArrowUpRight } from "iconoir-react";

export default function Contact({ id }: { id: string }) {
  return (
    <section id={id} className="w-full pb-32 bg-black">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="flex flex-col gap-6"
      >
        <h2 className="pixel-font text-xl font-bold text-white tracking-tight">
          / GET IN TOUCH
        </h2>

        <div className="flex flex-col sm:flex-row gap-8">
            <a 
                href="mailto:kushalbt05@gmail.com" 
                className="group flex flex-col gap-1"
            >
                <span className="text-xs font-bold text-white/20 uppercase tracking-widest">Email</span>
                <span className="text-white/60 group-hover:text-white transition-colors flex items-center gap-2">
                    kushalbt05@gmail.com <ArrowUpRight className="w-3 h-3" />
                </span>
            </a>

            <a 
                href="tel:+917349668392" 
                className="group flex flex-col gap-1"
            >
                <span className="text-xs font-bold text-white/20 uppercase tracking-widest">Phone</span>
                <span className="text-white/60 group-hover:text-white transition-colors flex items-center gap-2">
                    +91 7349668392 <ArrowUpRight className="w-3 h-3" />
                </span>
            </a>

            <div className="flex flex-col gap-1">
                <span className="text-xs font-bold text-white/20 uppercase tracking-widest">Location</span>
                <span className="text-white/60 flex items-center gap-2">
                    Mandya, India <MapPin className="w-3 h-3" />
                </span>
            </div>
        </div>
      </motion.div>
    </section>
  );
}
