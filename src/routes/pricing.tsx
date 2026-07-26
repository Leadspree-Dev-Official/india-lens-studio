import { createFileRoute } from "@tanstack/react-router";
import { Check, ArrowRight } from "lucide-react";

export const Route = createFileRoute("/pricing")({
  head: () => ({
    meta: [
      { title: "Pricing — Kala Drishti Photography" },
      {
        name: "description",
        content:
          "Transparent photography packages for Indian weddings, portraits, pre-wedding shoots, and commercial projects. Custom quotes available for destination celebrations.",
      },
      { property: "og:title", content: "Pricing — Kala Drishti Photography" },
      {
        property: "og:description",
        content:
          "Transparent photography packages for Indian weddings, portraits, pre-wedding shoots, and commercial projects. Custom quotes available for destination celebrations.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: PricingPage,
});

const packages = [
  {
    name: "Essential",
    price: "₹1,50,000",
    description: "Perfect for intimate weddings and single-day celebrations.",
    features: [
      "Single photographer",
      "Up to 8 hours of coverage",
      "300+ edited digital images",
      "Online gallery with download",
      "2-week delivery",
    ],
    cta: "Request Availability",
    popular: false,
  },
  {
    name: "Signature",
    price: "₹3,50,000",
    description: "Our most-loved package for full multi-day Indian weddings.",
    features: [
      "2 photographers + 1 cinematographer",
      "Full multi-day coverage",
      "1,000+ edited digital images",
      "Cinematic highlight film",
      "Handcrafted leather album",
      "Online gallery & USB archive",
      "Priority delivery",
    ],
    cta: "Book This Package",
    popular: true,
  },
  {
    name: "Legacy",
    price: "Custom",
    description: "For destination weddings, royal celebrations, and bespoke editorial projects.",
    features: [
      "Full creative team",
      "Unlimited coverage days",
      "Premium fine-art album set",
      "Drone & aerial photography",
      "Dedicated photo editor",
      "Worldwide travel included",
      "Exclusive archival prints",
    ],
    cta: "Start a Custom Quote",
    popular: false,
  },
];

const addOns = [
  "Pre-wedding couple shoot — ₹75,000",
  "Studio portrait session — ₹45,000",
  "Additional album copy — ₹18,000",
  "Drone coverage — ₹35,000",
  "Same-day edit slideshow — ₹40,000",
];

function PricingPage() {
  return (
    <div>
      {/* Hero */}
      <section className="section-padding mx-auto max-w-7xl px-6">
        <div className="max-w-3xl">
          <span className="mb-2 block text-xs font-semibold uppercase tracking-widest text-muted-foreground">
            Investment
          </span>
          <h1 className="font-display text-5xl font-medium text-foreground md:text-7xl">
            Simple, honest pricing
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground">
            Every story is unique, so we offer packages that flex with your needs. All prices below are a
            starting point — we'll tailor a final quote based on your dates, locations, and vision.
          </p>
        </div>
      </section>

      {/* Packages */}
      <section className="section-padding bg-secondary/30">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-8 lg:grid-cols-3">
            {packages.map((pkg) => (
              <div
                key={pkg.name}
                className={`relative flex flex-col rounded-lg border bg-background p-8 ${pkg.popular ? "border-terracotta shadow-lg" : "border-border"}`}
              >
                {pkg.popular && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-terracotta px-4 py-1 text-xs font-semibold text-white">
                    Most Popular
                  </span>
                )}
                <div className="mb-6">
                  <h3 className="font-display text-2xl font-medium text-foreground">{pkg.name}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">{pkg.description}</p>
                </div>
                <p className="font-display text-4xl font-medium text-foreground">{pkg.price}</p>
                <p className="mt-1 text-xs text-muted-foreground">starting from</p>

                <ul className="mt-8 flex-1 space-y-3">
                  {pkg.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3 text-sm text-muted-foreground">
                      <Check className="mt-0.5 size-4 shrink-0 text-terracotta" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <a
                  href="/contact"
                  className={`mt-8 inline-flex items-center justify-center gap-2 rounded-md px-6 py-3 text-sm font-semibold transition-colors ${
                    pkg.popular
                      ? "bg-terracotta text-white hover:bg-terracotta/90"
                      : "border border-foreground text-foreground hover:bg-foreground hover:text-background"
                  }`}
                >
                  {pkg.cta}
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Add-ons */}
      <section className="section-padding mx-auto max-w-7xl px-6">
        <div className="grid gap-16 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <h2 className="font-display text-4xl font-medium text-foreground">Popular add-ons</h2>
            <p className="mt-4 text-muted-foreground">
              Enhance your package with these services, or ask us to build something custom.
            </p>
          </div>
          <div className="lg:col-span-7">
            <ul className="divide-y divide-border">
              {addOns.map((addon) => (
                <li key={addon} className="flex items-center justify-between py-4 text-sm">
                  <span className="text-muted-foreground">{addon.split(" — ")[0]}</span>
                  <span className="font-medium text-foreground">{addon.split(" — ")[1]}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* FAQ Note */}
      <section className="section-padding bg-foreground text-background">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <h2 className="font-display text-4xl font-medium md:text-5xl">
            Have questions about pricing?
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-lg text-background/70">
            We believe in clear communication. Reach out and we'll walk you through every detail and help you
            choose the right fit.
          </p>
          <a
            href="/contact"
            className="mt-10 inline-flex items-center gap-2 rounded-md bg-terracotta px-8 py-4 text-sm font-semibold text-white transition-colors hover:bg-terracotta/90"
          >
            Contact Us
            <ArrowRight className="size-4" />
          </a>
        </div>
      </section>
    </div>
  );
}
