import { Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { ShieldCheck, Cog, BadgeCheck, ArrowRight } from "lucide-react";
import heroImage from "@/assets/watchmaker-hero.jpg";

// const badges = [
//   { icon: ShieldCheck, label: "ช่างผู้ได้รับการรับรอง" },
//   { icon: Cog, label: "อะไหล่แท้" },
//   { icon: BadgeCheck, label: "รับประกัน 12 เดือน" },
// ];

export function Hero() {
  return (
    <section className="relative isolate min-h-[100svh] overflow-hidden bg-white text-ink">
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="ช่างนาฬิกาผู้เชี่ยวชาญกำลังตรวจนาฬิกากลไกหรู"
          className="h-full w-full object-cover object-center"
          width={1600}
          height={1200}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-white/60 via-white/30 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-white/60 via-transparent to-transparent" />
      </div>

      <div className="relative mx-auto flex min-h-[100svh] max-w-7xl flex-col justify-end px-4 pb-20 pt-32 sm:px-6 lg:px-8 lg:pb-28 lg:pt-40">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          {/* <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.24em] text-[color:var(--brand-accent)]">
            <span className="h-px w-8 bg-[color:var(--brand-accent)]" />
            อาเทลิเยร์นาฬิกาหรู · ก่อตั้งปี 2009
          </span> */}
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          className="mt-6 max-w-4xl font-display text-5xl font-semibold leading-[1.02] tracking-tight text-ink sm:text-6xl lg:text-[5.5rem]"
        >
          ซ่อมนาฬิกาง่ายกว่า
          <span className="italic font-display text-[color:var(--brand-accent)]">ที่เคย</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.35, ease: "easeOut" }}
          className="mt-6 max-w-xl text-lg leading-relaxed text-ink-soft sm:text-xl"
        >
          บริการซ่อมนาฬิกา 
          พร้อมเครือข่ายร้านพาร์ทเนอร์ที่ช่วยให้คุณเข้าถึงบริการได้สะดวกยิ่งขึ้น
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
          className="mt-10 flex flex-wrap items-center gap-3"
        >
          <a
            href="https://line.me/R/ti/p/@282cafil"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-xl bg-[color:var(--brand)] px-6 py-3.5 text-sm font-semibold text-white shadow-elegant transition-all hover:-translate-y-0.5 hover:bg-[color:var(--brand-accent)]"
          >
            จองซ่อมนาฬิกา
            <ArrowRight className="h-4 w-4" />
          </a>
          <Link
            to="/services"
            className="inline-flex items-center gap-2 rounded-xl border border-ink/20 bg-white px-6 py-3.5 text-sm font-semibold text-ink transition-all hover:border-ink/40 hover:bg-[color:var(--surface)]"
          >
            ดูบริการของเรา
          </Link>
        </motion.div>

        {/* <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="mt-12 flex flex-wrap gap-x-8 gap-y-3 text-sm text-ink-soft"
        >
          {badges.map(({ icon: Icon, label }) => (
            <div key={label} className="flex items-center gap-2">
              <Icon className="h-4 w-4 text-[color:var(--brand-accent)]" />
              {label}
            </div>
          ))}
        </motion.div> */}
      </div>

      <div className="absolute bottom-6 right-6 hidden text-[10px] font-medium uppercase tracking-[0.3em] text-ink/40 lg:block">
        เลื่อนลง ↓
      </div>
    </section>
  );
}
