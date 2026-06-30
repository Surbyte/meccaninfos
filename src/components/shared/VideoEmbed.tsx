interface VideoEmbedProps {
  youtubeId: string
  titulo: string
}

export function VideoEmbed({ youtubeId, titulo }: VideoEmbedProps) {
  return (
    <div className="overflow-hidden rounded-xl bg-slate-900 shadow-lg">
      <div className="relative aspect-video">
        <iframe
          src={`https://www.youtube-nocookie.com/embed/${youtubeId}`}
          title={titulo}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="absolute inset-0 h-full w-full"
        />
      </div>
    </div>
  )
}
