import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
  useRouterState,
} from "@tanstack/react-router";
import { useState, useEffect, type ReactNode } from "react";
import { Menu, X } from "lucide-react";

import appCss from "../styles.css?url";
import { reportLovableError } from "../lib/lovable-error-reporting";
import { BrandProvider } from '@/components/brand-demo/BrandProvider';
import { OnboardingModal, BrandResetButton } from '@/components/brand-demo/OnboardingModal';

const navLinks = [
  { to: "/" as const, label: "Home" },
  { to: "/portfolio" as const, label: "Portfolio" },
  { to: "/services" as const, label: "Services" },
  { to: "/about" as const, label: "About" },
  { to: "/pricing" as const, label: "Pricing" },
  { to: "/contact" as const, label: "Contact" },
];

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="font-display text-7xl font-bold text-foreground">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-foreground">Page not found</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Go home
          </Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="font-display text-xl font-semibold tracking-tight text-foreground">
          This page didn't load
        </h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Something went wrong on our end. You can try refreshing or head back home.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Try again
          </button>
          <a
            href="/"
            className="inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent"
          >
            Go home
          </a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Kala Drishti Photography — Indian Wedding & Portrait Studio" },
      {
        name: "description",
        content:
          "Kala Drishti is an Indian photography studio capturing weddings, portraits, festivals, and heritage across India and beyond. Documentary-first, editorial craft.",
      },
      { name: "author", content: "Kala Drishti Photography" },
      {
        property: "og:title",
        content: "Kala Drishti Photography — Indian Wedding & Portrait Studio",
      },
      {
        property: "og:description",
        content:
          "Kala Drishti is an Indian photography studio capturing weddings, portraits, festivals, and heritage across India and beyond.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:site", content: "@kaladrishti" },
    ],
    links: [
      {
        rel: "stylesheet",
        href: appCss,
      },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600&family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500&display=swap",
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function Header() {
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/90 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
        <Link to="/" className="font-display text-2xl font-semibold tracking-tight text-foreground">
          <span data-brand-text="business-name">Kala</span> <span className="text-terracotta">Drishti</span>
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              activeProps={{ className: "text-terracotta" }}
              className={`text-sm font-medium transition-colors hover:text-terracotta ${pathname === link.to ? "text-terracotta" : "text-muted-foreground"}`}
            >
              {link.label}
            </Link>
          ))}
          <Link
            to="/contact"
            className="rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Book Now
          </Link>
        </nav>

        <button
          className="md:hidden"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
        >
          {menuOpen ? <X className="size-6" /> : <Menu className="size-6" />}
        </button>
      </div>

      {menuOpen && (
        <div className="border-b border-border bg-background px-6 py-4 md:hidden">
          <nav className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className={`text-sm font-medium transition-colors hover:text-terracotta ${pathname === link.to ? "text-terracotta" : "text-muted-foreground"}`}
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}

function Footer() {
  return (
    <footer className="border-t border-border bg-background">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-12 md:grid-cols-3">
          <div className="space-y-4">
            <Link to="/" className="font-display text-2xl font-semibold tracking-tight text-foreground">
              <span data-brand-text="business-name">Kala</span> <span className="text-terracotta">Drishti</span>
            </Link>
            <p className="max-w-xs text-sm leading-relaxed text-muted-foreground">
              Documentary-first photography for Indian weddings, portraits, and heritage stories. Based in
              Jaipur, traveling worldwide.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-8">
            <div className="space-y-4">
              <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">Explore</p>
              <ul className="space-y-2 text-sm text-muted-foreground">
                {navLinks.map((link) => (
                  <li key={link.to}>
                    <Link to={link.to} className="transition-colors hover:text-terracotta">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div className="space-y-4">
              <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">Connect</p>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <a href="https://instagram.com" className="transition-colors hover:text-terracotta">
                    Instagram
                  </a>
                </li>
                <li>
                  <a href="https://pinterest.com" className="transition-colors hover:text-terracotta">
                    Pinterest
                  </a>
                </li>
                <li>
                  <a href="mailto:hello@kaladrishti.com" className="transition-colors hover:text-terracotta">
                    hello@kaladrishti.com
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="md:text-right">
            <p className="text-sm text-muted-foreground">
              Available for commissions worldwide.
              <br />
              Currently booking 2025-2026 season.
            </p>
            <div className="mt-4 inline-flex items-center gap-2 rounded-full bg-secondary px-4 py-2 text-xs font-medium">
              <span className="relative flex size-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-sage opacity-75"></span>
                <span className="relative inline-flex size-2 rounded-full bg-sage"></span>
              </span>
              Accepting bookings
            </div>
          </div>
        </div>

        <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-border pt-8 text-xs text-muted-foreground md:flex-row">

          <div>
            <a href="/admin" className="text-sm hover:underline transition">🔑 Admin Console</a>
          </div>
          <p>© 2025 Kala Drishti Photography. All rights reserved.</p>
          <p>Fine art photography from the heart of India.</p>
        </div>
        <div className="mt-4 text-center text-xs text-muted-foreground">
          Developer: Aniruddha Das | Developed by LeadSpree Business Solutions
        </div>
      </div>
    </footer>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();

  return (
    <QueryClientProvider client={queryClient}>
      <BrandProvider>
      <OnboardingModal />
      <BrandResetButton />
      <Header />
      <main className="min-h-[50vh]">
        <Outlet />
      </main>
      <Footer />
    </BrandProvider>
    </QueryClientProvider>
  );
}
