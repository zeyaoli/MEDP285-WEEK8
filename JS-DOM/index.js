console.log("hello");

// let contentChange = document.getElementById("content_change");
let contentChange = document.querySelector("#content_change");
contentChange.innerHTML = "<h1>I'm different now!</h1>";
contentChange.style.color = "blue";
contentChange.style.border = "1px dashed black";

// let button = document.getElementById("click_button");
// console.log(button);

// function updateButton() {
//     console.log("Clicked");
//     let contentChange = document.getElementById("content_change");
//     // contentChange.innerHTML = "<h1>I'm different now!</h1>";
//     // console.log(contentChange.textContent);
//     if (contentChange.textContent === "I can be changed") {
//         contentChange.innerHTML = "<h1>I'm different now!</h1>";
//     } else {
//         contentChange.innerHTML = "I can be changed";
//     }
// }

// button.addEventListener("click", updateButton);
