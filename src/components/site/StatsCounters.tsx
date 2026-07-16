import { useEffect, useRef, useState } from "react";
import { useInView, motion, useMotionValue, animate } from "framer-motion";
import { Section } from "./Section";

const STATS = [
  { value: 15, suffix: "+", label: "ปีแห่งประสบการณ์" },
  { value: 10000, suffix: "+", label: "งานซ่อมที่สำเร็จ" },
  { value: 98, suffix: "%", label: "ความพึงพอใจของลูกค้า" },
  { value: 12, suffix: " เดือน", label: "การรับประกัน" },
];

function Counter({ to, suffix }: { to: number; suffix: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const mv = useMotionValue(0);
  const [display, setDisplay] = useState("0");

  useEffect(() => {
    if (!inView) return;
    const controls = animate(mv, to, {
      duration: 2,
      ease: [0.22, 1, 0.36, 1],
      onUpdate: (v) => {
        setDisplay(Math.round(v).toLocaleString("en-US"));
      },
    });
    return () => controls.stop();
  }, [inView, to, mv]);

  return (
    <span ref={ref} className="tabular-nums">
      {display}
      {suffix}
    </span>
  );
}

export function StatsCounters() {
  return (
    <Section tone="default">
      <div className="grid gap-12 rounded-3xl border border-border bg-[color:var(--surface)] px-6 py-16 sm:grid-cols-2 sm:px-10 lg:grid-cols-4 lg:px-16 lg:py-20">
        {STATS.map((s, i) => (
          <motion.div
            key={s.label}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ delay: i * 0.1, duration: 0.6 }}
            className="text-center lg:text-left"
          >
            <div className="font-display text-5xl font-semibold text-ink sm:text-6xl">
              <Counter to={s.value} suffix={s.suffix} />
            </div>
            <div className="mt-3 text-xs font-semibold uppercase tracking-[0.2em] text-ink-soft">
              {s.label}
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
