console.log("Hello this is a message forom javascript in console!")

//window.alert("This is alert. Do not overuse this method, as it prevents the user from accessing ")
document.write("<h2>Hello this text is added at the bottom of the body.</h2>")

//---------------------------------------------------------------------------------------------

/*
multi Line Comment
 */

var headLine = document.getElementById("changeMe");

headLine.innerHTML = "Hello World Wide web!";
headLine.style.color = "Pink";


//---------------------------------------------------------------------------------------------

var ulElements = document.getElementsByTagName("ul");

console.log(ulElements);

console.log("This is a unordered list it has the Class name of: " + ulElements[0].className);


//---------------------------------------------------------------------------------------------


var btn = document.getElementById("btnDont")

btn.innerHTML = "Click Me!";

btn.addEventListener("click", changeUl)

function changeUl() {
    ulElements[0].innerHTML = "<li>Dog</li> <li>Cat</li> <li>Horse</li>"

    //ulElements[0].style.backgroundColor = "Green";

    for (var index = 0; index < ulElements.length; index++) {
        var element = ulElements[index];
        if (index % 2 === 0) {
            element.classList.add("evenUl");
        } else {
            element.classList = "oddUl";
        }
    }
}

//---------------------------------------------------------------------------------------------

//console.log(document.getElementById("secret"));

document.getElementById("secret").addEventListener("mouseover", function () {
    document.getElementsByTagName("h2")[0].innerHTML = "This is reacting to EventListener";
})

document.getElementById("secret").addEventListener("mouseleave", function () {
    document.getElementsByTagName("h2")[0].innerHTML = "Secret Under this Text?";
})

//---------------------------------------------------------------------------------------------

var ticTackBoard = document.getElementById("ticTackBoard")

ticTackBoard.style.width = "300px";
ticTackBoard.style.height = "300px";
ticTackBoard.style.backgroundColor = "gray";

console.log(ticTackBoard);


for (var index = 0; index < ticTackBoard.children.length; index++) {

    var element = ticTackBoard.children[index];

    element.style.height = "100px";
    element.style.width = "100px";

    element.style.float = "left";

    if (index % 2 === 0) {
        element.style.backgroundColor = "White";
    } else {
        element.style.backgroundColor = "Black"
    }
}
