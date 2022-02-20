const search = document.querySelector(".search");
const btn = document.querySelector('.btn');
const input = document.querySelector('.search-btn');


btn.addEventListener("click",()=>{
    search.classList.toggle("active");
    input.focus();
})