function loadLevelOne(){
  document.getElementById('character').style.width = levelOnePlayerWidth;
  document.getElementById('character').style.height = levelOnePlayerHeight;
  document.getElementById('character').style.backgroundColor = "blue";
  document.getElementById('character').style.position = "relative";
  document.getElementById('character').style.top = "150px";
}

function loadLevelTwo(){
  document.getElementById('character').style.width = levelTwoPlayerWidth;
  document.getElementById('character').style.height = levelTwoPlayerHeight;
  document.getElementById('character').style.backgroundColor = "green";
  document.getElementById('character').style.position = "relative";
  document.getElementById('character').style.top = "150px";
}

function loadLevelThree(){
  document.getElementById('character').style.width = levelThreePlayerWidth;
  document.getElementById('character').style.height = levelThreePlayerHeight;
  document.getElementById('character').style.backgroundColor = "black";
  document.getElementById('character').style.position = "relative";
  document.getElementById('character').style.top = "150px";
  console.log(levelThreePlayerWidth);
}

loadLevelOne();
setup();
