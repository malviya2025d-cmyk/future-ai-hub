const buttons = document.querySelectorAll('.tool-btn');

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
  alert(tool + " opened (UI ready)");
}

// 🔴 OPENAI API (ONLY REEL SCRIPT)
async function generateScript(){

  const topic = document.getElementById('topic').value;

  const API_KEY = "YOUR_API_KEY_HERE";

  const res = await fetch("https://api.openai.com/v1/chat/completions",{
    method:"POST",
    headers:{
      "Content-Type":"application/json",
      "Authorization":"Bearer " + API_KEY
    },
    body:JSON.stringify({
      model:"gpt-3.5-turbo",
      messages:[
        {role:"user",content:`Write a viral reel script about ${topic}`}
      ]
    })
  });

  const data = await res.json();
  console.log(data.choices[0].message.content);
}
