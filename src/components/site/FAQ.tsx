import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Section, SectionHeading } from "./Section";
import { Reveal } from "./Reveal";

const QUESTIONS = [
  {
    q: "โดยทั่วไปใช้เวลาบริการนานแค่ไหน?",
    a: "การเปลี่ยนถ่านเสร็จภายในวันเดียว การล้างเครื่องครบวงจรใช้เวลาสี่ถึงหกสัปดาห์ ส่วนการบูรณะนาฬิกาวินเทจใช้เวลาสามถึงห้าเดือนขึ้นอยู่กับการหาอะไหล่ ทุกงานจะมีการประเมินราคาเป็นลายลักษณ์อักษรก่อนเริ่มงาน",
  },
  {
    q: "ใช้อะไหล่แท้จากผู้ผลิตหรือไม่?",
    a: "ใช่ครับ เราจัดหาอะไหล่แท้เมื่อมีจำหน่าย และใช้ชิ้นส่วนที่ตรงยุคสมัยสำหรับนาฬิกาวินเทจ หากมีการเปลี่ยนแปลงใด ๆ เราจะแจ้งและขอความเห็นชอบจากคุณก่อนเสมอ",
  },
  {
    q: "รับซ่อมนาฬิกายี่ห้อใดบ้าง?",
    a: "เรารับบริการนาฬิกาหรูสัญชาติสวิสและเยอรมันเป็นส่วนใหญ่ ครอบคลุมกลไกออโตเมติก ไขลาน ควอตซ์ และโครโนกราฟ ติดต่อเราพร้อมรุ่นนาฬิกาของคุณเพื่อคำตอบที่เจาะจง",
  },
  {
    q: "นาฬิกาของฉันมีประกันระหว่างอยู่ในความดูแลของคุณไหม?",
    a: "นาฬิกาทุกเรือนได้รับความคุ้มครองประกันเต็มจำนวนตั้งแต่วินาทีที่เข้าสู่เวิร์กช็อปจนถึงตอนส่งคืนให้คุณ",
  },
  {
    q: "รับประกันอย่างไรบ้าง?",
    a: "บริการเต็มรูปแบบทุกงานมีการรับประกันจากเวิร์กช็อปนาน 12 เดือน ครอบคลุมทั้งงานที่ทำและอะไหล่ที่เราติดตั้ง",
  },
  {
    q: "ประเมินราคาให้ก่อนส่งนาฬิกามาได้ไหม?",
    a: "ได้ครับ ส่งรูปนาฬิกา หน้าปัด กลไก (หากเปิดดูได้) พร้อมคำอธิบายอาการมาให้เรา เราจะแจ้งช่วงราคาโดยประมาณก่อนที่คุณจะตัดสินใจส่งของ",
  },
];

export function FAQ() {
  return (
    <Section tone="muted">
      <div className="grid gap-12 lg:grid-cols-12">
        <div className="lg:col-span-5">
          <SectionHeading
            eyebrow="คำถามที่พบบ่อย"
            title="ทุกเรื่องที่คุณอาจอยากถาม ก่อนส่งนาฬิกามาให้เรา"
            description="ยังไม่แน่ใจ? ติดต่อเราได้เลย เราตอบทุกคำถามด้วยตัวเอง"
          />
        </div>
        <div className="lg:col-span-7">
          <Reveal>
            <Accordion type="single" collapsible className="w-full">
              {QUESTIONS.map((it, i) => (
                <AccordionItem key={it.q} value={`item-${i}`} className="border-b border-border">
                  <AccordionTrigger className="py-6 text-left font-display text-lg font-semibold text-ink hover:no-underline">
                    {it.q}
                  </AccordionTrigger>
                  <AccordionContent className="pb-6 text-base leading-relaxed text-ink-soft">
                    {it.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </Reveal>
        </div>
      </div>
    </Section>
  );
}
