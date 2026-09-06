"use strict";

// Shared presentation strings; geographic source values are never translated.
(() => {
  const messages = {
    "language.label": {
      "id": "Bahasa antarmuka",
      "en": "Interface language"
    },
    "language.id": {
      "id": "Gunakan Bahasa Indonesia",
      "en": "Use Indonesian"
    },
    "language.en": {
      "id": "Gunakan Bahasa Inggris",
      "en": "Use English"
    },
    "page.landingTitle": {
      "id": "Bandulan Warung GIS — Pemetaan Usaha Lokal",
      "en": "Bandulan Warung GIS — Local Business Mapping"
    },
    "page.mapTitle": {
      "id": "Peta Interaktif — Bandulan Warung GIS",
      "en": "Interactive Map — Bandulan Warung GIS"
    },
    "page.landingDescription": {
      "id": "Jelajahi lokasi warung, jalan, dan fitur geografis di Bandulan, Malang melalui WebGIS interaktif berbasis QGIS dan Leaflet.",
      "en": "Explore local warung locations, roads, and geographic features in Bandulan, Malang through an interactive WebGIS built with QGIS and Leaflet."
    },
    "page.mapDescription": {
      "id": "Jelajahi lokasi warung dan sebelas lapisan geografis di Bandulan, Malang.",
      "en": "Explore warung locations and eleven geographic layers in Bandulan, Malang."
    },
    "nav.skip": {
      "id": "Lewati ke konten",
      "en": "Skip to content"
    },
    "nav.home": {
      "id": "Beranda Bandulan Warung GIS",
      "en": "Bandulan Warung GIS home"
    },
    "nav.backHome": {
      "id": "Kembali ke beranda Bandulan Warung GIS",
      "en": "Back to Bandulan Warung GIS home"
    },
    "nav.main": {
      "id": "Navigasi utama",
      "en": "Main navigation"
    },
    "nav.mobile": {
      "id": "Navigasi seluler",
      "en": "Mobile navigation"
    },
    "nav.toggle": {
      "id": "Buka atau tutup navigasi",
      "en": "Toggle navigation"
    },
    "nav.overview": {
      "id": "Tentang Proyek",
      "en": "Overview"
    },
    "nav.features": {
      "id": "Fitur",
      "en": "Features"
    },
    "nav.layers": {
      "id": "Lapisan Data",
      "en": "Data layers"
    },
    "nav.workflow": {
      "id": "Alur Kerja",
      "en": "Workflow"
    },
    "cta.map": {
      "id": "Buka Peta",
      "en": "Open map"
    },
    "cta.explore": {
      "id": "Jelajahi Peta Interaktif",
      "en": "Explore Interactive Map"
    },
    "cta.source": {
      "id": "Lihat di GitHub",
      "en": "View on GitHub"
    },
    "cta.exploreShort": {
      "id": "Jelajahi peta",
      "en": "Explore map"
    },
    "cta.fullMap": {
      "id": "Buka peta lengkap",
      "en": "Open full map"
    },
    "cta.data": {
      "id": "Lihat data",
      "en": "Browse the data"
    },
    "cta.layout": {
      "id": "Lihat tata letak lengkap",
      "en": "View full layout"
    },
    "hero.subtitleIntro": {
      "id": "WebGIS Interaktif untuk",
      "en": "Interactive WebGIS for"
    },
    "hero.subtitleSubject": {
      "id": "Pemetaan Usaha Lokal",
      "en": "Local Business Mapping"
    },
    "hero.description": {
      "id": "Kenali tempat-tempat yang menggerakkan kehidupan warga. Jelajahi warung lokal beserta jalan, bangunan, dan ruang hijau di sekitarnya.",
      "en": "A closer look at the places that keep a neighborhood moving. Explore local warungs and the roads, buildings, and green spaces around them."
    },
    "hero.builtWith": {
      "id": "Dibuat dengan QGIS & Leaflet",
      "en": "Built with QGIS & Leaflet"
    },
    "hero.basemap": {
      "id": "Peta dasar OpenStreetMap",
      "en": "OpenStreetMap basemap"
    },
    "hero.distribution": {
      "id": "Persebaran warung",
      "en": "Warung distribution"
    },
    "hero.previewLink": {
      "id": "Jelajahi peta persebaran warung Bandulan",
      "en": "Explore the Bandulan distribution map"
    },
    "hero.previewAlt": {
      "id": "Peta Bandulan dengan penanda lokasi warung, jalan, dan batas kelurahan",
      "en": "Map of Bandulan with highlighted warung locations, roads, and an administrative boundary"
    },
    "hero.previewStats": {
      "id": "10 lokasi · 11 lapisan spasial",
      "en": "10 locations · 11 spatial layers"
    },
    "stats.label": {
      "id": "Ringkasan dataset proyek",
      "en": "Bundled dataset highlights"
    },
    "stats.warungs": {
      "id": "Lokasi warung terpetakan",
      "en": "Mapped warung locations"
    },
    "stats.layers": {
      "id": "Lapisan data spasial",
      "en": "Spatial data layers"
    },
    "stats.roads": {
      "id": "Fitur jalan",
      "en": "Road features"
    },
    "stats.neighborhood": {
      "id": "Kelurahan untuk dijelajahi",
      "en": "Neighborhood to explore"
    },
    "preview.eyebrow": {
      "id": "Jelajahi lingkungan sekitar",
      "en": "Explore the neighborhood"
    },
    "preview.title": {
      "id": "Setiap lokasi memiliki konteks.",
      "en": "Every location has a context."
    },
    "preview.description": {
      "id": "Geser, perbesar, dan pilih warung. Aktifkan lapisan yang ingin Anda lihat.",
      "en": "Pan, zoom, and select a warung. Switch on the layers that matter to you."
    },
    "preview.frame": {
      "id": "Peta warung Bandulan interaktif",
      "en": "Interactive Bandulan warung map"
    },
    "preview.note": {
      "id": "Gunakan Cari untuk menemukan warung berdasarkan nama, atau Lapisan untuk menjelajahi kondisi geografis di sekitarnya.",
      "en": "Use Search to find a warung by name, or Layers to explore the surrounding geography."
    },
    "overview.eyebrow": {
      "id": "Tentang Proyek",
      "en": "Project overview"
    },
    "overview.titleIntro": {
      "id": "Usaha lokal.",
      "en": "Local businesses."
    },
    "overview.titleSubject": {
      "id": "Dalam perspektif spasial.",
      "en": "A spatial perspective."
    },
    "overview.lead": {
      "id": "Warung adalah bagian dari keseharian warga Bandulan.",
      "en": "Warungs are part of everyday life in Bandulan."
    },
    "overview.description": {
      "id": "WebGIS ini memadukan lokasi warung dengan jalan, penggunaan lahan, dan fasilitas umum di sekitarnya.",
      "en": "This WebGIS brings their locations together with the neighborhood's roads, land use, and public facilities."
    },
    "overview.context": {
      "id": "Berfokus pada Kelurahan Bandulan di Kecamatan Sukun, Malang, proyek ini membawa alur pemetaan QGIS ke dalam pengalaman interaktif di peramban. Jelajahi posisi setiap usaha dalam lingkungan perkotaan di sekitarnya.",
      "en": "Centered on Kelurahan Bandulan in Kecamatan Sukun, Malang, the project turns a QGIS mapping workflow into an interactive browser experience. Explore how each business sits within the surrounding urban landscape."
    },
    "features.eyebrow": {
      "id": "Dirancang untuk eksplorasi",
      "en": "Made for exploration"
    },
    "features.title": {
      "id": "Dari sebuah titik ke gambaran wilayah.",
      "en": "From a point to the bigger picture."
    },
    "features.findTitle": {
      "id": "Temukan warung lokal",
      "en": "Find a local warung"
    },
    "features.findDescription": {
      "id": "Cari sepuluh lokasi terpetakan berdasarkan nama. Pilih hasil pencarian atau penanda peta untuk melihat nama dan alamatnya.",
      "en": "Search ten mapped locations by name. Select a result or a map marker to see its name and address."
    },
    "features.layersTitle": {
      "id": "Pilih konteks wilayah",
      "en": "Choose your context"
    },
    "features.layersDescription": {
      "id": "Jelajahi sebelas lapisan berdasarkan kelompoknya, mulai dari jalan desa dan pemukiman hingga sekolah dan sungai.",
      "en": "Explore eleven layers grouped by purpose, from village roads and residential areas to schools and rivers."
    },
    "features.measureTitle": {
      "id": "Jelajahi dan ukur",
      "en": "Explore and measure"
    },
    "features.measureDescription": {
      "id": "Ukur jarak dan luas, kembalikan tampilan peta, atau temukan posisi Anda untuk memulai penjelajahan.",
      "en": "Measure distances and areas, reset the map view, or locate yourself to orient your exploration."
    },
    "data.eyebrow": {
      "id": "Data spasial",
      "en": "Spatial data"
    },
    "data.title": {
      "id": "Satu kelurahan. Sebelas lapisan.",
      "en": "One neighborhood. Eleven layers."
    },
    "data.description": {
      "id": "Jumlah fitur berdasarkan dataset yang disertakan dalam proyek.",
      "en": "Feature counts from the bundled project datasets."
    },
    "groups.business": {
      "id": "Usaha",
      "en": "Business"
    },
    "groups.administrative": {
      "id": "Administrasi",
      "en": "Administrative"
    },
    "groups.infrastructure": {
      "id": "Infrastruktur",
      "en": "Infrastructure"
    },
    "groups.urban": {
      "id": "Fitur Perkotaan",
      "en": "Urban features"
    },
    "groups.facilities": {
      "id": "Fasilitas Umum",
      "en": "Public facilities"
    },
    "groups.environment": {
      "id": "Lingkungan",
      "en": "Environment"
    },
    "layers.warung": {
      "id": "Lokasi Warung",
      "en": "Warung Locations"
    },
    "layers.boundary": {
      "id": "Batas Kelurahan",
      "en": "Administrative Boundary"
    },
    "layers.village-roads": {
      "id": "Jalan Desa",
      "en": "Village Roads"
    },
    "layers.residential-roads": {
      "id": "Jalan Perumahan",
      "en": "Residential Roads"
    },
    "layers.alleys": {
      "id": "Jalan Gang",
      "en": "Alleys"
    },
    "layers.buildings": {
      "id": "Bangunan",
      "en": "Buildings"
    },
    "layers.residential": {
      "id": "Pemukiman",
      "en": "Residential Areas"
    },
    "layers.green": {
      "id": "Lahan Terbuka Hijau",
      "en": "Green Spaces"
    },
    "layers.schools": {
      "id": "Sekolah",
      "en": "Schools"
    },
    "layers.factories": {
      "id": "Pabrik",
      "en": "Factories"
    },
    "layers.rivers": {
      "id": "Sungai",
      "en": "Rivers"
    },
    "stack.eyebrow": {
      "id": "Teknologi",
      "en": "Technology stack"
    },
    "stack.title": {
      "id": "Dibangun dengan perangkat geospasial yang tepercaya.",
      "en": "Built on familiar geospatial tools."
    },
    "stack.description": {
      "id": "QGIS untuk persiapan data. Leaflet untuk interaksi. Antarmuka web statis yang ringan.",
      "en": "QGIS for preparation. Leaflet for interaction. A lightweight, static frontend for the web."
    },
    "workflow.eyebrow": {
      "id": "Alur proyek",
      "en": "Project workflow"
    },
    "workflow.title": {
      "id": "Dari data spasial ke peramban.",
      "en": "From spatial data to the browser."
    },
    "workflow.prepare": {
      "id": "Siapkan",
      "en": "Prepare"
    },
    "workflow.prepareDescription": {
      "id": "Susun fitur geografis dan buat tata letak peta tematik di QGIS.",
      "en": "Organize geographic features and create the thematic layout in QGIS."
    },
    "workflow.export": {
      "id": "Ekspor",
      "en": "Export"
    },
    "workflow.exportDescription": {
      "id": "Ekspor lapisan spasial menjadi peta web Leaflet menggunakan qgis2web.",
      "en": "Publish the spatial layers as a Leaflet web map with qgis2web."
    },
    "workflow.refine": {
      "id": "Sempurnakan",
      "en": "Refine"
    },
    "workflow.refineDescription": {
      "id": "Tambahkan antarmuka responsif, kelompok lapisan, dan kartu informasi yang mudah dibaca.",
      "en": "Add a responsive interface, grouped layers, and readable feature cards."
    },
    "workflow.publish": {
      "id": "Publikasikan",
      "en": "Publish"
    },
    "workflow.publishDescription": {
      "id": "Sajikan proyek statis melalui GitHub Pages agar dapat dijelajahi di peramban.",
      "en": "Serve the static project on GitHub Pages for browser-based exploration."
    },
    "gallery.eyebrow": {
      "id": "Di balik peta",
      "en": "Behind the map"
    },
    "gallery.titleIntro": {
      "id": "Tampilan kartografi",
      "en": "The original"
    },
    "gallery.titleSubject": {
      "id": "dari proyek awal.",
      "en": "cartographic view."
    },
    "gallery.description": {
      "id": "Tata letak QGIS menyatukan wilayah kajian, legenda, dan persebaran warung dalam satu komposisi peta.",
      "en": "The QGIS layout brings the study area, legend, and warung distribution together in a single map composition."
    },
    "gallery.alt": {
      "id": "Tata letak peta tematik QGIS asli tentang persebaran warung di Kelurahan Bandulan",
      "en": "Original QGIS thematic map layout of warung distribution in Kelurahan Bandulan"
    },
    "gallery.caption": {
      "id": "Tata letak proyek awal · QGIS",
      "en": "Original project layout · QGIS"
    },
    "final.eyebrow": {
      "id": "Lihat lebih dekat",
      "en": "Take a closer look"
    },
    "final.title": {
      "id": "Jelajahi Bandulan, lapis demi lapis.",
      "en": "Explore Bandulan, layer by layer."
    },
    "final.description": {
      "id": "Mulai dari satu warung. Kenali lingkungan di sekitarnya.",
      "en": "Start with a warung. Discover the neighborhood around it."
    },
    "footer.description": {
      "id": "Bandulan Warung GIS · Proyek portofolio geospasial",
      "en": "Bandulan Warung GIS · A geospatial portfolio project"
    },
    "attribution.osm": {
      "id": "Kontributor OpenStreetMap",
      "en": "OpenStreetMap contributors"
    },
    "map.skip": {
      "id": "Lewati ke pencarian warung",
      "en": "Skip to warung search"
    },
    "map.subtitle": {
      "id": "Peta Persebaran Spasial Interaktif",
      "en": "Interactive Spatial Distribution Map"
    },
    "map.actions": {
      "id": "Kontrol peta",
      "en": "Map actions"
    },
    "map.layers": {
      "id": "Lapisan",
      "en": "Layers"
    },
    "map.search": {
      "id": "Cari",
      "en": "Search"
    },
    "map.searchAction": {
      "id": "Cari warung",
      "en": "Search warungs"
    },
    "map.locate": {
      "id": "Lokasi",
      "en": "Locate"
    },
    "map.locateAction": {
      "id": "Temukan lokasi saya",
      "en": "Locate me"
    },
    "map.fullscreenEnter": {
      "id": "Layar penuh",
      "en": "Enter fullscreen"
    },
    "map.fullscreenExit": {
      "id": "Keluar dari layar penuh",
      "en": "Exit fullscreen"
    },
    "map.sidebarLabel": {
      "id": "Ringkasan peta, pencarian, dan lapisan",
      "en": "Map overview, search, and layers"
    },
    "map.explore": {
      "id": "Jelajahi Bandulan",
      "en": "Explore Bandulan"
    },
    "map.sidebarTitle": {
      "id": "Lapisan wilayah",
      "en": "Neighborhood layers"
    },
    "map.closeSidebar": {
      "id": "Tutup panel samping",
      "en": "Close sidebar"
    },
    "map.description": {
      "id": "Warung lokal dan kondisi geografis di sekitarnya di Bandulan, Malang.",
      "en": "Local warungs and the geography around them in Bandulan, Malang."
    },
    "map.warungCount": {
      "id": "lokasi warung",
      "en": "warung locations"
    },
    "map.layerCount": {
      "id": "lapisan spasial",
      "en": "spatial layers"
    },
    "search.label": {
      "id": "Temukan warung",
      "en": "Find a warung"
    },
    "search.placeholder": {
      "id": "Cari nama atau alamat",
      "en": "Search by name or address"
    },
    "search.resultsLabel": {
      "id": "Hasil pencarian warung",
      "en": "Warung search results"
    },
    "search.prompt": {
      "id": "Telusuri {count} lokasi yang dipetakan.",
      "en": "Search the {count} mapped locations."
    },
    "search.foundOne": {
      "id": "{count} lokasi ditemukan. Pilih hasil untuk melihatnya.",
      "en": "{count} location found. Select a result to view it."
    },
    "search.foundMany": {
      "id": "{count} lokasi ditemukan. Pilih hasil untuk melihatnya.",
      "en": "{count} locations found. Select a result to view it."
    },
    "search.empty": {
      "id": "Lokasi tidak ditemukan. Coba nama atau alamat lain.",
      "en": "No locations found. Try a different name or address."
    },
    "map.layersTitle": {
      "id": "Lapisan Peta",
      "en": "Map layers"
    },
    "map.activeCount": {
      "id": "{count} aktif",
      "en": "{count} active"
    },
    "map.featureCount": {
      "id": "{count} fitur",
      "en": "{count} features"
    },
    "map.basemap": {
      "id": "Peta dasar",
      "en": "Basemap"
    },
    "map.note": {
      "id": "Pilih fitur peta untuk melihat detail. Gunakan penggaris untuk mengukur jarak atau luas.",
      "en": "Select a map feature for details. Use the ruler to measure distance or area."
    },
    "map.closeDrawer": {
      "id": "Tutup panel lapisan",
      "en": "Close layer drawer"
    },
    "map.region": {
      "id": "Peta Bandulan interaktif",
      "en": "Interactive Bandulan map"
    },
    "map.noScript": {
      "id": "JavaScript diperlukan untuk menampilkan peta interaktif.",
      "en": "JavaScript is required to display the interactive map."
    },
    "map.staticLayout": {
      "id": "Lihat tata letak peta statis",
      "en": "View the static map layout"
    },
    "map.zoomIn": {
      "id": "Perbesar",
      "en": "Zoom in"
    },
    "map.zoomOut": {
      "id": "Perkecil",
      "en": "Zoom out"
    },
    "map.reset": {
      "id": "Kembalikan tampilan peta",
      "en": "Reset map view"
    },
    "map.viewWarung": {
      "id": "Lihat {name}",
      "en": "View {name}"
    },
    "map.closePopup": {
      "id": "Tutup informasi",
      "en": "Close popup"
    },
    "map.leafletTitle": {
      "id": "Pustaka JavaScript untuk peta interaktif",
      "en": "A JS library for interactive maps"
    },
    "popup.id": {
      "id": "ID Rekaman",
      "en": "Record ID"
    },
    "popup.FID": {
      "id": "ID Fitur",
      "en": "Feature ID"
    },
    "popup.Nama": {
      "id": "Nama",
      "en": "Name"
    },
    "popup.Lokasi": {
      "id": "Lokasi",
      "en": "Location"
    },
    "popup.Alamat": {
      "id": "Alamat",
      "en": "Address"
    },
    "popup.LuasHektar": {
      "id": "Luas (ha)",
      "en": "Area (ha)"
    },
    "popup.LuasMeter": {
      "id": "Luas (m²)",
      "en": "Area (m²)"
    },
    "popup.PanjangM": {
      "id": "Panjang (m)",
      "en": "Length (m)"
    },
    "popup.PanjangKM": {
      "id": "Panjang (km)",
      "en": "Length (km)"
    },
    "category.warung": {
      "id": "Warung",
      "en": "Warung"
    },
    "category.boundary": {
      "id": "Batas kelurahan",
      "en": "Administrative boundary"
    },
    "category.village-roads": {
      "id": "Jalan desa",
      "en": "Village road"
    },
    "category.residential-roads": {
      "id": "Jalan perumahan",
      "en": "Residential road"
    },
    "category.alleys": {
      "id": "Jalan gang",
      "en": "Alley"
    },
    "category.buildings": {
      "id": "Bangunan",
      "en": "Building"
    },
    "category.residential": {
      "id": "Pemukiman",
      "en": "Residential area"
    },
    "category.green": {
      "id": "Lahan terbuka hijau",
      "en": "Green space"
    },
    "category.schools": {
      "id": "Sekolah",
      "en": "School"
    },
    "category.factories": {
      "id": "Pabrik",
      "en": "Factory"
    },
    "category.rivers": {
      "id": "Sungai",
      "en": "River"
    },
    "status.locationUnsupported": {
      "id": "Peramban ini tidak mendukung pencarian lokasi.",
      "en": "Location is not supported by this browser."
    },
    "status.locating": {
      "id": "Mencari lokasi Anda…",
      "en": "Finding your location…"
    },
    "status.locationFound": {
      "id": "Lokasi ditemukan. Lingkaran biru menunjukkan perkiraan akurasi.",
      "en": "Location found. The blue circle shows estimated accuracy."
    },
    "status.locationOutside": {
      "id": "Lokasi Anda berada di luar wilayah peta. Gunakan Kembalikan tampilan peta untuk kembali ke Bandulan.",
      "en": "Your location is outside the mapped area. Use Reset map view to return to Bandulan."
    },
    "status.locationDenied": {
      "id": "Izin lokasi ditolak. Anda tetap dapat menjelajahi peta.",
      "en": "Location permission was denied. You can still explore the map."
    },
    "status.locationError": {
      "id": "Lokasi Anda tidak dapat ditemukan. Silakan coba lagi.",
      "en": "Your location could not be found. Please try again."
    },
    "status.fullscreenError": {
      "id": "Layar penuh tidak tersedia pada tampilan ini. Buka peta lengkap untuk melanjutkan.",
      "en": "Fullscreen is unavailable in this view. Open the full map to continue."
    },
    "status.tileError": {
      "id": "Sebagian ubin peta dasar tidak dapat dimuat. Lapisan spasial tetap tersedia.",
      "en": "Some basemap tiles could not load. Your spatial layers are still available."
    },
    "popup.userLocation": {
      "id": "Perkiraan lokasi Anda",
      "en": "Your approximate location"
    },
    "measure.toggle": {
      "id": "Ukur jarak atau luas",
      "en": "Measure distance or area"
    },
    "measure.title": {
      "id": "Ukur jarak dan luas",
      "en": "Measure distances and areas"
    },
    "measure.create": {
      "id": "Buat pengukuran baru",
      "en": "Create a new measurement"
    },
    "measure.help": {
      "id": "Mulai pengukuran dengan menambahkan titik pada peta",
      "en": "Start creating a measurement by adding points to the map"
    },
    "measure.finish": {
      "id": "Selesaikan pengukuran",
      "en": "Finish measurement"
    },
    "measure.lastPoint": {
      "id": "Titik terakhir",
      "en": "Last point"
    },
    "measure.area": {
      "id": "Luas",
      "en": "Area"
    },
    "measure.perimeter": {
      "id": "Keliling",
      "en": "Perimeter"
    },
    "measure.point": {
      "id": "Lokasi titik",
      "en": "Point location"
    },
    "measure.areaResult": {
      "id": "Pengukuran luas",
      "en": "Area measurement"
    },
    "measure.lineResult": {
      "id": "Pengukuran jarak",
      "en": "Linear measurement"
    },
    "measure.pathDistance": {
      "id": "Jarak lintasan",
      "en": "Path distance"
    },
    "measure.centerArea": {
      "id": "Pusatkan pada area ini",
      "en": "Center on this area"
    },
    "measure.centerLine": {
      "id": "Pusatkan pada garis ini",
      "en": "Center on this line"
    },
    "measure.centerPoint": {
      "id": "Pusatkan pada lokasi ini",
      "en": "Center on this location"
    },
    "measure.cancel": {
      "id": "Batal",
      "en": "Cancel"
    },
    "measure.delete": {
      "id": "Hapus",
      "en": "Delete"
    },
    "measure.meters": {
      "id": "Meter",
      "en": "Meters"
    },
    "measure.kilometers": {
      "id": "Kilometer",
      "en": "Kilometers"
    },
    "measure.sqmeters": {
      "id": "Meter Persegi",
      "en": "Sq Meters"
    },
    "measure.hectares": {
      "id": "Hektare",
      "en": "Hectares"
    }
  };

  const storageKey = "bandulan-language";
  const supported = ["id", "en"];
  let language = "id";
  try {
    const saved = localStorage.getItem(storageKey);
    if (supported.includes(saved)) language = saved;
  } catch { /* Keep the default when storage is unavailable. */ }

  function t(key, params = {}, locale = language) {
    const message = messages[key]?.[locale] ?? messages[key]?.id ?? key;
    return message.replace(/\{(\w+)\}/g, (match, name) => String(params[name] ?? match));
  }

  function translate(root = document) {
    const selector = "[data-i18n], [data-i18n-aria-label], [data-i18n-title], [data-i18n-alt], [data-i18n-placeholder], [data-i18n-content]";
    const nodes = [...root.querySelectorAll(selector)];
    if (root.matches?.(selector)) nodes.unshift(root);
    nodes.forEach((node) => {
      const params = JSON.parse(node.dataset.i18nParams || "{}");
      if (node.dataset.i18n && node.textContent !== t(node.dataset.i18n, params)) node.textContent = t(node.dataset.i18n, params);
      ["aria-label", "title", "alt", "placeholder", "content"].forEach((attribute) => {
        const key = node.getAttribute("data-i18n-" + attribute);
        if (key) node.setAttribute(attribute, t(key, params));
      });
    });
    document.documentElement.lang = language;
    document.querySelectorAll("[data-language]").forEach((button) => {
      button.setAttribute("aria-pressed", String(button.dataset.language === language));
    });
  }

  function bind(node, key, params = {}, attribute = null) {
    node.setAttribute(attribute ? "data-i18n-" + attribute : "data-i18n", key);
    node.dataset.i18nParams = JSON.stringify(params);
    if (attribute) node.setAttribute(attribute, t(key, params));
    else if (node.textContent !== t(key, params)) node.textContent = t(key, params);
    return node;
  }

  function setLanguage(next, persist = true) {
    if (!supported.includes(next)) return;
    language = next;
    if (persist) {
      try { localStorage.setItem(storageKey, language); } catch { /* The current page still switches. */ }
    }
    translate();
    window.dispatchEvent(new CustomEvent("languagechange", { detail: { language } }));
    // Synchronize the embedded preview even when browser storage is unavailable.
    document.querySelectorAll("iframe").forEach((frame) => {
      if (new URL(frame.src, location.href).origin === location.origin) {
        frame.contentWindow?.postMessage({ type: "bandulan-language", language }, location.origin);
      }
    });
  }

  window.BandulanI18n = { t, bind, translate, setLanguage, get language() { return language; } };
  document.documentElement.lang = language;
  document.addEventListener("click", (event) => {
    const button = event.target.closest("[data-language]");
    if (button) setLanguage(button.dataset.language);
  });
  window.addEventListener("storage", (event) => {
    if (event.key === storageKey || event.key === null) setLanguage(event.newValue || "id", false);
  });
  window.addEventListener("message", (event) => {
    if (event.origin !== location.origin || event.source !== window.parent || window.parent === window) return;
    if (event.data?.type === "bandulan-language") setLanguage(event.data.language, false);
  });
  document.addEventListener("DOMContentLoaded", () => {
    translate();
    document.querySelectorAll("iframe").forEach((frame) => {
      frame.addEventListener("load", () => {
        if (new URL(frame.src, location.href).origin === location.origin) {
          frame.contentWindow?.postMessage({ type: "bandulan-language", language }, location.origin);
        }
      });
    });
  });
})();
