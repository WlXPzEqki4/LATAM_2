"use client"

import { useState, useEffect } from "react"
import Dashboard from "./dashboard"

export default function DashboardWrapper() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <div className={`transition-opacity duration-1000 ${isVisible ? "opacity-100" : "opacity-0"}`}>
      <Dashboard />
    </div>
  )
}

