var firstNumber=randomInRange(6,9);var secondNumber=randomInRange(11,14)-firstNumber;var sumNumbers=firstNumber+secondNumber;function randomInRange(min,max){return Math.floor(Math.random()*(max-min+1))+min};var exampleFirstNumber=document.querySelector('.firstNumber');var exampleSecondNumber=document.querySelector('.secondNumber');var amount=document.querySelector('.amount');exampleFirstNumber.innerHTML=firstNumber;exampleSecondNumber.innerHTML=secondNumber;var convCont=document.body.querySelector('.canvasWrapper');var canvas=document.querySelector('.canvas');var context=canvas.getContext('2d');var cm=41.2;var centerFirstArc=(cm*firstNumber)/2;var bendFirstArc=-65;var endFirstArc=cm*firstNumber;createFirstArc();var centerSecondArc=((cm*firstNumber)+((cm*firstNumber)+(cm*secondNumber)))/2;var bendSecondArc=-45/2;var endSecondArc=(cm*secondNumber)+(cm*firstNumber);var firstNumberInput=document.createElement('input');firstNumberInput.setAttribute("type","text");firstNumberInput.setAttribute("maxlength","1");firstNumberInput.setAttribute("onkeypress","return isNumber(event)");firstNumberInput.classList.add('setInput');convCont.append(firstNumberInput);firstNumberInput.focus();firstNumberInput.style.left=((centerFirstArc+6.4)+'px');firstNumberInput.style.top=(bendFirstArc+'px');var secondNumberInput=document.createElement('input');var amountInput=document.createElement('input');amountInput.setAttribute("type","text");amountInput.setAttribute("maxlength","2");amountInput.setAttribute("onkeypress","return isNumber(event)");amountInput.classList.add('amountInput');firstNumberInput.oninput=()=>checkValue(firstNumberInput,firstNumber,exampleFirstNumber);secondNumberInput.oninput=()=>checkValue(secondNumberInput,secondNumber,exampleSecondNumber);amountInput.oninput=checkSumNumbers;function setFocus(){document.getElementsByClassName("setInput")[0].focus()}function createFirstArc(){context.beginPath();context.lineWidth=2;context.strokeStyle='#AA5B82';context.moveTo(0,85);context.quadraticCurveTo(centerFirstArc,bendFirstArc,endFirstArc,85);context.stroke();context.beginPath();context.moveTo(endFirstArc,85);context.lineTo(endFirstArc-15,80);context.moveTo(endFirstArc,85);context.lineTo(endFirstArc-7,70);context.stroke()};function createSecondArc(){context.beginPath();context.moveTo(endFirstArc,85);context.quadraticCurveTo(centerSecondArc,bendSecondArc,endSecondArc,85);context.stroke();context.beginPath();context.moveTo(endSecondArc,85);context.lineTo(endSecondArc-15,80);context.moveTo(endSecondArc,85);context.lineTo(endSecondArc-2,70);context.stroke()};function appendInputValue(){var inputs=document.querySelectorAll('input');for(var input of inputs){if(!input.disabled){return}else if(input.disabled){secondNumberInput.setAttribute("type","text");secondNumberInput.setAttribute("maxlength","1");secondNumberInput.setAttribute("onkeypress","return isNumber(event)");secondNumberInput.classList.add('setInput');convCont.append(secondNumberInput);secondNumberInput.style.left=((centerSecondArc-6)+'px');secondNumberInput.style.top=(bendFirstArc/1.5+'px');createSecondArc();secondNumberInput.focus()}}};function checkSumNumbers(){if(amountInput.value===String(sumNumbers)){amountInput.disabled=true;amountInput.classList.remove('inputError')}else{amountInput.classList.add('inputError')}};function checkValue(inputValue,spanValue,span){inputValue.value.replace(/[^\d]/g,'');if(inputValue.value!=spanValue){inputValue.classList.add('inputError');inputValue.classList.add('inputError');span.classList.add('spanError')}else{inputValue.disabled=true;inputValue.classList.remove('inputError');span.classList.remove('spanError');appendInputValue()};if(firstNumberInput.disabled===true&&secondNumberInput.disabled===true){amount.after(amountInput);amountInput.focus();amount.remove()}};function isNumber(evt){var iKeyCode=(evt.which)?evt.which:evt.keyCode if(iKeyCode!=46&&iKeyCode>31&&(iKeyCode<48||iKeyCode>57))return false;return true}