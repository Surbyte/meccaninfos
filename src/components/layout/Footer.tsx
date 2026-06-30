import Link from "next/link"
import { siteConfig, navLinks } from "@/lib/data/site"

export function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-slate-900 text-slate-300">
      <div className="container-meccano px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <h3 className="mb-3 text-lg font-semibold text-white">
              Meccan<span className="text-meccano-red">infos</span>
            </h3>
            <p className="text-sm leading-relaxed text-slate-400">
              {siteConfig.description}
            </p>
            <p className="mt-2 text-sm text-slate-500">
              © {new Date().getFullYear()} {siteConfig.author} - {siteConfig.ubicacion}
            </p>
          </div>

          <div>
            <h4 className="mb-3 text-sm font-semibold uppercase tracking-wider text-slate-400">
              Secciones
            </h4>
            <ul className="space-y-2">
              {navLinks.slice(0, 7).map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-slate-400 transition-colors hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="mb-3 text-sm font-semibold uppercase tracking-wider text-slate-400">
              Más secciones
            </h4>
            <ul className="space-y-2">
              {[
                { href: "/exposiciones", label: "Exposiciones" },
                { href: "/meccanarte", label: "Meccanarte" },
                { href: "/acerca", label: "Acerca de" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-slate-400 transition-colors hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="mb-3 text-sm font-semibold uppercase tracking-wider text-slate-400">
              Contacto
            </h4>
            <p className="text-sm text-slate-400">
              Email:{" "}
              <a
                href={`mailto:${siteConfig.email}`}
                className="transition-colors hover:text-white"
              >
                {siteConfig.email}
              </a>
            </p>
            <p className="mt-4 text-xs text-slate-500">
              Sitio creado originalmente en 2003.
              <br />
              Rediseñado y modernizado en 2026.
            </p>
          </div>
        </div>

        <div className="mt-8 border-t border-slate-800 pt-8 text-center">
          <p className="text-xs text-slate-600">
            "Meccano" es una marca registrada. Este sitio es un proyecto personal sin fines de lucro dedicado a la comunidad de aficionados.
          </p>
        </div>
      </div>
    </footer>
  )
}
