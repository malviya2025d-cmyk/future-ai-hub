const buttons = document.querySelectorAll('.card button');

buttons.forEach((btn,index)=>{
  btn.addEventListener('click',()=>{
    const tools = [
      "AI Photo Editor",
      "Baby Face Predictor",
      "Future Face AI",
      "AI Girlfriend Chat",
      "Voice Changer",
      "Horror Story AI",
      "Reel Script Generator",
      "Thumbnail Maker"
    ];

    openTool(tools[index]);
  });
});

function openTool(tool){

  let content = '';

  if(tool === 'AI Girlfriend Chat'){
    content = `
      <h3>AI Girlfriend Chat 💬</h3>

      <input id="chatInput" placeholder="Say something..." />
      <button onclick="chatAI()">Send</button>

      <div id="result"></div>
    `;
  }

  else if(tool === 'Reel Script Generator'){
    content = `
      <h3>Reel Script Generator 🎬</h3>

      <textarea id="topic" placeholder="Enter topic..."></textarea>
      <button onclick="generateScript()">Generate</button>

      <div id="result"></div>
    `;
  }

  else if(tool === 'Horror Story AI'){
    content = `
      <h3>Horror Story AI 👻</h3>

      <textarea id="horror" placeholder="Enter horror idea..."></textarea>
      <button onclick="generateHorror()">Generate</button>

      <div id="result"></div>
    `;
  }

  else if(tool === 'Thumbnail Maker'){
    content = `
      <h3>Thumbnail Maker 🔥</h3>

      <input id="thumb" placeholder="Enter title..." />
      <button onclick="generateThumbnail()">Create</button>

      <div id="result"></div>
    `;
  }

  else {
    content = `
      <h3>${tool}</h3>
      <p>This tool UI is ready. API connect later.</p>
    `;
  }

  const popup = document.createElement('div');
  popup.classList.add('popup');

  popup.innerHTML = `
    <div class="popup-box">
      <span class="close-btn" onclick="closePopup()">✖</span>
      ${content}
    </div>
  `;

  document.body.appendChild(popup);
}

function closePopup(){
  const p = document.querySelector('.popup');
  if(p) p.remove();
}

/* =========================
   AI GIRLFRIEND CHAT
========================= */
function chatAI(){

  const text = document.getElementById('chatInput').value;

  const replies = [
    "Aww ❤️",
    "Really? 😍",
    "Tell me more 💕",
    "I like talking with you 😘",
    "Hmm... I am listening 💬",
    "You are cute 😄"
  ];

  const random = replies[Math.floor(Math.random() * replies.length)];

  document.getElementById('result').innerHTML = `
    <div class="chat-box">
      <p><b>You:</b> ${text}</p>
      <p><b>AI:</b> ${random}</p>
    </div>
  `;
}

/* =========================
   REEL SCRIPT GENERATOR
========================= */
function generateScript(){

  const topic = document.getElementById('topic').value;

  document.getElementById('result').innerHTML = `
    <h3>Generated Script 🎬</h3>
    <p>🔥 Hook: You won’t believe this about ${topic}!</p>
    <p>📌 Story: This trend about ${topic} is going viral on social media.</p>
    <p>💥 Ending: What do you think? Comment below!</p>
  `;
}

/* =========================
   HORROR STORY
========================= */
function generateHorror(){

  const horror = document.getElementById('horror').value;

  document.getElementById('result').innerHTML = `
    <h3>Horror Story 👻</h3>
    <p>At midnight, something strange happened about ${horror}...</p>
    <p>A dark shadow appeared and everything went silent...</p>
  `;
}

/* =========================
   THUMBNAIL MAKER
========================= */
function generateThumbnail(){

  const title = document.getElementById('thumb').value;

  document.getElementById('result').innerHTML = `
    <div class="thumbnail-preview">
      ${title}
    </div>
  `;
}
