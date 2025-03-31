// Update the Window interface to include a more specific mapboxgl type
interface Window {
  mapboxgl: {
    Map: any
    NavigationControl: any
    LngLatBounds: any
    Marker: any
    Popup: any
    version: string
    accessToken: string
  }
}

