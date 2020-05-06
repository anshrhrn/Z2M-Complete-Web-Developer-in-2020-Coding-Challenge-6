let cleanRoom = (array) => {
	let numArray = array.filter((item) => typeof(item) === "number");
	let stringArray = array.filter((item) => typeof(item) === "string");

	numArray.sort((a,b) => a-b);
	stringArray.sort((a,b) => a-b);

	let stringGroupArray = stringArray.reduce((acc, num) =>{
		let first = stringArray.indexOf(num);
		let last = stringArray.lastIndexOf(num);
		let count = last - first + 1;
			
		    if (count>1) {
				acc.push(Array(count).fill(num));
				stringArray.splice(first,(count-1));
				return acc;
			}
            else if (count === 1) {
                acc.push(num);
                return acc;
            }
			
	}, [])
	
	let numGroupArray = numArray.reduce((acc, num) =>{
		let first = numArray.indexOf(num);
		let last = numArray.lastIndexOf(num);
		let count = last - first + 1;
			
		    if (count>1) {
				acc.push(Array(count).fill(num));
				numArray.splice(first,(count-1));
				return acc;
			}
            else if (count === 1) {
                acc.push(num);
                return acc;
            }
			
	}, [])

	if (stringGroupArray.length > 0 && numGroupArray.length > 0){
		console.log([stringGroupArray,numGroupArray]);
	}
    else if (stringGroupArray.length === 0 && numGroupArray.length > 0){
        console.log([numGroupArray]);
    }
    else if (numGroupArray.length === 0 && stringGroupArray.length > 0){
        console.log([stringGroupArray]);
    }
    else {
        console.log("Sorry!");
    }

}