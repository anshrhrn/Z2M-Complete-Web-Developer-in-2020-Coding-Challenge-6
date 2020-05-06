let qArray = [[1,2,3],4];
let funcArray = qArray[0];
let answer = qArray[1];
let number1 = "";
let number2 = "";
let finalOutput = [];

for (i=0; i<funcArray.length; i++) {
	for (j=0; j<(funcArray.length); j++) {
		if((funcArray[i] + funcArray[j]) === answer) {
			finalOutput.push([funcArray[i],funcArray[j]]);
		}
	}
}
console.log(finalOutput);