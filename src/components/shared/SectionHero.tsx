interface SectionHeroProps {
  titulo: string
  descripcion: string
  imagen?: string
}

export function SectionHero({ titulo, descripcion, imagen }: SectionHeroProps) {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-meccano-dark">
      {imagen && (
        <div
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{ backgroundImage: `url(${imagen})` }}
        />
      )}
      <div className="relative container-meccano px-4 py-20 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
          {titulo}
        </h1>
        <p className="mt-4 max-w-2xl text-lg text-slate-300">
          {descripcion}
        </p>
      </div>
    </section>
  )
}
