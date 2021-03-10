class Shade {
    constructor(brand, source, name, color, finish, photo) {
      this.brand = brand;
      this.source = source;
      this.name = name;
      this.color = color;
      this.finish = finish;
      this.photo = photo;
    }

  }

shades = [

    // ND Bronze Palette
    new Shade("Natasha Denona", "Bronze", "True Copper", "copper", "metallic", "photos/nd-bronze/true-copper.jpg"),
    new Shade("Natasha Denona", "Bronze", "True Bronze", "copper", "metallic", "photos/nd-bronze/true-bronze.jpg"),
    new Shade("Natasha Denona", "Bronze", "Suntan", "brown", "matte", "photos/nd-bronze/suntan.jpg"),
    new Shade("Natasha Denona", "Bronze", "Sundown", "orange", "matte", "photos/nd-bronze/sundown.jpg"),
    new Shade("Natasha Denona", "Bronze", "Deep Dive", "burgundy", "satin", "photos/nd-bronze/deep-dive.jpg"),
    new Shade("Natasha Denona", "Bronze", "Rhodium", "purple", "duochrome", "photos/nd-bronze/rhodium.jpg"),
    new Shade("Natasha Denona", "Bronze", "Magma", "red", "matte", "photos/nd-bronze/magma.jpg"),
    new Shade("Natasha Denona", "Bronze", "High Degree", "copper", "metallic", "photos/nd-bronze/high-degree.jpg"),
    new Shade("Natasha Denona", "Bronze", "Alloy", "copper", "metallic", "photos/nd-bronze/alloy.jpg"),
    new Shade("Natasha Denona", "Bronze", "Ridge", "light brown", "matte", "photos/nd-bronze/ridge.jpg"),
    new Shade("Natasha Denona", "Bronze", "Gloaming", "coral", "metallic", "photos/nd-bronze/gloaming.jpg"),
    new Shade("Natasha Denona", "Bronze", "Palladium", "bronze", "metallic", "photos/nd-bronze/palladium.jpg"),
    new Shade("Natasha Denona", "Bronze", "Bliss", "coral", "duochrome", "photos/nd-bronze/bliss.jpg"),
    new Shade("Natasha Denona", "Bronze", "Silk", "copper", "metallic", "photos/nd-bronze/silk.jpg"),
    new Shade("Natasha Denona", "Bronze", "Beach", "peach", "matte", "photos/nd-bronze/beach.jpg"),

    // Lime Crime Venus XL
    new Shade("Lime Crime", "Venus XL", "Eden", "rose", "metallic", "photos/lc-venus-xl/eden.jpg"),
    new Shade("Lime Crime", "Venus XL", "Love", "bronze", "metallic", "photos/lc-venus-xl/love.jpg"),
    new Shade("Lime Crime", "Venus XL", "Passion", "pink", "matte", "photos/lc-venus-xl/passion.jpg"),
    new Shade("Lime Crime", "Venus XL", "Fresca", "taupe", "sparkle matte", "photos/lc-venus-xl/fresca.jpg"),
    new Shade("Lime Crime", "Venus XL", "Inspire", "pink", "metallic", "photos/lc-venus-xl/inspire.jpg"),
    new Shade("Lime Crime", "Venus XL", "Idolized", "peach", "matte", "photos/lc-venus-xl/idolized.jpg"),
    new Shade("Lime Crime", "Venus XL", "Aphrodite", "brown", "matte", "photos/lc-venus-xl/aphrodite.jpg"),
    new Shade("Lime Crime", "Venus XL", "Nu Classic", "bronze", "metallic", "photos/lc-venus-xl/nu-classic.jpg"),
    new Shade("Lime Crime", "Venus XL", "Burnt Gold", "terracotta", "matte", "photos/lc-venus-xl/burnt-gold.jpg"),
    new Shade("Lime Crime", "Venus XL", "Flora", "coral", "matte", "photos/lc-venus-xl/flora.jpg"),
    new Shade("Lime Crime", "Venus XL", "Scallop", "coral", "matte", "photos/lc-venus-xl/scallop.jpg"),
    new Shade("Lime Crime", "Venus XL", "Celestial", "burgundy", "sparkle matte", "photos/lc-venus-xl/celestial.jpg"),
    new Shade("Lime Crime", "Venus XL", "Ethereal", "rose gold", "metallic", "photos/lc-venus-xl/ethereal.jpg"),
    new Shade("Lime Crime", "Venus XL", "Triumph", "pink", "matte", "photos/lc-venus-xl/triumph.jpg"),
    new Shade("Lime Crime", "Venus XL", "Supreme", "mauve", "matte", "photos/lc-venus-xl/love.jpg"),
    new Shade("Lime Crime", "Venus XL", "Blank Canvas", "beige", "matte", "photos/lc-venus-xl/blank-canvas.jpg"),
    new Shade("Lime Crime", "Venus XL", "Boticelli", "wine", "matte", "photos/lc-venus-xl/boticelli.jpg"),
    new Shade("Lime Crime", "Venus XL", "Goddess", "pink", "matte", "photos/lc-venus-xl/goddess.jpg"),

];

