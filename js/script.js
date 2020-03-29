let num = 266219,
str = num.toString(),
powSum,
numStr,
num1 = +str[0],
num2 = +str[1],
num3 = +str[2], 
num4 = +str[3], 
num5 = +str[4], 
num6 = +str[5],
numrSum =  (num1 * num2 * num3 * num4 * num5 * num6);
powSum = numrSum * numrSum * numrSum;
numStr = powSum.toString(10);
console.log(numStr[0] + numStr[1]);



