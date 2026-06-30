import type { Metadata } from "next"
import Link from "next/link"
import { SectionHero } from "@/components/shared/SectionHero"

export const metadata: Metadata = {
  title: "Mensaje enviado",
  description: "Gracias por contactarnos.",
}

export default function GraciasPage() {
  return (
    <>
      <SectionHero
        titulo="¡Mensaje enviado!"
        descripcion="Su mensaje ha sido enviado exitosamente. Responderemos a la brevedad. Gracias."
      />
      <section className="section-padding">
        <div className="container-meccano">
          <div className="mx-auto max-w-md text-center">
            <div className="inline-flex rounded-full bg-green-100 p-4 text-green-600">
              <svg className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h2 className="mt-6 text-2xl font-bold text-slate-900">Recibimos tu consulta</h2>
            <p className="mt-2 text-slate-500">
              Te responderemos a la brevedad. Gracias por comunicarte con Meccaninfos.
            </p>
            <div className="mt-8">
              <Link
                href="/"
                className="inline-flex items-center gap-2 rounded-xl bg-meccano-red px-6 py-3 text-sm font-semibold text-white shadow-lg transition-all hover:bg-meccano-red-dark"
              >
                Volver al inicio
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
