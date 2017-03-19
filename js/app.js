≠≠var frameModular = function() {

  var screenEntAtts = {
    rotation: "30 0 0",
    position: "0 3 -5",
    material: "color: navy; opacity: 0.75",
    geometry : "primitive: plane; width: 10",
    text : "value: 0",
  };

  var key7Atts = {
    keyVal: 7,
    position: "-4 2 -6",
    material: "color: lightsteelblue; opacity: 0.75",
    geometry : "primitive: plane; width: 2",
    text : "value: 7; color: navy; align: center; font: dejavu; width: 10"
  };

  var key8Atts = {
    keyVal: 8,
    position: "-2 2 -6",
    material: "color: silver; opacity: 0.75",
    geometry : "primitive: plane; width: 2",
    text : "value: 8; color: navy; align: center; font: dejavu; width: 10"
  };

  var key9Atts = {
    keyVal: 9,
    position: "0 2 -6",
    material: "color: lightsteelblue; opacity: 0.75",
    geometry : "primitive: plane; width: 2",
    text : "value: 9; color: navy; align: center; font: dejavu; width: 10"
  };

  var key4Atts = {
    keyVal: 4,
    position: "-4 1 -6",
    material: "color: silver; opacity: 0.75",
    geometry : "primitive: plane; width: 2",
    text : "value: 4; color: navy; align: center; font: dejavu; width: 10"
  };

  var key5Atts = {
    keyVal: 5,
    position: "-2 1 -6",
    material: "color: lightsteelblue; opacity: 0.75",
    geometry : "primitive: plane; width: 2",
    text : "value: 5; color: navy; align: center; font: dejavu; width: 10"
  };

  var key6Atts = {
    keyVal: 6,
    position: "0 1 -6",
    material: "color: silver; opacity: 0.75",
    geometry : "primitive: plane; width: 2",
    text : "value: 6; color: navy; align: center; font: dejavu; width: 10"
  };

  var key3Atts = {
    keyVal: 3,
    position: "-4 0 -6",
    material: "color: lightsteelblue; opacity: 0.75",
    geometry : "primitive: plane; width: 2",
    text : "value: 3; color: navy; align: center; font: dejavu; width: 10"
  };

  var key2Atts = {
    keyVal: 2,
    position: "-2 0 -6",
    material: "color: silver; opacity: 0.75",
    geometry : "primitive: plane; width: 2",
    text : "value: 2; color: navy; align: center; font: dejavu; width: 10"
  };

  var key1Atts = {
    keyVal: 1,
    position: "0 0 -6",
    material: "color: lightsteelblue; opacity: 0.75",
    geometry : "primitive: plane; width: 2",
    text : "value: 1; color: navy; align: center; font: dejavu; width: 10"
  };

  var key0Atts = {
    keyVal: 0,
    position: "-4 -1 -6",
    material: "color: silver; opacity: 0.75",
    geometry : "primitive: plane; width: 2",
    text : "value: 0; color: navy; align: center; font: dejavu; width: 10"
  };

  var key00Atts = {
    keyVal: "00",
    position: "-2 -1 -6",
    material: "color: lightsteelblue; opacity: 0.75",
    geometry : "primitive: plane; width: 2",
    text : "value: 00; color: navy; align: center; font: dejavu; width: 10"
  };

  var keyDotAtts = {
    keyVal: ".",
    position: "0 -1 -6",
    material: "color: silver; opacity: 0.75",
    geometry : "primitive: plane; width: 2",
    text : "value: .; color: navy; align: center; font: dejavu; width: 10"
  };

  var keyDivAtts = {
    keyVal: "/",
    position: "2 2 -6",
    material: "color: deepskyblue; opacity: 0.75",
    geometry : "primitive: plane; width: 2",
    text : "value: Divided By; color: black; align: center; font: dejavu; width: 6"
  };

  var keyMltAtts = {
    keyVal: "*",
    position: "2 1 -6",
    material: "color: deepskyblue; opacity: 0.75",
    geometry : "primitive: plane; width: 2",
    text : "value: Times; color: black; align: center; font: dejavu; width: 6"
  };

  var keySubAtts = {
    keyVal: "-",
    position: "2 0 -6",
    material: "color: deepskyblue; opacity: 0.75",
    geometry : "primitive: plane; width: 2",
    text : "value: Minus; color: black; align: center; font: dejavu; width: 6"
  };

  var keyAddAtts = {
    keyVal: "+",
    position: "2 -1 -6",
    material: "color: deepskyblue; opacity: 0.75",
    geometry : "primitive: plane; width: 2",
    text : "value: Plus; color: black; align: center; font: dejavu; width: 6"
  };

  var keyClrAtts = {
    position: "4 2 -6",
    material: "color: red; opacity: 0.75",
    geometry : "primitive: plane; width: 2",
    text : "value: Clear; color: white; align: center; font: dejavu; width: 6"
  };

  var keyBalAtts = {
    position: "4 1 -6",
    material: "color: limegreen; opacity: 0.75",
    geometry : "primitive: plane; width: 2",
    text : "value: Get Balance; color: navy; align: center; font: dejavu; width: 6"
  };

  var keyDepAtts = {
    position: "4 0 -6",
    material: "color: limegreen; opacity: 0.75",
    geometry : "primitive: plane; width: 2",
    text : "value: Deposit Cash; color: navy; align: center; font: dejavu; width: 6"
  };

  var keyWthAtts = {
    position: "4 -1 -6",
    material: "color: limegreen; opacity: 0.75",
    geometry : "primitive: plane; width: 2",
    text : "value: Withdraw Cash; color: navy; align: center; font: dejavu; width: 6"
  };

  var keyEquAtts = {
    position: "0 -2 -6",
    material: "color: cyan; opacity: 0.75",
    geometry : "primitive: plane; width: 10",
    text : "value: Equals; color: navy; align: center; font: dejavu; width: 10"
  };

  var animAtts = {
    attribute: "rotation",
    begin: "myclick",
    dur: "300",
    to: "360 0 0",
    repeat: 1,
    direction: "normal"
  };

  var operAtts = {
    attribute: "rotation",
    begin: "myclick",
    dur: "300",
    to: "0 0 360",
    repeat: 1,
    direction: "normal"
  };

  var bankAtts = {
    attribute: "rotation",
    begin: "myclick",
    dur: "300",
    to: "0 360 0",
    repeat: 1,
    direction: "normal"
  };

  var explodeAnim = {
    attribute: "scale",
    begin: "clearClick",
    dur: "500",
    to: "0.1 0.1 0.1",
    repeat: 1,
    direction: "alternate"
  };

  var equalDisplayAtts = {
    attribute: "position",
    begin: "equalClick",
    dur: "500",
    to: "0 0 -0.5",
    repeat: 1,
    direction: "alternate"
  };

  var equalDisplayAtts2 = {
    attribute: "rotation",
    begin: "equalClick",
    dur: "500",
    to: "0 0 0",
    repeat: 1,
    direction: "alternate"
  };


  function addAttribute(htmlID, attribute, value) { // Use ID Selector (ex. "#htmlID")
    var thisElement = document.querySelector(htmlID);
    thisElement.setAttribute(attribute, value);
  }

  function attsInElements(htmlID, attrObj) {
    for (var eachAttr in attrObj) {
      addAttribute(htmlID, eachAttr, attrObj[eachAttr]);
    }
  }

  function createframeElem(elemType, parentID, htmlID, attrObj, className) {
    var newElem = document.createElement(elemType);
    newElem.id = htmlID;
    newElem.className = className;

    document.querySelector(parentID).appendChild(newElem);
    attsInElements("#" + htmlID, attrObj);
  }

  function createEvent(parentID, attrObj) {
    var newAnim = document.createElement("a-animation");
    for (var objKey in attrObj) {
      newAnim.setAttribute(objKey, attrObj[objKey]);
    }

    var parent = document.querySelector(parentID);
    parent.appendChild(newAnim);
  }

  createframeElem("a-entity", "#frameScene", "frameDisplay", screenEntAtts);
  createframeElem("a-entity", "#frameScene", "btn7", key7Atts);
  createframeElem("a-entity", "#frameScene", "btn8", key8Atts);
  createframeElem("a-entity", "#frameScene", "btn9", key9Atts);
  createframeElem("a-entity", "#frameScene", "btn6", key6Atts);
  createframeElem("a-entity", "#frameScene", "btn5", key5Atts);
  createframeElem("a-entity", "#frameScene", "btn4", key4Atts);
  createframeElem("a-entity", "#frameScene", "btn3", key3Atts);
  createframeElem("a-entity", "#frameScene", "btn2", key2Atts);
  createframeElem("a-entity", "#frameScene", "btn1", key1Atts);
  createframeElem("a-entity", "#frameScene", "btn0", key0Atts);
  createframeElem("a-entity", "#frameScene", "btn00", key00Atts);
  createframeElem("a-entity", "#frameScene", "btnDot", keyDotAtts);
  createframeElem("a-entity", "#frameScene", "btnDiv", keyDivAtts, "operBtn");
  createframeElem("a-entity", "#frameScene", "btnMlt", keyMltAtts, "operBtn");
  createframeElem("a-entity", "#frameScene", "btnSub", keySubAtts, "operBtn");
  createframeElem("a-entity", "#frameScene", "btnAdd", keyAddAtts, "operBtn");
  createframeElem("a-entity", "#frameScene", "btnClr", keyClrAtts);
  createframeElem("a-entity", "#frameScene", "btnBal", keyBalAtts);
  createframeElem("a-entity", "#frameScene", "btnDep", keyDepAtts);
  createframeElem("a-entity", "#frameScene", "btnWth", keyWthAtts);
  createframeElem("a-entity", "#frameScene", "btnEqu", keyEquAtts);


  var topDisplay = document.querySelector("#frameDisplay");

  var key7 = document.querySelector("#btn7");
  key7.addEventListener("click", function(event) {
    cashMod.clickNewNum(event.target.attributes.keyVal.value);
    key7.emit("myclick");

    console.log(event);
  });

  var key8 = document.querySelector("#btn8");
  key8.addEventListener("click", function(event) {
    cashMod.clickNewNum(event.target.attributes.keyVal.value);
    key8.emit("myclick");
  });

  var key9 = document.querySelector("#btn9");
  key9.addEventListener("click", function(event) {
    cashMod.clickNewNum(event.target.attributes.keyVal.value);
    key9.emit("myclick");
  });

  var key6 = document.querySelector("#btn6");
  key6.addEventListener("click", function(event) {
    cashMod.clickNewNum(event.target.attributes.keyVal.value);
    key6.emit("myclick");
  });

  var key5 = document.querySelector("#btn5");
  key5.addEventListener("click", function(event) {
    cashMod.clickNewNum(event.target.attributes.keyVal.value);
    key5.emit("myclick");
  });

  var key4 = document.querySelector("#btn4");
  key4.addEventListener("click", function(event) {
    cashMod.clickNewNum(event.target.attributes.keyVal.value);
    key4.emit("myclick");
  });

  var key3 = document.querySelector("#btn3");
  key3.addEventListener("click", function(event) {
    cashMod.clickNewNum(event.target.attributes.keyVal.value);
    key3.emit("myclick");
  });

  var key2 = document.querySelector("#btn2");
  key2.addEventListener("click", function(event) {
    cashMod.clickNewNum(event.target.attributes.keyVal.value);
    key2.emit("myclick");
  });

  var key1 = document.querySelector("#btn1");
  key1.addEventListener("click", function(event) {
    cashMod.clickNewNum(event.target.attributes.keyVal.value);
    key1.emit("myclick");
  });

  var key0 = document.querySelector("#btn0");
  key0.addEventListener("click", function(event) {
    cashMod.clickNewNum(event.target.attributes.keyVal.value);
    key0.emit("myclick");
  });

  var key00 = document.querySelector("#btn00");
  key00.addEventListener("click", function(event) {
    cashMod.clickNewNum(event.target.attributes.keyVal.value);
    key00.emit("myclick");
  });

  var keyDot = document.querySelector("#btnDot");
  keyDot.addEventListener("click", function(event) {
    cashMod.clickNewNum(event.target.attributes.keyVal.value);
    keyDot.emit("myclick");
  });

  var keyDiv = document.querySelector("#btnDiv");
  keyDiv.addEventListener("click", function(event) {
    cashMod.clickOperation(event.target.attributes.keyVal.value);
    keyDiv.emit("myclick");
  });

  var keyMlt = document.querySelector("#btnMlt");
  keyMlt.addEventListener("click", function(event) {
    cashMod.clickOperation(event.target.attributes.keyVal.value);
    keyMlt.emit("myclick");
  });

  var keySub = document.querySelector("#btnSub");
  keySub.addEventListener("click", function(event) {
    cashMod.clickOperation(event.target.attributes.keyVal.value);
    keySub.emit("myclick");
  });

  var keyAdd = document.querySelector("#btnAdd");
  keyAdd.addEventListener("click", function(event) {
    cashMod.clickOperation(event.target.attributes.keyVal.value);
    keyAdd.emit("myclick");
  });

  var keyClr = document.querySelector("#btnClr");
  keyClr.addEventListener("click", function(event) {
    cashMod.clickClear();
    keyClr.emit("clearClick");
    key9.emit("clearClick");
    key8.emit("clearClick");
    key7.emit("clearClick");
    key6.emit("clearClick");
    key5.emit("clearClick");
    key4.emit("clearClick");
    key3.emit("clearClick");
    key2.emit("clearClick");
    key1.emit("clearClick");
    key0.emit("clearClick");
    key00.emit("clearClick");
    keyDot.emit("clearClick");
    keyDiv.emit("clearClick");
    keyMlt.emit("clearClick");
    keySub.emit("clearClick");
    keyAdd.emit("clearClick");


  });

  var keyBal = document.querySelector("#btnBal");
  keyBal.addEventListener("click", function(event) {
    cashMod.showBalance();
    keyBal.emit("myclick");
  });

  var keyDep = document.querySelector("#btnDep");
  keyDep.addEventListener("click", function(event) {
    cashMod.depositCash();
    keyDep.emit("myclick");
  });

  var keyWth = document.querySelector("#btnWth");
  keyWth.addEventListener("click", function(event) {
    cashMod.withdrawCash();
    keyWth.emit("myclick");
  });

  var keyEqu = document.querySelector("#btnEqu");
  keyEqu.addEventListener("click", function(event) {
    cashMod.equalSign();
    topDisplay.emit("equalClick");
  });

  createEvent("#btn9", animAtts);
  createEvent("#btn8", animAtts);
  createEvent("#btn7", animAtts);
  createEvent("#btn6", animAtts);
  createEvent("#btn5", animAtts);
  createEvent("#btn4", animAtts);
  createEvent("#btn3", animAtts);
  createEvent("#btn2", animAtts);
  createEvent("#btn1", animAtts);
  createEvent("#btn0", animAtts);
  createEvent("#btn00", animAtts);
  createEvent("#btnDot", animAtts);

  createEvent("#btnDiv", operAtts);
  createEvent("#btnMlt", operAtts);
  createEvent("#btnSub", operAtts);
  createEvent("#btnAdd", operAtts);

  createEvent("#btnBal", bankAtts);
  createEvent("#btnDep", bankAtts);
  createEvent("#btnWth", bankAtts);

  createEvent("#btnClr", explodeAnim);
  createEvent("#btn9", explodeAnim);
  createEvent("#btn8", explodeAnim);
  createEvent("#btn7", explodeAnim);
  createEvent("#btn6", explodeAnim);
  createEvent("#btn5", explodeAnim);
  createEvent("#btn4", explodeAnim);
  createEvent("#btn3", explodeAnim);
  createEvent("#btn2", explodeAnim);
  createEvent("#btn1", explodeAnim);
  createEvent("#btn0", explodeAnim);
  createEvent("#btn00", explodeAnim);
  createEvent("#btnDot", explodeAnim);
  createEvent("#btnDiv", explodeAnim);
  createEvent("#btnMlt", explodeAnim);
  createEvent("#btnSub", explodeAnim);
  createEvent("#btnAdd", explodeAnim);


  createEvent("#frameDisplay", equalDisplayAtts);
  createEvent("#frameDisplay", equalDisplayAtts2);

};