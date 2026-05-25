import Image from "next/image";
import { Mail, ShieldCheck, Lock, Users, MapPin, ArrowRight } from "lucide-react";

const services = [
  {
    title: "Protective Services",
    description:
      "Professional, discreet client support for individuals, families, executives, and private events.",
    icon: ShieldCheck,
  },
  {
    title: "Security Consulting",
    description:
      "Practical threat awareness, site review, planning, and recommendations built around real-world needs.",
    icon: Lock,
  },
  {
    title: "Event & Personal Security",
    description:
      "Visible or low-profile security presence for private gatherings, community events, and sensitive situations.",
    icon: Users,
  },
];

export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden">
      <header className="section-wrap flex items-center justify-between py-6">
        <a href="#top" className="flex items-center gap-3">
          <Image src="/logo.png" alt="Drake Protective Services logo" width={56} height={56} className="h-14 w-14 object-contain" />
          <div>
            <p className="text-sm tracking-[0.32em] text-[#c8a44d]">DRAKE</p>
            <p className="text-xs uppercase tracking-[0.2em] text-neutral-300">Protective Services</p>
          </div>
        </a>
        <nav className="hidden items-center gap-8 text-sm uppercase tracking-[0.18em] text-neutral-300 md:flex">
          <a href="#about" className="hover:text-[#e2c777]">About</a>
          <a href="#services" className="hover:text-[#e2c777]">Services</a>
          <a href="#contact" className="hover:text-[#e2c777]">Contact</a>
        </nav>
      </header>

      <section id="top" className="section-wrap grid min-h-[78vh] items-center gap-12 py-16 lg:grid-cols-[1.05fr_0.95fr]">
        <div>
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border gold-border bg-white/5 px-4 py-2 text-xs uppercase tracking-[0.2em] text-neutral-300">
            <MapPin size={14} />
            Maine & New England
          </div>

          <h1 className="max-w-4xl text-5xl font-semibold tracking-tight text-white md:text-7xl">
            Professional protection with a calm, discreet presence.
          </h1>

          <p className="mt-7 max-w-2xl text-lg leading-8 text-neutral-300">
            Drake Protective Services provides protective services, security consulting,
            and practical client support for private individuals, businesses, and events.
          </p>

          <div className="mt-9 flex flex-col gap-4 sm:flex-row">
            <a
              href="mailto:info@drakeprotectiveservices.com"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-[#c8a44d] px-6 py-3 text-sm font-semibold uppercase tracking-[0.16em] text-black transition hover:bg-[#e2c777]"
            >
              Request Contact <ArrowRight size={16} />
            </a>
            <a
              href="#services"
              className="inline-flex items-center justify-center rounded-full border gold-border px-6 py-3 text-sm font-semibold uppercase tracking-[0.16em] text-[#e2c777] transition hover:bg-white/5"
            >
              View Services
            </a>
          </div>
        </div>

        <div className="relative mx-auto flex w-full max-w-md justify-center">
          <div className="absolute inset-0 rounded-full bg-[#c8a44d]/15 blur-3xl" />
          <div className="relative rounded-[2rem] border gold-border bg-black/45 p-10 shadow-2xl backdrop-blur">
            <Image
              src="/logo.png"
              alt="Drake Protective Services shield logo"
              width={420}
              height={420}
              priority
              className="h-auto w-full object-contain"
            />
          </div>
        </div>
      </section>

      <section id="about" className="border-y border-white/10 bg-black/35 py-20">
        <div className="section-wrap grid gap-10 md:grid-cols-[0.8fr_1.2fr]">
          <div>
            <p className="text-sm uppercase tracking-[0.28em] text-[#c8a44d]">About</p>
            <h2 className="mt-3 text-3xl font-semibold text-white md:text-4xl">
              Built on professionalism, preparation, and discretion.
            </h2>
          </div>
          <div className="space-y-5 text-base leading-8 text-neutral-300">
            <p>
              Drake Protective Services was created to provide steady, professional
              security support for clients who value discretion, judgment, and practical
              experience.
            </p>
            <p>
              Our approach is simple: assess the situation, reduce unnecessary risk,
              communicate clearly, and maintain a professional presence without creating
              unnecessary attention.
            </p>
          </div>
        </div>
      </section>

      <section id="services" className="section-wrap py-20">
        <div className="mb-10 max-w-2xl">
          <p className="text-sm uppercase tracking-[0.28em] text-[#c8a44d]">Services</p>
          <h2 className="mt-3 text-3xl font-semibold text-white md:text-4xl">
            Protective support tailored to the client and the setting.
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <div key={service.title} className="rounded-3xl border gold-border bg-white/[0.035] p-7 shadow-xl">
                <div className="mb-5 inline-flex rounded-2xl bg-[#c8a44d]/15 p-3 text-[#e2c777]">
                  <Icon size={26} />
                </div>
                <h3 className="text-xl font-semibold text-white">{service.title}</h3>
                <p className="mt-4 leading-7 text-neutral-300">{service.description}</p>
              </div>
            );
          })}
        </div>
      </section>

      <section id="contact" className="bg-[#0c0c0c] py-20">
        <div className="section-wrap">
          <div className="rounded-[2rem] border gold-border bg-gradient-to-br from-white/[0.07] to-white/[0.02] p-8 md:p-12">
            <p className="text-sm uppercase tracking-[0.28em] text-[#c8a44d]">Contact</p>
            <h2 className="mt-3 max-w-3xl text-3xl font-semibold text-white md:text-5xl">
              Start with a confidential conversation.
            </h2>
            <p className="mt-5 max-w-2xl text-lg leading-8 text-neutral-300">
              For protective services, consulting, or event security inquiries, contact
              Drake Protective Services directly.
            </p>

            <a
              href="mailto:info@drakeprotectiveservices.com"
              className="mt-8 inline-flex items-center gap-3 rounded-full bg-[#c8a44d] px-6 py-3 text-sm font-semibold uppercase tracking-[0.16em] text-black transition hover:bg-[#e2c777]"
            >
              <Mail size={17} />
              info@drakeprotectiveservices.com
            </a>
          </div>
        </div>
      </section>

      <footer className="section-wrap flex flex-col gap-3 py-8 text-sm text-neutral-500 md:flex-row md:items-center md:justify-between">
        <p>© {new Date().getFullYear()} Drake Protective Services. All rights reserved.</p>
        <p>Professional Protective Services • Maine & New England</p>
      </footer>
    </main>
  );
}
