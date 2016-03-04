
function validateForm() {
  var x = document.forms["myForm"]["fname"].value;
  if (x == null || x == "") {
  alert("Name must be filled out");
  return false;
  }
}

function addNumbers(){
   
   var x1 = document.forms["myForm"]["num1"].value;
   var x2 = document.forms["myForm"]["num2"].value;
   var total = +x1 + +x2;
   
 alert(total);

  return false;
  
}

function multiplyNumbers(){
  var x1 = document.forms["myForm"]["num1"].value;
   var x2 = document.forms["myForm"]["num2"].value;
   var total = x1 * x2;
    alert(total);
   return false;
}

function subtractNumbers(){
     var x1 = document.forms["myForm"]["num1"].value;
   var x2 = document.forms["myForm"]["num2"].value;
   var total = x1 - x2;
 alert(total);

  return false;
}

function calArea(){
     var x1 = document.forms["myForm"]["num1"].value;
   
   var total = x1 * x1;
 alert(total);

  return false;
}

function calCircunference(){
      var x1 = document.forms["myForm"]["num1"].value;
   
   var total = x1 * 2* 3.14159;
 alert(total);

  return false;   
}

function calPerimeter(){
      var x1 = document.forms["myForm"]["num1"].value;
   
   var total = x1 * 4;
 alert(total);

  return false;   
//http://www.calculatoredge.com/enggcalc/perimeter.htm
    
}