(function () {

  /* ---------------------------------------------------------
     1) CAMPUS DATA (Merged with your full dataset)
  --------------------------------------------------------- */
  const LOCATIONS = [
    {
      id: "FBL-F1-R01",
      name: "Water Point (FE Building Ground Floor)",
      building: "FE Building (Late Govind Kashinath Patil), Ground Floor",
      directions: "This water cooler is placed on the right side of the lift on the ground floor of the FE building.",
      keywords: ["water point", "water cooler", "drinking water", "water"]
    },
    {
      id: "FBL-F1-R02",
      name: "Lift (FE Building Ground Floor)",
      building: "FE Building (Late Govind Kashinath Patil), Ground Floor",
      directions: "This lift is just to the left of the boys' washroom on ground floor of FE building.",
      keywords: ["lift", "elevator", "fe lift"]
    },
    {
      id: "FBL-F1-R03-05",
      name: "FE Staff Room & HOD Office",
      building: "FE Building (Late Govind Kashinath Patil), Ground Floor",
      directions: "The 1st FE staff room is left of the HOD's cabin. The FE HOD's office is right of the 1st staff room. The 2nd staff room is right of the HOD's cabin.",
      keywords: ["hod office", "fe hod", "fe staff room", "staff room", "hod cabin"]
    },
    {
      id: "FBL-F1-R06",
      name: "Ladies Toilet (FE Ground Floor)",
      building: "FE Building (Late Govind Kashinath Patil), Ground Floor",
      directions: "The ladies' toilet on the ground floor of the FE building is just to the left of the 3rd staff room.",
      keywords: ["ladies toilet", "girls washroom", "ladies washroom", "womens restroom"]
    },
    {
      id: "FBL-F1-R08",
      name: "Gents Toilet (FE Ground Floor)",
      building: "FE Building (Late Govind Kashinath Patil), Ground Floor",
      directions: "The gents' toilet is opposite the 1st staff room and to the left of the lift on the ground floor.",
      keywords: ["gents toilet", "boys washroom", "mens restroom", "gents washroom"]
    },
    {
      id: "FBL-F2-R02",
      name: "Classrooms 201, 202, 203",
      building: "FE Building (Late Govind Kashinath Patil), 2nd Floor",
      directions: "Classrooms 201, 202 & 203 are opposite the gents toilet on the 2nd floor.",
      keywords: ["classroom 201", "classroom 202", "classroom 203", "class 201", "room 201"]
    },
    {
      id: "FBL-F2-R04",
      name: "Mechanical Lab",
      building: "FE Building (Late Govind Kashinath Patil), 2nd Floor",
      directions: "Mechanical lab is on the right side of the ladies washroom on the 2nd floor.",
      keywords: ["mechanical lab", "mech lab"]
    },
    {
      id: "FBL-F3-R01",
      name: "Computer Lab (301A/301B)",
      building: "FE Building (Late Govind Kashinath Patil), 3rd Floor",
      directions: "Located in Room 301A/301B on the 3rd floor.",
      keywords: ["computer lab", "cs lab", "lab 301", "software lab", "programming lab"]
    },
    {
      id: "FBL-F3-R03",
      name: "Classroom 302",
      building: "FE Building (Late Govind Kashinath Patil), 3rd Floor",
      directions: "Classroom 302 is on the right side of the computer lab.",
      keywords: ["room 302", "classroom 302"]
    },
    {
      id: "FBL-F4-R02",
      name: "Classrooms 401, 402, 403",
      building: "FE Building (Late Govind Kashinath Patil), 4th Floor",
      directions: "Rooms 401 and 402 are opposite the gents toilet on the 4th floor.",
      keywords: ["room 401", "room 402", "room 403", "class 401"]
    },
    {
      id: "FBL-F5-R01",
      name: "Classrooms 501, 502",
      building: "FE Building (Late Govind Kashinath Patil), 5th Floor",
      directions: "Room numbers 501 and 502 are opposite the gents toilet on the 5th floor.",
      keywords: ["room 501", "room 502", "class 501"]
    },
    {
      id: "library",
      name: "Central Library",
      building: "Library Block, Ground & 1st Floor",
      directions: "From the main gate, take the path on the right; it's the building with the glass entrance.",
      keywords: ["library", "book", "books", "reading room", "library block"]
    },
    {
      id: "canteen",
      name: "Canteen",
      building: "Behind Block B, Ground Floor",
      directions: "Walk past Block B towards the sports ground — the canteen is on your left.",
      keywords: ["canteen", "cafeteria", "food court", "mess", "cafe", "lunch place"]
    },
    {
      id: "exam-cell",
      name: "Examination Cell",
      building: "Admin Block, 1st Floor",
      directions: "Take the admin block stairs to the 1st floor; it's next to the accounts office.",
      keywords: ["exam cell", "examination", "exam office", "exam department", "hall ticket"]
    },
    {
      id: "placement-cell",
      name: "Training & Placement Cell",
      building: "Admin Block, 2nd Floor",
      directions: "2nd floor of the admin block, at the end of the corridor.",
      keywords: ["placement cell", "placement office", "tpo", "training and placement", "placement"]
    }
  ];

  /* ---------------------------------------------------------
     2) GREETINGS & CASUAL CHAT
  --------------------------------------------------------- */
  const GREETINGS = new Set([
    "hi", "hii", "hiii", "hey", "heyy", "hello", "helo", "hallo",
    "namaste", "namaskar", "good morning", "good afternoon",
    "good evening", "gm", "yo", "sup", "bye", "goodbye", "thanks", "thank you"
  ]);

  function isGreeting(query) {
    const cleaned = normalize(query);
    return GREETINGS.has(cleaned) || [...GREETINGS].some(g => cleaned.includes(g));
  }

  function getGreetingReply(query) {
    const q = normalize(query);
    if (q.includes("bye") || q.includes("goodbye")) {
      return "👋 Goodbye! Have a great day at PVG campus!";
    }
    if (q.includes("thank")) {
      return "You're very welcome! Let me know if you need any other location assistance.";
    }
    return "👋 Hello! Welcome to PVG's COET Campus Assistant. Ask me where any office, lab, or facility is — or ask me about the college itself.";
  }

  /* ---------------------------------------------------------
     3) ABOUT THE COLLEGE
  --------------------------------------------------------- */
  const ABOUT_COLLEGE = [
    {
      keywords: ["what is pvg", "about pvg", "about college", "about this college", "what is this college", "college information", "college info", "full form", "what does pvg stand for"],
      answer: "PVG's College of Engineering and Technology (PVGCOET) is a private engineering college in Pune, run by Pune Vidyarthi Griha. It's affiliated with Savitribai Phule Pune University and holds a NAAC 'A' accreditation."
    },
    {
      keywords: ["established", "establish", "founded", "founding", "when was it established", "history", "how old", "since when"],
      answer: "PVGCOET was established in 1985."
    },
    {
      keywords: ["where is this college", "college location", "located", "address", "where is pvg", "which area", "where in pune"],
      answer: "The college is located in Vidya Nagari, Shivdarshan, Parvati, Pune – 411009, Maharashtra."
    }
  ];

  function findAboutMatch(query) {
    const queryTokens = tokenize(query);
    const normalizedQuery = normalize(query);
    let best = null;
    let bestScore = 0;

    for (const item of ABOUT_COLLEGE) {
      let score = 0;
      for (const alias of item.keywords) {
        const normAlias = normalize(alias);
        if (normalizedQuery.includes(normAlias)) { score += 4; continue; }
        const aliasTokens = normAlias.split(" ").filter(Boolean);
        for (const qWord of queryTokens) {
          for (const aWord of aliasTokens) {
            if (qWord === aWord) score += 2;
            else if (fuzzyWordMatch(qWord, aWord)) score += 1;
          }
        }
      }
      if (score > bestScore) { bestScore = score; best = item; }
    }
    return bestScore >= 3 ? best : null;
  }

  /* ---------------------------------------------------------
     4) TEXT MATCHING ENGINE
  --------------------------------------------------------- */
  const STOPWORDS = new Set([
    "where","is","are","was","the","a","an","i","want","to","find","please",
    "can","you","tell","me","show","us","in","of","for","my","how","do",
    "does","get","reach","need","needed","looking","location","locate",
    "this","that","these","those","it","go","going","there","near","nearby",
    "and","or","at","on","with","hey","hi","hello"
  ]);

  function normalize(str) {
    return str.toLowerCase().replace(/[^\w\s]/g, " ").replace(/\s+/g, " ").trim();
  }

  function tokenize(str) {
    return normalize(str)
      .split(" ")
      .filter(w => w.length > 0 && !STOPWORDS.has(w));
  }

  function levenshtein(a, b) {
    const m = a.length, n = b.length;
    const dp = Array.from({ length: m + 1 }, () => new Array(n + 1).fill(0));
    for (let i = 0; i <= m; i++) dp[i][0] = i;
    for (let j = 0; j <= n; j++) dp[0][j] = j;
    for (let i = 1; i <= m; i++) {
      for (let j = 1; j <= n; j++) {
        dp[i][j] = a[i - 1] === b[j - 1]
          ? dp[i - 1][j - 1]
          : 1 + Math.min(dp[i - 1][j], dp[i][j - 1], dp[i - 1][j - 1]);
      }
    }
    return dp[m][n];
  }

  function fuzzyWordMatch(a, b) {
    if (a === b) return true;
    const shortest = Math.min(a.length, b.length);
    const tolerance = shortest <= 4 ? 1 : shortest <= 7 ? 2 : 3;
    return levenshtein(a, b) <= tolerance;
  }

  function scoreLocation(loc, queryTokens, normalizedQuery) {
    let score = 0;
    for (const alias of loc.keywords) {
      const normAlias = normalize(alias);
      if (normalizedQuery.includes(normAlias)) {
        score += 4;
        continue;
      }
      const aliasTokens = normAlias.split(" ").filter(Boolean);
      for (const qWord of queryTokens) {
        for (const aWord of aliasTokens) {
          if (qWord === aWord) score += 2;
          else if (fuzzyWordMatch(qWord, aWord)) score += 1;
        }
      }
    }
    return score;
  }

  function findMatches(query) {
    const queryTokens = tokenize(query);
    const normalizedQuery = normalize(query);
    if (queryTokens.length === 0) return [];

    return LOCATIONS
      .map(loc => ({ loc, score: scoreLocation(loc, queryTokens, normalizedQuery) }))
      .filter(r => r.score > 0)
      .sort((a, b) => b.score - a.score);
  }

  const CONFIDENT_THRESHOLD = 3;

  function buildReply(query) {
    if (isGreeting(query)) {
      return { text: getGreetingReply(query) };
    }

    const aboutMatch = findAboutMatch(query);
    if (aboutMatch) {
      return { text: aboutMatch.answer };
    }

    const matches = findMatches(query);

    if (matches.length === 0) {
      return {
        text: "I couldn't match that to a place on campus yet. Try naming the place directly — e.g. \"library\", \"FE HOD office\", \"computer lab\" — or tap one of the suggestions below.",
        chips: LOCATIONS.slice(0, 4).map(l => l.name)
      };
    }

    const top = matches[0];
    const runnerUp = matches[1];

    if (top.score >= CONFIDENT_THRESHOLD && (!runnerUp || top.score - runnerUp.score >= 2)) {
      return {
        locName: top.loc.name,
        text: `${top.loc.building}. ${top.loc.directions}`
      };
    }

    const options = matches.slice(0, 3).map(m => m.loc.name);
    return {
      text: `Did you mean one of these?`,
      chips: options
    };
  }

  /* ---------------------------------------------------------
     5) UI WIRING
  --------------------------------------------------------- */
  const launcher = document.getElementById("campusBotLauncher");
  const panel = document.getElementById("campusBotPanel");
  const closeBtn = document.getElementById("campusBotClose");
  const messagesEl = document.getElementById("campusBotMessages");
  const form = document.getElementById("campusBotForm");
  const input = document.getElementById("campusBotInput");
  const chipsBar = document.getElementById("campusBotSuggestions");

  let greeted = false;

  function openPanel() {
    panel.classList.add("cb-open");
    panel.setAttribute("aria-hidden", "false");
    launcher.setAttribute("aria-expanded", "true");
    if (!greeted) {
      addBotMessage({ text: "Hi! I'm your PVG campus assistant. Ask me where any lab, office, or facility is." });
      greeted = true;
    }
    input.focus();
  }
  function closePanel() {
    panel.classList.remove("cb-open");
    panel.setAttribute("aria-hidden", "true");
    launcher.setAttribute("aria-expanded", "false");
  }

  launcher.addEventListener("click", () => {
    panel.classList.contains("cb-open") ? closePanel() : openPanel();
  });
  closeBtn.addEventListener("click", closePanel);

  function scrollToBottom() {
    messagesEl.scrollTop = messagesEl.scrollHeight;
  }

  function addUserMessage(text) {
    const div = document.createElement("div");
    div.className = "cb-msg user";
    div.textContent = text;
    messagesEl.appendChild(div);
    scrollToBottom();
  }

  function addBotMessage({ text, locName, chips }) {
    const div = document.createElement("div");
    div.className = "cb-msg bot";

    if (locName) {
      const nameEl = document.createElement("span");
      nameEl.className = "cb-loc-name";
      nameEl.textContent = locName;
      div.appendChild(nameEl);
    }

    const textEl = document.createElement("span");
    textEl.textContent = text;
    div.appendChild(textEl);

    if (chips && chips.length) {
      const row = document.createElement("div");
      row.className = "cb-chip-row";
      chips.forEach(label => {
        const btn = document.createElement("button");
        btn.type = "button";
        btn.textContent = label;
        btn.addEventListener("click", () => handleQuery(label));
        row.appendChild(btn);
      });
      div.appendChild(row);
    }

    messagesEl.appendChild(div);
    scrollToBottom();
  }

  function showTyping() {
    const div = document.createElement("div");
    div.className = "cb-typing";
    div.id = "cbTypingIndicator";
    div.innerHTML = "<span></span><span></span><span></span>";
    messagesEl.appendChild(div);
    scrollToBottom();
  }
  function hideTyping() {
    const el = document.getElementById("cbTypingIndicator");
    if (el) el.remove();
  }

  function handleQuery(rawText) {
    const text = rawText.trim();
    if (!text) return;
    addUserMessage(text);
    input.value = "";
    showTyping();
    setTimeout(() => {
      hideTyping();
      addBotMessage(buildReply(text));
    }, 420);
  }

  form.addEventListener("submit", e => {
    e.preventDefault();
    handleQuery(input.value);
  });

  chipsBar.addEventListener("click", e => {
    const btn = e.target.closest(".cb-chip");
    if (btn) handleQuery(btn.dataset.query);
  });

  openPanel();

})();
