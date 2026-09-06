"use strict";

// Presentation metadata references the original qgis2web layers and datasets.
window.bandulanLayers = [
  { id: "warung", label: "Warung Locations", category: "Warung", group: "Business", layer: layer_LokasiWarung_11, color: "#087f68", symbol: "point", style: { radius: 7, color: "#ffffff", weight: 2.5, fillColor: "#087f68", fillOpacity: 1 } },
  { id: "boundary", label: "Bandulan Boundary", category: "Administrative boundary", group: "Administrative", layer: layer_BatasKelurahan_1, color: "#268d79", symbol: "line", style: { color: "#268d79", weight: 2.5, dashArray: "7 5", fill: false, fillOpacity: 0 } },
  { id: "village-roads", label: "Village Roads", category: "Village road", group: "Infrastructure", layer: layer_JalanDesa_10, color: "#a46b43", symbol: "line", style: { color: "#a46b43", weight: 3, fillOpacity: 0 } },
  { id: "residential-roads", label: "Residential Roads", category: "Residential road", group: "Infrastructure", layer: layer_JalanPerumahan_9, color: "#ba975d", symbol: "line", style: { color: "#ba975d", weight: 2.5, fillOpacity: 0 } },
  { id: "alleys", label: "Alleys", category: "Alley", group: "Infrastructure", layer: layer_JalanGang_8, color: "#9298a1", symbol: "line", style: { color: "#9298a1", weight: 1.5, fillOpacity: 0 } },
  { id: "buildings", label: "Buildings", category: "Building", group: "Urban Features", layer: layer_Bangunan_4, color: "#9fa9b3", style: { color: "#8793a0", weight: .7, fillColor: "#9fa9b3", fillOpacity: .45 } },
  { id: "residential", label: "Residential Areas", category: "Residential area", group: "Urban Features", layer: layer_Pemukiman_2, color: "#d5cbb6", style: { color: "#b6ac99", weight: .8, fillColor: "#d5cbb6", fillOpacity: .25 } },
  { id: "green", label: "Green Spaces", category: "Green space", group: "Urban Features", layer: layer_LahanTerbukaHijau_5, color: "#81ae88", style: { color: "#699c72", weight: 1, fillColor: "#81ae88", fillOpacity: .5 } },
  { id: "schools", label: "Schools", category: "School", group: "Public Facilities", layer: layer_Sekolah_3, color: "#6694bd", style: { color: "#4c7fa9", weight: 1.2, fillColor: "#6694bd", fillOpacity: .6 } },
  { id: "factories", label: "Factories", category: "Factory", group: "Public Facilities", layer: layer_Pabrik_6, color: "#7e8795", style: { color: "#626e80", weight: 1.2, fillColor: "#7e8795", fillOpacity: .6 } },
  { id: "rivers", label: "Rivers", category: "River", group: "Environment", layer: layer_Sungai_7, color: "#599eb8", symbol: "line", style: { color: "#599eb8", weight: 2.5, fillOpacity: 0 } },
];

window.bandulanFields = {
  id: "popup.id",
  FID: "popup.FID",
  Nama: "popup.Nama",
  Lokasi: "popup.Lokasi",
  Alamat: "popup.Alamat",
  LuasHektar: "popup.LuasHektar",
  LuasMeter: "popup.LuasMeter",
  PanjangM: "popup.PanjangM",
  PanjangKM: "popup.PanjangKM",
};

const groupKeys = {
  Business: "groups.business",
  Administrative: "groups.administrative",
  Infrastructure: "groups.infrastructure",
  "Urban Features": "groups.urban",
  "Public Facilities": "groups.facilities",
  Environment: "groups.environment",
};
window.bandulanLayers.forEach((meta) => {
  meta.labelKey = `layers.${meta.id}`;
  meta.categoryKey = `category.${meta.id}`;
  meta.groupKey = groupKeys[meta.group];
});
