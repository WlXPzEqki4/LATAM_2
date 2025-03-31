"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CalendarDays, FileText } from "lucide-react"

export default function Announcements() {
  const announcements = [
    {
      id: 1,
      title: "IDEX 2025 Announcements",
      date: "February 23, 2025",
      category: "Contract",
      description: "Major contracts and agreements announced during IDEX 2025 in Abu Dhabi",
      details: [
        "Signing of the 16 MANSUP contract with the Brazilian Navy.",
        "Signing of an initial multi-million Brazilian Reais 7 million contract as part of a larger project expected to invest R$45MM with the National Secretariat for Penal Policies (SENAPPEN) for non-lethal technology",
      ],
    },
    {
      id: 2,
      title: "LAAD 2025 Announcements",
      date: "March 15, 2025",
      category: "Partnership",
      description:
        "Strategic agreements and partnerships announced during LAAD Defense & Security exhibition in Rio de Janeiro",
      details: [
        "Strategic agreement with the Brazilian Navy, detailing the joint development of anti-drone systems.",
        "Signing of the licence contract for the transfer of non-patented MANSUP-ER technology.",
        "SIATT Signs Contract to Supply 120 units of the MAX 1.2 AC missile to the Brazilian Army",
        "Strategic Agreement with the government of Mato Grosso, focused on border surveillance solutions.",
        "Letter of Intention with the government of Bahia to serve projects with all Forces and servants of the Military Police, Civil Police and Fire Brigade.",
        "Strategic Agreement with the city of Curitiba for further discussion of cybersecurity solutions.",
        "Memorandum of Understanding with the Brazilian Naval Company Emgepron for future developments of weapon systems, such as missiles, torpedoes and high-precision devices with advanced technology required for strategic military operations.",
        "Announcement of the launch of UNMASK, a powerful cybersecurity solution offered by ORYXLABS.",
        "Signing of a contract between CONDOR and the National Secretariat for Public Security (SENASP), part of the Ministry of Justice in Brazil, for initial multi-million Brazilian Reais 4,7 million contract as part of a larger project expected to invest R$112 MM.",
        "Signing of a contract between CONDOR and the Brazilian Army, for an initial multi-million Brazilian Reais 7 million contract as part of a larger project expected to invest R$140 MM.",
        "Regional Announcement of the JV PULSE in the LATAM market.",
        "Signing of Agreement with CENSIPAM to confirm commercial interest on the ultra-secure communication device from KATIM.",
      ],
    },
  ]

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold tracking-tight">Recent Announcements</h2>
      </div>

      <div className="space-y-4">
        {announcements.map((announcement) => (
          <Card key={announcement.id}>
            <CardHeader>
              <div className="flex items-center justify-between">
                <div className="space-y-1">
                  <CardTitle>{announcement.title}</CardTitle>
                  <CardDescription className="flex items-center gap-2">
                    <CalendarDays className="h-4 w-4" />
                    <span>{announcement.date}</span>
                  </CardDescription>
                </div>
                <Badge variant={announcement.category === "Contract" ? "default" : "secondary"}>
                  {announcement.category}
                </Badge>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">{announcement.description}</p>
              <div className="space-y-4">
                <div className="flex items-center gap-2 text-sm font-medium">
                  <FileText className="h-4 w-4" />
                  <span>Key Points</span>
                </div>
                <ul className="space-y-2">
                  {announcement.details.map((detail, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}

