import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"
import { Breadcrumbs } from "@/components/shared/Breadcrumbs"
import { manuales } from "@/lib/data/manuales"

interface Props {
  params: Promise<{ id: string }>
}

export async function generateStaticParams() {
  return manuales.map((m) => ({ id: m.id }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params
  const m = manuales.find((ma) => ma.id === id)
  if (!m) return {}
  return { title: m.titulo, description: m.descripcion }
}

export default async function ManualPage({ params }: Props) {
  const { id } = await params
  const m = manuales.find((ma) => ma.id === id)
  if (!m) notFound()

  return (
    <section className="section-padding">
      <div className="container-meccano">
        <Breadcrumbs items={[
          { label: "Manuales", href: "/manuales" },
          { label: m.titulo },
        ]} />
        <div className="grid gap-12 lg:grid-cols-2">
          <div className="relative aspect-[3/4] overflow-hidden rounded-xl bg-slate-100 shadow-lg">
            <Image src={m.imagen} alt={m.titulo} fill className="object-contain p-2" sizes="(max-width: 768px) 100vw, 50vw" />
          </div>
          <div>
            <h1 className="text-3xl font-bold text-slate-900">{m.titulo}</h1>
            <div className="mt-4 flex flex-wrap gap-3">
              <span className="rounded-full bg-meccano-red/10 px-3 py-1 text-sm font-medium text-meccano-red">
                {m.idioma}
              </span>
              {m.anio && (
                <span className="rounded-full bg-slate-100 px-3 py-1 text-sm text-slate-600">
                  {m.anio}
                </span>
              )}
              <span className="rounded-full bg-slate-100 px-3 py-1 text-sm text-slate-600">
                Manual N&deg; {m.id}
              </span>
            </div>
            <p className="mt-6 text-lg leading-relaxed text-slate-600">{m.descripcion}</p>

            <div className="mt-8 space-y-4">
              <a
                href={m.imagen}
                download
                className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-meccano-red px-6 py-3 text-sm font-semibold text-white shadow-lg transition-all hover:bg-meccano-red-dark sm:w-auto"
              >
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                Descargar portada
              </a>
            </div>

            <div className="mt-8 rounded-xl border border-slate-200 bg-slate-50 p-6">
              <h3 className="text-sm font-semibold uppercase tracking-wider text-slate-500">Acerca de este manual</h3>
              <p className="mt-2 text-sm text-slate-600">
                Este manual forma parte de la colección de Meccaninfos. Si te interesa adquirir una copia física
                o tenes consultas sobre su contenido, contactanos por email.
              </p>
            </div>

            <div className="mt-8">
              <Link
                href="/manuales"
                className="inline-flex items-center gap-2 text-sm font-medium text-meccano-red transition-colors hover:text-meccano-red-dark"
              >
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                </svg>
                Volver a manuales
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
