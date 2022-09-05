let varA = 'A'; //B
let varB = 'B'; //C
let varC = 'C'; //A

const seguraVariavel = varA;

varA = varB
varB = varC
varC = seguraVariavel

//JavaScript
//[varA, varB, varC] = [varB, varC, varA]


console.log(varA, varB, varC);


