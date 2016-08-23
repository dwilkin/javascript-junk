function getRandomNumber( lower, upper ) {
  if (isNaN(lower) || isNaN(upper)) {
      throw new Error('One of the values given is not a number!');
} else {
  return Math.floor(Math.random() * (upper - lower + 1)) + lower; 
  }
}

console.log( getRandomNumber( 'nine', 24 ) );
console.log( getRandomNumber( 1, 100 ) );
console.log( getRandomNumber( 200, 'five hundred' ) );
console.log( getRandomNumber( 1000, 20000 ) );
console.log( getRandomNumber( 50, 100 ) );
