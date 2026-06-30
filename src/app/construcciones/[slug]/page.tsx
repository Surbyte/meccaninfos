import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"
import { Breadcrumbs } from "@/components/shared/Breadcrumbs"
import { construcciones, getConstruccionBySlug } from "@/lib/data/construcciones"

interface Props {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  return construcciones.map((c) => ({ slug: c.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const c = getConstruccionBySlug(slug)
  if (!c) return {}
  return {
    title: c.titulo,
    description: c.descripcion,
  }
}

export default async function ConstruccionPage({ params }: Props) {
  const { slug } = await params
  const c = getConstruccionBySlug(slug)
  if (!c) notFound()

  return (
    <>
      <section className="section-padding">
        <div className="container-meccano">
          <Breadcrumbs items={[
            { label: "Construcciones", href: "/construcciones" },
            { label: c.titulo },
          ]} />

          <div className="grid gap-12 lg:grid-cols-2">
          <div className="relative aspect-video overflow-hidden rounded-xl bg-slate-100">
              <Image src={c.imagen} alt={c.titulo} fill className="object-cover" sizes="(max-width: 768px) 100vw, 50vw" />
            </div>

            <div>
              <span className="inline-block rounded-full bg-meccano-red/10 px-3 py-1 text-sm font-medium text-meccano-red">
                {c.categoria}
              </span>
              <h1 className="mt-4 text-3xl font-bold text-slate-900">{c.titulo}</h1>
              <p className="mt-4 text-lg leading-relaxed text-slate-600">{c.descripcion}</p>

              <div className="mt-8 space-y-3">
                <h2 className="text-lg font-semibold text-slate-900">Características</h2>
                <ul className="space-y-2">
                  {c.detalle.map((d, i) => (
                    <li key={i} className="flex items-start gap-2 text-slate-600">
                      <svg className="mt-1 h-4 w-4 flex-shrink-0 text-meccano-red" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      {d}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-8">
                <Link
                  href="/construcciones"
                  className="inline-flex items-center gap-2 text-sm font-medium text-meccano-red transition-colors hover:text-meccano-red-dark"
                >
                  <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                  </svg>
                  Volver a construcciones
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
