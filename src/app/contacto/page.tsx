import type { Metadata } from "next"
import { SectionHero } from "@/components/shared/SectionHero"

export const metadata: Metadata = {
  title: "Contacto",
  description: "Contactate con Meccaninfos.",
}

export default function ContactoPage() {
  return (
    <>
      <SectionHero
        titulo="Contacto"
        descripcion="Escribinos por cualquier consulta sobre Meccano, piezas, planos o construcciones."
      />
      <section className="section-padding">
        <div className="container-meccano">
          <div className="mx-auto max-w-2xl">
            <div className="rounded-xl border border-slate-200 bg-white p-8">
              <h2 className="text-2xl font-bold text-slate-900">Información de contacto</h2>
              <div className="mt-6 space-y-4">
                <div className="flex items-start gap-3">
                  <div className="rounded-lg bg-meccano-red/10 p-2 text-meccano-red">
                    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-medium text-slate-900">Email</h3>
                    <a
                      href="mailto:piezasuelta@gmail.com"
                      className="text-meccano-red transition-colors hover:underline"
                    >
                      piezasuelta@gmail.com
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="rounded-lg bg-meccano-red/10 p-2 text-meccano-red">
                    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-medium text-slate-900">Ventas</h3>
                    <a
                      href="mailto:piezasuelta@gmail.com"
                      className="text-meccano-red transition-colors hover:underline"
                    >
                      piezasuelta@gmail.com
                    </a>
                    <p className="text-sm text-slate-500">Asunto: &quot;MECCANO&quot;</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="rounded-lg bg-meccano-red/10 p-2 text-meccano-red">
                    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-medium text-slate-900">Ubicación</h3>
                    <p className="text-slate-500">Buenos Aires, Argentina</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
