// ROUTE ID: 18A
const STOPS_18A_FORWARD = [
  { id: 1, name: "Greenfield City", area: "Shibrampur / Greenfield City", lat: 22.488361, lng: 88.274472 },
  { id: 2, name: "Shibrampur", area: "Shibrampur", lat: 22.487417, lng: 88.277556 },
  { id: 3, name: "Behala Muchipara", area: "Behala / Muchipara", lat: 22.485917, lng: 88.284528 },
  { id: 4, name: "Shakuntala Park", area: "Sarsuna / Shakuntala Park", lat: 22.485306, lng: 88.289444 },
  { id: 5, name: "Bakultala", area: "Behala / Bakultala", lat: 22.484083, lng: 88.302500 },
  { id: 6, name: "Behala Chowrasta", area: "Behala Chowrasta", lat: 22.487306, lng: 88.313111 },
  { id: 7, name: "Behala Manton", area: "Behala / Manton", lat: 22.494417, lng: 88.316278 },
  { id: 8, name: "Behala Bazar Metro", area: "Behala / Metro", lat: 22.499444, lng: 88.317417 },
  { id: 9, name: "Behala 14 No.", area: "Behala / DH Road", lat: 22.502417, lng: 88.318139 },
  { id: 10, name: "Behala Police Station", area: "Behala", lat: 22.504139, lng: 88.318806 },
  { id: 11, name: "Taratala Metro", area: "Taratala / Metro", lat: 22.506972, lng: 88.319972 },
  { id: 12, name: "Majherhat Mint", area: "Majherhat / Alipore", lat: 22.516083, lng: 88.323111 },
  { id: 13, name: "Mominpore Crossing", area: "Kidderpore / DH Road", lat: 22.527056, lng: 88.325833 },
  { id: 14, name: "Ekbalpur More", area: "Kidderpore", lat: 22.533167, lng: 88.327139 },
  { id: 15, name: "Kidderpore Crossing", area: "Kidderpore", lat: 22.541444, lng: 88.326028 },
  { id: 16, name: "Hastings More", area: "Hastings", lat: 22.543694, lng: 88.329500 },
  { id: 17, name: "Fort William", area: "Red Road / Maidan", lat: 22.555056, lng: 88.344278 },
  { id: 18, name: "Esplanade Mayo Road", area: "Esplanade", lat: 22.560056, lng: 88.348389 },
  { id: 19, name: "Esplanade Raj Bhavan", area: "Esplanade / Raj Bhavan", lat: 22.566194, lng: 88.348361 },
  { id: 20, name: "Dalhousie", area: "Dalhousie / BBD Bagh", lat: 22.570306, lng: 88.349833 },
  { id: 21, name: "B.B.D. Bagh (Private Stand)", area: "BBD Bagh", lat: 22.571417, lng: 88.347583 },
  { id: 22, name: "G.P.O", area: "BBD Bagh / GPO", lat: 22.572361, lng: 88.347833 },
  { id: 23, name: "BBD Bagh (Strand Road)", area: "Dalhousie / Strand Road", lat: 22.575972, lng: 88.346833 },
  { id: 24, name: "Canning Street", area: "Burrabazar", lat: 22.578861, lng: 88.348056 },
  { id: 25, name: "Burrabazar", area: "Howrah Bridge Approach", lat: 22.582472, lng: 88.349639 },
  { id: 26, name: "Howrah Station", area: "Howrah Railway Station", lat: 22.585556, lng: 88.344111 }
];

const STOPS_18A_RETURN = [
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
  { id: 21, name: "Shakuntala Park", area: "Sarsuna / Shakuntala Park", lat: 22.485250, lng: 88.289528 },
  { id: 22, name: "Behala Muchipara", area: "Behala / Muchipara", lat: 22.485861, lng: 88.284417 },
  { id: 23, name: "Shibrampur", area: "Shibrampur", lat: 22.487111, lng: 88.278500 },
  { id: 24, name: "Greenfield City", area: "Shibrampur / Greenfield City", lat: 22.488333, lng: 88.274361 }
];

window.ROUTES_DATABASE = window.ROUTES_DATABASE || {};
window.ROUTES_DATABASE["18A"] = {
  id: "18A",
  name: "18A",
  subTitle: "GREENFIELD CITY <-> HOWRAH STATION",
  forwardStops: STOPS_18A_FORWARD,
  returnStops: STOPS_18A_RETURN
};