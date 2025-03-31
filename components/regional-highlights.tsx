"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Shield, Globe, Anchor, Map } from "lucide-react"

export default function RegionalHighlights() {
  const highlights = [
    {
      id: 1,
      title: "Internal Security & Border Surveillance",
      description:
        "Latin American countries are increasingly focusing on modernizing their border surveillance capabilities to address security challenges.",
      icon: <Shield className="h-8 w-8 text-primary" />,
      details: [
        "Growing demand for integrated border management systems",
        "Interest in drone-based surveillance solutions",
        "Need for command and control systems that can integrate with existing infrastructure",
        "Focus on cost-effective solutions with technology transfer components",
      ],
    },
    {
      id: 2,
      title: "Intelligent Systems in Argentina",
      description:
        "Argentina is seeking to implement advanced intelligent systems for both defense and civilian applications.",
      icon: <Globe className="h-8 w-8 text-primary" />,
      details: [
        "Potential projects for intelligent traffic management systems in urban areas",
        "Interest in AI-powered surveillance for critical infrastructure protection",
        "Opportunities for smart city technologies with security applications",
        "Focus on systems that can be manufactured locally with technology transfer",
      ],
    },
    {
      id: 3,
      title: "G2G Relationship Strengthening",
      description:
        "Government-to-Government relationships are becoming increasingly important in defense procurement across Latin America.",
      icon: <Map className="h-8 w-8 text-primary" />,
      details: [
        "Growing preference for G2G agreements over direct commercial sales",
        "Opportunities for strategic partnerships with technology transfer components",
        "Interest in long-term cooperation frameworks rather than one-off purchases",
        "Focus on industrial cooperation and local manufacturing capabilities",
      ],
    },
    {
      id: 4,
      title: "Naval Projects in Chile",
      description:
        "Chile is exploring modernization of its naval capabilities with a focus on maritime surveillance and patrol vessels.",
      icon: <Anchor className="h-8 w-8 text-primary" />,
      details: [
        "Interest in offshore patrol vessels with advanced sensor suites",
        "Need for maritime surveillance systems for extensive coastline protection",
        "Focus on systems that can operate in challenging Antarctic conditions",
        "Opportunities for unmanned surface vessels for coastal patrol missions",
      ],
    },
  ]

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold tracking-tight">Regional Highlights</h2>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        {highlights.map((highlight) => (
          <Card key={highlight.id}>
            <CardHeader className="pb-2">
              <div className="flex items-start gap-4">
                <div className="rounded-md bg-primary/10 p-2">{highlight.icon}</div>
                <div>
                  <CardTitle>{highlight.title}</CardTitle>
                  <CardDescription className="mt-2">{highlight.description}</CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 mt-2">
                {highlight.details.map((detail, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>{detail}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}

