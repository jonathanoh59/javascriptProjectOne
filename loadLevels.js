function loadLevelOne(){
  document.getElementById('character').style.width = levelOnePlayerWidth;
  document.getElementById('character').style.height = levelOnePlayerHeight;
  document.getElementById('character').style.backgroundColor = "blue";
  document.getElementById('character').style.position = "relative";
  document.getElementById('character').style.top = "150px";
  document.getElementById('block').style.width = levelOneBlockWidth;
  document.getElementById('block').style.height = levelOneBlockHeight;
  document.getElementById('block').style.backgroundColor = "orange";
  document.getElementById('block').style.position = "relative";
  document.getElementById('block').style.top = "130px";
}

function loadLevelTwo(){
  document.getElementById('character').style.width = levelTwoPlayerWidth;
  document.getElementById('character').style.height = levelTwoPlayerHeight;
  document.getElementById('character').style.backgroundColor = "blue";
  document.getElementById('character').style.position = "relative";
  document.getElementById('character').style.top = "150px";
  document.getElementById('block').style.width = levelTwoBlockWidth;
  document.getElementById('block').style.height = levelTwoBlockHeight;
  document.getElementById('block').style.backgroundColor = "orange";
  document.getElementById('block').style.position = "relative";
  document.getElementById('block').style.top = "120px";

}

function loadLevelThree(){
  document.getElementById('character').style.width = levelThreePlayerWidth;
  document.getElementById('character').style.height = levelThreePlayerHeight;
  document.getElementById('character').style.backgroundColor = "blue";
  document.getElementById('character').style.position = "relative";
  document.getElementById('character').style.top = "150px";
  document.getElementById('block').style.width = levelThreeBlockWidth;
  document.getElementById('block').style.height = levelThreeBlockHeight;
  document.getElementById('block').style.backgroundColor = "orange";
  document.getElementById('block').style.position = "relative";
  document.getElementById('block').style.top = "110px";
}

loadLevelOne();
setup();
