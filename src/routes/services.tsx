import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { ServicesGrid } from "@/components/site/ServicesGrid";
import { WhyChooseUs } from "@/components/site/WhyChooseUs";
import { BookingForm } from "@/components/site/BookingForm";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "บริการ — Atelier Horloge" },
      {
        name: "description",
        content:
          "ซ่อมนาฬิกาหรู ล้างเครื่องครบวงจร ดูแลกลไก เปลี่ยนกระจก ขัดเงา และบูรณะนาฬิกาวินเทจ ทุกบริการทำเองในเวิร์กช็อป",
      },
      { property: "og:title", content: "บริการ — Atelier Horloge" },
      {
        property: "og:description",
        content: "เก้าบริการงานนาฬิกาเฉพาะทาง โดยช่างผู้ได้รับการรับรอง",
      },
      { property: "og:url", content: "/services" },
    ],
    links: [{ rel: "canonical", href: "/services" }],
  }),
  component: ServicesPage,
});

function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="บริการ"
        title="ทุกแขนงของงานนาฬิกาสมัยใหม่ ภายใต้หลังคาเดียว"
        description="ตั้งแต่เปลี่ยนถ่านเสร็จภายในวันเดียว ไปจนถึงบูรณะนาฬิกาวินเทจที่ใช้เวลาหลายเดือน ทุกบริการทำที่โต๊ะช่างของเราโดยช่างนาฬิกาผู้ได้รับการรับรอง"
      />
      <ServicesGrid />
      <WhyChooseUs />
      <BookingForm />
    </>
  );
}
