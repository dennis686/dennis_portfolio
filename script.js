/* ------------------------------------------------------
   WORD-BY-WORD TEXT ANIMATION
--------------------------------------------------------- */

const animatedText = document.getElementById("animatedText");
const message = "A Passionate Web Developer Creating Modern and Responsive Websites";
const words = message.split(" ");
let index = 0;

function displayWords() {
  if (index < words.length) {
    animatedText.innerHTML += words[index] + " ";
    index++;
    setTimeout(displayWords, 350); // SPEED OF WORD ANIMATION (350ms)
  }
}

displayWords();

/* ------------------------------------------------------
   UPDATE YEAR IN FOOTER
--------------------------------------------------------- */

document.getElementById("year").textContent = new Date().getFullYear();

/* ------------------------------------------------------
   CHANGE BACKGROUND COLOR PER SECTION
--------------------------------------------------------- */

const sections = document.querySelectorAll("section[data-bg]");

function updateBackground() {
  const scrollY = window.scrollY;

  sections.forEach((section) => {
    const sectionTop = section.offsetTop - 200;
    const sectionHeight = section.offsetHeight;

    if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
      document.body.style.backgroundColor = section.getAttribute("data-bg");
    }
  });
}

window.addEventListener("scroll", updateBackground);
updateBackground();

/* ------------------------------------------------------
   CV DOWNLOAD HANDLER (OPTIONAL)
--------------------------------------------------------- */

document.getElementById("downloadCv").addEventListener("click", () => {
  console.log("CV download started.");
});