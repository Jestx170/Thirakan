import { useRef, useState, type PointerEvent as ReactPointerEvent } from "react";
import { Section, SectionHeading } from "./Section";
import { Reveal } from "./Reveal";
import before from "@/assets/before-case.jpg";
import after from "@/assets/after-case.jpg";

export function BeforeAfter() {
  const [pos, setPos] = useState(50);
  const ref = useRef<HTMLDivElement>(null);
  const dragging = useRef(false);

  const update = (clientX: number) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const p = ((clientX - rect.left) / rect.width) * 100;
    setPos(Math.max(0, Math.min(100, p)));
  };

  const onPointerDown = (e: ReactPointerEvent<HTMLDivElement>) => {
    dragging.current = true;
    (e.target as Element).setPointerCapture?.(e.pointerId);
    update(e.clientX);
  };
  const onPointerMove = (e: ReactPointerEvent<HTMLDivElement>) => {
    if (!dragging.current) return;
    update(e.clientX);
  };
  const onPointerUp = () => {
    dragging.current = false;
  };

  return (
    <Section tone="muted">
      <SectionHeading
        eyebrow="ก่อน / หลัง"
        title="เห็นความแตกต่างที่งานฝีมือสร้างได้"
        description="บูรณะตัวเรือน เปลี่ยนกระจก ดูแลกลไก ลากตัวเลื่อนเพื่อเปรียบเทียบผลงานจริงจากโต๊ะช่าง"
      />

      <Reveal>
        <div
          ref={ref}
          onPointerDown={onPointerDown}
          onPointerMove={onPointerMove}
          onPointerUp={onPointerUp}
          onPointerCancel={onPointerUp}
          className="relative mt-14 aspect-[16/10] w-full overflow-hidden rounded-3xl border border-border bg-background shadow-elegant select-none touch-none cursor-ew-resize"
        >
          <img
            src={after}
            alt="ตัวเรือนนาฬิกาที่ขัดเงาและบูรณะแล้ว"
            className="absolute inset-0 h-full w-full object-cover"
            loading="lazy"
            draggable={false}
          />
          <div
            className="absolute inset-y-0 left-0 overflow-hidden"
            style={{ width: `${pos}%` }}
          >
            <img
              src={before}
              alt="ตัวเรือนนาฬิกาที่มีรอยขีดข่วนก่อนบูรณะ"
              className="absolute inset-0 h-full w-full object-cover"
              style={{ width: `${100 / (pos / 100)}%`, maxWidth: "none" }}
              loading="lazy"
              draggable={false}
            />
          </div>

          <div className="pointer-events-none absolute left-4 top-4 rounded-full bg-[color:var(--ink)]/85 px-3 py-1 text-[11px] font-semibold uppercase tracking-widest text-white">
            ก่อน
          </div>
          <div className="pointer-events-none absolute right-4 top-4 rounded-full bg-[color:var(--brand-accent)] px-3 py-1 text-[11px] font-semibold uppercase tracking-widest text-white">
            หลัง
          </div>

          <div
            className="pointer-events-none absolute inset-y-0 w-0.5 bg-white shadow-elegant"
            style={{ left: `calc(${pos}% - 1px)` }}
          >
            <div className="pointer-events-auto absolute top-1/2 left-1/2 grid h-12 w-12 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full border border-white bg-white text-ink shadow-elegant">
              <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                <path d="M6 4L2 9l4 5M12 4l4 5-4 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
          </div>
        </div>
      </Reveal>

      <div className="mt-6 text-center text-xs uppercase tracking-[0.2em] text-ink-soft">
        ลากเพื่อเปรียบเทียบ · ขัดเงาและปรับผิวตัวเรือน
      </div>
    </Section>
  );
}
