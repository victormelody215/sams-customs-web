import { useState, useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";
import heroPcImage from "../assets/images/hero-pc.png";
import chassisImage from "../assets/images/chassis-texture.png";
import studioDeskImage from "../assets/images/studio-desk.png";
import avantGardeImage from "../assets/images/avant-garde-case.png";

function BracketButton({
  children,
  variant = "solid",
  className = "",
  onClick,
  "data-testid": testId,
}: {
  children: React.ReactNode;
  variant?: "solid" | "outline";
  className?: string;
  onClick?: () => void;
  "data-testid"?: string;
}) {
  return (
    <button
      onClick={onClick}
      data-testid={testId}
      className={`group relative inline-flex items-center gap-1 px-6 py-3 text-xs tracking-[0.2em] uppercase font-medium transition-all duration-300 cursor-pointer ${
        variant === "solid"
          ? "bg-[#1C1C1E] text-white hover:bg-[#2C2C2E]"
          : "border border-[#1C1C1E] text-[#1C1C1E] hover:bg-[#1C1C1E] hover:text-white"
      } ${className}`}
    >
      <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 font-mono text-[10px]">[</span>
      <span>{children}</span>
      <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 font-mono text-[10px]">]</span>
    </button>
  );
}

function FadeUp({
  children,
  delay = 0,
  className = "",
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 32 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 32 }}
      transition={{ duration: 0.7, delay, ease: [0.25, 0.1, 0.25, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export default function LandingPage() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-white font-sans text-[#1C1C1E] overflow-x-hidden">

      {/* NAVIGATION */}
      <header
        data-testid="header-nav"
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-white/80 backdrop-blur-xl border-b border-[#E0E0E0]"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-[1400px] mx-auto px-8 h-16 flex items-center justify-between">
          <span
            className="text-[11px] tracking-[0.35em] uppercase font-semibold text-[#1C1C1E] cursor-pointer select-none"
            data-testid="brand-name"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          >
            SAMS CUSTOMS
          </span>

          <nav className="hidden md:flex items-center gap-10" data-testid="nav-links">
            {[
              { label: "Bespoke Rigs", id: "bespoke-rigs" },
              { label: "Design Studio", id: "design-studio" },
              { label: "Process", id: "process" },
              { label: "Inquire", id: "inquire" },
            ].map((item) => (
              <button
                key={item.id}
                data-testid={`nav-link-${item.id}`}
                onClick={() => scrollTo(item.id)}
                className="text-[11px] tracking-[0.18em] uppercase text-[#555] hover:text-[#1C1C1E] transition-colors duration-200 cursor-pointer"
              >
                {item.label}
              </button>
            ))}
          </nav>

          <button
            className="md:hidden text-[#1C1C1E] p-2"
            data-testid="button-menu-toggle"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <div className="w-5 flex flex-col gap-1">
              <span className={`block h-px bg-current transition-all ${menuOpen ? "rotate-45 translate-y-1.5" : ""}`} />
              <span className={`block h-px bg-current transition-all ${menuOpen ? "opacity-0" : ""}`} />
              <span className={`block h-px bg-current transition-all ${menuOpen ? "-rotate-45 -translate-y-1.5" : ""}`} />
            </div>
          </button>
        </div>

        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            className="md:hidden bg-white border-b border-[#E0E0E0] px-8 py-6 flex flex-col gap-5"
          >
            {[
              { label: "Bespoke Rigs", id: "bespoke-rigs" },
              { label: "Design Studio", id: "design-studio" },
              { label: "Process", id: "process" },
              { label: "Inquire", id: "inquire" },
            ].map((item) => (
              <button
                key={item.id}
                onClick={() => scrollTo(item.id)}
                className="text-[11px] tracking-[0.18em] uppercase text-[#555] text-left"
              >
                {item.label}
              </button>
            ))}
          </motion.div>
        )}
      </header>

      {/* HERO SECTION */}
      <section
        id="bespoke-rigs"
        data-testid="section-hero"
        className="min-h-screen bg-white flex flex-col justify-center pt-16"
      >
        <div className="max-w-[1400px] mx-auto px-8 w-full">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: [0.25, 0.1, 0.25, 1] }}
            className="mb-16 pt-16"
          >
            <p className="text-[10px] tracking-[0.4em] uppercase text-[#999] mb-6 font-mono">
              Est. — Custom Performance Studio
            </p>
            <h1 className="text-[clamp(2.5rem,7vw,6rem)] font-semibold leading-[1.0] tracking-[-0.02em] text-[#1C1C1E] max-w-5xl">
              BESPOKE PERFORMANCE.
              <br />
              <span className="text-[#888]">TAILORED DIGITALLY.</span>
            </h1>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 pb-20 items-start" id="design-studio">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.9, delay: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
              className="relative aspect-[4/3] bg-[#F5F5F7] overflow-hidden"
              data-testid="hero-render"
            >
              <img
                src={heroPcImage}
                alt="Sams Customs bespoke PC build"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent" />
              <div className="absolute bottom-6 left-6">
                <span className="text-[9px] tracking-[0.3em] uppercase text-white/80 font-mono">
                  Model SC-01 · 2025 Series
                </span>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.9, delay: 0.35, ease: [0.25, 0.1, 0.25, 1] }}
              className="relative"
            >
              <div className="bg-white/60 backdrop-blur-2xl border border-[#E8E8E8] rounded-2xl p-8 shadow-[0_8px_40px_rgba(0,0,0,0.06)]">
                <div className="inline-flex items-center gap-2 bg-[#F5F5F7] border border-[#E0E0E0] rounded-full px-3 py-1 mb-8">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#34C759] animate-pulse" />
                  <span className="text-[9px] tracking-[0.3em] uppercase font-mono text-[#666]">Design Stage</span>
                </div>

                <h2 className="text-[11px] tracking-[0.25em] uppercase text-[#999] mb-6 font-mono">
                  System Configuration
                </h2>

                <div className="space-y-0 divide-y divide-[#F0F0F0]" data-testid="specs-list">
                  {[
                    { label: "GPU", value: "RTX 5090 Ti · 96 GB VRAM" },
                    { label: "CPU", value: "Intel Core Ultra 9 · 36 Cores" },
                    { label: "RAM", value: "256 GB DDR5 @ 7200 MT/s" },
                    { label: "Storage", value: "8 TB PCIe Gen 5 NVMe" },
                    { label: "PSU", value: "5000W 80+ Titanium" },
                  ].map((spec) => (
                    <div key={spec.label} className="flex items-center justify-between py-4">
                      <span className="text-[10px] tracking-[0.2em] uppercase font-mono text-[#999]">
                        {spec.label}
                      </span>
                      <span className="text-[12px] font-medium text-[#1C1C1E] text-right ml-4">
                        {spec.value}
                      </span>
                    </div>
                  ))}
                </div>

                <div className="mt-8 flex flex-col sm:flex-row gap-3">
                  <BracketButton variant="solid" data-testid="button-request-build" onClick={() => scrollTo("inquire")}>
                    Request a Build
                  </BracketButton>
                  <BracketButton variant="outline" data-testid="button-view-portfolio" onClick={() => scrollTo("bespoke-rigs")}>
                    View Portfolio
                  </BracketButton>
                </div>

                <p className="mt-6 text-[10px] text-[#BBB] leading-relaxed">
                  All configurations are bespoke. Lead time 6–10 weeks.
                  <br />
                  Free worldwide white-glove delivery included.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* THIN RULE */}
      <div className="w-full h-px bg-[#E8E8E8]" />

      {/* SPLIT CATEGORY BANNER */}
      <section
        id="process"
        data-testid="section-category-banner"
        className="relative"
        style={{ height: "70vh", minHeight: 480 }}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 h-full">
          {/* LEFT — CLIENT WORKSTATIONS */}
          <FadeUp className="relative overflow-hidden group cursor-pointer bg-[#F5F5F7]">
            <img
              src={chassisImage}
              alt="Client workstation chassis"
              className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:opacity-70 group-hover:scale-[1.02] transition-all duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#1C1C1E]/70 via-[#1C1C1E]/20 to-transparent" />
            <div className="relative h-full flex flex-col justify-end p-10" data-testid="card-client-workstations">
              <p className="text-[9px] tracking-[0.35em] uppercase text-white/60 font-mono mb-3">
                Category 01
              </p>
              <h2 className="text-[clamp(1.5rem,3.5vw,2.75rem)] font-semibold text-white leading-[1.1] tracking-[-0.01em] mb-6">
                CLIENT<br />WORKSTATIONS
              </h2>
              <BracketButton
                variant="outline"
                data-testid="button-view-client-portfolio"
                className="!border-white/40 !text-white hover:!bg-white hover:!text-[#1C1C1E] self-start"
              >
                View Client Portfolio
              </BracketButton>
            </div>
            <div className="absolute right-0 top-0 bottom-0 w-px bg-white/20 hidden md:block" />
          </FadeUp>

          {/* RIGHT — CREATOR LABS */}
          <FadeUp delay={0.1} className="relative overflow-hidden group cursor-pointer bg-white">
            <img
              src={studioDeskImage}
              alt="Creator lab studio desk"
              className="absolute inset-0 w-full h-full object-cover opacity-80 group-hover:opacity-90 group-hover:scale-[1.02] transition-all duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#1C1C1E]/60 via-transparent to-transparent" />
            <div className="relative h-full flex flex-col justify-end p-10" data-testid="card-creator-labs">
              <p className="text-[9px] tracking-[0.35em] uppercase text-white/60 font-mono mb-3">
                Category 02
              </p>
              <h2 className="text-[clamp(1.5rem,3.5vw,2.75rem)] font-semibold text-white leading-[1.1] tracking-[-0.01em] mb-6">
                CREATOR<br />LABS
              </h2>
              <BracketButton
                variant="outline"
                data-testid="button-explore-creative-rigs"
                className="!border-white/40 !text-white hover:!bg-white hover:!text-[#1C1C1E] self-start"
              >
                Explore Creative Rigs
              </BracketButton>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* THIN RULE */}
      <div className="w-full h-px bg-[#E8E8E8]" />

      {/* BENTO GRID */}
      <section
        id="bento-grid"
        data-testid="section-bento"
        className="bg-[#F5F5F7] py-3 px-3"
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 max-w-[1400px] mx-auto">

          {/* CARD 1 — Double width, dark */}
          <FadeUp className="md:col-span-2 md:row-span-2 relative overflow-hidden bg-[#1C1C1E] min-h-[520px] group cursor-pointer" delay={0}>
            <img
              src={avantGardeImage}
              alt="Avant-garde case architecture"
              className="absolute inset-0 w-full h-full object-cover opacity-40 group-hover:opacity-55 group-hover:scale-[1.03] transition-all duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-br from-[#1C1C1E]/40 to-[#1C1C1E]/80" />
            <div className="relative h-full flex flex-col justify-end p-10" data-testid="card-unmatched-power">
              <p className="text-[9px] tracking-[0.35em] uppercase text-white/40 font-mono mb-4">
                Signature Collection
              </p>
              <h2 className="text-[clamp(1.6rem,3vw,2.5rem)] font-semibold text-white leading-[1.1] tracking-[-0.02em] max-w-md">
                UNMATCHED POWER.
                <br />
                UNFORGETTABLE STYLE.
              </h2>
              <p className="mt-4 text-[13px] text-white/50 max-w-sm leading-relaxed">
                Each build is a collaboration between the engineer's vision and your performance demands. No compromises. No limits.
              </p>
            </div>
          </FadeUp>

          {/* CARD 2 — Top right, light */}
          <FadeUp delay={0.1} className="bg-white border border-[#E8E8E8] p-8 min-h-[252px] flex flex-col justify-between" >
            <div data-testid="card-custom-parts">
              <p className="text-[9px] tracking-[0.3em] uppercase text-[#999] font-mono mb-4">
                Components
              </p>
              <h3 className="text-[1.1rem] font-semibold text-[#1C1C1E] leading-[1.2] tracking-[-0.01em]">
                CUSTOM LAB PARTS<br />& PERIPHERALS
              </h3>
              <p className="mt-3 text-[12px] text-[#999] leading-relaxed">
                Sourced globally. Binned for perfection. Every component tested before it touches your build.
              </p>
            </div>
            <div className="flex items-center gap-2 mt-6">
              <div className="w-6 h-px bg-[#1C1C1E]" />
              <span className="text-[10px] tracking-[0.2em] uppercase text-[#999] font-mono">Explore Parts</span>
            </div>
          </FadeUp>

          {/* CARD 3 — Bottom right, charcoal */}
          <FadeUp delay={0.15} className="bg-[#1C1C1E] p-8 min-h-[252px] flex flex-col justify-between">
            <div data-testid="card-architect-rig">
              <p className="text-[9px] tracking-[0.3em] uppercase text-white/40 font-mono mb-4">
                Design Consultation
              </p>
              <h3 className="text-[1.1rem] font-semibold text-white leading-[1.2] tracking-[-0.01em]">
                ARCHITECT<br />YOUR RIG
              </h3>
              <p className="mt-3 text-[12px] text-white/50 leading-relaxed">
                Start with a consultation. We map your workflow, use case, and aesthetic — then engineer around it.
              </p>
            </div>
            <BracketButton
              variant="outline"
              data-testid="button-architect-rig"
              onClick={() => scrollTo("inquire")}
              className="!border-white/30 !text-white hover:!bg-white hover:!text-[#1C1C1E] self-start mt-6"
            >
              Begin Design Process
            </BracketButton>
          </FadeUp>
        </div>
      </section>

      {/* THIN RULE */}
      <div className="w-full h-px bg-[#E8E8E8]" />

      {/* INQUIRE SECTION */}
      <section id="inquire" data-testid="section-inquire" className="bg-white py-32 px-8">
        <div className="max-w-[1400px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
            <FadeUp>
              <p className="text-[9px] tracking-[0.4em] uppercase text-[#999] font-mono mb-6">
                Start Here
              </p>
              <h2 className="text-[clamp(2rem,5vw,4rem)] font-semibold leading-[1.05] tracking-[-0.02em] text-[#1C1C1E]">
                READY TO BUILD?
              </h2>
              <p className="mt-6 text-[14px] text-[#888] leading-relaxed max-w-sm">
                Every Sams Customs build begins with a conversation. Tell us about your vision, workflow, and performance requirements.
              </p>
              <div className="mt-12 space-y-4 text-[11px] text-[#999] font-mono tracking-wider">
                <div className="flex items-center gap-3">
                  <span className="text-[#CCC]">01 —</span>
                  <span>Initial consultation</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-[#CCC]">02 —</span>
                  <span>Bespoke configuration design</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-[#CCC]">03 —</span>
                  <span>Hand-built & tested</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-[#CCC]">04 —</span>
                  <span>White-glove worldwide delivery</span>
                </div>
              </div>
            </FadeUp>

            <FadeUp delay={0.15}>
              <form
                data-testid="form-inquire"
                className="space-y-5"
                onSubmit={(e) => e.preventDefault()}
              >
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[9px] tracking-[0.25em] uppercase font-mono text-[#999] mb-2">
                      First Name
                    </label>
                    <input
                      type="text"
                      data-testid="input-first-name"
                      className="w-full border border-[#E0E0E0] bg-white px-4 py-3 text-[13px] text-[#1C1C1E] outline-none focus:border-[#1C1C1E] transition-colors placeholder:text-[#CCC]"
                      placeholder="Alex"
                    />
                  </div>
                  <div>
                    <label className="block text-[9px] tracking-[0.25em] uppercase font-mono text-[#999] mb-2">
                      Last Name
                    </label>
                    <input
                      type="text"
                      data-testid="input-last-name"
                      className="w-full border border-[#E0E0E0] bg-white px-4 py-3 text-[13px] text-[#1C1C1E] outline-none focus:border-[#1C1C1E] transition-colors placeholder:text-[#CCC]"
                      placeholder="Jordan"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-[9px] tracking-[0.25em] uppercase font-mono text-[#999] mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    data-testid="input-email"
                    className="w-full border border-[#E0E0E0] bg-white px-4 py-3 text-[13px] text-[#1C1C1E] outline-none focus:border-[#1C1C1E] transition-colors placeholder:text-[#CCC]"
                    placeholder="alex@studio.com"
                  />
                </div>
                <div>
                  <label className="block text-[9px] tracking-[0.25em] uppercase font-mono text-[#999] mb-2">
                    Build Category
                  </label>
                  <select
                    data-testid="select-build-category"
                    className="w-full border border-[#E0E0E0] bg-white px-4 py-3 text-[13px] text-[#1C1C1E] outline-none focus:border-[#1C1C1E] transition-colors appearance-none cursor-pointer"
                  >
                    <option value="">Select a category</option>
                    <option value="workstation">Client Workstation</option>
                    <option value="creator">Creator Lab</option>
                    <option value="signature">Signature Collection</option>
                    <option value="other">Other Inquiry</option>
                  </select>
                </div>
                <div>
                  <label className="block text-[9px] tracking-[0.25em] uppercase font-mono text-[#999] mb-2">
                    Tell Us About Your Vision
                  </label>
                  <textarea
                    rows={4}
                    data-testid="textarea-vision"
                    className="w-full border border-[#E0E0E0] bg-white px-4 py-3 text-[13px] text-[#1C1C1E] outline-none focus:border-[#1C1C1E] transition-colors resize-none placeholder:text-[#CCC]"
                    placeholder="Describe your workflow, performance needs, or aesthetic vision..."
                  />
                </div>
                <BracketButton
                  variant="solid"
                  data-testid="button-submit-inquiry"
                  className="w-full justify-center"
                >
                  Submit Inquiry
                </BracketButton>
              </form>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer data-testid="footer" className="border-t border-[#E8E8E8] bg-white px-8 py-10">
        <div className="max-w-[1400px] mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex flex-col md:flex-row items-center gap-6">
            <span className="text-[10px] tracking-[0.35em] uppercase font-semibold text-[#1C1C1E]">
              SAMS CUSTOMS
            </span>
            <span className="text-[#E0E0E0] hidden md:block">·</span>
            <span className="text-[10px] tracking-[0.2em] text-[#BBB] font-mono">
              Bespoke Performance Studio
            </span>
          </div>
          <div className="flex items-center gap-8">
            {["Bespoke Rigs", "Design Studio", "Process", "Inquire"].map((item) => (
              <button
                key={item}
                onClick={() => scrollTo(item.toLowerCase().replace(/ /g, "-"))}
                className="text-[10px] tracking-[0.15em] uppercase text-[#BBB] hover:text-[#1C1C1E] transition-colors"
              >
                {item}
              </button>
            ))}
          </div>
          <span className="text-[10px] font-mono text-[#CCC]">
            &copy; {new Date().getFullYear()} Sams Customs. All rights reserved.
          </span>
        </div>
      </footer>
    </div>
  );
}
