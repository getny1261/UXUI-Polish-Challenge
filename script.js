const rsvpButton = document.getElementById("rsvpBtn");

const section = document.getElementById("meetings");

const list = document.getElementById("pend");
const message = document.createElement("p");

function main(){
  bioBtn();
createDiv();
}
function handleRSVP() {
  if (document.getElementsByClassName("exists").length == 0){
  message.textContent = "You're on the list — see you there!";
  message.classList.add("feedback-message");

  rsvpButton.classList.add("exists");
  rsvpButton.after(message);
  } else {
    console.log(1);
  }
}

function createDiv(){
  let div = document.createElement("div");
  div.classList.add("image-placeholder")
  div.id = "bioArea";
  list.append(div);
  let text = document.createElement("h2");
  text.id = "replace";
  text.innerHTML = "Learn more about our Club Officers"
  div.append(text);
}

function bioBtn(){
  let bioBtn = document.createElement("button");
  console.log("button created");
  bioBtn.textContent = "Club Officer";
  list.append(bioBtn);
  bioBtn.addEventListener("click", addBio);
}

function addBio(){
  if (document.getElementsByClassName("btnexists").length == 0){
    let existingText = document.getElementById("replace")
    existingText.innerHTML = " "
    let header = document.createElement("h2");
    header.textContent = "Club Officer Jimmy"
    header.classList.add("btnexists");
    let bioArea = document.getElementById("bioArea")
    bioArea.append(header)
    let subHeader = document.createElement("ul")
    subHeader.innerHTML = "About Jimmy";
    header.append(subHeader)
    let info1 = document.createElement("li")
    info1.innerHTML = "He joined our club in 2024"
    subHeader.append(info1)
    let info2 = document.createElement("li")
    info2.innerHTML = "He became a club officer in 2025"
    subHeader.append(info2)
    let info3 = document.createElement("li")
    info3.innerHTML = "He has continued to be with us to 2026"
    subHeader.append(info3)
  } else {
    console.log(2)
  }
  
}


main();