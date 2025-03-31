"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Newspaper, FileText, User, ChevronRight, ExternalLink, Globe, Download, Building } from "lucide-react"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog"

export default function MediaProfiles() {
  const [selectedCountry, setSelectedCountry] = useState("argentina")
  const [selectedProfile, setSelectedProfile] = useState<any>(null)

  // Update the Brazil journalists' data with the provided information
  const mediaProfiles = {
    argentina: [
      {
        id: 1,
        name: "Juan Roldán",
        outlet: "Zona Militar",
        background: "Associate Editor at Zona Militar specializing in defence, security and military policy issues",
        interests: ["EDGE's expansion plan", "EDGE's plan for Latin America", "Solutions for Armed Forces"],
        pastCoverage: "Coverage of EDGE's consolidation in Brazil and expansion plans in Latin America",
        imageUrl: "/images/gonzalo-mary.png", // Swapped with Gonzalo
        fullProfile: {
          title: "Associate Editor",
          organization: "Zona Militar",
          profileText:
            "Associate Editor at Zona Militar, Juan Roldán is an Argentinian journalist specialising in defence, security and military policy issues. He has a solid background and in-depth knowledge of military affairs and public security issues. He also covers topics such as military technology, drug trafficking, national sovereignty issues and the political challenges facing the defence sector. His work is recognised for the analytical and investigative nature, with critical and detailed coverage, often highlighting the political and social dynamics surrounding the armed forces and internal security in Argentina. With a degree in Political Science and Government from the University of Business and Social Sciences, the editor has been writing for Zona Militar for 5 years. Additionally, he has a background in International Relations from the University of National Defence.",
          interests: [
            "Understand more about EDGE's expansion plan",
            "Explore EDGE's plan for Latin American and Argentina",
            "What solutions EDGE has for the Armed Forces",
          ],
          outletDescription:
            "Zona Militar is a news and analysis website dedicated to defence and security issues in Argentina, but it also covers military issues more broadly, with a focus on the armed forces, internal security and national defence policy. It is one of the main sources of information on the challenges facing Argentina's armed forces, including budget issues, modernisation and training.",
          outletUrl: "https://www.zona-militar.com/en/zona-militar-english/",
          pastCoverageTitle:
            "After consolidating its presence in Brazil, the company EDGE Group of the United Arab Emirates plans to expand into new customers and strategic alliances",
          pastCoverageUrl:
            "https://www.zona-militar.com/2025/03/16/tras-consolidar-su-presencia-en-brasil-la-empresa-edge-group-de-emiratos-arabes-unidos-planea-su-expansion-hacia-nuevos-clientes-y-alianzas-estrategicas/",
          pastCoveragePdf: "/documents/edge-group-brazil-expansion.pdf",
        },
      },
      {
        id: 2,
        name: "Luciana Vazquez",
        outlet: "La Nacion",
        background: "Political columnist and reporter with a broad economic and social perspective",
        interests: ["Geopolitics", "Argentina-UAE relations", "Defense economics"],
        pastCoverage: "Analysis of international defense companies entering Latin American markets",
        imageUrl: "/images/luciana-vazquez.png",
        fullProfile: {
          title: "Political Columnist",
          organization: "La Nacion",
          profileText:
            "Luciana Vazquez is a Buenos Aires based political columnist and reporter with a broad economic and social perspective. TV, web TV and radio anchor with a long experience covering news and trends in Argentina and focusing on Southern Cone and global affairs. As a political columnist, Luciana offers a keen analysis of the Argentine political context that brings a broader perspective. Her work at La Nacion is highly valued for connecting the dots from Argentina to regional debates in Southern Cone and political, economic, and social trends. Luciana was born in Buenos Aires and is an Argentine-Canadian citizen. She is natively fluent in written and spoken Spanish and is fluent in spoken and written English.",
          interests: [
            "Geopolitics",
            "Relationship Argentina and UAE",
            "Understand more about EDGE's expansion plan",
            "Explore EDGE's plan for Latin American and Argentina",
          ],
          outletDescription:
            "La Nación is one of Argentina's most important and influential newspapers, founded in 1870. It is known for its comprehensive coverage of national and international news, and has a conservative and liberal editorial profile, especially on economic, social and political issues. La Nación is considered one of Argentina's most respected newspapers, with a major impact on public opinion and a readership predominantly among elites, businesspeople and professionals. It has a strong digital presence in addition to its printed version. The newspaper defends free market policies, a low level of state intervention in the economy and traditional values, which puts it more in line with conservative forces.",
          outletUrl: "https://www.lanacion.com.ar/",
        },
      },
      {
        id: 3,
        name: "Gonzalo Mary",
        outlet: "Infodefensa",
        background: "Special correspondent for Infodefensa specializing in defence and public security",
        interests: ["Defence technology", "Military strategy", "Regional security"],
        pastCoverage: "Recent articles on Argentina's border security modernization plans",
        imageUrl: "/images/juan-roldan.png", // Swapped with Juan
        fullProfile: {
          title: "Special Correspondent",
          organization: "Infodefensa",
          profileText:
            "Special correspondent for Infodefensa, one of the main defence outlets in the world, with strong regional branches in Latin America. Special focus on defence and public security. Gonzalo has a degree in international relations from the University Institute of the Argentine Federal Police. Master's degree in strategy and geopolitics from the Escuela Superior de Guerra, with a specialisation in contemporary military history. University professor, currently at the National Military College.",
          interests: [
            "Understand more about EDGE's expansion plan",
            "Explore EDGE's plan for Latin American and Argentina",
            "What solutions EDGE has for the Armed Forces",
          ],
          outletDescription:
            "Infodefensa, the leading online media specialising in security and defence information in Spanish, provides daily, independent and useful information for the sector, offering a global knowledge of new technologies, trends and companies in the Defence and Security industry in the Spanish and American markets. Infodefensa is the first media specialising in defence with a presence on the most important social networks such as LinkedIn, Twitter, Facebook and YouTube.",
          outletUrl: "https://www.infodefensa.com/",
        },
      },
    ],
    chile: [
      {
        id: 1,
        name: "Valeria Ibarra",
        outlet: "Diario Financiero",
        background:
          "Editor of the business section at Diario Financiero with experience at major Chilean media outlets",
        interests: ["Investments in South America", "UAE-Chile relations", "Defense economics"],
        pastCoverage: "Coverage of international investments and economic relations in the defense sector",
        imageUrl: "/images/valeria-ibarra.png",
        fullProfile: {
          title: "Business Section Editor",
          organization: "Diario Financiero",
          profileText:
            "Valeria is the editor of the business section of the newspaper Diario Finaciero. Her reports often provide an in-depth understanding of current developments and future prospects for the industry. Previously, Valeria had experience in major Chilean media such as Televisión Nacional and El Mercurio, considered big outlets in the region. She graduated from the Barcelona University.",
          interests: [
            "Investments in South America and Chile",
            "EDGE Group's interest in Chile. In what specific areas and in what possible time frames",
            "Current state of economic and trade relations between Chile and the United Arab Emirates",
            "Importance of these relations in the global geopolitical context",
          ],
          outletDescription:
            "Diario Financiero is one of Chile's leading economic and financial newspapers. Founded in 1985, it stands out for its focus on economic, financial and business issues, offering in-depth coverage of the financial market, economic policy, and business trends both in Chile and abroad. It is currently controlled by Grupo Claro. Diario is especially relevant to finance professionals, investors, and entrepreneurs, covering topics such as stocks, investments, commodity markets, and monetary policies. In addition to the economy, the newspaper is dedicated to the business world, including news about large companies, startups, mergers and acquisitions, and innovation trends in the corporate world.",
          outletUrl: "https://www.df.cl/",
        },
      },
      {
        id: 2,
        name: "Erika Gonzalez",
        outlet: "Televisión Nacional de Chile",
        background:
          "Journalist with experience as a journalistic producer and assistant in advanced journalism workshops",
        interests: ["Regional investments", "Defense partnerships", "International relations"],
        pastCoverage: "Television segments on Chile's defense strategy and international partnerships",
        imageUrl: "/images/erika-gonzalez.png",
        fullProfile: {
          title: "Journalist",
          organization: "Televisión Nacional de Chile",
          profileText:
            "Erika González is a Chilean journalist who works for Televisión Nacional de Chile (TVN). She has experience as a journalistic producer and assistant in advanced journalism workshops. Erika worked for another big Chilean media, the outlet Megamidia.",
          interests: [
            "Investments in South America and Chile",
            "Understand more about EDGE's expansion and regional plans",
            "EDGE Group's interest in Chile. In what specific areas and in what possible time frames",
          ],
          outletDescription:
            "TVN is a public broadcaster, funded mainly by state resources, although it also seeks revenue through advertising. Its role is to provide content that serves the public interest, with a focus on diversity and quality. TVN continues to be one of the main sources of content and information for Chileans, with a history of influencing public opinion and a commitment to impartiality and plurality of voices. It operates three channels: 24 hours (dedicated to news), TV Educa Chile (focused on education and culture), and the TVN main channel (with a generalist profile). TVN has a national coverage of 93%.",
          outletUrl: "https://www.tvn.cl/",
        },
      },
      {
        id: 3,
        name: "Ramon Heredia",
        outlet: "Ebanking News",
        background: "Editor and columnist for Ebanking News, Executive Director of Digital Bank Latam",
        interests: ["Digital finance", "Technology innovation", "Regional investments"],
        pastCoverage: "Author of books on digital transformation and finance in Latin America",
        imageUrl: "/images/ramon-heredia.png",
        fullProfile: {
          title: "Editor and Columnist",
          organization: "Ebanking News",
          profileText:
            "Ramon is the editor and columnist for Ebanking News. He is also the Executive Director of Digital Bank Latam; startup mentor; international speaker and author of books on digital transformation and finance. Launched last year, 'The Language of Innovation' explores the impact of the digital revolution on banking, fintech, aside from insights on the future of financial services in Latin America. Ramón Heredia is already the author of books such as Ecosistemas Digitales (Digital Ecosystems) and La revolución digital y el futuro de los servicios financieros (The Digital Revolution and the Future of Financial Services), continues to stand out as one of the leading experts in financial technology innovation in Latin America.",
          interests: [
            "Investments in South America and Chile",
            "Understand more about EDGE's expansion and regional plans",
            "EDGE Group's interest in Chile. In what specific areas and in what possible time frames",
            "Use of technological solutions",
          ],
          outletDescription:
            "Ebanking News is a specialized online outlet about AI, digital banks, finance and investment. It's owned by DIGITAL BANK Latam.",
          outletUrl: "https://www.ebankingnews.com/",
        },
      },
      {
        id: 4,
        name: "Carmen Gloria Sandoval",
        outlet: "Trade News Chile",
        background: "Founder, director and editor for the Economics and Companies section at Trade News Chile",
        interests: ["Regional investments", "Economic development", "Business growth"],
        pastCoverage: "Coverage of economic and business developments in Chile",
        imageUrl: "/images/carmen-gloria.png",
        fullProfile: {
          title: "Founder and Editor",
          organization: "Trade News Chile",
          profileText:
            "Carmen is the founder and current director and editor for the Economics and Companies section at Trade News Chile. Based in Concepcion, the second largest city of Chile.",
          interests: [
            "Talk about the importance of investment for the regional development",
            "EDGE Group's interest in Chile",
            "Local plans for investments and local growth",
          ],
          outletDescription:
            "Trade News is a news platform specialising in economics and business. In its economics section, it offers updates and analysis on various relevant economic issues, from savings and consumption trends to GDP projections and business meetings. It is a reliable source for professionals, business people and anyone interested in staying informed about the economic situation in Chile and beyond.",
          outletUrl: "https://trade-news.cl/",
        },
      },
    ],
    brazil: [
      {
        id: 1,
        name: "William Waack",
        outlet: "CNN Brasil",
        background: "Anchor and journalist with extensive experience in political and international coverage",
        interests: ["EDGE's achievements in Brazil", "Defense budget increase", "Strategic projects", "Soft power"],
        pastCoverage: "Multiple segments on Brazil's defense modernization and international partnerships",
        imageUrl: "/images/william-waack.png",
        fullProfile: {
          title: "Anchor and Journalist",
          organization: "CNN Brasil",
          profileText:
            "William Waack is an anchor and journalist with extensive experience in political and international coverage. He is known for his analytical and critical approach. In 1996, he joined Globo as a reporter, later becoming a news anchor. Waack left the network in 2017. In March 2020, he joined CNN Brasil, where he currently works. Waack also writes a weekly column at O Estado de Sao Paulo. He was awarded for two report-books: one on the Gulf War (1991) and another on the Soviet Union's involvement in the 1935 Communist Uprising (1993).",
          interests: [
            "EDGE's achievements; business perspective for Brazil; developments with local companies",
            "Soft power: Continuous opportunities to showcase EDGE's advancements in Brazil and Latin America",
            "Defence budget increase",
            "Strategic projects",
          ],
          outletDescription:
            "CNN Brasil is a Brazilian news-based pay television channel and news website. Launched on 15 March 2020, CNN Brasil is the second local franchise of CNN in South America, after CNN Chile. Its headquarters are in São Paulo, with offices in Rio de Janeiro and Brasília, besides international bureaus with almost 400 journalists.",
          outletUrl: "https://www.cnnbrasil.com.br/",
        },
      },
      {
        id: 2,
        name: "Luciano Pádua",
        outlet: "Exame",
        background: "Macroeconomics editor specializing in economics, business, and finance",
        interests: [
          "Geopolitical trends",
          "EDGE's regional expansion",
          "Brazil's public safety challenges",
          "Talent/education",
        ],
        pastCoverage: "Published a 5-page interview with Hamad Al Marar, MD&CEO of EDGE in May 2024",
        imageUrl: "/images/luciano-padua.png",
        fullProfile: {
          title: "Macroeconomics Editor",
          organization: "Exame",
          profileText:
            "Luciano Pádua is a journalist specialised in macroeconomics. Throughout his career, he worked for big outlets such as JOTA, VEJA magazine, Jornal do Brasil, and O Antagonista. He is currently the macroeconomics editor at Exame magazine, where he oversees the EXAME Agrobusines, Economics and International sections. Luciano Pádua is included in the list of the Top 51 Most Admired Journalists in the fields of economics, business, and finance in 2024. At Exame, he produces articles covering both national and international economic and political themes.",
          interests: [
            "Geopolitical interest and defence trends",
            "EDGE's regional expansion",
            "Brazil's challenges, such as public safety, and how can EDGE collaborate with its solutions",
            "Strong talent/education interest",
          ],
          outletDescription:
            "Exame is a monthly Brazilian magazine with a national circulation specialising in economics, business, politics and technology.",
          outletUrl: "https://exame.com/",
          pastCoverageTitle: "Interview with Hamad Al Marar, MD&CEO of EDGE",
          pastCoverageUrl: "https://exame.com/revista-exame/o-mercador-da-defesa/",
        },
      },
      {
        id: 3,
        name: "Eduardo Valim",
        outlet: "O Estado de São Paulo",
        background: "Senior reporter specializing in economics and business with technology coverage experience",
        interests: ["SIATT's new factory", "CONDOR's new unit in SP", "R&D projects", "Regional expansion"],
        pastCoverage: "Coverage of SIATT's investments in missile production and Avibras rescue plan mentioning EDGE",
        imageUrl: "/images/eduardo-valim.png",
        fullProfile: {
          title: "Senior Reporter",
          organization: "O Estado de São Paulo",
          profileText:
            "Carlos Eduardo Valim is a senior reporter at Estadão, specialised in economics and business. Has previously worked for other nationally recognised outlets, such as online outlet UOL and Veja magazine. In addition to covering business, he has produced articles on technology at Estadão.",
          interests: [
            "SIATT's new factory",
            "Announce with exclusivity CONDOR's new unit in SP",
            "Projects of research & development",
            "Regional expansion",
          ],
          outletDescription:
            "O Estado de S. Paulo, also known as Estadão is a daily newspaper published in São Paulo, Brazil. It is the third largest newspaper in Brazil. Very business orientated. It has the second-largest circulation in the city of São Paulo, behind only Folha de S. Paulo.",
          outletUrl: "https://www.estadao.com.br/",
          pastCoverageTitle: "SIATT's investments in missile production",
          pastCoverageUrl: "https://www.estadao.com.br/economia/negocios/siatt-defesa-fabrica-misseis-investimento/",
        },
      },
    ],
  }

  // Replace the governmentContacts object with this version that includes Demian Reidel
  const governmentContacts = {
    argentina: [
      {
        name: "Demian Reidel",
        position: "Chairman of the Council of Advisors of the President",
        background: "Former Central Bank Deputy Governor with extensive economic and financial expertise",
        interests: ["Strategic investments", "Defense modernization", "International partnerships"],
        imageUrl: "/images/demian-reidel.png",
        fullProfile: {
          title: "Chairman of the Council of Advisors",
          organization: "Office of the President of Argentina",
          profileText:
            "Chairman of the Council of Advisors of the President of Argentina. Senior Fellow at Harvard Kennedy School from 2019-2020; PhD in economics from Harvard University in the fields of international economics and finance. He also holds an MS in Financial Mathematics from the University of Chicago and a BS and MS in Physics from Instituto Balseiro. Deputy Governor of the Central Bank of Argentina from December 2015-June 2018, where he represented the Central Bank at the G20; and co-founded QFR Capital Management, a NY-based hedge fund. As Deputy Governor and member of the Board of the Central Bank of Argentina from 2015 until 2018, Dr. Reidel was appointed as part of the new leadership of the Central Bank upon President Macri's election. He was a member of the Monetary Policy Committee. As a member of the Board, he oversaw the Central Bank's prudential oversight responsibilities, including regulation of financial institutions. During his tenure, Dr. Reidel also served as the representative of the Central Bank at the G20. In this role, he designed the priorities of the G20 Finance Track during Argentina's presidency of the G20 in collaboration with the Ministry of Finance.",
        },
      },
    ],
    chile: [],
    brazil: [], // Keep Brazil empty as requested
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold tracking-tight">Media Profiles</h2>
      </div>

      <Tabs value={selectedCountry} onValueChange={setSelectedCountry} className="w-full">
        <TabsList className="mb-4">
          <TabsTrigger value="argentina">Argentina</TabsTrigger>
          <TabsTrigger value="chile">Chile</TabsTrigger>
          <TabsTrigger value="brazil">Brazil</TabsTrigger>
        </TabsList>

        {Object.keys(mediaProfiles).map((country) => (
          <TabsContent key={country} value={country} className="space-y-6">
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {mediaProfiles[country].map((profile) => (
                <Card
                  key={profile.id}
                  className="overflow-hidden group cursor-pointer transition-all duration-300 hover:shadow-md hover:border-primary/50 hover:scale-[1.02]"
                  onClick={() => setSelectedProfile(profile)}
                >
                  <CardHeader className="pb-2">
                    <div className="flex items-start gap-4">
                      <Avatar className="h-16 w-16 border">
                        <AvatarImage src={profile.imageUrl} alt={profile.name} />
                        <AvatarFallback className="bg-primary/10 text-primary">
                          {profile.name
                            .split(" ")
                            .map((n) => n[0])
                            .join("")}
                        </AvatarFallback>
                      </Avatar>
                      <div className="flex-1">
                        <div className="flex items-center justify-between">
                          <CardTitle className="text-base">{profile.name}</CardTitle>
                          <ChevronRight className="h-4 w-4 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity" />
                        </div>
                        <CardDescription className="flex items-center gap-1 mt-1">
                          <Newspaper className="h-3 w-3" />
                          {profile.outlet}
                        </CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="text-sm">
                    <div className="space-y-3">
                      <div>
                        <div className="flex items-center gap-1 text-xs font-medium text-muted-foreground mb-1">
                          <User className="h-3 w-3" />
                          BACKGROUND
                        </div>
                        <p className="text-sm">{profile.background}</p>
                      </div>

                      <div>
                        <div className="flex items-center gap-1 text-xs font-medium text-muted-foreground mb-1">
                          <FileText className="h-3 w-3" />
                          INTERESTS
                        </div>
                        <div className="flex flex-wrap gap-1">
                          {profile.interests.map((interest, i) => (
                            <Badge key={i} variant="secondary" className="font-normal">
                              {interest}
                            </Badge>
                          ))}
                        </div>
                      </div>

                      <div>
                        <div className="flex items-center gap-1 text-xs font-medium text-muted-foreground mb-1">
                          <Newspaper className="h-3 w-3" />
                          PAST COVERAGE
                        </div>
                        <p className="text-sm">{profile.pastCoverage}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
            {governmentContacts[country] && governmentContacts[country].length > 0 && (
              <div className="mt-8">
                <h3 className="text-lg font-semibold mb-4">Government Contacts</h3>
                <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                  {governmentContacts[country].map((contact, index) => (
                    <Card
                      key={index}
                      className="group cursor-pointer transition-all duration-300 hover:shadow-md hover:border-primary/50 hover:scale-[1.02]"
                      onClick={() => setSelectedProfile(contact)}
                    >
                      <CardHeader className="pb-2">
                        <div className="flex items-start gap-4">
                          <Avatar className="h-16 w-16 border">
                            <AvatarImage src={contact.imageUrl} alt={contact.name} />
                            <AvatarFallback className="bg-primary/10 text-primary">
                              {contact.name
                                .split(" ")
                                .map((n) => n[0])
                                .join("")}
                            </AvatarFallback>
                          </Avatar>
                          <div className="flex-1">
                            <div className="flex items-center justify-between">
                              <CardTitle className="text-base">{contact.name}</CardTitle>
                              <ChevronRight className="h-4 w-4 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity" />
                            </div>
                            <CardDescription className="flex items-center gap-1 mt-1">
                              <Building className="h-3 w-3" />
                              {contact.position}
                            </CardDescription>
                          </div>
                        </div>
                      </CardHeader>
                      <CardContent className="text-sm">
                        <div className="space-y-3">
                          <div>
                            <div className="flex items-center gap-1 text-xs font-medium text-muted-foreground mb-1">
                              <User className="h-3 w-3" />
                              BACKGROUND
                            </div>
                            <p className="text-sm">{contact.background}</p>
                          </div>

                          <div>
                            <div className="flex items-center gap-1 text-xs font-medium text-muted-foreground mb-1">
                              <FileText className="h-3 w-3" />
                              INTERESTS
                            </div>
                            <div className="flex flex-wrap gap-1">
                              {contact.interests.map((interest, i) => (
                                <Badge key={i} variant="secondary" className="font-normal">
                                  {interest}
                                </Badge>
                              ))}
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            )}
          </TabsContent>
        ))}
      </Tabs>

      {/* Detailed Profile Dialog */}
      <Dialog open={!!selectedProfile} onOpenChange={(open) => !open && setSelectedProfile(null)}>
        <DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto">
          {selectedProfile && (
            <>
              <DialogHeader>
                <div className="flex items-center">
                  <DialogTitle className="text-xl">{selectedProfile.name}</DialogTitle>
                </div>
                {selectedProfile.fullProfile && (
                  <DialogDescription className="text-base font-medium">
                    {selectedProfile.fullProfile.title} at{" "}
                    {selectedProfile.fullProfile.organization || selectedProfile.outlet}
                  </DialogDescription>
                )}
                {!selectedProfile.fullProfile && selectedProfile.position && (
                  <DialogDescription className="text-base font-medium">{selectedProfile.position}</DialogDescription>
                )}
              </DialogHeader>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-4">
                {/* Left column - Image */}
                <div className="flex flex-col items-center">
                  <div className="w-48 h-48 rounded-lg overflow-hidden border">
                    <img
                      src={selectedProfile.imageUrl || "/placeholder.svg"}
                      alt={selectedProfile.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="mt-4 w-full">
                    <div className="flex items-center gap-2 text-sm font-medium mb-2">
                      <Newspaper className="h-4 w-4 text-primary" />
                      <span>Media Outlet</span>
                    </div>
                    <Card className="bg-muted/50">
                      <CardContent className="p-3">
                        <div className="font-medium">{selectedProfile.outlet}</div>
                        {selectedProfile.fullProfile && (
                          <>
                            <p className="text-sm mt-2 text-muted-foreground">
                              {selectedProfile.fullProfile.outletDescription}
                            </p>
                            {selectedProfile.fullProfile.outletUrl && (
                              <a
                                href={selectedProfile.fullProfile.outletUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-sm text-primary flex items-center gap-1 hover:underline mt-3"
                              >
                                <Globe className="h-3 w-3" />
                                Visit Website
                                <ExternalLink className="h-3 w-3 ml-1" />
                              </a>
                            )}
                          </>
                        )}
                      </CardContent>
                    </Card>
                  </div>
                </div>

                {/* Right column - Details */}
                <div className="md:col-span-2 space-y-6">
                  <div>
                    <div className="flex items-center gap-2 text-sm font-medium mb-2">
                      <User className="h-4 w-4 text-primary" />
                      <span>Profile</span>
                    </div>
                    <Card>
                      <CardContent className="p-4">
                        {selectedProfile.fullProfile ? (
                          <p className="text-sm leading-relaxed">{selectedProfile.fullProfile.profileText}</p>
                        ) : (
                          <p className="text-sm">{selectedProfile.background}</p>
                        )}
                      </CardContent>
                    </Card>
                  </div>

                  <div>
                    <div className="flex items-center gap-2 text-sm font-medium mb-2">
                      <FileText className="h-4 w-4 text-primary" />
                      <span>Areas of Interest</span>
                    </div>
                    <Card>
                      <CardContent className="p-4">
                        <ul className="space-y-2">
                          {(selectedProfile.fullProfile?.interests || selectedProfile.interests).map((interest, i) => (
                            <li key={i} className="flex items-start gap-2">
                              <span className="text-primary mt-1">•</span>
                              <span className="text-sm">{interest}</span>
                            </li>
                          ))}
                        </ul>
                      </CardContent>
                    </Card>
                  </div>

                  {selectedProfile.fullProfile?.pastCoverageTitle && (
                    <div>
                      <div className="flex items-center gap-2 text-sm font-medium mb-2">
                        <Newspaper className="h-4 w-4 text-primary" />
                        <span>Past Coverage</span>
                      </div>
                      <Card>
                        <CardContent className="p-4">
                          <h4 className="text-sm font-medium mb-3">{selectedProfile.fullProfile.pastCoverageTitle}</h4>
                          <div className="flex flex-col sm:flex-row gap-3">
                            <a
                              href={selectedProfile.fullProfile.pastCoverageUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-sm text-primary flex items-center gap-1 hover:underline"
                            >
                              <Globe className="h-4 w-4" />
                              <span>View Article Online</span>
                              <ExternalLink className="h-3 w-3 ml-1" />
                            </a>

                            {selectedProfile.fullProfile.pastCoveragePdf && (
                              <a
                                href={selectedProfile.fullProfile.pastCoveragePdf}
                                download
                                className="text-sm text-primary flex items-center gap-1 hover:underline"
                              >
                                <Download className="h-4 w-4" />
                                <span>Download PDF</span>
                              </a>
                            )}
                          </div>
                        </CardContent>
                      </Card>
                    </div>
                  )}
                </div>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </div>
  )
}

