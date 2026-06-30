import type { Metadata } from "next"
import { SectionHero } from "@/components/shared/SectionHero"

export const metadata: Metadata = {
  title: "Libro de Visitas",
  description: "Dejá tu comentario en el libro de visitas de Meccaninfos.",
}

interface Mensaje {
  nombre: string
  fecha: string
  comentario: string
  procedencia?: string
}

const mensajes: Mensaje[] = [
  {
    nombre: "Juan Pérez",
    fecha: "15/03/2024",
    comentario: "Excelente sitio, felicitaciones por mantener viva la llama del Meccano en Latinoamérica.",
    procedencia: "Santiago, Chile",
  },
  {
    nombre: "María García",
    fecha: "02/02/2024",
    comentario: "Gracias por los planos gratuitos. Pude construir la grúa torre con mi hijo.",
    procedencia: "Buenos Aires, Argentina",
  },
  {
    nombre: "Carlos Rodríguez",
    fecha: "20/01/2024",
    comentario: "Increíble colección de manuales históricos. No sabía que existían tantos.",
    procedencia: "Madrid, España",
  },
  {
    nombre: "Pedro Martínez",
    fecha: "10/12/2023",
    comentario: "Visitando desde Ecuador. Qué gran trabajo con las construcciones, Ariel.",
    procedencia: "Quito, Ecuador",
  },
  {
    nombre: "Luis Fernández",
    fecha: "28/11/2023",
    comentario: "El mejor sitio de Meccano en español. Sigan así.",
    procedencia: "Lima, Perú",
  },
]

export default function LibroDeVisitasPage() {
  return (
    <>
      <SectionHero
        titulo="Libro de Visitas"
        descripcion="Dejanos tu comentario. Tu opinión nos ayuda a mejorar."
      />
      <section className="section-padding">
        <div className="container-meccano">
          <div className="mx-auto max-w-2xl">
            <div className="overflow-hidden rounded-xl border border-slate-200 bg-white p-8 shadow-sm">
              <h2 className="text-2xl font-bold text-slate-900">Dejá tu mensaje</h2>
              <p className="mt-2 text-sm text-slate-500">
                Compartí tu experiencia con el Meccano o lo que te pareció el sitio.
              </p>
              <form
                action="/api/contact"
                method="POST"
                className="mt-6 space-y-4"
              >
                <div>
                  <label htmlFor="nombre" className="block text-sm font-medium text-slate-700">
                    Nombre <span className="text-meccano-red">*</span>
                  </label>
                  <input
                    type="text"
                    id="nombre"
                    name="nombre"
                    required
                    className="mt-1 block w-full rounded-lg border border-slate-300 px-4 py-2.5 text-sm shadow-sm transition-colors focus:border-meccano-red focus:outline-none focus:ring-1 focus:ring-meccano-red"
                    placeholder="Tu nombre"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-slate-700">
                    Email <span className="text-meccano-red">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="mt-1 block w-full rounded-lg border border-slate-300 px-4 py-2.5 text-sm shadow-sm transition-colors focus:border-meccano-red focus:outline-none focus:ring-1 focus:ring-meccano-red"
                    placeholder="tu@email.com"
                  />
                </div>
                <div>
                  <label htmlFor="procedencia" className="block text-sm font-medium text-slate-700">
                    Procedencia
                  </label>
                  <input
                    type="text"
                    id="procedencia"
                    name="procedencia"
                    className="mt-1 block w-full rounded-lg border border-slate-300 px-4 py-2.5 text-sm shadow-sm transition-colors focus:border-meccano-red focus:outline-none focus:ring-1 focus:ring-meccano-red"
                    placeholder="Ciudad, País"
                  />
                </div>
                <div>
                  <label htmlFor="mensaje" className="block text-sm font-medium text-slate-700">
                    Comentario <span className="text-meccano-red">*</span>
                  </label>
                  <textarea
                    id="mensaje"
                    name="mensaje"
                    required
                    rows={4}
                    className="mt-1 block w-full rounded-lg border border-slate-300 px-4 py-2.5 text-sm shadow-sm transition-colors focus:border-meccano-red focus:outline-none focus:ring-1 focus:ring-meccano-red"
                    placeholder="Escribí tu comentario..."
                  />
                </div>
                <input type="hidden" name="asunto" value="Nuevo mensaje del Libro de Visitas" />
                <button
                  type="submit"
                  className="w-full rounded-xl bg-meccano-red px-6 py-3 text-sm font-semibold text-white shadow-lg transition-all hover:bg-meccano-red-dark"
                >
                  Enviar mensaje
                </button>
              </form>
            </div>

            <div className="mt-12">
              <h2 className="text-2xl font-bold text-slate-900">Mensajes recientes</h2>
              <div className="mt-6 space-y-4">
                {mensajes.map((m, i) => (
                  <div key={i} className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
                    <div className="flex items-start justify-between">
                      <div>
                        <h3 className="font-semibold text-slate-900">{m.nombre}</h3>
                        {m.procedencia && (
                          <p className="text-sm text-slate-500">{m.procedencia}</p>
                        )}
                      </div>
                      <span className="text-xs text-slate-400">{m.fecha}</span>
                    </div>
                    <p className="mt-3 text-slate-600">{m.comentario}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
