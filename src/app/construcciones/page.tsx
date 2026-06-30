import type { Metadata } from "next"
import { SectionHero } from "@/components/shared/SectionHero"
import { ModelCard } from "@/components/shared/ModelCard"
import { construcciones, getCategoriasConstrucciones } from "@/lib/data/construcciones"

export const metadata: Metadata = {
  title: "Construcciones",
  description: "Galería de modelos Meccano construidos por Ariel Verlatsky.",
}

export default function ConstruccionesPage() {
  const categorias = getCategoriasConstrucciones()

  return (
    <>
      <SectionHero
        titulo="Construcciones"
        descripcion="Todas las construcciones aquí mostradas fueron realizadas por Ariel Verlatsky. Hacé click sobre cada modelo para ver los detalles."
      />
      <section className="section-padding">
        <div className="container-meccano">
          {categorias.map((cat) => {
            const items = construcciones.filter((c) => c.categoria === cat)
            return (
              <div key={cat} className="mb-12 last:mb-0">
                <h2 className="mb-6 text-2xl font-bold text-slate-900">{cat}</h2>
                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                  {items.map((c) => (
                    <ModelCard
                      key={c.slug}
                      href={`/construcciones/${c.slug}`}
                      titulo={c.titulo}
                      descripcion={c.descripcion}
                      imagen={c.imagen}
                      categoria={c.categoria}
                    />
                  ))}
                </div>
              </div>
            )
          })}
        </div>
      </section>
    </>
  )
}
