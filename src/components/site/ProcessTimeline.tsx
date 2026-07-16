import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";
import { Section } from "./Section";
import { Reveal } from "./Reveal";

const LINE_URL = "https://line.me/R/ti/p/@282cafil";

const STEPS = [
  {
    title: "แจ้งอาการ",
    desc: "ส่งภาพและอธิบายปัญหาผ่าน LINE ได้ทันที ไม่ต้องเดินทาง",
  },
  {
    title: "ประเมินราคา",
    desc: "ผู้เชี่ยวชาญตรวจสอบและแจ้งราคาซ่อมฟรี ภายใน 24 ชั่วโมง",
  },
  {
    title: "ยืนยันงาน",
    desc: "เมื่อยืนยัน จัดส่งนาฬิกามาให้เราอย่างปลอดภัยทั่วประเทศ",
  },
  {
    title: "ซ่อมแซม",
    desc: "ช่างผู้เชี่ยวชาญดูแลทุกขั้นตอนอย่างพิถีพิถัน มาตรฐานสูง",
  },
  {
    title: "ส่งคืน",
    desc: "จัดส่งกลับถึงมือท่านอย่างปลอดภัย พร้อมรับประกัน 12 เดือน",
  },
];

function StepNumber({ index, active }: { index: number; active?: boolean }) {
  return (
    <div
      className={
        active
          ? "grid h-20 w-20 place-items-center rounded-full bg-[color:var(--brand)] font-display text-2xl font-semibold text-white shadow-soft"
          : "grid h-20 w-20 place-items-center rounded-full border-2 border-border bg-background font-display text-2xl font-semibold text-[color:var(--sky)]"
      }
    >
      {String(index + 1).padStart(2, "0")}
    </div>
  );
}

export function ProcessTimeline() {
  return (
    <Section tone="default">
      {/* Centered heading */}
      <div className="mx-auto max-w-2xl text-center">
        <span className="text-lg font-semibold uppercase tracking-[0.2em] text-[color:var(--brand)]">
          ขั้นตอนการซ่อม
        </span>
        <h2 className="mt-4 font-display text-3xl font-semibold text-ink sm:text-4xl lg:text-5xl">
          ง่าย สะดวก รวดเร็ว
        </h2>
        <p className="mt-5 text-base leading-relaxed text-ink-soft sm:text-lg">
          5 ขั้นตอนง่ายๆ ไม่ต้องออกจากบ้าน ส่งซ่อมได้ทั่วประเทศ
        </p>
      </div>

      <div className="mt-16">
        {/* Desktop horizontal timeline */}
        <div className="relative hidden lg:block">
          {/* connecting line + leading dot, centered on the circles (top-10 = center of h-20) */}
          <div className="absolute left-0 right-0 top-10 h-px bg-border" />
          <span className="absolute left-0 top-10 h-2 w-2 -translate-y-1/2 rounded-full bg-[color:var(--brand)]" />
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1.4, ease: "easeInOut" }}
            style={{ transformOrigin: "left" }}
            className="absolute left-0 right-0 top-10 h-px bg-[color:var(--brand)]"
          />
          <div className="relative grid grid-cols-5 gap-6">
            {STEPS.map((s, i) => (
              <Reveal key={s.title} delay={i * 0.12}>
                <div className="flex flex-col items-center text-center">
                  <StepNumber index={i} active={i === 0 || i === STEPS.length - 1} />
                  <h3
                    className={
                      i === 0 || i === STEPS.length - 1
                        ? "mt-6 font-display text-lg font-semibold text-[color:var(--brand)]"
                        : "mt-6 font-display text-lg font-semibold text-ink"
                    }
                  >
                    {s.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink-soft">{s.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        {/* Mobile stacked timeline */}
        <div className="space-y-10 lg:hidden">
          {STEPS.map((s, i) => (
            <Reveal key={s.title} delay={i * 0.08}>
              <div className="flex flex-col items-center text-center">
                <StepNumber index={i} active={i === 0 || i === STEPS.length - 1} />
                <h3
                  className={
                    i === 0 || i === STEPS.length - 1
                      ? "mt-4 font-display text-lg font-semibold text-[color:var(--brand)]"
                      : "mt-4 font-display text-lg font-semibold text-ink"
                  }
                >
                  {s.title}
                </h3>
                <p className="mt-2 max-w-xs text-sm leading-relaxed text-ink-soft">{s.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>

      {/* CTA */}
      <Reveal>
        <div className="mt-16 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <a
            href={LINE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-full bg-[color:var(--brand)] px-8 py-4 text-base font-semibold text-white shadow-soft transition-transform hover:-translate-y-0.5"
          >
            <MessageCircle className="h-5 w-5" />
            ประเมินราคาซ่อมฟรีตอนนี้
          </a>
          <p className="text-sm text-ink-soft">ฟรีค่าประเมิน · ไม่มีค่าใช้จ่ายแอบแฝง</p>
        </div>
      </Reveal>
    </Section>
  );
}
