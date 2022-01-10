function loadLevelOne(){
  document.getElementById('character').style.width = levelOnePlayerWidth;
  document.getElementById('character').style.height = levelOnePlayerWidth;
  document.getElementById('character').style.backgroundColor = "red";
  document.getElementById('character').style.position = "relative";
  document.getElementById('character').style.top = "150px";
}

loadLevelOne();
setup();
