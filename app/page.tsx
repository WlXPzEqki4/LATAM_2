"use client"

import { useState, useEffect } from "react"
import LandingPage from "@/components/landing-page"
import Dashboard from "@/components/dashboard"

export default function Home() {
  const [loading, setLoading] = useState(true)
  const [scrollPosition, setScrollPosition] = useState(0)
  const windowHeight = typeof window !== "undefined" ? window.innerHeight : 0

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setLoading(false)
    }, 1500)

    return () => clearTimeout(timer)
  }, [])

  // Track scroll position with improved handling for dashboard content
  useEffect(() => {
    const handleScroll = () => {
      const currentScroll = window.scrollY
      setScrollPosition(currentScroll)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [windowHeight])

  // Calculate opacity based on scroll position
  const landingOpacity = Math.max(0, 1 - scrollPosition / (windowHeight * 0.7))
  const dashboardOpacity = Math.min(1, scrollPosition / (windowHeight * 0.5))

  return (
    <main className="relative">
      {loading ? (
        <div className="fixed inset-0 bg-black flex items-center justify-center z-50">
          <div className="text-white text-4xl font-bold animate-pulse">EDGE</div>
        </div>
      ) : (
        <>
          {/* Landing page */}
          <div
            className="fixed inset-0 transition-opacity duration-300"
            style={{ opacity: landingOpacity, pointerEvents: landingOpacity > 0.1 ? "auto" : "none" }}
          >
            <LandingPage onContinue={() => {}} />
          </div>

          {/* Dashboard */}
          <div
            className="transition-opacity duration-300"
            style={{
              opacity: dashboardOpacity,
              pointerEvents: dashboardOpacity > 0.9 ? "auto" : "none",
              marginTop: windowHeight,
              position: "relative",
            }}
          >
            <Dashboard />
          </div>
        </>
      )}
    </main>
  )
}

