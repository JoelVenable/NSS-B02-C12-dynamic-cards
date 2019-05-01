let iterator = 0;

function clickButton() {
  const div = document.querySelector("#card-container"),
    newDiv = document.createElement("div"),
    input = document.querySelector("input"),
    p = document.createElement("p"),
    btn = document.createElement("button");

  newDiv.appendChild(p);
  newDiv.classList = "card";
  p.textContent = input.value;
  input.value = "";
  newDiv.appendChild(btn);
  newDiv.id = `container-${iterator}`;
  btn.id = `button-${iterator}`;
  btn.textContent = "Delete";
  div.appendChild(newDiv);

  iterator++;
}

document.querySelector("#create").addEventListener("click", clickButton);

document.querySelector("#card-container").addEventListener("click", event => {
  console.log(event.srcElement.id.slice(7));
  let buttonId = event.srcElement.id.slice(7),
    eventTarget = event.srcElement.localName.toLowerCase();

  if (eventTarget === "button") {
    document.querySelector(`#container-${buttonId}`).remove();
  }
});
