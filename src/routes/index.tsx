import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Camera, Heart, MapPin } from "lucide-react";

import heroHome from "../assets/hero-home.jpg";
import portfolioWedding from "../assets/portfolio-wedding.jpg";
import portfolioPortrait from "../assets/portfolio-portrait.jpg";
import portfolioFestival from "../assets/portfolio-festival.jpg";
import portfolioArchitecture from "../assets/portfolio-architecture.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Kala Drishti Photography — Indian Wedding & Portrait Studio" },
      {
        name: "description",
        content:
          "Award-winning Indian photography studio capturing weddings, portraits, festivals, and heritage with an editorial, documentary-first approach.",
      },
      {
        property: "og:title",
        content: "Kala Drishti Photography — Indian Wedding & Portrait Studio",
      },
      {
        property: "og:description",
        content:
          "Award-winning Indian photography studio capturing weddings, portraits, festivals, and heritage with an editorial, documentary-first approach.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: HomePage,
});

const stats = [
  { value: "12+", label: "Years of Craft" },
  { value: "400+", label: "Weddings Captured" },
  { value: "25", label: "Cities Covered" },
];

function HomePage() {
  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative">
        <div className="absolute inset-0 z-0">
          <img
            src={heroHome}
            alt="Indian wedding ceremony under a floral mandap at golden hour"
            width={1920}
            height={1088}
            className="h-full w-full object-cover"
            style={{ filter: "brightness(0.75)" }}
          />
        </div>
        <div className="relative z-10 mx-auto flex min-h-[80vh] max-w-7xl flex-col justify-end px-6 pb-20 pt-32 text-white">
          <span className="mb-4 text-xs font-semibold uppercase tracking-[0.3em] text-white/80">
            Jaipur & Beyond
          </span>
          <h1 className="max-w-4xl font-display text-5xl font-medium leading-[1.05] text-balance md:text-7xl lg:text-8xl">
            Where tradition meets the <i className="text-marigold">eternal</i> light.
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-white/90">
            Documentary-first photography for Indian weddings, intimate portraits, and heritage stories that
            deserve to be remembered.
          </p>
          <div className="mt-10 flex flex-wrap items-center gap-4">
            <Link
              to="/portfolio"
              className="inline-flex items-center gap-2 rounded-md bg-white px-6 py-3 text-sm font-semibold text-foreground transition-all hover:bg-terracotta hover:text-white"
            >
              View Portfolio
              <ArrowRight className="size-4" />
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-md border border-white/40 px-6 py-3 text-sm font-semibold text-white backdrop-blur-sm transition-all hover:border-white hover:bg-white/10"
            >
              Book a Session
            </Link>
          </div>
        </div>
      </section>

      {/* Intro / Trust Bar */}
      <section className="bg-terracotta py-12 text-white">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-8 px-6">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center md:text-left">
              <p className="font-display text-4xl font-medium">{stat.value}</p>
              <p className="mt-1 text-xs font-medium uppercase tracking-widest text-white/80">{stat.label}</p>
            </div>
          ))}
          <div className="hidden h-12 w-px bg-white/20 md:block" />
          <p className="max-w-md text-sm leading-relaxed text-white/90">
            We don't just photograph events — we preserve the emotion, the detail, and the generations of
            story that live inside every frame.
          </p>
        </div>
      </section>

      {/* Featured Portfolio */}
      <section className="section-padding mx-auto max-w-7xl px-6">
        <div className="mb-16 flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <div>
            <span className="mb-2 block text-xs font-semibold uppercase tracking-widest text-muted-foreground">
              Selected Works
            </span>
            <h2 className="font-display text-4xl font-medium text-foreground md:text-5xl">
              Stories from the field
            </h2>
          </div>
          <Link
            to="/portfolio"
            className="inline-flex items-center gap-2 text-sm font-semibold text-terracotta transition-colors hover:text-foreground"
          >
            Explore the full gallery
            <ArrowRight className="size-4" />
          </Link>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-12">
          <div className="group relative overflow-hidden rounded-lg lg:col-span-5">
            <img
              src={portfolioWedding}
              alt="Close-up of henna-decorated hands holding marigold petals"
              width={1200}
              height={1600}
              loading="lazy"
              className="aspect-[3/4] w-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-foreground/70 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
            <div className="absolute bottom-0 left-0 p-6 text-white opacity-0 transition-opacity duration-500 group-hover:opacity-100">
              <p className="font-display text-2xl">Wedding Rituals</p>
              <p className="text-sm text-white/80">Ananya & Kabir — Udaipur</p>
            </div>
          </div>

          <div className="group relative overflow-hidden rounded-lg lg:col-span-7">
            <img
              src={portfolioArchitecture}
              alt="Rajasthani palace architecture with intricate carved stone arches at golden hour"
              width={1600}
              height={1200}
              loading="lazy"
              className="aspect-[4/3] w-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-foreground/70 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
            <div className="absolute bottom-0 left-0 p-6 text-white opacity-0 transition-opacity duration-500 group-hover:opacity-100">
              <p className="font-display text-2xl">Heritage Spaces</p>
              <p className="text-sm text-white/80">Udaipur Palace</p>
            </div>
          </div>

          <div className="group relative overflow-hidden rounded-lg lg:col-span-7">
            <img
              src={portfolioFestival}
              alt="Vibrant Holi festival celebration with colorful powders in the air"
              width={1200}
              height={1600}
              loading="lazy"
              className="aspect-[3/4] w-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-foreground/70 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
            <div className="absolute bottom-0 left-0 p-6 text-white opacity-0 transition-opacity duration-500 group-hover:opacity-100">
              <p className="font-display text-2xl">Festival of Colours</p>
              <p className="text-sm text-white/80">Pushkar, Rajasthan</p>
            </div>
          </div>

          <div className="group relative overflow-hidden rounded-lg lg:col-span-5">
            <img
              src={portfolioPortrait}
              alt="Elegant portrait of a woman in a traditional silk saree with gold jewelry"
              width={1200}
              height={1600}
              loading="lazy"
              className="aspect-[3/4] w-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-foreground/70 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
            <div className="absolute bottom-0 left-0 p-6 text-white opacity-0 transition-opacity duration-500 group-hover:opacity-100">
              <p className="font-display text-2xl">Legacy Portraits</p>
              <p className="text-sm text-white/80">Studio Series</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Teaser */}
      <section className="section-padding bg-secondary/50">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-16 text-center">
            <span className="mb-2 block text-xs font-semibold uppercase tracking-widest text-muted-foreground">
              What We Offer
            </span>
            <h2 className="font-display text-4xl font-medium text-foreground md:text-5xl">
              Photography for every chapter
            </h2>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            <ServiceCard
              icon={<Heart className="size-6" />}
              title="Weddings"
              description="Multi-day coverage of ceremonies, emotions, and celebrations — from the haldi to the vidaai."
            />
            <ServiceCard
              icon={<Camera className="size-6" />}
              title="Portraits"
              description="Fine-art studio and location portraits for individuals, families, and generational milestones."
            />
            <ServiceCard
              icon={<MapPin className="size-6" />}
              title="Heritage & Events"
              description="Editorial coverage of festivals, architecture, and cultural events across India and beyond."
            />
          </div>

          <div className="mt-12 text-center">
            <Link
              to="/services"
              className="inline-flex items-center gap-2 rounded-md border border-foreground px-6 py-3 text-sm font-semibold transition-colors hover:bg-foreground hover:text-background"
            >
              See All Services
              <ArrowRight className="size-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="section-padding mx-auto max-w-4xl px-6 text-center">
        <blockquote className="font-display text-3xl font-medium leading-snug text-foreground md:text-4xl">
          "Kala Drishti didn't just photograph our wedding — they captured the soul of every moment we would
          have otherwise forgotten."
        </blockquote>
        <div className="mt-8">
          <p className="text-sm font-semibold text-foreground">Riya & Vikram</p>
          <p className="text-sm text-muted-foreground">Wedding — Jodhpur, 2024</p>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-foreground py-24 text-background">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <h2 className="font-display text-4xl font-medium md:text-6xl">
            Let's tell your story <i className="text-terracotta">together</i>.
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-lg text-background/70">
            Available for commissions across India and worldwide. Tell us about your vision, and we'll craft a
            photography experience around it.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <Link
              to="/contact"
              className="rounded-md bg-terracotta px-8 py-4 text-sm font-semibold text-white transition-colors hover:bg-terracotta/90"
            >
              Start Your Inquiry
            </Link>
            <Link
              to="/pricing"
              className="rounded-md border border-background/30 px-8 py-4 text-sm font-semibold transition-colors hover:bg-background/10"
            >
              View Pricing
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

function ServiceCard({
  icon,
  title,
  description,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
}) {
  return (
    <div className="group rounded-lg border border-border bg-background p-8 transition-shadow hover:shadow-lg">
      <div className="mb-6 inline-flex rounded-full bg-terracotta/10 p-3 text-terracotta transition-colors group-hover:bg-terracotta group-hover:text-white">
        {icon}
      </div>
      <h3 className="font-display text-2xl font-medium text-foreground">{title}</h3>
      <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{description}</p>
      <Link
        to="/services"
        className="mt-6 inline-flex items-center gap-1 text-sm font-semibold text-terracotta transition-colors hover:text-foreground"
      >
        Learn more <ArrowRight className="size-4" />
      </Link>
    </div>
  );
}
