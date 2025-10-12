let submitBtn = document.getElementById("submit");

let resultContainer = document.getElementById("resultContainer");
let resultContainerAll = document.getElementById("resultAll");
let result = document.getElementById("result");

let closeBtn = document.getElementById("close");

let menu = document.getElementById("menu-container");
let shivayya = document.getElementById("shivayya");
let aboutFlames = document.getElementById("aboutFlames");

let toggle = document.getElementById("light-mode");
toggle.addEventListener("click", () => {
  document.body.classList.toggle("light");
  if (document.body.classList.contains("light")) {
    toggle.textContent = "Dark Mode";
  } else {
    toggle.textContent = "Light mode";
  }
});
shivayya.addEventListener("click", () => {
  menu.classList.toggle("show-menu");
  return;
});

const inValidPattern = /[^a-zA-Z]/g;
submitBtn.addEventListener("click", () => {
  let fRawName = document.getElementById("fName").value;
  let lRawName = document.getElementById("lName").value;

  fName = fRawName.replace(/\s+/g, "").toLowerCase();
  lName = lRawName.replace(/\s+/g, "").toLowerCase();

  if (
    fRawName.length === 0 ||
    lRawName.length === 0 ||
    inValidPattern.test(fName) ||
    inValidPattern.test(lName)
  ) {
    alert("Enter details correctly , don't enter symbols and numbers 🙄 ");
    return;
  }

  let splittedFName = fName.split("");
  let splittedLName = lName.split("");

  for (let i = 0; i < splittedFName.length; i++) {
    for (let j = 0; j <= splittedLName.length; j++) {
      if (splittedFName[i] === splittedLName[j]) {
        splittedFName.splice(i, 1);
        splittedLName.splice(j, 1);
        i--;
        j--;
        break;
      }
    }
  }
  let finalCount = splittedFName.length + splittedLName.length;
  let flames = ["F", "L", "A", "M", "E", "S"];
  let currentIndex = 0;

  while (flames.length > 1) {
    let indexToRemove = (currentIndex + finalCount - 1) % flames.length;
    flames.splice(indexToRemove, 1);
    currentIndex = indexToRemove % flames.length;
  }

  let finalBond = "";
  let finalColor = "";
  switch (flames[0]) {
    case "F":
      finalBond = "Friends";
      finalColor = "#5b8fb9";
      break;
    case "L":
      finalBond = "Lovers";
      finalColor = "#e91e63";

      break;
    case "A":
      finalBond = "Attraction";
      finalColor = "#ffc107";

      break;
    case "M":
      finalBond = "Marriage";
      finalColor = "#4caf50";

      break;
    case "E":
      finalBond = "Enemey";
      finalColor = "#d32f2f";

      break;
    case "S":
      finalBond = "Siblings";
      finalColor = "#673ab7";

      break;
    default:
      finalBond = "An error occurred!";
  }
  result.innerHTML = `FLAMES between ${fRawName} and ${lRawName} is :<span style="color:${finalColor}">${finalBond} </span> `;
  resultContainer.showModal();
});
