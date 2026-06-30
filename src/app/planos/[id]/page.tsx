import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"
import { Breadcrumbs } from "@/components/shared/Breadcrumbs"
import { planos } from "@/lib/data/planos"

interface Props {
  params: Promise<{ id: string }>
}

export async function generateStaticParams() {
  return planos.map((p) => ({ id: p.id }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params
  const p = planos.find((pl) => pl.id === id)
  if (!p) return {}
  return { title: p.titulo, description: p.descripcion }
}

export default async function PlanoPage({ params }: Props) {
  const { id } = await params
  const p = planos.find((pl) => pl.id === id)
  if (!p) notFound()

  return (
    <section className="section-padding">
      <div className="container-meccano">
        <Breadcrumbs items={[
          { label: "Planos", href: "/planos" },
          { label: p.titulo },
        ]} />
        <div className="grid gap-12 lg:grid-cols-2">
          <div className="relative aspect-[4/3] overflow-hidden rounded-xl bg-slate-100">
              <Image src={p.imagen} alt={p.titulo} fill className="object-cover" sizes="(max-width: 768px) 100vw, 50vw" />
            </div>
          <div>
            <h1 className="text-3xl font-bold text-slate-900">Plano: {p.titulo}</h1>
            <p className="mt-4 text-lg leading-relaxed text-slate-600">{p.descripcion}</p>
            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href={p.imagen}
                download
                className="inline-flex items-center gap-2 rounded-xl bg-meccano-red px-4 py-2 text-sm font-medium text-white shadow-lg transition-all hover:bg-meccano-red-dark"
              >
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                Descargar plano
              </a>
              <span className="inline-flex items-center gap-2 rounded-xl bg-slate-100 px-4 py-2 text-sm text-slate-600">
                Plano N° {p.id}
              </span>
            </div>
            <div className="mt-8">
              <Link
                href="/planos"
                className="inline-flex items-center gap-2 text-sm font-medium text-meccano-red transition-colors hover:text-meccano-red-dark"
              >
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                </svg>
                Volver a planos
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
