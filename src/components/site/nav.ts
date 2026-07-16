export type NavLink = {
  to: "/" | "/services" | "/process" | "/pricing" | "/about" | "/reviews" | "/contact";
  label: string;
};

// ซ่อนทุกเมนูไว้ก่อน เหลือแค่หน้าแรก (โลโก้กดกลับหน้าแรกได้อยู่แล้ว)
// ปลดคอมเมนต์เพื่อเปิดเมนูกลับมาเมื่อพร้อม
export const NAV_LINKS: readonly NavLink[] = [
  // { to: "/", label: "หน้าแรก" },
  // { to: "/services", label: "บริการ" },
  // { to: "/process", label: "ขั้นตอนการทำงาน" },
  // { to: "/pricing", label: "ราคา" },
  // { to: "/about", label: "เกี่ยวกับเรา" },
  // { to: "/reviews", label: "รีวิว" },
  // { to: "/contact", label: "ติดต่อ" },
];
