import { useState, type FormEvent } from "react";
import { motion } from "framer-motion";
import { toast } from "sonner";
import { Upload, ArrowRight } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Section, SectionHeading } from "./Section";

export function BookingForm() {
  const [submitting, setSubmitting] = useState(false);
  const [fileName, setFileName] = useState<string | null>(null);

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitting(true);
    await new Promise((r) => setTimeout(r, 700));
    setSubmitting(false);
    (e.target as HTMLFormElement).reset();
    setFileName(null);
    toast.success("รับคำขอซ่อมเรียบร้อยแล้ว", {
      description: "อาเทลิเยร์ของเราจะตอบกลับภายในหนึ่งวันทำการ",
    });
  };

  return (
    <Section tone="default" id="book">
      <div className="grid gap-12 lg:grid-cols-12">
        <div className="lg:col-span-4">
          <SectionHeading
            eyebrow="จองซ่อม"
            title="เล่าให้เราฟังเกี่ยวกับนาฬิกาของคุณ"
            description="บอกรายละเอียดเล็กน้อยพร้อมรูปภาพ (ถ้ามี) เราจะตอบกลับด้วยตัวเองภายในหนึ่งวันทำการ พร้อมประเมินราคาเบื้องต้นและขั้นตอนถัดไป"
          />
          <ul className="mt-10 space-y-4 text-sm text-ink-soft">
            {[
              "ไม่มีข้อผูกมัด ไม่มีค่าใช้จ่ายล่วงหน้า",
              "รับส่งพร้อมประกันทั้งขาไปและขากลับ",
              "ประเมินราคาเป็นลายลักษณ์อักษรก่อนเริ่มงาน",
            ].map((t) => (
              <li key={t} className="flex items-center gap-3">
                <span className="h-1.5 w-1.5 rounded-full bg-[color:var(--brand-accent)]" />
                {t}
              </li>
            ))}
          </ul>
        </div>

        <motion.form
          onSubmit={onSubmit}
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="rounded-3xl border border-border bg-background p-6 shadow-soft sm:p-10 lg:col-span-8"
        >
          <div className="grid gap-5 sm:grid-cols-2">
            <Field id="name" label="ชื่อ-นามสกุล" required>
              <Input id="name" name="name" required placeholder="เช่น สมชาย ใจดี" />
            </Field>
            <Field id="phone" label="โทรศัพท์" required>
              <Input id="phone" name="phone" type="tel" required placeholder="เช่น 08x-xxx-xxxx" />
            </Field>
            <Field id="email" label="อีเมล" required className="sm:col-span-2">
              <Input id="email" name="email" type="email" required placeholder="you@example.com" />
            </Field>
            <Field id="brand" label="ยี่ห้อนาฬิกา" required>
              <Input id="brand" name="brand" required placeholder="เช่น Omega" />
            </Field>
            <Field id="model" label="รุ่น / เลขอ้างอิง">
              <Input id="model" name="model" placeholder="เช่น Speedmaster 3570.50" />
            </Field>
            <Field id="problem" label="รายละเอียดปัญหา" required className="sm:col-span-2">
              <Textarea
                id="problem"
                name="problem"
                required
                rows={5}
                placeholder="อธิบายอาการ ประวัติการซ่อมบำรุง หรือบริการที่คุณต้องการ"
              />
            </Field>
            <Field id="appt" label="วันนัดหมายที่สะดวก">
              <Input id="appt" name="appt" type="date" />
            </Field>
            <Field id="images" label="อัปโหลดรูปภาพ">
              <label
                htmlFor="images"
                className="flex h-10 items-center justify-between gap-3 rounded-md border border-input bg-background px-3 text-sm text-ink-soft transition-colors hover:border-ink/40 cursor-pointer"
              >
                <span className="truncate">{fileName ?? "เลือกไฟล์…"}</span>
                <Upload className="h-4 w-4" />
                <input
                  id="images"
                  name="images"
                  type="file"
                  multiple
                  accept="image/*"
                  className="sr-only"
                  onChange={(e) => {
                    const files = e.target.files;
                    if (!files || files.length === 0) return setFileName(null);
                    setFileName(
                      files.length === 1 ? files[0].name : `เลือกแล้ว ${files.length} ไฟล์`,
                    );
                  }}
                />
              </label>
            </Field>
          </div>

          <div className="mt-8 flex flex-col-reverse items-start gap-4 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-xs text-ink-soft">
              การส่งแบบฟอร์มนี้ถือว่าคุณยอมรับข้อกำหนดและนโยบายความเป็นส่วนตัวของเรา
            </p>
            <button
              type="submit"
              disabled={submitting}
              className="inline-flex items-center gap-2 rounded-xl bg-[color:var(--brand)] px-6 py-3.5 text-sm font-semibold text-white shadow-elegant transition-all hover:-translate-y-0.5 hover:bg-[color:var(--brand-accent)] disabled:opacity-60"
            >
              {submitting ? "กำลังส่ง…" : "ยืนยันการจองซ่อม"}
              <ArrowRight className="h-4 w-4" />
            </button>
          </div>
        </motion.form>
      </div>
    </Section>
  );
}

function Field({
  id,
  label,
  required,
  children,
  className,
}: {
  id: string;
  label: string;
  required?: boolean;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={className}>
      <Label htmlFor={id} className="mb-2 block text-xs font-semibold uppercase tracking-wider text-ink-soft">
        {label} {required && <span className="text-[color:var(--brand-accent)]">*</span>}
      </Label>
      {children}
    </div>
  );
}
