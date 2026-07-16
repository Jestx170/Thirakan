import { Star } from "lucide-react";
import { Section, SectionHeading } from "./Section";
import { Reveal } from "./Reveal";

const REVIEWS = [
  {
    name: "คุณกิตติ ล.",
    role: "นักสะสมนาฬิกาวินเทจ",
    quote:
      "พวกเขาชุบชีวิตโครโนกราฟปี 1967 ที่ผมคิดว่าหมดหวังแล้วให้กลับมา หน้าปัดและเข็มยังเป็นของเดิม กลไกเดินตรงตามสเปก และตัวเรือนยังคงรูปทรงมาตรฐานโรงงาน สุดยอดจริง ๆ",
    watch: "โครโนกราฟ · 1967",
  },
  {
    name: "คุณศิริพร ร.",
    role: "ลูกค้าตั้งแต่ปี 2019",
    quote:
      "ประเมินราคาโปร่งใส แจ้งกำหนดเวลาตามจริง งานเนี้ยบไร้ที่ติ ทุกครั้งที่รับนาฬิกากลับมาดีกว่าที่คาดไว้เสมอ และมีใบรับประกันให้ทุกครั้ง",
    watch: "นาฬิกาดำน้ำออโตเมติก",
  },
  {
    name: "คุณดนัย ก.",
    role: "ลูกค้าครั้งแรก",
    quote:
      "ผมกังวลมากตอนส่งมอบนาฬิกามรดกตกทอดของครอบครัว แต่การสื่อสาร ความใส่ใจ และงานฝีมือของพวกเขาทำให้ผมสบายใจอย่างที่สุด มันไม่เคยเดินดีขนาดนี้ในรอบยี่สิบปี",
    watch: "นาฬิกาเดรส · มรดกตกทอด",
  },
];

export function Testimonials() {
  return (
    <Section tone="default">
      <SectionHeading
        eyebrow="เสียงจากลูกค้า"
        title="ได้รับความไว้วางใจทั้งจากนักสะสมและลูกค้าครั้งแรก"
      />

      <div className="mt-14 grid gap-8 md:grid-cols-3">
        {REVIEWS.map((r, i) => (
          <Reveal key={r.name} delay={i * 0.1}>
            <figure className="flex h-full flex-col justify-between rounded-2xl border border-border bg-background p-8 transition-all hover:-translate-y-1 hover:shadow-elegant">
              <div>
                <div className="flex gap-0.5 text-[color:var(--brand-accent)]">
                  {Array.from({ length: 5 }).map((_, k) => (
                    <Star key={k} className="h-4 w-4 fill-current" />
                  ))}
                </div>
                <blockquote className="mt-6 font-display text-lg leading-relaxed text-ink">
                  “{r.quote}”
                </blockquote>
              </div>
              <figcaption className="mt-8 border-t border-border pt-5">
                <div className="text-sm font-semibold text-ink">{r.name}</div>
                <div className="mt-1 text-xs uppercase tracking-wider text-ink-soft">
                  {r.role} · {r.watch}
                </div>
              </figcaption>
            </figure>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
