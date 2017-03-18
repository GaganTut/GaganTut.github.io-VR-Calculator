var frameModular = function() {

  function addAttribute(htmlID, attribute, value) { // Use ID Selector (ex. "#htmlID")
    var thisElement = document.querySelector(htmlID);
    thisElement.setAttribute(attribute, value);
  }

  function attsInElements(htmlID, attrObj) {
    for (var eachAttr in attrObj) {
      addAttribute(htmlID, eachAttr, attrObj[eachAttr]);
    }
  }

  /*var boxAtts = {
    scale : "3 3 3",
    src : "#boxTexture",
    rotation : "0 45 45",
    position : "0 2 -5"
  };*/

  var screenEntAtts = {
    material: "color: skyblue",
    geometry : "primitive: plane; width: 6",
    text : "value: 0; color: white; align: center; font: dejavu; width: 10",
  };


  attsInElements("#calcLabel", screenEntAtts);
  /*attsInElements("#firstBox", boxAtts);*/


  return {
    attsInElements
  }
};