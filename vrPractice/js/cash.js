(function() {

  var frame = frameModular();

  var firstNum = 0.00;
  var exprClicked = false;
  var secondNum = 0.00;
  var screenDisplay = "0";
  var opBtnClass = document.getElementsByClassName("operationBtn");
  var frameLabel = document.getElementById("calcLabel");



  function clearDisplay() {
    firstNum = 0;
    secondNum = 0;
    exprClicked = false;

    for (var dis in opBtnClass) {
      opBtnClass[dis].disabled = false;
    }
    screenDisplay.innerHTML = firstNum;
    checkDecimal();
  }

  function newElement(elemType, parentID, className, htmlID, elemText) {
    var newElem = document.createElement(elemType);
    newElem.id = htmlID;
    newElem.className = className;
    newElem.innerHTML = elemText;

    var parNode = document.getElementById(parentID);
    parNode.appendChild(newElem);
  }

  function clickNumKey(elemID) {
    var thisNumKey = document.getElementById(elemID);
    thisNumKey.addEventListener("click", function(event) {
      displayOnScreen(event.target.innerHTML);
    });
  }

  function operationKey(elemID) {
    var thisOpKey = document.getElementById(elemID);
    thisOpKey.addEventListener("click", function() {
      exprClicked = true;
      for (var i in opBtnClass) {
        opBtnClass[i].disabled = false;
      }
      thisOpKey.disabled = true;
    });
  }

  function displayOnScreen(newNum) {
    if (exprClicked === false) {
      if (firstNum === 0) {
        firstNum = newNum;
        screenDisplay.innerHTML = firstNum;
      } else {
        firstNum += newNum;
        screenDisplay.innerHTML = firstNum;
      }
    } else {
      if (secondNum === 0) {
      secondNum = newNum;
      screenDisplay.innerHTML = secondNum;
    } else {
      secondNum += newNum;
      screenDisplay.innerHTML = secondNum;
    }
    }
    checkDecimal();
  }

  function equalSign() {
    var thisEqualBtn = document.getElementById("equalBtn");
    thisEqualBtn.addEventListener("click", function(){
      if (dvdBtn.disabled === true) {
        firstNum = calc.divide(parseFloat(firstNum), parseFloat(secondNum));
        screenDisplay.innerHTML = parseFloat(firstNum).toFixed(2);
        secondNum = 0;
        exprClicked = false;
      } else if (mltyBtn.disabled === true) {
        firstNum = calc.multiply(parseFloat(firstNum), parseFloat(secondNum));
        screenDisplay.innerHTML = parseFloat(firstNum).toFixed(2);
        secondNum = 0;
        exprClicked = false;
      } else if (subBtn.disabled === true) {
        firstNum = screenDisplay.innerHTML = calc.subtract(parseFloat(firstNum), parseFloat(secondNum));
        secondNum = 0;
        exprClicked = false;
      } else if (addBtn.disabled === true) {
        firstNum = screenDisplay.innerHTML = calc.add(parseFloat(firstNum), parseFloat(secondNum));
        secondNum = 0;
        exprClicked = false;
      }
      for (var dis in opBtnClass) {
        opBtnClass[dis].disabled = false;
      }
      checkDecimal();
    });
  }

  function useClearBtn() {
    var thisClearBtn = document.getElementById("clearBtn");
    thisClearBtn.addEventListener("click", function(){
      clearDisplay();
    });
  }

  function checkDecimal() {
    var deciBtn = document.getElementById("btnDot");
    var checkDec = parseFloat(screenDisplay.innerHTML);
    if (checkDec % 1 !== 0 || screenDisplay.innerHTML.indexOf(".") !== -1) {
      deciBtn.disabled = true;
    } else {
      deciBtn.disabled = false;
    }
  }

  function showBalance() {
    var balBtn = document.getElementById("getBalBtn");
    balBtn.addEventListener("click", function() {
      clearDisplay();
      firstNum = calc.getBalance();
      screenDisplay.innerHTML = calc.getBalance();
    });
  }

  function depCash() {
    var depCashBtn = document.getElementById("depBtn");
    depCashBtn.addEventListener("click", function() {
      calc.depBalance(screenDisplay.innerHTML);
    });
  }

  function withdrawCash() {
    var withCashBtn = document.getElementById("wtdrBtn");
    withCashBtn.addEventListener("click", function() {
      calc.wdBalance(screenDisplay.innerHTML);
    });
  }



  newElement("a-entity", "frameScene", "numberBtns", "btn7", "7");
  clickNumKey("btn7");
  newElement("a-entity", "frameScene", "numberBtns", "btn8", "8");
  clickNumKey("btn8");
  newElement("a-entity", "frameScene", "numberBtns", "btn9", "9");
  clickNumKey("btn9");
  newElement("a-entity", "frameScene", "operationBtn", "dvdBtn", "/");
  operationKey("dvdBtn");
  newElement("a-entity", "frameScene", "topRowBtns spcBtn", "clearBtn", "Clear");
  useClearBtn();

  newElement("a-entity", "frameScene", "numberBtns", "btn4", "4");
  clickNumKey("btn4");
  newElement("a-entity", "frameScene", "numberBtns", "btn5", "5");
  clickNumKey("btn5");
  newElement("a-entity", "frameScene", "numberBtns", "btn6", "6");
  clickNumKey("btn6");
  newElement("a-entity", "frameScene", "operationBtn", "mltyBtn", "*");
  operationKey("mltyBtn");
  newElement("a-entity", "frameScene", "secondRowBtns spcBtn", "getBalBtn", "Get Balance");
  showBalance();

  newElement("a-entity", "frameScene", "numberBtns", "btn3", "3");
  clickNumKey("btn3");
  newElement("a-entity", "frameScene", "numberBtns", "btn2", "2");
  clickNumKey("btn2");
  newElement("a-entity", "frameScene", "numberBtns", "btn1", "1");
  clickNumKey("btn1");
  newElement("a-entity", "frameScene", "operationBtn", "subBtn", "-");
  operationKey("subBtn");
  newElement("a-entity", "frameScene", "thirdRowBtns spcBtn", "depBtn", "Deposit Cash");
  depCash();

  newElement("a-entity", "frameScene", "numberBtns", "btn0", "0");
  clickNumKey("btn0");
  newElement("a-entity", "frameScene", "numberBtns", "btn00", "00");
  clickNumKey("btn00");
  newElement("a-entity", "frameScene", "numberBtns", "btnDot", ".");
  clickNumKey("btnDot");
  newElement("a-entity", "frameScene", "operationBtn", "addBtn", "+");
  operationKey("addBtn");
  newElement("a-entity", "frameScene", "fourthRowBtns spcBtn", "wtdrBtn", "Withdraw Cash");
  withdrawCash();

  newElement("a-entity", "frameScene", "fiftheRowBtns", "equalBtn", "=");
  equalSign();

})();

