"use client"

import { Button } from "@/components/ui/button"

interface ScrollToFormButtonProps {
  children: React.ReactNode
  className?: string
  variant?: "default" | "outline" | "ghost" | "link" | "destructive" | "secondary"
}

export function ScrollToFormButton({ children, className, variant = "outline" }: ScrollToFormButtonProps) {
  return (
    <Button
      onClick={() => {
        document.getElementById('lead-form')?.scrollIntoView({ behavior: 'smooth', block: 'start' })
      }}
      variant={variant}
      className={className}
    >
      {children}
    </Button>
  )
}