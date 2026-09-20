// ROUTE ID: 12B
const STOPS_12B_FORWARD = [
  { id: 1, name: "Metiabruz Kacchi Sadak", area: "Metiabruz", lat: 22.548667, lng: 88.287750 },
  { id: 2, name: "Ramnagar (Metiabruz)", area: "Metiabruz / Ramnagar", lat: 22.543444, lng: 88.294806 },
  { id: 3, name: "Garden Reach Dock", area: "Garden Reach / Dock", lat: 22.536611, lng: 88.296333 },
  { id: 4, name: "Dock Gate No. 9", area: "Garden Reach / Dock Gate 9", lat: 22.534972, lng: 88.301639 },
  { id: 5, name: "Indian Institute of Port Management", area: "Garden Reach / IIPM", lat: 22.538472, lng: 88.304083 },
  { id: 6, name: "ITC Limited", area: "Hide Road", lat: 22.538333, lng: 88.306500 },
  { id: 7, name: "Hide Road More", area: "Hide Road / Kidderpore", lat: 22.538000, lng: 88.309500 },
  { id: 8, name: "Kidderpore Tram Depot", area: "Kidderpore", lat: 22.538611, lng: 88.317611 },
  { id: 9, name: "Fancy Market", area: "Kidderpore", lat: 22.540056, lng: 88.324000 },
  { id: 10, name: "Kidderpore Crossing", area: "Kidderpore", lat: 22.541444, lng: 88.326028 },
  { id: 11, name: "Hastings More", area: "Hastings", lat: 22.543694, lng: 88.329500 },
  { id: 12, name: "Fort William", area: "Red Road / Maidan", lat: 22.555056, lng: 88.344278 },
  { id: 13, name: "Esplanade Mayo Road", area: "Esplanade", lat: 22.560056, lng: 88.348389 },
  { id: 14, name: "Dharmatala Bus Stand", area: "Esplanade / Dharmatala", lat: 22.562667, lng: 88.349472 }
];

const STOPS_12B_RETURN = [
  { id: 1, name: "Dharmatala Bus Stand", area: "Esplanade / Dharmatala", lat: 22.562667, lng: 88.349472 },
  { id: 2, name: "Eden Gardens", area: "Eden Gardens / Strand Road", lat: 22.563306, lng: 88.343639 },
  { id: 3, name: "Babughat Bus Stand", area: "Babughat / Eden Gardens", lat: 22.563417, lng: 88.338694 },
  { id: 4, name: "Princep Ghat", area: "Strand Road", lat: 22.556861, lng: 88.332250 },
  { id: 5, name: "Hastings More", area: "Hastings", lat: 22.543528, lng: 88.329667 },
  { id: 6, name: "Kidderpore Crossing", area: "Kidderpore", lat: 22.541444, lng: 88.326250 },
  { id: 7, name: "Fancy Market", area: "Kidderpore", lat: 22.540056, lng: 88.324000 },
  { id: 8, name: "Kidderpore Tram Depot", area: "Kidderpore", lat: 22.538611, lng: 88.317611 },
  { id: 9, name: "Hide Road More", area: "Hide Road / Kidderpore", lat: 22.538000, lng: 88.309500 },
  { id: 10, name: "ITC Limited", area: "Hide Road", lat: 22.538083, lng: 88.306667 },
  { id: 11, name: "Indian Institute of Port Management", area: "Garden Reach / IIPM", lat: 22.538389, lng: 88.304028 },
  { id: 12, name: "Dock Gate No. 9", area: "Garden Reach / Dock Gate 9", lat: 22.534806, lng: 88.301500 },
  { id: 13, name: "Garden Reach Dock", area: "Garden Reach / Dock", lat: 22.536417, lng: 88.296222 },
  { id: 14, name: "Ramnagar (Metiabruz)", area: "Metiabruz / Ramnagar", lat: 22.543417, lng: 88.294722 },
  { id: 15, name: "Asbestos More", area: "Taratala / Garden Reach", lat: 22.538556, lng: 88.293306 },
  { id: 16, name: "Fatehpur (Metiabruz)", area: "Metiabruz / Fatehpur", lat: 22.538639, lng: 88.290861 },
  { id: 17, name: "Bandha Bartala", area: "Metiabruz / Bartala", lat: 22.538667, lng: 88.286222 },
  { id: 18, name: "H.M. Ghosh College", area: "Metiabruz / HM Ghosh College", lat: 22.542222, lng: 88.286417 },
  { id: 19, name: "Metiabruz Kacchi Sadak", area: "Metiabruz", lat: 22.548667, lng: 88.287750 }
];

window.ROUTES_DATABASE = window.ROUTES_DATABASE || {};
window.ROUTES_DATABASE["12B"] = {
  id: "12B",
  name: "12B",
  subTitle: "KAMAL TALKIES <-> ESPLANADE",
  forwardStops: STOPS_12B_FORWARD,
  returnStops: STOPS_12B_RETURN
};