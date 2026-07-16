import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { ProcessTimeline } from "@/components/site/ProcessTimeline";
import { FeatureSplit } from "@/components/site/FeatureSplit";
import { FAQ } from "@/components/site/FAQ";

export const Route = createFileRoute("/process")({
  head: () => ({
    meta: [
      { title: "ขั้นตอนการทำงาน — Atelier Horloge" },
      {
        name: "description",
        content:
          "ขั้นตอนการทำงานในเวิร์กช็อปที่โปร่งใสห้าขั้นตอน ได้แก่ ตรวจสอบ วินิจฉัย ซ่อม ทดสอบคุณภาพ และส่งมอบอย่างปลอดภัย",
      },
      { property: "og:title", content: "ขั้นตอนการทำงาน — Atelier Horloge" },
      {
        property: "og:description",
        content: "ห้าขั้นตอนอย่างพิถีพิถัน ไม่มีทางลัด วิธีที่เราดูแลนาฬิกาทุกเรือน",
      },
      { property: "og:url", content: "/process" },
    ],
    links: [{ rel: "canonical", href: "/process" }],
  }),
  component: ProcessPage,
});

function ProcessPage() {
  return (
    <>
      <PageHero
        eyebrow="ขั้นตอนการทำงาน"
        title="เส้นทางของนาฬิกาคุณผ่านเวิร์กช็อปของเรา"
        description="ลำดับขั้นตอนที่โปร่งใสและพิถีพิถัน พัฒนามาตลอดสิบห้าปี ออกแบบมาเพื่อปกป้องทั้งนาฬิกาและการลงทุนของคุณ"
      />
      <ProcessTimeline />
      <FeatureSplit />
      <FAQ />
    </>
  );
}
