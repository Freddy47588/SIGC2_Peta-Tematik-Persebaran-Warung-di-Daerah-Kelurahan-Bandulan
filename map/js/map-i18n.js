/* global map */
"use strict";

// Translate the bundled controls at their presentation boundary, preserving
// measurement geometry, progress, event handlers, and third-party source files.
(() => {
  const { t, bind, translate } = window.BandulanI18n;
  const measureControl = document.querySelector(".leaflet-control-measure");
  const unitText = new WeakMap();
  const headingKeys = ["measure.title", "measure.lastPoint", "measure.area", "measure.pathDistance", "measure.point", "measure.lineResult", "measure.areaResult"];
  const unitKeys = ["measure.sqmeters", "measure.kilometers", "measure.hectares", "measure.meters", "measure.perimeter"];

  function translateMeasurement(root) {
    const labels = {
      ".js-start": "measure.create",
      ".js-cancel": "measure.cancel",
      ".js-finish": "measure.finish",
      ".js-starthelp": "measure.help",
      ".js-deletemarkup": "measure.delete",
    };
    Object.entries(labels).forEach(([selector, key]) => {
      root.querySelectorAll(selector).forEach((node) => bind(node, key));
    });
    root.querySelectorAll("h3, .heading").forEach((node) => {
      const key = node.dataset.i18n || headingKeys.find((candidate) =>
        ["id", "en"].some((language) => t(candidate, {}, language) === node.textContent.trim()));
      if (key) bind(node, key);
    });
    const resultKey = root.querySelector("h3")?.dataset.i18n;
    const zoomKey = { "measure.point": "measure.centerPoint", "measure.lineResult": "measure.centerLine", "measure.areaResult": "measure.centerArea" }[resultKey];
    if (zoomKey) root.querySelectorAll(".js-zoomto").forEach((node) => bind(node, zoomKey));

    // Only measurement-generated text is visited; source feature values and
    // coordinates are left intact. Retain canonical text for reversible switches.
    const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT);
    while (walker.nextNode()) {
      const node = walker.currentNode;
      if (node.parentElement.closest("[data-i18n]")) continue;
      const previous = unitText.get(node);
      const original = previous && previous.rendered === node.nodeValue ? previous.original : node.nodeValue;
      let rendered = original;
      unitKeys.forEach((key) => {
        const token = t(key, {}, "en");
        rendered = rendered.replace(new RegExp("\\b" + token + "\\b", "g"), t(key));
      });
      unitText.set(node, { original, rendered });
      if (node.nodeValue !== rendered) node.nodeValue = rendered;
    }
  }

  function translateAttribution() {
    const attribution = document.querySelector(".leaflet-control-attribution");
    attribution.querySelectorAll('a[href="https://www.openstreetmap.org/copyright"]').forEach((node) => bind(node, "attribution.osm"));
    attribution.querySelectorAll('a[href="https://leafletjs.com"]').forEach((node) => bind(node, "map.leafletTitle", {}, "title"));
  }

  function translatePopup(popup) {
    const element = popup.getElement();
    if (!element) return;
    const close = element.querySelector(".leaflet-popup-close-button");
    if (close) {
      bind(close, "map.closePopup", {}, "aria-label");
      bind(close, "map.closePopup", {}, "title");
    }
    if (element.classList.contains("leaflet-measure-resultpopup")) translateMeasurement(element);
  }

  ["in", "out"].forEach((direction) => {
    const button = document.querySelector(".leaflet-control-zoom-" + direction);
    const key = direction === "in" ? "map.zoomIn" : "map.zoomOut";
    bind(button, key, {}, "title");
    bind(button, key, {}, "aria-label");
  });
  translateMeasurement(measureControl);
  translateAttribution();
  new MutationObserver(() => translateMeasurement(measureControl)).observe(measureControl, { childList: true, subtree: true, characterData: true });
  new MutationObserver(translateAttribution).observe(document.querySelector(".leaflet-control-attribution"), { childList: true, subtree: true });
  map.on("popupopen", (event) => translatePopup(event.popup));
  window.addEventListener("languagechange", () => {
    translateMeasurement(measureControl);
    document.querySelectorAll(".leaflet-measure-resultpopup").forEach(translateMeasurement);
    map.eachLayer((layer) => {
      if (layer.isPopupOpen?.()) translatePopup(layer.getPopup());
    });
    translateAttribution();
    translate(measureControl);
  });
})();
