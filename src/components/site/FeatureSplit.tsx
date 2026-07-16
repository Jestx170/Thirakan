import { CheckCircle2 } from "lucide-react";
import workshop from "@/assets/workshop.jpg";
import movement from "@/assets/movement.jpg";
import { Reveal } from "./Reveal";
import { Eyebrow } from "./Section";

const CALLOUTS = [
  "โต๊ะช่างป้องกันสนามแม่เหล็กและควบคุมอุณหภูมิ",
  "ตรวจกลไกทุกชิ้นภายใต้กำลังขยาย 20 เท่า",
  "อนุมัติใบประเมินราคาก่อนเริ่มงานทุกครั้ง",
];

export function FeatureSplit() {
  return (
    <section className="bg-[color:var(--ink)] py-24 text-white lg:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-16 lg:grid-cols-12 lg:items-center">
          <div className="lg:col-span-6">
            <Reveal>
              <div className="relative overflow-hidden rounded-2xl">
                <img
                  src={workshop}
                  alt="เวิร์กช็อป Atelier Horloge"
                  className="aspect-[4/5] w-full object-cover"
                  loading="lazy"
                  width={1600}
                  height={1200}
                />
              </div>
            </Reveal>
            <Reveal delay={0.15}>
              <div className="mt-6 hidden overflow-hidden rounded-2xl lg:block">
                <img
                  src={movement}
                  alt="กลไกนาฬิกาที่กำลังได้รับการดูแล"
                  className="aspect-[16/9] w-full object-cover"
                  loading="lazy"
                  width={1600}
                  height={1200}
                />
              </div>
            </Reveal>
          </div>

          <div className="lg:col-span-6 lg:pl-8">
            <Reveal>
              <Eyebrow>อาเทลิเยร์ของเรา</Eyebrow>
              <h2 className="mt-5 font-display text-3xl font-semibold leading-tight sm:text-4xl lg:text-5xl">
                เวิร์กช็อปที่เงียบสงบ กับมาตรฐานที่ไม่ยอมประนีประนอม
              </h2>
              <p className="mt-6 text-lg leading-relaxed text-white/70">
                นาฬิกาทุกเรือนที่มาถึงโต๊ะช่างของเราได้รับความใส่ใจเดียวกับที่เราให้กับนาฬิกา
                ในคอลเลกชันของเราเอง เราทำงานอย่างช้า ๆ พิถีพิถัน และเคารพงานวิศวกรรม
                ดั้งเดิมเสมอ
              </p>
            </Reveal>

            <div className="mt-10 space-y-4">
              {CALLOUTS.map((c, i) => (
                <Reveal key={c} delay={0.1 + i * 0.08}>
                  <div className="flex items-start gap-4 rounded-xl border border-white/10 bg-white/[0.03] p-5 backdrop-blur-sm transition-colors hover:border-white/25">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-[color:var(--sky)]" />
                    <span className="text-sm leading-relaxed text-white/90">{c}</span>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
