// ROUTE ID: 18D
const STOPS_18D_FORWARD = [
  { id: 1, name: "Suryasen Nagar (Sarsuna)", area: "Sarsuna / Suryasen Nagar", lat: 22.479444, lng: 88.283306 },
  { id: 2, name: "Kastadanga", area: "Sarsuna / Kastadanga", lat: 22.478889, lng: 88.286500 },
  { id: 3, name: "Sarsuna Bayam Samity", area: "Sarsuna / Bayam Samity", lat: 22.481028, lng: 88.291333 },
  { id: 4, name: "Sarsuna", area: "Sarsuna", lat: 22.479889, lng: 88.295139 },
  { id: 5, name: "Sarkarhat (Sarsuna)", area: "Sarsuna / Sarkarhat", lat: 22.480250, lng: 88.299111 },
  { id: 6, name: "Sarsuna Post Office (Old)", area: "Sarsuna / Post Office", lat: 22.482222, lng: 88.300417 },
  { id: 7, name: "Bakultala", area: "Behala / Bakultala", lat: 22.484083, lng: 88.302500 },
  { id: 8, name: "Behala Chowrasta", area: "Behala Chowrasta", lat: 22.487306, lng: 88.313111 },
  { id: 9, name: "Behala Manton", area: "Behala / Manton", lat: 22.494417, lng: 88.316278 },
  { id: 10, name: "Behala Bazar Metro", area: "Behala / Metro", lat: 22.499444, lng: 88.317417 },
  { id: 11, name: "Behala 14 No.", area: "Behala / DH Road", lat: 22.502417, lng: 88.318139 },
  { id: 12, name: "Behala Police Station", area: "Behala", lat: 22.504139, lng: 88.318806 },
  { id: 13, name: "Taratala Metro", area: "Taratala / Metro", lat: 22.506972, lng: 88.319972 },
  { id: 14, name: "Majherhat Mint", area: "Majherhat / Alipore", lat: 22.516083, lng: 88.323111 },
  { id: 15, name: "Mominpore Crossing", area: "Kidderpore / DH Road", lat: 22.527056, lng: 88.325833 },
  { id: 16, name: "Ekbalpur More", area: "Kidderpore", lat: 22.533167, lng: 88.327139 },
  { id: 17, name: "Kidderpore Crossing", area: "Kidderpore", lat: 22.541444, lng: 88.326028 },
  { id: 18, name: "Hastings More", area: "Hastings", lat: 22.543694, lng: 88.329500 },
  { id: 19, name: "Fort William", area: "Red Road / Maidan", lat: 22.555056, lng: 88.344278 },
  { id: 20, name: "Esplanade Mayo Road", area: "Esplanade", lat: 22.560056, lng: 88.348389 },
  { id: 21, name: "Esplanade Raj Bhavan", area: "Esplanade / Raj Bhavan", lat: 22.566194, lng: 88.348361 },
  { id: 22, name: "Dalhousie", area: "Dalhousie / BBD Bagh", lat: 22.570306, lng: 88.349833 },
  { id: 23, name: "B.B.D. Bagh (Private Stand)", area: "BBD Bagh", lat: 22.571417, lng: 88.347583 },
  { id: 24, name: "G.P.O", area: "BBD Bagh / GPO", lat: 22.572361, lng: 88.347833 },
  { id: 25, name: "BBD Bagh (Strand Road)", area: "Dalhousie / Strand Road", lat: 22.575972, lng: 88.346833 },
  { id: 26, name: "Canning Street", area: "Burrabazar", lat: 22.578861, lng: 88.348056 },
  { id: 27, name: "Burrabazar", area: "Howrah Bridge Approach", lat: 22.582472, lng: 88.349639 },
  { id: 28, name: "Howrah Station", area: "Howrah Railway Station", lat: 22.585556, lng: 88.344111 }
];

const STOPS_18D_RETURN = [
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
  { id: 11, name: "Ekbalpur More", area: "Kidderpore", lat: 22.533167, lng: 88.327139 },
  { id: 12, name: "Mominpore Crossing", area: "Kidderpore / DH Road", lat: 22.527056, lng: 88.325833 },
  { id: 13, name: "Majherhat Mint", area: "Majherhat / Alipore", lat: 22.516083, lng: 88.323111 },
  { id: 14, name: "Taratala Metro", area: "Taratala / Metro", lat: 22.507889, lng: 88.320611 },
  { id: 15, name: "Behala Police Station", area: "Behala", lat: 22.504111, lng: 88.319056 },
  { id: 16, name: "Behala 14 No.", area: "Behala / DH Road", lat: 22.502306, lng: 88.318306 },
  { id: 17, name: "Behala Bazar Metro", area: "Behala / Metro", lat: 22.499583, lng: 88.317639 },
  { id: 18, name: "Behala Manton", area: "Behala / Manton", lat: 22.494444, lng: 88.316500 },
  { id: 19, name: "Behala Chowrasta", area: "Behala Chowrasta", lat: 22.487333, lng: 88.313472 },
  { id: 20, name: "Bakultala", area: "Behala / Bakultala", lat: 22.484083, lng: 88.302333 },
  { id: 21, name: "Sarsuna Post Office (Old)", area: "Sarsuna / Post Office", lat: 22.482194, lng: 88.300500 },
  { id: 22, name: "Sarkarhat (Sarsuna)", area: "Sarsuna / Sarkarhat", lat: 22.480222, lng: 88.299278 },
  { id: 23, name: "Sarsuna", area: "Sarsuna", lat: 22.479833, lng: 88.295111 },
  { id: 24, name: "Sarsuna Bayam Samity", area: "Sarsuna / Bayam Samity", lat: 22.480972, lng: 88.291333 },
  { id: 25, name: "Kastadanga", area: "Sarsuna / Kastadanga", lat: 22.478833, lng: 88.286500 },
  { id: 26, name: "Suryasen Nagar (Sarsuna)", area: "Sarsuna / Suryasen Nagar", lat: 22.479389, lng: 88.283194 }
];

window.ROUTES_DATABASE = window.ROUTES_DATABASE || {};
window.ROUTES_DATABASE["18D"] = {
  id: "18D",
  name: "18D",
  subTitle: "SURYASEN NAGAR <-> HOWRAH STATION",
  forwardStops: STOPS_18D_FORWARD,
  returnStops: STOPS_18D_RETURN
};