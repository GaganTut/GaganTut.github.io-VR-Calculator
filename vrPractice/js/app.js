var frameModular = function() {

  var screenEntAtts = {
    position: "0 4 -5",
    material: "color: skyblue",
    geometry : "primitive: plane; width: 6",
    text : "value: 0",
  };

  var key7Atts = {
    keyVal: 7,
    position: "-4 3 -5",
    material: "color: red",
    geometry : "primitive: plane; width: 1",
    text : "value: 7; color: white; align: center; font: dejavu; width: 10"
  };

  var key8Atts = {
    keyVal: 8,
    position: "-2 3 -5",
    material: "color: red",
    geometry : "primitive: plane; width: 1",
    text : "value: 8; color: white; align: center; font: dejavu; width: 10"
  };

  var key9Atts = {
    keyVal: 9,
    position: "0 3 -5",
    material: "color: red",
    geometry : "primitive: plane; width: 1",
    text : "value: 9; color: white; align: center; font: dejavu; width: 10"
  };

  var key4Atts = {
    keyVal: 4,
    position: "-4 2 -5",
    material: "color: red",
    geometry : "primitive: plane; width: 1",
    text : "value: 4; color: white; align: center; font: dejavu; width: 10"
  };

  var key5Atts = {
    keyVal: 5,
    position: "-2 2 -5",
    material: "color: red",
    geometry : "primitive: plane; width: 1",
    text : "value: 5; color: white; align: center; font: dejavu; width: 10"
  };

  var key6Atts = {
    keyVal: 6,
    position: "0 2 -5",
    material: "color: red",
    geometry : "primitive: plane; width: 1",
    text : "value: 6; color: white; align: center; font: dejavu; width: 10"
  };

  var key3Atts = {
    keyVal: 3,
    position: "-4 1 -5",
    material: "color: red",
    geometry : "primitive: plane; width: 1",
    text : "value: 3; color: white; align: center; font: dejavu; width: 10"
  };

  var key2Atts = {
    keyVal: 2,
    position: "-2 1 -5",
    material: "color: red",
    geometry : "primitive: plane; width: 1",
    text : "value: 2; color: white; align: center; font: dejavu; width: 10"
  };

  var key1Atts = {
    keyVal: 1,
    position: "0 1 -5",
    material: "color: red",
    geometry : "primitive: plane; width: 1",
    text : "value: 1; color: white; align: center; font: dejavu; width: 10"
  };

  var key0Atts = {
    keyVal: 0,
    position: "-4 0 -5",
    material: "color: red",
    geometry : "primitive: plane; width: 1",
    text : "value: 0; color: white; align: center; font: dejavu; width: 10"
  };

  var key00Atts = {
    keyVal: "00",
    position: "-2 0 -5",
    material: "color: red",
    geometry : "primitive: plane; width: 1",
    text : "value: 00; color: white; align: center; font: dejavu; width: 10"
  };

  var keyDotAtts = {
    position: "0 0 -5",
    material: "color: red",
    geometry : "primitive: plane; width: 1",
    text : "value: .; color: white; align: center; font: dejavu; width: 10"
  };

  var keyDivAtts = {
    position: "2 3 -5",
    material: "color: red",
    geometry : "primitive: plane; width: 1",
    text : "value: /; color: white; align: center; font: dejavu; width: 10"
  };

  var keyMltAtts = {
    position: "2 2 -5",
    material: "color: red",
    geometry : "primitive: plane; width: 1",
    text : "value: *; color: white; align: center; font: dejavu; width: 10"
  };

  var keySubAtts = {
    position: "2 1 -5",
    material: "color: red",
    geometry : "primitive: plane; width: 1",
    text : "value: -; color: white; align: center; font: dejavu; width: 10"
  };

  var keyAddAtts = {
    position: "2 0 -5",
    material: "color: red",
    geometry : "primitive: plane; width: 1",
    text : "value: +; color: white; align: center; font: dejavu; width: 10"
  };

  var keyClrAtts = {
    position: "4 3 -5",
    material: "color: red",
    geometry : "primitive: plane; width: 1",
    text : "value: Clear; color: white; align: center; font: dejavu; width: 4"
  };

  var keyBalAtts = {
    position: "4 2 -5",
    material: "color: red",
    geometry : "primitive: plane; width: 1",
    text : "value: Get Balance; color: white; align: center; font: dejavu; width: 4"
  };

  var keyDepAtts = {
    position: "4 1 -5",
    material: "color: red",
    geometry : "primitive: plane; width: 1",
    text : "value: Deposit Cash; color: white; align: center; font: dejavu; width: 4"
  };

  var keyWthAtts = {
    position: "4 0 -5",
    material: "color: red",
    geometry : "primitive: plane; width: 1",
    text : "value: Withdraw Cash; color: white; align: center; font: dejavu; width: 4"
  };

  var keyEquAtts = {
    position: "0 -1 -5",
    material: "color: red",
    geometry : "primitive: plane; width: 1",
    text : "value: =; color: white; align: center; font: dejavu; width: 10"
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
  createframeElem("a-entity", "#frameScene", "btnD0", key00Atts);
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

  var key7 = document.querySelector("#btn7");
  key7.addEventListener("click", function(event) {
    cashMod.clickNewNum(event.target.attributes.keyVal.value);
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

};