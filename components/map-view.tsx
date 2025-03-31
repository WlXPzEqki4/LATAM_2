"use client"

import { useState, useEffect, useRef } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { ZoomIn, ZoomOut, Play, Pause, ArrowRight, RotateCw, RefreshCw } from "lucide-react"

// Flight route coordinates
const routes = [
  {
    origin: { name: "Dubai", coordinates: [55.2708, 25.2048] },
    destination: { name: "Rio de Janeiro", coordinates: [-43.1729, -22.9068] },
  },
  {
    origin: { name: "Rio de Janeiro", coordinates: [-43.1729, -22.9068] },
    destination: { name: "Buenos Aires", coordinates: [-58.3816, -34.6037] },
  },
  {
    origin: { name: "Buenos Aires", coordinates: [-58.3816, -34.6037] },
    destination: { name: "Santiago", coordinates: [-70.6693, -33.4489] },
  },
  {
    origin: { name: "Santiago", coordinates: [-70.6693, -33.4489] },
    destination: { name: "Sao Paulo", coordinates: [-46.6333, -23.5505] },
  },
  {
    origin: { name: "Sao Paulo", coordinates: [-46.6333, -23.5505] },
    destination: { name: "Dubai", coordinates: [55.2708, 25.2048] },
  },
]

// Define fixed locations for consistent labeling
const locations = [
  { name: "Dubai", coordinates: [55.2708, 25.2048], label: "A" },
  { name: "Rio de Janeiro", coordinates: [-43.1729, -22.9068], label: "B" },
  { name: "Buenos Aires", coordinates: [-58.3816, -34.6037], label: "C" },
  { name: "Santiago", coordinates: [-70.6693, -33.4489], label: "D" },
  { name: "Sao Paulo", coordinates: [-46.6333, -23.5505], label: "E" },
]

// Helper function to get location label
const getLocationLabel = (name: string) => {
  const location = locations.find((loc) => loc.name === name)
  return location ? location.label : ""
}

