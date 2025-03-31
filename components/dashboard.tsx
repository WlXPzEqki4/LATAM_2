"use client"

import { useState } from "react"
import { Calendar, Globe, Users, Bell, ChevronRight, Flag } from "lucide-react"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Itinerary from "@/components/itinerary"
import MediaProfiles from "@/components/media-profiles"
import RegionalHighlights from "@/components/regional-highlights"
import Announcements from "@/components/announcements"
import { cn } from "@/lib/utils"
import Agenda from "@/components/agenda"
import Countries from "@/components/countries"

export default function Dashboard() {
  const [activeTab, setActiveTab] = useState("agenda")

  return (
    <div className="flex min-h-screen bg-background">
      {/* Sidebar */}
      <div className="hidden w-64 flex-col border-r bg-muted/40 p-6 md:flex">
        <div className="mb-8">
          <img
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Edge_Group_Logo.svg-9fCiANSzCEZV18VqiRtcrracTPfNPb.png"
            alt="EDGE Logo"
            className="h-10 w-auto"
          />
        </div>

        <nav className="flex flex-col gap-2">
          <button
            onClick={() => setActiveTab("agenda")}
            className={cn(
              "flex items-center gap-3 rounded-md px-3 py-2 text-sm transition-colors",
              activeTab === "agenda"
                ? "bg-primary text-primary-foreground"
                : "text-muted-foreground hover:bg-muted hover:text-foreground",
            )}
          >
            <Calendar className="h-4 w-4" />
            <span>Agenda</span>
            {activeTab === "agenda" && <ChevronRight className="ml-auto h-4 w-4" />}
          </button>

          <button
            onClick={() => setActiveTab("itinerary")}
            className={cn(
              "flex items-center gap-3 rounded-md px-3 py-2 text-sm transition-colors",
              activeTab === "itinerary"
                ? "bg-primary text-primary-foreground"
                : "text-muted-foreground hover:bg-muted hover:text-foreground",
            )}
          >
            <Calendar className="h-4 w-4" />
            <span>Itinerary</span>
            {activeTab === "itinerary" && <ChevronRight className="ml-auto h-4 w-4" />}
          </button>

          <button
            onClick={() => setActiveTab("countries")}
            className={cn(
              "flex items-center gap-3 rounded-md px-3 py-2 text-sm transition-colors",
              activeTab === "countries"
                ? "bg-primary text-primary-foreground"
                : "text-muted-foreground hover:bg-muted hover:text-foreground",
            )}
          >
            <Flag className="h-4 w-4" />
            <span>Countries</span>
            {activeTab === "countries" && <ChevronRight className="ml-auto h-4 w-4" />}
          </button>

          <button
            onClick={() => setActiveTab("media")}
            className={cn(
              "flex items-center gap-3 rounded-md px-3 py-2 text-sm transition-colors",
              activeTab === "media"
                ? "bg-primary text-primary-foreground"
                : "text-muted-foreground hover:bg-muted hover:text-foreground",
            )}
          >
            <Users className="h-4 w-4" />
            <span>Media Profiles</span>
            {activeTab === "media" && <ChevronRight className="ml-auto h-4 w-4" />}
          </button>

          <button
            onClick={() => setActiveTab("highlights")}
            className={cn(
              "flex items-center gap-3 rounded-md px-3 py-2 text-sm transition-colors",
              activeTab === "highlights"
                ? "bg-primary text-primary-foreground"
                : "text-muted-foreground hover:bg-muted hover:text-foreground",
            )}
          >
            <Globe className="h-4 w-4" />
            <span>Regional Highlights</span>
            {activeTab === "highlights" && <ChevronRight className="ml-auto h-4 w-4" />}
          </button>

          <button
            onClick={() => setActiveTab("announcements")}
            className={cn(
              "flex items-center gap-3 rounded-md px-3 py-2 text-sm transition-colors",
              activeTab === "announcements"
                ? "bg-primary text-primary-foreground"
                : "text-muted-foreground hover:bg-muted hover:text-foreground",
            )}
          >
            <Bell className="h-4 w-4" />
            <span>Announcements</span>
            {activeTab === "announcements" && <ChevronRight className="ml-auto h-4 w-4" />}
          </button>
        </nav>

        <div className="mt-auto pt-6 border-t">{/* Sidebar footer content can be added here if needed */}</div>
      </div>

      {/* Mobile navigation */}
      <div className="md:hidden border-b p-4">
        <Tabs defaultValue="itinerary" value={activeTab} onValueChange={setActiveTab}>
          <TabsList className="grid grid-cols-5">
            <TabsTrigger value="agenda">
              <Calendar className="h-4 w-4 md:mr-2" />
              <span className="hidden md:inline-block">Agenda</span>
            </TabsTrigger>
            <TabsTrigger value="itinerary">
              <Calendar className="h-4 w-4 md:mr-2" />
              <span className="hidden md:inline-block">Itinerary</span>
            </TabsTrigger>
            <TabsTrigger value="countries">
              <Flag className="h-4 w-4 md:mr-2" />
              <span className="hidden md:inline-block">Countries</span>
            </TabsTrigger>
            <TabsTrigger value="media">
              <Users className="h-4 w-4 md:mr-2" />
              <span className="hidden md:inline-block">Media</span>
            </TabsTrigger>
            <TabsTrigger value="highlights">
              <Globe className="h-4 w-4 md:mr-2" />
              <span className="hidden md:inline-block">Highlights</span>
            </TabsTrigger>
            <TabsTrigger value="announcements">
              <Bell className="h-4 w-4 md:mr-2" />
              <span className="hidden md:inline-block">Announcements</span>
            </TabsTrigger>
          </TabsList>
        </Tabs>
      </div>

      {/* Main content */}
      <div className="flex-1 overflow-auto">
        <header className="border-b bg-background p-4 md:p-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold tracking-tight">Roadshow LATAM & BRAZIL</h1>
              <p className="text-muted-foreground">Wednesday, 02 April 2025 - Friday, 11 April 2025</p>
            </div>
          </div>
        </header>

        <main className="p-4 md:p-6">
          {activeTab === "agenda" && <Agenda />}
          {activeTab === "itinerary" && <Itinerary />}
          {activeTab === "countries" && <Countries />}
          {activeTab === "media" && <MediaProfiles />}
          {activeTab === "highlights" && <RegionalHighlights />}
          {activeTab === "announcements" && <Announcements />}
        </main>
      </div>
    </div>
  )
}

