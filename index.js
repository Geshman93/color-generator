const btn = document.querySelector("#change");
btn.addEventListener('click' ,() => {
    let box = document.querySelector(".container");
    let para = document.querySelector("#colour");
    let red = Math.floor(Math.random()*256);
    let blue = Math.floor(Math.random()*256);
    let green = Math.floor(Math.random()*256);
    let color = `rgb( ${red}, ${green} , ${blue})`;

    box.style.background = color;
    para.innerHTML= color;
})