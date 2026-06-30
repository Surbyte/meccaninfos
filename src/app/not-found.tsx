import Link from "next/link"

export default function NotFound() {
  return (
    <section className="section-padding">
      <div className="container-meccano">
        <div className="mx-auto max-w-md text-center">
          <h1 className="text-6xl font-bold text-meccano-red">404</h1>
          <h2 className="mt-4 text-2xl font-bold text-slate-900">Página no encontrada</h2>
          <p className="mt-2 text-slate-500">
            La página que buscás no existe o fue movida.
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
  )
}
