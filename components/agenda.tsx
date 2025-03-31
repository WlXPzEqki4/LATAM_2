"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { CalendarDays, Info } from "lucide-react"

export default function Agenda() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold tracking-tight">Agenda</h2>
      </div>

      <Card>
        <CardHeader className="bg-primary text-primary-foreground">
          <CardTitle className="text-xl">MEETING DETAILS</CardTitle>
        </CardHeader>
        <CardContent className="p-0">
          <div className="divide-y">
            <div className="grid grid-cols-1 md:grid-cols-5 divide-y md:divide-y-0 md:divide-x">
              <div className="p-4 bg-muted/40 font-medium flex items-center gap-2">
                <span className="text-primary font-semibold">Subject</span>
              </div>
              <div className="p-4 md:col-span-4">Roadshow LATAM & BRAZIL</div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-5 divide-y md:divide-y-0 md:divide-x">
              <div className="p-4 bg-muted/40 font-medium flex items-center gap-2">
                <span className="text-primary font-semibold">Date</span>
              </div>
              <div className="p-4 md:col-span-4">Wednesday, 02 April 2025 - Friday, 11 April 2025</div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-5 divide-y md:divide-y-0 md:divide-x">
              <div className="p-4 bg-muted/40 font-medium flex items-center gap-2">
                <span className="text-primary font-semibold">Objective</span>
              </div>
              <div className="p-4 md:col-span-4 space-y-4">
                <p>
                  After 18 months of consolidating EDGE's image and reputation in Brazil, the aim of this agenda is to
                  start exploring opportunities in the other Latin American markets. Argentina and Chile are strategic
                  priority markets and both have a traditional and strong press.
                </p>
                <p>
                  Therefore, the idea of introducing Hamad to the local press is a step further in the development of a
                  comms strategy that initially introduced EDGE as a global player and Brazil's partner and now will
                  amplify and consolidate this relationship for future announcements and ongoing engagements. These will
                  serve as an important milestone in establishing a fruitful relationship with Latin American
                  journalists.
                </p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <CalendarDays className="h-5 w-5 text-primary" />
              Key Dates & Activities
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-2">
              <h3 className="text-lg font-semibold">Dubai → Rio de Janeiro, Brazil</h3>
              <ul className="space-y-1 pl-5 list-disc">
                <li>Wednesday, April 2, 2025: Depart Dubai (Flight EK247)</li>
                <li>Thursday, April 3, 2025: Recovery day in Rio</li>
                <li>Friday, April 4, 2025: Depart to Buenos Aires</li>
              </ul>
            </div>

            <div className="space-y-2">
              <h3 className="text-lg font-semibold">Buenos Aires, Argentina</h3>
              <ul className="space-y-1 pl-5 list-disc">
                <li>Saturday-Sunday, April 5-6, 2025: Weekend off</li>
                <li>
                  Monday, April 7, 2025:
                  <ul className="pl-5 list-disc mt-1">
                    <li>Multiple media interviews (CNN Argentina, Forbes, etc.)</li>
                    <li>Meeting with Demian Reidel (Presidential Office)</li>
                  </ul>
                </li>
                <li>Tuesday, April 8, 2025: Final interviews and evening flight to Santiago</li>
              </ul>
            </div>

            <div className="space-y-2">
              <h3 className="text-lg font-semibold">Santiago, Chile</h3>
              <ul className="space-y-1 pl-5 list-disc">
                <li>Wednesday, April 9, 2025: Media interviews including TV recording</li>
                <li>Thursday, April 10, 2025: More interviews and evening flight to Sao Paulo</li>
              </ul>
            </div>

            <div className="space-y-2">
              <h3 className="text-lg font-semibold">Sao Paulo, Brazil → Dubai</h3>
              <ul className="space-y-1 pl-5 list-disc">
                <li>Friday, April 11, 2025: Final media interviews and departure to Dubai</li>
              </ul>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Info className="h-5 w-5 text-primary" />
              Strategic Approach
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <p>
                This roadshow represents a strategic expansion of EDGE's presence in Latin America, building on the
                foundation established in Brazil over the past 18 months. The meetings and media engagements are
                designed to:
              </p>
              <ul className="space-y-2 pl-5 list-disc">
                <li>Introduce EDGE's capabilities to key stakeholders in Argentina and Chile</li>
                <li>Establish relationships with influential media outlets across the region</li>
                <li>Position EDGE as a strategic partner for defense and security solutions</li>
                <li>Explore new market opportunities in priority Latin American countries</li>
              </ul>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

