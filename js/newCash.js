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
        screenDisplay = parseFloat(firstNum).toFixed(2);
        displayOnScreen();
      } else {
        firstNum += newNum;
        screenDisplay = parseFloat(firstNum).toFixed(2);
        displayOnScreen();
      }
    } else {
      if (secondNum === 0) {
        secondNum = newNum;
        screenDisplay = parseFloat(secondNum).toFixed(2);
        displayOnScreen();
      } else {
        secondNum += newNum;
        screenDisplay = parseFloat(secondNum).toFixed(2);
        displayOnScreen();
      }
    }
  }

  function displayOnScreen() {
    var calcScreen = document.querySelector("#frameDisplay");
    calcScreen.setAttribute("text", `value: ${parseFloat(screenDisplay).toFixed(2)}; color: white; align:center; font: dejavu; width: 10`);
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
      firstNum = calc.multiply(parseFloat(firstNum), parseFloat(secondNum));
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
    displayOnScreen();
  }

  function clickClear() {
    firstNum = 0;
    secondNum = 0;
    clickedOperation = false;

    divClick = false;
    mltClick = false;
    subClick = false;
    addClick = false;

    screenDisplay = firstNum;
    displayOnScreen();
  }

  function showBalance() {
    clickClear();
    firstNum = calc.getBalance();
    screenDisplay = calc.getBalance();
    displayOnScreen();
  }

  function depositCash() {
    if (screenDisplay === "Infinity" || screenDisplay === "NaN") {
      clickClear();
      displayError();
    } else {
      var myCash = parseFloat(screenDisplay);
      calc.depBalance(myCash);
    }
  }

  function withdrawCash() {
    var myCash = parseFloat(screenDisplay);
    if (screenDisplay === "Infinity" || screenDisplay === "NaN" || myCash > calc.getBalance()) {
      clickClear();
      displayError();
    } else {
      calc.wdBalance(myCash);
    }
  }

  function displayError() {
    var calcScreen = document.querySelector("#frameDisplay");
    calcScreen.setAttribute("text", `value: Unworthy of my Money; color: white; align:center; font: dejavu; width: 10`);
  }



  displayOnScreen();


  return {
    clickNewNum,
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