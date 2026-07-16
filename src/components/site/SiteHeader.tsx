import { useEffect, useState } from "react";
import { Link, useRouterState } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { NAV_LINKS } from "./nav";
import { cn } from "@/lib/utils";
import logo from "@/assets/logo.png";

export function SiteHeader() {
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const isHome = pathname === "/";
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  const solid = true;

  return (
    <motion.header
      initial={{ y: -12, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        solid
          ? "border-b border-border bg-background/90 backdrop-blur-md"
          : "border-b border-transparent bg-transparent",
      )}
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8 lg:h-20">
        <Link to="/" className="flex items-center" aria-label="Atelier Horloge">
          <img
            src={logo}
            alt="Atelier Horloge"
            className="h-7 w-auto lg:h-12"
          />
        </Link>

        <nav className="hidden items-center gap-8 lg:flex">
          {NAV_LINKS.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className={cn(
                "text-sm font-medium transition-colors",
                solid ? "text-ink/70 hover:text-ink" : "text-white/85 hover:text-white",
              )}
              activeProps={{
                className: solid ? "text-ink" : "text-white",
              }}
              activeOptions={{ exact: l.to === "/" }}
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <Link
            to="/contact"
            className={cn(
              "hidden rounded-lg px-4 py-2 text-sm font-semibold transition-all lg:inline-flex",
              solid
                ? "bg-[color:var(--brand)] text-white hover:bg-[color:var(--brand-accent)]"
                : "bg-white text-ink hover:bg-white/90",
            )}
          >
            จองซ่อม
          </Link>
          <button
            aria-label={open ? "ปิดเมนู" : "เปิดเมนู"}
            onClick={() => setOpen((v) => !v)}
            className={cn(
              "grid h-10 w-10 place-items-center rounded-lg lg:hidden",
              solid ? "text-ink" : "text-white",
            )}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="border-t border-border bg-background lg:hidden">
          <nav className="mx-auto flex max-w-7xl flex-col gap-1 px-4 py-4 sm:px-6">
            {NAV_LINKS.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                className="rounded-md px-3 py-3 text-base font-medium text-ink/80 hover:bg-muted"
                activeProps={{ className: "bg-muted text-ink" }}
                activeOptions={{ exact: l.to === "/" }}
              >
                {l.label}
              </Link>
            ))}
            <Link
              to="/contact"
              className="mt-2 rounded-lg bg-[color:var(--brand)] px-4 py-3 text-center text-sm font-semibold text-white hover:bg-[color:var(--brand-accent)]"
            >
              จองซ่อม
            </Link>
          </nav>
        </div>
      )}
    </motion.header>
  );
}
