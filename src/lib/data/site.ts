import type { NavLink } from "@/types"

export const siteConfig = {
  name: "Meccaninfos",
  description: "El sitio más completo sobre Meccano en Latinoamérica",
  url: "https://www.meccaninfos.com.ar",
  author: "Ariel Verlatsky",
  email: "piezasuelta@gmail.com",
  since: 2003,
  ubicacion: "Buenos Aires, Argentina",
}

export const navLinks: NavLink[] = [
  { href: "/", label: "Inicio" },
  { href: "/construcciones", label: "Construcciones" },
  { href: "/planos", label: "Planos" },
  { href: "/manuales", label: "Manuales" },
  { href: "/invitados", label: "Invitados" },
  { href: "/videos", label: "Videos" },
  { href: "/ventas", label: "Ventas" },
  { href: "/contacto", label: "Contacto" },
]
