import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { Testimonials } from "@/components/site/Testimonials";
import { StatsCounters } from "@/components/site/StatsCounters";
import { BeforeAfter } from "@/components/site/BeforeAfter";

export const Route = createFileRoute("/reviews")({
  head: () => ({
    meta: [
      { title: "รีวิว — Atelier Horloge" },
      {
        name: "description",
        content:
          "อ่านความคิดเห็นจากนักสะสมและลูกค้าครั้งแรกเกี่ยวกับเวิร์กช็อปซ่อมและบูรณะนาฬิกาหรูของเรา",
      },
      { property: "og:title", content: "รีวิว — Atelier Horloge" },
      {
        property: "og:description",
        content: "ได้รับความไว้วางใจทั้งจากนักสะสมและลูกค้าครั้งแรก",
      },
      { property: "og:url", content: "/reviews" },
    ],
    links: [{ rel: "canonical", href: "/reviews" }],
  }),
  component: ReviewsPage,
});

function ReviewsPage() {
  return (
    <>
      <PageHero
        eyebrow="รีวิว"
        title="ในคำพูดของนักสะสมที่เราดูแล"
        description="สิบห้าปีแห่งความสัมพันธ์ นาฬิกานับพันเรือน และมาตรฐานที่เรายึดถือทุกวัน"
      />
      <Testimonials />
      <StatsCounters />
      <BeforeAfter />
    </>
  );
}
