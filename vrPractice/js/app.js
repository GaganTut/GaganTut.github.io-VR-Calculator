var frameModular = function() {

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
    text : "value: /; color: white; align: center; font: dejavu; width: 10"
  };

  var keyMltAtts = {
    keyVal: "*",
    position: "2 1 -6",
    material: "color: deepskyblue; opacity: 0.75",
    geometry : "primitive: plane; width: 2",
    text : "value: *; color: white; align: center; font: dejavu; width: 10"
  };

  var keySubAtts = {
    keyVal: "-",
    position: "2 0 -6",
    material: "color: deepskyblue; opacity: 0.75",
    geometry : "primitive: plane; width: 2",
    text : "value: -; color: white; align: center; font: dejavu; width: 10"
  };

  var keyAddAtts = {
    keyVal: "+",
    position: "2 -1 -6",
    material: "color: deepskyblue; opacity: 0.75",
    geometry : "primitive: plane; width: 2",
    text : "value: +; color: white; align: center; font: dejavu; width: 10"
  };

  var keyClrAtts = {
    position: "4 2 -6",
    material: "color: red; opacity: 0.75",
    geometry : "primitive: plane; width: 2",
    text : "value: Clear; color: white; align: center; font: dejavu; width: 4"
  };

  var keyBalAtts = {
    position: "4 1 -6",
    material: "color: royalblue; opacity: 0.75",
    geometry : "primitive: plane; width: 2",
    text : "value: Get Balance; color: white; align: center; font: dejavu; width: 4"
  };

  var keyDepAtts = {
    position: "4 0 -6",
    material: "color: royalblue; opacity: 0.75",
    geometry : "primitive: plane; width: 2",
    text : "value: Deposit Cash; color: white; align: center; font: dejavu; width: 4"
  };

  var keyWthAtts = {
    position: "4 -1 -6",
    material: "color: royalblue; opacity: 0.75",
    geometry : "primitive: plane; width: 2",
    text : "value: Withdraw Cash; color: white; align: center; font: dejavu; width: 4"
  };

  var keyEquAtts = {
    position: "0 -2 -6",
    material: "color: cyan; opacity: 0.75",
    geometry : "primitive: plane; width: 10",
    text : "value: Equals; color: navy; align: center; font: dejavu; width: 10"
  };

  var animAtts = {
    attribute: "material",
    begin: "myclick",
    dur: "2000",
    to: "color: white; opacity: 0",
    repeat: 2,
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
      newAnim.objKey = attribute[objKey];
    }

    var parent = document.querySelector();
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

  //createEvent("#btn7", animAtts);

  var key7 = document.querySelector("#btn7");
  key7.addEventListener("click", function(event) {
    cashMod.clickNewNum(event.target.attributes.keyVal.value);
    key7.emit("myclick");
  });

  var key8 = document.querySelector("#btn8");
  key8.addEventListener("click", function(event) {
    cashMod.clickNewNum(event.target.attributes.keyVal.value);
  });

  var key9 = document.querySelector("#btn9");
  key9.addEventListener("click", function(event) {
    cashMod.clickNewNum(event.target.attributes.keyVal.value);
  });

  var key6 = document.querySelector("#btn6");
  key6.addEventListener("click", function(event) {
    cashMod.clickNewNum(event.target.attributes.keyVal.value);
  });

  var key5 = document.querySelector("#btn5");
  key5.addEventListener("click", function(event) {
    cashMod.clickNewNum(event.target.attributes.keyVal.value);
  });

  var key4 = document.querySelector("#btn4");
  key4.addEventListener("click", function(event) {
    cashMod.clickNewNum(event.target.attributes.keyVal.value);
  });

  var key3 = document.querySelector("#btn3");
  key3.addEventListener("click", function(event) {
    cashMod.clickNewNum(event.target.attributes.keyVal.value);
  });

  var key2 = document.querySelector("#btn2");
  key2.addEventListener("click", function(event) {
    cashMod.clickNewNum(event.target.attributes.keyVal.value);
  });

  var key1 = document.querySelector("#btn1");
  key1.addEventListener("click", function(event) {
    cashMod.clickNewNum(event.target.attributes.keyVal.value);
  });

  var key0 = document.querySelector("#btn0");
  key0.addEventListener("click", function(event) {
    cashMod.clickNewNum(event.target.attributes.keyVal.value);
  });

  var key00 = document.querySelector("#btn00");
  key00.addEventListener("click", function(event) {
    cashMod.clickNewNum(event.target.attributes.keyVal.value);
  });

  var keyDot = document.querySelector("#btnDot");
  keyDot.addEventListener("click", function(event) {
    cashMod.clickNewNum(event.target.attributes.keyVal.value);
  });

  var keyDiv = document.querySelector("#btnDiv");
  keyDiv.addEventListener("click", function(event) {
    cashMod.clickOperation(event.target.attributes.keyVal.value);
  });

  var keyMlt = document.querySelector("#btnMlt");
  keyMlt.addEventListener("click", function(event) {
    cashMod.clickOperation(event.target.attributes.keyVal.value);
  });

  var keySub = document.querySelector("#btnSub");
  keySub.addEventListener("click", function(event) {
    cashMod.clickOperation(event.target.attributes.keyVal.value);
  });

  var keyAdd = document.querySelector("#btnAdd");
  keyAdd.addEventListener("click", function(event) {
    cashMod.clickOperation(event.target.attributes.keyVal.value);
  });

  var keyClr = document.querySelector("#btnClr");
  keyClr.addEventListener("click", function(event) {
    cashMod.clickClear();
  });

  var keyBal = document.querySelector("#btnBal");
  keyBal.addEventListener("click", function(event) {
    cashMod.showBalance();
  });

  var keyDep = document.querySelector("#btnDep");
  keyDep.addEventListener("click", function(event) {
    cashMod.depositCash();
  });

  var keyWth = document.querySelector("#btnWth");
  keyWth.addEventListener("click", function(event) {
    cashMod.withdrawCash();
  });

  var keyEqu = document.querySelector("#btnEqu");
  keyEqu.addEventListener("click", function(event) {
    cashMod.equalSign();
  });

};