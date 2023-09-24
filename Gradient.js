let generateBtn = document.querySelector('.container .generate-btn button');
let copyBtn = document.querySelector('.container .code-box button');
let outputBox = document.querySelector('.container .output');
let codeText = document.querySelector('.container .code-box span');

let generateGradient =()=>{
  let str = '0123456789abcdef'; 
  let hexCode = '#';
  
  for(let i=0;i<6;i++){
   hexCode += str[Math.floor(Math.random() * str.length)];      
  }
  return hexCode;
}

let setGradient =()=>{
 let color1 = generateGradient();  
 let color2 = generateGradient();   
 
 let randomDeg = Math.floor(Math.random() * 360);
 
 outputBox.style.cssText = `background:linear-gradient(${randomDeg}deg,${color1},${color2})`;
 codeText.innerHTML = `background: linear-gradient(${randomDeg}deg,${color1},${color2})`;
}

copyBtn.addEventListener('click',()=>{
  navigator.clipboard.writeText(codeText.innerText)
})

setGradient();

generateBtn.addEventListener('click',setGradient)
