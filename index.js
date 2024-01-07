const display = document.getElementById("display")

function appendToDisplay(input){
    display.value = display.value + input
}


function calculate() {
    try {
      let expression = display.value.replace(/%/g, '/100');
      display.value = eval(expression);
    } catch (error) {
      display.value = "Error";
    }
  }

function clearDisplay(){
    display.value = ""
}

function removeSingleCharacter(){
   const currentVal = display.value 
   const newVal = currentVal.slice(0,-1)
   display.value = newVal
}