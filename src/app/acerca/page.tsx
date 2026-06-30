import type { Metadata } from "next"
import { SectionHero } from "@/components/shared/SectionHero"
import { siteConfig } from "@/lib/data/site"

export const metadata: Metadata = {
  title: "Acerca de",
  description: "Acerca de Meccaninfos y Ariel Verlatsky.",
}

export default function AcercaPage() {
  return (
    <>
      <SectionHero
        titulo="Acerca de Meccaninfos"
        descripcion="La historia del sitio de Meccano más completo de Latinoamérica."
      />
      <section className="section-padding">
        <div className="container-meccano">
          <div className="mx-auto max-w-3xl">
            <div className="prose prose-slate max-w-none">
              <h2 className="text-2xl font-bold text-slate-900">¿Qué es Meccaninfos?</h2>
              <p className="mt-4 text-lg leading-relaxed text-slate-600">
                Meccaninfos es un sitio web dedicado exclusivamente al Meccano, el juego de construcción
                de piezas metálicas intercambiables inventado en Inglaterra en 1901 por Frank Hornby.
              </p>
              <p className="mt-4 text-lg leading-relaxed text-slate-600">
                Situado en la República Argentina, Meccaninfos está dirigido por Ariel Verlatsky,
                el primer meccaninfo. El sitio funciona desde {siteConfig.since} como portal de
                referencia sobre Meccano en Latinoamérica.
              </p>

              <h2 className="mt-12 text-2xl font-bold text-slate-900">¿Qué ofrecemos?</h2>
              <ul className="mt-4 space-y-3 text-lg text-slate-600">
                <li className="flex items-start gap-2">
                  <svg className="mt-2 h-5 w-5 flex-shrink-0 text-meccano-red" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span><strong>Galería de construcciones</strong> — Modelos originales creados por Ariel Verlatsky</span>
                </li>
                <li className="flex items-start gap-2">
                  <svg className="mt-2 h-5 w-5 flex-shrink-0 text-meccano-red" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span><strong>Planos gratuitos</strong> — Supermodelos Meccano para descargar e imprimir</span>
                </li>
                <li className="flex items-start gap-2">
                  <svg className="mt-2 h-5 w-5 flex-shrink-0 text-meccano-red" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span><strong>Manuales históricos</strong> — Desde 1928 hasta la década de 1970</span>
                </li>
                <li className="flex items-start gap-2">
                  <svg className="mt-2 h-5 w-5 flex-shrink-0 text-meccano-red" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span><strong>Galería de invitados</strong> — Aficionados de todo el mundo muestran sus modelos</span>
                </li>
                <li className="flex items-start gap-2">
                  <svg className="mt-2 h-5 w-5 flex-shrink-0 text-meccano-red" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span><strong>Tienda</strong> — Piezas sueltas, lotes, motores y equipos antiguos</span>
                </li>
              </ul>

              <h2 className="mt-12 text-2xl font-bold text-slate-900">Sobre Ariel Verlatsky</h2>
              <p className="mt-4 text-lg leading-relaxed text-slate-600">
                Ariel Verlatsky es un apasionado del Meccano desde su infancia. Reconocido como el
                &ldquo;primer meccaninfo&rdquo; de Argentina, ha dedicado décadas a construir,
                coleccionar y difundir el hobby del Meccano en Latinoamérica.
              </p>
              <p className="mt-4 text-lg leading-relaxed text-slate-600">
                Sus construcciones incluyen locomotoras, grúas, aviones, relojes, brazos robóticos
                y máquinas de vapor, muchas de ellas con mecanismos completamente funcionales.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
