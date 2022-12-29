// document.querySelector(".info-content").style.display = "none";
let btn = document.querySelectorAll(".information ul li");

let aboutP = document.querySelector(".about");
let historyP = document.querySelector(".history");
let specP = document.querySelector(".specification");
let techP = document.querySelector(".technical");
let reviewP = document.querySelector(".review");
let pArray = [aboutP, historyP, specP, techP, reviewP];

btn.forEach((ele) => {
  ele.addEventListener("click", () => {
    for (let i = 0; i <= pArray.length; i++) {
      if (pArray[i].classList.contains(`${ele.innerHTML}`)) {
        document.querySelectorAll(".info-content div").forEach((element) => {
          element.classList.remove("checked");
          btn.forEach((e) => {
            e.classList.remove("checkedbtn");
          });
        });
        pArray[i].classList.add("checked");
        ele.classList.add("checkedbtn");
      }
    }
  });
});

// document.querySelector(".checked");

// console.log(btn.innerHTML);

// if (pArray[i].classList.value === ele.innerHTML) {
//   pArray[i].style.display = "Block";
// }
