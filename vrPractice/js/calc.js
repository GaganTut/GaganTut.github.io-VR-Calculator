var calculatorModule = (function() {
  var _memory = 0;
  var _registerBalance = 0;

  function load(newTotal) {
    _total = newTotal;
    return _total.toFixed(2);
  }
  function getTotal() {
    return _total.toFixed(2);
  }
  function addy(num1, num2) {
    newSum = num1 + num2;
    return newSum.toFixed(2);
  }
  function subtract(num1, num2) {
    newSub = num1 - num2;
    return newSub.toFixed(2);
  }
  function multiply(num1, num2) {
    newMlty = num1 * num2;
    return newMlty.toFixed(2);
  }
  function divide(num1, num2) {
    newDvd = num1 / num2;
    return newDvd.toFixed(2);
  }

  function getBalance() {
    return _registerBalance;
  }

  function depBalance(num) {
    var toNum = parseFloat(num);
    _registerBalance += toNum;
  }

  function wdBalance(num) {
    var toNum = parseFloat(num);
    _registerBalance -= toNum;
  }

  function clear() {
    _total = 0;
    return _total.toFixed(0);
  }

  var calculator = {
    load,
    getTotal,
    addy,
    subtract,
    multiply,
    divide,
    getBalance,
    depBalance,
    wdBalance,
    clear
  };

  return calculator;
});
