import type { Metadata } from "next"
import { SectionHero } from "@/components/shared/SectionHero"

export const metadata: Metadata = {
  title: "Exposiciones",
  description: "Fotos de exposiciones de Meccano.",
}

export default function ExposicionesPage() {
  return (
    <>
      <SectionHero
        titulo="Exposiciones"
        descripcion="Galería de fotos de exposiciones de Meccano en Argentina y el mundo."
      />
      <section className="section-padding">
        <div className="container-meccano">
          <div className="text-center">
            <div className="inline-flex rounded-xl bg-slate-100 p-8">
              <svg className="h-24 w-24 text-slate-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
            </div>
            <h2 className="mt-6 text-2xl font-bold text-slate-900">Galería de exposiciones próximamente</h2>
            <p className="mt-2 text-slate-500">
              Estamos actualizando esta sección con fotos de exposiciones pasadas.
            </p>
          </div>
        </div>
      </section>
    </>
  )
}
