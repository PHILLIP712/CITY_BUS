// ROUTE ID: 12_SHUTTLE
const STOPS_12_SHUTTLE_FORWARD = [
  { id: 1, name: "Badartala (Rajabagan)", area: "Metiabruz / Badartala", lat: 22.552639, lng: 88.260611 },
  { id: 2, name: "Badartala", area: "Metiabruz / Badartala", lat: 22.552028, lng: 88.263500 },
  { id: 3, name: "Metiabruz Barasahib Masjid", area: "Metiabruz", lat: 22.552750, lng: 88.269167 },
  { id: 4, name: "Rajabagan", area: "Metiabruz / Rajabagan", lat: 22.551833, lng: 88.273722 },
  { id: 5, name: "Metiabruz College", area: "Metiabruz", lat: 22.550139, lng: 88.278111 },
  { id: 6, name: "Metiabruz Police Station", area: "Metiabruz", lat: 22.549583, lng: 88.282583 },
  { id: 7, name: "Bichalighat", area: "Metiabruz / Bichalighat", lat: 22.549278, lng: 88.285250 },
  { id: 8, name: "Metiabruz Kacchi Sadak", area: "Metiabruz", lat: 22.548667, lng: 88.287750 },
  { id: 9, name: "Ramnagar (Metiabruz)", area: "Metiabruz / Ramnagar", lat: 22.543444, lng: 88.294806 },
  { id: 10, name: "Garden Reach Dock", area: "Garden Reach / Dock", lat: 22.536611, lng: 88.296333 },
  { id: 11, name: "Dock Gate No. 9", area: "Garden Reach / Dock Gate 9", lat: 22.534972, lng: 88.301639 },
  { id: 12, name: "Indian Institute of Port Management", area: "Garden Reach / IIPM", lat: 22.538472, lng: 88.304083 },
  { id: 13, name: "ITC Limited", area: "Hide Road", lat: 22.538333, lng: 88.306500 },
  { id: 14, name: "Hide Road More", area: "Hide Road / Kidderpore", lat: 22.538000, lng: 88.309500 },
  { id: 15, name: "Kidderpore Tram Depot", area: "Kidderpore", lat: 22.538611, lng: 88.317611 },
  { id: 16, name: "Fancy Market", area: "Kidderpore", lat: 22.540056, lng: 88.324000 },
  { id: 17, name: "Kidderpore Crossing", area: "Kidderpore", lat: 22.541444, lng: 88.326028 },
  { id: 18, name: "Hastings More", area: "Hastings", lat: 22.543694, lng: 88.329500 },
  { id: 19, name: "Fort William", area: "Red Road / Maidan", lat: 22.555056, lng: 88.344278 },
  { id: 20, name: "Esplanade Mayo Road", area: "Esplanade", lat: 22.560056, lng: 88.348389 },
  { id: 21, name: "Dharmatala Bus Stand", area: "Esplanade / Dharmatala", lat: 22.562667, lng: 88.349472 }
];

const STOPS_12_SHUTTLE_RETURN = [
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
  { id: 15, name: "Metiabruz Kacchi Sadak", area: "Metiabruz", lat: 22.548444, lng: 88.288000 },
  { id: 16, name: "Bichalighat", area: "Metiabruz / Bichalighat", lat: 22.549194, lng: 88.285194 },
  { id: 17, name: "Metiabruz Police Station", area: "Metiabruz", lat: 22.549528, lng: 88.282583 },
  { id: 18, name: "Metiabruz College", area: "Metiabruz", lat: 22.550056, lng: 88.278139 },
  { id: 19, name: "Rajabagan", area: "Metiabruz / Rajabagan", lat: 22.551556, lng: 88.274139 },
  { id: 20, name: "Metiabruz Barasahib Masjid", area: "Metiabruz", lat: 22.552667, lng: 88.269472 },
  { id: 21, name: "Badartala", area: "Metiabruz / Badartala", lat: 22.551944, lng: 88.263500 },
  { id: 22, name: "Badartala (Rajabagan)", area: "Metiabruz / Badartala", lat: 22.552556, lng: 88.260639 }
];

window.ROUTES_DATABASE = window.ROUTES_DATABASE || {};
window.ROUTES_DATABASE["12_SHUTTLE"] = {
  id: "12_SHUTTLE",
  name: "12 (SHUTTLE)",
  subTitle: "BADARTALA <-> ESPLANADE",
  forwardStops: STOPS_12_SHUTTLE_FORWARD,
  returnStops: STOPS_12_SHUTTLE_RETURN
};