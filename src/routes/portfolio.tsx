import { createFileRoute } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";

import portfolioWedding from "../assets/portfolio-wedding.jpg";
import portfolioPortrait from "../assets/portfolio-portrait.jpg";
import portfolioFestival from "../assets/portfolio-festival.jpg";
import portfolioArchitecture from "../assets/portfolio-architecture.jpg";
import heroHome from "../assets/hero-home.jpg";

export const Route = createFileRoute("/portfolio")({
  head: () => ({
    meta: [
      { title: "Portfolio — Kala Drishti Photography" },
      {
        name: "description",
        content:
          "Browse Kala Drishti's portfolio of Indian weddings, editorial portraits, vibrant festivals, and heritage architecture photography.",
      },
      { property: "og:title", content: "Portfolio — Kala Drishti Photography" },
      {
        property: "og:description",
        content:
          "Browse Kala Drishti's portfolio of Indian weddings, editorial portraits, vibrant festivals, and heritage architecture photography.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: PortfolioPage,
});

const portfolioItems = [
  {
    title: "Wedding Rituals",
    location: "Ananya & Kabir — Udaipur",
    image: portfolioWedding,
    aspect: "aspect-[3/4]",
    span: "lg:col-span-5",
  },
  {
    title: "Heritage Spaces",
    location: "Udaipur Palace",
    image: portfolioArchitecture,
    aspect: "aspect-[4/3]",
    span: "lg:col-span-7",
  },
  {
    title: "Festival of Colours",
    location: "Pushkar, Rajasthan",
    image: portfolioFestival,
    aspect: "aspect-[3/4]",
    span: "lg:col-span-7",
  },
  {
    title: "Legacy Portraits",
    location: "Studio Series",
    image: portfolioPortrait,
    aspect: "aspect-[3/4]",
    span: "lg:col-span-5",
  },
  {
    title: "Sacred Union",
    location: "Priya & Arjun — Jaipur",
    image: heroHome,
    aspect: "aspect-[16/9]",
    span: "lg:col-span-12",
  },
];

function PortfolioPage() {
  return (
    <div>
      {/* Hero Header */}
      <section className="section-padding mx-auto max-w-7xl px-6">
        <div className="max-w-3xl">
          <span className="mb-2 block text-xs font-semibold uppercase tracking-widest text-muted-foreground">
            The Archive
          </span>
          <h1 className="font-display text-5xl font-medium text-foreground md:text-7xl">
            Selected Works
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground">
            A curated collection of weddings, portraits, festivals, and heritage spaces — each frame a
            chapter in a larger story of love, tradition, and light.
          </p>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section className="pb-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-12">
            {portfolioItems.map((item) => (
              <div
                key={item.title}
                className={`group relative overflow-hidden rounded-lg ${item.span}`}
              >
                <img
                  src={item.image}
                  alt={item.title}
                  width={1200}
                  height={1600}
                  loading="lazy"
                  className={`w-full object-cover transition-transform duration-700 group-hover:scale-105 ${item.aspect}`}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/10 to-transparent opacity-60 transition-opacity duration-500 md:opacity-0 md:group-hover:opacity-100" />
                <div className="absolute bottom-0 left-0 p-6 text-white md:opacity-0 md:transition-opacity md:duration-500 md:group-hover:opacity-100">
                  <p className="font-display text-2xl">{item.title}</p>
                  <p className="text-sm text-white/80">{item.location}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-foreground py-24 text-background">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <h2 className="font-display text-4xl font-medium md:text-5xl">
            Want to add your story to this archive?
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-lg text-background/70">
            We'd love to hear about your celebration. Reach out and let's create something timeless together.
          </p>
          <a
            href="/contact"
            className="mt-10 inline-flex items-center gap-2 rounded-md bg-terracotta px-8 py-4 text-sm font-semibold text-white transition-colors hover:bg-terracotta/90"
          >
            Start a Project
            <ArrowRight className="size-4" />
          </a>
        </div>
      </section>
    </div>
  );
}
