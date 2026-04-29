"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowLeft,
  MessageSquare,
  Clock,
  MapPin,
  ArrowUpRight,
  CheckCircle,
  Terminal,
  Layers,
  Code2,
  Network,
  ShieldCheck,
  Zap,
  Search,
  ChevronRight,
} from "lucide-react";
import CurrentTime from "@/components/current-time";
import { quickLinks } from "@/data/contact";
import ContactForm from "@/components/contact-form";

// Data Constants
const workflow = [
  {
    id: "01",
    title: "Discovery",
    desc: "Understanding the core problem and technical requirements.",
  },
  {
    id: "02",
    title: "Architecture",
    desc: "Mapping out system logic, DB schema, or network topology.",
  },
  {
    id: "03",
    title: "Execution",
    desc: "High-velocity development using modern, type-safe stacks.",
  },
  {
    id: "04",
    title: "Optimization",
    desc: "Hardening security, refining UI, and ensuring 99.9% uptime.",
  },
];

const capabilities = [
  {
    icon: <Code2 size={20} />,
    title: "Web Architecture",
    tools: "Next.js, TS, Supabase",
  },
  {
    icon: <Network size={20} />,
    title: "Infrastructure",
    tools: "Starlink, Fiber, VLANs",
  },
  {
    icon: <ShieldCheck size={20} />,
    title: "Security",
    tools: "Hikvision, Biometrics",
  },
];

const faqs = [
  {
    q: "What is your typical project lead time?",
    a: "For web builds, usually 2–4 weeks. Infrastructure audits or physical networking setups can often be scheduled within 72 hours depending on site location.",
    code: "SYST_LATENCY: LOW",
  },
  {
    q: "Do you handle both hardware and software?",
    a: "Yes. I specialize in the intersection of both—deploying robust networks and building the custom software that runs on them.",
    code: "ARCH_TYPE: FULL_STACK",
  },
  {
    q: "How do you handle maintenance?",
    a: "I offer 'Node-Care' retainers for 24/7 monitoring. For one-off projects, I provide 30 days of complimentary technical support.",
    code: "UPTIME_PROMISE: 99.9%",
  },
  {
    q: "What tech stack do you prefer?",
    a: "My 'Golden Stack' is Next.js, TypeScript, and Supabase. For physical security, I focus on Hikvision and Ubiquiti ecosystems.",
    code: "CORE_ENGINE: TS_NEXT",
  },
];

