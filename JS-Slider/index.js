let slider = document.getElementById("slider");
console.log(slider);
let sliderValue = document.getElementById("slider-value");

function update() {
    console.log("yes");
    let value = slider.value;
    // sliderValue.innerHTML = `<p style="font-size: ${value}px;">${value}</p>`;
    sliderValue.innerHTML = `<p>${value}</p>`;
    sliderValue.style.fontSize = `${value}px`;
    sliderValue.style.border = `${value / 2}px solid rgb(${value * 2}, ${
        value * 1.5
    }, 50)`;
    console.log(sliderValue.style.border);
}

slider.addEventListener("input", update);
