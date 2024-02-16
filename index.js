const gitHub = document.getElementById("github-icon");
const linkedIn = document.getElementById("linkdin-icon");
const myName = document.querySelector("#title #name");
const pfp = document.querySelector("#myImage");

gitHub.addEventListener("click", () => {
  location.href = "https://github.com/scanner-py";
});

linkedIn.addEventListener("click", () => {
  location.href = "https://www.linkedin.com/in/vivek-tiwari-4175162a8/";
});

myName.addEventListener("mouseover", (evt) => {
  myName.innerHTML = "Scanner";
});

myName.addEventListener("mouseout", (evt) => {
  myName.innerHTML = "VIVEK TIWARI";
});

pfp.addEventListener("contextmenu", (evt) => {
  evt.preventDefault();
});
