function stringChop(str, size) {
  // your code here
	 let res = [];
	if (!str || size <= 0) return res;
    let string = "";
    let len = 0;
    for(let s of str){
        if(len + 1 > size){
            res.push(string);
            string = s;
            len = 1;
        }else{
            string += s;
            len++;
        }
    }
    if(string.length > 0){
        res.push(string);
    }
    return res;
	
}

// Do not change the code below
const str = prompt("Enter String.");
const size = prompt("Enter Chunk Size.");
alert(stringChop(str, size));
