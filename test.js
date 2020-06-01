const form = document.querySelector(".toDoFrom");
const input = document.querySelector(".toDoInput");
const ulList = document.querySelector(".listContents");

function clear() {
  input.value = "";
}
function create_list(list) {
  const contents = document.createElement("li");
  contents.append(list); //
  console.log(contents);
  ulList.appendChild(contents);
  setLocal(contents);
}
function formProcess(event) {
  event.preventDefault();
  console.log(input.value);
  const inserted_list = input.value;
  clear();
  create_list(inserted_list);
}

function init() {
  form.addEventListener("submit", formProcess);
}

init();
