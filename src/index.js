module.exports = function check(str, bracketsConfig) {
  // your solution
  //var l = bracketsConfig.length;
  var leftBrackets = [];
  var rightBrackets = [];
  var leftString = [];
  var rightString = [];

  for (var i = 0; i < bracketsConfig.length; i++) {
    console.log(bracketsConfig[i]);
    let x = bracketsConfig[i];
    leftBrackets.push(x[0]);
    rightBrackets.push(x[1]);
    // console.log('leftBrackets: ', leftBrackets); // it works
    // console.log('rightBrackets: ', rightBrackets); // it works
  }

  //  пока что с лево правыми скобками норм показвает, но вот палками и одинаковыми цифрами - фигово...

  for (var i = 0; i < str.length; i++) {
    // str[i]; // ???

    if (findInArray(leftBrackets, str[i]) != -1) {
      leftString.push(str[i]);
    } else
    
    if (findInArray(rightBrackets, str[i]) != -1) {
      rightString.push(str[i]);
    }

  }
  
  console.log('leftString: ', leftString); // it works
  console.log('rightString: ', rightString); // it works
  
  function findInArray(array, value) {
    if (array.indexOf) {
      return array.indexOf(value);
    }
    for (var i = 0; i < array.length; i++) {
      if (array[i] === value) return i;
    }
    return -1;
  }



}
  // 11111 56 11111111 2222 888888 2222 55 77 8 7777 8 77 55556666 7777777777 66 22222