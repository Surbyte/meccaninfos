import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { SectionHero } from "@/components/shared/SectionHero"
import { manuales } from "@/lib/data/manuales"

export const metadata: Metadata = {
  title: "Manuales",
  description: "Colección de 23 manuales Meccano históricos.",
}

export default function ManualesPage() {
  return (
    <>
      <SectionHero
        titulo="Manuales"
        descripcion="Colección de manuales Meccano originales desde 1928 hasta la década de 1970. Disponibles para consulta."
      />
      <section className="section-padding">
        <div className="container-meccano">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {manuales.map((m) => (
              <Link
                key={m.id}
                href={`/manuales/${m.id}`}
                className="group overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm transition-all hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="relative aspect-[3/4] overflow-hidden bg-slate-100">
                  <Image src={m.imagen} alt={m.titulo} fill className="object-cover" sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw" />
                </div>
                <div className="p-4">
                  <h3 className="font-semibold text-slate-900 group-hover:text-meccano-red">
                    {m.titulo}
                  </h3>
                  <p className="mt-1 text-xs text-slate-500">
                    {m.idioma}{m.anio ? ` · ${m.anio}` : ""}
                  </p>
                  <p className="mt-2 line-clamp-2 text-sm text-slate-500">
                    {m.descripcion}
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
