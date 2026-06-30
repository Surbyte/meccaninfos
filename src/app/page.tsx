import Link from "next/link"
import Image from "next/image"
import { construcciones } from "@/lib/data/construcciones"
import { planos } from "@/lib/data/planos"
import { invitados } from "@/lib/data/invitados"

const features = [
  {
    href: "/construcciones",
    titulo: "Construcciones",
    descripcion: "Más de 35 modelos originales construidos por Ariel Verlatsky: locomotoras, grúas, relojes y más.",
    icon: (
      <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.066 2.573c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.573 1.066c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.066-2.573c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
  },
  {
    href: "/planos",
    titulo: "Planos Gratuitos",
    descripcion: "Descargá planos detallados de supermodelos Meccano totalmente gratis.",
    icon: (
      <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    ),
  },
  {
    href: "/invitados",
    titulo: "Galería de Invitados",
    descripcion: "Modelos de aficionados de Argentina, España, Chile, Ecuador y más países.",
    icon: (
      <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
  },
  {
    href: "/videos",
    titulo: "Videos",
    descripcion: "Galería de videos con construcciones Meccano en acción.",
    icon: (
      <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    href: "/ventas",
    titulo: "Ventas",
    descripcion: "Piezas sueltas, lotes, motores, calderas y equipos antiguos Meccano.",
    icon: (
      <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 100 4 2 2 0 000-4z" />
      </svg>
    ),
  },
  {
    href: "/manuales",
    titulo: "Manuales",
    descripcion: "Colección de 23 manuales Meccano históricos desde 1928.",
    icon: (
      <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
      </svg>
    ),
  },
]

export default function HomePage() {
  const destacados = construcciones.slice(0, 4)

  return (
    <>
      <section className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-meccano-dark">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-meccano-red/20 via-transparent to-transparent" />
        <div className="relative container-meccano px-4 py-24 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
              El sitio más completo sobre{" "}
              <span className="text-meccano-red">Meccano</span> en Latinoamérica
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-slate-300">
              Situado en la República Argentina, Meccaninfos está dirigido por Ariel Verlatsky,
              el primer meccaninfo. Desde 2003 compartiendo la pasión por el juego de construcción
              que continúa vigente desde 1901.
            </p>
            <div className="mt-10 flex flex-wrap justify-center gap-4">
              <Link
                href="/construcciones"
                className="rounded-xl bg-meccano-red px-8 py-3 text-sm font-semibold text-white shadow-lg transition-all hover:bg-meccano-red-dark hover:shadow-xl"
              >
                Ver construcciones
              </Link>
              <Link
                href="/planos"
                className="rounded-xl border border-slate-500 px-8 py-3 text-sm font-semibold text-slate-200 transition-all hover:border-white hover:text-white"
              >
                Planos gratuitos
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-meccano">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold text-slate-900">Secciones del sitio</h2>
            <p className="mt-2 text-slate-500">
              Explorá todo el contenido que Meccaninfos tiene para ofrecer
            </p>
          </div>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((feature) => (
              <Link
                key={feature.href}
                href={feature.href}
                className="group rounded-xl border border-slate-200 bg-white p-6 shadow-sm transition-all hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="mb-4 inline-flex rounded-lg bg-meccano-red/10 p-3 text-meccano-red">
                  {feature.icon}
                </div>
                <h3 className="text-lg font-semibold text-slate-900 group-hover:text-meccano-red">
                  {feature.titulo}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-500">
                  {feature.descripcion}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slate-50 section-padding">
        <div className="container-meccano">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-3xl font-bold text-slate-900">Construcciones destacadas</h2>
              <p className="mt-2 text-slate-500">
                Modelos creados por Ariel Verlatsky
              </p>
            </div>
            <Link
              href="/construcciones"
              className="hidden text-sm font-semibold text-meccano-red transition-colors hover:text-meccano-red-dark sm:block"
            >
              Ver todas &rarr;
            </Link>
          </div>
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {destacados.map((c) => (
              <Link
                key={c.slug}
                href={`/construcciones/${c.slug}`}
                className="group overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm transition-all hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="relative aspect-[4/3] bg-slate-100">
                  <Image src={c.imagen} alt={c.titulo} fill className="object-cover transition-transform duration-300 group-hover:scale-105" sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw" />
                </div>
                <div className="p-4">
                  <span className="inline-block rounded-full bg-meccano-red/10 px-2.5 py-0.5 text-xs font-medium text-meccano-red">
                    {c.categoria}
                  </span>
                  <h3 className="mt-2 font-semibold text-slate-900 group-hover:text-meccano-red">
                    {c.titulo}
                  </h3>
                  <p className="mt-1 text-sm text-slate-500 line-clamp-2">
                    {c.descripcion}
                  </p>
                </div>
              </Link>
            ))}
          </div>
          <div className="mt-6 text-center sm:hidden">
            <Link
              href="/construcciones"
              className="text-sm font-semibold text-meccano-red"
            >
              Ver todas &rarr;
            </Link>
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-meccano">
          <div className="grid gap-8 lg:grid-cols-2">
            <div className="rounded-xl border border-slate-200 bg-white p-8">
              <h3 className="text-2xl font-bold text-slate-900">Planos gratuitos</h3>
              <p className="mt-2 text-slate-500">
                {planos.length} planos de supermodelos Meccano para descargar gratis.
              </p>
              <div className="mt-6 flex flex-wrap gap-2">
                {planos.slice(0, 8).map((p) => (
                  <Link
                    key={p.id}
                    href={`/planos/${p.id}`}
                    className="rounded-full bg-slate-100 px-3 py-1.5 text-sm text-slate-700 transition-colors hover:bg-meccano-red hover:text-white"
                  >
                    Plano {p.id}
                  </Link>
                ))}
                <Link
                  href="/planos"
                  className="rounded-full bg-meccano-red/10 px-3 py-1.5 text-sm font-medium text-meccano-red transition-colors hover:bg-meccano-red hover:text-white"
                >
                  +{planos.length - 8} más
                </Link>
              </div>
            </div>
            <div className="rounded-xl border border-slate-200 bg-white p-8">
              <h3 className="text-2xl font-bold text-slate-900">Galería de invitados</h3>
              <p className="mt-2 text-slate-500">
                {invitados.length} aficionados de toda Latinoamérica y España comparten sus modelos.
              </p>
              <div className="mt-6 flex flex-wrap gap-2">
                {invitados.slice(0, 6).map((i) => (
                  <Link
                    key={i.slug}
                    href={`/invitados/${i.slug}`}
                    className="rounded-full bg-slate-100 px-3 py-1.5 text-sm text-slate-700 transition-colors hover:bg-meccano-red hover:text-white"
                  >
                    {i.nombre.split(" ")[0]}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
