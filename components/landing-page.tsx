"use client"

import { useState, useEffect } from "react"
import { ChevronDown } from "lucide-react"
import DigitalWave from "./digital-wave"

interface LandingPageProps {
  onContinue: () => void
}

export default function LandingPage({ onContinue }: LandingPageProps) {
  const [scrollOpacity, setScrollOpacity] = useState(0)

  useEffect(() => {
    // Fade in the scroll indicator after a delay
    const timer = setTimeout(() => {
      setScrollOpacity(1)
    }, 2500)

    return () => clearTimeout(timer)
  }, [])

  return (
    <div className="relative min-h-screen">
      {/* Digital wave background */}
      <div className="fixed inset-0 z-0">
        <DigitalWave />
      </div>

      {/* Content overlay */}
      <div className="relative z-10 min-h-screen flex flex-col">
        {/* EDGE logo */}
        <div className="absolute top-6 left-6">
          <img
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Edge_Group_Logo.svg-9fCiANSzCEZV18VqiRtcrracTPfNPb.png"
            alt="EDGE Logo"
            className="h-10 w-auto"
          />
        </div>

        {/* Main content */}
        <div className="flex flex-col justify-center items-end px-12 h-screen">
          <div className="text-right">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">AGENDA & BRIEF</h1>
            <div className="space-y-2">
              <p className="text-2xl md:text-4xl font-semibold text-white">Latin America and Brazil Roadshow:</p>
              <p className="text-2xl md:text-4xl font-semibold text-white">02 - 11 April 2025</p>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2 transition-opacity duration-1000"
          style={{ opacity: scrollOpacity }}
        >
          <div className="flex flex-col items-center text-white animate-bounce">
            <p className="mb-2 text-sm">Scroll to continue</p>
            <ChevronDown className="h-6 w-6" />
          </div>
        </div>
      </div>
    </div>
  )
}

