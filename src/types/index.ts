export interface Construccion {
  slug: string
  titulo: string
  descripcion: string
  imagen: string
  categoria: string
  fecha?: string
  detalle: string[]
  imagenes?: string[]
}

export interface Plano {
  id: string
  titulo: string
  imagen: string
  descripcion: string
  pdfUrl?: string
}

export interface Manual {
  id: string
  titulo: string
  imagen: string
  descripcion: string
  anio?: string
  idioma: string
}

export interface Invitado {
  slug: string
  nombre: string
  procedencia: string
  imagen: string
  descripcion: string
  modelos: string[]
  fotos?: string[]
}

export interface Video {
  id: string
  titulo: string
  tituloEn?: string
  youtubeId: string
  autor?: string
}

export interface CategoriaVenta {
  slug: string
  titulo: string
  descripcion: string
  imagen: string
  items: ItemVenta[]
}

export interface ItemVenta {
  nombre: string
  descripcion: string
  precio?: string
  imagen?: string
}

export interface NavLink {
  href: string
  label: string
  children?: NavLink[]
}
