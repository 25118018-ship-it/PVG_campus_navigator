(function () {
  "use strict";

  /* =========================================================
     1) PVG COET MAP PINS (latitude, longitude)
  ========================================================= */
  const PLACES = [
    { name: "PVG College Gate", lat: 18.489722, lng: 73.853583, emoji: "🚪" },
    { name: "Girls Hostel", lat: 18.489556, lng: 73.853528, emoji: "🏠" },
    { name: "Boys Hostel", lat: 18.489889, lng: 73.853306, emoji: "🏠" },
    { name: "Cycle Parking", lat: 18.489556, lng: 73.853222, emoji: "🚲" },
    { name: "Library & Workshop Building", lat: 18.489444, lng: 73.852111, emoji: "📚" },
    { name: "Muktangan Playground", lat: 18.490028, lng: 73.851472, emoji: "🏟️" },
    { name: "Muktangan English Medium School", lat: 18.489917, lng: 73.851917, emoji: "🏫" },
    { name: "MBA 2nd Building", lat: 18.490250, lng: 73.853361, emoji: "🏢" },
    { name: "MBA Building", lat: 18.490188, lng: 73.853063, emoji: "🏢" },
    { name: "FE Building", lat: 18.489888, lng: 73.853578, emoji: "🎓" },
    { name: "Main Building", lat: 18.489938, lng: 73.852438, emoji: "🏛️" }
  ];

  /* =========================================================
     2) MATCH CHATBOT / LOCATION TEXT TO MAPPED PINS
  ========================================================= */
  const BUILDINGS = [
    [/fe building|first year/i, "FE Building"],
    [/boys hostel/i, "Boys Hostel"],
    [/girls hostel|shadaygu|shatayu/i, "Girls Hostel"],
    [/main building|new building/i, "Main Building"],
    [/muktangan|playground/i, "Muktangan English Medium School"],
    [/auditorium|library|workshop/i, "Library & Workshop Building"],
    [/parking/i, "Cycle Parking"]
  ];

  const ARRIVED_M = 20;
  const WALK_M_PER_MIN = 80;

  const $ = id => document.getElementById(id);
  const panel = $("campusMapPanel");
  const fromSel = $("cmFrom");
  const toSel = $("cmTo");
  const goBtn = $("cmGo");
  const stopBtn = $("cmStop");
  const statusEl = $("cmStatus");
  const say = t => { if (statusEl) statusEl.textContent = t; };

  let map = null;
  let me = null;
  let route = null;
  let trail = null;
  let trailPts = [];
  let watchId = null;
  let dest = null;
  let destLL = null;
  let first = true;

  const routeStyle = {
    color: "#10233F",
    weight: 5,
    dashArray: "8 10"
  };

  /* Populate From & To dropdowns */
  if (fromSel && toSel) {
    fromSel.add(new Option("📍 My current location", "gps"));
    toSel.add(new Option("🎯 Select destination", ""));
    PLACES.forEach((p, i) => {
      fromSel.add(new Option(`${p.emoji || "📌"} ${p.name}`, i));
      toSel.add(new Option(`${p.emoji || "📌"} ${p.name}`, i));
    });
  }

  /* Haversine distance in meters between two [lat, lng] coordinates */
  const rad = x => (x * Math.PI) / 180;
  function dist(a, b) {
    const dLat = rad(b[0] - a[0]);
    const dLng = rad(b[1] - a[1]);
    const h =
      Math.sin(dLat / 2) ** 2 +
      Math.cos(rad(a[0])) * Math.cos(rad(b[0])) * Math.sin(dLng / 2) ** 2;
    return 2 * 6371000 * Math.asin(Math.sqrt(h));
  }

  function initMap() {
    if (map || typeof L === "undefined" || !$("campusMap")) return;

    map = L.map("campusMap").setView([18.4898, 73.8527], 18);
    L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
      maxZoom: 19,
      attribution: "© OpenStreetMap contributors"
    }).addTo(map);

    PLACES.forEach((p, i) => {
      L.circleMarker([p.lat, p.lng], {
        radius: 8,
        color: "#10233F",
        weight: 3,
        fillColor: "#C6981F",
        fillOpacity: 1
      })
        .addTo(map)
        .bindTooltip(`${p.emoji || "📌"} ${p.name}`)
        .on("click", () => {
          if (toSel) toSel.value = i;
          say(`🎯 Selected ${p.name}. Tap Start navigation.`);
        });
    });
  }

  function clearLayers() {
    [me, route, trail].forEach(layer => {
      if (layer && map) map.removeLayer(layer);
    });
    me = null;
    route = null;
    trail = null;
    trailPts = [];
  }

  function stop() {
    if (watchId !== null && navigator.geolocation) {
      navigator.geolocation.clearWatch(watchId);
    }
    watchId = null;
    if (goBtn) goBtn.disabled = false;
    if (stopBtn) stopBtn.disabled = true;
  }

  function start() {
    if (!toSel || toSel.value === "") {
      say("⚠️ Select a destination first.");
      return;
    }
    if (!navigator.geolocation) {
      say("⚠️ This browser can’t share your location.");
      return;
    }
    if (!map) initMap();

    stop();
    clearLayers();

    dest = PLACES[toSel.value];
    destLL = [dest.lat, dest.lng];
    first = true;

    trail = L.polyline([], { color: "#C6981F", weight: 5 }).addTo(map);

    if (fromSel && fromSel.value !== "gps") {
      const f = PLACES[fromSel.value];
      route = L.polyline([[f.lat, f.lng], destLL], routeStyle).addTo(map);
      map.fitBounds(route.getBounds(), { padding: [60, 60] });
      say(
        `📏 ${Math.round(dist([f.lat, f.lng], destLL))} m from ${f.name} to ${dest.name}. Waiting for your GPS location…`
      );
    } else {
      say("🛰️ Finding your live GPS location…");
    }

    watchId = navigator.geolocation.watchPosition(onPos, onErr, {
      enableHighAccuracy: true,
      maximumAge: 2000,
      timeout: 20000
    });

    if (goBtn) goBtn.disabled = true;
    if (stopBtn) stopBtn.disabled = false;
  }

  function onPos(pos) {
    if (!map) return;
    const here = [pos.coords.latitude, pos.coords.longitude];

    if (!me) {
      me = L.circleMarker(here, {
        radius: 9,
        color: "#fff",
        weight: 3,
        fillColor: "#1f6feb",
        fillOpacity: 1
      })
        .addTo(map)
        .bindTooltip("📍 You");
    } else {
      me.setLatLng(here);
    }

    trailPts.push(here);
    if (trail) trail.setLatLngs(trailPts);

    if (fromSel && fromSel.value === "gps") {
      if (route) map.removeLayer(route);
      route = L.polyline([here, destLL], routeStyle).addTo(map);
    }

    if (first) {
      map.fitBounds([here, destLL], { padding: [60, 60] });
      first = false;
    }

    const d = dist(here, destLL);
    if (d <= ARRIVED_M) {
      say(`🎉 You have arrived at ${dest.name}!`);
      stop();
      return;
    }

    const mins = Math.max(1, Math.round(d / WALK_M_PER_MIN));
    const weak =
      pos.coords.accuracy > 50
        ? ` ⚠️ GPS signal is weak (±${Math.round(pos.coords.accuracy)} m).`
        : "";
    say(`🚶 ${Math.round(d)} m to ${dest.name}, about ${mins} min walk.${weak}`);
  }

  function onErr(e) {
    const msg = {
      1: "🔒 Location is blocked. Allow location for this site in your browser settings, then try again.",
      2: "📡 Your location is not available. Move to an open area and try again.",
      3: "⏱️ Finding your location took too long. Move to an open area and try again."
    };
    say(msg[e.code] || "⚠️ Could not get your location.");
    stop();
  }

  function open(destName) {
    if (!panel) return;
    panel.classList.add("cm-open");
    panel.setAttribute("aria-hidden", "false");
    initMap();
    if (map) setTimeout(() => map.invalidateSize(), 60);

    if (destName && toSel) {
      const i = PLACES.findIndex(p => p.name === destName);
      if (i >= 0) toSel.value = i;
      say(`🧭 Destination set to ${destName}. Tap Start navigation when ready.`);
    } else {
      say("🗺️ Choose your destination, then tap Start navigation.");
    }
  }

  function close() {
    stop();
    if (!panel) return;
    panel.classList.remove("cm-open");
    panel.setAttribute("aria-hidden", "true");
  }

  function placeForBuilding(text) {
    const hit = BUILDINGS.find(b => b[0].test(text));
    return hit ? hit[1] : null;
  }

  if (goBtn) goBtn.addEventListener("click", start);
  if (stopBtn) stopBtn.addEventListener("click", () => { stop(); say("⏹️ Navigation stopped."); });
  if ($("campusMapBack")) $("campusMapBack").addEventListener("click", close);
  if ($("cbMapChip")) $("cbMapChip").addEventListener("click", () => open());

  /* Auto-attach "Navigate to ..." button on bot cards if not already present */
  const msgContainer = $("campusBotMessages");
  if (msgContainer) {
    new MutationObserver(mutations => {
      mutations.forEach(m => {
        m.addedNodes.forEach(node => {
          if (!(node instanceof HTMLElement) || !node.classList.contains("bot")) return;
          if (node.querySelector(".cb-nav-btn")) return;
          if (!node.querySelector(".cb-loc-name")) return;

          const place = placeForBuilding(node.textContent || "");
          if (!place) return;

          const btn = document.createElement("button");
          btn.type = "button";
          btn.className = "cb-nav-btn";
          btn.textContent = "🧭 Navigate to " + place;
          btn.addEventListener("click", () => open(place));
          node.appendChild(btn);
        });
      });
    }).observe(msgContainer, { childList: true });
  }

  window.CampusMap = { open, close, PLACES };
})();
