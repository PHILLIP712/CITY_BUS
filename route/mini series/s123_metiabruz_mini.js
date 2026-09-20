// ROUTE ID: S123
const STOPS_S123_FORWARD = [
  { id: 1, name: "Metiabruz Police Station", area: "Metiabruz", lat: 22.549583, lng: 88.282583 },
  { id: 2, name: "Bichalighat", area: "Metiabruz / Bichalighat", lat: 22.549278, lng: 88.285250 },
  { id: 3, name: "Metiabruz Kacchi Sadak", area: "Metiabruz", lat: 22.548667, lng: 88.287750 },
  { id: 4, name: "Ramnagar (Metiabruz)", area: "Metiabruz / Ramnagar", lat: 22.543444, lng: 88.294806 },
  { id: 5, name: "Garden Reach Dock", area: "Garden Reach / Dock", lat: 22.536611, lng: 88.296333 },
  { id: 6, name: "Dock Gate No. 9", area: "Garden Reach / Dock Gate 9", lat: 22.534972, lng: 88.301639 },
  { id: 7, name: "Indian Institute of Port Management", area: "Garden Reach / IIPM", lat: 22.538472, lng: 88.304083 },
  { id: 8, name: "ITC Limited", area: "Hide Road", lat: 22.538333, lng: 88.306500 },
  { id: 9, name: "Hide Road More", area: "Hide Road / Kidderpore", lat: 22.538000, lng: 88.309500 },
  { id: 10, name: "Kidderpore Tram Depot", area: "Kidderpore", lat: 22.538611, lng: 88.317611 },
  { id: 11, name: "Fancy Market", area: "Kidderpore", lat: 22.540056, lng: 88.324000 },
  { id: 12, name: "Kidderpore Crossing", area: "Kidderpore", lat: 22.541444, lng: 88.326028 },
  { id: 13, name: "Hastings More", area: "Hastings", lat: 22.543694, lng: 88.329500 },
  { id: 14, name: "Fort William", area: "Red Road / Maidan", lat: 22.555056, lng: 88.344278 },
  { id: 15, name: "Esplanade Mayo Road", area: "Esplanade", lat: 22.560056, lng: 88.348389 },
  { id: 16, name: "Akashvani Bhavan", area: "Eden Gardens / Strand Road", lat: 22.565528, lng: 88.344778 },
  { id: 17, name: "Netaji Indoor Stadium", area: "BBD Bagh / Strand Road", lat: 22.567361, lng: 88.341056 },
  { id: 18, name: "Calcutta High Court", area: "High Court / Strand Road", lat: 22.569111, lng: 88.342167 },
  { id: 19, name: "BBD Bagh (Strand Road)", area: "Dalhousie / Strand Road", lat: 22.575972, lng: 88.346833 },
  { id: 20, name: "Canning Street", area: "Burrabazar", lat: 22.578861, lng: 88.348056 },
  { id: 21, name: "Burrabazar", area: "Howrah Bridge Approach", lat: 22.582472, lng: 88.349639 },
  { id: 22, name: "Howrah Station", area: "Howrah Railway Station", lat: 22.585556, lng: 88.344111 }
];

const STOPS_S123_RETURN = [
  { id: 1, name: "Howrah Station", area: "Howrah Railway Station", lat: 22.586083, lng: 88.343917 },
  { id: 2, name: "Burrabazar", area: "Howrah Bridge Approach", lat: 22.582417, lng: 88.349861 },
  { id: 3, name: "Canning Street", area: "Burrabazar", lat: 22.577417, lng: 88.352472 },
  { id: 4, name: "BBD Bagh (Metro / Dalhousie)", area: "BBD Bagh Metro", lat: 22.572583, lng: 88.350861 },
  { id: 5, name: "Dalhousie (BBD Bagh Central)", area: "Dalhousie / BBD Bagh", lat: 22.570444, lng: 88.350028 },
  { id: 6, name: "Esplanade Raj Bhavan", area: "Esplanade / Raj Bhavan", lat: 22.566278, lng: 88.348556 },
  { id: 7, name: "Esplanade Mayo Road", area: "Esplanade", lat: 22.560056, lng: 88.348389 },
  { id: 8, name: "Fort William", area: "Red Road / Maidan", lat: 22.555056, lng: 88.344278 },
  { id: 9, name: "Hastings More", area: "Hastings", lat: 22.543694, lng: 88.329500 },
  { id: 10, name: "Kidderpore Crossing", area: "Kidderpore", lat: 22.541444, lng: 88.326028 },
  { id: 11, name: "Fancy Market", area: "Kidderpore", lat: 22.540056, lng: 88.324000 },
  { id: 12, name: "Kidderpore Tram Depot", area: "Kidderpore", lat: 22.538611, lng: 88.317611 },
  { id: 13, name: "Hide Road More", area: "Hide Road / Kidderpore", lat: 22.538000, lng: 88.309500 },
  { id: 14, name: "ITC Limited", area: "Hide Road", lat: 22.538083, lng: 88.306667 },
  { id: 15, name: "Indian Institute of Port Management", area: "Garden Reach / IIPM", lat: 22.538389, lng: 88.304028 },
  { id: 16, name: "Dock Gate No. 9", area: "Garden Reach / Dock Gate 9", lat: 22.534806, lng: 88.301500 },
  { id: 17, name: "Garden Reach Dock", area: "Garden Reach / Dock", lat: 22.536417, lng: 88.296222 },
  { id: 18, name: "Ramnagar (Metiabruz)", area: "Metiabruz / Ramnagar", lat: 22.543417, lng: 88.294722 },
  { id: 19, name: "Metiabruz Kacchi Sadak", area: "Metiabruz", lat: 22.548444, lng: 88.288000 },
  { id: 20, name: "Bichalighat", area: "Metiabruz / Bichalighat", lat: 22.549194, lng: 88.285194 },
  { id: 21, name: "Metiabruz Police Station", area: "Metiabruz", lat: 22.549528, lng: 88.282583 }
];

window.ROUTES_DATABASE = window.ROUTES_DATABASE || {};
window.ROUTES_DATABASE["S123"] = {
  id: "S123",
  name: "S-123 (METIABRUZ MINI)",
  subTitle: "METIABRUZ <-> HOWRAH STATION",
  forwardStops: STOPS_S123_FORWARD,
  returnStops: STOPS_S123_RETURN
};