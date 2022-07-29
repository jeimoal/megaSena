const btnClick = document.getElementById('root');
const btn = document.createElement('button');
btn.innerHTML = 'Gerar número da sorte';
btnClick.appendChild(btn);

btn.addEventListener('click', luckyNum);

function luckyNum(){
let ct = 0;
let luck;
let ph = "Seus números da sorte são: ";  
let para = document.getElementById('root');
let txtPh = document.createTextNode(ph);
para.appendChild(txtPh);
  
for(ct; ct < 6; ct++) {  
  const array = Math.floor(Math.random() * 10);
  luck = array;    
  gra = document.createElement('p');
  txt = document.createTextNode(luck);
  para.appendChild(txt);
}
};
