import type { CategoriaVenta } from "@/types"

export const categoriasVenta: CategoriaVenta[] = [
  {
    slug: "lotes",
    titulo: "Lotes de Piezas",
    descripcion: "Lotes variados de piezas Meccano originales y compatibles. Ideal para empezar o ampliar tu colección.",
    imagen: "/images/construcciones/caja-marcha.jpg",
    items: [
      { nombre: "Lote Básico", descripcion: "100 piezas variadas incluyendo rieles, ángulos y tornillos.", precio: "Consultar" },
      { nombre: "Lote Avanzado", descripcion: "500 piezas con engranajes, ejes y poleas.", precio: "Consultar" },
      { nombre: "Lote Profesional", descripcion: "1000+ piezas con motores y mecanismos complejos.", precio: "Consultar" },
    ],
  },
  {
    slug: "piezas",
    titulo: "Piezas Sueltas",
    descripcion: "Piezas individuales Meccano originales para reponer o completar tus sets.",
    imagen: "/images/construcciones/meccanografo.jpg",
    items: [
      { nombre: "Rieles perforados", descripcion: "Todas las medidas disponibles." },
      { nombre: "Ángulos y escuadras", descripcion: "Diferentes tamaños y perforaciones." },
      { nombre: "Engranajes", descripcion: "Desde 10 hasta 120 dientes." },
      { nombre: "Ejes y acoples", descripcion: "Acero templado, varias longitudes." },
      { nombre: "Ruedas y poleas", descripcion: "Diferentes diámetros y materiales." },
      { nombre: "Tornillería", descripcion: "Tornillos, tuercas y arandelas." },
    ],
  },
  {
    slug: "motores",
    titulo: "Motores",
    descripcion: "Motores eléctricos Meccano originales y compatibles para dar vida a tus construcciones.",
    imagen: "/images/construcciones/brazo-robotico.jpg",
    items: [
      { nombre: "Motor Eléctrico Meccano", descripcion: "Motor original MeccanoEitech, 3-12V.", precio: "Consultar" },
      { nombre: "Motor Märklin", descripcion: "Motor Märklin clásico para Meccano.", precio: "Consultar" },
      { nombre: "Motor de CC", descripcion: "Motor de corriente continua con reductora.", precio: "Consultar" },
    ],
  },
  {
    slug: "equipos-antiguos",
    titulo: "Equipos Antiguos",
    descripcion: "Sets y equipos Meccano antiguos, piezas de colección y ediciones históricas.",
    imagen: "/images/construcciones/reloj-pared.jpg",
    items: [
      { nombre: "Set N° 0", descripcion: "Set de iniciación, década de 1940.", precio: "Consultar" },
      { nombre: "Set N° 2", descripcion: "Set mediano, década de 1950.", precio: "Consultar" },
      { nombre: "Set N° 4", descripcion: "Set avanzado, década de 1960.", precio: "Consultar" },
      { nombre: "Set N° 7", descripcion: "Set profesional con motor, década de 1960.", precio: "Consultar" },
      { nombre: "Elektrikit", descripcion: "Set de circuitos eléctricos Meccano.", precio: "Consultar" },
      { nombre: "Caldera a vapor", descripcion: "Caldera funcional Meccano 1929.", precio: "Consultar" },
    ],
  },
  {
    slug: "modelos-armados",
    titulo: "Modelos Armados a la Venta",
    descripcion: "Modelos Meccano completamente armados, listos para exhibir o coleccionar.",
    imagen: "/images/construcciones/locomotora.jpg",
    items: [
      { nombre: "Locomotora armada", descripcion: "Locomotora completa con ténder." },
      { nombre: "Grúa torre armada", descripcion: "Grúa torre de 1.5m de altura." },
      { nombre: "Reloj funcional", descripcion: "Reloj de pared Meccano funcionando." },
      { nombre: "Brazo robótico", descripcion: "Brazo robótico articulado completo." },
    ],
  },
]
