function inchToFeet(inch){
 const feetToinch = inch / 12;
 const feetInt = parseInt(feetToinch);
 const findInch = inch % 12;
 const result = feetInt + ' feet ' + findInch + ' inch';
 return result;
}

const mufaInch = inchToFeet(68);
console.log(mufaInch);

