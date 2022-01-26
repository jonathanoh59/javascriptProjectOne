function loadLevelOne(){
  document.getElementById('character').style.width = levelOnePlayerWidth;
  document.getElementById('character').style.height = levelOnePlayerHeight;
  document.getElementById('character').style.backgroundColor = "red";
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

loadLevelOne();
setup();
