import type React from "react"
import "./globals.css"
import { Inter } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"
import Navigation from "@/components/pulse-knowledge/navigation"
import FloatingWhatsApp from "@/components/pulse-knowledge/floating-whatsapp"
import Footer from "@/components/pulse-knowledge/footer"
import { LanguageProvider } from "@/contexts/language-context"

const inter = Inter({ subsets: ["latin"] })

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
          <LanguageProvider>
            <Navigation />
            <main className="min-h-screen bg-white pt-16">{children}</main>
            <Footer />
            <FloatingWhatsApp />
          </LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}

export const metadata = {
      generator: 'v0.dev'
    };
