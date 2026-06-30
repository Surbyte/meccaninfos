import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"
import { Breadcrumbs } from "@/components/shared/Breadcrumbs"
import { invitados } from "@/lib/data/invitados"

interface Props {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  return invitados.map((i) => ({ slug: i.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const i = invitados.find((inv) => inv.slug === slug)
  if (!i) return {}
  return { title: i.nombre, description: i.descripcion }
}

export default async function InvitadoPage({ params }: Props) {
  const { slug } = await params
  const i = invitados.find((inv) => inv.slug === slug)
  if (!i) notFound()

  return (
    <section className="section-padding">
      <div className="container-meccano">
        <Breadcrumbs items={[
          { label: "Invitados", href: "/invitados" },
          { label: i.nombre },
        ]} />
        <div className="grid gap-12 lg:grid-cols-2">
          <div className="relative aspect-video overflow-hidden rounded-xl bg-slate-100">
              <Image src={i.imagen} alt={i.nombre} fill className="object-cover" sizes="(max-width: 768px) 100vw, 50vw" />
            </div>
          <div>
            <span className="inline-block rounded-full bg-slate-100 px-3 py-1 text-sm text-slate-600">
              {i.procedencia}
            </span>
            <h1 className="mt-4 text-3xl font-bold text-slate-900">{i.nombre}</h1>
            <p className="mt-4 text-lg leading-relaxed text-slate-600">{i.descripcion}</p>
            <div className="mt-8">
              <h2 className="text-lg font-semibold text-slate-900">Modelos destacados</h2>
              <ul className="mt-3 space-y-2">
                {i.modelos.map((m, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-slate-600">
                    <svg className="mt-1 h-4 w-4 flex-shrink-0 text-meccano-red" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    {m}
                  </li>
                ))}
              </ul>
            </div>
            <div className="mt-8">
              <Link
                href="/invitados"
                className="inline-flex items-center gap-2 text-sm font-medium text-meccano-red transition-colors hover:text-meccano-red-dark"
              >
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                </svg>
                Volver a invitados
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
