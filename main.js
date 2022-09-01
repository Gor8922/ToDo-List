let input = document.getElementById("text");
let addBtn = document.getElementById("add");
let saveBtn = document.getElementById("save");
let deleteBtn = document.getElementById("delete");
let div = document.getElementById("main");

addBtn.disabled = true;
enabeleDisable();

function enabeleDisable() {
  input.addEventListener("input", () => {
    input.value !== "" ? (addBtn.disabled = false) : (addBtn.disabled = true);
  });
}

function createInput() {
  let newinput = document.createElement("input");
  newinput.setAttribute("type", "text");
  newinput.setAttribute("readonly", "true");
  newinput.value = input.value;
  newinput.setAttribute("id", `${input.value}`);
  div.appendChild(newinput);
  input.value = "";
  addBtn.disabled = true;
}
addBtn.addEventListener("click", createInput);

div.addEventListener("click", (e) => {
  if (confirm("Yes - Delete, No - change")) {
    document.getElementById(String(e.target.value)).remove();
    input.value = "";
  } else {
    input.value = document.getElementById(String(e.target.value)).value;

    saveBtn.addEventListener("click", () => {
      document.getElementById(String(e.target.value)).remove();
      createInput();
    });
  }
});

deleteBtn.addEventListener("click", () => {
  div.innerHTML = "";
  input.value = "";
});
