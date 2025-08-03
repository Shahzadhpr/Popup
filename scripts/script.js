let btn = document.querySelector(".btn")
let closeBtn = document.querySelector(".close-btn")

btn.addEventListener('click', function(){
    document.querySelector(".overlay").classList.add("overlay--show")
})

closeBtn.addEventListener('click', function(){
    document.querySelector(".overlay").classList.remove("overlay--show")
})