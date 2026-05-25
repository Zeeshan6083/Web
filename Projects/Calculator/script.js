let display = document.getElementById("display");

function append(value){

  if(display.value == "0"){
    display.value = value;
  }

  else{
    display.value += value;
  }
}

function clearDisplay(){
  display.value = "0";
}

function del(){

  display.value = display.value.slice(0,-1);

  if(display.value == ""){
    display.value = "0";
  }
}

function calculate(){

  display.value = eval(display.value);
}