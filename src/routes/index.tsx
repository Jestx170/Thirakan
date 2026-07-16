import { createFileRoute } from "@tanstack/react-router";
import { Hero } from "@/components/site/Hero";
import { ServicesGrid } from "@/components/site/ServicesGrid";
import { WhyChooseUs } from "@/components/site/WhyChooseUs";
import { ProcessTimeline } from "@/components/site/ProcessTimeline";
import { FeatureSplit } from "@/components/site/FeatureSplit";
import { StatsCounters } from "@/components/site/StatsCounters";
import { BeforeAfter } from "@/components/site/BeforeAfter";
import { Testimonials } from "@/components/site/Testimonials";
import { FAQ } from "@/components/site/FAQ";
import { BookingForm } from "@/components/site/BookingForm";
import { ContactBlock } from "@/components/site/ContactBlock";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <>
      <Hero />
      <ServicesGrid compact />
      {/* <WhyChooseUs /> */}
      <ProcessTimeline />
      {/* <FeatureSplit /> */}
      {/* <StatsCounters /> */}
      {/* <BeforeAfter /> */}
      {/* <Testimonials /> */}
      {/* <FAQ /> */}
      {/* <BookingForm /> */}
      <ContactBlock />
    </>
  );
}
