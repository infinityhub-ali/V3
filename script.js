function search(){
  let q=document.getElementById("searchInput").value;
  if(!q) return alert("Type something");
  window.open("https://www.google.com/search?q="+q,"_blank");
}

function go(){
  document.getElementById("output").style.display="none";
}

async function weather(){
  document.getElementById("output").style.display="block";

  let r=await fetch("https://api.open-meteo.com/v1/forecast?latitude=24.817&longitude=93.936&current_weather=true");
  let d=await r.json();

  document.getElementById("output").innerHTML=
  "<button class='back' onclick='go()'>Back</button>"+
  "<h2>Weather</h2>"+
  "<p>"+d.current_weather.temperature+"°C</p>";
}

async function crypto(){
  document.getElementById("output").style.display="block";

  let r=await fetch("https://api.coingecko.com/api/v3/simple/price?ids=bitcoin,ethereum&vs_currencies=usd");
  let d=await r.json();

  document.getElementById("output").innerHTML=
  "<button class='back' onclick='go()'>Back</button>"+
  "<h2>Crypto</h2>"+
  "<p>BTC $"+d.bitcoin.usd+"</p>"+
  "<p>ETH $"+d.ethereum.usd+"</p>";
}

function news(){
  document.getElementById("output").style.display="block";

  document.getElementById("output").innerHTML=
  "<button class='back' onclick='go()'>Back</button>"+
  "<h2>News (basic)</h2>";
}
