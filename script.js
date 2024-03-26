document.addEventListener("keydown", keyDetector);

function keyDetector(event){
   console.log(event);
   const keyPressed = event.key;

   const show = document.getElementById("key");
   show.textContent = keyPressed;
}