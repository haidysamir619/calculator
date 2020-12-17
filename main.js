var inputfield = document.getElementById('inputfield');
var button = document.getElementsByTagName('button');
/*start of enter button*/
inputfield.onkeyup = function () {
	if (event.keyCode === 13) {
		calc();
	}
}
/*end of enter button*/
for (var i = 0; i < button.length; i++) {
	if (button[i].getAttribute('data-val') === '=') {
		button[i].addEventListener("click", function () {
          calc();
		});
	} else if (button[i].getAttribute('data-val') === 'c') {
		button[i].addEventListener("click", function () {
			inputfield.value = '';

		});
	} else {
		button[i].addEventListener("click", function () {
			inputfield.value += this.getAttribute('data-val');
		});
	}
}

function calc() {
	if (/^[0-9 .]+$/.test(inputfield.value)) {
		var numbers = inputfield.value;
		inputfield.value = eval(numbers);
	} else if (/^\s*([-+]?)(\d+\.?\d*|\d*\.\d+)(?:\s*([-+*%\/])\s*((?:\s[-+])?\d+\.?\d*|\d*\.\d+)\s*)+\s*$/.test(inputfield.value)) {
		var numbers = inputfield.value;
		inputfield.value = eval(numbers);
	} else if (inputfield.value < 0) {
		var numbers = inputfield.value;
		inputfield.value = eval(numbers);
	} else {
		inputfield.value = "error";
		var delay = setTimeout(function () {
			inputfield.value = "";
		}, 500);
	}
}
