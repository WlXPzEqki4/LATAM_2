"use client"

import { useState, useEffect, useRef } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import {
  Building,
  TrendingUp,
  ShieldAlert,
  Users,
  Globe,
  FileText,
  Landmark,
  Scale,
  DollarSign,
  Briefcase,
  Handshake,
  Plane,
  Anchor,
  Crosshair,
  Radar,
} from "lucide-react"
import { Progress } from "@/components/ui/progress"

export default function Countries() {
  const [selectedCountry, setSelectedCountry] = useState("argentina")
  // Replace the single mapContainer ref and map ref with separate refs for each country
  const argentinaMapContainer = useRef<HTMLDivElement>(null)
  const chileMapContainer = useRef<HTMLDivElement>(null)
  const brazilMapContainer = useRef<HTMLDivElement>(null)
  const argentinaMap = useRef<any>(null)
  const chileMap = useRef<any>(null)
  const brazilMap = useRef<any>(null)
  const [mapboxLoaded, setMapboxLoaded] = useState(false)

  // Replace the single useEffect with a function to load Mapbox once
  useEffect(() => {
    if (mapboxLoaded) return

    const loadMapboxScript = () => {
      return new Promise<void>((resolve, reject) => {
        try {
          if (window.mapboxgl) {
            console.log("Mapbox already loaded")
            setMapboxLoaded(true)
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
              setMapboxLoaded(true)
              resolve()
            } else {
              reject(new Error("mapboxgl not available after script load"))
            }
          }

          script.onerror = () => {
            reject(new Error("Failed to load Mapbox GL JS"))
          }

          document.head.appendChild(script)

          const link = document.createElement("link")
          link.href = "https://api.mapbox.com/mapbox-gl-js/v2.15.0/mapbox-gl.css"
          link.rel = "stylesheet"
          document.head.appendChild(link)
        } catch (err) {
          console.error("Error setting up Mapbox script:", err)
          reject(err)
        }
      })
    }

    loadMapboxScript()
      .then(() => console.log("Mapbox loaded successfully"))
      .catch((err) => console.error("Error loading Mapbox:", err))
  }, [])

  // Fix the map initialization logic for Argentina, Chile, and Brazil
  // Replace the three separate useEffect hooks with this improved version

  // Add separate useEffect for Argentina map
  useEffect(() => {
    if (!mapboxLoaded || !argentinaMapContainer.current) return

    if (selectedCountry === "argentina" && !argentinaMap.current) {
      if (!window.mapboxgl) return

      window.mapboxgl.accessToken =
        "pk.eyJ1IjoiamNkZW50b24yMDUxIiwiYSI6ImNtMzVkZXJudTA5ejkya3B5NDU4Z2MyeHQifQ.aUk4eH5k3JC45Foxcbe2qQ"

      argentinaMap.current = new window.mapboxgl.Map({
        container: argentinaMapContainer.current,
        style: "mapbox://styles/mapbox/light-v11",
        center: [-65.0, -34.0], // Center on Argentina
        zoom: 3.5,
        attributionControl: false,
      })

      argentinaMap.current.on("load", () => {
        // Add markers for key cities in Argentina
        const cities = [
          { name: "Buenos Aires", coordinates: [-58.3816, -34.6037], description: "Capital" },
          { name: "Córdoba", coordinates: [-64.1888, -31.4201], description: "Industrial Hub" },
          { name: "Mendoza", coordinates: [-68.8272, -32.8908], description: "Wine Region" },
          { name: "Ushuaia", coordinates: [-68.3029, -54.8019], description: "Strategic Naval Base" },
          { name: "Vaca Muerta", coordinates: [-69.15, -38.9], description: "Shale Oil & Gas" },
        ]

        cities.forEach((city) => {
          const el = document.createElement("div")
          el.className = "marker"
          el.style.width = "12px"
          el.style.height = "12px"
          el.style.borderRadius = "50%"
          el.style.backgroundColor = "rgba(124, 58, 237, 0.8)"
          el.style.border = "2px solid white"

          new window.mapboxgl.Marker(el)
            .setLngLat(city.coordinates)
            .setPopup(
              new window.mapboxgl.Popup({ offset: 25 }).setHTML(
                `<h3 style="font-weight: bold; margin-bottom: 4px;">${city.name}</h3>
              <p style="margin: 0;">${city.description}</p>`,
              ),
            )
            .addTo(argentinaMap.current)
        })

        // Add the Falklands/Malvinas marker
        const falklandsEl = document.createElement("div")
        falklandsEl.className = "marker"
        falklandsEl.style.width = "12px"
        falklandsEl.style.height = "12px"
        falklandsEl.style.borderRadius = "50%"
        falklandsEl.style.backgroundColor = "rgba(239, 68, 68, 0.8)"
        falklandsEl.style.border = "2px solid white"

        new window.mapboxgl.Marker(falklandsEl)
          .setLngLat([-59.55, -51.75])
          .setPopup(
            new window.mapboxgl.Popup({ offset: 25 }).setHTML(
              `<h3 style="font-weight: bold; margin-bottom: 4px;">Falklands/Malvinas</h3>
            <p style="margin: 0;">Disputed Territory</p>`,
            ),
          )
          .addTo(argentinaMap.current)
      })
    }

    return () => {
      if (argentinaMap.current && selectedCountry !== "argentina") {
        argentinaMap.current.remove()
        argentinaMap.current = null
      }
    }
  }, [mapboxLoaded, selectedCountry])

  // Add useEffect for Chile map
  useEffect(() => {
    if (!mapboxLoaded || !chileMapContainer.current) return

    if (selectedCountry === "chile" && !chileMap.current) {
      if (!window.mapboxgl) return

      window.mapboxgl.accessToken =
        "pk.eyJ1IjoiamNkZW50b24yMDUxIiwiYSI6ImNtMzVkZXJudTA5ejkya3B5NDU4Z2MyeHQifQ.aUk4eH5k3JC45Foxcbe2qQ"

      chileMap.current = new window.mapboxgl.Map({
        container: chileMapContainer.current,
        style: "mapbox://styles/mapbox/light-v11",
        center: [-71.0, -35.0], // Center on Chile
        zoom: 3.5,
        attributionControl: false,
      })

      chileMap.current.on("load", () => {
        // Add markers for key cities in Chile
        const cities = [
          { name: "Santiago", coordinates: [-70.6693, -33.4489], description: "Capital" },
          { name: "Valparaíso", coordinates: [-71.6273, -33.0472], description: "Major Port" },
          { name: "Concepción", coordinates: [-73.0498, -36.8201], description: "Industrial Center" },
          { name: "Antofagasta", coordinates: [-70.3975, -23.6509], description: "Mining Hub" },
          { name: "Punta Arenas", coordinates: [-70.907, -53.1638], description: "Strategic Naval Base" },
          { name: "Iquique", coordinates: [-70.1435, -20.2307], description: "Free Trade Zone" },
        ]

        cities.forEach((city) => {
          const el = document.createElement("div")
          el.className = "marker"
          el.style.width = "12px"
          el.style.height = "12px"
          el.style.borderRadius = "50%"
          el.style.backgroundColor = "rgba(124, 58, 237, 0.8)"
          el.style.border = "2px solid white"

          new window.mapboxgl.Marker(el)
            .setLngLat(city.coordinates)
            .setPopup(
              new window.mapboxgl.Popup({ offset: 25 }).setHTML(
                `<h3 style="font-weight: bold; margin-bottom: 4px;">${city.name}</h3>
              <p style="margin: 0;">${city.description}</p>`,
              ),
            )
            .addTo(chileMap.current)
        })
      })
    }

    return () => {
      if (chileMap.current && selectedCountry !== "chile") {
        chileMap.current.remove()
        chileMap.current = null
      }
    }
  }, [mapboxLoaded, selectedCountry])

  // Add useEffect for Brazil map
  useEffect(() => {
    if (!mapboxLoaded || !brazilMapContainer.current) return

    if (selectedCountry === "brazil" && !brazilMap.current) {
      if (!window.mapboxgl) return

      window.mapboxgl.accessToken =
        "pk.eyJ1IjoiamNkZW50b24yMDUxIiwiYSI6ImNtMzVkZXJudTA5ejkya3B5NDU4Z2MyeHQifQ.aUk4eH5k3JC45Foxcbe2qQ"

      brazilMap.current = new window.mapboxgl.Map({
        container: brazilMapContainer.current,
        style: "mapbox://styles/mapbox/light-v11",
        center: [-55.0, -15.0], // Center on Brazil
        zoom: 3,
        attributionControl: false,
      })

      brazilMap.current.on("load", () => {
        // Add markers for key cities in Brazil
        const cities = [
          { name: "Brasília", coordinates: [-47.9292, -15.7801], description: "Capital" },
          { name: "São Paulo", coordinates: [-46.6333, -23.5505], description: "Financial Center" },
          { name: "Rio de Janeiro", coordinates: [-43.1729, -22.9068], description: "Tourism Hub" },
          { name: "Manaus", coordinates: [-60.0217, -3.119], description: "Amazon Gateway" },
        ]

        cities.forEach((city) => {
          const el = document.createElement("div")
          el.className = "marker"
          el.style.width = "12px"
          el.style.height = "12px"
          el.style.borderRadius = "50%"
          el.style.backgroundColor = "rgba(124, 58, 237, 0.8)"
          el.style.border = "2px solid white"

          new window.mapboxgl.Marker(el)
            .setLngLat(city.coordinates)
            .setPopup(
              new window.mapboxgl.Popup({ offset: 25 }).setHTML(
                `<h3 style="font-weight: bold; margin-bottom: 4px;">${city.name}</h3>
              <p style="margin: 0;">${city.description}</p>`,
              ),
            )
            .addTo(brazilMap.current)
        })
      })
    }

    return () => {
      if (brazilMap.current && selectedCountry !== "brazil") {
        brazilMap.current.remove()
        brazilMap.current = null
      }
    }
  }, [mapboxLoaded, selectedCountry])

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold tracking-tight">Country Reports</h2>
      </div>

      <Tabs value={selectedCountry} onValueChange={setSelectedCountry} className="w-full">
        <TabsList className="mb-4">
          <TabsTrigger value="argentina">Argentina</TabsTrigger>
          <TabsTrigger value="chile">Chile</TabsTrigger>
          <TabsTrigger value="brazil">Brazil</TabsTrigger>
        </TabsList>

        <TabsContent value="argentina" className="space-y-6">
          {/* Argentina Overview Card */}
          <Card>
            <CardHeader className="pb-3">
              {/* Argentina Flag Update - Significantly larger */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <img
                    src="/images/flag-argentina.png"
                    alt="Argentina Flag"
                    className="w-20 h-12 object-cover shadow-sm"
                  />
                  <div>
                    <CardTitle>Argentina</CardTitle>
                    <CardDescription>South America's second-largest economy</CardDescription>
                  </div>
                </div>
                <Badge variant="outline" className="font-normal">
                  Priority Market
                </Badge>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <p>
                  Argentina is experiencing significant political and economic changes under President Javier Milei's
                  administration, which took office in December 2023. The new government is implementing a series of
                  market-friendly reforms and austerity measures aimed at addressing the country's economic challenges,
                  including high inflation, fiscal deficit, and currency controls.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
                  <div className="flex flex-col p-3 bg-muted/30 rounded-lg">
                    <span className="text-sm text-muted-foreground">Population</span>
                    <span className="text-lg font-medium">45.8 million</span>
                  </div>
                  <div className="flex flex-col p-3 bg-muted/30 rounded-lg">
                    <span className="text-sm text-muted-foreground">Capital</span>
                    <span className="text-lg font-medium">Buenos Aires</span>
                  </div>
                  <div className="flex flex-col p-3 bg-muted/30 rounded-lg">
                    <span className="text-sm text-muted-foreground">Official Language</span>
                    <span className="text-lg font-medium">Spanish</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Map and Key Strategic Points */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <Card className="lg:col-span-2">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Globe className="h-5 w-5 text-primary" />
                  Strategic Map
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div ref={argentinaMapContainer} className="w-full h-[400px] rounded-lg border"></div>
                <div className="mt-4 text-sm text-muted-foreground">
                  Map showing key strategic locations in Argentina, including major cities, resource areas, and the
                  disputed Falklands/Malvinas territory.
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Landmark className="h-5 w-5 text-primary" />
                  Milei Administration
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <h3 className="text-sm font-medium text-muted-foreground">PRESIDENT</h3>
                  <p className="font-medium">Javier Milei</p>
                  <p className="text-sm">Libertarian economist who took office in December 2023</p>
                </div>

                <div className="space-y-2">
                  <h3 className="text-sm font-medium text-muted-foreground">KEY OFFICIALS</h3>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      <div>
                        <span className="font-medium">Luis Petri</span>
                        <p className="text-sm">Minister of Defense</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      <div>
                        <span className="font-medium">Patricia Bullrich</span>
                        <p className="text-sm">Minister of Security</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      <div>
                        <span className="font-medium">Luis Caputo</span>
                        <p className="text-sm">Minister of Economy</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      <div>
                        <span className="font-medium">Diana Mondino</span>
                        <p className="text-sm">Minister of Foreign Affairs</p>
                      </div>
                    </li>
                  </ul>
                </div>

                <div className="space-y-2">
                  <h3 className="text-sm font-medium text-muted-foreground">POLICY DIRECTION</h3>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span>Pro-Western foreign policy</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span>Free-market economic reforms</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span>NATO global partner ambitions</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span>Military modernization</span>
                    </li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Economic Indicators */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <TrendingUp className="h-5 w-5 text-primary" />
                Economic Indicators
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <p>
                  Argentina's economy is undergoing significant transformation as the Milei administration implements
                  structural reforms to address long-standing economic challenges. The country is working to stabilize
                  its currency, reduce inflation, and attract foreign investment.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-4">
                  <Card className="border-none shadow-none bg-muted/30">
                    <CardHeader className="p-3 pb-0">
                      <CardTitle className="text-sm font-medium text-muted-foreground">GDP (2024 est.)</CardTitle>
                    </CardHeader>
                    <CardContent className="p-3 pt-1">
                      <div className="text-2xl font-bold">$621 billion</div>
                      <p className="text-sm text-muted-foreground">Ranked 23rd globally</p>
                    </CardContent>
                  </Card>
                  <Card className="border-none shadow-none bg-muted/30">
                    <CardHeader className="p-3 pb-0">
                      <CardTitle className="text-sm font-medium text-muted-foreground">Inflation Rate</CardTitle>
                    </CardHeader>
                    <CardContent className="p-3 pt-1">
                      <div className="text-2xl font-bold">142.7%</div>
                      <p className="text-sm text-muted-foreground">Year-over-year (March 2024)</p>
                    </CardContent>
                  </Card>
                  <Card className="border-none shadow-none bg-muted/30">
                    <CardHeader className="p-3 pb-0">
                      <CardTitle className="text-sm font-medium text-muted-foreground">Unemployment</CardTitle>
                    </CardHeader>
                    <CardContent className="p-3 pt-1">
                      <div className="text-2xl font-bold">7.7%</div>
                      <p className="text-sm text-muted-foreground">Q4 2023</p>
                    </CardContent>
                  </Card>
                  <Card className="border-none shadow-none bg-muted/30">
                    <CardHeader className="p-3 pb-0">
                      <CardTitle className="text-sm font-medium text-muted-foreground">Defense Budget</CardTitle>
                    </CardHeader>
                    <CardContent className="p-3 pt-1">
                      <div className="text-2xl font-bold">$4.3 billion</div>
                      <p className="text-sm text-muted-foreground">0.7% of GDP (2023)</p>
                    </CardContent>
                  </Card>
                </div>

                {/* Economic Recovery Visualization */}
                <div className="mt-6 p-4 bg-muted/30 rounded-lg">
                  <h3 className="text-lg font-medium mb-4">Economic Recovery Progress</h3>
                  <div className="space-y-4">
                    <div>
                      <div className="flex justify-between mb-1">
                        <span className="text-sm font-medium">Fiscal Deficit Reduction</span>
                        <span className="text-sm font-medium">65%</span>
                      </div>
                      <Progress value={65} className="h-2" />
                    </div>
                    <div>
                      <div className="flex justify-between mb-1">
                        <span className="text-sm font-medium">Inflation Reduction</span>
                        <span className="text-sm font-medium">40%</span>
                      </div>
                      <Progress value={40} className="h-2" />
                    </div>
                    <div>
                      <div className="flex justify-between mb-1">
                        <span className="text-sm font-medium">Foreign Investment Growth</span>
                        <span className="text-sm font-medium">55%</span>
                      </div>
                      <Progress value={55} className="h-2" />
                    </div>
                    <div>
                      <div className="flex justify-between mb-1">
                        <span className="text-sm font-medium">Energy Self-Sufficiency</span>
                        <span className="text-sm font-medium">90%</span>
                      </div>
                      <Progress value={90} className="h-2" />
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground mt-4">
                    Progress metrics based on government data and economic indicators since Milei administration took
                    office in December 2023.
                  </p>
                </div>

                <div className="mt-6 space-y-4">
                  <h3 className="text-lg font-medium">Key Economic Sectors</h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <Card className="bg-muted/30 border-none shadow-sm">
                      <CardHeader className="p-4 pb-2">
                        <div className="flex items-center gap-2">
                          <DollarSign className="h-5 w-5 text-primary" />
                          <CardTitle className="text-base">Energy</CardTitle>
                        </div>
                      </CardHeader>
                      <CardContent className="p-4 pt-0">
                        <p className="text-sm mb-2">
                          Vaca Muerta shale formation development has accelerated, with increased production saving
                          billions in energy imports while boosting exports.
                        </p>
                        <Badge className="bg-green-100 text-green-800 hover:bg-green-100">Growth Area</Badge>
                      </CardContent>
                    </Card>

                    <Card className="bg-muted/30 border-none shadow-sm">
                      <CardHeader className="p-4 pb-2">
                        <div className="flex items-center gap-2">
                          <Briefcase className="h-5 w-5 text-primary" />
                          <CardTitle className="text-base">Mining</CardTitle>
                        </div>
                      </CardHeader>
                      <CardContent className="p-4 pt-0">
                        <p className="text-sm mb-2">
                          Part of South America's "lithium triangle" with significant reserves of lithium, copper, and
                          gold. Major investments from global mining companies.
                        </p>
                        <Badge className="bg-green-100 text-green-800 hover:bg-green-100">Growth Area</Badge>
                      </CardContent>
                    </Card>

                    <Card className="bg-muted/30 border-none shadow-sm">
                      <CardHeader className="p-4 pb-2">
                        <div className="flex items-center gap-2">
                          <Globe className="h-5 w-5 text-primary" />
                          <CardTitle className="text-base">Agriculture</CardTitle>
                        </div>
                      </CardHeader>
                      <CardContent className="p-4 pt-0">
                        <p className="text-sm mb-2">
                          Export taxes on key crops reduced to boost farmer profitability and global competitiveness.
                          Major exports include soybeans, beef, and grains.
                        </p>
                        <Badge className="bg-blue-100 text-blue-800 hover:bg-blue-100">Stable</Badge>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Foreign Policy & International Relations */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Handshake className="h-5 w-5 text-primary" />
                Foreign Policy & International Relations
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="text-lg font-medium mb-3">Western Alignment</h3>
                    <ul className="space-y-3">
                      <li className="flex items-start gap-2">
                        <span className="text-primary mt-1">•</span>
                        <div>
                          <span className="font-medium">NATO Global Partner Status</span>
                          <p className="text-sm">
                            Formal request submitted in April 2024 to join as a global partner, which would grant access
                            to advanced military technology and training.
                          </p>
                        </div>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-primary mt-1">•</span>
                        <div>
                          <span className="font-medium">U.S. Security Cooperation</span>
                          <p className="text-sm">
                            $40 million in Foreign Military Financing (FMF) approved in 2024, the first such grant in
                            over 20 years.
                          </p>
                        </div>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-primary mt-1">•</span>
                        <div>
                          <span className="font-medium">Combined Maritime Forces</span>
                          <p className="text-sm">
                            Joined the U.S.-led 46-nation partnership for maritime security in September 2024.
                          </p>
                        </div>
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-lg font-medium mb-3">Relations with China</h3>
                    <ul className="space-y-3">
                      <li className="flex items-start gap-2">
                        <span className="text-primary mt-1">•</span>
                        <div>
                          <span className="font-medium">Economic Pragmatism</span>
                          <p className="text-sm">
                            Despite ideological differences, maintaining trade relations as China is Argentina's
                            second-largest trading partner.
                          </p>
                        </div>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-primary mt-1">•</span>
                        <div>
                          <span className="font-medium">Currency Swap</span>
                          <p className="text-sm">
                            $18 billion currency swap line with China's central bank renewed in 2024 to bolster
                            Argentina's reserves.
                          </p>
                        </div>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-primary mt-1">•</span>
                        <div>
                          <span className="font-medium">Strategic Rebalancing</span>
                          <p className="text-sm">
                            Withdrew application to join China/Russia-led BRICS bloc while maintaining existing trade
                            agreements.
                          </p>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>

                {/* Relationship Strength Visualization */}
                <div className="mt-6 p-4 bg-muted/30 rounded-lg">
                  <h3 className="text-lg font-medium mb-4">International Relationship Strength</h3>
                  <div className="space-y-4">
                    <div>
                      <div className="flex justify-between mb-1">
                        <span className="text-sm font-medium">United States</span>
                        <span className="text-sm font-medium">Strong</span>
                      </div>
                      <Progress value={90} className="h-2" />
                    </div>
                    <div>
                      <div className="flex justify-between mb-1">
                        <span className="text-sm font-medium">European Union/NATO</span>
                        <span className="text-sm font-medium">Strong</span>
                      </div>
                      <Progress value={85} className="h-2" />
                    </div>
                    <div>
                      <div className="flex justify-between mb-1">
                        <span className="text-sm font-medium">Brazil</span>
                        <span className="text-sm font-medium">Moderate</span>
                      </div>
                      <Progress value={60} className="h-2" />
                    </div>
                    <div>
                      <div className="flex justify-between mb-1">
                        <span className="text-sm font-medium">China</span>
                        <span className="text-sm font-medium">Moderate</span>
                      </div>
                      <Progress value={50} className="h-2" />
                    </div>
                    <div>
                      <div className="flex justify-between mb-1">
                        <span className="text-sm font-medium">United Kingdom</span>
                        <span className="text-sm font-medium">Improving</span>
                      </div>
                      <Progress value={45} className="h-2" />
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground mt-4">
                    Relationship strength assessment based on diplomatic, economic, and military cooperation indicators.
                  </p>
                </div>

                <div className="mt-4">
                  <h3 className="text-lg font-medium mb-3">The Falklands/Malvinas Issue</h3>
                  <p className="mb-4">
                    The sovereignty dispute over the Falkland Islands (Islas Malvinas) remains a defining issue for
                    Argentina's foreign policy, though the Milei administration has taken a less confrontational
                    approach while maintaining the claim.
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <Card className="bg-muted/30 border-none shadow-sm">
                      <CardHeader className="p-4 pb-2">
                        <CardTitle className="text-base">Diplomatic Approach</CardTitle>
                      </CardHeader>
                      <CardContent className="p-4 pt-0">
                        <ul className="space-y-2">
                          <li className="flex items-start gap-2">
                            <span className="text-primary mt-1">•</span>
                            <span className="text-sm">Long-term diplomatic strategy through UN channels</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="text-primary mt-1">•</span>
                            <span className="text-sm">Pragmatic acknowledgment of current UK control</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="text-primary mt-1">•</span>
                            <span className="text-sm">Continued regional solidarity on sovereignty claim</span>
                          </li>
                        </ul>
                      </CardContent>
                    </Card>

                    <Card className="bg-muted/30 border-none shadow-sm">
                      <CardHeader className="p-4 pb-2">
                        <CardTitle className="text-base">Defense Implications</CardTitle>
                      </CardHeader>
                      <CardContent className="p-4 pt-0">
                        <ul className="space-y-2">
                          <li className="flex items-start gap-2">
                            <span className="text-primary mt-1">•</span>
                            <span className="text-sm">Enhanced maritime surveillance capabilities</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="text-primary mt-1">•</span>
                            <span className="text-sm">UK no longer blocking arms sales (e.g., F-16 deal)</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="text-primary mt-1">•</span>
                            <span className="text-sm">Focus on peaceful assertion of presence in South Atlantic</span>
                          </li>
                        </ul>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Defense Modernization */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <ShieldAlert className="h-5 w-5 text-primary" />
                Defense Modernization
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <p>
                  Argentina's armed forces face a decades-long backlog of modernization needs, a legacy of tight budgets
                  and post-Falklands sanctions. The Milei administration has made military modernization a national
                  priority, focusing on cost-effective acquisitions to fill critical capability gaps.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-4">
                  <Card className="border border-primary/20">
                    <CardHeader className="pb-2">
                      <div className="flex items-center gap-3">
                        <div className="rounded-md bg-primary/10 p-2">
                          <Plane className="h-5 w-5 text-primary" />
                        </div>
                        <CardTitle className="text-base">Air Force Modernization</CardTitle>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="mb-4">
                        <div className="flex items-center justify-between mb-1">
                          <span className="text-sm font-medium">F-16 Fighter Acquisition</span>
                          <Badge>In Progress</Badge>
                        </div>
                        <p className="text-sm text-muted-foreground">
                          24 F-16AM/BM fighters from Denmark for $300 million
                        </p>
                      </div>
                      <ul className="space-y-2">
                        <li className="flex items-start gap-2">
                          <span className="text-primary mt-1">•</span>
                          <span className="text-sm">First supersonic combat capability since 2015</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-primary mt-1">•</span>
                          <span className="text-sm">Partially funded by U.S. Foreign Military Financing</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-primary mt-1">•</span>
                          <span className="text-sm">NATO-standard training for pilots and crews</span>
                        </li>
                      </ul>
                    </CardContent>
                  </Card>

                  <Card className="border border-primary/20">
                    <CardHeader className="pb-2">
                      <div className="flex items-center gap-3">
                        <div className="rounded-md bg-primary/10 p-2">
                          <Anchor className="h-5 w-5 text-primary" />
                        </div>
                        <CardTitle className="text-base">Naval Modernization</CardTitle>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="mb-4">
                        <div className="flex items-center justify-between mb-1">
                          <span className="text-sm font-medium">Offshore Patrol Vessels</span>
                          <Badge>Completed</Badge>
                        </div>
                        <p className="text-sm text-muted-foreground">
                          Four Bouchard-class OPVs delivered by Naval Group (France)
                        </p>
                      </div>
                      <ul className="space-y-2">
                        <li className="flex items-start gap-2">
                          <span className="text-primary mt-1">•</span>
                          <span className="text-sm">Enhanced patrol coverage of littoral waters</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-primary mt-1">•</span>
                          <span className="text-sm">Joined U.S.-led Combined Maritime Forces (CMF)</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-primary mt-1">•</span>
                          <span className="text-sm">Plans for new corvettes or frigates in development</span>
                        </li>
                      </ul>
                    </CardContent>
                  </Card>

                  <Card className="border border-primary/20">
                    <CardHeader className="pb-2">
                      <div className="flex items-center gap-3">
                        <div className="rounded-md bg-primary/10 p-2">
                          <Crosshair className="h-5 w-5 text-primary" />
                        </div>
                        <CardTitle className="text-base">Army Modernization</CardTitle>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="mb-4">
                        <div className="flex items-center justify-between mb-1">
                          <span className="text-sm font-medium">Anti-Tank Weapons</span>
                          <Badge>Planned</Badge>
                        </div>
                        <p className="text-sm text-muted-foreground">
                          Spike LR II missiles from Israel's Rafael Advanced Defense Systems
                        </p>
                      </div>
                      <ul className="space-y-2">
                        <li className="flex items-start gap-2">
                          <span className="text-primary mt-1">•</span>
                          <span className="text-sm">Modern long-range anti-armor capability</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-primary mt-1">•</span>
                          <span className="text-sm">Evaluating U.S.-made Stryker armored fighting vehicles</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-primary mt-1">•</span>
                          <span className="text-sm">Focus on mobility, firepower, and surveillance</span>
                        </li>
                      </ul>
                    </CardContent>
                  </Card>
                </div>

                {/* International Defense Partners */}
                <div className="mt-6 p-4 bg-muted/30 rounded-lg">
                  <h3 className="text-lg font-medium mb-4">International Defense Partners</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                    <div className="p-3 bg-background rounded-lg border">
                      <div className="flex items-center gap-2 mb-2">
                        <Radar className="h-5 w-5 text-primary" />
                        <h4 className="font-medium">United States</h4>
                      </div>
                      <ul className="space-y-1 text-sm">
                        <li>• F-16 fighter acquisition</li>
                        <li>• $40M Foreign Military Financing</li>
                        <li>• Training and exercises</li>
                      </ul>
                    </div>

                    <div className="p-3 bg-background rounded-lg border">
                      <div className="flex items-center gap-2 mb-2">
                        <Radar className="h-5 w-5 text-primary" />
                        <h4 className="font-medium">Israel</h4>
                      </div>
                      <ul className="space-y-1 text-sm">
                        <li>• Spike anti-tank missiles</li>
                        <li>• Cyber defense cooperation</li>
                        <li>• UAV technology</li>
                      </ul>
                    </div>

                    <div className="p-3 bg-background rounded-lg border">
                      <div className="flex items-center gap-2 mb-2">
                        <Radar className="h-5 w-5 text-primary" />
                        <h4 className="font-medium">France</h4>
                      </div>
                      <ul className="space-y-1 text-sm">
                        <li>• Offshore Patrol Vessels</li>
                        <li>• Naval technology</li>
                        <li>• Training support</li>
                      </ul>
                    </div>

                    <div className="p-3 bg-background rounded-lg border">
                      <div className="flex items-center gap-2 mb-2">
                        <Radar className="h-5 w-5 text-primary" />
                        <h4 className="font-medium">UAE (EDGE Group)</h4>
                      </div>
                      <ul className="space-y-1 text-sm">
                        <li>• Emerging partnership</li>
                        <li>• Unmanned systems</li>
                        <li>• Smart munitions</li>
                      </ul>
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground mt-4">
                    Argentina is diversifying its defense partnerships to access advanced technology and training while
                    reducing dependence on any single supplier.
                  </p>
                </div>

                {/* Multinational Exercises */}
                <div className="mt-6">
                  <h3 className="text-lg font-medium mb-3">Multinational Exercises</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <Card className="bg-muted/30 border-none shadow-sm">
                      <CardHeader className="p-4 pb-2">
                        <CardTitle className="text-base">UNITAS LXV</CardTitle>
                      </CardHeader>
                      <CardContent className="p-4 pt-0">
                        <p className="text-sm mb-2">
                          Participated in the 65th edition of the U.S.-led naval exercise in September 2024, alongside
                          24 other nations including the US, Brazil, Chile, and France.
                        </p>
                        <div className="flex items-center gap-2">
                          <Badge className="bg-blue-100 text-blue-800 hover:bg-blue-100">Naval</Badge>
                          <Badge className="bg-green-100 text-green-800 hover:bg-green-100">Multinational</Badge>
                        </div>
                      </CardContent>
                    </Card>

                    <Card className="bg-muted/30 border-none shadow-sm">
                      <CardHeader className="p-4 pb-2">
                        <CardTitle className="text-base">Combined Maritime Forces</CardTitle>
                      </CardHeader>
                      <CardContent className="p-4 pt-0">
                        <p className="text-sm mb-2">
                          Joined the U.S.-led 46-nation partnership for maritime security, participating in combined
                          task forces that conduct anti-piracy, counter-terrorism, and patrol operations.
                        </p>
                        <div className="flex items-center gap-2">
                          <Badge className="bg-blue-100 text-blue-800 hover:bg-blue-100">Naval</Badge>
                          <Badge className="bg-purple-100 text-purple-800 hover:bg-purple-100">Global</Badge>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Market Opportunities */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <TrendingUp className="h-5 w-5 text-primary" />
                Market Opportunities
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <p>
                  Despite economic challenges, Argentina presents several opportunities for defense and security
                  companies, particularly in areas where the country is seeking to modernize its capabilities and
                  address emerging threats.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
                  <Card className="border border-primary/20">
                    <CardHeader className="pb-2">
                      <div className="flex items-center gap-3">
                        <div className="rounded-md bg-primary/10 p-2">
                          <ShieldAlert className="h-5 w-5 text-primary" />
                        </div>
                        <CardTitle className="text-base">Border Security Solutions</CardTitle>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2 mt-2">
                        <li className="flex items-start gap-2">
                          <span className="text-primary mt-1">•</span>
                          <span>Integrated border surveillance systems</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-primary mt-1">•</span>
                          <span>Unmanned aerial vehicles for patrol and monitoring</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-primary mt-1">•</span>
                          <span>Advanced sensors and detection equipment</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-primary mt-1">•</span>
                          <span>Command and control systems for coordinated response</span>
                        </li>
                      </ul>
                    </CardContent>
                  </Card>

                  <Card className="border border-primary/20">
                    <CardHeader className="pb-2">
                      <div className="flex items-center gap-3">
                        <div className="rounded-md bg-primary/10 p-2">
                          <Globe className="h-5 w-5 text-primary" />
                        </div>
                        <CardTitle className="text-base">Maritime Security</CardTitle>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2 mt-2">
                        <li className="flex items-start gap-2">
                          <span className="text-primary mt-1">•</span>
                          <span>Offshore patrol vessels</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-primary mt-1">•</span>
                          <span>Maritime surveillance systems</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-primary mt-1">•</span>
                          <span>Coastal radar networks</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-primary mt-1">•</span>
                          <span>Naval communications equipment</span>
                        </li>
                      </ul>
                    </CardContent>
                  </Card>

                  <Card className="border border-primary/20">
                    <CardHeader className="pb-2">
                      <div className="flex items-center gap-3">
                        <div className="rounded-md bg-primary/10 p-2">
                          <FileText className="h-5 w-5 text-primary" />
                        </div>
                        <CardTitle className="text-base">Cybersecurity</CardTitle>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2 mt-2">
                        <li className="flex items-start gap-2">
                          <span className="text-primary mt-1">•</span>
                          <span>Critical infrastructure protection systems</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-primary mt-1">•</span>
                          <span>Secure communications networks</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-primary mt-1">•</span>
                          <span>Threat intelligence solutions</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-primary mt-1">•</span>
                          <span>Training and capacity building programs</span>
                        </li>
                      </ul>
                    </CardContent>
                  </Card>

                  <Card className="border border-primary/20">
                    <CardHeader className="pb-2">
                      <div className="flex items-center gap-3">
                        <div className="rounded-md bg-primary/10 p-2">
                          <Users className="h-5 w-5 text-primary" />
                        </div>
                        <CardTitle className="text-base">Public Security</CardTitle>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2 mt-2">
                        <li className="flex items-start gap-2">
                          <span className="text-primary mt-1">•</span>
                          <span>Urban surveillance systems</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-primary mt-1">•</span>
                          <span>Non-lethal crowd control equipment</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-primary mt-1">•</span>
                          <span>Emergency response communications</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-primary mt-1">•</span>
                          <span>Forensic and investigative technologies</span>
                        </li>
                      </ul>
                    </CardContent>
                  </Card>
                </div>

                <div className="mt-6 p-4 bg-muted/30 rounded-lg">
                  <h3 className="text-lg font-medium mb-3">Key Considerations for Market Entry</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-2">
                      <Scale className="h-5 w-5 text-primary mt-0.5 shrink-0" />
                      <div>
                        <span className="font-medium">Regulatory Environment:</span> Defense procurement in Argentina
                        typically requires government-to-government agreements or direct commercial sales approved by
                        the Ministry of Defense.
                      </div>
                    </li>
                    <li className="flex items-start gap-2">
                      <Building className="h-5 w-5 text-primary mt-0.5 shrink-0" />
                      <div>
                        <span className="font-medium">Local Partnerships:</span> Collaborating with Argentine companies
                        can facilitate market entry and address requirements for technology transfer and local content.
                      </div>
                    </li>
                    <li className="flex items-start gap-2">
                      <DollarSign className="h-5 w-5 text-primary mt-0.5 shrink-0" />
                      <div>
                        <span className="font-medium">Financing Solutions:</span> Given budget constraints, offering
                        flexible financing options or export credit arrangements can be a competitive advantage.
                      </div>
                    </li>
                    <li className="flex items-start gap-2">
                      <Globe className="h-5 w-5 text-primary mt-0.5 shrink-0" />
                      <div>
                        <span className="font-medium">Regional Approach:</span> Positioning solutions as addressing
                        regional security challenges can align with Argentina's interest in regional cooperation on
                        security matters.
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="chile" className="space-y-6">
          {/* Chile Overview Card */}
          <Card>
            <CardHeader className="pb-3">
              {/* Chile Flag Update - Significantly larger */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <img src="/images/flag-chile.png" alt="Chile Flag" className="w-20 h-12 object-cover shadow-sm" />
                  <div>
                    <CardTitle>Chile</CardTitle>
                    <CardDescription>South America's most stable economy</CardDescription>
                  </div>
                </div>
                <Badge variant="outline" className="font-normal">
                  Priority Market
                </Badge>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <p>
                  Chile maintains a stable democratic governance under President Gabriel Boric, who took office in 2022.
                  His left-leaning administration has emphasized a multilateralist vision in international affairs while
                  maintaining internal stability. Chile's foreign policy platform explicitly seeks to "recover a
                  multilateralist vision," prioritizing Latin American integration, support for international law, and
                  cooperation on global issues.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
                  <div className="flex flex-col p-3 bg-muted/30 rounded-lg">
                    <span className="text-sm text-muted-foreground">Population</span>
                    <span className="text-lg font-medium">19.2 million</span>
                  </div>
                  <div className="flex flex-col p-3 bg-muted/30 rounded-lg">
                    <span className="text-sm text-muted-foreground">Capital</span>
                    <span className="text-lg font-medium">Santiago</span>
                  </div>
                  <div className="flex flex-col p-3 bg-muted/30 rounded-lg">
                    <span className="text-sm text-muted-foreground">Official Language</span>
                    <span className="text-lg font-medium">Spanish</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Map and Key Strategic Points */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <Card className="lg:col-span-2">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Globe className="h-5 w-5 text-primary" />
                  Strategic Map
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div ref={chileMapContainer} className="w-full h-[400px] rounded-lg border"></div>
                <div className="mt-4 text-sm text-muted-foreground">
                  Map showing key strategic locations in Chile, including major cities, ports, and resource areas.
                  Chile's 4,300 km Pacific coastline and sovereign interests extend to Easter Island and Antarctica.
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Landmark className="h-5 w-5 text-primary" />
                  Boric Administration
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <h3 className="text-sm font-medium text-muted-foreground">PRESIDENT</h3>
                  <p className="font-medium">Gabriel Boric</p>
                  <p className="text-sm">Left-leaning leader who took office in March 2022</p>
                </div>

                <div className="space-y-2">
                  <h3 className="text-sm font-medium text-muted-foreground">KEY OFFICIALS</h3>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      <div>
                        <span className="font-medium">Maya Fernández</span>
                        <p className="text-sm">Minister of Defense</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      <div>
                        <span className="font-medium">Alberto van Klaveren</span>
                        <p className="text-sm">Minister of Foreign Affairs</p>
                      </div>
                    </li>
                  </ul>
                </div>

                <div className="space-y-2">
                  <h3 className="text-sm font-medium text-muted-foreground">POLICY DIRECTION</h3>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span>Multilateralist foreign policy</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span>Commitment to human rights and democracy</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span>Active UN peacekeeping participation</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span>Balanced relations with US and China</span>
                    </li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Economic Indicators */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <TrendingUp className="h-5 w-5 text-primary" />
                Economic Indicators
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <p>
                  Chile's economic landscape directly influences its defense strategy, as the health of key industries
                  determines resources for military modernization. Major sectors driving Chile's growth – notably
                  mining, energy, and an emerging tech sector – are closely tied to national security considerations.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-4">
                  <Card className="border-none shadow-none bg-muted/30">
                    <CardHeader className="p-3 pb-0">
                      <CardTitle className="text-sm font-medium text-muted-foreground">GDP (2024 est.)</CardTitle>
                    </CardHeader>
                    <CardContent className="p-3 pt-1">
                      <div className="text-2xl font-bold">$350 billion</div>
                      <p className="text-sm text-muted-foreground">Highest per capita in South America</p>
                    </CardContent>
                  </Card>
                  <Card className="border-none shadow-none bg-muted/30">
                    <CardHeader className="p-3 pb-0">
                      <CardTitle className="text-sm font-medium text-muted-foreground">Inflation Rate</CardTitle>
                    </CardHeader>
                    <CardContent className="p-3 pt-1">
                      <div className="text-2xl font-bold">4.5%</div>
                      <p className="text-sm text-muted-foreground">Year-over-year (March 2025)</p>
                    </CardContent>
                  </Card>
                  <Card className="border-none shadow-none bg-muted/30">
                    <CardHeader className="p-3 pb-0">
                      <CardTitle className="text-sm font-medium text-muted-foreground">Unemployment</CardTitle>
                    </CardHeader>
                    <CardContent className="p-3 pt-1">
                      <div className="text-2xl font-bold">7.2%</div>
                      <p className="text-sm text-muted-foreground">Q1 2025</p>
                    </CardContent>
                  </Card>
                  <Card className="border-none shadow-none bg-muted/30">
                    <CardHeader className="p-3 pb-0">
                      <CardTitle className="text-sm font-medium text-muted-foreground">Defense Budget</CardTitle>
                    </CardHeader>
                    <CardContent className="p-3 pt-1">
                      <div className="text-2xl font-bold">$1.84 billion</div>
                      <p className="text-sm text-muted-foreground">1.6% of GDP (2024)</p>
                    </CardContent>
                  </Card>
                </div>

                {/* Key Economic Sectors */}
                <div className="mt-6 space-y-4">
                  <h3 className="text-lg font-medium">Key Economic Sectors</h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <Card className="bg-muted/30 border-none shadow-sm">
                      <CardHeader className="p-4 pb-2">
                        <div className="flex items-center gap-2">
                          <DollarSign className="h-5 w-5 text-primary" />
                          <CardTitle className="text-base">Mining</CardTitle>
                        </div>
                      </CardHeader>
                      <CardContent className="p-4 pt-0">
                        <p className="text-sm mb-2">
                          World's leading copper producer with significant lithium reserves, critical to high-tech and
                          defense industries.
                        </p>
                        <Badge className="bg-green-100 text-green-800 hover:bg-green-100">Growth Area</Badge>
                      </CardContent>
                    </Card>

                    <Card className="bg-muted/30 border-none shadow-sm">
                      <CardHeader className="p-4 pb-2">
                        <div className="flex items-center gap-2">
                          <Briefcase className="h-5 w-5 text-primary" />
                          <CardTitle className="text-base">Renewable Energy</CardTitle>
                        </div>
                      </CardHeader>
                      <CardContent className="p-4 pt-0">
                        <p className="text-sm mb-2">
                          Aggressively expanding solar and wind farms, especially in the Atacama Desert, and exploring
                          green hydrogen production.
                        </p>
                        <Badge className="bg-green-100 text-green-800 hover:bg-green-100">Growth Area</Badge>
                      </CardContent>
                    </Card>

                    <Card className="bg-muted/30 border-none shadow-sm">
                      <CardHeader className="p-4 pb-2">
                        <div className="flex items-center gap-2">
                          <Globe className="h-5 w-5 text-primary" />
                          <CardTitle className="text-base">Technology</CardTitle>
                        </div>
                      </CardHeader>
                      <CardContent className="p-4 pt-0">
                        <p className="text-sm mb-2">
                          Growing technology sector including telecoms and software services, with increasing focus on
                          cybersecurity and satellite communications.
                        </p>
                        <Badge className="bg-blue-100 text-blue-800 hover:bg-blue-100">Emerging</Badge>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Foreign Policy & International Relations */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Handshake className="h-5 w-5 text-primary" />
                Foreign Policy & International Relations
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="text-lg font-medium mb-3">Multilateralism</h3>
                    <ul className="space-y-3">
                      <li className="flex items-start gap-2">
                        <span className="text-primary mt-1">•</span>
                        <div>
                          <span className="font-medium">UN Peacekeeping</span>
                          <p className="text-sm">
                            Active participation in UN peacekeeping missions, particularly in Haiti and Cyprus.
                          </p>
                        </div>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-primary mt-1">•</span>
                        <div>
                          <span className="font-medium">Latin American Integration</span>
                          <p className="text-sm">
                            Strong supporter of regional integration initiatives such as the Pacific Alliance and
                            UNASUR.
                          </p>
                        </div>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-primary mt-1">•</span>
                        <div>
                          <span className="font-medium">International Law</span>
                          <p className="text-sm">
                            Commitment to international law and the peaceful resolution of disputes through diplomacy.
                          </p>
                        </div>
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-lg font-medium mb-3">Relations with Major Powers</h3>
                    <ul className="space-y-3">
                      <li className="flex items-start gap-2">
                        <span className="text-primary mt-1">•</span>
                        <div>
                          <span className="font-medium">United States</span>
                          <p className="text-sm">
                            Close security cooperation with the U.S., including joint military exercises and training
                            programs.
                          </p>
                        </div>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-primary mt-1">•</span>
                        <div>
                          <span className="font-medium">China</span>
                          <p className="text-sm">
                            Growing economic ties with China, which is a major trading partner and investor in Chile's
                            mining sector.
                          </p>
                        </div>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-primary mt-1">•</span>
                        <div>
                          <span className="font-medium">European Union</span>
                          <p className="text-sm">
                            Strong political and economic relations with the EU, including a free trade agreement and
                            cooperation on environmental issues.
                          </p>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>

                {/* Relationship Strength Visualization */}
                <div className="mt-6 p-4 bg-muted/30 rounded-lg">
                  <h3 className="text-lg font-medium mb-4">International Relationship Strength</h3>
                  <div className="space-y-4">
                    <div>
                      <div className="flex justify-between mb-1">
                        <span className="text-sm font-medium">United States</span>
                        <span className="text-sm font-medium">Strong</span>
                      </div>
                      <Progress value={85} className="h-2" />
                    </div>
                    <div>
                      <div className="flex justify-between mb-1">
                        <span className="text-sm font-medium">European Union/NATO</span>
                        <span className="text-sm font-medium">Strong</span>
                      </div>
                      <Progress value={80} className="h-2" />
                    </div>
                    <div>
                      <div className="flex justify-between mb-1">
                        <span className="text-sm font-medium">Brazil</span>
                        <span className="text-sm font-medium">Moderate</span>
                      </div>
                      <Progress value={65} className="h-2" />
                    </div>
                    <div>
                      <div className="flex justify-between mb-1">
                        <span className="text-sm font-medium">China</span>
                        <span className="text-sm font-medium">Moderate</span>
                      </div>
                      <Progress value={60} className="h-2" />
                    </div>
                    <div>
                      <div className="flex justify-between mb-1">
                        <span className="text-sm font-medium">Argentina</span>
                        <span className="text-sm font-medium">Improving</span>
                      </div>
                      <Progress value={55} className="h-2" />
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground mt-4">
                    Relationship strength assessment based on diplomatic, economic, and military cooperation indicators.
                  </p>
                </div>

                {/* Border Disputes */}
                <div className="mt-4">
                  <h3 className="text-lg font-medium mb-3">Border Disputes</h3>
                  <p className="mb-4">
                    Chile has long-standing border disputes with Peru and Bolivia, primarily concerning maritime
                    boundaries and access to the Pacific Ocean.
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <Card className="bg-muted/30 border-none shadow-sm">
                      <CardHeader className="p-4 pb-2">
                        <CardTitle className="text-base">Dispute with Peru</CardTitle>
                      </CardHeader>
                      <CardContent className="p-4 pt-0">
                        <ul className="space-y-2">
                          <li className="flex items-start gap-2">
                            <span className="text-primary mt-1">•</span>
                            <span className="text-sm">Maritime boundary dispute resolved by ICJ in 2014</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="text-primary mt-1">•</span>
                            <span className="text-sm">Ongoing cooperation on border security and trade</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="text-primary mt-1">•</span>
                            <span className="text-sm">Focus on maintaining peaceful relations</span>
                          </li>
                        </ul>
                      </CardContent>
                    </Card>

                    <Card className="bg-muted/30 border-none shadow-sm">
                      <CardHeader className="p-4 pb-2">
                        <CardTitle className="text-base">Dispute with Bolivia</CardTitle>
                      </CardHeader>
                      <CardContent className="p-4 pt-0">
                        <ul className="space-y-2">
                          <li className="flex items-start gap-2">
                            <span className="text-primary mt-1">•</span>
                            <span className="text-sm">Bolivia seeks access to the Pacific Ocean</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="text-primary mt-1">•</span>
                            <span className="text-sm">ICJ ruled against Bolivia's claim in 2018</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="text-primary mt-1">•</span>
                            <span className="text-sm">Ongoing dialogue to improve relations</span>
                          </li>
                        </ul>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Defense Modernization */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <ShieldAlert className="h-5 w-5 text-primary" />
                Defense Modernization
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <p>
                  Chile's armed forces are among the most professional and well-equipped in Latin America, with a focus
                  on maintaining regional stability and protecting its maritime interests.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-4">
                  <Card className="border border-primary/20">
                    <CardHeader className="pb-2">
                      <div className="flex items-center gap-3">
                        <div className="rounded-md bg-primary/10 p-2">
                          <Plane className="h-5 w-5 text-primary" />
                        </div>
                        <CardTitle className="text-base">Air Force Modernization</CardTitle>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="mb-4">
                        <div className="flex items-center justify-between mb-1">
                          <span className="text-sm font-medium">F-16 Fighter Upgrade</span>
                          <Badge>In Progress</Badge>
                        </div>
                        <p className="text-sm text-muted-foreground">Mid-life upgrade for F-16AM/BM fleet</p>
                      </div>
                      <ul className="space-y-2">
                        <li className="flex items-start gap-2">
                          <span className="text-primary mt-1">•</span>
                          <span className="text-sm">Enhanced radar and avionics</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-primary mt-1">•</span>
                          <span className="text-sm">New weapons systems</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-primary mt-1">•</span>
                          <span className="text-sm">Improved electronic warfare capabilities</span>
                        </li>
                      </ul>
                    </CardContent>
                  </Card>

                  <Card className="border border-primary/20">
                    <CardHeader className="pb-2">
                      <div className="flex items-center gap-3">
                        <div className="rounded-md bg-primary/10 p-2">
                          <Anchor className="h-5 w-5 text-primary" />
                        </div>
                        <CardTitle className="text-base">Naval Modernization</CardTitle>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="mb-4">
                        <div className="flex items-center justify-between mb-1">
                          <span className="text-sm font-medium">New Frigates</span>
                          <Badge>Planned</Badge>
                        </div>
                        <p className="text-sm text-muted-foreground">
                          Acquisition of new frigates to replace aging vessels
                        </p>
                      </div>
                      <ul className="space-y-2">
                        <li className="flex items-start gap-2">
                          <span className="text-primary mt-1">•</span>
                          <span className="text-sm">Enhanced anti-submarine warfare capabilities</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-primary mt-1">•</span>
                          <span className="text-sm">Improved air defense systems</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-primary mt-1">•</span>
                          <span className="text-sm">Modern command and control systems</span>
                        </li>
                      </ul>
                    </CardContent>
                  </Card>

                  <Card className="border border-primary/20">
                    <CardHeader className="pb-2">
                      <div className="flex items-center gap-3">
                        <div className="rounded-md bg-primary/10 p-2">
                          <Crosshair className="h-5 w-5 text-primary" />
                        </div>
                        <CardTitle className="text-base">Army Modernization</CardTitle>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="mb-4">
                        <div className="flex items-center justify-between mb-1">
                          <span className="text-sm font-medium">New Armored Vehicles</span>
                          <Badge>Planned</Badge>
                        </div>
                        <p className="text-sm text-muted-foreground">
                          Acquisition of new armored vehicles to improve mobility and firepower
                        </p>
                      </div>
                      <ul className="space-y-2">
                        <li className="flex items-start gap-2">
                          <span className="text-primary mt-1">•</span>
                          <span className="text-sm">Enhanced protection against modern threats</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-primary mt-1">•</span>
                          <span className="text-sm">Improved communications systems</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-primary mt-1">•</span>
                          <span className="text-sm">Modern surveillance and reconnaissance capabilities</span>
                        </li>
                      </ul>
                    </CardContent>
                  </Card>
                </div>

                {/* International Defense Partners */}
                <div className="mt-6 p-4 bg-muted/30 rounded-lg">
                  <h3 className="text-lg font-medium mb-4">International Defense Partners</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                    <div className="p-3 bg-background rounded-lg border">
                      <div className="flex items-center gap-2 mb-2">
                        <Radar className="h-5 w-5 text-primary" />
                        <h4 className="font-medium">United States</h4>
                      </div>
                      <ul className="space-y-1 text-sm">
                        <li>• F-16 fighter upgrades</li>
                        <li>• Maritime security cooperation</li>
                        <li>• Training and exercises</li>
                      </ul>
                    </div>

                    <div className="p-3 bg-background rounded-lg border">
                      <div className="flex items-center gap-2 mb-2">
                        <Radar className="h-5 w-5 text-primary" />
                        <h4 className="font-medium">European Union</h4>
                      </div>
                      <ul className="space-y-1 text-sm">
                        <li>• Naval technology</li>
                        <li>• Cybersecurity cooperation</li>
                        <li>• Joint research and development</li>
                      </ul>
                    </div>

                    <div className="p-3 bg-background rounded-lg border">
                      <div className="flex items-center gap-2 mb-2">
                        <Radar className="h-5 w-5 text-primary" />
                        <h4 className="font-medium">Israel</h4>
                      </div>
                      <ul className="space-y-1 text-sm">
                        <li>• UAV technology</li>
                        <li>• Cyber defense systems</li>
                        <li>• Intelligence sharing</li>
                      </ul>
                    </div>

                    <div className="p-3 bg-background rounded-lg border">
                      <div className="flex items-center gap-2 mb-2">
                        <Radar className="h-5 w-5 text-primary" />
                        <h4 className="font-medium">Brazil</h4>
                      </div>
                      <ul className="space-y-1 text-sm">
                        <li>• Joint military exercises</li>
                        <li>• Border security cooperation</li>
                        <li>• Defense industry collaboration</li>
                      </ul>
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground mt-4">
                    Chile maintains strong defense partnerships with the United States, European Union, Israel, and
                    Brazil, focusing on technology transfer, joint training, and regional security cooperation.
                  </p>
                </div>

                {/* Multinational Exercises */}
                <div className="mt-6">
                  <h3 className="text-lg font-medium mb-3">Multinational Exercises</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <Card className="bg-muted/30 border-none shadow-sm">
                      <CardHeader className="p-4 pb-2">
                        <CardTitle className="text-base">UNITAS</CardTitle>
                      </CardHeader>
                      <CardContent className="p-4 pt-0">
                        <p className="text-sm mb-2">
                          Participates in the annual U.S.-led UNITAS naval exercise, which focuses on maritime security
                          and interoperability.
                        </p>
                        <div className="flex items-center gap-2">
                          <Badge className="bg-blue-100 text-blue-800 hover:bg-blue-100">Naval</Badge>
                          <Badge className="bg-green-100 text-green-800 hover:bg-green-100">Multinational</Badge>
                        </div>
                      </CardContent>
                    </Card>

                    <Card className="bg-muted/30 border-none shadow-sm">
                      <CardHeader className="p-4 pb-2">
                        <CardTitle className="text-base">RIMPAC</CardTitle>
                      </CardHeader>
                      <CardContent className="p-4 pt-0">
                        <p className="text-sm mb-2">
                          Participates in the Rim of the Pacific (RIMPAC) exercise, the world's largest international
                          maritime exercise.
                        </p>
                        <div className="flex items-center gap-2">
                          <Badge className="bg-blue-100 text-blue-800 hover:bg-blue-100">Naval</Badge>
                          <Badge className="bg-purple-100 text-purple-800 hover:bg-purple-100">Global</Badge>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Market Opportunities */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <TrendingUp className="h-5 w-5 text-primary" />
                Market Opportunities
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <p>
                  Chile presents several opportunities for defense and security companies, particularly in areas where
                  the country is seeking to modernize its capabilities and address emerging threats.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
                  <Card className="border border-primary/20">
                    <CardHeader className="pb-2">
                      <div className="flex items-center gap-3">
                        <div className="rounded-md bg-primary/10 p-2">
                          <ShieldAlert className="h-5 w-5 text-primary" />
                        </div>
                        <CardTitle className="text-base">Maritime Security</CardTitle>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2 mt-2">
                        <li className="flex items-start gap-2">
                          <span className="text-primary mt-1">•</span>
                          <span>Coastal surveillance systems</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-primary mt-1">•</span>
                          <span>Offshore patrol vessels</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-primary mt-1">•</span>
                          <span>Naval communications equipment</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-primary mt-1">•</span>
                          <span>Mine countermeasures technology</span>
                        </li>
                      </ul>
                    </CardContent>
                  </Card>

                  <Card className="border border-primary/20">
                    <CardHeader className="pb-2">
                      <div className="flex items-center gap-3">
                        <div className="rounded-md bg-primary/10 p-2">
                          <Globe className="h-5 w-5 text-primary" />
                        </div>
                        <CardTitle className="text-base">Cybersecurity</CardTitle>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2 mt-2">
                        <li className="flex items-start gap-2">
                          <span className="text-primary mt-1">•</span>
                          <span>Critical infrastructure protection systems</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-primary mt-1">•</span>
                          <span>Secure communications networks</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-primary mt-1">•</span>
                          <span>Threat intelligence solutions</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-primary mt-1">•</span>
                          <span>Training and capacity building programs</span>
                        </li>
                      </ul>
                    </CardContent>
                  </Card>

                  <Card className="border border-primary/20">
                    <CardHeader className="pb-2">
                      <div className="flex items-center gap-3">
                        <div className="rounded-md bg-primary/10 p-2">
                          <FileText className="h-5 w-5 text-primary" />
                        </div>
                        <CardTitle className="text-base">Disaster Relief</CardTitle>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2 mt-2">
                        <li className="flex items-start gap-2">
                          <span className="text-primary mt-1">•</span>
                          <span>Search and rescue equipment</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-primary mt-1">•</span>
                          <span>Emergency communications systems</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-primary mt-1">•</span>
                          <span>Mobile hospitals and medical equipment</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-primary mt-1">•</span>
                          <span>Logistics and transportation support</span>
                        </li>
                      </ul>
                    </CardContent>
                  </Card>

                  <Card className="border border-primary/20">
                    <CardHeader className="pb-2">
                      <div className="flex items-center gap-3">
                        <div className="rounded-md bg-primary/10 p-2">
                          <Users className="h-5 w-5 text-primary" />
                        </div>
                        <CardTitle className="text-base">Border Security</CardTitle>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2 mt-2">
                        <li className="flex items-start gap-2">
                          <span className="text-primary mt-1">•</span>
                          <span>Integrated border surveillance systems</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-primary mt-1">•</span>
                          <span>Unmanned aerial vehicles for patrol and monitoring</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-primary mt-1">•</span>
                          <span>Advanced sensors and detection equipment</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-primary mt-1">•</span>
                          <span>Command and control systems for coordinated response</span>
                        </li>
                      </ul>
                    </CardContent>
                  </Card>
                </div>

                <div className="mt-6 p-4 bg-muted/30 rounded-lg">
                  <h3 className="text-lg font-medium mb-3">Key Considerations for Market Entry</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-2">
                      <Scale className="h-5 w-5 text-primary mt-0.5 shrink-0" />
                      <div>
                        <span className="font-medium">Regulatory Environment:</span> Defense procurement in Chile
                        typically requires government-to-government agreements or direct commercial sales approved by
                        the Ministry of Defense.
                      </div>
                    </li>
                    <li className="flex items-start gap-2">
                      <Building className="h-5 w-5 text-primary mt-0.5 shrink-0" />
                      <div>
                        <span className="font-medium">Local Partnerships:</span> Collaborating with Chilean companies
                        can facilitate market entry and address requirements for technology transfer and local content.
                      </div>
                    </li>
                    <li className="flex items-start gap-2">
                      <DollarSign className="h-5 w-5 text-primary mt-0.5 shrink-0" />
                      <div>
                        <span className="font-medium">Financing Solutions:</span> Given budget constraints, offering
                        flexible financing options or export credit arrangements can be a competitive advantage.
                      </div>
                    </li>
                    <li className="flex items-start gap-2">
                      <Globe className="h-5 w-5 text-primary mt-0.5 shrink-0" />
                      <div>
                        <span className="font-medium">Regional Approach:</span> Positioning solutions as addressing
                        regional security challenges can align with Chile's interest in regional cooperation on security
                        matters.
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="brazil" className="space-y-6">
          {/* Brazil Overview Card */}
          <Card>
            <CardHeader className="pb-3">
              {/* Brazil Flag Update - Significantly larger */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <img src="/images/flag-brazil.png" alt="Brazil Flag" className="w-20 h-12 object-cover shadow-sm" />
                  <div>
                    <CardTitle>Brazil</CardTitle>
                    <CardDescription>Latin America's largest economy</CardDescription>
                  </div>
                </div>
                <Badge variant="outline" className="font-normal">
                  Established Market
                </Badge>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <p>
                  Brazil is redefining its defense strategy under President Luiz Inácio Lula da Silva's leadership. Once
                  known for soft power and non-alignment, Brazil is now pursuing military modernization and global
                  partnerships while balancing pressing domestic needs. The country aims to strengthen its national
                  security and global influence in a multipolar world.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
                  <div className="flex flex-col p-3 bg-muted/30 rounded-lg">
                    <span className="text-sm text-muted-foreground">Population</span>
                    <span className="text-lg font-medium">214.3 million</span>
                  </div>
                  <div className="flex flex-col p-3 bg-muted/30 rounded-lg">
                    <span className="text-sm text-muted-foreground">Capital</span>
                    <span className="text-lg font-medium">Brasília</span>
                  </div>
                  <div className="flex flex-col p-3 bg-muted/30 rounded-lg">
                    <span className="text-sm text-muted-foreground">Official Language</span>
                    <span className="text-lg font-medium">Portuguese</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Map and Key Strategic Points */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <Card className="lg:col-span-2">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Globe className="h-5 w-5 text-primary" />
                  Strategic Map
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div ref={brazilMapContainer} className="w-full h-[400px] rounded-lg border"></div>
                <div className="mt-4 text-sm text-muted-foreground">
                  Map showing key strategic locations in Brazil, including major cities, resource areas, and the Amazon
                  region. Brazil's vast territory includes the Amazon rainforest, extensive coastline, and borders with
                  ten countries.
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Landmark className="h-5 w-5 text-primary" />
                  Lula Administration
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <h3 className="text-sm font-medium text-muted-foreground">PRESIDENT</h3>
                  <p className="font-medium">Luiz Inácio Lula da Silva</p>
                  <p className="text-sm">Returned to office in January 2023 for his third term</p>
                </div>

                <div className="space-y-2">
                  <h3 className="text-sm font-medium text-muted-foreground">KEY OFFICIALS</h3>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      <div>
                        <span className="font-medium">José Múcio Monteiro</span>
                        <p className="text-sm">Minister of Defense</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      <div>
                        <span className="font-medium">Mauro Vieira</span>
                        <p className="text-sm">Minister of Foreign Affairs</p>
                      </div>
                    </li>
                  </ul>
                </div>

                <div className="space-y-2">
                  <h3 className="text-sm font-medium text-muted-foreground">POLICY DIRECTION</h3>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span>Cooperative multipolarity in foreign policy</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span>Defense industry as driver of reindustrialization</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span>Regional leadership in South America</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span>Amazon protection as national security priority</span>
                    </li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Economic Indicators */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <TrendingUp className="h-5 w-5 text-primary" />
                Economic Indicators
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <p>
                  Brazil's economic performance is crucial for its defense strategy, as it determines the resources
                  available for military modernization and regional influence.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-4">
                  <Card className="border-none shadow-none bg-muted/30">
                    <CardHeader className="p-3 pb-0">
                      <CardTitle className="text-sm font-medium text-muted-foreground">GDP (2024 est.)</CardTitle>
                    </CardHeader>
                    <CardContent className="p-3 pt-1">
                      <div className="text-2xl font-bold">$2.13 trillion</div>
                      <p className="text-sm text-muted-foreground">Largest economy in Latin America</p>
                    </CardContent>
                  </Card>
                  <Card className="border-none shadow-none bg-muted/30">
                    <CardHeader className="p-3 pb-0">
                      <CardTitle className="text-sm font-medium text-muted-foreground">Inflation Rate</CardTitle>
                    </CardHeader>
                    <CardContent className="p-3 pt-1">
                      <div className="text-2xl font-bold">3.93%</div>
                      <p className="text-sm text-muted-foreground">Year-over-year (March 2025)</p>
                    </CardContent>
                  </Card>
                  <Card className="border-none shadow-none bg-muted/30">
                    <CardHeader className="p-3 pb-0">
                      <CardTitle className="text-sm font-medium text-muted-foreground">Unemployment</CardTitle>
                    </CardHeader>
                    <CardContent className="p-3 pt-1">
                      <div className="text-2xl font-bold">7.9%</div>
                      <p className="text-sm text-muted-foreground">Q1 2025</p>
                    </CardContent>
                  </Card>
                  <Card className="border-none shadow-none bg-muted/30">
                    <CardHeader className="p-3 pb-0">
                      <CardTitle className="text-sm font-medium text-muted-foreground">Defense Budget</CardTitle>
                    </CardHeader>
                    <CardContent className="p-3 pt-1">
                      <div className="text-2xl font-bold">$22.4 billion</div>
                      <p className="text-sm text-muted-foreground">1.1% of GDP (2024)</p>
                    </CardContent>
                  </Card>
                </div>

                {/* Key Economic Sectors */}
                <div className="mt-6 space-y-4">
                  <h3 className="text-lg font-medium">Key Economic Sectors</h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <Card className="bg-muted/30 border-none shadow-sm">
                      <CardHeader className="p-4 pb-2">
                        <div className="flex items-center gap-2">
                          <DollarSign className="h-5 w-5 text-primary" />
                          <CardTitle className="text-base">Agriculture</CardTitle>
                        </div>
                      </CardHeader>
                      <CardContent className="p-4 pt-0">
                        <p className="text-sm mb-2">
                          World's largest exporter of soybeans, coffee, and sugar. Key driver of economic growth.
                        </p>
                        <Badge className="bg-green-100 text-green-800 hover:bg-green-100">Growth Area</Badge>
                      </CardContent>
                    </Card>

                    <Card className="bg-muted/30 border-none shadow-sm">
                      <CardHeader className="p-4 pb-2">
                        <div className="flex items-center gap-2">
                          <Briefcase className="h-5 w-5 text-primary" />
                          <CardTitle className="text-base">Manufacturing</CardTitle>
                        </div>
                      </CardHeader>
                      <CardContent className="p-4 pt-0">
                        <p className="text-sm mb-2">
                          Automobiles, aerospace, and consumer goods. Embraer is a leading aircraft manufacturer.
                        </p>
                        <Badge className="bg-green-100 text-green-800 hover:bg-green-100">Growth Area</Badge>
                      </CardContent>
                    </Card>

                    <Card className="bg-muted/30 border-none shadow-sm">
                      <CardHeader className="p-4 pb-2">
                        <div className="flex items-center gap-2">
                          <Globe className="h-5 w-5 text-primary" />
                          <CardTitle className="text-base">Services</CardTitle>
                        </div>
                      </CardHeader>
                      <CardContent className="p-4 pt-0">
                        <p className="text-sm mb-2">
                          Financial services, tourism, and telecommunications. Growing IT sector.
                        </p>
                        <Badge className="bg-blue-100 text-blue-800 hover:bg-blue-100">Stable</Badge>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Foreign Policy & International Relations */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Handshake className="h-5 w-5 text-primary" />
                Foreign Policy & International Relations
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="text-lg font-medium mb-3">Global Leadership</h3>
                    <ul className="space-y-3">
                      <li className="flex items-start gap-2">
                        <span className="text-primary mt-1">•</span>
                        <div>
                          <span className="font-medium">BRICS</span>
                          <p className="text-sm">
                            Key member of the BRICS group of emerging economies, promoting South-South cooperation.
                          </p>
                        </div>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-primary mt-1">•</span>
                        <div>
                          <span className="font-medium">Climate Change</span>
                          <p className="text-sm">
                            Leading advocate for international action on climate change, particularly regarding the
                            Amazon rainforest.
                          </p>
                        </div>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-primary mt-1">•</span>
                        <div>
                          <span className="font-medium">World Trade Organization</span>
                          <p className="text-sm">
                            Active participant in the WTO, seeking to promote fair trade and economic development.
                          </p>
                        </div>
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-lg font-medium mb-3">Regional Influence</h3>
                    <ul className="space-y-3">
                      <li className="flex items-start gap-2">
                        <span className="text-primary mt-1">•</span>
                        <div>
                          <span className="font-medium">Mercosur</span>
                          <p className="text-sm">
                            Leading member of Mercosur, the South American trade bloc, promoting regional integration.
                          </p>
                        </div>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-primary mt-1">•</span>
                        <div>
                          <span className="font-medium">UNASUR</span>
                          <p className="text-sm">
                            Supporter of UNASUR, seeking to promote political and security cooperation in South America.
                          </p>
                        </div>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-primary mt-1">•</span>
                        <div>
                          <span className="font-medium">Amazon Cooperation Treaty Organization</span>
                          <p className="text-sm">
                            Active in ACTO, promoting sustainable development and environmental protection in the Amazon
                            region.
                          </p>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>

                {/* Relationship Strength Visualization */}
                <div className="mt-6 p-4 bg-muted/30 rounded-lg">
                  <h3 className="text-lg font-medium mb-4">International Relationship Strength</h3>
                  <div className="space-y-4">
                    <div>
                      <div className="flex justify-between mb-1">
                        <span className="text-sm font-medium">United States</span>
                        <span className="text-sm font-medium">Strong</span>
                      </div>
                      <Progress value={80} className="h-2" />
                    </div>
                    <div>
                      <div className="flex justify-between mb-1">
                        <span className="text-sm font-medium">China</span>
                        <span className="text-sm font-medium">Strong</span>
                      </div>
                      <Progress value={75} className="h-2" />
                    </div>
                    <div>
                      <div className="flex justify-between mb-1">
                        <span className="text-sm font-medium">European Union/NATO</span>
                        <span className="text-sm font-medium">Moderate</span>
                      </div>
                      <Progress value={70} className="h-2" />
                    </div>
                    <div>
                      <div className="flex justify-between mb-1">
                        <span className="text-sm font-medium">Argentina</span>
                        <span className="text-sm font-medium">Moderate</span>
                      </div>
                      <Progress value={65} className="h-2" />
                    </div>
                    <div>
                      <div className="flex justify-between mb-1">
                        <span className="text-sm font-medium">Russia</span>
                        <span className="text-sm font-medium">Moderate</span>
                      </div>
                      <Progress value={60} className="h-2" />
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground mt-4">
                    Relationship strength assessment based on diplomatic, economic, and military cooperation indicators.
                  </p>
                </div>

                {/* Amazon Security */}
                <div className="mt-4">
                  <h3 className="text-lg font-medium mb-3">Amazon Security</h3>
                  <p className="mb-4">
                    Brazil faces significant challenges in securing its vast Amazon region, including illegal mining,
                    deforestation, and drug trafficking.
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <Card className="bg-muted/30 border-none shadow-sm">
                      <CardHeader className="p-4 pb-2">
                        <CardTitle className="text-base">Environmental Protection</CardTitle>
                      </CardHeader>
                      <CardContent className="p-4 pt-0">
                        <ul className="space-y-2">
                          <li className="flex items-start gap-2">
                            <span className="text-primary mt-1">•</span>
                            <span className="text-sm">Combating deforestation and illegal mining</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="text-primary mt-1">•</span>
                            <span className="text-sm">Promoting sustainable development initiatives</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="text-primary mt-1">•</span>
                            <span className="text-sm">Strengthening environmental law enforcement</span>
                          </li>
                        </ul>
                      </CardContent>
                    </Card>

                    <Card className="bg-muted/30 border-none shadow-sm">
                      <CardHeader className="p-4 pb-2">
                        <CardTitle className="text-base">Border Security</CardTitle>
                      </CardHeader>
                      <CardContent className="p-4 pt-0">
                        <ul className="space-y-2">
                          <li className="flex items-start gap-2">
                            <span className="text-primary mt-1">•</span>
                            <span className="text-sm">Patrolling borders to combat drug trafficking</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="text-primary mt-1">•</span>
                            <span className="text-sm">Strengthening cooperation with neighboring countries</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="text-primary mt-1">•</span>
                            <span className="text-sm">Improving intelligence gathering and analysis</span>
                          </li>
                        </ul>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Defense Modernization */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <ShieldAlert className="h-5 w-5 text-primary" />
                Defense Modernization
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <p>
                  Brazil's armed forces are the largest in Latin America, with a focus on maintaining regional security
                  and protecting its vast territory.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-4">
                  <Card className="border border-primary/20">
                    <CardHeader className="pb-2">
                      <div className="flex items-center gap-3">
                        <div className="rounded-md bg-primary/10 p-2">
                          <Plane className="h-5 w-5 text-primary" />
                        </div>
                        <CardTitle className="text-base">Air Force Modernization</CardTitle>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="mb-4">
                        <div className="flex items-center justify-between mb-1">
                          <span className="text-sm font-medium">Gripen Fighter Acquisition</span>
                          <Badge>In Progress</Badge>
                        </div>
                        <p className="text-sm text-muted-foreground">
                          Acquisition of 36 Gripen E/F fighters from Sweden
                        </p>
                      </div>
                      <ul className="space-y-2">
                        <li className="flex items-start gap-2">
                          <span className="text-primary mt-1">•</span>
                          <span className="text-sm">Enhanced air defense capabilities</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-primary mt-1">•</span>
                          <span className="text-sm">Improved strike capabilities</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-primary mt-1">•</span>
                          <span className="text-sm">Technology transfer and local production</span>
                        </li>
                      </ul>
                    </CardContent>
                  </Card>

                  <Card className="border border-primary/20">
                    <CardHeader className="pb-2">
                      <div className="flex items-center gap-3">
                        <div className="rounded-md bg-primary/10 p-2">
                          <Anchor className="h-5 w-5 text-primary" />
                        </div>
                        <CardTitle className="text-base">Naval Modernization</CardTitle>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="mb-4">
                        <div className="flex items-center justify-between mb-1">
                          <span className="text-sm font-medium">Submarine Program</span>
                          <Badge>In Progress</Badge>
                        </div>
                        <p className="text-sm text-muted-foreground">Development of nuclear-powered submarine</p>
                      </div>
                      <ul className="space-y-2">
                        <li className="flex items-start gap-2">
                          <span className="text-primary mt-1">•</span>
                          <span className="text-sm">Enhanced maritime patrol capabilities</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-primary mt-1">•</span>
                          <span className="text-sm">Improved deterrence capabilities</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-primary mt-1">•</span>
                          <span className="text-sm">Technology transfer and local production</span>
                        </li>
                      </ul>
                    </CardContent>
                  </Card>

                  <Card className="border border-primary/20">
                    <CardHeader className="pb-2">
                      <div className="flex items-center gap-3">
                        <div className="rounded-md bg-primary/10 p-2">
                          <Crosshair className="h-5 w-5 text-primary" />
                        </div>
                        <CardTitle className="text-base">Army Modernization</CardTitle>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="mb-4">
                        <div className="flex items-center justify-between mb-1">
                          <span className="text-sm font-medium">Guarani Armored Vehicle</span>
                          <Badge>In Progress</Badge>
                        </div>
                        <p className="text-sm text-muted-foreground">
                          Acquisition of Guarani 6x6 armored personnel carriers
                        </p>
                      </div>
                      <ul className="space-y-2">
                        <li className="flex items-start gap-2">
                          <span className="text-primary mt-1">•</span>
                          <span className="text-sm">Enhanced mobility and firepower</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-primary mt-1">•</span>
                          <span className="text-sm">Improved protection against modern threats</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-primary mt-1">•</span>
                          <span className="text-sm">Technology transfer and local production</span>
                        </li>
                      </ul>
                    </CardContent>
                  </Card>
                </div>

                {/* International Defense Partners */}
                <div className="mt-6 p-4 bg-muted/30 rounded-lg">
                  <h3 className="text-lg font-medium mb-4">International Defense Partners</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                    <div className="p-3 bg-background rounded-lg border">
                      <div className="flex items-center gap-2 mb-2">
                        <Radar className="h-5 w-5 text-primary" />
                        <h4 className="font-medium">Sweden</h4>
                      </div>
                      <ul className="space-y-1 text-sm">
                        <li>• Gripen fighter acquisition</li>
                        <li>• Technology transfer</li>
                        <li>• Joint research and development</li>
                      </ul>
                    </div>

                    <div className="p-3 bg-background rounded-lg border">
                      <div className="flex items-center gap-2 mb-2">
                        <Radar className="h-5 w-5 text-primary" />
                        <h4 className="font-medium">France</h4>
                      </div>
                      <ul className="space-y-1 text-sm">
                        <li>• Submarine program</li>
                        <li>• Naval technology</li>
                        <li>• Joint exercises</li>
                      </ul>
                    </div>

                    <div className="p-3 bg-background rounded-lg border">
                      <div className="flex items-center gap-2 mb-2">
                        <Radar className="h-5 w-5 text-primary" />
                        <h4 className="font-medium">United States</h4>
                      </div>
                      <ul className="space-y-1 text-sm">
                        <li>• Joint military exercises</li>
                        <li>• Training programs</li>
                        <li>• Security cooperation</li>
                      </ul>
                    </div>

                    <div className="p-3 bg-background rounded-lg border">
                      <div className="flex items-center gap-2 mb-2">
                        <Radar className="h-5 w-5 text-primary" />
                        <h4 className="font-medium">Germany</h4>
                      </div>
                      <ul className="space-y-1 text-sm">
                        <li>• Armored vehicles</li>
                        <li>• Technology transfer</li>
                        <li>• Joint research and development</li>
                      </ul>
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground mt-4">
                    Brazil maintains diverse defense partnerships with Sweden, France, the United States, and Germany,
                    focusing on technology transfer, joint exercises, and regional security cooperation.
                  </p>
                </div>

                {/* Multinational Exercises */}
                <div className="mt-6">
                  <h3 className="text-lg font-medium mb-3">Multinational Exercises</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <Card className="bg-muted/30 border-none shadow-sm">
                      <CardHeader className="p-4 pb-2">
                        <CardTitle className="text-base">UNITAS</CardTitle>
                      </CardHeader>
                      <CardContent className="p-4 pt-0">
                        <p className="text-sm mb-2">
                          Participates in the annual U.S.-led UNITAS naval exercise, which focuses on maritime security
                          and interoperability.
                        </p>
                        <div className="flex items-center gap-2">
                          <Badge className="bg-blue-100 text-blue-800 hover:bg-blue-100">Naval</Badge>
                          <Badge className="bg-green-100 text-green-800 hover:bg-green-100">Multinational</Badge>
                        </div>
                      </CardContent>
                    </Card>

                    <Card className="bg-muted/30 border-none shadow-sm">
                      <CardHeader className="p-4 pb-2">
                        <CardTitle className="text-base">Amazonlog</CardTitle>
                      </CardHeader>
                      <CardContent className="p-4 pt-0">
                        <p className="text-sm mb-2">
                          Hosts the Amazonlog multinational military exercise, which focuses on logistics and
                          humanitarian assistance in the Amazon region.
                        </p>
                        <div className="flex items-center gap-2">
                          <Badge className="bg-blue-100 text-blue-800 hover:bg-blue-100">Logistics</Badge>
                          <Badge className="bg-purple-100 text-purple-800 hover:bg-purple-100">Regional</Badge>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Market Opportunities */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <TrendingUp className="h-5 w-5 text-primary" />
                Market Opportunities
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <p>
                  Brazil presents several opportunities for defense and security companies, particularly in areas where
                  the country is seeking to modernize its capabilities and address emerging threats.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
                  <Card className="border border-primary/20">
                    <CardHeader className="pb-2">
                      <div className="flex items-center gap-3">
                        <div className="rounded-md bg-primary/10 p-2">
                          <ShieldAlert className="h-5 w-5 text-primary" />
                        </div>
                        <CardTitle className="text-base">Maritime Security</CardTitle>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2 mt-2">
                        <li className="flex items-start gap-2">
                          <span className="text-primary mt-1">•</span>
                          <span>Coastal surveillance systems</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-primary mt-1">•</span>
                          <span>Offshore patrol vessels</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-primary mt-1">•</span>
                          <span>Naval communications equipment</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-primary mt-1">•</span>
                          <span>Mine countermeasures technology</span>
                        </li>
                      </ul>
                    </CardContent>
                  </Card>

                  <Card className="border border-primary/20">
                    <CardHeader className="pb-2">
                      <div className="flex items-center gap-3">
                        <div className="rounded-md bg-primary/10 p-2">
                          <Globe className="h-5 w-5 text-primary" />
                        </div>
                        <CardTitle className="text-base">Cybersecurity</CardTitle>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2 mt-2">
                        <li className="flex items-start gap-2">
                          <span className="text-primary mt-1">•</span>
                          <span>Critical infrastructure protection systems</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-primary mt-1">•</span>
                          <span>Secure communications networks</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-primary mt-1">•</span>
                          <span>Threat intelligence solutions</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-primary mt-1">•</span>
                          <span>Training and capacity building programs</span>
                        </li>
                      </ul>
                    </CardContent>
                  </Card>

                  <Card className="border border-primary/20">
                    <CardHeader className="pb-2">
                      <div className="flex items-center gap-3">
                        <div className="rounded-md bg-primary/10 p-2">
                          <FileText className="h-5 w-5 text-primary" />
                        </div>
                        <CardTitle className="text-base">Border Security</CardTitle>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2 mt-2">
                        <li className="flex items-start gap-2">
                          <span className="text-primary mt-1">•</span>
                          <span>Integrated border surveillance systems</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-primary mt-1">•</span>
                          <span>Unmanned aerial vehicles for patrol and monitoring</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-primary mt-1">•</span>
                          <span>Advanced sensors and detection equipment</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-primary mt-1">•</span>
                          <span>Command and control systems for coordinated response</span>
                        </li>
                      </ul>
                    </CardContent>
                  </Card>

                  <Card className="border border-primary/20">
                    <CardHeader className="pb-2">
                      <div className="flex items-center gap-3">
                        <div className="rounded-md bg-primary/10 p-2">
                          <Users className="h-5 w-5 text-primary" />
                        </div>
                        <CardTitle className="text-base">Public Security</CardTitle>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2 mt-2">
                        <li className="flex items-start gap-2">
                          <span className="text-primary mt-1">•</span>
                          <span>Urban surveillance systems</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-primary mt-1">•</span>
                          <span>Non-lethal crowd control equipment</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-primary mt-1">•</span>
                          <span>Emergency response communications</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-primary mt-1">•</span>
                          <span>Forensic and investigative technologies</span>
                        </li>
                      </ul>
                    </CardContent>
                  </Card>
                </div>

                <div className="mt-6 p-4 bg-muted/30 rounded-lg">
                  <h3 className="text-lg font-medium mb-3">Key Considerations for Market Entry</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-2">
                      <Scale className="h-5 w-5 text-primary mt-0.5 shrink-0" />
                      <div>
                        <span className="font-medium">Regulatory Environment:</span> Defense procurement in Brazil
                        typically requires government-to-government agreements or direct commercial sales approved by
                        the Ministry of Defense.
                      </div>
                    </li>
                    <li className="flex items-start gap-2">
                      <Building className="h-5 w-5 text-primary mt-0.5 shrink-0" />
                      <div>
                        <span className="font-medium">Local Partnerships:</span> Collaborating with Brazilian companies
                        can facilitate market entry and address requirements for technology transfer and local content.
                      </div>
                    </li>
                    <li className="flex items-start gap-2">
                      <DollarSign className="h-5 w-5 text-primary mt-0.5 shrink-0" />
                      <div>
                        <span className="font-medium">Financing Solutions:</span> Given budget constraints, offering
                        flexible financing options or export credit arrangements can be a competitive advantage.
                      </div>
                    </li>
                    <li className="flex items-start gap-2">
                      <Globe className="h-5 w-5 text-primary mt-0.5 shrink-0" />
                      <div>
                        <span className="font-medium">Regional Approach:</span> Positioning solutions as addressing
                        regional security challenges can align with Brazil's interest in regional cooperation on
                        security matters.
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}

