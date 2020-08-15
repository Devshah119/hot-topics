const content = document.querySelector('.main-content');
const links = document.querySelectorAll('.p-link');
let url = 'partials/home.html';
function loadContent(url)
{
    fetch(url)
  .then(function (rsp) {
    return rsp.text();
  })
  .then(function (data) {
    content.innerHTML = data;
  });
}
loadContent(url);
function selectContent(e)
{
e.preventDefault();
let el = e.target.href;
for (let i = 0; i < links.length; i++)
{
links[i].classList.remove("active");
}
e.target.classList.add("active");
loadContent(el);
}

for (let i = 0; i < links.length; i++)
{
links[i].addEventListener("click", selectContent);
}