"use client"

import { useState } from "react"
import Image from "next/image"

interface ImageGalleryProps {
  images: string[]
  alt: string
}

export function ImageGallery({ images, alt }: ImageGalleryProps) {
  const [selected, setSelected] = useState(0)

  if (images.length === 0) return null

  return (
    <div className="space-y-4">
      <div className="relative aspect-video overflow-hidden rounded-xl bg-slate-100">
        <Image
          src={images[selected]}
          alt={`${alt} - Imagen ${selected + 1}`}
          fill
          className="object-contain"
          sizes="(max-width: 768px) 100vw, 50vw"
        />
      </div>
      {images.length > 1 && (
        <div className="flex gap-2 overflow-x-auto pb-2">
          {images.map((img, i) => (
            <button
              key={i}
              onClick={() => setSelected(i)}
              className={`relative h-20 w-28 flex-shrink-0 overflow-hidden rounded-lg border-2 transition-all ${
                i === selected ? "border-meccano-red shadow-md" : "border-slate-200 opacity-70 hover:opacity-100"
              }`}
            >
              <Image
                src={img}
                alt={`${alt} - Miniatura ${i + 1}`}
                fill
                className="object-cover"
                sizes="112px"
              />
            </button>
          ))}
        </div>
      )}
    </div>
  )
}
