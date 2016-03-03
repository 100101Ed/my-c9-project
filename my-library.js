function myFunction() {
    var name = "Jean-francois Nepton";
    alert("Hello " + name + "!");
}

function myFunction2() {
    var answer;
    answer = prompt("What is your name!");
    alert("Hello " + answer + "!");
}


function myFunction3() {
    var answer;
    answer = confirm("Are you sure you want to exit?");
    if (answer) {
        alert("You replied Yes!");
    } else {
        alert("You replied No..");
    }
}

myFunction3();