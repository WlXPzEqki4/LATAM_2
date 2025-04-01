"use client"

import { useState, useEffect, useRef } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import {
  Activity,
  AlertCircle,
  Anchor,
  ArrowRight,
  BarChart3,
  Briefcase,
  Building,
  Calendar,
  ChevronLeft,
  ChevronRight,
  CreditCard,
  Crosshair,
  DollarSign,
  Download,
  ExternalLink,
  Eye,
  FileText,
  Filter,
  Globe,
  Handshake,
  HelpCircle,
  Info,
  Landmark,
  Layers,
  LayoutDashboard,
  List,
  Lock,
  LucideIcon,
  Menu,
  MessageSquare,
  Minus,
  Moon,
  MoreHorizontal,
  MoreVertical,
  Package,
  Plane,
  Plus,
  Radar,
  RefreshCw,
  Scale,
  Search,
  Settings,
  Share,
  ShieldAlert,
  ShieldCheck,
  Slash,
  SlidersHorizontal,
  Star,
  Sun,
  Syringe,
  Tag,
  Trash,
  TrendingUp,
  Twitter,
  Upload,
  User,
  UserPlus,
  Users,
  X,
} from "lucide-react"
import { Progress } from "@/components/ui/progress"

export default function Countries() {
  const [selectedCountry, setSelectedCountry] = useState("argentina")

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
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Globe className="h-5 w-5" />
                      <span>Country Overview</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground mb-4">
                      Argentina is experiencing significant political and economic changes under President Javier Milei's administration, which took office in December 2023. The new government is implementing a series of market-friendly reforms and austerity measures aimed at addressing the country's economic challenges, including high inflation, fiscal deficit, and currency controls.
                    </p>
                    <div className="grid grid-cols-3 gap-4 text-center">
                      <div>
                        <div className="text-xs text-muted-foreground">Population</div>
                        <div className="font-medium">45.8 million</div>
                      </div>
                      <div>
                        <div className="text-xs text-muted-foreground">Capital</div>
                        <div className="font-medium">Buenos Aires</div>
                      </div>
                      <div>
                        <div className="text-xs text-muted-foreground">Official Language</div>
                        <div className="font-medium">Spanish</div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <User className="h-5 w-5" />
                      <span>Milei Administration</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div>
                        <div className="text-xs text-muted-foreground">PRESIDENT</div>
                        <div className="font-medium">Javier Milei</div>
                        <div className="text-xs text-muted-foreground">Libertarian economist who took office in December 2023</div>
                      </div>
                      <div>
                        <div className="text-xs text-muted-foreground">KEY OFFICIALS</div>
                        <ul className="text-sm space-y-1 list-disc list-inside">
                          <li>Luis Petri <span className="text-muted-foreground">Minister of Defense</span></li>
                          <li>Patricia Bullrich <span className="text-muted-foreground">Minister of Security</span></li>
                          <li>Luis Caputo <span className="text-muted-foreground">Minister of Economy</span></li>
                          <li>Diana Mondino <span className="text-muted-foreground">Minister of Foreign Affairs</span></li>
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Landmark className="h-5 w-5" />
                      <span>Key Strategic Locations</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="text-sm space-y-2 list-disc list-inside">
                      <li><strong>Buenos Aires (Capital)</strong>: Political and economic center, major port</li>
                      <li><strong>Córdoba</strong>: Industrial hub, aerospace and automotive manufacturing</li>
                      <li><strong>Mendoza</strong>: Wine region, gateway to Chile via Andes</li>
                      <li><strong>Ushuaia</strong>: Naval base, southernmost city, gateway to Antarctica</li>
                      <li><strong>Vaca Muerta</strong>: Major oil and gas reserves, significant energy potential</li>
                      <li><strong className="text-red-500">Falklands/Malvinas</strong>: Disputed territory with the UK</li>
                    </ul>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Briefcase className="h-5 w-5" />
                      <span>Policy Direction</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="text-sm space-y-2 list-disc list-inside">
                      <li><strong>Pro-Western foreign policy</strong>: Alignment with US and Western allies</li>
                      <li><strong>Free-market economic reforms</strong>: Deregulation, privatization, and fiscal austerity</li>
                      <li><strong>NATO global partner ambitions</strong>: Seeking closer defense ties with NATO</li>
                      <li><strong>Military modernization</strong>: Plans to update aging military equipment</li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </CardContent>
          </Card>

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
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Globe className="h-5 w-5" />
                      <span>Country Overview</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground mb-4">
                      Chile is a stable democracy with a strong economy based on copper exports, agriculture, and services. Under President Gabriel Boric, who took office in March 2022 as the country's youngest modern president, Chile is navigating political changes following social unrest in 2019-2020 and the rejection of a proposed new constitution in 2022.
                    </p>
                    <div className="grid grid-cols-3 gap-4 text-center">
                      <div>
                        <div className="text-xs text-muted-foreground">Population</div>
                        <div className="font-medium">19.2 million</div>
                      </div>
                      <div>
                        <div className="text-xs text-muted-foreground">Capital</div>
                        <div className="font-medium">Santiago</div>
                      </div>
                      <div>
                        <div className="text-xs text-muted-foreground">Official Language</div>
                        <div className="font-medium">Spanish</div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <User className="h-5 w-5" />
                      <span>Boric Administration</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div>
                        <div className="text-xs text-muted-foreground">PRESIDENT</div>
                        <div className="font-medium">Gabriel Boric</div>
                        <div className="text-xs text-muted-foreground">Former student leader who took office in March 2022</div>
                      </div>
                      <div>
                        <div className="text-xs text-muted-foreground">KEY OFFICIALS</div>
                        <ul className="text-sm space-y-1 list-disc list-inside">
                          <li>Carolina Tohá <span className="text-muted-foreground">Minister of Interior</span></li>
                          <li>Alberto van Klaveren <span className="text-muted-foreground">Minister of Foreign Affairs</span></li>
                          <li>Maya Fernández <span className="text-muted-foreground">Minister of Defense</span></li>
                          <li>Mario Marcel <span className="text-muted-foreground">Minister of Finance</span></li>
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Landmark className="h-5 w-5" />
                      <span>Key Strategic Locations</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="text-sm space-y-2 list-disc list-inside">
                      <li><strong>Santiago</strong>: Capital and economic center</li>
                      <li><strong>Valparaíso</strong>: Major port and naval base</li>
                      <li><strong>Concepción</strong>: Industrial center and energy hub</li>
                      <li><strong>Antofagasta</strong>: Mining region, copper and lithium</li>
                      <li><strong>Punta Arenas</strong>: Strategic position near Antarctic territory</li>
                      <li><strong>Iquique</strong>: Free trade zone and port city</li>
                    </ul>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Briefcase className="h-5 w-5" />
                      <span>Policy Direction</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="text-sm space-y-2 list-disc list-inside">
                      <li><strong>Progressive social reforms</strong>: Focus on inequality, education, healthcare</li>
                      <li><strong>Environmental leadership</strong>: Climate change initiatives and renewable energy</li>
                      <li><strong>Balanced foreign policy</strong>: Maintaining relations with both US and China</li>
                      <li><strong>Constitutional process</strong>: Continuing efforts for constitutional reform</li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </CardContent>
          </Card>

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
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Globe className="h-5 w-5" />
                      <span>Country Overview</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground mb-4">
                      Brazil is Latin America's largest economy and a regional power. President Luiz Inácio Lula da Silva returned to office in January 2023 for a third term, following a polarizing election against former President Jair Bolsonaro. Lula's administration is focusing on social programs, environmental protection, and repositioning Brazil on the global stage.
                    </p>
                    <div className="grid grid-cols-3 gap-4 text-center">
                      <div>
                        <div className="text-xs text-muted-foreground">Population</div>
                        <div className="font-medium">214 million</div>
                      </div>
                      <div>
                        <div className="text-xs text-muted-foreground">Capital</div>
                        <div className="font-medium">Brasília</div>
                      </div>
                      <div>
                        <div className="text-xs text-muted-foreground">Official Language</div>
                        <div className="font-medium">Portuguese</div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <User className="h-5 w-5" />
                      <span>Lula Administration</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div>
                        <div className="text-xs text-muted-foreground">PRESIDENT</div>
                        <div className="font-medium">Luiz Inácio Lula da Silva</div>
                        <div className="text-xs text-muted-foreground">Returned to office in January 2023 for a third term</div>
                      </div>
                      <div>
                        <div className="text-xs text-muted-foreground">KEY OFFICIALS</div>
                        <ul className="text-sm space-y-1 list-disc list-inside">
                          <li>Fernando Haddad <span className="text-muted-foreground">Minister of Finance</span></li>
                          <li>Mauro Vieira <span className="text-muted-foreground">Minister of Foreign Affairs</span></li>
                          <li>José Múcio <span className="text-muted-foreground">Minister of Defense</span></li>
                          <li>Marina Silva <span className="text-muted-foreground">Minister of Environment</span></li>
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Landmark className="h-5 w-5" />
                      <span>Key Strategic Locations</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="text-sm space-y-2 list-disc list-inside">
                      <li><strong>Brasília</strong>: Capital and administrative center</li>
                      <li><strong>São Paulo</strong>: Financial and industrial powerhouse</li>
                      <li><strong>Rio de Janeiro</strong>: Tourism, oil industry, and naval base</li>
                      <li><strong>Manaus</strong>: Amazon gateway and free trade zone</li>
                      <li><strong>Itaipu Dam</strong>: Major hydroelectric power source</li>
                      <li><strong>Santos</strong>: Largest port in Latin America</li>
                    </ul>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Briefcase className="h-5 w-5" />
                      <span>Policy Direction</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="text-sm space-y-2 list-disc list-inside">
                      <li><strong>Amazon protection</strong>: Renewed focus on reducing deforestation</li>
                      <li><strong>Social welfare expansion</strong>: Bolsa Família and poverty reduction programs</li>
                      <li><strong>BRICS engagement</strong>: Strengthening ties with Russia, India, China, South Africa</li>
                      <li><strong>Climate leadership</strong>: Positioning Brazil as environmental leader</li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </CardContent>
          </Card>

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
