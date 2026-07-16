import { Award, Cpu, PackageCheck, ShieldCheck } from "lucide-react";
import { Section, SectionHeading } from "./Section";
import { Reveal } from "./Reveal";

const ITEMS = [
  {
    icon: Award,
    title: "ช่างนาฬิกาผู้ได้รับการรับรอง",
    desc: "ช่างนาฬิกาที่ผ่านการอบรมมาตรฐาน WOSTEP พร้อมประสบการณ์งานช่างมืออาชีพกว่าสิบปี",
  },
  {
    icon: Cpu,
    title: "เครื่องมือระดับพรีเมียม",
    desc: "เครื่องไทม์กราฟเฟอร์ Witschi เครื่องล้างอัลตราโซนิก และเครื่องทดสอบแรงดันที่สอบเทียบแล้ว",
  },
  {
    icon: PackageCheck,
    title: "อะไหล่แท้สำหรับเปลี่ยน",
    desc: "อะไหล่แท้จากผู้ผลิต และการจัดหาอะไหล่ตรงยุคสมัยสำหรับนาฬิกาวินเทจ",
  },
  {
    icon: ShieldCheck,
    title: "รับประกันบริการ 12 เดือน",
    desc: "ทุกบริการเต็มรูปแบบครอบคลุมด้วยการรับประกันจากเวิร์กช็อปนานหนึ่งปี",
  },
];

export function WhyChooseUs() {
  return (
    <Section tone="muted">
      <SectionHeading
        eyebrow="ทำไมต้องเลือกเรา"
        title="สี่เหตุผลที่นักสะสมไว้วางใจงานช่างของเรา"
        description="เรารวมความรู้ด้านการทำนาฬิกาอย่างเป็นระบบ เครื่องมือที่ไม่มีการประนีประนอม และกระบวนการควบคุมคุณภาพที่เข้มงวด พร้อมการรับประกันในทุกงาน"
      />

      <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
        {ITEMS.map((it, i) => (
          <Reveal key={it.title} delay={i * 0.08}>
            <div className="group relative flex h-full flex-col gap-6 rounded-2xl border border-border bg-background p-8 transition-all hover:-translate-y-1 hover:shadow-elegant">
              <div className="flex items-baseline justify-between">
                <div className="grid h-14 w-14 place-items-center rounded-xl bg-[color:var(--ink)] text-white transition-transform group-hover:scale-105">
                  <it.icon className="h-6 w-6" />
                </div>
                <span className="font-display text-2xl font-semibold text-ink/10 tabular-nums">
                  0{i + 1}
                </span>
              </div>
              <div>
                <h3 className="font-display text-lg font-semibold text-ink">{it.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-soft">{it.desc}</p>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
