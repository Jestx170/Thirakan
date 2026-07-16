import { createFileRoute, Link } from "@tanstack/react-router";
import { Check, ArrowRight } from "lucide-react";
import { PageHero } from "@/components/site/PageHero";
import { Section, SectionHeading } from "@/components/site/Section";
import { Reveal } from "@/components/site/Reveal";
import { FAQ } from "@/components/site/FAQ";

const TIERS = [
  {
    name: "บริการพื้นฐาน",
    price: "เริ่มต้น €180",
    desc: "สำหรับการดูแลทั่วไปและการปรับแต่งเล็กน้อย",
    features: [
      "เปลี่ยนถ่าน",
      "เปลี่ยนซีลและทดสอบกันน้ำซ้ำ",
      "ปรับขนาดสาย",
      "ทำความสะอาดภายนอก",
      "เสร็จภายใน 48 ชั่วโมง",
    ],
  },
  {
    name: "ล้างเครื่องครบวงจร",
    price: "เริ่มต้น €580",
    desc: "บริการกลไกเต็มรูปแบบตามค่ามาตรฐานโรงงาน",
    features: [
      "ถอดกลไกทั้งหมด",
      "ล้างด้วยอัลตราโซนิก",
      "หยอดน้ำมัน Moebius ใหม่",
      "ปรับเที่ยงตรงด้วยไทม์กราฟเฟอร์",
      "เปลี่ยนซีลใหม่และทดสอบแรงดัน",
      "รับประกันจากเวิร์กช็อป 12 เดือน",
    ],
    highlighted: true,
  },
  {
    name: "บูรณะนาฬิกาวินเทจ",
    price: "สอบถามราคา",
    desc: "บูรณะนาฬิกาสะสมอย่างพิถีพิถัน",
    features: [
      "ปรับผิวตัวเรือนและสาย",
      "ประเมินหน้าปัดและเข็ม",
      "จัดหาอะไหล่ที่ตรงยุคสมัย",
      "อนุรักษ์กลไก",
      "จัดทำเอกสารประวัติความเป็นมา",
    ],
  },
];

export const Route = createFileRoute("/pricing")({
  head: () => ({
    meta: [
      { title: "ราคา — Atelier Horloge" },
      {
        name: "description",
        content:
          "ราคาโดยประมาณที่โปร่งใสสำหรับการเปลี่ยนถ่าน ล้างเครื่องครบวงจร และบูรณะนาฬิกาวินเทจ ทุกงานคิดราคาเฉพาะเรือนก่อนเริ่มงาน",
      },
      { property: "og:title", content: "ราคา — Atelier Horloge" },
      { property: "og:description", content: "ราคาโดยประมาณสำหรับบริการในเวิร์กช็อปของเรา" },
      { property: "og:url", content: "/pricing" },
    ],
    links: [{ rel: "canonical", href: "/pricing" }],
  }),
  component: PricingPage,
});

function PricingPage() {
  return (
    <>
      <PageHero
        eyebrow="ราคา"
        title="โปร่งใส แจกแจงชัดเจน ตกลงล่วงหน้าเสมอ"
        description="ราคาโดยประมาณสำหรับบริการที่พบบ่อยที่สุดของเรา นาฬิกาแต่ละเรือนไม่เหมือนกัน เราจะส่งใบประเมินราคาเป็นลายลักษณ์อักษรก่อนเริ่มงานทุกครั้ง"
      />
      <Section>
        <div className="grid gap-6 lg:grid-cols-3">
          {TIERS.map((t, i) => (
            <Reveal key={t.name} delay={i * 0.1}>
              <div
                className={`flex h-full flex-col rounded-2xl border p-8 transition-all lg:p-10 ${
                  t.highlighted
                    ? "border-transparent bg-[color:var(--ink)] text-white shadow-elegant lg:-translate-y-4"
                    : "border-border bg-background hover:-translate-y-1 hover:shadow-elegant"
                }`}
              >
                <div>
                  <h3 className="font-display text-xl font-semibold">{t.name}</h3>
                  <p
                    className={`mt-2 text-sm leading-relaxed ${
                      t.highlighted ? "text-white/70" : "text-ink-soft"
                    }`}
                  >
                    {t.desc}
                  </p>
                  <div className="mt-8 font-display text-4xl font-semibold">{t.price}</div>
                </div>
                <ul className="mt-8 space-y-3 text-sm">
                  {t.features.map((f) => (
                    <li key={f} className="flex items-start gap-3">
                      <Check
                        className={`mt-0.5 h-4 w-4 shrink-0 ${
                          t.highlighted
                            ? "text-[color:var(--sky)]"
                            : "text-[color:var(--brand-accent)]"
                        }`}
                      />
                      <span className={t.highlighted ? "text-white/85" : "text-ink"}>{f}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  to="/contact"
                  className={`mt-10 inline-flex items-center justify-center gap-2 rounded-xl px-5 py-3 text-sm font-semibold transition-colors ${
                    t.highlighted
                      ? "bg-white text-ink hover:bg-white/90"
                      : "bg-[color:var(--ink)] text-white hover:bg-[color:var(--brand-accent)]"
                  }`}
                >
                  ขอประเมินราคา
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section tone="muted">
        <SectionHeading
          eyebrow="บริการเพิ่มเติม"
          title="บริการเฉพาะรายการ สอบถามราคาได้"
        />
        <div className="mt-10 grid gap-x-10 gap-y-3 text-sm text-ink-soft sm:grid-cols-2 lg:grid-cols-3">
          {[
            "เปลี่ยนกระจกหน้าปัด",
            "เปลี่ยนเม็ดมะยมและก้าน",
            "ซ่อมข้อสาย / บานพับ",
            "ขัดเงาตัวเรือนและสาย",
            "ตรวจสอบความแท้ของกลไก",
            "ปรับผิวหน้าปัด",
            "ลงพรายน้ำเข็ม (วินเทจ)",
            "ทดสอบกันน้ำอย่างเดียว",
            "ตรวจสภาพก่อนซื้อ",
          ].map((s) => (
            <div key={s} className="flex items-center justify-between border-b border-border py-3">
              <span className="text-ink">{s}</span>
              <span className="text-xs uppercase tracking-wider">สอบถามราคา</span>
            </div>
          ))}
        </div>
      </Section>

      <FAQ />
    </>
  );
}
