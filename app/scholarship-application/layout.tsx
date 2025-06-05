"use client"

import type React from "react"
import { ThemeProvider } from "@/components/theme-provider"
import Navigation from "@/components/pulse-knowledge/navigation"
import { LanguageProvider } from "@/contexts/language-context"

export default function ScholarshipApplicationLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
      <LanguageProvider>
        <Navigation />
        <main className="min-h-screen bg-white">{children}</main>
      </LanguageProvider>
    </ThemeProvider>
  )
}
