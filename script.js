let betNum = {
dozen: null, //create html element
unit: null, //create html element
matrix: [], //stores the numbers

init: () => {
	//create and set the id to wrapper
	body = document.querySelector('body');
	divW = document.createElement('div');
	divW.setAttribute('id','betWrapper');
	body.appendChild(divW);

	//create lucky container
	luckyBetCont = document.createElement('div');
	luckyBetCont.setAttribute('id','luckyBetCont');
	divW.appendChild(luckyBetCont);

	//create lucky button
	luckyBtn = document.createElement('button');
	luckyBtn.setAttribute('id', 'luckyBtn');
	luckyBtn.textContent = "Gerar números da sorte";
	luckyBetCont.appendChild(luckyBtn);
	luckyBtn.addEventListener('click', betNum.luckyBet);

	//create lucky num div
	luckyNum = document.createElement('div');
	luckyTxt = document.createElement('p')
	luckyNum.setAttribute('id', 'luckyNum');
	luckyTxt.setAttribute('id', 'luckyBet');
	luckyNum.appendChild(luckyTxt);
	luckyBetCont.appendChild(luckyNum);
},

//generate lucky bet numbers
luckyBet: () => {
let matrix = document.querySelector('#luckyBet');
let matrixTxt;
//let matrixRep;
while (betNum.matrix.length != 6) {
	betNum.dozen = Math.floor(Math.random() * 10);
	betNum.unit = Math.floor(Math.random() * 10);
	concat = `${betNum.dozen}${betNum.unit} `;

	if(concat > 0 && concat <=60) {
		betNum.matrix.unshift(concat);
	}
	matrixTxt = betNum.matrix;
	//matrixRep = matrixTxt.replace(",", " "); does not work. Searching for a solution...
	matrix.textContent = matrixTxt;
}

},

}

window.addEventListener('load', betNum.init);
