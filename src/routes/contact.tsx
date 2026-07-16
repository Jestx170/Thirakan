import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { BookingForm } from "@/components/site/BookingForm";
import { ContactBlock } from "@/components/site/ContactBlock";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "ติดต่อและจองซ่อม — Atelier Horloge" },
      {
        name: "description",
        content:
          "จองซ่อม ขอประเมินราคา หรือเยี่ยมชมอาเทลิเยร์ของเราที่เจนีวา เราตอบกลับด้วยตัวเองภายในหนึ่งวันทำการ",
      },
      { property: "og:title", content: "ติดต่อและจองซ่อม — Atelier Horloge" },
      {
        property: "og:description",
        content: "จองซ่อมหรือเยี่ยมชมอาเทลิเยร์ของเราที่เจนีวา",
      },
      { property: "og:url", content: "/contact" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: ContactPage,
});

function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="ติดต่อ"
        title="ส่งนาฬิกามาให้เรา หรือส่งข้อความถึงเรา"
        description="กรอกแบบฟอร์มจองด้านล่าง นัดรับส่งแบบมีประกัน หรือแวะมาที่อาเทลิเยร์ แล้วแต่คุณสะดวก"
      />
      <BookingForm />
      <ContactBlock />
    </>
  );
}
