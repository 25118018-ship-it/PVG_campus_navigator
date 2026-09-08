/* =========================================================
   PVG COET Campus Guide — chatbot logic
   The important part is the matching engine near the bottom:
   instead of requiring an exact phrase, it strips filler words
   and matches on the meaningful words that are left, with typo
   tolerance. So "where is the hod office", "hod cabin", and
   "can you tell me where the hods cabin is" all resolve to the
   same place.
========================================================= */

(function () {

  /* ---------------------------------------------------------
     1) YOUR CAMPUS DATA
     Replace/extend this array with the real data you already
     collected. Each entry needs:
       - name: what's shown to the visitor
       - building / floor: shown in the reply
       - directions: short walking directions
       - keywords: every word or phrase a person might use for
         this place. Add as many natural variations as you can
         think of — that's what makes matching feel smart.
  --------------------------------------------------------- */
  const LOCATIONS = [
    {
      id: "hod-office",
      name: "HOD Office (AI & Data Science)",
      building: "Main Building, 2nd Floor",
      directions: "Take the main staircase to the 2nd floor, turn left — it's the third door on the right, opposite the staff room.",
      keywords: [
        "hod", "hod office", "hod cabin", "hod room", "hods cabin",
        "head of department", "department head", "hod sir", "hod maam",
        "ai and ds hod", "ai ds hod"
      ]
    },
    {
      id: "principal-office",
      name: "Principal's Office",
      building: "Main Building, Ground Floor",
      directions: "Enter the main gate, it's straight ahead past the reception desk.",
      keywords: [
        "principal", "principal office", "principal cabin", "principal room",
        "director office", "head of college"
      ]
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
      keywords: ["exam cell", "examination", "exam office", "exam department", "hall ticket", "exam section"]
    },
    {
      id: "placement-cell",
      name: "Training & Placement Cell",
      building: "Admin Block, 2nd Floor",
      directions: "2nd floor of the admin block, at the end of the corridor.",
      keywords: ["placement cell", "placement office", "tpo", "training and placement", "placement", "internship office"]
    },
    {
      id: "computer-lab",
      name: "AI & DS Computer Lab",
      building: "Block C, 3rd Floor",
      directions: "Take the Block C lift to the 3rd floor; it's Lab 301.",
      keywords: ["computer lab", "cs lab", "ai ds lab", "lab 301", "programming lab", "system lab"]
    },
    {
      id: "washroom",
      name: "Nearest Washroom",
      building: "Every floor, near the staircase",
      directions: "On every floor, the washrooms are right beside the staircase landing.",
      keywords: ["washroom", "restroom", "toilet", "bathroom", "loo"]
    },
    {
      id: "main-gate",
      name: "Main Gate",
      building: "Near the FE Building",
      directions: "There's only one gate for the whole campus — the entry and exit gate are the same, located right next to the FE (First Year Engineering) building.",
      keywords: [
        "gate", "main gate", "entry gate", "exit gate", "entrance",
        "college gate", "front gate", "campus gate", "entry and exit",
        "way in", "way out"
      ]
    }
  ];

  /* ---------------------------------------------------------
     2) GREETINGS
     Checked first — if the whole message is just a greeting,
     reply warmly instead of trying to match it to a place.
  --------------------------------------------------------- */
  const GREETINGS = new Set([
    "hi", "hii", "hiii", "hey", "heyy", "hello", "helo", "hallo",
    "namaste", "namaskar", "good morning", "good afternoon",
    "good evening", "gm", "yo", "sup"
  ]);

  function isGreeting(query) {
    const cleaned = normalize(query);
    return GREETINGS.has(cleaned) || [...GREETINGS].some(g => cleaned === g);
  }

  /* ---------------------------------------------------------
     3) ABOUT THE COLLEGE
     General questions that aren't about finding a place.
     Add more entries the same way if students ask other things
     (fees, courses, principal's name, etc.).
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
     4) TEXT MATCHING ENGINE (for locations)
  --------------------------------------------------------- */

  // Words that carry no location meaning — stripped before matching.
  const STOPWORDS = new Set([
    "where","is","are","was","the","a","an","i","want","to","find","please",
    "can","you","tell","me","show","us","in","of","for","my","how","do",
    "does","get","reach","need","needed","looking","location","locate",
    "this","that","these","those","it","go","going","there","near","nearby",
    "and","or","at","on","with","us","hey","hi","hello"
  ]);

  function normalize(str) {
    return str.toLowerCase().replace(/[^\w\s]/g, " ").replace(/\s+/g, " ").trim();
  }

  function tokenize(str) {
    return normalize(str)
      .split(" ")
      .filter(w => w.length > 0 && !STOPWORDS.has(w));
  }

  // Standard edit-distance, used to tolerate typos / plurals ("hods" vs "hod").
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

  // Score how well one location matches the query.
  function scoreLocation(loc, queryTokens, normalizedQuery) {
    let score = 0;

    for (const alias of loc.keywords) {
      const normAlias = normalize(alias);
      // Strong signal: the whole alias phrase appears in the query as typed.
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

  const CONFIDENT_THRESHOLD = 3; // score needed to answer directly rather than ask/clarify

  function buildReply(query) {
    if (isGreeting(query)) {
      return {
        text: "Hey there! 👋 I'm the campus guide for PVGCOET. Ask me where any office, lab, or facility is — or ask me about the college itself."
      };
    }

    const aboutMatch = findAboutMatch(query);
    if (aboutMatch) {
      return { text: aboutMatch.answer };
    }

    const matches = findMatches(query);

    if (matches.length === 0) {
      return {
        text: "I couldn't match that to a place on campus yet. Try naming the place directly — e.g. \"library\", \"HOD office\", \"exam cell\" — or tap one of the suggestions below.",
        chips: LOCATIONS.slice(0, 4).map(l => l.name)
      };
    }

    const top = matches[0];
    const runnerUp = matches[1];

    // Confident single match.
    if (top.score >= CONFIDENT_THRESHOLD && (!runnerUp || top.score - runnerUp.score >= 2)) {
      return {
        locName: top.loc.name,
        text: `${top.loc.building}. ${top.loc.directions}`
      };
    }

    // Close call between a couple of places — ask instead of guessing wrong.
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
      addBotMessage({ text: "Hi! I'm the campus guide. Ask me where any office, lab, or facility is." });
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
    }, 420); // small delay just makes the reply feel considered, not instant/robotic
  }

  form.addEventListener("submit", e => {
    e.preventDefault();
    handleQuery(input.value);
  });

  chipsBar.addEventListener("click", e => {
    const btn = e.target.closest(".cb-chip");
    if (btn) handleQuery(btn.dataset.query);
  });

  // Chat opens straight away when the page loads — no click needed first.
  // The round button still works afterwards to close/reopen it.
  openPanel();

})();
