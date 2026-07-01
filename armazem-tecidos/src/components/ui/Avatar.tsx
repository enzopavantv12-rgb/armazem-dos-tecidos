import { cn } from "../../lib/utils"
import type { ReactNode } from "react"

interface AvatarProps {
  className?: string
  children: ReactNode
}

interface AvatarImageProps {
  src?: string
  className?: string
}

interface AvatarFallbackProps {
  children: ReactNode
  className?: string
}

export function Avatar({ className, children }: AvatarProps) {
  return (
    <span className={cn("relative flex shrink-0 overflow-hidden rounded-full", className)}>
      {children}
    </span>
  )
}

export function AvatarImage({ src, className }: AvatarImageProps) {
  if (!src) return null
  return (
    <img
      src={src}
      alt=""
      className={cn("aspect-square h-full w-full object-cover", className)}
    />
  )
}

export function AvatarFallback({ children, className }: AvatarFallbackProps) {
  return (
    <span
      className={cn(
        "flex h-full w-full items-center justify-center rounded-full font-bold text-xs",
        className,
      )}
    >
      {children}
    </span>
  )
}
