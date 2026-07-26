import { createFileRoute } from "@tanstack/react-router";
import { ArrowRight, Award, Globe, Heart, Camera } from "lucide-react";

import aboutPhotographer from "../assets/about-photographer.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Kala Drishti Photography" },
      {
        name: "description",
        content:
          "Meet Kala Drishti, an Indian photography studio rooted in documentary storytelling, editorial craft, and a deep love for Indian weddings and heritage.",
      },
      { property: "og:title", content: "About — Kala Drishti Photography" },
      {
        property: "og:description",
        content:
          "Meet Kala Drishti, an Indian photography studio rooted in documentary storytelling, editorial craft, and a deep love for Indian weddings and heritage.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: AboutPage,
});

const values = [
  {
    icon: <Heart className="size-5" />,
    title: "Emotion First",
    description: "We chase feeling over perfection. A tearful glance is worth more than a posed smile.",
  },
  {
    icon: <Camera className="size-5" />,
    title: "Editorial Craft",
    description: "Every frame is composed with intention, light, and a respect for visual storytelling.",
  },
  {
    icon: <Globe className="size-5" />,
    title: "Cultural fluency",
    description: "We understand the rituals, the timelines, and the tender chaos of Indian celebrations.",
  },
  {
    icon: <Award className="size-5" />,
    title: "Timeless Quality",
    description: "Our edits are restrained and natural — your photographs should age as gracefully as your memories.",
  },
];

function AboutPage() {
  return (
    <div>
      {/* Hero */}
      <section className="section-padding mx-auto max-w-7xl px-6">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          <div>
            <span className="mb-2 block text-xs font-semibold uppercase tracking-widest text-muted-foreground">
              The Studio
            </span>
            <h1 className="font-display text-5xl font-medium text-foreground md:text-7xl">
              More than a photograph — an inheritance.
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
              Kala Drishti was founded on a simple belief: that the best images are not made, they are
              witnessed. With a documentary-first eye and an editorial sensibility, we preserve the soul of
              Indian weddings, portraits, and heritage stories.
            </p>
            <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
              Based in Jaipur, our team travels across India and beyond for celebrations that matter. From the
              quiet rituals of a South Indian wedding to the vibrant colours of a Punjabi baraat, we approach
              every story with curiosity and care.
            </p>
          </div>
          <div className="relative">
            <img
              src={aboutPhotographer}
              alt="Kala Drishti lead photographer with camera in a warm studio setting"
              width={1200}
              height={1600}
              loading="lazy"
              className="aspect-[3/4] w-full rounded-lg object-cover"
            />
            <div className="absolute -bottom-6 -left-6 hidden rounded-lg bg-terracotta p-6 text-white md:block">
              <p className="font-display text-3xl font-medium">12+</p>
              <p className="text-sm text-white/80">Years documenting love</p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section-padding bg-secondary/30">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-16 text-center">
            <span className="mb-2 block text-xs font-semibold uppercase tracking-widest text-muted-foreground">
              Our Philosophy
            </span>
            <h2 className="font-display text-4xl font-medium text-foreground md:text-5xl">
              What guides our lens
            </h2>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {values.map((value) => (
              <div key={value.title} className="rounded-lg bg-background p-8">
                <div className="mb-4 inline-flex rounded-full bg-terracotta/10 p-3 text-terracotta">
                  {value.icon}
                </div>
                <h3 className="font-display text-xl font-medium text-foreground">{value.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="section-padding mx-auto max-w-7xl px-6">
        <div className="grid gap-16 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <h2 className="font-display text-4xl font-medium text-foreground md:text-5xl">
              Why we photograph
            </h2>
          </div>
          <div className="space-y-6 text-lg leading-relaxed text-muted-foreground lg:col-span-7">
            <p>
              Growing up in Rajasthan, our founder was surrounded by colour, ritual, and the constant presence
              of family. The camera became a way to hold onto moments that otherwise disappeared into the noise of
              celebration.
            </p>
            <p>
              Today, Kala Drishti is a small team of photographers and editors who share that same impulse. We
              believe the most precious images are the ones you don't know you need until you see them — the
              nervous hand adjustment, the grandparent wiping a tear, the sunlight on silk.
            </p>
            <p>
              Our work has been featured in wedding publications across India and internationally, but the
              recognition we value most is the trust families place in us on the most important days of their
              lives.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-foreground py-24 text-background">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <h2 className="font-display text-4xl font-medium md:text-5xl">
            Let's make something <i className="text-terracotta">timeless</i>.
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-lg text-background/70">
            We would be honoured to tell your story. Reach out and let's begin.
          </p>
          <a
            href="/contact"
            className="mt-10 inline-flex items-center gap-2 rounded-md bg-terracotta px-8 py-4 text-sm font-semibold text-white transition-colors hover:bg-terracotta/90"
          >
            Get in Touch
            <ArrowRight className="size-4" />
          </a>
        </div>
      </section>
    </div>
  );
}
