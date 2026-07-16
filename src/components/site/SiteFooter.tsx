import { Link } from "@tanstack/react-router";
import { Facebook, MessageCircle, Music2, Phone, MapPin } from "lucide-react";
import { NAV_LINKS } from "./nav";
import logo from "@/assets/LOGO-02.png";

export function SiteFooter() {
  return (
    <footer className="bg-[color:var(--ink)] text-white">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
        <div className="grid gap-12 lg:grid-cols-4">
          <div className="lg:col-span-1">
            <div className="flex items-center">
              <img
                src={logo}
                alt="Atelier Horloge"
                className="h-15 w-auto brightness-0 invert"
              />
            </div>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-white/70">
              ช่างนาฬิกาผู้ได้รับการรับรอง บูรณะนาฬิกาหรูและนาฬิกาวินเทจ ด้วยความเที่ยงตรง
              แบบสวิสและความใส่ใจที่ไม่ประนีประนอม
            </p>
          </div>

          {NAV_LINKS.length > 0 && (
            <div>
              <h4 className="font-display text-sm font-semibold uppercase tracking-wider text-white/60">
                ลิงก์ด่วน
              </h4>
              <ul className="mt-5 space-y-3 text-sm">
                {NAV_LINKS.map((l) => (
                  <li key={l.to}>
                    <Link to={l.to} className="text-white/85 transition-colors hover:text-white">
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          )}

          <div>
            <h4 className="font-display text-sm font-semibold uppercase tracking-wider text-white/60">
              ติดต่อ
            </h4>
            <ul className="mt-5 space-y-3 text-sm text-white/85">
              <li className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-[color:var(--sky)]" />
                <span>
                  Pp.Protime สาขาตลาดชัชวาลลำลูกกาคลอง 7 (ติดศาลพระพรหม ตรงข้าม DIY) 99/9 ม.4
                  ต.บึงคำพร้อย อ.ลำลูกกา จ.ปทุมธานี 12250
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-4 w-4 shrink-0 text-[color:var(--sky)]" />
                <a href="tel:+66924437007" className="hover:text-white">
                  092-443-7007 (คุณสุพัฒน์)
                </a>
              </li>
              <li className="flex items-center gap-3">
                <MessageCircle className="h-4 w-4 shrink-0 text-[color:var(--sky)]" />
                <a
                  href="https://line.me/R/ti/p/@282cafil"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white"
                >
                  LINE: @thirakan
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-display text-sm font-semibold uppercase tracking-wider text-white/60">
              เวลาทำการ
            </h4>
            <ul className="mt-5 space-y-2 text-sm text-white/85">
              <li className="flex justify-between gap-4">
                <span>จันทร์ – ศุกร์</span>
                <span className="text-white/70">09:00 – 18:00</span>
              </li>
              <li className="flex justify-between gap-4">
                <span>เสาร์</span>
                <span className="text-white/70">10:00 – 16:00</span>
              </li>
              <li className="flex justify-between gap-4">
                <span>อาทิตย์</span>
                <span className="text-white/70">ปิดทำการ</span>
              </li>
            </ul>
            <div className="mt-6 flex gap-3">
              {[
                { icon: Facebook, label: "Facebook", href: "https://www.facebook.com/share/18sgsf8FRf/" },
                { icon: MessageCircle, label: "LINE", href: "https://line.me/R/ti/p/@282cafil" },
                { icon: Music2, label: "TikTok", href: "https://www.tiktok.com/@thirakan_official" },
              ].map(({ icon: Icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="grid h-10 w-10 place-items-center rounded-lg border border-white/20 transition-colors hover:border-white/50 hover:bg-white/5"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-16 flex flex-col items-start justify-between gap-4 border-t border-white/10 pt-8 text-xs text-white/50 sm:flex-row sm:items-center">
          <p>© {new Date().getFullYear()} Atelier Horloge สงวนลิขสิทธิ์</p>
          <p>เที่ยงตรง. ประณีต. ใส่ใจ.</p>
        </div>
      </div>
    </footer>
  );
}
