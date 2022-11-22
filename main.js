/* a 태그의 새로고침 기능 제거 */
let a = document.querySelectorAll("a");
console.log(a);

function prevent(e) {
  e.preventDefault();
}

for (let i = 0; i < a.length; i++) {
  a[i].addEventListener("click", prevent);
}
