cashMod = (function() {
  var fraMod = frameModular();

  var calc = calculatorModule();

  var firstNum = 0;
  var clickedOperation = false;
  var secondNum = 0;
  var screenDisplay = "0";

  var hasDecimal = false;

  var divClick = false;
  var mltClick = false;
  var subClick = false;
  var addClick = false;

  function clickNewNum(newNum) {
    if (clickedOperation === false) {
      if (firstNum === 0) {
        firstNum = newNum;
        screenDisplay = newNum;
        displayOnScreen();
      } else {
        firstNum += newNum;
        screenDisplay = firstNum;
        displayOnScreen();
      }
    } else {
      if (secondNum === 0) {
        secondNum = newNum;
        screenDisplay = secondNum;
        displayOnScreen();
      } else {
        secondNum += newNum;
        screenDisplay = firstNum;
        displayOnScreen();
      }
    }
  }

  function checkDecimal() {
    var checkDec = parseFloat(screenDisplay);
    if (checkDec % 1 !== 0 || screenDisplay.indexOf(".") !== -1) {
      hasDecimal = true;
    } else {
      hasDecimal = false;
    }
  }

  function displayOnScreen() {
    var calcScreen = document.querySelector("#frameDisplay");
    calcScreen.setAttribute("text", `value: ${screenDisplay}`);
  }

  function clickNumKey(value) {
    clickNewNum(value);
  }

  function clickOperation(value) {
    clickedOperation = true;
    switch (value) {
      case "/":
        divClick = true;
        mltClick = false;
        subClick = false;
        addClick = false;
        break;
      case "*":
        divClick = false;
        mltClick = true;
        subClick = false;
        addClick = false;
        break;
      case "-":
        divClick = false;
        mltClick = false;
        subClick = true;
        addClick = false;
        break;
      case "+":
        divClick = false;
        mltClick = false;
        subClick = false;
        addClick = true;
        break;
    }
  }

  function equalSign() {
    if (divClick) {
      firstNum = calc.divide(parseFloat(firstNum), parseFloat(secondNum));
      screenDisplay = parseFloat(firstNum).toFixed(2);
      secondNum = 0;
      clickedOperation = false;
    } else if (mltClick) {
      firstNum = calc.mulitply(parseFloat(firstNum), parseFloat(secondNum));
      screenDisplay = parseFloat(firstNum).toFixed(2);
      secondNum = 0;
      clickedOperation = false;
    } else if (subClick) {
      firstNum = calc.subtract(parseFloat(firstNum), parseFloat(secondNum));
      screenDisplay = parseFloat(firstNum).toFixed(2);
      secondNum = 0;
      clickedOperation = false;
    } else if (addClick) {
      firstNum = calc.addy(parseFloat(firstNum), parseFloat(secondNum));
      screenDisplay = parseFloat(firstNum).toFixed(2);
      secondNum = 0;
      clickedOperation = false;
    }
    checkDecimal();
  }

  function clickClear() {
    firstNum = 0;
    secondNum = 0;
    clickedOperation = 0;

    divClick = false;
    mltClick = false;
    subClick = false;
    addClick = true;

    screenDisplay = firstNum;
    checkDecimal();
  }

  function showBalance() {
    clickClear();
    firstNum = calc.getBalance();
    screenDisplay = calc.getBalance();
  }

  function depositCash() {
    calc.depBalance();
  }

  function withdrawCash() {
    calc.wdBalance();
  }


  return {
    clickNewNum,
    checkDecimal,
    displayOnScreen,
    clickNumKey,
    clickOperation,
    equalSign,
    clickClear,
    showBalance,
    depositCash,
    withdrawCash
  }

})();