import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { FeatureSplit } from "@/components/site/FeatureSplit";
import { StatsCounters } from "@/components/site/StatsCounters";
import { WhyChooseUs } from "@/components/site/WhyChooseUs";
import { Section, SectionHeading } from "@/components/site/Section";
import { Reveal } from "@/components/site/Reveal";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "เกี่ยวกับเรา — Atelier Horloge" },
      {
        name: "description",
        content:
          "ก่อตั้งที่เจนีวาในปี 2009 Atelier Horloge คือเวิร์กช็อปเฉพาะทางที่มุ่งมั่นในการซ่อมและบูรณะนาฬิกาหรูและนาฬิกาวินเทจ",
      },
      { property: "og:title", content: "เกี่ยวกับเรา — Atelier Horloge" },
      {
        property: "og:description",
        content: "เวิร์กช็อปเฉพาะทางที่ทุ่มเทให้กับงานนาฬิกาหรูและนาฬิกาวินเทจ",
      },
      { property: "og:url", content: "/about" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="เกี่ยวกับเรา"
        title="เวิร์กช็อปที่เงียบสงบ และหมกมุ่นกับการทำให้ถูกต้อง"
        description="ก่อตั้งที่เจนีวาในปี 2009 Atelier Horloge คือโต๊ะช่างเฉพาะทางที่ทุ่มเทให้กับนาฬิกาหรูและนาฬิกาวินเทจ และเพียงเท่านั้น"
      />

      <Section>
        <div className="grid gap-14 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <SectionHeading eyebrow="ปรัชญาของเรา" title="การบริการคือรูปแบบหนึ่งของความเคารพ" />
          </div>
          <div className="space-y-6 text-lg leading-relaxed text-ink-soft lg:col-span-7">
            <Reveal>
              <p>
                นาฬิกาทุกเรือนที่มาถึงเราถูกเลือกด้วยเหตุผลบางอย่าง ไม่ว่าจะเป็นหมุดหมายสำคัญ
                มรดกตกทอด หรือความหลงใหลตลอดชีวิต งานของเราคือการให้เกียรติการตัดสินใจนั้น
                ด้วยความอดทน ความโปร่งใส และงานฝีมือที่ดีที่สุดเท่าที่เราจะมอบให้ได้
              </p>
            </Reveal>
            <Reveal delay={0.1}>
              <p>
                เราไม่ขายนาฬิกา เราไม่รับงานที่เราส่งมอบไม่ได้ เราบริการเฉพาะสิ่งที่เรารู้จัก
                อย่างลึกซึ้ง จัดหาสิ่งที่เราผลิตเองไม่ได้ และปฏิเสธทางลัดทุกอย่าง
                ที่กระทบต่องานวิศวกรรมดั้งเดิมของนาฬิกาคุณ
              </p>
            </Reveal>
            <Reveal delay={0.2}>
              <p>
                ผ่านมาสิบห้าปี เวิร์กช็อปของเรายังคงเล็กโดยตั้งใจ เพราะงานฝีมือในระดับนี้
                ไม่ใช่สิ่งที่ขยายขนาดได้
              </p>
            </Reveal>
          </div>
        </div>
      </Section>

      <FeatureSplit />
      <StatsCounters />
      <WhyChooseUs />
    </>
  );
}
