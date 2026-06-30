import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { SectionHero } from "@/components/shared/SectionHero"
import { categoriasVenta } from "@/lib/data/ventas"

export const metadata: Metadata = {
  title: "Ventas",
  description: "Tienda de piezas Meccano, lotes, motores, calderas y equipos antiguos.",
}

export default function VentasPage() {
  return (
    <>
      <SectionHero
        titulo="Ventas"
        descripcion="Piezas sueltas, lotes, motores, calderas, equipos antiguos y mucho más. Consultá disponibilidad por email."
      />
      <section className="section-padding">
        <div className="container-meccano">
          <div className="mb-8 rounded-xl bg-meccano-red/5 border border-meccano-red/20 p-6">
            <p className="text-sm text-slate-600">
              Para consultar precios y disponibilidad, escribinos a{" "}
              <a href="mailto:piezasuelta@gmail.com" className="font-medium text-meccano-red hover:underline">
                piezasuelta@gmail.com
              </a>{" "}
              con el asunto &quot;MECCANO&quot;.
            </p>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {categoriasVenta.map((cat) => (
              <Link
                key={cat.slug}
                href={`/ventas/${cat.slug}`}
                className="group overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm transition-all hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="relative aspect-video overflow-hidden bg-slate-100">
                  <Image src={cat.imagen} alt={cat.titulo} fill className="object-cover" sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw" />
                </div>
                <div className="p-4">
                  <h3 className="text-lg font-semibold text-slate-900 group-hover:text-meccano-red">
                    {cat.titulo}
                  </h3>
                  <p className="mt-1 text-sm text-slate-500">{cat.descripcion}</p>
                  <p className="mt-3 text-xs font-medium text-meccano-red">
                    {cat.items.length} ítems disponibles &rarr;
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
