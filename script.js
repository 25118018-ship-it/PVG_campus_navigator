// This array will hold all 173 campus records once loaded from the JSON file.
let campusData = [];

// Grab references to the HTML elements we'll need to work with.
const chatLog = document.getElementById('chat-log');
const chatForm = document.getElementById('chat-form');
const chatInput = document.getElementById('chat-input');

// Step 1: Load the JSON file as soon as the page opens.
fetch('campus_data.json')
  .then((response) => response.json())
  .then((data) => {
    campusData = data;
    console.log(`Loaded ${campusData.length} campus records.`);
  })
  .catch((error) => {
    console.error('Could not load campus data:', error);
    addBotMessage('<p>Sorry, I could not load the campus data. Check that Live Server is running.</p>');
  });

// Step 2: Listen for the user submitting a question.
chatForm.addEventListener('submit', (event) => {
  event.preventDefault(); // stop the page from reloading
  const question = chatInput.value.trim();
  if (!question) return;

  addUserMessage(question);
  chatInput.value = '';

  const matches = searchCampusData(question);
  respondWithMatches(matches);
});

// Step 3: A simple keyword search across the fields that matter.
function searchCampusData(query) {
  const q = query.toLowerCase();

  return campusData.filter((room) => {
    const haystack = [
      room.name,
      room.building,
      room.category,
      room.floor,
      room.roomNo,
      room.location
    ]
      .filter(Boolean)
      .join(' ')
      .toLowerCase();

    return haystack.includes(q);
  });
}

// Step 4: Show the results in the chat log.
function respondWithMatches(matches) {
  if (matches.length === 0) {
    addBotMessage('<p>I couldn\'t find anything matching that. Try a shorter keyword, like a building name or room type.</p>');
    return;
  }

  const topMatches = matches.slice(0, 3);
  const cards = topMatches
    .map(
      (room) => `
      <div class="result-card">
        <span class="result-name">${room.name || 'Unnamed location'}</span>
        <span class="result-meta">${[room.building, room.floor].filter(Boolean).join(' &middot; ')}</span>
        <p>${room.location || 'No detailed directions recorded yet.'}</p>
      </div>`
    )
    .join('');

  const intro = matches.length > 1
    ? `<p>I found ${matches.length} matching locations. Here are the top ones:</p>`
    : `<p>Here's what I found:</p>`;

  addBotMessage(intro + cards);
}

// Helper: add a bot message bubble to the chat log.
function addBotMessage(html) {
  const div = document.createElement('div');
  div.className = 'message bot';
  div.innerHTML = html;
  chatLog.appendChild(div);
  chatLog.scrollTop = chatLog.scrollHeight;
}

// Helper: add a user message bubble to the chat log.
function addUserMessage(text) {
  const div = document.createElement('div');
  div.className = 'message user';
  div.innerHTML = `<p>${text}</p>`;
  chatLog.appendChild(div);
  chatLog.scrollTop = chatLog.scrollHeight;
}
