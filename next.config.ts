import type { NextConfig } from "next"

const nextConfig: NextConfig = {
  async redirects() {
    return [
      // Página principal
      { source: "/index.htm", destination: "/", permanent: true },
      { source: "/index.html", destination: "/", permanent: true },
      { source: "/principal.htm", destination: "/", permanent: true },

      // Construcciones
      { source: "/galeriadeconstrucciones.htm", destination: "/construcciones", permanent: true },
      { source: "/construccion_n.htm", destination: "/construcciones", permanent: true },
      { source: "/construccionc.htm", destination: "/construcciones", permanent: true },
      { source: "/construcciond.htm", destination: "/construcciones", permanent: true },
      { source: "/construccione.htm", destination: "/construcciones", permanent: true },
      { source: "/construccionf.htm", destination: "/construcciones", permanent: true },
      { source: "/construcciong.htm", destination: "/construcciones", permanent: true },
      { source: "/construccionh.htm", destination: "/construcciones", permanent: true },
      { source: "/costruccioni.htm", destination: "/construcciones", permanent: true },
      { source: "/construccionj.htm", destination: "/construcciones", permanent: true },
      { source: "/construccionk.htm", destination: "/construcciones", permanent: true },
      { source: "/construccionl.htm", destination: "/construcciones", permanent: true },
      { source: "/construccionm.htm", destination: "/construcciones", permanent: true },
      { source: "/construccionp.htm", destination: "/construcciones", permanent: true },
      { source: "/construccionr.htm", destination: "/construcciones", permanent: true },
      { source: "/construccions.htm", destination: "/construcciones", permanent: true },
      { source: "/aconstruccion.htm", destination: "/construcciones", permanent: true },
      { source: "/grua.html", destination: "/construcciones/grua-torre", permanent: true },
      { source: "/aviones.html", destination: "/construcciones/aviones", permanent: true },
      { source: "/caballobice.html", destination: "/construcciones/caballo-del-bicentenario", permanent: true },
      { source: "/balancin.html", destination: "/construcciones/balancin", permanent: true },
      { source: "/excavadoradeaariel.html", destination: "/construcciones/excavadora", permanent: true },
      { source: "/helicoptero.htm", destination: "/construcciones/helicoptero", permanent: true },
      { source: "/planetario.htm", destination: "/construcciones/planetario", permanent: true },
      { source: "/relojdepared.htm", destination: "/construcciones/reloj-pared", permanent: true },

      // Planos
      { source: "/planos.htm", destination: "/planos", permanent: true },
      ...Array.from({ length: 45 }, (_, i) => ({
        source: `/planouno${i === 0 ? "" : i === 1 ? "a" : ""}.html` as string,
        destination: "/planos" as string,
        permanent: true as const,
      })),
      { source: "/planouno.html", destination: "/planos/1", permanent: true },
      { source: "/planodos.html", destination: "/planos/2", permanent: true },
      { source: "/planotres.htm", destination: "/planos/3", permanent: true },
      { source: "/planocuatro.html", destination: "/planos/4", permanent: true },
      { source: "/planocinco.htm", destination: "/planos/5", permanent: true },
      { source: "/planoseis.html", destination: "/planos/6", permanent: true },
      { source: "/planosiete.html", destination: "/planos/7", permanent: true },
      { source: "/planooocho.html", destination: "/planos/8", permanent: true },
      { source: "/planonueve.html", destination: "/planos/9", permanent: true },
      { source: "/planodiez.html", destination: "/planos/10", permanent: true },
      { source: "/planonce.html", destination: "/planos/11", permanent: true },
      { source: "/planodoce.html", destination: "/planos/12", permanent: true },
      { source: "/planotrece.html", destination: "/planos/13", permanent: true },
      { source: "/planocatorce.html", destination: "/planos/14", permanent: true },
      { source: "/planquince.html", destination: "/planos/15", permanent: true },

      // Manuales
      { source: "/manuales.htm", destination: "/manuales", permanent: true },
      ...Array.from({ length: 23 }, (_, i) => ({
        source: `/manual${i + 1}.htm`,
        destination: `/manuales/${i + 1}`,
        permanent: true,
      })),

      // Invitados
      { source: "/invitados.htm", destination: "/invitados", permanent: true },
      { source: "/invitadodecoruna.htm", destination: "/invitados/alfonso-chavert", permanent: true },
      { source: "/invitadodelujandetalle.htm", destination: "/invitados/omar-cozzolino", permanent: true },
      { source: "/invitadchileno.htm", destination: "/invitados/peter-smith", permanent: true },
      { source: "/jesuscso.html", destination: "/invitados/jesus-caso", permanent: true },
      { source: "/joseluisros.htm", destination: "/invitados/jose-luis-ros", permanent: true },

      // Videos
      { source: "/videos.htm", destination: "/videos", permanent: true },
      { source: "/videosyoutube.html", destination: "/videos", permanent: true },
      { source: "/videos youtube.htm", destination: "/videos", permanent: true },

      // Ventas
      { source: "/ventas2.htm", destination: "/ventas", permanent: true },
      { source: "/lotes.htm", destination: "/ventas/lotes", permanent: true },
      { source: "/piezasparamecano.htm", destination: "/ventas/piezas", permanent: true },
      { source: "/motores.htm", destination: "/ventas/motores", permanent: true },
      { source: "/calderas.htm", destination: "/ventas/equipos-antiguos", permanent: true },
      { source: "/equiposantiguos.htm", destination: "/ventas/equipos-antiguos", permanent: true },
      { source: "/modelosarmadosparaventa.htm", destination: "/ventas/modelos-armados", permanent: true },
      { source: "/fuentes.htm", destination: "/ventas/equipos-antiguos", permanent: true },
      { source: "/restauracion.htm", destination: "/ventas/equipos-antiguos", permanent: true },
      { source: "/losprecios.htm", destination: "/ventas", permanent: true },
      { source: "/preciosal publico.html", destination: "/ventas", permanent: true },

      // Otras secciones
      { source: "/gracias.htm", destination: "/gracias", permanent: true },
      { source: "/exposiciones.htm", destination: "/exposiciones", permanent: true },
      { source: "/miscelaneas.htm", destination: "/exposiciones", permanent: true },
      { source: "/consultas tecnicas.htm", destination: "/contacto", permanent: true },
      { source: "/meccanarte.html", destination: "/meccanarte", permanent: true },
      { source: "/librodevisitas.htm", destination: "/libro-de-visitas", permanent: true },
      { source: "/ingles.htm", destination: "/acerca", permanent: true },
      { source: "/club.htm", destination: "/acerca", permanent: true },
      { source: "/empresas.html", destination: "/acerca", permanent: true },
      { source: "/bordo.html", destination: "/acerca", permanent: true },
      { source: "/clasificados.html", destination: "/acerca", permanent: true },

      // Fotos y galerías
      { source: "/fotitosartes.htm", destination: "/meccanarte", permanent: true },
      { source: "/fotossitjart.htm", destination: "/meccanarte", permanent: true },
      { source: "/fotoscine.htm", destination: "/meccanarte", permanent: true },
    ]
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "img.youtube.com",
      },
    ],
  },
}

export default nextConfig
