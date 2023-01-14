function checkAllChecked(event) {
  event.preventDefault(); // prevent the form from refreshing
  var form = document.getElementById("myForm");
  var checkboxes = form.querySelectorAll("input[type='checkbox']");
  var allChecked = true;

  for (var i = 0; i < checkboxes.length; i++) {
    if (!checkboxes[i].checked) {
      allChecked = false;
      break;
    }
  }
  if (!allChecked) {
    modal.className = "open";
  } else {
    modal2.className = "open";
  }
}

const modal = document.querySelector("#modal");
const modal2 = document.querySelector("#modal2");
const closes = document.querySelector("#closes");
const closes2 = document.querySelector("#closes2");
const modalbtn1 = document.querySelector("#open-noo");
const modalbtn2 = document.querySelector("#open-yes");

modalbtn1.addEventListener("click", () => {
  modal.className = "open";
});

closes.addEventListener("click", () => {
  modal.className = "close";
});

modalbtn2.addEventListener("click", () => {
  modal2.className = "open";
});

closes2.addEventListener("click", () => {
  modal2.className = "close";
});