export default function MapView() {
  const mapContainer = useRef<HTMLDivElement>(null)
  const map = useRef<any>(null)
  const [mapStyle, setMapStyle] = useState("light")
  const [currentRouteIndex, setCurrentRouteIndex] = useState(0)
  const [isAnimating, setIsAnimating] = useState(true)
  const [isMapLoaded, setIsMapLoaded] = useState(false)
  const [isAutoRotating, setIsAutoRotating] = useState(false)
  const [mapError, setMapError] = useState<string | null>(null)
  const [displayedRoutes, setDisplayedRoutes] = useState<number[]>([])
  const [allRoutesDisplayed, setAllRoutesDisplayed] = useState(false)
  const markersRef = useRef<any[]>([])
  const routeLayersRef = useRef<string[]>([])
  const animationRef = useRef<number | null>(null)
  const animationTimerRef = useRef<NodeJS.Timeout | null>(null)
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const routeAnimationsRef = useRef<{ [key: string]: number }>({})

  // Initialize map when component mounts
  useEffect(() => {
    // Load Mapbox GL JS script
    const loadMapboxScript = () => {
      return new Promise<void>((resolve, reject) => {
        try {
          // Check if mapboxgl is already available
          if (window.mapboxgl) {
            console.log("Mapbox already loaded, using existing instance")
            resolve()
            return
          }

          console.log("Loading Mapbox script...")
          const script = document.createElement("script")
          script.src = "https://api.mapbox.com/mapbox-gl-js/v2.15.0/mapbox-gl.js"
          script.async = true
          script.crossOrigin = "anonymous"

          script.onload = () => {
            if (window.mapboxgl) {
              console.log("Mapbox script loaded successfully")
              resolve()
            } else {
              const error = new Error("mapboxgl not available after script load")
              console.error(error)
              reject(error)
            }
          }

          script.onerror = (event) => {
            const error = new Error("Failed to load Mapbox GL JS")
            console.error(error, event)
            reject(error)
          }

          document.head.appendChild(script)

          // Add CSS for Mapbox
          const link = document.createElement("link")
          link.href = "https://api.mapbox.com/mapbox-gl-js/v2.15.0/mapbox-gl.css"
          link.rel = "stylesheet"
          document.head.appendChild(link)
        } catch (err) {
          console.error("Error setting up Mapbox script:", err)
          reject(new Error("Error setting up Mapbox script: " + (err instanceof Error ? err.message : String(err))))
        }
      })
    }

    // Function to initialize the map
    const initializeMap = () => {
      if (map.current) return // initialize map only once

      try {
        // Use the provided API key
        if (!window.mapboxgl) {
          throw new Error("mapboxgl is not available")
        }

        window.mapboxgl.accessToken =
          "pk.eyJ1IjoiamNkZW50b24yMDUxIiwiYSI6ImNtMzVkZXJudTA5ejkya3B5NDU4Z2MyeHQifQ.aUk4eH5k3JC45Foxcbe2qQ"
        console.log("Set Mapbox access token:", window.mapboxgl.accessToken)

        const mapStyleUrl = getMapStyleUrl(mapStyle)

        // Check if container is available
        if (!mapContainer.current) {
          throw new Error("Map container not available")
        }

        try {
          console.log("Initializing map with container:", mapContainer.current)
          map.current = new window.mapboxgl.Map({
            container: mapContainer.current,
            style: mapStyleUrl,
            center: [0, 20], // Center the map to show both continents
            zoom: 1.5,
            projection: "globe",
            attributionControl: false,
          })
          console.log("Map initialized successfully")
        } catch (mapInitError) {
          console.error("Error during map initialization:", mapInitError)
          setMapError(
            "Map initialization error: " +
              (mapInitError instanceof Error ? mapInitError.message : String(mapInitError)),
          )
          return
        }

        map.current.on("load", () => {
          try {
            // Add atmosphere and stars for globe effect
            map.current.setFog({
              color: "rgb(186, 210, 235)", // Lower atmosphere
              "high-color": "rgb(36, 92, 223)", // Upper atmosphere
              "horizon-blend": 0.02, // Atmosphere thickness
              "space-color": "rgb(11, 11, 25)", // Background (space) color
              "star-intensity": 0.6, // Background star brightness
            })

            setIsMapLoaded(true)

            // Wait a moment before adding markers and routes to ensure the map is fully loaded
            setTimeout(() => {
              try {
                if (!map.current) return
                addMarkers()
                // Start with the first route
                addRoute(0)
                setDisplayedRoutes([0])
              } catch (err) {
                console.error("Error initializing map features:", err)
              }
            }, 500)

            // Start auto-rotation if enabled
            if (isAutoRotating) {
              startAutoRotate()
            }
          } catch (err) {
            console.error("Error setting up map:", err)
            setMapError("Error initializing map features")
          }
        })

        map.current.on("error", (err) => {
          console.error("Mapbox error:", err)
          let errorMessage = "Unknown map error"

          if (err && typeof err === "object") {
            // Try to extract the actual error message
            if (err.error && typeof err.error === "string") {
              errorMessage = err.error
            } else if (err.error && typeof err.error === "object" && err.error.message) {
              errorMessage = err.error.message
            } else if (err.message) {
              errorMessage = err.message
            } else {
              try {
                errorMessage = JSON.stringify(err)
              } catch (e) {
                errorMessage = "Unprocessable error object"
              }
            }
          } else if (typeof err === "string") {
            errorMessage = err
          }

          setMapError("Map error: " + errorMessage)
        })

        // Add navigation controls
        map.current.addControl(new window.mapboxgl.NavigationControl(), "bottom-right")
      } catch (err) {
        console.error("Error creating map:", err)
        setMapError("Could not initialize map: " + (err instanceof Error ? err.message : "Unknown error"))
      }
    }

    // Main initialization
    loadMapboxScript()
      .then(() => {
        initializeMap()
      })
      .catch((err) => {
        console.error("Error loading Mapbox:", err)
        setMapError("Could not load map library: " + err.message)
      })

    // Cleanup function
    return () => {
      // Cancel all animations
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current)
        animationRef.current = null
      }

      // Clear all route animations
      Object.values(routeAnimationsRef.current).forEach((id) => {
        cancelAnimationFrame(id)
      })
      routeAnimationsRef.current = {}

      // Clear any timers
      if (animationTimerRef.current) {
        clearInterval(animationTimerRef.current)
        animationTimerRef.current = null
      }

      // Remove the map
      if (map.current) {
        try {
          map.current.remove()
        } catch (err) {
          console.error("Error removing map:", err)
        } finally {
          map.current = null
        }
      }
    }
  }, [])

  // Get the appropriate Mapbox style URL based on the selected style
  const getMapStyleUrl = (style: string) => {
    switch (style) {
      case "light":
        return "mapbox://styles/mapbox/light-v11"
      case "dark":
        return "mapbox://styles/mapbox/dark-v11"
      case "satellite":
        return "mapbox://styles/mapbox/satellite-streets-v12"
      default:
        return "mapbox://styles/mapbox/light-v11"
    }
  }

  // Auto-rotate the globe
  const startAutoRotate = () => {
    if (!map.current || !isAutoRotating) return

    const rotateCamera = () => {
      if (!map.current || !isAutoRotating) return

      try {
        map.current.rotateTo((map.current.getBearing() + 0.2) % 360, { duration: 0 })
        animationRef.current = requestAnimationFrame(rotateCamera)
      } catch (err) {
        console.error("Error in auto-rotation:", err)
        // Stop trying to rotate if there's an error
        if (animationRef.current) {
          cancelAnimationFrame(animationRef.current)
          animationRef.current = null
        }
      }
    }

    animationRef.current = requestAnimationFrame(rotateCamera)
  }

  // Toggle auto-rotation
  const toggleAutoRotate = () => {
    setIsAutoRotating(!isAutoRotating)

    if (!isAutoRotating && map.current) {
      startAutoRotate()
    } else if (animationRef.current) {
      cancelAnimationFrame(animationRef.current)
      animationRef.current = null
    }
  }

  // Reset all routes and start over
  const resetRoutes = () => {
    if (!map.current || !isMapLoaded) return

    // Cancel all route animations
    Object.values(routeAnimationsRef.current).forEach((id) => {
      cancelAnimationFrame(id)
    })
    routeAnimationsRef.current = {}

    // Remove all existing route layers
    routeLayersRef.current.forEach((layerId) => {
      try {
        if (map.current && map.current.getLayer(layerId)) {
          map.current.removeLayer(layerId)
        }
      } catch (err) {
        console.error(`Error removing layer ${layerId}:`, err)
      }

      try {
        if (map.current && map.current.getSource(layerId)) {
          map.current.removeSource(layerId)
        }
      } catch (err) {
        console.error(`Error removing source ${layerId}:`, err)
      }
    })

    // Reset state
    routeLayersRef.current = []
    setDisplayedRoutes([])
    setCurrentRouteIndex(0)
    setAllRoutesDisplayed(false)

    // Add the first route after a short delay
    setTimeout(() => {
      try {
        if (!map.current) return

        addRoute(0)
        setDisplayedRoutes([0])
        setIsAnimating(true)
      } catch (err) {
        console.error("Error adding first route after reset:", err)
      }
    }, 100)
  }

  // Update map style when it changes
  useEffect(() => {
    if (!map.current || !isMapLoaded) return

    try {
      const mapStyleUrl = getMapStyleUrl(mapStyle)
      // Store the current displayed routes before changing style
      const currentRoutes = [...displayedRoutes]

      // Cancel all route animations
      Object.values(routeAnimationsRef.current).forEach((id) => {
        cancelAnimationFrame(id)
      })
      routeAnimationsRef.current = {}

      map.current.setStyle(mapStyleUrl)

      // Need to re-add markers and routes after style change
      map.current.once("styledata", () => {
        try {
          // Check if map still exists after style change
          if (!map.current) return

          // Re-add atmosphere for globe effect
          map.current.setFog({
            color: "rgb(186, 210, 235)", // Lower atmosphere
            "high-color": "rgb(36, 92, 223)", // Upper atmosphere
            "horizon-blend": 0.02, // Atmosphere thickness
            "space-color": "rgb(11, 11, 25)", // Background (space) color
            "star-intensity": 0.6, // Background star brightness
          })

          // Wait a moment to ensure the style is fully loaded
          setTimeout(() => {
            try {
              // Double check map still exists
              if (!map.current) return

              addMarkers()

              // Clear the route layers ref since we're re-adding all routes
              routeLayersRef.current = []

              // Re-add all displayed routes one by one with a small delay
              currentRoutes.forEach((routeIndex, i) => {
                setTimeout(() => {
                  try {
                    if (!map.current) return
                    addRoute(routeIndex)
                  } catch (err) {
                    console.error(`Error re-adding route ${routeIndex}:`, err)
                  }
                }, i * 100)
              })
            } catch (err) {
              console.error("Error re-adding map features:", err)
            }
          }, 500)
        } catch (err) {
          console.error("Error setting up map after style change:", err)
        }
      })
    } catch (err) {
      console.error("Error changing map style:", err)
    }
  }, [isMapLoaded, mapStyle])

  // Add markers for all locations
  const addMarkers = () => {
    if (!map.current) return

    try {
      // Clear existing markers
      markersRef.current.forEach((marker) => {
        try {
          marker.remove()
        } catch (err) {
          console.error("Error removing marker:", err)
        }
      })
      markersRef.current = []

      // Add new markers
      locations.forEach((location) => {
        try {
          // Create custom marker element
          const el = document.createElement("div")
          el.className = "marker"
          el.style.width = "30px"
          el.style.height = "30px"
          el.style.borderRadius = "50%"
          el.style.backgroundColor = "rgba(124, 58, 237, 0.8)"
          el.style.display = "flex"
          el.style.alignItems = "center"
          el.style.justifyContent = "center"
          el.style.color = "white"
          el.style.fontWeight = "bold"
          el.style.border = "2px solid white"
          el.innerHTML = location.label

          // Add marker to map
          const marker = new window.mapboxgl.Marker(el)
            .setLngLat(location.coordinates)
            .setPopup(new window.mapboxgl.Popup({ offset: 25 }).setHTML(`<h3>${location.name}</h3>`))
            .addTo(map.current)

          markersRef.current.push(marker)
        } catch (err) {
          console.error(`Error adding marker for ${location.name}:`, err)
        }
      })
    } catch (err) {
      console.error("Error adding markers:", err)
    }
  }

  // Add a single route to the map
  const addRoute = (routeIndex: number) => {
    if (!map.current || !isMapLoaded) return

    try {
      const route = routes[routeIndex]
      const sourceId = `route-${routeIndex}`

      // Cancel any existing animation for this route
      if (routeAnimationsRef.current[sourceId]) {
        cancelAnimationFrame(routeAnimationsRef.current[sourceId])
        delete routeAnimationsRef.current[sourceId]
      }

      // Check if the source already exists and remove it if it does
      if (map.current.getLayer(sourceId)) {
        try {
          map.current.removeLayer(sourceId)
          console.log(`Removed existing layer: ${sourceId}`)
        } catch (err) {
          console.error(`Error removing layer ${sourceId}:`, err)
          // Continue anyway
        }
      }

      if (map.current.getSource(sourceId)) {
        try {
          map.current.removeSource(sourceId)
          console.log(`Removed existing source: ${sourceId}`)
        } catch (err) {
          console.error(`Error removing source ${sourceId}:`, err)
          // Continue anyway
        }
      }

      // Create a great circle route (arc) between the two points
      const origin = route.origin.coordinates
      const destination = route.destination.coordinates

      // Generate points along the great circle
      const points = generateGreatCirclePoints(origin, destination)

      // Add to our list of route layers if not already there
      if (!routeLayersRef.current.includes(sourceId)) {
        routeLayersRef.current.push(sourceId)
      }

      // Add the source
      map.current.addSource(sourceId, {
        type: "geojson",
        data: {
          type: "Feature",
          properties: {},
          geometry: {
            type: "LineString",
            coordinates: points,
          },
        },
      })

      // Use a different color for each route
      const colors = [
        "#7c3aed", // Purple
        "#ef4444", // Red
        "#3b82f6", // Blue
        "#10b981", // Green
        "#f59e0b", // Amber
      ]

      // Add the layer
      map.current.addLayer({
        id: sourceId,
        type: "line",
        source: sourceId,
        layout: {
          "line-join": "round",
          "line-cap": "round",
        },
        paint: {
          "line-color": colors[routeIndex % colors.length],
          "line-width": 3,
          "line-dasharray": [0, 2],
        },
      })

      // Animate the line
      let step = 0
      const animateLine = () => {
        if (!map.current) return

        try {
          if (map.current.getLayer(sourceId)) {
            step = (step + 1) % 300
            map.current.setPaintProperty(sourceId, "line-dasharray", [0, 2, step / 10, 2])
            routeAnimationsRef.current[sourceId] = requestAnimationFrame(animateLine)
          }
        } catch (err) {
          console.error(`Error animating route ${sourceId}:`, err)
          // Stop the animation if there's an error
          if (routeAnimationsRef.current[sourceId]) {
            cancelAnimationFrame(routeAnimationsRef.current[sourceId])
            delete routeAnimationsRef.current[sourceId]
          }
        }
      }

      // Start the animation
      routeAnimationsRef.current[sourceId] = requestAnimationFrame(animateLine)

      // If this is the first route, fit the map to show all locations
      if (routeIndex === 0) {
        try {
          const bounds = new window.mapboxgl.LngLatBounds()
          locations.forEach((location) => {
            bounds.extend(location.coordinates)
          })

          map.current.fitBounds(bounds, {
            padding: 100,
            duration: 2000,
          })
        } catch (err) {
          console.error("Error fitting map to bounds:", err)
        }
      }
    } catch (err) {
      console.error("Error adding route:", err)
    }
  }

  // Generate points along a great circle path
  const generateGreatCirclePoints = (start: number[], end: number[]) => {
    try {
      const points = []
      const startLat = (start[1] * Math.PI) / 180
      const startLng = (start[0] * Math.PI) / 180
      const endLat = (end[1] * Math.PI) / 180
      const endLng = (end[0] * Math.PI) / 180

      // Number of points to generate along the path
      const numPoints = 100

      for (let i = 0; i <= numPoints; i++) {
        const fraction = i / numPoints

        // Calculate intermediate point using spherical interpolation
        const a = Math.sin(((1 - fraction) * Math.PI) / 2) / Math.sin(Math.PI / 2)
        const b = Math.sin((fraction * Math.PI) / 2) / Math.sin(Math.PI / 2)

        const x = a * Math.cos(startLat) * Math.cos(startLng) + b * Math.cos(endLat) * Math.cos(endLng)
        const y = a * Math.cos(startLat) * Math.sin(startLng) + b * Math.cos(endLat) * Math.sin(endLng)
        const z = a * Math.sin(startLat) + b * Math.sin(endLat)

        const lat = Math.atan2(z, Math.sqrt(x * x + y * y))
        const lng = Math.atan2(y, x)

        // Convert back to degrees and add to points array
        points.push([(lng * 180) / Math.PI, (lat * 180) / Math.PI])
      }

      return points
    } catch (err) {
      console.error("Error generating great circle points:", err)
      // Return a simple straight line as fallback
      return [start, end]
    }
  }

  // Animation effect to cycle through routes
  useEffect(() => {
    // Clear any existing timer
    if (animationTimerRef.current) {
      clearInterval(animationTimerRef.current)
      animationTimerRef.current = null
    }

    if (!isAnimating || allRoutesDisplayed || !isMapLoaded || !map.current) return

    // Use setTimeout instead of setInterval for better error handling
    const scheduleNextRoute = () => {
      animationTimerRef.current = setTimeout(() => {
        setCurrentRouteIndex((prevIndex) => {
          const nextIndex = prevIndex + 1

          // If we've reached the end of all routes, stop animation
          if (nextIndex >= routes.length) {
            setIsAnimating(false)
            setAllRoutesDisplayed(true)
            return prevIndex
          }

          // Add the next route
          try {
            if (!map.current) return prevIndex

            addRoute(nextIndex)
            setDisplayedRoutes((prev) => [...prev, nextIndex])

            // Schedule the next route
            scheduleNextRoute()

            return nextIndex
          } catch (err) {
            console.error("Error adding next route:", err)
            // If there's an error, stop the animation
            setIsAnimating(false)
            return prevIndex
          }
        })
      }, 3000) // Add a new route every 3 seconds
    }

    // Start the animation
    scheduleNextRoute()

    // Cleanup function
    return () => {
      if (animationTimerRef.current) {
        clearTimeout(animationTimerRef.current)
        animationTimerRef.current = null
      }
    }
  }, [isAnimating, allRoutesDisplayed, isMapLoaded])

  const handleZoomIn = () => {
    if (!map.current || !isMapLoaded) return
    map.current.zoomIn()
  }

  const handleZoomOut = () => {
    if (!map.current || !isMapLoaded) return
    map.current.zoomOut()
  }

  const toggleAnimation = () => {
    if (allRoutesDisplayed) {
      // If all routes are already displayed, reset and start over
      resetRoutes()
    } else {
      // Otherwise just toggle animation
      setIsAnimating(!isAnimating)
    }
  }

  // Current route being animated
  const currentRoute = currentRouteIndex < routes.length ? routes[currentRouteIndex] : null

  return (
    <div className="space-y-4">
      <div className="w-full">
        <div className="flex justify-end items-center mb-4">
          <div className="flex items-center gap-2">
            <button
              onClick={handleZoomIn}
              className="p-2 rounded-md hover:bg-muted transition-colors"
              aria-label="Zoom in"
            >
              <ZoomIn className="h-5 w-5" />
            </button>
            <button
              onClick={handleZoomOut}
              className="p-2 rounded-md hover:bg-muted transition-colors"
              aria-label="Zoom out"
            >
              <ZoomOut className="h-5 w-5" />
            </button>
            <button
              onClick={toggleAutoRotate}
              className={`p-2 rounded-md hover:bg-muted transition-colors ${isAutoRotating ? "bg-primary/10" : ""}`}
              aria-label={isAutoRotating ? "Stop auto-rotation" : "Start auto-rotation"}
            >
              <RotateCw className="h-5 w-5" />
            </button>
            <button
              onClick={resetRoutes}
              className="p-2 rounded-md hover:bg-muted transition-colors"
              aria-label="Reset routes"
            >
              <RefreshCw className="h-5 w-5" />
            </button>
            <button
              onClick={toggleAnimation}
              className={`p-2 rounded-md hover:bg-muted transition-colors ${isAnimating ? "bg-primary/10" : ""}`}
              aria-label={isAnimating ? "Pause animation" : allRoutesDisplayed ? "Reset animation" : "Play animation"}
            >
              {isAnimating ? <Pause className="h-5 w-5" /> : <Play className="h-5 w-5" />}
            </button>
          </div>
        </div>

        <Card>
          <CardContent className="p-1">
            <div className="relative w-full h-[500px] rounded-lg overflow-hidden">
              {/* Main map container */}
              <div ref={mapContainer} className="w-full h-full" />

              {/* Loading indicator */}
              {!isMapLoaded && (
                <div className="absolute inset-0 flex items-center justify-center bg-background/50">
                  <div className="text-center">
                    <div className="animate-spin h-8 w-8 border-4 border-primary border-t-transparent rounded-full mx-auto mb-2"></div>
                    <p>Loading globe...</p>
                  </div>
                </div>
              )}

              {/* Current flight indicator */}
              {currentRoute && isAnimating && !allRoutesDisplayed && (
                <div className="absolute bottom-4 left-4 bg-background/80 p-3 rounded-md shadow-md">
                  <p className="text-sm font-medium">
                    Adding route: {currentRoute.origin.name} → {currentRoute.destination.name}
                  </p>
                  <p className="text-xs text-muted-foreground mt-1">
                    {displayedRoutes.length} of {routes.length} routes displayed
                  </p>
                </div>
              )}

              {/* All routes displayed message */}
              {allRoutesDisplayed && (
                <div className="absolute bottom-4 left-4 bg-background/80 p-3 rounded-md shadow-md">
                  <p className="text-sm font-medium">All routes displayed</p>
                  <p className="text-xs text-muted-foreground mt-1">Use the controls to interact with the map</p>
                </div>
              )}

              {mapError && (
                <div className="absolute inset-0 flex items-center justify-center bg-background/80">
                  <div className="text-center p-4 bg-destructive/10 rounded-lg max-w-md">
                    <p className="text-destructive font-medium mb-2">Map Error</p>
                    <p className="text-sm">{mapError}</p>
                    <button
                      className="mt-4 px-4 py-2 bg-primary text-primary-foreground rounded-md"
                      onClick={() => {
                        setMapError(null)
                        resetRoutes()
                      }}
                    >
                      Try Again
                    </button>
                  </div>
                </div>
              )}
            </div>
          </CardContent>
        </Card>

        {mapError && (
          <div className="mt-4 p-4 border border-destructive/50 rounded-lg bg-destructive/10">
            <h3 className="font-medium text-destructive mb-2">Map could not be loaded</h3>
            <p className="text-sm mb-4">{mapError}</p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 text-sm">
              {routes.map((route, index) => (
                <div key={index} className="p-3 bg-background rounded-md border">
                  <div className="font-medium mb-1">Route {index + 1}</div>
                  <div className="text-muted-foreground">
                    {route.origin.name} → {route.destination.name}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Rest of the component remains the same */}
      <div className="bg-muted/30 p-4 rounded-lg">
        <h3 className="font-medium mb-2">Flight Route Legend</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 text-sm">
          {routes.map((route, index) => {
            const originLabel = getLocationLabel(route.origin.name)
            const destLabel = getLocationLabel(route.destination.name)
            const isDisplayed = displayedRoutes.includes(index)

            return (
              <div
                key={index}
                className={`flex items-center gap-2 p-2 rounded ${
                  isDisplayed
                    ? currentRouteIndex === index && isAnimating
                      ? "bg-primary/10"
                      : "bg-muted"
                    : "opacity-50"
                }`}
                onClick={() => {
                  if (!isDisplayed && !isAnimating) {
                    // Add this route if it's not displayed yet
                    addRoute(index)
                    setDisplayedRoutes((prev) => [...prev, index])
                    setCurrentRouteIndex(index)
                  } else if (map.current && isMapLoaded) {
                    // Focus on this route
                    const bounds = new window.mapboxgl.LngLatBounds()
                    bounds.extend(route.origin.coordinates)
                    bounds.extend(route.destination.coordinates)

                    map.current.fitBounds(bounds, {
                      padding: 100,
                      duration: 2000,
                    })
                  }
                }}
                style={{ cursor: "pointer" }}
              >
                <div className="flex items-center justify-center w-8 h-8 rounded-full bg-primary/10 text-primary font-medium">
                  {originLabel}
                </div>
                <ArrowRight className="h-4 w-4 text-muted-foreground" />
                <div className="flex items-center justify-center w-8 h-8 rounded-full bg-primary/10 text-primary font-medium">
                  {destLabel}
                </div>
                <span className="ml-2">
                  {route.origin.name} → {route.destination.name}
                </span>
              </div>
            )
          })}
        </div>
      </div>

      <div className="mt-4">
        <h4 className="text-sm font-medium mb-2">Locations</h4>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 text-sm">
          {locations.map((location, index) => (
            <div
              key={index}
              className="flex items-center gap-2"
              onClick={() => {
                if (map.current && isMapLoaded) {
                  map.current.flyTo({
                    center: location.coordinates,
                    zoom: 4,
                    duration: 2000,
                  })
                }
              }}
              style={{ cursor: "pointer" }}
            >
              <div className="flex items-center justify-center w-8 h-8 rounded-full bg-primary/10 text-primary font-medium">
                {location.label}
              </div>
              <span>{location.name}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

