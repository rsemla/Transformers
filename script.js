var wrapperEle = document.body
var chrs = [
  {name:"Optimus Prime", class: "leader", afl:"autobot", vehicle:"truck"},
  {name:"Megatron", class: "leader", afl:"decepticon", vehicle:"tank"},
  {name:"Bumblebee", class: "scout", afl:"autobot", vehicle:"car"},
  {name:"Starscream", class: "scout", afl:"decepticon", vehicle:"plane"},
  {name:"Ironhide", class: "soldier", afl:"autobot", vehicle:"truck"},
  {name:"Brawl", class: "soldier", afl:"decepticon", vehicle:"tank"},
];

function transformers(obj){
 var pEle = document.createElement("div");
  pEle.classList.add("character");
 
 var nEle = document.createElement("div");
 nEle.innerHTML=obj.name;
  
  var vEle = document.createElement("div");
    var img = document.createElement("img"); 
    vEle.innerHTML=obj.vehicle;
    if(obj.vehicle==="truck"){
    vEle.style.color="blue";
  }
     if(obj.vehicle==="tank"){
    vEle.style.color="green";
  }
     if(obj.vehicle==="plane"){
    vEle.style.color="white";
  }   if(obj.vehicle==="car"){
    vEle.style.color="gold";
  }
  
  var cEle = document.createElement("div");
 cEle.innerHTML="Class:" + obj.class.toUpperCase();
  
 var aEle = document.createElement("div");
  if(obj.afl==="autobot"){
    pEle.classList.add("autobot");
   aEle.innerHTMl="autobot"; 
  }else{
     pEle.classList.add("decepticon");
  }
  
var logo = document.createElement("img");
  
  if(obj.afl==="autobot") {
    logo.classList.add("autobot");
    logo.src= "https://cdn4.iconfinder.com/data/icons/proglyphs-free/512/Autobot-512.png"
  } else {
    logo.classList.add("decepticions");
    logo.src= "https://cdn4.iconfinder.com/data/icons/proglyphs-free/512/Decepticon-512.png"
  }
 

 
 
 pEle.appendChild(nEle);
 pEle.appendChild(aEle);
 pEle.appendChild(vEle);
 pEle.appendChild(cEle);
 pEle.appendChild(logo);
 pEle.style.color=obj.vehicle;
 wrapperEle.appendChild(pEle); 
}

for(var i=0; i<chrs.length; i++){
 transformers(chrs[i]);
}