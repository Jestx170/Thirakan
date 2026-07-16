import { MapPin, Phone, Clock, MessageCircle, Facebook, Music2 } from "lucide-react";
import { Section, SectionHeading } from "./Section";
import { Reveal } from "./Reveal";

export function ContactBlock() {
  return (
    <Section tone="muted" id="contact">
      <SectionHeading
        eyebrow="เยี่ยมชมอาเทลิเยร์"
        title="แวะมาหาเรา หรือส่งแบบมีประกัน"
        description="ยินดีต้อนรับทุกท่านเข้ามาที่ร้านของเรา สามารถนัดหมายล่วงหน้าเพื่อเข้ารับบริการ หรือหากไม่สะดวกเดินทาง ก็ส่งนาฬิกามาซ่อมกับเราได้จากทุกพื้นที่ ผ่านบริการจัดส่งแบบมีประกัน"
      />

      <div className="mt-14 grid gap-8 lg:grid-cols-12">
        <Reveal className="lg:col-span-7">
          <div className="overflow-hidden rounded-3xl border border-border shadow-soft">
            <iframe
              title="ตำแหน่งที่ตั้ง Atelier Horloge"
              className="aspect-[16/10] w-full grayscale contrast-95"
              src="https://www.openstreetmap.org/export/embed.html?bbox=100.77%2C13.96%2C100.80%2C13.99&layer=mapnik&marker=13.977%2C100.786"
              loading="lazy"
            />
          </div>
        </Reveal>

        <div className="space-y-4 lg:col-span-5">
          <Reveal>
            <InfoCard icon={MapPin} label="ที่อยู่">
              ร้านนาฬิกา Pp.Protime สาขาตลาดชัชวาลลำลูกกาคลอง 7
              <br />
              (ติดศาลพระพรหม ตรงข้าม DIY)
              <br />
              เลขที่ 99/9 ม.4 ต.บึงคำพร้อย อ.ลำลูกกา จ.ปทุมธานี 12250
            </InfoCard>
          </Reveal>
          <Reveal delay={0.05}>
            <InfoCard icon={Phone} label="โทรศัพท์">
              <a href="tel:+66924437007" className="hover:text-ink">
                092-443-7007
              </a>{" "}
              (คุณสุพัฒน์)
            </InfoCard>
          </Reveal>
          <Reveal delay={0.1}>
            <InfoCard icon={MessageCircle} label="LINE">
              <a
                href="https://line.me/R/ti/p/@282cafil"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-ink"
              >
                @thirakan
              </a>
            </InfoCard>
          </Reveal>
          <Reveal delay={0.15}>
            <InfoCard icon={Clock} label="เวลาทำการ">
              จันทร์–ศุกร์ · 09:00 – 18:00
              <br />
              เสาร์ · 10:00 – 16:00
              <br />
              อาทิตย์ · ปิดทำการ
            </InfoCard>
          </Reveal>

          <Reveal delay={0.2}>
            <div className="flex gap-3 pt-2">
              <a
                href="https://line.me/R/ti/p/@282cafil"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex flex-1 items-center justify-center gap-2 rounded-xl bg-[#06C755] px-5 py-3.5 text-sm font-semibold text-white transition-transform hover:-translate-y-0.5"
              >
                <MessageCircle className="h-4 w-4" />
                LINE
              </a>
              <a
                href="https://www.facebook.com/share/18sgsf8FRf/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex flex-1 items-center justify-center gap-2 rounded-xl bg-[#1877F2] px-5 py-3.5 text-sm font-semibold text-white transition-transform hover:-translate-y-0.5"
              >
                <Facebook className="h-4 w-4" />
                Facebook
              </a>
              <a
                href="https://www.tiktok.com/@thirakan_official"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex flex-1 items-center justify-center gap-2 rounded-xl bg-[#010101] px-5 py-3.5 text-sm font-semibold text-white transition-transform hover:-translate-y-0.5"
              >
                <Music2 className="h-4 w-4" />
                TikTok
              </a>
            </div>
          </Reveal>
        </div>
      </div>
    </Section>
  );
}

function InfoCard({
  icon: Icon,
  label,
  children,
}: {
  icon: typeof MapPin;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex items-start gap-4 rounded-2xl border border-border bg-background p-5">
      <div className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-[color:var(--ink)] text-white">
        <Icon className="h-5 w-5" />
      </div>
      <div>
        <div className="text-xs font-semibold uppercase tracking-wider text-ink-soft">{label}</div>
        <div className="mt-1 text-sm leading-relaxed text-ink">{children}</div>
      </div>
    </div>
  );
}
