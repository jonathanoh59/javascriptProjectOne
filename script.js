// The document method "getElementById()"" returns an Element object representing the element
// whose id property matches the specified string.

// storing the character id function in the variable character
var character = document.getElementById("character");
// storing the block id function in the vairable block
var block = document.getElementById("block");
// initialising the counter variable as '0'
var counter=0;
// initialising the timeoutAnimation variable as 300[ms]
var removeAnimationTime = 300;
// initialising the deathCheck variable as 10[ms]
var deathCheck = 10


// The ELEMENT.classList is a read-only property that returns a live
// DOMTokenList collection (similar to an array) of the class attributes of the element.
// This can then be used to manipulate the class list.

// setTimeout removes the "animate" class from the character after 300ms
function jump(){
    if(character.classList == "animate"){return}
    character.classList.add("animate");
    setTimeout(function(){
        character.classList.remove("animate");
    },removeAnimationTime);
}

//checkDead checks whether we are dead every 10ms [setInterval].
//parseInt converts the string values of top and left into the pixel positions
//block.style.animation = "none" ---> turns off the animation for the block when we die
//reapply the block animation once the alert is cleared
//if not dead, then +1 to the counter (for the score)
//document.getElementById("scoreSpan").innerHTML = Math.floor(counter/100)
//------> updates the scoreSpan paragraph
var checkDead = setInterval(function() {
    let characterTop = parseInt(window.getComputedStyle(character).getPropertyValue("top"));
    let blockLeft = parseInt(window.getComputedStyle(block).getPropertyValue("left"));
    if(blockLeft<20 && blockLeft>-20 && characterTop>=130){
        block.style.animation = "none";
        alert("Game Over. score: "+Math.floor(counter/100));
        counter=0;
        block.style.animation = "block 1s infinite linear";
    }else{
        counter++;
        document.getElementById("scoreSpan").innerHTML = Math.floor(counter/100);
    }
}, deathCheck);
