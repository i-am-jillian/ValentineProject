// Elements
const envelope = document.getElementById("envelope-container");
const letter = document.getElementById("letter-container");
const noBtn = document.querySelector(".no-btn");
const yesBtn = document.querySelector(".btn[alt='Yes']");

const title = document.getElementById("letter-title");
const catImg = document.getElementById("letter-cat");
const buttons = document.getElementById("letter-buttons");
const finalText = document.getElementById("final-text");

// Click Envelope
envelope.addEventListener("click", () => {
    envelope.style.display = "none";
    letter.classList.add("show"); // Add show class instead of inline style

    setTimeout(() => {
        document.querySelector(".letter-window").classList.add("open");
    }, 50);
});

// Logic to move the NO btn (uncomment if you want this feature)
/*
noBtn.addEventListener("mouseover", () => {
    const min = 200;
    const max = 200;

    const distance = Math.random() * (max - min) + min;
    const angle = Math.random() * Math.PI * 2;

    const moveX = Math.cos(angle) * distance;
    const moveY = Math.sin(angle) * distance;

    noBtn.style.transition = "transform 0.3s ease";
    noBtn.style.transform = `translate(${moveX}px, ${moveY}px)`;
});
*/

// Logic to make YES btn grow
let yesScale = 1;

yesBtn.style.transformOrigin = "center center";
yesBtn.style.transition = "transform 0.25s ease";

noBtn.addEventListener("click", () => {
    yesScale = Math.min(yesScale + 0.35, 3.0); // grows but capped
    yesBtn.style.transform = `scale(${yesScale})`;
});

// YES is clicked
yesBtn.addEventListener("click", () => {
    title.textContent = "Yayyyyy!";
    catImg.src = "cat_dance.gif";
    document.querySelector(".letter-window").classList.add("final");
    buttons.style.display = "none";
    finalText.style.display = "block";
});