
//const nested : any[]= [1,["x"],{test:"entry"},[[3,[6,[[8]]]]],[7,[5,6,7]]];

export function recursiveAdder(arr:any[]){
	let sum=0;
	for(let i = 0; i<arr.length; i++)
	if(Array.isArray(arr[i])){
			sum += recursiveAdder(arr[i]);
	}else if(typeof arr[i] === "number"){
			sum += arr[i];
	}else {}
	return sum;
}
