import type { Metadata } from "next"
import { SectionHero } from "@/components/shared/SectionHero"
import { ModelCard } from "@/components/shared/ModelCard"
import { invitados } from "@/lib/data/invitados"

export const metadata: Metadata = {
  title: "Invitados",
  description: "Galería de invitados con modelos Meccano de aficionados de todo el mundo.",
}

export default function InvitadosPage() {
  return (
    <>
      <SectionHero
        titulo="Invitados"
        descripcion="Aficionados al Meccano de Argentina, España, Chile, Ecuador y más países comparten sus increíbles construcciones."
      />
      <section className="section-padding">
        <div className="container-meccano">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {invitados.map((i) => (
              <ModelCard
                key={i.slug}
                href={`/invitados/${i.slug}`}
                titulo={i.nombre}
                descripcion={`${i.procedencia} — ${i.modelos.slice(0, 2).join(", ")}`}
                imagen={i.imagen}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
