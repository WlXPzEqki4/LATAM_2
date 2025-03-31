"use client"

import { useState } from "react"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  PlaneTakeoff,
  Building,
  MapPin,
  Calendar,
  Clock,
  ExternalLink,
  User,
  Newspaper,
  Globe,
  FileText,
  Download,
} from "lucide-react"
import MapView from "./map-view"

export default function Itinerary() {
  const itineraryData = [
    {
      id: "day1",
      date: "April 2, 2025",
      location: "Dubai, UAE",
      events: [
        {
          time: "08:05 AM – 4:05 PM",
          title: "Departure DXB – GIG Flight EK247",
          description: "",
          type: "flight",
          icon: <PlaneTakeoff className="h-5 w-5 text-muted-foreground" />,
        },
      ],
    },
    {
      id: "day2",
      date: "April 3, 2025",
      location: "Rio de Janeiro, Brazil",
      events: [
        {
          time: "",
          title: "OFF",
          description: "",
          type: "rest",
          icon: <Building className="h-5 w-5 text-muted-foreground" />,
        },
      ],
    },
    {
      id: "day3",
      date: "April 4, 2025",
      location: "Rio de Janeiro, Brazil",
      events: [
        {
          time: "5:40 PM – 9:05 PM",
          title: "Departure GIG – EZE Flight EK247",
          description: "",
          type: "flight",
          icon: <PlaneTakeoff className="h-5 w-5 text-muted-foreground" />,
        },
      ],
    },
    {
      id: "day4-5",
      date: "April 5-6, 2025",
      location: "Buenos Aires, Argentina",
      events: [
        {
          time: "",
          title: "OFF",
          description: "Weekend",
          type: "rest",
          icon: <Building className="h-5 w-5 text-muted-foreground" />,
        },
      ],
    },
    {
      id: "day6",
      date: "April 7, 2025",
      location: "Buenos Aires, Argentina",
      events: [
        {
          time: "",
          title: "CNN Argentina Radio",
          description: "",
          type: "media",
          icon: <Building className="h-5 w-5 text-muted-foreground" />,
        },
        {
          time: "",
          title: "Forbes",
          description: "",
          type: "media",
          icon: <Building className="h-5 w-5 text-muted-foreground" />,
        },
        {
          time: "",
          title: "Clarin",
          description: "",
          type: "media",
          icon: <Building className="h-5 w-5 text-muted-foreground" />,
        },
        {
          time: "",
          title: "Infobae",
          description: "",
          type: "media",
          icon: <Building className="h-5 w-5 text-muted-foreground" />,
        },
        {
          time: "",
          title: "El Economista",
          description: "",
          type: "media",
          icon: <Building className="h-5 w-5 text-muted-foreground" />,
        },
        {
          time: "",
          title: "El Cronista",
          description: "",
          type: "media",
          icon: <Building className="h-5 w-5 text-muted-foreground" />,
        },
        {
          time: "",
          title: "Interview: Juan Roldán – Zona Militar",
          description: "",
          type: "media",
          icon: <Building className="h-5 w-5 text-muted-foreground" />,
        },
        {
          time: "TBC",
          title: "Meeting: Demian Reidel",
          description: "Office of the President of Argentina",
          type: "meeting",
          icon: <Building className="h-5 w-5 text-muted-foreground" />,
        },
      ],
    },
    {
      id: "day7",
      date: "April 8, 2025",
      location: "Buenos Aires, Argentina",
      events: [
        {
          time: "10:00 AM – 11:00 AM",
          title: "Interview: Gonzalo Mary – Infodefensa",
          description: "",
          type: "media",
          icon: <Building className="h-5 w-5 text-muted-foreground" />,
        },
        {
          time: "1:00 PM – 2:00 PM",
          title: "Interview: Luciana Vazquez - La Nacion",
          description: "",
          type: "media",
          icon: <Building className="h-5 w-5 text-muted-foreground" />,
        },
        {
          time: "7:13 PM – 8:38 PM",
          title: "Departure EZE – SCL Flight LA456",
          description: "",
          type: "flight",
          icon: <PlaneTakeoff className="h-5 w-5 text-muted-foreground" />,
        },
      ],
    },
    {
      id: "day8",
      date: "April 9, 2025",
      location: "Santiago, Chile",
      events: [
        {
          time: "10:30 AM – 11:30 AM",
          title: "Interview: Valeria Ibarra - Diario Financiero",
          description: "",
          type: "media",
          icon: <Building className="h-5 w-5 text-muted-foreground" />,
        },
        {
          time: "3:00 PM – 4:00 PM",
          title: "Interview: Erika Gonzalez – Television Nacional de Chile",
          description: "Recorded for TV",
          type: "media",
          icon: <Building className="h-5 w-5 text-muted-foreground" />,
        },
      ],
    },
    {
      id: "day9",
      date: "April 10, 2025",
      location: "Santiago, Chile",
      events: [
        {
          time: "10:30 AM – 11:30 AM",
          title: "Interview: Ramon Heredia – EbankingNews.com",
          description: "",
          type: "media",
          icon: <Building className="h-5 w-5 text-muted-foreground" />,
        },
        {
          time: "3:00 PM – 3:45 PM",
          title: "Interview: Carmen Gloria Sandoval - Trade News Chile",
          description: "online",
          type: "media",
          icon: <Building className="h-5 w-5 text-muted-foreground" />,
        },
        {
          time: "8:30 PM – 01:25 AM",
          title: "Departure SCL – GRU Flight LA8097",
          description: "",
          type: "flight",
          icon: <PlaneTakeoff className="h-5 w-5 text-muted-foreground" />,
        },
      ],
    },
    {
      id: "day10",
      date: "April 11, 2025",
      location: "Sao Paulo, Brazil",
      events: [
        {
          time: "TBC",
          title: "Luciano Padua - Exame Magazine",
          description: "",
          type: "media",
          icon: <Building className="h-5 w-5 text-muted-foreground" />,
        },
        {
          time: "11:00 AM – 11:45 AM",
          title: "Carlos Eduardo Valim – O Estado de Sao Paulo",
          description: "Location: In person – Rosewood Hotel",
          type: "media",
          icon: <Building className="h-5 w-5 text-muted-foreground" />,
        },
        {
          time: "TBC",
          title: "Visit William Waack (CNN Newsroom)",
          description: "Recorded for TV",
          type: "media",
          icon: <Building className="h-5 w-5 text-muted-foreground" />,
        },
        {
          time: "01:35 AM – 11:00 PM",
          title: "Departure GRU – DXB Flight EK262",
          description: "",
          type: "flight",
          icon: <PlaneTakeoff className="h-5 w-5 text-muted-foreground" />,
        },
      ],
    },
  ]

  // Media profiles data for linking from itinerary
  const mediaProfiles = {
    "Juan Roldán": {
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
    "Gonzalo Mary": {
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
    "Luciana Vazquez": {
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
    "Valeria Ibarra": {
      id: 1,
      name: "Valeria Ibarra",
      outlet: "Diario Financiero",
      background: "Editor of the business section at Diario Financiero with experience at major Chilean media outlets",
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
    "Erika Gonzalez": {
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
    "Ramon Heredia": {
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
    "Carmen Gloria Sandoval": {
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
    "Luciano Padua": {
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
    "Carlos Eduardo Valim": {
      id: 3,
      name: "Carlos Eduardo Valim",
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
    "William Waack": {
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
  }

  // Government contacts data for linking from itinerary
  const governmentContacts = {
    "Demian Reidel": {
      id: 1,
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
  }

  const [selectedProfile, setSelectedProfile] = useState(null)

  // Timeline view rendering
  const renderTimelineView = () => {
    return (
      <div className="space-y-4">
        {itineraryData.map((day) => (
          <Card key={day.id}>
            <CardHeader className="pb-2 bg-muted/50">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Calendar className="h-5 w-5 text-primary" />
                  <CardTitle className="text-lg">{day.date}</CardTitle>
                </div>
                <div className="flex items-center gap-2 text-primary">
                  <MapPin className="h-4 w-4" />
                  <span className="text-sm font-medium">{day.location}</span>
                </div>
              </div>
            </CardHeader>
            <CardContent className="p-0">
              <table className="w-full">
                <tbody>
                  {day.events.map((event, index) => (
                    <tr key={index} className="border-b last:border-0 hover:bg-muted/20">
                      {/* Time Column */}
                      <td className="py-3 px-4 align-top text-sm font-medium w-1/3">
                        {event.time && (
                          <div className="flex items-start gap-2">
                            <Clock className="h-4 w-4 text-primary mt-0.5 shrink-0" />
                            <span>{event.time}</span>
                          </div>
                        )}
                      </td>

                      {/* Event Details Column */}
                      <td className="py-3 px-4">
                        <div className="flex items-start gap-2">
                          <div
                            className={`rounded-full p-1 shrink-0 ${
                              event.type === "flight"
                                ? "bg-blue-100 text-blue-600"
                                : event.type === "media"
                                  ? "bg-amber-100 text-amber-600"
                                  : event.type === "meeting"
                                    ? "bg-green-100 text-green-600"
                                    : "bg-gray-100 text-gray-600"
                            }`}
                          >
                            {event.icon}
                          </div>
                          <div>
                            <div className="font-medium">
                              {event.title}
                              {event.type === "media" &&
                                (event.title.includes("Interview:") ||
                                  event.title.includes("Luciano Padua") ||
                                  event.title.includes("Carlos Eduardo Valim") ||
                                  event.title.includes("William Waack")) && (
                                  <ExternalLink
                                    className="ml-2 h-3 w-3 inline-block cursor-pointer text-primary/70 hover:text-primary"
                                    onClick={(e) => {
                                      e.stopPropagation()
                                      // Extract the journalist name
                                      let journalistName = ""
                                      if (event.title.includes("Interview:")) {
                                        const match = event.title.match(/Interview: (.*?)( –|-| -)/)
                                        if (match && match[1]) journalistName = match[1].trim()
                                      } else if (event.title.includes("Luciano Padua")) {
                                        journalistName = "Luciano Padua"
                                      } else if (event.title.includes("Carlos Eduardo Valim")) {
                                        journalistName = "Carlos Eduardo Valim"
                                      } else if (event.title.includes("William Waack")) {
                                        journalistName = "William Waack"
                                      }

                                      if (journalistName && mediaProfiles[journalistName]) {
                                        setSelectedProfile(mediaProfiles[journalistName])
                                      }
                                    }}
                                  />
                                )}
                              {event.type === "meeting" && event.title.includes("Meeting:") && (
                                <ExternalLink
                                  className="ml-2 h-3 w-3 inline-block cursor-pointer text-primary/70 hover:text-primary"
                                  onClick={(e) => {
                                    e.stopPropagation()
                                    // Extract the contact name from the title
                                    const match = event.title.match(/Meeting: (.*?)( –|-| -|$)/)
                                    if (match && match[1] && governmentContacts[match[1].trim()]) {
                                      setSelectedProfile(governmentContacts[match[1].trim()])
                                    }
                                  }}
                                />
                              )}
                            </div>
                            {event.description && (
                              <div className="text-sm text-muted-foreground">{event.description}</div>
                            )}
                          </div>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </CardContent>
          </Card>
        ))}
      </div>
    )
  }

  // Location view rendering
  const renderLocationView = () => {
    return (
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        <Card>
          <CardHeader>
            <CardTitle>Dubai</CardTitle>
            <CardDescription>April 2, 2025</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div>
                <h4 className="text-sm font-medium mb-2 text-muted-foreground">OUTBOUND</h4>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <PlaneTakeoff className="h-4 w-4 text-blue-600" />
                    <span className="text-sm">08:05 AM – 4:05 PM - Departure to Rio (Flight EK247)</span>
                  </li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Rio de Janeiro</CardTitle>
            <CardDescription>April 3-4, 2025</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div>
                <h4 className="text-sm font-medium mb-2 text-muted-foreground">INBOUND</h4>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <PlaneTakeoff className="h-4 w-4 text-blue-600 rotate-180" />
                    <span className="text-sm">April 2: Arrival from Dubai (Flight EK247)</span>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="text-sm font-medium mb-2 text-muted-foreground">ACTIVITIES</h4>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <Building className="h-4 w-4 text-gray-600" />
                    <span className="text-sm">April 3: Recovery day (OFF)</span>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="text-sm font-medium mb-2 text-muted-foreground">OUTBOUND</h4>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <PlaneTakeoff className="h-4 w-4 text-blue-600" />
                    <span className="text-sm">
                      April 4: 5:40 PM – 9:05 PM - Departure to Buenos Aires (Flight EK247)
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Buenos Aires</CardTitle>
            <CardDescription>April 5-8, 2025</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div>
                <h4 className="text-sm font-medium mb-2 text-muted-foreground">INBOUND</h4>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <PlaneTakeoff className="h-4 w-4 text-blue-600 rotate-180" />
                    <span className="text-sm">April 4: Arrival from Rio de Janeiro (Flight EK247)</span>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="text-sm font-medium mb-2 text-muted-foreground">ACTIVITIES</h4>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <Building className="h-4 w-4 text-gray-600" />
                    <span className="text-sm">April 5-6: Weekend OFF</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Building className="h-4 w-4 text-amber-600" />
                    <span className="text-sm">April 7: Multiple media interviews (CNN Argentina, Forbes, etc.)</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Building className="h-4 w-4 text-green-600" />
                    <span className="text-sm">April 7: Meeting with Demian Reidel (Presidential Office)</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Building className="h-4 w-4 text-amber-600" />
                    <span className="text-sm">April 8: Interviews with Gonzalo Mary and Luciana Vazquez</span>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="text-sm font-medium mb-2 text-muted-foreground">OUTBOUND</h4>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <PlaneTakeoff className="h-4 w-4 text-blue-600" />
                    <span className="text-sm">April 8: 7:13 PM – 8:38 PM - Departure to Santiago (Flight LA456)</span>
                  </li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Santiago</CardTitle>
            <CardDescription>April 9-10, 2025</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div>
                <h4 className="text-sm font-medium mb-2 text-muted-foreground">INBOUND</h4>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <PlaneTakeoff className="h-4 w-4 text-blue-600 rotate-180" />
                    <span className="text-sm">April 8: Arrival from Buenos Aires (Flight LA456)</span>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="text-sm font-medium mb-2 text-muted-foreground">ACTIVITIES</h4>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <Building className="h-4 w-4 text-amber-600" />
                    <span className="text-sm">April 9: Interviews with Valeria Ibarra and Erika Gonzalez (TV)</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Building className="h-4 w-4 text-amber-600" />
                    <span className="text-sm">April 10: Interviews with Ramon Heredia and Carmen Gloria Sandoval</span>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="text-sm font-medium mb-2 text-muted-foreground">OUTBOUND</h4>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <PlaneTakeoff className="h-4 w-4 text-blue-600" />
                    <span className="text-sm">
                      April 10: 8:30 PM – 01:25 AM - Departure to Sao Paulo (Flight LA8097)
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Sao Paulo</CardTitle>
            <CardDescription>April 11, 2025</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div>
                <h4 className="text-sm font-medium mb-2 text-muted-foreground">INBOUND</h4>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <PlaneTakeoff className="h-4 w-4 text-blue-600 rotate-180" />
                    <span className="text-sm">April 11: Arrival from Santiago (Flight LA8097)</span>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="text-sm font-medium mb-2 text-muted-foreground">ACTIVITIES</h4>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <Building className="h-4 w-4 text-amber-600" />
                    <span className="text-sm">Luciano Padua - Exame Magazine</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Building className="h-4 w-4 text-amber-600" />
                    <span className="text-sm">Carlos Eduardo Valim – O Estado de Sao Paulo (Rosewood Hotel)</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Building className="h-4 w-4 text-amber-600" />
                    <span className="text-sm">William Waack - CNN Newsroom (TV recording)</span>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="text-sm font-medium mb-2 text-muted-foreground">OUTBOUND</h4>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <PlaneTakeoff className="h-4 w-4 text-blue-600" />
                    <span className="text-sm">01:35 AM – 11:00 PM - Departure to Dubai (Flight EK262)</span>
                  </li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    )
  }

  // Map view rendering
  const renderMapView = () => {
    return (
      <Card>
        <CardHeader className="pb-2">
          <CardTitle className="text-lg">Interactive Flight Route</CardTitle>
          <CardDescription>Roadshow journey from Dubai through Latin America and back</CardDescription>
        </CardHeader>
        <CardContent>
          <MapView />
        </CardContent>
      </Card>
    )
  }

  // Schedule view rendering
  const renderScheduleView = () => {
    return (
      <Card>
        <CardHeader className="pb-2">
          <CardTitle className="text-lg">Detailed Schedule</CardTitle>
          <CardDescription>Complete itinerary with meetings and interviews</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-8">
            {/* Dubai */}
            <div className="rounded-lg border bg-card">
              <div className="bg-muted px-4 py-3 rounded-t-lg border-b">
                <h3 className="text-lg font-semibold flex items-center gap-2">
                  <MapPin className="h-5 w-5 text-primary" />
                  Dubai, UAE
                </h3>
              </div>
              <div className="p-4">
                <div className="mb-4">
                  <h4 className="text-md font-medium mb-3 flex items-center gap-2">
                    <Calendar className="h-4 w-4 text-muted-foreground" />
                    Wednesday, 2 April 2025
                  </h4>
                  <div className="overflow-x-auto">
                    <table className="w-full">
                      <tbody>
                        <tr className="border-b border-muted">
                          <td className="py-3 pr-4 align-top text-sm font-medium w-1/3">08:05 AM – 4:05 PM</td>
                          <td className="py-3 flex items-center gap-2">
                            <PlaneTakeoff className="h-4 w-4 text-primary/70 shrink-0" />
                            <span>Departure DXB – GIG Flight EK247</span>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>

            {/* Rio de Janeiro */}
            <div className="rounded-lg border bg-card">
              <div className="bg-muted px-4 py-3 rounded-t-lg border-b">
                <h3 className="text-lg font-semibold flex items-center gap-2">
                  <MapPin className="h-5 w-5 text-primary" />
                  Rio de Janeiro, Brazil
                </h3>
              </div>
              <div className="p-4">
                <div className="mb-4">
                  <h4 className="text-md font-medium mb-3 flex items-center gap-2">
                    <Calendar className="h-4 w-4 text-muted-foreground" />
                    Thursday, 3 April 2025
                  </h4>
                  <div className="overflow-x-auto">
                    <table className="w-full">
                      <tbody>
                        <tr>
                          <td className="py-3 pr-4 align-top text-sm font-medium w-1/3"></td>
                          <td className="py-3 text-muted-foreground">OFF</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
                <div className="pt-2 border-t">
                  <h4 className="text-md font-medium mb-3 flex items-center gap-2">
                    <Calendar className="h-4 w-4 text-muted-foreground" />
                    Friday, 4 April 2025
                  </h4>
                  <div className="overflow-x-auto">
                    <table className="w-full">
                      <tbody>
                        <tr>
                          <td className="py-3 pr-4 align-top text-sm font-medium w-1/3">5:40 PM – 9:05 PM</td>
                          <td className="py-3 flex items-center gap-2">
                            <PlaneTakeoff className="h-4 w-4 text-primary/70 shrink-0" />
                            <span>Departure GIG – EZE Flight EK247</span>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>

            {/* Buenos Aires */}
            <div className="rounded-lg border bg-card">
              <div className="bg-muted px-4 py-3 rounded-t-lg border-b">
                <h3 className="text-lg font-semibold flex items-center gap-2">
                  <MapPin className="h-5 w-5 text-primary" />
                  Buenos Aires, Argentina
                </h3>
              </div>
              <div className="p-4">
                <div className="mb-4">
                  <h4 className="text-md font-medium mb-3 flex items-center gap-2">
                    <Calendar className="h-4 w-4 text-muted-foreground" />
                    Saturday and Sunday, 5 and 6 April 2025
                  </h4>
                  <div className="overflow-x-auto">
                    <table className="w-full">
                      <tbody>
                        <tr>
                          <td className="py-3 pr-4 align-top text-sm font-medium w-1/3"></td>
                          <td className="py-3 text-muted-foreground">OFF</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
                <div className="pt-2 border-t">
                  <h4 className="text-md font-medium mb-3 flex items-center gap-2">
                    <Calendar className="h-4 w-4 text-muted-foreground" />
                    Monday, 7 April 2025
                  </h4>
                  <div className="overflow-x-auto">
                    <table className="w-full">
                      <tbody>
                        <tr className="border-b border-muted/50">
                          <td className="py-2 pr-4 align-top text-sm font-medium w-1/3">TBC</td>
                          <td className="py-2 flex items-center gap-2">
                            <Building className="h-4 w-4 text-primary/70 shrink-0" />
                            <span>CNN Argentina Radio</span>
                          </td>
                        </tr>
                        <tr className="border-b border-muted/50">
                          <td className="py-2 pr-4 align-top text-sm font-medium"></td>
                          <td className="py-2 flex items-center gap-2">
                            <Building className="h-4 w-4 text-primary/70 shrink-0" />
                            <span>Forbes</span>
                          </td>
                        </tr>
                        <tr className="border-b border-muted/50">
                          <td className="py-2 pr-4 align-top text-sm font-medium"></td>
                          <td className="py-2 flex items-center gap-2">
                            <Building className="h-4 w-4 text-primary/70 shrink-0" />
                            <span>Clarin</span>
                          </td>
                        </tr>
                        <tr className="border-b border-muted/50">
                          <td className="py-2 pr-4 align-top text-sm font-medium"></td>
                          <td className="py-2 flex items-center gap-2">
                            <Building className="h-4 w-4 text-primary/70 shrink-0" />
                            <span>Infobae</span>
                          </td>
                        </tr>
                        <tr className="border-b border-muted/50">
                          <td className="py-2 pr-4 align-top text-sm font-medium"></td>
                          <td className="py-2 flex items-center gap-2">
                            <Building className="h-4 w-4 text-primary/70 shrink-0" />
                            <span>El Economista</span>
                          </td>
                        </tr>
                        <tr className="border-b border-muted/50">
                          <td className="py-2 pr-4 align-top text-sm font-medium"></td>
                          <td className="py-2 flex items-center gap-2">
                            <Building className="h-4 w-4 text-primary/70 shrink-0" />
                            <span>El Cronista</span>
                          </td>
                        </tr>
                        <tr className="border-b border-muted/50">
                          <td className="py-2 pr-4 align-top text-sm font-medium">10:00 AM – 11 AM</td>
                          <td className="py-2 flex items-center gap-2">
                            <Building className="h-4 w-4 text-primary/70 shrink-0" />
                            <span>Interview: Juan Roldán – Zona Militar</span>
                          </td>
                        </tr>
                        <tr className="border-b border-muted/50">
                          <td className="py-2 pr-4 align-top text-sm font-medium">TBC</td>
                          <td className="py-2 flex items-center gap-2">
                            <Building className="h-4 w-4 text-primary/70 shrink-0" />
                            <span>Meeting: Demian Reidel</span>
                          </td>
                        </tr>
                        <tr>
                          <td className="py-2 pr-4 align-top text-sm font-medium"></td>
                          <td className="py-2 pl-6 text-sm text-muted-foreground">
                            Office of the President of Argentina
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
                <div className="pt-2 border-t">
                  <h4 className="text-md font-medium mb-3 flex items-center gap-2">
                    <Calendar className="h-4 w-4 text-muted-foreground" />
                    Tuesday, 8 April 2025
                  </h4>
                  <div className="overflow-x-auto">
                    <table className="w-full">
                      <tbody>
                        <tr className="border-b border-muted/50">
                          <td className="py-2 pr-4 align-top text-sm font-medium w-1/3">10:00 AM – 11:00 AM</td>
                          <td className="py-2 flex items-center gap-2">
                            <Building className="h-4 w-4 text-primary/70 shrink-0" />
                            <span>Interview: Gonzalo Mary – Infodefensa</span>
                          </td>
                        </tr>
                        <tr className="border-b border-muted/50">
                          <td className="py-2 pr-4 align-top text-sm font-medium">1:00 PM – 2:00 PM</td>
                          <td className="py-2 flex items-center gap-2">
                            <Building className="h-4 w-4 text-primary/70 shrink-0" />
                            <span>Interview: Luciana Vazquez - La Nacion</span>
                          </td>
                        </tr>
                        <tr>
                          <td className="py-2 pr-4 align-top text-sm font-medium">7:13 PM – 8:38 PM</td>
                          <td className="py-2 flex items-center gap-2">
                            <PlaneTakeoff className="h-4 w-4 text-primary/70 shrink-0" />
                            <span>Departure EZE – SCL Flight LA456</span>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>

            {/* Santiago */}
            <div className="rounded-lg border bg-card">
              <div className="bg-muted px-4 py-3 rounded-t-lg border-b">
                <h3 className="text-lg font-semibold flex items-center gap-2">
                  <MapPin className="h-5 w-5 text-primary" />
                  Santiago, Chile
                </h3>
              </div>
              <div className="p-4">
                <div className="mb-4">
                  <h4 className="text-md font-medium mb-3 flex items-center gap-2">
                    <Calendar className="h-4 w-4 text-muted-foreground" />
                    Wednesday, 9 April 2025
                  </h4>
                  <div className="overflow-x-auto">
                    <table className="w-full">
                      <tbody>
                        <tr className="border-b border-muted/50">
                          <td className="py-2 pr-4 align-top text-sm font-medium w-1/3">10:30 AM – 11:30 AM</td>
                          <td className="py-2 flex items-center gap-2">
                            <Building className="h-4 w-4 text-primary/70 shrink-0" />
                            <span>Interview: Valeria Ibarra - Diario Financiero</span>
                          </td>
                        </tr>
                        <tr>
                          <td className="py-2 pr-4 align-top text-sm font-medium">3:00 PM – 4:00 PM</td>
                          <td className="py-2 flex items-center gap-2">
                            <Building className="h-4 w-4 text-primary/70 shrink-0" />
                            <span>Interview: Erika Gonzalez – Television Nacional de Chile (Recorded for TV)</span>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
                <div className="pt-2 border-t">
                  <h4 className="text-md font-medium mb-3 flex items-center gap-2">
                    <Calendar className="h-4 w-4 text-muted-foreground" />
                    Thursday, 10 April 2025
                  </h4>
                  <div className="overflow-x-auto">
                    <table className="w-full">
                      <tbody>
                        <tr className="border-b border-muted/50">
                          <td className="py-2 pr-4 align-top text-sm font-medium w-1/3">10:30 AM – 11:30 AM</td>
                          <td className="py-2 flex items-center gap-2">
                            <Building className="h-4 w-4 text-primary/70 shrink-0" />
                            <span>Interview: Ramon Heredia – EbankingNews.com</span>
                          </td>
                        </tr>
                        <tr className="border-b border-muted/50">
                          <td className="py-2 pr-4 align-top text-sm font-medium">3:00 PM – 3:45 PM</td>
                          <td className="py-2 flex items-center gap-2">
                            <Building className="h-4 w-4 text-primary/70 shrink-0" />
                            <span>Interview: Carmen Gloria Sandoval - Trade News Chile (online)</span>
                          </td>
                        </tr>
                        <tr>
                          <td className="py-2 pr-4 align-top text-sm font-medium">8:30 PM – 01:25 AM</td>
                          <td className="py-2 flex items-center gap-2">
                            <PlaneTakeoff className="h-4 w-4 text-primary/70 shrink-0" />
                            <span>Departure SCL – GRU Flight LA8097</span>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>

            {/* Sao Paulo */}
            <div className="rounded-lg border bg-card">
              <div className="bg-muted px-4 py-3 rounded-t-lg border-b">
                <h3 className="text-lg font-semibold flex items-center gap-2">
                  <MapPin className="h-5 w-5 text-primary" />
                  Sao Paulo, Brazil
                </h3>
              </div>
              <div className="p-4">
                <div className="mb-4">
                  <h4 className="text-md font-medium mb-3 flex items-center gap-2">
                    <Calendar className="h-4 w-4 text-muted-foreground" />
                    Friday, 11 April 2025
                  </h4>
                  <div className="overflow-x-auto">
                    <table className="w-full">
                      <tbody>
                        <tr className="border-b border-muted/50">
                          <td className="py-2 pr-4 align-top text-sm font-medium w-1/3">TBC</td>
                          <td className="py-2 flex items-center gap-2">
                            <Building className="h-4 w-4 text-primary/70 shrink-0" />
                            <span>Luciano Padua - Exame Magazine</span>
                          </td>
                        </tr>
                        <tr className="border-b border-muted/50">
                          <td className="py-2 pr-4 align-top text-sm font-medium">11:00 AM – 11:45 AM</td>
                          <td className="py-2 flex items-center gap-2">
                            <Building className="h-4 w-4 text-primary/70 shrink-0" />
                            <span>Carlos Eduardo Valim – O Estado de Sao Paulo</span>
                          </td>
                        </tr>
                        <tr className="border-b border-muted/50">
                          <td className="py-2 pr-4 align-top text-sm font-medium"></td>
                          <td className="py-2 pl-6 text-sm text-muted-foreground">
                            Location: In person – Rosewood Hotel
                          </td>
                        </tr>
                        <tr className="border-b border-muted/50">
                          <td className="py-2 pr-4 align-top text-sm font-medium">TBC</td>
                          <td className="py-2 flex items-center gap-2">
                            <Building className="h-4 w-4 text-primary/70 shrink-0" />
                            <span>Visit William Waack (CNN Newsroom) (Recorded for TV)</span>
                          </td>
                        </tr>
                        <tr>
                          <td className="py-2 pr-4 align-top text-sm font-medium">01:35 AM – 11:00 PM</td>
                          <td className="py-2 flex items-center gap-2">
                            <PlaneTakeoff className="h-4 w-4 text-primary/70 shrink-0" />
                            <span>Departure GRU – DXB Flight EK262</span>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    )
  }

  // Profile dialog rendering
  const renderProfileDialog = () => {
    if (!selectedProfile) return null

    return (
      <Dialog open={!!selectedProfile} onOpenChange={(open) => !open && setSelectedProfile(null)}>
        <DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <div className="flex items-center">
              <DialogTitle className="text-xl">{selectedProfile.name}</DialogTitle>
            </div>
            {selectedProfile.fullProfile && (
              <DialogDescription className="text-base font-medium">
                {selectedProfile.fullProfile.title} at{" "}
                {selectedProfile.fullProfile.organization || selectedProfile.outlet || selectedProfile.position}
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
                  <Building className="h-4 w-4 text-primary" />
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
                            <span>Visit Website</span>
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
        </DialogContent>
      </Dialog>
    )
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold tracking-tight">Itinerary</h2>
      </div>

      <Tabs defaultValue="timeline" className="w-full">
        <TabsList className="mb-4">
          <TabsTrigger value="timeline">Timeline View</TabsTrigger>
          <TabsTrigger value="location">Location View</TabsTrigger>
          <TabsTrigger value="map">Map View</TabsTrigger>
          <TabsTrigger value="schedule">Schedule</TabsTrigger>
        </TabsList>

        <TabsContent value="timeline" className="space-y-4">
          {renderTimelineView()}
        </TabsContent>

        <TabsContent value="location" className="space-y-4">
          {renderLocationView()}
        </TabsContent>

        <TabsContent value="map" className="space-y-4">
          {renderMapView()}
        </TabsContent>

        <TabsContent value="schedule" className="space-y-4">
          {renderScheduleView()}
        </TabsContent>
      </Tabs>

      {renderProfileDialog()}
    </div>
  )
}

