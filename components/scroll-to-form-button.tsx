"use client"

import { Button } from "@/components/ui/button"

interface ScrollToFormButtonProps {
  children: React.ReactNode
  className?: string
  variant?: "default" | "outline" | "ghost" | "link" | "destructive" | "secondary"
  "aria-label"?: string
}

export function ScrollToFormButton({ children, className, variant = "outline", "aria-label": ariaLabel }: ScrollToFormButtonProps) {
  return (
    <Button
      onClick={() => {
        document.getElementById('lead-form')?.scrollIntoView({ behavior: 'smooth', block: 'start' })
      }}
      variant={variant}
      className={className}
      aria-label={ariaLabel}
    >
      {children}
    </Button>
  )
}