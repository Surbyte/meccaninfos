import type { ReactNode } from "react"

interface CardGridProps {
  children: ReactNode
  columns?: 2 | 3 | 4
}

export function CardGrid({ children, columns = 3 }: CardGridProps) {
  const cols = {
    2: "sm:grid-cols-2",
    3: "sm:grid-cols-2 lg:grid-cols-3",
    4: "sm:grid-cols-2 lg:grid-cols-4",
  }

  return (
    <div className={`grid gap-6 ${cols[columns]}`}>
      {children}
    </div>
  )
}
