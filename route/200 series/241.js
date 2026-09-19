// ROUTE ID: 241
const STOPS_241_FORWARD = [
  { id: 1, name: "Santoshpur Railway Station", area: "Santoshpur / Railway Station", lat: 22.524361, lng: 88.274472 },
  { id: 2, name: "Akra Rabindranagar", area: "Akra / Rabindranagar", lat: 22.531444, lng: 88.256556 },
  { id: 3, name: "Akra Phatak Bus Stand", area: "Akra / Rabindranagar", lat: 22.531444, lng: 88.256556 },
  { id: 4, name: "Bartala Bazar (Metiabruz)", area: "Metiabruz / Bartala", lat: 22.543722, lng: 88.268111 },
  { id: 5, name: "Metiabruz Police Station", area: "Metiabruz", lat: 22.549583, lng: 88.282583 },
  { id: 6, name: "Bichalighat", area: "Metiabruz / Bichalighat", lat: 22.549278, lng: 88.285250 },
  { id: 7, name: "Metiabruz Kacchi Sadak", area: "Metiabruz", lat: 22.548667, lng: 88.287750 },
  { id: 8, name: "Ramnagar (Metiabruz)", area: "Metiabruz / Ramnagar", lat: 22.543444, lng: 88.294806 },
  { id: 9, name: "Garden Reach Dock", area: "Garden Reach / Dock", lat: 22.536611, lng: 88.296333 },
  { id: 10, name: "Dock Gate No. 9", area: "Garden Reach / Dock Gate 9", lat: 22.534972, lng: 88.301639 },
  { id: 11, name: "Indian Institute of Port Management", area: "Garden Reach / IIPM", lat: 22.538472, lng: 88.304083 },
  { id: 12, name: "ITC Limited", area: "Hide Road", lat: 22.538333, lng: 88.306500 },
  { id: 13, name: "Hide Road More", area: "Hide Road / Kidderpore", lat: 22.538000, lng: 88.309500 },
  { id: 14, name: "Kidderpore Tram Depot", area: "Kidderpore", lat: 22.538611, lng: 88.317611 },
  { id: 15, name: "Fancy Market", area: "Kidderpore", lat: 22.540056, lng: 88.324000 },
  { id: 16, name: "Kidderpore Crossing", area: "Kidderpore", lat: 22.541444, lng: 88.326028 },
  { id: 17, name: "Hastings More", area: "Hastings", lat: 22.543694, lng: 88.329500 },
  { id: 18, name: "Fort William", area: "Red Road / Maidan", lat: 22.555056, lng: 88.344278 },
  { id: 19, name: "Esplanade Mayo Road", area: "Esplanade", lat: 22.560056, lng: 88.348389 },
  { id: 20, name: "Dharmatala Bus Stand", area: "Esplanade / Dharmatala", lat: 22.562667, lng: 88.349472 }
];

const STOPS_241_RETURN = [
  { id: 1, name: "Dharmatala Bus Stand", area: "Esplanade / Dharmatala", lat: 22.562667, lng: 88.349472 },
  { id: 2, name: "Esplanade Mayo Road", area: "Esplanade", lat: 22.560056, lng: 88.348389 },
  { id: 3, name: "Fort William", area: "Red Road / Maidan", lat: 22.555056, lng: 88.344278 },
  { id: 4, name: "Hastings More", area: "Hastings", lat: 22.543694, lng: 88.329500 },
  { id: 5, name: "Kidderpore Crossing", area: "Kidderpore", lat: 22.541444, lng: 88.326028 },
  { id: 6, name: "Fancy Market", area: "Kidderpore", lat: 22.540056, lng: 88.324000 },
  { id: 7, name: "Kidderpore Tram Depot", area: "Kidderpore", lat: 22.538611, lng: 88.317611 },
  { id: 8, name: "Hide Road More", area: "Hide Road / Kidderpore", lat: 22.538000, lng: 88.309500 },
  { id: 9, name: "ITC Limited", area: "Hide Road", lat: 22.538083, lng: 88.306667 },
  { id: 10, name: "Indian Institute of Port Management", area: "Garden Reach / IIPM", lat: 22.538389, lng: 88.304028 },
  { id: 11, name: "Dock Gate No. 9", area: "Garden Reach / Dock Gate 9", lat: 22.534806, lng: 88.301500 },
  { id: 12, name: "Garden Reach Dock", area: "Garden Reach / Dock", lat: 22.536417, lng: 88.296222 },
  { id: 13, name: "Ramnagar (Metiabruz)", area: "Metiabruz / Ramnagar", lat: 22.543417, lng: 88.294722 },
  { id: 14, name: "Metiabruz Kacchi Sadak", area: "Metiabruz", lat: 22.548444, lng: 88.288000 },
  { id: 15, name: "Bichalighat", area: "Metiabruz / Bichalighat", lat: 22.549194, lng: 88.285194 },
  { id: 16, name: "Metiabruz Police Station", area: "Metiabruz", lat: 22.549528, lng: 88.282583 },
  { id: 17, name: "Bartala Bazar (Metiabruz)", area: "Metiabruz / Bartala", lat: 22.543667, lng: 88.268167 },
  { id: 18, name: "Akra Phatak Bus Stand", area: "Akra / Rabindranagar", lat: 22.535444, lng: 88.255028 },
  { id: 19, name: "Akra Rabindranagar", area: "Akra / Rabindranagar", lat: 22.531528, lng: 88.256500 },
  { id: 20, name: "Santoshpur Railway Station", area: "Santoshpur / Railway Station", lat: 22.524528, lng: 88.269778 }
];

window.ROUTES_DATABASE = window.ROUTES_DATABASE || {};
window.ROUTES_DATABASE["241"] = {
  id: "241",
  name: "241",
  subTitle: "SANTOSHPUR STATION <-> ESPLANADE",
  forwardStops: STOPS_241_FORWARD,
  returnStops: STOPS_241_RETURN
};