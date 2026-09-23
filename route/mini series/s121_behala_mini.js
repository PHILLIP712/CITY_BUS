// ROUTE ID: S121
const STOPS_S121_FORWARD = [
  { id: 1, name: "Behala Chowrasta", area: "Behala Chowrasta", lat: 22.487306, lng: 88.313111 },
  { id: 2, name: "Behala Manton", area: "Behala / Manton", lat: 22.494417, lng: 88.316278 },
  { id: 3, name: "Behala Bazar Metro", area: "Behala / Metro", lat: 22.499444, lng: 88.317417 },
  { id: 4, name: "Behala 14 No.", area: "Behala / DH Road", lat: 22.502417, lng: 88.318139 },
  { id: 5, name: "Behala Police Station", area: "Behala", lat: 22.504139, lng: 88.318806 },
  { id: 6, name: "Taratala Metro", area: "Taratala / Metro", lat: 22.506972, lng: 88.319972 },
  { id: 7, name: "Majherhat Mint", area: "Majherhat / Alipore", lat: 22.516083, lng: 88.323111 },
  { id: 8, name: "Mominpore Crossing", area: "Kidderpore / DH Road", lat: 22.527056, lng: 88.325833 },
  { id: 9, name: "Alipore Judges Court Crossing", area: "Alipore", lat: 22.525333, lng: 88.330833 },
  { id: 10, name: "Belvedere Road", area: "Alipore / Belvedere Road", lat: 22.527417, lng: 88.331333 },
  { id: 11, name: "Alipore Bhawani Bhawan", area: "Alipore / Bhawani Bhawan", lat: 22.528278, lng: 88.336500 },
  { id: 12, name: "National Library", area: "Alipore / National Library", lat: 22.532861, lng: 88.334944 },
  { id: 13, name: "Alipore Zoo", area: "Alipore", lat: 22.536583, lng: 88.333556 },
  { id: 14, name: "Alipore PTS More", area: "PTS / Race Course", lat: 22.540028, lng: 88.336667 },
  { id: 15, name: "P.G. Hospital", area: "SSKM / Rabindra Sadan", lat: 22.540611, lng: 88.339278 },
  { id: 16, name: "Victoria Memorial", area: "Maidan", lat: 22.546917, lng: 88.339556 },
  { id: 17, name: "Fort William", area: "Red Road / Maidan", lat: 22.555056, lng: 88.344278 },
  { id: 18, name: "Esplanade Mayo Road", area: "Esplanade", lat: 22.560056, lng: 88.348389 },
  { id: 19, name: "Akashvani Bhavan", area: "Eden Gardens / Strand Road", lat: 22.565528, lng: 88.344778 },
  { id: 20, name: "Netaji Indoor Stadium", area: "BBD Bagh / Strand Road", lat: 22.567361, lng: 88.341056 },
  { id: 21, name: "Calcutta High Court", area: "High Court / Strand Road", lat: 22.569111, lng: 88.342167 },
  { id: 22, name: "BBD Bagh (Strand Road)", area: "Dalhousie / Strand Road", lat: 22.575972, lng: 88.346833 },
  { id: 23, name: "Canning Street", area: "Burrabazar", lat: 22.578861, lng: 88.348056 },
  { id: 24, name: "Burrabazar", area: "Howrah Bridge Approach", lat: 22.582472, lng: 88.349639 },
  { id: 25, name: "Howrah Station", area: "Howrah Railway Station", lat: 22.585556, lng: 88.344111 }
];

const STOPS_S121_RETURN = [
  { id: 1, name: "Howrah Station", area: "Howrah Railway Station", lat: 22.586083, lng: 88.343917 },
  { id: 2, name: "Burrabazar", area: "Howrah Bridge Approach", lat: 22.582417, lng: 88.349861 },
  { id: 3, name: "Canning Street", area: "Burrabazar", lat: 22.577417, lng: 88.352472 },
  { id: 4, name: "BBD Bagh (Metro / Dalhousie)", area: "BBD Bagh Metro", lat: 22.572583, lng: 88.350861 },
  { id: 5, name: "Dalhousie (BBD Bagh Central)", area: "Dalhousie / BBD Bagh", lat: 22.570444, lng: 88.350028 },
  { id: 6, name: "Esplanade Raj Bhavan", area: "Esplanade / Raj Bhavan", lat: 22.566278, lng: 88.348556 },
  { id: 7, name: "Esplanade Mayo Road", area: "Esplanade", lat: 22.560056, lng: 88.348389 },
  { id: 8, name: "Fort William", area: "Red Road / Maidan", lat: 22.555056, lng: 88.344278 },
  { id: 9, name: "Victoria Memorial", area: "Maidan", lat: 22.546917, lng: 88.339556 },
  { id: 10, name: "P.G. Hospital", area: "SSKM / Rabindra Sadan", lat: 22.540611, lng: 88.339278 },
  { id: 11, name: "Alipore PTS More", area: "PTS / Race Course", lat: 22.540028, lng: 88.336667 },
  { id: 12, name: "Alipore Zoo", area: "Alipore", lat: 22.536583, lng: 88.333556 },
  { id: 13, name: "Alipore Zoo - National Library Avenue", area: "Alipore", lat: 22.533056, lng: 88.331944 },
  { id: 14, name: "Command Hospital", area: "Alipore / Command Hospital", lat: 22.530139, lng: 88.331778 },
  { id: 15, name: "Belvedere Road", area: "Alipore / Belvedere Road", lat: 22.527417, lng: 88.331417 },
  { id: 16, name: "Alipore Judges Court Crossing", area: "Alipore", lat: 22.525139, lng: 88.330972 },
  { id: 17, name: "Alipore More", area: "Alipore", lat: 22.522389, lng: 88.330444 },
  { id: 18, name: "Burdwan Road Petrol Pump", area: "Alipore / Burdwan Road", lat: 22.521944, lng: 88.324750 },
  { id: 19, name: "Majherhat Mint", area: "Majherhat / Alipore", lat: 22.516083, lng: 88.323111 },
  { id: 20, name: "Taratala Metro", area: "Taratala / Metro", lat: 22.507889, lng: 88.320611 },
  { id: 21, name: "Behala Police Station", area: "Behala", lat: 22.504111, lng: 88.319056 },
  { id: 22, name: "Behala 14 No.", area: "Behala / DH Road", lat: 22.502306, lng: 88.318306 },
  { id: 23, name: "Behala Bazar Metro", area: "Behala / Metro", lat: 22.499583, lng: 88.317639 },
  { id: 24, name: "Behala Manton", area: "Behala / Manton", lat: 22.494444, lng: 88.316500 },
  { id: 25, name: "Behala Chowrasta", area: "Behala Chowrasta", lat: 22.487333, lng: 88.313472 }
];

window.ROUTES_DATABASE = window.ROUTES_DATABASE || {};
window.ROUTES_DATABASE["S121"] = {
  id: "S121",
  name: "S-121 (BEHALA MINI)",
  subTitle: "BEHALA CHOWRASTA <-> HOWRAH STATION",
  forwardStops: STOPS_S121_FORWARD,
  returnStops: STOPS_S121_RETURN
};