const ContactPage = () => {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Sora:wght@300;400;500;600;700;800&display=swap');

        .contact-root {
          font-family: 'Sora', sans-serif;
          background-color: #F8FAFC;
        }

        .grid-bg {
          position: fixed;
          inset: 0;
          background-image: 
            linear-gradient(#e2e8f0 1px, transparent 1px),
            linear-gradient(90deg, #e2e8f0 1px, transparent 1px);
          background-size: 40px 40px;
          mask-image: radial-gradient(circle at center, black, transparent 80%);
          z-index: 0;
        }

        .hero-card-clean {
          background: #FFFFFF;
          border: 1px solid rgba(15, 23, 42, 0.05);
          box-shadow: 0 25px 50px -12px rgba(15, 23, 42, 0.04);
        }

        .protocol-card {
          border-left: 2px solid #e2e8f0;
          transition: all 0.3s ease;
        }

        .protocol-card:hover {
          border-left-color: #10b981;
          background: white;
        }

        .name-accent {
          background: linear-gradient(135deg, #0F172A 30%, #475569 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }
      `}</style>

      <div className="contact-root relative min-h-screen overflow-x-hidden pb-32">
        <div className="grid-bg" />

        <section className="relative z-10 mx-auto max-w-5xl px-6 pt-20">
          {/* Header Section */}
          <div className="mb-16 grid grid-cols-1 items-end gap-12 lg:grid-cols-12">
            <div className="space-y-6 lg:col-span-7">
              <div className="mb-4 flex items-center gap-2">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500"></span>
                </span>
                <span className="text-[10px] font-black tracking-[0.2em] text-slate-400 uppercase">
                  Status: Online & Available
                </span>
              </div>

              <h1 className="text-6xl leading-[0.85] font-black tracking-tighter text-slate-900 md:text-8xl">
                Let&apos;s <span className="name-accent">Build</span>
                <br />
                <span className="text-slate-400 opacity-10">Together</span>
              </h1>
            </div>

            <div className="flex flex-col gap-4 lg:col-span-5">
              <div className="hero-card-clean flex items-center gap-4 rounded-2xl p-4">
                <div className="rounded-xl bg-slate-50 p-3">
                  <MapPin size={20} className="text-slate-900" />
                </div>
                <div>
                  <p className="text-[10px] font-bold tracking-widest text-slate-400 uppercase">
                    Base
                  </p>
                  <p className="text-sm font-bold text-slate-900">
                    Mombasa, Kenya
                  </p>
                </div>
              </div>
              <div className="hero-card-clean flex items-center gap-4 rounded-2xl p-4">
                <div className="rounded-xl bg-slate-50 p-3">
                  <Clock size={20} className="text-emerald-500" />
                </div>
                <div>
                  <p className="text-[10px] font-bold tracking-widest text-slate-400 uppercase">
                    Local Time
                  </p>
                  <p className="font-mono text-sm font-bold text-slate-900">
                    <CurrentTime /> EAT
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-8 lg:grid-cols-12">
            {/* Left Column: Form & Services */}
            <div className="space-y-8 lg:col-span-8">
              <div className="hero-card-clean overflow-hidden rounded-[2.5rem]">
                <div className="flex items-center justify-between border-b border-slate-50 bg-slate-50/50 px-8 py-6">
                  <div className="flex items-center gap-2">
                    <Terminal size={18} className="text-slate-900" />
                    <span className="text-xs font-black tracking-widest text-slate-900 uppercase">
                      Send_Project_Manifest
                    </span>
                  </div>
                </div>
                <div className="p-8">
                  <ContactForm />
                </div>
              </div>

              <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
                {capabilities.map((cap, i) => (
                  <div
                    key={i}
                    className="hero-card-clean rounded-3xl border-dashed border-slate-200 p-6"
                  >
                    <div className="mb-3 text-emerald-500">{cap.icon}</div>
                    <h4 className="mb-1 text-sm font-bold text-slate-900">
                      {cap.title}
                    </h4>
                    <p className="font-mono text-[10px] tracking-tighter text-slate-400 uppercase">
                      {cap.tools}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Column: Workflow & Response Time */}
            <div className="space-y-6 lg:col-span-4">
              <div className="hero-card-clean rounded-[2rem] p-8">
                <h2 className="mb-8 flex items-center gap-2 text-[10px] font-black tracking-[0.2em] text-slate-400 uppercase">
                  <Zap size={14} /> Workflow Protocol
                </h2>
                <div className="space-y-8">
                  {workflow.map((step) => (
                    <div key={step.id} className="protocol-card pl-4">
                      <p className="mb-1 font-mono text-[10px] font-bold text-emerald-500">
                        {step.id}
                      </p>
                      <h3 className="text-sm font-bold text-slate-900">
                        {step.title}
                      </h3>
                      <p className="mt-1 text-xs leading-relaxed text-slate-500">
                        {step.desc}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="rounded-[2rem] bg-slate-900 p-8 text-white">
                <div className="mb-6 flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-800">
                    <Search size={18} className="text-emerald-400" />
                  </div>
                  <h3 className="text-lg leading-tight font-bold">
                    Fast
                    <br />
                    Response
                  </h3>
                </div>
                <p className="mb-6 text-sm leading-relaxed text-slate-400">
                  I typically respond within{" "}
                  <span className="text-white">4 hours</span> for technical
                  consultations and urgent site support.
                </p>
                <div className="flex items-center justify-between border-t border-slate-800 pt-6 font-mono text-[10px] text-slate-500">
                  <span>STATUS</span>
                  <span className="font-bold tracking-widest text-emerald-400 uppercase underline">
                    Active_Node
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* FAQ Terminal Section */}
          <div className="mt-32 space-y-12">
            <div className="flex flex-col justify-between gap-4 border-b border-slate-200 pb-8 md:flex-row md:items-end">
              <div>
                <h2 className="text-4xl font-black tracking-tighter text-slate-900">
                  System <span className="text-emerald-500">FAQ</span>
                </h2>
                <p className="mt-2 text-sm font-medium text-slate-500">
                  Pre-flight checks and common technical inquiries.
                </p>
              </div>
              <div className="rounded-full bg-slate-100 px-4 py-2">
                <span className="font-mono text-[10px] tracking-widest text-slate-500 uppercase">
                  Index: 004_Common_Inquiries
                </span>
              </div>
            </div>

            <div className="grid grid-cols-1 gap-px overflow-hidden rounded-[2rem] border border-slate-200 bg-slate-200 md:grid-cols-2">
              {faqs.map((faq, index) => (
                <div
                  key={index}
                  className="group bg-white p-10 transition-colors hover:bg-slate-50"
                >
                  <div className="mb-4 flex items-start gap-4">
                    <span className="rounded bg-emerald-50 px-2 py-1 font-mono text-[10px] font-bold text-emerald-500">
                      {faq.code}
                    </span>
                  </div>
                  <h3 className="mb-3 flex items-center gap-2 text-lg font-bold text-slate-900 transition-transform group-hover:translate-x-1">
                    {faq.q}{" "}
                    <ChevronRight
                      size={14}
                      className="text-emerald-500 opacity-0 transition-all group-hover:opacity-100"
                    />
                  </h3>
                  <p className="text-sm leading-relaxed font-medium text-slate-500">
                    {faq.a}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Footer Channels */}
          <div className="mt-32 grid grid-cols-1 gap-12 border-t border-slate-200 pt-20 lg:grid-cols-12">
            <div className="lg:col-span-4">
              <h2 className="mb-4 text-2xl font-black tracking-tighter text-slate-900">
                Direct Channels
              </h2>
              <p className="mb-8 text-sm leading-relaxed text-slate-500">
                Skip the form? Reach out via these platforms for immediate
                technical syncs or quick coffee chats.
              </p>
              <Link
                href="/"
                className="inline-flex items-center gap-2 text-[10px] font-black tracking-widest text-slate-400 uppercase transition-colors hover:text-slate-900"
              >
                <ArrowLeft size={14} /> Return to Core
              </Link>
            </div>

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:col-span-8">
              {quickLinks.map(({ title, value, href, iconSrc }) => (
                <Link
                  key={title}
                  href={href}
                  className="hero-card-clean group rounded-3xl p-6 transition-all hover:border-slate-900"
                >
                  <div className="mb-4 flex items-start justify-between">
                    {iconSrc && (
                      <Image
                        src={iconSrc}
                        alt={title}
                        width={24}
                        height={24}
                        className="opacity-50 grayscale transition-all group-hover:opacity-100 group-hover:grayscale-0"
                      />
                    )}
                    <ArrowUpRight
                      size={16}
                      className="text-slate-300 transition-all group-hover:text-slate-900"
                    />
                  </div>
                  <p className="mb-1 text-[10px] font-bold text-slate-400 uppercase">
                    {title}
                  </p>
                  <p className="text-sm font-bold text-slate-900">{value}</p>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Backdrop Decorative Text */}
        <div className="pointer-events-none absolute right-0 bottom-10 left-0 overflow-hidden text-center opacity-10">
          <span className="text-[15rem] leading-none font-black tracking-tighter text-slate-300 select-none">
            CONTACT
          </span>
        </div>
      </div>
    </>
  );
};

export default ContactPage;
