/* global L, map, bandulanLayers, bandulanFields, layer_OpenStreetMap_0,
          layer_LokasiWarung_11, layer_BatasKelurahan_1, layer_JalanDesa_10,
          highlightFeature */
"use strict";

(() => {
  const sidebar = document.getElementById("map-sidebar");
  const backdrop = document.getElementById("sidebar-backdrop");
  const layersButton = document.getElementById("layers-toggle");
  const searchButton = document.getElementById("search-toggle");
  const searchInput = document.getElementById("warung-search");
  const results = document.getElementById("search-results");
  const summary = document.getElementById("search-summary");
  const mobile = window.matchMedia("(max-width: 700px)");
  const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
  const isPreview = new URLSearchParams(location.search).has("preview");
  const status = document.getElementById("map-status");
  let drawerOpener = layersButton;
  let statusTimeout;

  function announce(message, persistent = false) {
    clearTimeout(statusTimeout);
    status.textContent = message;
    status.hidden = false;
    if (!persistent) statusTimeout = setTimeout(() => { status.hidden = true; }, 6500);
  }

  function setSidebar(open, focus = false) {
    sidebar.hidden = !open;
    layersButton.setAttribute("aria-expanded", String(open));
    document.body.classList.toggle("sidebar-hidden", !open);
    const modal = open && mobile.matches;
    backdrop.hidden = !modal;
    document.getElementById("map").inert = modal;
    if (modal) {
      sidebar.setAttribute("role", "dialog");
      sidebar.setAttribute("aria-modal", "true");
    } else {
      sidebar.removeAttribute("role");
      sidebar.removeAttribute("aria-modal");
    }
    requestAnimationFrame(() => map.invalidateSize({ pan: false }));
    if (focus) {
      if (open) document.getElementById("sidebar-close").focus();
      else drawerOpener.focus();
    }
  }

  layersButton.addEventListener("click", () => {
    drawerOpener = layersButton;
    setSidebar(sidebar.hidden, true);
  });
  document.getElementById("sidebar-close").addEventListener("click", () => setSidebar(false, true));
  backdrop.addEventListener("click", () => setSidebar(false, true));
  searchButton.addEventListener("click", () => {
    drawerOpener = searchButton;
    setSidebar(true);
    searchInput.focus();
    searchInput.scrollIntoView({ block: "nearest" });
  });
  document.querySelector(".skip-link").addEventListener("click", (event) => {
    event.preventDefault();
    drawerOpener = searchButton;
    setSidebar(true);
    searchInput.focus();
  });
  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && !sidebar.hidden) {
      setSidebar(false, true);
    }
    if (event.key !== "Tab" || sidebar.hidden || !mobile.matches) return;
    const focusable = [...sidebar.querySelectorAll("a, button, input")].filter((node) => !node.disabled && node.getClientRects().length);
    const first = focusable[0];
    const last = focusable[focusable.length - 1];
    if (event.shiftKey && (document.activeElement === first || !sidebar.contains(document.activeElement))) {
      event.preventDefault();
      last.focus();
    } else if (!event.shiftKey && (document.activeElement === last || !sidebar.contains(document.activeElement))) {
      event.preventDefault();
      first.focus();
    }
  });
  mobile.addEventListener("change", () => {
    const hadFocus = sidebar.contains(document.activeElement);
    setSidebar(!mobile.matches && !isPreview);
    if (sidebar.hidden && hadFocus) layersButton.focus();
  });
  setSidebar(!mobile.matches && !isPreview);

  const numericFields = new Set(["LuasHektar", "LuasMeter", "PanjangM", "PanjangKM"]);
  const numberFormat = new Intl.NumberFormat("en", { maximumFractionDigits: 3 });
  const hasValue = (value) => value !== null && value !== undefined && String(value).trim() !== "";

  // Construct popup content as text nodes so dataset attributes cannot become HTML.
  function popupContent(feature, meta) {
    const properties = feature.properties || {};
    const card = document.createElement("article");
    card.className = "feature-popup";
    const category = document.createElement("div");
    category.className = "feature-category";
    category.textContent = meta.category;
    const heading = document.createElement("h2");
    const nameKey = hasValue(properties.Lokasi) ? "Lokasi" : hasValue(properties.Nama) ? "Nama" : null;
    heading.textContent = nameKey ? properties[nameKey] : meta.category;
    card.append(category, heading);
    const list = document.createElement("dl");
    Object.entries(properties).forEach(([key, value]) => {
      if (!hasValue(value) || key === nameKey) return;
      const label = document.createElement("dt");
      label.textContent = bandulanFields[key] || key;
      const detail = document.createElement("dd");
      detail.textContent = numericFields.has(key) && Number.isFinite(Number(value)) ? numberFormat.format(Number(value)) : String(value);
      list.append(label, detail);
    });
    if (list.childElementCount) card.append(list);
    return card;
  }

  const checkboxes = new Map();
  const groupContainer = document.getElementById("layer-groups");
  const groups = new Map();
  bandulanLayers.forEach((meta) => {
    const style = { stroke: true, opacity: 1, lineCap: "round", lineJoin: "round", ...meta.style };
    meta.layer.options.style = () => style;
    meta.layer.setStyle(style);
    meta.layer.eachLayer((featureLayer) => {
      featureLayer.off("mouseover", highlightFeature);
      featureLayer.off("mouseout");
      featureLayer.off("popupopen");
      featureLayer.unbindPopup();
      featureLayer.bindPopup(() => popupContent(featureLayer.feature, meta), { maxWidth: 300, maxHeight: 320, autoPanPadding: [24, 24] });
      featureLayer.on("mouseover", () => featureLayer.setStyle({ weight: (style.weight || 1) + 1 }));
      featureLayer.on("mouseout", () => meta.layer.resetStyle(featureLayer));
      if (meta.id === "warung") {
        const accessibleMarker = () => {
          const element = featureLayer.getElement();
          if (!element) return;
          element.setAttribute("tabindex", "0");
          element.setAttribute("role", "button");
          element.setAttribute("aria-label", `View ${featureLayer.feature.properties.Lokasi}`);
          element.onkeydown = (event) => {
            if (event.key === "Enter" || event.key === " ") {
              event.preventDefault();
              event.stopPropagation();
              featureLayer.openPopup();
            }
          };
        };
        featureLayer.on("add", accessibleMarker);
        accessibleMarker();
      }
    });

    if (!groups.has(meta.group)) {
      const fieldset = document.createElement("fieldset");
      fieldset.className = "layer-fieldset";
      const legend = document.createElement("legend");
      legend.textContent = meta.group;
      fieldset.append(legend);
      groupContainer.append(fieldset);
      groups.set(meta.group, fieldset);
    }
    const row = document.createElement("label");
    row.className = "layer-row";
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.id = `layer-${meta.id}`;
    checkbox.checked = map.hasLayer(meta.layer);
    checkbox.setAttribute("aria-label", meta.label);
    const symbol = document.createElement("span");
    symbol.className = `layer-symbol ${meta.symbol || "area"}`;
    symbol.style.backgroundColor = meta.color;
    symbol.setAttribute("aria-hidden", "true");
    const name = document.createElement("span");
    name.textContent = meta.label;
    const count = document.createElement("span");
    count.className = "layer-count";
    count.textContent = meta.layer.getLayers().length;
    count.setAttribute("aria-label", `${count.textContent} features`);
    row.append(checkbox, symbol, name, count);
    groups.get(meta.group).append(row);
    checkboxes.set(meta.layer, checkbox);
    checkbox.addEventListener("change", () => {
      if (checkbox.checked) map.addLayer(meta.layer);
      else map.removeLayer(meta.layer);
    });
  });
  // Draw the boundary above area fills while keeping business markers foremost.
  map.getPane("pane_BatasKelurahan_1").style.zIndex = 410;
  const basemapToggle = document.getElementById("basemap-toggle");
  basemapToggle.addEventListener("change", () => {
    if (basemapToggle.checked) map.addLayer(layer_OpenStreetMap_0);
    else map.removeLayer(layer_OpenStreetMap_0);
  });
  function syncLayers() {
    let active = 0;
    checkboxes.forEach((checkbox, layer) => {
      checkbox.checked = map.hasLayer(layer);
      if (checkbox.checked) active++;
    });
    document.getElementById("active-count").textContent = `${active} active`;
    basemapToggle.checked = map.hasLayer(layer_OpenStreetMap_0);
  }
  map.on("layeradd layerremove", syncLayers);
  syncLayers();
  const warungs = layer_LokasiWarung_11.getLayers();
  document.getElementById("warung-count").textContent = warungs.length;
  document.getElementById("layer-count").textContent = bandulanLayers.length;

  function selectWarung(layer) {
    if (!map.hasLayer(layer_LokasiWarung_11)) map.addLayer(layer_LokasiWarung_11);
    if (mobile.matches) setSidebar(false);
    map.invalidateSize({ pan: false });
    map.setView(layer.getLatLng(), 17, { animate: false });
    layer.openPopup();
    const close = layer.getPopup().getElement().querySelector(".leaflet-popup-close-button");
    if (close) close.focus({ preventScroll: true });
  }
  function searchWarungs() {
    const query = searchInput.value.trim().toLocaleLowerCase();
    results.replaceChildren();
    results.hidden = !query;
    if (!query) {
      summary.textContent = `Search the ${warungs.length} mapped locations.`;
      return;
    }
    const matches = warungs.filter((layer) => {
      const properties = layer.feature.properties;
      return `${properties.Lokasi || ""} ${properties.Alamat || ""}`.toLocaleLowerCase().includes(query);
    });
    summary.textContent = matches.length ? `${matches.length} ${matches.length === 1 ? "location" : "locations"} found. Select a result to view it.` : "No locations found. Try a different name or address.";
    matches.forEach((layer) => {
      const item = document.createElement("li");
      const button = document.createElement("button");
      button.type = "button";
      button.textContent = layer.feature.properties.Lokasi;
      const address = document.createElement("small");
      address.textContent = layer.feature.properties.Alamat;
      button.append(address);
      button.addEventListener("click", () => selectWarung(layer));
      item.append(button);
      results.append(item);
    });
  }
  searchInput.addEventListener("input", searchWarungs);
  searchInput.addEventListener("keydown", (event) => {
    if (event.key === "ArrowDown" || event.key === "Enter") {
      const first = results.querySelector("button");
      if (first) { event.preventDefault(); first.focus(); }
    }
  });

  const initialHash = location.hash;
  function resetView() {
    map.fitBounds(layer_BatasKelurahan_1.getBounds(), { padding: [35, 35], animate: !reducedMotion.matches, maxZoom: 16 });
  }
  const ResetControl = L.Control.extend({
    options: { position: "topleft" },
    onAdd() {
      const container = L.DomUtil.create("div", "leaflet-bar map-reset-control");
      const button = L.DomUtil.create("button", "", container);
      button.type = "button";
      button.setAttribute("aria-label", "Reset map view");
      button.title = "Reset map view";
      button.innerHTML = '<svg class="icon" aria-hidden="true"><use href="../assets/icons.svg#reset"/></svg>';
      L.DomEvent.disableClickPropagation(container);
      button.addEventListener("click", resetView);
      return container;
    },
  });
  new ResetControl().addTo(map);
  L.control.scale({ imperial: false, position: "bottomleft" }).addTo(map);
  if (!initialHash) resetView();
  function syncLabels() {
    document.getElementById("map").classList.toggle("labels-hidden", map.getZoom() < 16);
  }
  layer_JalanDesa_10.eachLayer((layer) => {
    if (layer.getTooltip()) {
      const label = document.createElement("span");
      label.textContent = layer.feature.properties.Nama || "";
      layer.setTooltipContent(label);
    }
  });
  map.on("zoomend", syncLabels);
  syncLabels();

  const locateButton = document.getElementById("locate-button");
  let userMarker;
  let accuracyCircle;
  locateButton.addEventListener("click", () => {
    if (!navigator.geolocation) {
      announce("Location is not supported by this browser.");
      return;
    }
    locateButton.disabled = true;
    announce("Finding your location…", true);
    map.locate({ setView: false, enableHighAccuracy: true, timeout: 12000, maximumAge: 60000 });
  });
  map.on("locationfound", (event) => {
    locateButton.disabled = false;
    if (userMarker) map.removeLayer(userMarker);
    if (accuracyCircle) map.removeLayer(accuracyCircle);
    accuracyCircle = L.circle(event.latlng, { radius: event.accuracy, color: "#347eaa", weight: 1, fillOpacity: .08, interactive: false }).addTo(map);
    userMarker = L.circleMarker(event.latlng, { radius: 7, color: "#fff", weight: 2, fillColor: "#347eaa", fillOpacity: 1 }).addTo(map).bindPopup("Your approximate location");
    map.setView(event.latlng, 16, { animate: !reducedMotion.matches });
    announce(layer_BatasKelurahan_1.getBounds().contains(event.latlng) ? "Location found. The blue circle shows estimated accuracy." : "Your location is outside the mapped area. Use Reset map view to return to Bandulan.");
  });
  map.on("locationerror", (event) => {
    locateButton.disabled = false;
    announce(event.code === 1 ? "Location permission was denied. You can still explore the map." : "Your location could not be found. Please try again.");
  });

  const fullscreenButton = document.getElementById("fullscreen-button");
  fullscreenButton.hidden = !document.fullscreenEnabled;
  fullscreenButton.addEventListener("click", async () => {
    try {
      if (document.fullscreenElement) await document.exitFullscreen();
      else await document.documentElement.requestFullscreen();
    } catch {
      announce("Fullscreen is unavailable in this view. Open the full map to continue.");
    }
  });
  document.addEventListener("fullscreenchange", () => {
    fullscreenButton.setAttribute("aria-label", document.fullscreenElement ? "Exit fullscreen" : "Enter fullscreen");
    map.invalidateSize({ pan: false });
  });

  const measureToggle = document.querySelector(".leaflet-control-measure-toggle");
  measureToggle.setAttribute("aria-label", "Measure distance or area");
  measureToggle.title = "Measure distance or area";
  let tileErrorReported = false;
  layer_OpenStreetMap_0.on("tileerror", () => {
    if (!tileErrorReported) {
      announce("Some basemap tiles could not load. Your spatial layers are still available.");
      tileErrorReported = true;
    }
  });
})();