(function() {
  var calc = frameModular();

  var key7Atts = {
    position: "-2 3 -5",
    material: "color: red",
    geometry : "primitive: plane; width: 2",
    text : "value: 7; color: white; align: center; font: dejavu; width: 10"
  };

  var key8Atts = {
    position: "-1 3 -5",
    material: "color: red",
    geometry : "primitive: plane; width: 2",
    text : "value: 8; color: white; align: center; font: dejavu; width: 10"
  };

  var key9Atts = {
    position: "0 3 -5",
    material: "color: red",
    geometry : "primitive: plane; width: 2",
    text : "value: 9; color: white; align: center; font: dejavu; width: 10"
  };

  var key4Atts = {
    position: "-2 2 -5",
    material: "color: red",
    geometry : "primitive: plane; width: 2",
    text : "value: 4; color: white; align: center; font: dejavu; width: 10"
  };

  var key5Atts = {
    position: "-1 2 -5",
    material: "color: red",
    geometry : "primitive: plane; width: 2",
    text : "value: 5; color: white; align: center; font: dejavu; width: 10"
  };

  var key6Atts = {
    position: "0 2 -5",
    material: "color: red",
    geometry : "primitive: plane; width: 2",
    text : "value: 6; color: white; align: center; font: dejavu; width: 10"
  };

  var key3Atts = {
    position: "-2 1 -5",
    material: "color: red",
    geometry : "primitive: plane; width: 2",
    text : "value: 3; color: white; align: center; font: dejavu; width: 10"
  };

  var key2Atts = {
    position: "-1 1 -5",
    material: "color: red",
    geometry : "primitive: plane; width: 2",
    text : "value: 2; color: white; align: center; font: dejavu; width: 10"
  };

  var key1Atts = {
    position: "0 1 -5",
    material: "color: red",
    geometry : "primitive: plane; width: 2",
    text : "value: 1; color: white; align: center; font: dejavu; width: 10"
  };

  var key0Atts = {
    position: "-2 0 -5",
    material: "color: red",
    geometry : "primitive: plane; width: 2",
    text : "value: 0; color: white; align: center; font: dejavu; width: 10"
  };

  var key00Atts = {
    position: "-1 0 -5",
    material: "color: red",
    geometry : "primitive: plane; width: 2",
    text : "value: 00; color: white; align: center; font: dejavu; width: 10"
  };

  var keyDotAtts = {
    position: "0 0 -5",
    material: "color: red",
    geometry : "primitive: plane; width: 2",
    text : "value: .; color: white; align: center; font: dejavu; width: 10"
  };

  var keyDivAtts = {
    position: "1 3 -5",
    material: "color: red",
    geometry : "primitive: plane; width: 2",
    text : "value: /; color: white; align: center; font: dejavu; width: 10"
  };

  var keyMltAtts = {
    position: "1 2 -5",
    material: "color: red",
    geometry : "primitive: plane; width: 2",
    text : "value: *; color: white; align: center; font: dejavu; width: 10"
  };

  var keySubAtts = {
    position: "1 1 -5",
    material: "color: red",
    geometry : "primitive: plane; width: 2",
    text : "value: -; color: white; align: center; font: dejavu; width: 10"
  };

  var keyAddAtts = {
    position: "1 0 -5",
    material: "color: red",
    geometry : "primitive: plane; width: 2",
    text : "value: +; color: white; align: center; font: dejavu; width: 10"
  };

  var keyClrAtts = {
    position: "2 3 -5",
    material: "color: red",
    geometry : "primitive: plane; width: 2",
    text : "value: Clear; color: white; align: center; font: dejavu; width: 4"
  };

  var keyBalAtts = {
    position: "2 2 -5",
    material: "color: red",
    geometry : "primitive: plane; width: 2",
    text : "value: Get Balance; color: white; align: center; font: dejavu; width: 4"
  };

  var keyDepAtts = {
    position: "2 1 -5",
    material: "color: red",
    geometry : "primitive: plane; width: 2",
    text : "value: Deposit Cash; color: white; align: center; font: dejavu; width: 4"
  };

  var keyWthAtts = {
    position: "2 0 -5",
    material: "color: red",
    geometry : "primitive: plane; width: 2",
    text : "value: Withdraw Cash; color: white; align: center; font: dejavu; width: 4"
  };

  var keyEquAtts = {
    position: "0 -1 -5",
    material: "color: red",
    geometry : "primitive: plane; width: 2",
    text : "value: =; color: white; align: center; font: dejavu; width: 10"
  };



  calc.attsInElements("#btn7", key7Atts);
  calc.attsInElements("#btn8", key8Atts);
  calc.attsInElements("#btn9", key9Atts);
  calc.attsInElements("#btn4", key4Atts);
  calc.attsInElements("#btn5", key5Atts);
  calc.attsInElements("#btn6", key6Atts);
  calc.attsInElements("#btn3", key3Atts);
  calc.attsInElements("#btn2", key2Atts);
  calc.attsInElements("#btn1", key1Atts);
  calc.attsInElements("#btn00", key00Atts);
  calc.attsInElements("#btn0", key0Atts);
  calc.attsInElements("#btnDot", keyDotAtts);

  calc.attsInElements("#dvdBtn", keyDivAtts);
  calc.attsInElements("#mltyBtn", keyMltAtts);
  calc.attsInElements("#subBtn", keySubAtts);
  calc.attsInElements("#addBtn", keyAddAtts);
  calc.attsInElements("#clearBtn", keyClrAtts);
  calc.attsInElements("#getBalBtn", keyBalAtts);
  calc.attsInElements("#depBtn", keyDepAtts);
  calc.attsInElements("#wtdrBtn", keyWthAtts);
  calc.attsInElements("#equalBtn", keyEquAtts);


})();

