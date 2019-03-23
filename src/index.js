module.exports = function check(str, bracketsConfig) {
  // your solution
  //var l = bracketsConfig.length;
  
  ////////////////////   РЕШЕНИЕ 60%, не получается с одинаковыми знаками: ||, 77, 88   //////////////////////
  /*
  var leftBrackets = [];
  var rightBrackets = [];
  var leftString = [];
  var rightString = [];

  for (var i = 0; i < bracketsConfig.length; i++) {
    console.log(bracketsConfig[i]);
    let x = bracketsConfig[i];
    leftBrackets.push(x[0]);
    rightBrackets.push(x[1]);
  }

  //  пока что с лево правыми скобками норм показвает, но вот палками и одинаковыми цифрами - фигово...
  for (var i = 0; i < str.length; i++) {
    // str[i]; // ???

    if (findInArray(leftBrackets, str[i]) != -1) {
      leftString.push(str[i]);
    } else
    
    if (findInArray(rightBrackets, str[i]) != -1) {
      // rightString.push(str[i]);
      x = findInArray(rightBrackets, str[i]);
      console.log('x: ', x);
      if (pair (bracketsConfig, leftString[leftString.length-1], str[i]) == true ) {
        leftString.pop();
      } else {
        return false;
      }
      return true;
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

  function pair (bracketsConfig, value1, value2) {
    for (var i = 0; i < bracketsConfig.length; i++) {
      let x = bracketsConfig[i];
      if (value1 == x[0]) {
        if (value2 == x[1]) {
          return true;
        } else {
          return false;
        }
      }
    }
  }
*/
////////////////////   РЕШЕНИЕ 100%, получается с одинаковыми знаками: ||, 77, 88   //////////////////////
  var pairs = [];
  for (let i = 0; i < bracketsConfig.length; i++) {
    console.log(bracketsConfig[i]);
    let x = bracketsConfig[i];
    pairs.push(x[0]+x[1]);
  }
  console.log('pairs: ', pairs);
  
    for (let k = 0; k < 100; k++) {
      for (let i = 0; i < pairs.length; i++) {
        let x = pairs[i];
        str = str.replace(x, "");
      }
    }
  
  
  if (str != '') {
    return false;
  } else {
    return true;
  }

}