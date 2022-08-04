let betNum = {
dozen: null, //receives first number
unit: null, //receives second number
matrix: [], //stores the numbers

init: () => {
	//create and set the id to wrapper
	body = document.querySelector('body');
	divW = document.createElement('div');
	divW.setAttribute('id','betWrapper');
	divW.setAttribute('class','default');
	body.appendChild(divW);

	//create lucky container
	luckyBetCont = document.createElement('div');
	luckyBetCont.setAttribute('id','luckyBetCont');
	divW.appendChild(luckyBetCont);

	//create lucky button
	luckyBtn = document.createElement('button');
	luckyBtn.setAttribute('class', 'luckyBtn');
	luckyBtn.textContent = "gerar números da sorte";
	luckyBetCont.appendChild(luckyBtn);
	luckyBtn.addEventListener('click', betNum.luckyBet);

	//create lucky num div and display text
	luckyNum = document.createElement('div');
	luckyTxt = document.createElement('p')
	luckyNum.setAttribute('id', 'luckyNum');
	luckyTxt.setAttribute('id', 'luckyBet');
	luckyNum.appendChild(luckyTxt);
	luckyBetCont.appendChild(luckyNum);
},

//generates the lucky numbers and displays on the screen
luckyBet: () => {
let matrix = document.querySelector('#luckyBet');

while (betNum.matrix.length != 6) {
	betNum.dozen = Math.floor(Math.random() * 10);
	betNum.unit = Math.floor(Math.random() * 10);
	concat = ` ${betNum.dozen}${betNum.unit}`;

	//validates whether the number is repeated
	if(concat > 0 && concat <=60 && betNum.matrix.indexOf(concat) == -1) {
		betNum.matrix.unshift(concat);
	}
	matrixTxt = betNum.matrix;
	matrix.textContent = matrixTxt;
}

betNum.matrix = [];
},

}

window.addEventListener('load', betNum.init);
