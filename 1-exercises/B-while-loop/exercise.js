/*
    while loops can be useful when you want to execute some code as long as some condition is true.    

    Using a while loop, complete the function below so it logs (using console.log) the first n even numbers as a comma-seperated string.
    The list of numbers should start with 0. n is being passed in as a parameter.
*/

function evenNumbers(n) {
    let count = 0;
	let total = [];
	while(count <= (n + 1)){
		if(count % 2 == 0){
			total.push(count)
		}
		count = count + 1;
	}
	console.log(total.join(', '))
}

evenNumbers(3); // should output 0,2,4
// evenNumbers(0); // should output nothing
// evenNumbers(18); // should output 0,2,4,6,8,10,12,14,16,18