let gallery = document.getElementById("gallery");

// default shadeSource is the shades array
let shadeSource = shades;

// function to add filter parameters to menu
function populateMenu(){
  let brands = new Array();
  let colors = new Array();
  let finishes = new Array();
  for (let i = 0; i < shades.length; i++){

    check(shades[i].brand, "brand", brands);
    check(shades[i].finish, "finish", finishes);
    check(shades[i].color, "color", colors);
  
  }

  function check(content, prop, array){
    if (array.indexOf(content) === -1) {
      array.push(content);
      add(content, prop);
    }
  }

  function add(content, prop){
    filter = document.createElement("div");
    filter.classList.add("filter");
    filter.innerHTML = content;
    filter.addEventListener("click", addFilter(prop, content, filter));

    document.getElementById(prop + "-filters").append(filter);
  }
}

// method to display shades in gallery
// PARAMETER source: the array from which the shades to display are stored
function displayShades(source){
  clear();

  for (let i = 0; i < source.length; i++){

    shadeBox = document.createElement("div");
    shadeBox.classList.add("shade-box");
    shadeBoxImg = document.createElement("img");
    shadeBoxImg.src = source[i].photo;
    shadeBox.appendChild(shadeBoxImg);
    gallery.append(shadeBox);

    shadeBox.classList.add("shade-box");
    if (i % 4 == 0 || i == 0){
      shadeBox.style.paddingLeft = "0%";
    }
  }
}

let filterObject = {
  brand: new Array(),
  color: new Array(),
  finish: new Array()
};

function displayAll(){

  filterObject.brand = [];
  filterObject.color = [];
  filterObject.finish = [];

  let filterButtons = document.getElementsByClassName("filter");
  for (let i = 0; i < filterButtons.length; i++){
    filterButtons[i].style.fontWeight = "normal";
  }

  displayShades(shades);
}

function addFilter(prop, value, button){

  return function(){
    if (prop === "brand"){
      addOrRemove(filterObject.brand);
    } else if (prop === "color"){
      addOrRemove(filterObject.color);
    } else if (prop === "finish"){
      addOrRemove(filterObject.finish);
    }

    function addOrRemove(content){

      let ind = content.indexOf(value);
      if (ind === -1){
        content.push(value);
        button.style.fontWeight = "bold";
      } else {
        content.splice(ind, 1); 
        button.style.fontWeight = "normal";
      }
    }

    filterShades();
  };

}

function filterShades(){

  if (checkEmpty()){
    displayShades(shades);
  } else {
    let filteredShades = new Array();
  
    if (filterObject.color.length > 0){ filteredShades = filterColors(shades); }

    if (filterObject.brand.length > 0){
      if (filteredShades.length > 0) {
        filteredShades = filterBrands(filteredShades);
      } else {
        filteredShades = filterBrands(shades);
      }
    }

    if (filterObject.finish.length > 0){
      if (filteredShades.length > 0) {
        filteredShades = filterFinishes(filteredShades);
      } else {
        filteredShades = filterFinishes(shades);
      }
    }

    if (filteredShades.length === 0){
      document.getElementById("message").innerHTML = "no matching shades";
      document.getElementById("message").style.marginTop = "10px";
    } else {
      document.getElementById("message").innerHTML = "";
      document.getElementById("message").style.marginTop = "0px";
    }
    displayShades(filteredShades);
  }

  function filterColors(source){
    let filteredShades = new Array();
    for (let i = 0; i < source.length; i++){
      if (filterObject.color.indexOf(source[i].color) != -1){
        filteredShades.push(source[i]);
      }
    }
    return filteredShades;
  }
  
  function filterBrands(source){
    let filteredShades = new Array();
    for (let i = 0; i < source.length; i++){
      if (filterObject.brand.indexOf(source[i].brand) != -1){
        filteredShades.push(source[i]);
      }
    }
    return filteredShades;
  }
  
  function filterFinishes(source){
    let filteredShades = new Array();
    for (let i = 0; i < source.length; i++){
      if (filterObject.finish.indexOf(source[i].finish) != -1){
        filteredShades.push(source[i]);
      }
    }
    return filteredShades;
  }

}

function checkEmpty(){
  if (filterObject.brand.length == 0 && filterObject.color.length == 0 & filterObject.finish.length === 0){
    return true;
  } else { return false; }
}

// method to remove all methods from the gallery
function clear(){
 gallery.innerHTML = "";

}

// when the page is loaded, display all shades
displayShades(shades);
populateMenu();
