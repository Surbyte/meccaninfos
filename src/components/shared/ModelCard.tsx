import Link from "next/link"
import Image from "next/image"

interface ModelCardProps {
  href: string
  titulo: string
  descripcion: string
  imagen: string
  categoria?: string
}

export function ModelCard({ href, titulo, descripcion, imagen, categoria }: ModelCardProps) {
  return (
    <Link
      href={href}
      className="group overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm transition-all hover:-translate-y-1 hover:shadow-lg"
    >
      <div className="relative aspect-[4/3] overflow-hidden bg-slate-100">
        <Image
          src={imagen}
          alt={titulo}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-105"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />
      </div>
      <div className="p-4">
        {categoria && (
          <span className="mb-2 inline-block rounded-full bg-meccano-red/10 px-2.5 py-0.5 text-xs font-medium text-meccano-red">
            {categoria}
          </span>
        )}
        <h3 className="text-lg font-semibold text-slate-900 group-hover:text-meccano-red">
          {titulo}
        </h3>
        <p className="mt-1 line-clamp-2 text-sm text-slate-500">
          {descripcion}
        </p>
      </div>
    </Link>
  )
}
