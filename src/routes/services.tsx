import { createFileRoute } from "@tanstack/react-router";
import { ArrowRight, Heart, Camera, MapPin, Building2, Users, Sparkles } from "lucide-react";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — Kala Drishti Photography" },
      {
        name: "description",
        content:
          "Explore Kala Drishti's photography services: Indian wedding coverage, fine-art portraits, heritage events, and commercial editorial shoots.",
      },
      { property: "og:title", content: "Services — Kala Drishti Photography" },
      {
        property: "og:description",
        content:
          "Explore Kala Drishti's photography services: Indian wedding coverage, fine-art portraits, heritage events, and commercial editorial shoots.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: ServicesPage,
});

const services = [
  {
    icon: <Heart className="size-6" />,
    title: "Wedding Celebrations",
    description:
      "Multi-day documentary coverage spanning every ceremony — haldi, mehendi, sangeet, the wedding, and the vidaai. We blend into the background while capturing the emotion, detail, and grandeur of your celebration.",
    features: ["2 photographers", "Full day coverage", "Edited digital gallery", "Cinematic highlights"],
  },
  {
    icon: <Camera className="size-6" />,
    title: "Portrait Sessions",
    description:
      "Fine-art studio and on-location portraits that celebrate who you are. From individual portraits to family heirlooms, we craft images with intention and light.",
    features: ["Studio or location", "Wardrobe guidance", "Retouched portraits", "Printed albums"],
  },
  {
    icon: <Users className="size-6" />,
    title: "Pre-Wedding & Couple Shoots",
    description:
      "Intimate shoots designed around your story. Choose a meaningful location — a palace, a tea estate, the city where you met — and we'll document your chemistry in still frames.",
    features: ["Custom location", "Outfit changes", "Styled set design", "Travel included"],
  },
  {
    icon: <Building2 className="size-6" />,
    title: "Heritage & Architecture",
    description:
      "Editorial documentation of palaces, havelis, temples, and historic spaces. Ideal for hotels, cultural institutions, and luxury property brands seeking authentic visual storytelling.",
    features: ["Architectural detail", "Golden hour shoots", "Licensing available", "Commercial use"],
  },
  {
    icon: <MapPin className="size-6" />,
    title: "Festivals & Events",
    description:
      "Vibrant, immersive coverage of festivals, cultural gatherings, and milestone events. We capture the energy, colour, and human connection of every moment.",
    features: ["Event documentary", "Crowd & detail shots", "Fast turnaround", "Social-ready edits"],
  },
  {
    icon: <Sparkles className="size-6" />,
    title: "Brand & Editorial",
    description:
      "Campaign photography for fashion, lifestyle, and hospitality brands looking for an authentic Indian aesthetic. Styled shoots with a strong editorial point of view.",
    features: ["Art direction", "Model coordination", "Location scouting", "Campaign licensing"],
  },
];

const process = [
  {
    step: "01",
    title: "Discovery",
    description:
      "We begin with a conversation about your story, your vision, and the moments that matter most to you.",
  },
  {
    step: "02",
    title: "Planning",
    description:
      "Together we plan timelines, locations, and creative direction — so nothing is left to chance on the day.",
  },
  {
    step: "03",
    title: "The Capture",
    description:
      "We work with a documentary-first approach, capturing real emotion while shaping elegant, timeless compositions.",
  },
  {
    step: "04",
    title: "Delivery",
    description:
      "Your edited gallery and, if selected, a handcrafted album arrive polished and ready to be shared for generations.",
  },
];

function ServicesPage() {
  return (
    <div>
      {/* Hero */}
      <section className="section-padding mx-auto max-w-7xl px-6">
        <div className="max-w-3xl">
          <span className="mb-2 block text-xs font-semibold uppercase tracking-widest text-muted-foreground">
            What We Offer
          </span>
          <h1 className="font-display text-5xl font-medium text-foreground md:text-7xl">
            Photography services with soul
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground">
            From the grandeur of multi-day weddings to quiet portrait sessions, every package is shaped around
            the story you want to remember.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section-padding bg-secondary/30">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <div
                key={service.title}
                className="group flex flex-col rounded-lg border border-border bg-background p-8 transition-shadow hover:shadow-lg"
              >
                <div className="mb-6 inline-flex w-fit rounded-full bg-terracotta/10 p-3 text-terracotta transition-colors group-hover:bg-terracotta group-hover:text-white">
                  {service.icon}
                </div>
                <h3 className="font-display text-2xl font-medium text-foreground">{service.title}</h3>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">
                  {service.description}
                </p>
                <ul className="mt-6 space-y-2 text-sm text-muted-foreground">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2">
                      <span className="size-1.5 rounded-full bg-terracotta" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="section-padding mx-auto max-w-7xl px-6">
        <div className="mb-16 text-center">
          <span className="mb-2 block text-xs font-semibold uppercase tracking-widest text-muted-foreground">
            Our Process
          </span>
          <h2 className="font-display text-4xl font-medium text-foreground md:text-5xl">
            How we work
          </h2>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {process.map((item) => (
            <div key={item.step} className="relative">
              <span className="font-display text-5xl font-medium text-terracotta/20">{item.step}</span>
              <h3 className="mt-4 font-display text-xl font-medium text-foreground">{item.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-foreground py-24 text-background">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <h2 className="font-display text-4xl font-medium md:text-5xl">
            Ready to discuss your <i className="text-terracotta">vision</i>?
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-lg text-background/70">
            Every story is different. Tell us about yours and we'll tailor a photography package around it.
          </p>
          <a
            href="/contact"
            className="mt-10 inline-flex items-center gap-2 rounded-md bg-terracotta px-8 py-4 text-sm font-semibold text-white transition-colors hover:bg-terracotta/90"
          >
            Request a Quote
            <ArrowRight className="size-4" />
          </a>
        </div>
      </section>
    </div>
  );
}
