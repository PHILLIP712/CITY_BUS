// ROUTE ID: 12AD
const STOPS_12AD_FORWARD = [
  { id: 1, name: "Akra Phatak Bus Stand", area: "Akra / Rabindranagar", lat: 22.535444, lng: 88.255028 },
  { id: 2, name: "Akra Rabindranagar", area: "Akra / Rabindranagar", lat: 22.531528, lng: 88.256500 },
  { id: 3, name: "Santoshpur Railway Station", area: "Santoshpur / Railway Station", lat: 22.524528, lng: 88.269778 },
  { id: 4, name: "Nature Park", area: "Santoshpur / Nature Park", lat: 22.523806, lng: 88.291083 },
  { id: 5, name: "Jinjira Bazar", area: "Taratala / Hyde Road", lat: 22.517417, lng: 88.298083 },
  { id: 6, name: "Brace Bridge", area: "Taratala / Railway", lat: 22.516556, lng: 88.303333 },
  { id: 7, name: "Taratala State Garage", area: "Taratala", lat: 22.515861, lng: 88.306556 },
  { id: 8, name: "Taratala More", area: "Diamond Harbour Road", lat: 22.512472, lng: 88.321861 },
  { id: 9, name: "Majherhat Mint", area: "Majherhat / Alipore", lat: 22.516083, lng: 88.323111 },
  { id: 10, name: "Mominpore Crossing", area: "Kidderpore / DH Road", lat: 22.527056, lng: 88.325833 },
  { id: 11, name: "Ekbalpur More", area: "Kidderpore", lat: 22.533167, lng: 88.327139 },
  { id: 12, name: "Kidderpore Crossing", area: "Kidderpore", lat: 22.541444, lng: 88.326028 },
  { id: 13, name: "Hastings More", area: "Hastings", lat: 22.543694, lng: 88.329500 },
  { id: 14, name: "Fort William", area: "Red Road / Maidan", lat: 22.555056, lng: 88.344278 },
  { id: 15, name: "Esplanade Mayo Road", area: "Esplanade", lat: 22.560056, lng: 88.348389 },
  { id: 16, name: "Esplanade Raj Bhavan", area: "Esplanade / Raj Bhavan", lat: 22.566194, lng: 88.348361 },
  { id: 17, name: "Dalhousie", area: "Dalhousie / BBD Bagh", lat: 22.570306, lng: 88.349833 },
  { id: 18, name: "Bankshall Court", area: "BBD Bagh / Bankshall Court", lat: 22.571167, lng: 88.347083 },
  { id: 19, name: "Shipping Corporation", area: "Strand Road / Fairlie Place", lat: 22.571917, lng: 88.344472 },
  { id: 20, name: "BBD Bagh (Strand Road)", area: "Dalhousie / Strand Road", lat: 22.575972, lng: 88.346833 },
  { id: 21, name: "Canning Street", area: "Burrabazar", lat: 22.578861, lng: 88.348056 },
  { id: 22, name: "Burrabazar", area: "Howrah Bridge Approach", lat: 22.582472, lng: 88.349639 },
  { id: 23, name: "Howrah Station", area: "Howrah Railway Station", lat: 22.585556, lng: 88.344111 }
];

const STOPS_12AD_RETURN = [
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
  { id: 14, name: "Taratala More", area: "Diamond Harbour Road", lat: 22.512472, lng: 88.321861 },
  { id: 15, name: "Taratala State Garage", area: "Taratala", lat: 22.515861, lng: 88.306556 },
  { id: 16, name: "Brace Bridge", area: "Taratala / Railway", lat: 22.516556, lng: 88.303333 },
  { id: 17, name: "Jinjira Bazar", area: "Taratala / Hyde Road", lat: 22.517417, lng: 88.298083 },
  { id: 18, name: "Nature Park", area: "Santoshpur / Nature Park", lat: 22.523750, lng: 88.291111 },
  { id: 19, name: "Santoshpur Railway Station", area: "Santoshpur / Railway Station", lat: 22.524361, lng: 88.274472 },
  { id: 20, name: "Akra Rabindranagar", area: "Akra / Rabindranagar", lat: 22.531444, lng: 88.256556 },
  { id: 21, name: "Akra Phatak Bus Stand", area: "Akra / Rabindranagar", lat: 22.531444, lng: 88.256556 }
];

window.ROUTES_DATABASE = window.ROUTES_DATABASE || {};
window.ROUTES_DATABASE["12AD"] = {
  id: "12AD",
  name: "12AD",
  subTitle: "AKRA FATAK <-> HOWRAH STATION",
  forwardStops: STOPS_12AD_FORWARD,
  returnStops: STOPS_12AD_RETURN
};