{
//https://www.youtube.com/watch?v=k4y5Pr0YVhg
// total number of combinations of coins which make M money
function combos(arr, M){
	let numOfCombos =  0
	if (M == 0) 	return 1
	if (M < 0)	return 0
	else{
		for (let i=0; i<arr.length; i++){		
			numOfCombos += combos(arr, M - arr[i])			
		}
		return numOfCombos
	}

}
	
// Input:
	
let coinsArr = [1,2,5]	// Lets assume that each coin represents a dollar value 	
let M	= 13		// this is the 13 dollars we want in change
console.log(combos(coinsArr, M))

	
M	 = 2	
console.log(combos(coinsArr, M))

	
M	 = 5	
console.log(combos(coinsArr, M))


M	 = 11	
console.log(combos(coinsArr, M))
}