// Add proper type declarations for mapboxgl
interface MapboxGl {
  Map: any
  NavigationControl: any
  LngLatBounds: any
  Marker: any
  Popup: any
  accessToken: string
}

interface Window {
  mapboxgl: MapboxGl
}

