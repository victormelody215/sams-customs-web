import { useRef } from "react";
import { motion, useInView } from "framer-motion";

interface Workstation {
  id: string;
  model: string;
  category: string;
  specs: string;
  tag: string;
}

const workstations: Workstation[] = [
  {
    id: "sc-01",
    model: "SC — 01",
    category: "Creator Studio",
    specs: "RTX 5090 Ti · Core Ultra 9 · 256 GB DDR5",
    tag: "Flagship",
  },
  {
    id: "sc-02",
    model: "SC — 02",
    category: "Client Workstation",
    specs: "RTX 4090 · Core i9-14900K · 128 GB DDR5",
    tag: "Production",
  },
  {
    id: "sc-03",
    model: "SC — 03",
    category: "Render Node",
    specs: "Dual RTX 4080 · Threadripper Pro · 512 GB ECC",
    tag: "Enterprise",
  },
];

export default function WorkstationShowcase() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section
      ref={ref}
      data-testid="section-workstation-showcase"
      className="bg-white border-t border-[#EFEFEF] py-20 px-8"
    >
      <div className="max-w-[1400px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
          className="flex items-end justify-between mb-12"
        >
          <div>
            <p className="text-[9px] tracking-[0.4em] uppercase font-mono text-[#BBBBBB] mb-3">
              Current Series
            </p>
            <h2 className="text-[clamp(1.25rem,2.5vw,2rem)] font-[300] tracking-[-0.01em] text-[#1C1C1E]">
              AVAILABLE CONFIGURATIONS
            </h2>
          </div>
          <span className="hidden md:block text-[9px] font-mono tracking-[0.25em] uppercase text-[#CCCCCC]">
            {workstations.length} Models
          </span>
        </motion.div>

        <div className="divide-y divide-[#F0F0F0]">
          {workstations.map((ws, i) => (
            <motion.div
              key={ws.id}
              initial={{ opacity: 0, y: 16 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 0.55,
                delay: 0.1 + i * 0.1,
                ease: [0.25, 0.1, 0.25, 1],
              }}
              data-testid={`workstation-row-${ws.id}`}
              className="group grid grid-cols-12 items-center py-5 cursor-pointer"
              style={{ transition: "opacity 0.2s ease" }}
            >
              <div className="col-span-1">
                <span className="text-[9px] font-mono tracking-[0.2em] text-[#CCCCCC] group-hover:text-[#999] transition-colors duration-300">
                  {String(i + 1).padStart(2, "0")}
                </span>
              </div>

              <div className="col-span-3">
                <span className="text-[13px] font-[400] tracking-[0.05em] text-[#1C1C1E] group-hover:text-[#444] transition-colors duration-300">
                  {ws.model}
                </span>
              </div>

              <div className="col-span-2 hidden md:block">
                <span className="text-[10px] tracking-[0.15em] uppercase font-mono text-[#AAAAAA]">
                  {ws.category}
                </span>
              </div>

              <div className="col-span-4 hidden lg:block">
                <span className="text-[11px] text-[#BBBBBB] font-[300]">
                  {ws.specs}
                </span>
              </div>

              <div className="col-span-2 flex items-center justify-end gap-4">
                <span className="text-[9px] tracking-[0.2em] uppercase font-mono text-[#CCCCCC] border border-[#EEEEEE] px-2.5 py-1 rounded-full group-hover:border-[#CCCCCC] group-hover:text-[#999] transition-all duration-300">
                  {ws.tag}
                </span>
                <span
                  className="text-[10px] font-mono text-[#CCCCCC] opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  aria-hidden
                >
                  →
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.45 }}
          className="mt-10 pt-8 border-t border-[#F0F0F0] flex items-center justify-between"
        >
          <p className="text-[10px] font-mono tracking-[0.2em] uppercase text-[#CCCCCC]">
            All builds are fully bespoke · configurations shown are starting points
          </p>
          <p className="text-[10px] font-mono tracking-[0.2em] uppercase text-[#CCCCCC] hidden md:block">
            Lead time 6 – 10 weeks
          </p>
        </motion.div>
      </div>
    </section>
  );
}
