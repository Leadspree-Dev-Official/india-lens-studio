import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { ArrowRight, Mail, MapPin, Phone, Instagram, Send } from "lucide-react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Kala Drishti Photography" },
      {
        name: "description",
        content:
          "Get in touch with Kala Drishti Photography. Book your Indian wedding, portrait session, or commercial photography project. Based in Jaipur, available worldwide.",
      },
      { property: "og:title", content: "Contact — Kala Drishti Photography" },
      {
        property: "og:description",
        content:
          "Get in touch with Kala Drishti Photography. Book your Indian wedding, portrait session, or commercial photography project.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    occasion: "Wedding",
    date: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div>
      {/* Hero */}
      <section className="section-padding mx-auto max-w-7xl px-6">
        <div className="max-w-3xl">
          <span className="mb-2 block text-xs font-semibold uppercase tracking-widest text-muted-foreground">
            Get in Touch
          </span>
          <h1 className="font-display text-5xl font-medium text-foreground md:text-7xl">
            Let's freeze a moment together
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground">
            Tell us about your celebration, your story, or your creative project. We respond to every inquiry
            within 48 hours.
          </p>
        </div>
      </section>

      {/* Contact Form + Info */}
      <section className="section-padding bg-secondary/30">
        <div className="mx-auto grid max-w-7xl gap-16 px-6 lg:grid-cols-12">
          {/* Form */}
          <div className="lg:col-span-7">
            <div className="rounded-lg border border-border bg-background p-8 md:p-12">
              {submitted ? (
                <div className="py-12 text-center">
                  <div className="mx-auto mb-6 inline-flex rounded-full bg-sage/20 p-4 text-sage">
                    <Send className="size-8" />
                  </div>
                  <h3 className="font-display text-3xl font-medium text-foreground">Inquiry sent!</h3>
                  <p className="mx-auto mt-4 max-w-md text-muted-foreground">
                    Thank you for reaching out. We'll review your details and get back to you within 48 hours.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-terracotta transition-colors hover:text-foreground"
                  >
                    Send another message <ArrowRight className="size-4" />
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-8">
                  <div className="grid gap-6 md:grid-cols-2">
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-sm font-medium text-foreground">
                        Full Name
                      </label>
                      <input
                        id="name"
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full rounded-md border border-input bg-background px-4 py-3 text-sm text-foreground outline-none transition-colors focus:border-terracotta focus:ring-1 focus:ring-terracotta"
                        placeholder="Aditi Rao"
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="email" className="text-sm font-medium text-foreground">
                        Email Address
                      </label>
                      <input
                        id="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full rounded-md border border-input bg-background px-4 py-3 text-sm text-foreground outline-none transition-colors focus:border-terracotta focus:ring-1 focus:ring-terracotta"
                        placeholder="aditi@example.com"
                      />
                    </div>
                  </div>

                  <div className="grid gap-6 md:grid-cols-2">
                    <div className="space-y-2">
                      <label htmlFor="occasion" className="text-sm font-medium text-foreground">
                        Occasion
                      </label>
                      <select
                        id="occasion"
                        value={formData.occasion}
                        onChange={(e) => setFormData({ ...formData, occasion: e.target.value })}
                        className="w-full rounded-md border border-input bg-background px-4 py-3 text-sm text-foreground outline-none transition-colors focus:border-terracotta focus:ring-1 focus:ring-terracotta"
                      >
                        <option>Wedding</option>
                        <option>Pre-Wedding Shoot</option>
                        <option>Portrait Session</option>
                        <option>Event / Festival</option>
                        <option>Brand / Editorial</option>
                        <option>Other</option>
                      </select>
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="date" className="text-sm font-medium text-foreground">
                        Event Date
                      </label>
                      <input
                        id="date"
                        type="date"
                        value={formData.date}
                        onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                        className="w-full rounded-md border border-input bg-background px-4 py-3 text-sm text-foreground outline-none transition-colors focus:border-terracotta focus:ring-1 focus:ring-terracotta"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-medium text-foreground">
                      Tell us about your vision
                    </label>
                    <textarea
                      id="message"
                      rows={5}
                      required
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full rounded-md border border-input bg-background px-4 py-3 text-sm text-foreground outline-none transition-colors focus:border-terracotta focus:ring-1 focus:ring-terracotta"
                      placeholder="Share a bit about your celebration, location, and what you're most excited about..."
                    />
                  </div>

                  <button
                    type="submit"
                    className="inline-flex w-full items-center justify-center gap-2 rounded-md bg-terracotta px-8 py-4 text-sm font-semibold text-white transition-colors hover:bg-terracotta/90 md:w-auto"
                  >
                    Send Inquiry
                    <ArrowRight className="size-4" />
                  </button>
                </form>
              )}
            </div>
          </div>

          {/* Contact Info */}
          <div className="lg:col-span-5">
            <div className="space-y-8">
              <div>
                <h2 className="font-display text-3xl font-medium text-foreground">Studio Details</h2>
                <p className="mt-2 text-muted-foreground">
                  Based in the heart of Jaipur, available for travel across India and worldwide.
                </p>
              </div>

              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="mt-1 rounded-full bg-terracotta/10 p-2 text-terracotta">
                    <Mail className="size-5" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-foreground">Email</p>
                    <a
                      href="mailto:hello@kaladrishti.com"
                      className="text-sm text-muted-foreground transition-colors hover:text-terracotta"
                    >
                      hello@kaladrishti.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="mt-1 rounded-full bg-terracotta/10 p-2 text-terracotta">
                    <Phone className="size-5" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-foreground">Phone</p>
                    <a
                      href="tel:+919876543210"
                      className="text-sm text-muted-foreground transition-colors hover:text-terracotta"
                    >
                      +91 98765 43210
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="mt-1 rounded-full bg-terracotta/10 p-2 text-terracotta">
                    <MapPin className="size-5" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-foreground">Studio</p>
                    <p className="text-sm text-muted-foreground">
                      12 Hawa Mahal Road
                      <br />
                      Jaipur, Rajasthan 302002
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="mt-1 rounded-full bg-terracotta/10 p-2 text-terracotta">
                    <Instagram className="size-5" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-foreground">Instagram</p>
                    <a
                      href="https://instagram.com/kaladrishti"
                      className="text-sm text-muted-foreground transition-colors hover:text-terracotta"
                    >
                      @kaladrishti
                    </a>
                  </div>
                </div>
              </div>

              <div className="rounded-lg border border-border bg-background p-6">
                <p className="font-display text-xl font-medium text-foreground">Response time</p>
                <p className="mt-2 text-sm text-muted-foreground">
                  We aim to respond to all inquiries within 48 hours. For urgent wedding-season bookings, please
                  mention your date and we'll prioritise your request.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Placeholder / Visual */}
      <section className="section-padding mx-auto max-w-7xl px-6">
        <div className="overflow-hidden rounded-lg bg-secondary/50">
          <div className="flex flex-col items-center justify-center gap-4 py-24 text-center">
            <MapPin className="size-12 text-terracotta" />
            <p className="font-display text-2xl font-medium text-foreground">Jaipur, Rajasthan</p>
            <p className="max-w-md text-sm text-muted-foreground">
              Our studio is located in the Pink City, within reach of India's most iconic heritage venues.
              We travel for love worldwide.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
