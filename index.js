const firstNum = Number(prompt('Type first number'));
const secondNum = Number(prompt('Type second number'));

function letsDoSomeMath (a,b) {
  if (isNaN(a) || isNaN(b)) {
    console.log('You should type a number');
  }

  else {
    console.log('addition' + ' ' + (a+b));
    console.log('substraction' + ' ' + (a-b));
    console.log('multiplication' + ' ' + (a*b));
    console.log('division' + ' ' + (a/b));
  }
}

letsDoSomeMath(firstNum, secondNum);


// ZAPIS STRZALKOWY
// const math = (a, b) => {
//   if (isNaN(a) || isNaN(b)) {
//     console.log('You should type a number');
//   }

//   else {
//     console.log('addition' + ' ' + (a+b));
//     console.log('substraction' + ' ' + (a-b));
//     console.log('multiplication' + ' ' + (a*b));
//     console.log('division' + ' ' + (a/b));
//   }
// }
// math(firstNum, secondNum)