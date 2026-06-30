import type { Metadata } from "next"
import Link from "next/link"
import { notFound } from "next/navigation"
import { Breadcrumbs } from "@/components/shared/Breadcrumbs"
import { categoriasVenta } from "@/lib/data/ventas"

interface Props {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  return categoriasVenta.map((cat) => ({ slug: cat.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const cat = categoriasVenta.find((c) => c.slug === slug)
  if (!cat) return {}
  return { title: cat.titulo, description: cat.descripcion }
}

export default async function CategoriaVentaPage({ params }: Props) {
  const { slug } = await params
  const cat = categoriasVenta.find((c) => c.slug === slug)
  if (!cat) notFound()

  return (
    <section className="section-padding">
      <div className="container-meccano">
        <Breadcrumbs items={[
          { label: "Ventas", href: "/ventas" },
          { label: cat.titulo },
        ]} />
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-slate-900">{cat.titulo}</h1>
          <p className="mt-2 text-lg text-slate-500">{cat.descripcion}</p>
        </div>
        <div className="overflow-hidden rounded-xl border border-slate-200">
          <table className="w-full text-left text-sm">
            <thead className="bg-slate-50">
              <tr>
                <th className="px-6 py-4 font-semibold text-slate-900">Producto</th>
                <th className="px-6 py-4 font-semibold text-slate-900">Descripción</th>
                <th className="px-6 py-4 font-semibold text-slate-900">Precio</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200">
              {cat.items.map((item, i) => (
                <tr key={i} className="bg-white transition-colors hover:bg-slate-50">
                  <td className="px-6 py-4 font-medium text-slate-900">{item.nombre}</td>
                  <td className="px-6 py-4 text-slate-500">{item.descripcion}</td>
                  <td className="px-6 py-4 text-slate-700">{item.precio || "Consultar"}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="mt-8">
          <Link
            href="/ventas"
            className="inline-flex items-center gap-2 text-sm font-medium text-meccano-red transition-colors hover:text-meccano-red-dark"
          >
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Volver a ventas
          </Link>
        </div>
      </div>
    </section>
  )
}
