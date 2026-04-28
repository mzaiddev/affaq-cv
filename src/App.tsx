/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import {
  Mail,
  Phone,
  MapPin,
  Linkedin,
  ExternalLink,
  Code2,
  Briefcase,
  GraduationCap,
  ChevronRight,
  Database,
  Globe,
  Layout,
  Server,
  Cloud,
} from "lucide-react";
import { PORTFOLIO_DATA as data } from "./constants";

const SectionTitle = ({
  children,
  icon: Icon,
}: {
  children: React.ReactNode;
  icon: any;
}) => (
  <div className="flex flex-col gap-2 mb-10">
    <div className="flex items-center gap-4">
      <span className="h-[1px] w-12 bg-accent opacity-50"></span>
      <span className="label-caps !text-accent opacity-80">{children}</span>
    </div>
    <div className="flex items-center gap-3">
      <Icon size={20} className="text-text-muted" />
      <h2 className="text-4xl font-serif text-text-main tracking-tight italic">
        Exploring {children}
      </h2>
    </div>
  </div>
);

const Card = ({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) => (
  <motion.div
    initial={{ opacity: 0, y: 15 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    className={`bg-bg-card border-subtle p-8 transition-all hover:bg-bg-main ${className}`}
  >
    {children}
  </motion.div>
);

export default function App() {
  return (
    <div className="min-h-screen font-sans bg-bg-main text-text-main overflow-x-hidden">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-bg-main/80 backdrop-blur-xl border-b border-border">
        <div className="max-w-7xl mx-auto px-8 lg:px-12 h-24 flex items-center justify-between">
          <div className="flex flex-col group cursor-pointer">
            <span className="text-2xl font-serif tracking-tighter leading-none text-accent group-hover:italic transition-all">
              AFAQ.
            </span>
            <span className="label-caps mt-1 text-text-muted">
              Full Stack Dev
            </span>
          </div>

          <div className="hidden md:flex items-center gap-10 text-[11px] uppercase tracking-widest text-text-muted">
            <a href="#about" className="hover:text-accent transition-colors">
              Biography
            </a>
            <a
              href="#experience"
              className="hover:text-accent transition-colors"
            >
              Curation
            </a>
            <a href="#projects" className="hover:text-accent transition-colors">
              Selected Work
            </a>
            <a
              href={`mailto:${data.personal.email}`}
              className="text-accent underline underline-offset-8 decoration-accent/30 hover:decoration-accent transition-all"
            >
              Consult Me
            </a>
            <span className="text-accent px-3 py-1 border border-accent/20 rounded-full font-serif italic normal-case tracking-normal">
              Portfolio 2024
            </span>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-48 pb-32 px-8 lg:px-12 border-b border-border">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-12 gap-0">
          <div className="lg:col-span-8 flex flex-col justify-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="flex items-center gap-4 mb-8">
                <span className="h-[1px] w-12 bg-accent"></span>
                <span className="label-caps text-text-muted">
                  Currently based in {data.personal.location}
                </span>
              </div>
              <h1 className="text-[64px] lg:text-[110px] font-serif leading-[0.85] mb-12 tracking-tighter">
                Crafting Digital <br />
                <span className="italic text-accent">Masterpieces.</span>
              </h1>
              <p className="max-w-lg text-lg text-text-muted leading-relaxed font-light mb-12">
                A {data.personal.role} focused on architecting immersive digital
                ecosystems, specialized in high-frequency CRM and enterprise
                systems with{" "}
                <span className="text-text-main font-medium italic underline decoration-accent/30 tracking-tight">
                  uncompromising elegance.
                </span>
              </p>

              <div className="flex flex-wrap gap-8">
                <button className="px-10 py-5 rounded-full border border-border text-[12px] uppercase tracking-widest hover:bg-text-main hover:text-black transition-all duration-500">
                  Observe Portfolio
                </button>
                <button className="px-10 py-5 rounded-full bg-accent text-black font-bold text-[12px] uppercase tracking-widest hover:opacity-90 transition-opacity">
                  Inquire Now
                </button>
              </div>
            </motion.div>
          </div>

          <div className="lg:col-span-4 relative flex flex-col items-center justify-center pt-20 lg:pt-0">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1 }}
              className="relative w-80 h-[480px]"
            >
              <div className="absolute inset-0 bg-bg-card rounded-t-[160px] border-subtle overflow-hidden relative group">
                <img
                  src="/IMG_20241031_092437_732.jpg.jpeg"
                  alt={data.personal.name}
                  className="w-full h-full object-cover mix-blend-luminosity hover:mix-blend-normal transition-all duration-700 scale-110 group-hover:scale-100"
                />
                <div className="absolute inset-0 bg-linear-to-b from-transparent via-transparent to-bg-main/60" />
                <div className="absolute bottom-8 left-0 right-0 text-center">
                  <span className="label-caps !opacity-40">
                    {data.personal.name} ©
                  </span>
                </div>
              </div>

              {/* Badges - Sophisticated Style */}
              <div className="absolute -right-12 top-16 glass-theme-border bg-bg-main p-5 border-subtle border-accent/30">
                <div className="text-3xl font-serif leading-none italic">
                  2+
                </div>
                <div className="label-caps !text-[7px] mt-1 text-text-muted">
                  Years Tenure
                </div>
              </div>
              <div className="absolute -left-16 bottom-20 bg-accent text-black px-6 py-4 rounded-full font-bold text-[9px] uppercase tracking-[0.2em] shadow-xl">
                Open for Collaboration
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats/Summary Bar */}
      <section className="grid grid-cols-2 lg:grid-cols-4 border-b border-border">
        {[
          { label: "Phone", val: data.personal.phone },
          { label: "Email", val: data.personal.email },
          { label: "Experience", val: "2+ Years" },
          { label: "Projects", val: "15+ Completed" },
        ].map((stat, i) => (
          <div
            key={i}
            className="p-10 border-r border-border last:border-r-0 flex flex-col gap-2 hover:bg-bg-card transition-colors group"
          >
            <span className="label-caps !text-text-muted group-hover:text-accent transition-colors">
              {stat.label}
            </span>
            <span className="text-md font-serif italic text-text-main truncate">
              {stat.val}
            </span>
          </div>
        ))}
      </section>

      {/* About Section */}
      <section
        id="about"
        className="py-32 px-8 lg:px-12 border-b border-border"
      >
        <div className="max-w-7xl mx-auto grid lg:grid-cols-12 gap-20">
          <div className="lg:col-span-12">
            <SectionTitle icon={Briefcase}>Professional Biography</SectionTitle>
          </div>
          <div className="lg:col-span-5">
            <h3 className="text-5xl font-serif leading-tight mb-8">
              A commitment to <br />
              <span className="italic">Excellence</span> & <br />
              <span className="text-accent underline decoration-accent/20">
                Scalability.
              </span>
            </h3>
            <p className="text-text-muted text-lg font-light leading-relaxed">
              Based in the digital frontier, I specialize in translating complex
              business requirements into elegant, high-performance web
              solutions.
            </p>
          </div>
          <div className="lg:col-span-7 flex flex-col justify-end">
            <p className="text-2xl font-light leading-relaxed text-text-main italic border-l-2 border-accent/20 pl-8 mb-12">
              "{data.personal.summary}"
            </p>
            <div className="grid sm:grid-cols-2 gap-8">
              {[
                "CRM Architect",
                "Scalable Systems",
                "Interface Mastery",
                "Performance Tuning",
              ].map((tag) => (
                <div key={tag} className="flex items-center gap-4 group">
                  <span className="w-12 h-[1px] bg-border group-hover:w-16 group-hover:bg-accent transition-all duration-500" />
                  <span className="label-caps text-text-muted group-hover:text-text-main">
                    {tag}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section
        id="skills"
        className="py-32 px-8 lg:px-12 bg-[#0F0F0F] border-b border-border"
      >
        <div className="max-w-7xl mx-auto">
          <SectionTitle icon={Code2}>Technical Curations</SectionTitle>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-0 border border-border">
            {data.skills.map((skillGroup, idx) => (
              <div
                key={idx}
                className="p-12 border border-border bg-bg-main/20 hover:bg-bg-main transition-all group"
              >
                <div className="flex items-center justify-between mb-8">
                  <h3 className="font-serif italic text-2xl text-text-main">
                    {skillGroup.category}
                  </h3>
                  <div className="p-3 border-subtle rounded-full text-text-muted group-hover:text-accent group-hover:border-accent transition-all">
                    {skillGroup.category === "Frontend" && <Layout size={18} />}
                    {skillGroup.category === "Backend" && <Server size={18} />}
                    {skillGroup.category === "Databases" && (
                      <Database size={18} />
                    )}
                    {skillGroup.category === "Cloud & DevOps" && (
                      <Cloud size={18} />
                    )}
                    {skillGroup.category === "Mobile & Other" && (
                      <Globe size={18} />
                    )}
                  </div>
                </div>
                <div className="flex flex-wrap gap-4">
                  {skillGroup.items.map((skill) => (
                    <span
                      key={skill}
                      className="text-[12px] text-text-muted font-light tracking-wide border-b border-border hover:border-accent hover:text-text-main transition-all py-1 cursor-default"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section
        id="experience"
        className="py-32 px-8 lg:px-12 border-b border-border"
      >
        <div className="max-w-7xl mx-auto px-4 lg:px-0">
          <SectionTitle icon={Briefcase}>Career Trajectory</SectionTitle>
          <div className="space-y-0 border-l border-border ml-4">
            {data.experience.map((exp, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="relative pl-16 pb-24 last:pb-0"
              >
                <div className="absolute left-[-1px] top-6 w-[2px] h-[calc(100%-24px)] bg-border" />
                <div className="absolute left-[-8px] top-4 w-4 h-4 rounded-full bg-accent border-[3px] border-bg-main shadow-[0_0_15px_rgba(212,175,55,0.4)]" />

                <div className="grid lg:grid-cols-12 gap-10">
                  <div className="lg:col-span-4">
                    <span className="label-caps !text-accent mb-2 block">
                      {exp.period}
                    </span>
                    <h3 className="text-3xl font-serif italic text-text-main mb-2 tracking-tight">
                      {exp.role}
                    </h3>
                    <div className="text-text-muted text-sm font-light tracking-widest uppercase">
                      @ {exp.company}
                    </div>
                  </div>
                  <div className="lg:col-span-8">
                    <ul className="space-y-4">
                      {exp.achievements.map((item, i) => (
                        <li
                          key={i}
                          className="flex gap-4 text-text-muted font-light leading-relaxed text-md"
                        >
                          <span className="text-accent mt-[6px] shrink-0">
                            •
                          </span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-32 px-8 lg:px-12 bg-[#050505]">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-10 mb-20">
            <div className="max-w-2xl">
              <SectionTitle icon={Layout}>Selected Artifacts</SectionTitle>
              <p className="text-text-muted text-lg font-light leading-relaxed">
                A selection of architectural achievements in enterprise
                platforms and specialized systems.
              </p>
            </div>
            <a
              href="#"
              className="label-caps !text-accent border-b border-accent/30 pb-2 hover:border-accent transition-all group"
            >
              Exploration{" "}
              <span className="inline-block group-hover:translate-x-1 transition-transform">
                →
              </span>
            </a>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-0 border border-border">
            {data.projects.map((project, idx) => (
              <div
                key={idx}
                className="group flex flex-col border border-border bg-bg-main/50 hover:bg-bg-main transition-all duration-500 overflow-hidden min-h-[400px]"
              >
                <div className="p-10 flex flex-col h-full">
                  <div className="flex justify-between items-start mb-10">
                    <span className="label-caps tracking-[0.4em] opacity-30 group-hover:opacity-100 group-hover:text-accent transition-all italic text-[8px]">
                      0{idx + 1} / WORK
                    </span>
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-text-muted hover:text-accent transition-colors translate-x-4 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 duration-500"
                    >
                      <ExternalLink size={18} />
                    </a>
                  </div>

                  <h3 className="text-2xl font-serif italic text-text-main mb-6 group-hover:translate-x-2 transition-transform duration-500 leading-tight">
                    {project.title}
                  </h3>

                  <p className="text-text-muted text-sm font-light leading-loose mb-10 flex-grow opacity-60 group-hover:opacity-100 transition-opacity">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-x-4 gap-y-2 mt-auto pt-6 border-t border-border/30">
                    {project.tech.map((t) => (
                      <span
                        key={t}
                        className="label-caps !text-[7px] text-text-muted group-hover:text-accent transition-colors"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Education & Languages - High Impact Styling */}
      <section className="py-32 px-8 lg:px-12 border-t border-border">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-12 gap-20">
          <div className="lg:col-span-8 p-12 border-subtle bg-bg-card relative overflow-hidden group">
            <div className="absolute top-0 right-0 p-10 opacity-5 group-hover:opacity-10 transition-opacity">
              <GraduationCap size={120} />
            </div>
            <SectionTitle icon={GraduationCap}>Academic Foundry</SectionTitle>
            <div className="relative z-10">
              <h3 className="text-4xl font-serif italic mb-4">
                {data.education.degree}
              </h3>
              <div className="text-accent text-xl font-light mb-4">
                {data.education.institution}
              </div>
              <div className="flex items-center gap-6">
                <span className="label-caps text-text-muted">
                  {data.education.period}
                </span>
                <span className="w-10 h-[1px] bg-border" />
                <span className="text-accent italic font-serif text-lg">
                  {data.education.metrics}
                </span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-4 flex flex-col gap-8">
            <SectionTitle icon={Globe}>linguistics</SectionTitle>
            <div className="space-y-6">
              {data.languages.map((lang) => (
                <div
                  key={lang}
                  className="flex items-end justify-between border-b border-border pb-4 group"
                >
                  <span className="text-2xl font-serif italic text-text-main group-hover:text-accent transition-colors">
                    {lang}
                  </span>
                  <span className="label-caps !text-text-muted opacity-50 group-hover:opacity-100">
                    Native / Proficient
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Footer - Final Impression */}
      <footer className="py-24 px-8 lg:px-12 border-t border-border bg-bg-card">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="text-5xl font-serif italic tracking-tighter text-accent leading-none">
              Let's Craft.
            </span>
            <p className="text-text-muted text-lg font-light mt-6 max-w-md">
              Available for strategic collaborations and architectural
              inquiries. Let's discuss your next digital legacy.
            </p>
            <div className="flex gap-10 mt-10">
              <a
                href={`mailto:${data.personal.email}`}
                className="group flex flex-col"
              >
                <span className="label-caps !text-text-muted group-hover:text-accent transition-colors mb-2">
                  Electronic Mail
                </span>
                <span className="text-xl font-serif italic border-b border-accent/20 group-hover:border-accent group-hover:text-accent transition-all">
                  {data.personal.email}
                </span>
              </a>
              <a href={data.personal.linkedin} className="group flex flex-col">
                <span className="label-caps !text-text-muted group-hover:text-accent transition-colors mb-2">
                  Social Nexus
                </span>
                <span className="text-xl font-serif italic border-b border-accent/20 group-hover:border-accent group-hover:text-accent transition-all">
                  Connect on LinkedIn
                </span>
              </a>
            </div>
          </div>

          <div className="flex flex-col items-end justify-end">
            <div className="text-right group cursor-pointer">
              <span className="text-[120px] font-serif font-bold tracking-tighter leading-none opacity-5 group-hover:opacity-10 transition-opacity">
                MA.
              </span>
            </div>
            <p className="label-caps !text-text-muted mt-8">
              © 2024 Muhammad Afaq Ahmad — All Rights Reserved
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
