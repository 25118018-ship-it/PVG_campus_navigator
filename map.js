(function () {

  /* 1) Pin points (latitude, longitude) */
  const PLACES = [
    { name: "PVG College Gate", lat: 18.489722, lng: 73.853583 },
    { name: "Girls Hostel", lat: 18.489556, lng: 73.853528 },
    { name: "Boys Hostel", lat: 18.489889, lng: 73.853306 },
    { name: "Cycle Parking", lat: 18.489556, lng: 73.853222 },
    { name: "Library & Workshop Building", lat: 18.489444, lng: 73.852111 },
    { name: "Muktangan Playground", lat: 18.490028, lng: 73.851472 },
    { name: "Muktangan English Medium School", lat: 18.489917, lng: 73.851917 },
    { name: "MBA 2nd Building", lat: 18.490250, lng: 73.853361 },
    { name: "MBA Building", lat: 18.490188, lng: 73.853063 },
    { name: "FE Building", lat: 18.489888, lng: 73.853578 },
    { name: "Main Building", lat: 18.489938, lng: 73.852438 }
  ];

  /* 2) Which words in a chatbot answer point to which pin.
        Add a line here when you collect a new building's coordinates. */
  const BUILDINGS = [
    [/fe building/i, "FE Building"],
    [/boys hostel/i, "Boys Hostel"],
    [/girls hostel/i, "Girls Hostel"],
    [/main building/i, "Main Building"],
    [/muktangan/i, "Muktangan English Medium School"],
    [/auditorium/i, "Library & Workshop Building"]
  ];

  const ARRIVED_M = 20;      // GPS is rarely more accurate than this
  const WALK_M_PER_MIN = 80;

  const $ = id => document.getElementById(id);
  const panel = $("campusMapPanel"), fromSel = $("cmFrom"), toSel = $("cmTo");
  const goBtn = $("cmGo"), stopBtn = $("cmStop");
  const say = t => { $("cmStatus").textContent = t; };

  let map = null, me = null, route = null, trail = null;
  let trailPts = [], watchId = null, dest = null, destLL = null, first = true;
  const routeStyle = { color: "#10233F", weight: 5, dashArray: "8 10" };

  /* Dropdowns */
  fromSel.add(new Option("My current location", "gps"));
  toSel.add(new Option("Select destination", ""));
  PLACES.forEach((p, i) => { fromSel.add(new Option(p.name, i)); toSel.add(new Option(p.name, i)); });

  /* Distance in metres between two [lat, lng] points */
  const rad = x => x * Math.PI / 180;
  function dist(a, b) {
    const dLat = rad(b[0] - a[0]), dLng = rad(b[1] - a[1]);
    const h = Math.sin(dLat / 2) ** 2 + Math.cos(rad(a[0])) * Math.cos(rad(b[0])) * Math.sin(dLng / 2) ** 2;
    return 2 * 6371000 * Math.asin(Math.sqrt(h));
  }

  function initMap() {
    if (map) return;
    map = L.map("campusMap").setView([18.4898, 73.8527], 18);
    L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
      maxZoom: 19, attribution: "© OpenStreetMap contributors"
    }).addTo(map);
    PLACES.forEach((p, i) => {
      L.circleMarker([p.lat, p.lng], { radius: 8, color: "#10233F", weight: 3, fillColor: "#C6981F", fillOpacity: 1 })
        .addTo(map).bindTooltip(p.name)
        .on("click", () => { toSel.value = i; });
    });
  }

  function clearLayers() {
    [me, route, trail].forEach(l => l && map.removeLayer(l));
    me = route = trail = null; trailPts = [];
  }

  function stop() {
    if (watchId !== null) navigator.geolocation.clearWatch(watchId);
    watchId = null;
    goBtn.disabled = false; stopBtn.disabled = true;
  }

  function start() {
    if (toSel.value === "") { say("Select a destination first."); return; }
    if (!navigator.geolocation) { say("This browser can’t share your location."); return; }
    stop(); clearLayers();
    dest = PLACES[toSel.value]; destLL = [dest.lat, dest.lng]; first = true;
    trail = L.polyline([], { color: "#C6981F", weight: 5 }).addTo(map);

    if (fromSel.value !== "gps") {
      const f = PLACES[fromSel.value];
      route = L.polyline([[f.lat, f.lng], destLL], routeStyle).addTo(map);
      map.fitBounds(route.getBounds(), { padding: [60, 60] });
      say(`${Math.round(dist([f.lat, f.lng], destLL))} m from ${f.name} to ${dest.name}. Waiting for your GPS location…`);
    } else {
      say("Finding your location…");
    }
    watchId = navigator.geolocation.watchPosition(onPos, onErr,
      { enableHighAccuracy: true, maximumAge: 2000, timeout: 20000 });
    goBtn.disabled = true; stopBtn.disabled = false;
  }

  function onPos(pos) {
    const here = [pos.coords.latitude, pos.coords.longitude];
    if (!me) me = L.circleMarker(here, { radius: 9, color: "#fff", weight: 3, fillColor: "#1f6feb", fillOpacity: 1 }).addTo(map);
    else me.setLatLng(here);
    trailPts.push(here); trail.setLatLngs(trailPts);

    if (fromSel.value === "gps") {
      if (route) map.removeLayer(route);
      route = L.polyline([here, destLL], routeStyle).addTo(map);
    }
    if (first) { map.fitBounds([here, destLL], { padding: [60, 60] }); first = false; }

    const d = dist(here, destLL);
    if (d <= ARRIVED_M) { say(`You have arrived at ${dest.name}.`); stop(); return; }
    const mins = Math.max(1, Math.round(d / WALK_M_PER_MIN));
    const weak = pos.coords.accuracy > 50 ? ` GPS signal is weak (±${Math.round(pos.coords.accuracy)} m).` : "";
    say(`${Math.round(d)} m to ${dest.name}, about ${mins} min walk.${weak}`);
  }

  function onErr(e) {
    const msg = {
      1: "Location is blocked. Allow location for this site in your browser settings, then try again.",
      2: "Your location is not available. Move to an open area and try again.",
      3: "Finding your location took too long. Move to an open area and try again."
    };
    say(msg[e.code] || "Could not get your location.");
    stop();
  }

  /* Open and close the map screen */
  function open(destName) {
    panel.classList.add("cm-open");
    panel.setAttribute("aria-hidden", "false");
    initMap();
    setTimeout(() => map.invalidateSize(), 60);
    if (destName) {
      const i = PLACES.findIndex(p => p.name === destName);
      if (i >= 0) toSel.value = i;
      say("Tap Start navigation when you are ready to walk.");
    } else {
      say("Choose your destination, then tap Start navigation.");
    }
  }
  function close() {
    stop();
    panel.classList.remove("cm-open");
    panel.setAttribute("aria-hidden", "true");
  }

  function placeForBuilding(text) {
    const hit = BUILDINGS.find(b => b[0].test(text));
    return hit ? hit[1] : null;
  }

  goBtn.addEventListener("click", start);
  stopBtn.addEventListener("click", () => { stop(); say("Navigation stopped."); });
  $("campusMapBack").addEventListener("click", close);
  $("cbMapChip").addEventListener("click", () => open());

  /* 3) Add a "Navigate" button under every chatbot answer that names a mapped building */
  new MutationObserver(list => {
    list.forEach(m => m.addedNodes.forEach(n => {
      if (!(n instanceof HTMLElement) || !n.classList.contains("bot")) return;
      if (!n.querySelector(".cb-loc-name")) return;
      const place = placeForBuilding(n.textContent);
      if (!place) return;
      const btn = document.createElement("button");
      btn.type = "button";
      btn.className = "cb-nav-btn";
      btn.textContent = "Navigate to " + place;
      btn.addEventListener("click", () => open(place));
      n.appendChild(btn);
    }));
  }).observe($("campusBotMessages"), { childList: true });

  window.CampusMap = { open, close };

})();
