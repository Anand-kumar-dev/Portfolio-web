const anandNames = [
  "Anand",        
  "आनंद",        
  "అనంద్",       
  "അനന്ദ്",       
  "അനന്ദ",        
  "আনন্দ",        
  "ਅਨੰਦ",       
  "అనంద్",     
  "Ανάντ",        
  "أناند",        
  "安南",        
  "アナンド",      
  "안난드",        
  "Ананде",       
];


const named = document.getElementById("name");

named.addEventListener('click',(e)=>{
   const inteval = setInterval(() => {
     named.innerHTML = anandNames[Math.floor(Math.random() * (anandNames.length - 1 + 1)) + 1]
   }, 1000);
})
