import type { Metadata } from "next"
import { SectionHero } from "@/components/shared/SectionHero"
import { ModelCard } from "@/components/shared/ModelCard"
import { planos } from "@/lib/data/planos"

export const metadata: Metadata = {
  title: "Planos",
  description: "Planos gratuitos de supermodelos Meccano para descargar.",
}

export default function PlanosPage() {
  return (
    <>
      <SectionHero
        titulo="Planos"
        descripcion="Amigos meccaninfos: ofrecemos este servicio de planos de los supermodelos para que todo navegante pueda imprimirlos o guardarlos totalmente gratis."
      />
      <section className="section-padding">
        <div className="container-meccano">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {planos.map((p) => (
              <ModelCard
                key={p.id}
                href={`/planos/${p.id}`}
                titulo={p.titulo}
                descripcion={p.descripcion}
                imagen={p.imagen}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
