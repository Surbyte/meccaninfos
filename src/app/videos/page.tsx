import type { Metadata } from "next"
import { SectionHero } from "@/components/shared/SectionHero"
import { VideoEmbed } from "@/components/shared/VideoEmbed"
import { videos } from "@/lib/data/videos"

export const metadata: Metadata = {
  title: "Videos",
  description: "Galería de videos de construcciones Meccano.",
}

export default function VideosPage() {
  return (
    <>
      <SectionHero
        titulo="Videos"
        descripcion="Los videos son gentileza del Sr. Fontan. Mirá las construcciones Meccano en acción."
      />
      <section className="section-padding">
        <div className="container-meccano">
          <div className="grid gap-8 sm:grid-cols-2">
            {videos.map((v) => (
              <div key={v.id}>
                <VideoEmbed youtubeId={v.youtubeId} titulo={v.titulo} />
                <h3 className="mt-3 text-lg font-semibold text-slate-900">{v.titulo}</h3>
                {v.tituloEn && (
                  <p className="text-sm text-slate-500">{v.tituloEn}</p>
                )}
                {v.autor && (
                  <p className="text-sm text-slate-400">Por: {v.autor}</p>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
