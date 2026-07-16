import { motion } from "framer-motion";
import {
  Watch,
  Wrench,
  Cog,
  Gem,
  BatteryCharging,
  Droplets,
  Link2,
  Sparkles,
  History,
} from "lucide-react";
import { Section, SectionHeading } from "./Section";
import { Reveal } from "./Reveal";

const SERVICES = [
  {
    icon: Watch,
    title: "ซ่อมนาฬิกาหรู",
    desc: "ตรวจวิเคราะห์และซ่อมนาฬิกากลไกและควอตซ์ระดับไฮเอนด์อย่างครบวงจร",
  },
  {
    icon: Wrench,
    title: "ล้างเครื่องครบวงจร",
    desc: "ถอดชิ้นส่วนทั้งหมด ล้างด้วยอัลตราโซนิก หยอดน้ำมัน และประกอบกลับตามค่ามาตรฐานโรงงาน",
  },
  {
    icon: Cog,
    title: "ดูแลกลไก",
    desc: "ปรับเที่ยงตรง เปลี่ยนลานหลัก และจับเวลาแม่นยำด้วยเครื่องไทม์กราฟเฟอร์อิเล็กทรอนิกส์",
  },
  {
    icon: Gem,
    title: "เปลี่ยนกระจกหน้าปัด",
    desc: "เปลี่ยนกระจกแซฟไฟร์และมิเนอรัล พร้อมซีลกันน้ำอย่างสมบูรณ์แบบ",
  },
  {
    icon: BatteryCharging,
    title: "เปลี่ยนถ่าน",
    desc: "เปลี่ยนถ่านแท้พร้อมซีลใหม่ และทดสอบกันน้ำซ้ำ",
  },
  {
    icon: Droplets,
    title: "ทดสอบกันน้ำ",
    desc: "ทดสอบแรงดันทั้งแบบแห้งและเปียกได้ถึง 10 ATM ด้วยเครื่องมือของเราเอง",
  },
  {
    icon: Link2,
    title: "ซ่อมสาย",
    desc: "ปรับข้อสาย ซ่อมบานพับ เปลี่ยนสปริงบาร์ และปรับแต่งเอ็นด์ลิงก์",
  },
  {
    icon: Sparkles,
    title: "ขัดเงาและปรับผิว",
    desc: "ปรับผิวตัวเรือนและสายโดยคงเส้นสายเดิมและรูปทรงมาตรฐานโรงงาน",
  },
  {
    icon: History,
    title: "บูรณะนาฬิกาวินเทจ",
    desc: "บูรณะนาฬิกาวินเทจอย่างพิถีพิถัน พร้อมจัดหาอะไหล่ที่ตรงยุคสมัย",
  },
];

export function ServicesGrid({
  compact = false,
}: {
  compact?: boolean;
}) {
  return (
    <Section tone="default">
      <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
        <SectionHeading
          eyebrow="บริการ"
          title={
            <>
              งานฝีมือประณีตในทุก <br className="hidden lg:block" />
              รายละเอียดของนาฬิกาคุณ
            </>
          }
          description={
            compact
              ? "ตั้งแต่เปลี่ยนถ่านไปจนถึงบูรณะนาฬิกาวินเทจแบบเต็มรูปแบบ ทุกบริการทำเองในเวิร์กช็อปของเรา"
              : "เก้าบริการเฉพาะทาง ทุกงานทำเองในเวิร์กช็อปโดยช่างนาฬิกาผู้ได้รับการรับรอง ด้วยเครื่องมือที่สอบเทียบแล้ว และอะไหล่แท้หรืออะไหล่ที่ตรงยุคสมัย"
          }
        />
      </div>

      <div className="mt-14 grid gap-px overflow-hidden rounded-2xl border border-border bg-border sm:grid-cols-2 lg:grid-cols-3">
        {SERVICES.map((s, i) => (
          <Reveal key={s.title} delay={i * 0.04}>
            <motion.article
              whileHover={{ y: -2 }}
              transition={{ duration: 0.3 }}
              className="group relative flex h-full flex-col gap-5 bg-background p-8 transition-colors hover:bg-[color:var(--surface)] lg:p-10"
            >
              <div className="flex items-center justify-between">
                <div className="grid h-12 w-12 place-items-center rounded-xl bg-[color:var(--surface)] text-ink transition-colors group-hover:bg-[color:var(--ink)] group-hover:text-white">
                  <s.icon className="h-5 w-5" />
                </div>
                <span className="font-display text-xs tabular-nums text-ink-soft/60">
                  0{i + 1}
                </span>
              </div>
              <h3 className="font-display text-xl font-semibold text-ink">{s.title}</h3>
              <p className="text-sm leading-relaxed text-ink-soft">{s.desc}</p>
              <div className="mt-auto h-px w-8 bg-[color:var(--brand-accent)] transition-all duration-500 group-hover:w-16" />
            </motion.article>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
