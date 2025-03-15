window.onload = ()=>{
    document.querySelector(".pre_loader").classList.add("disactive")
}

const mobileMenu = document.querySelector("#mobile_menu");
const burger_menu = document.querySelector("#burger_menu");

if (burger_menu){
    burger_menu.addEventListener("click", () => {
        console.log("burger_menu")
        mobileMenu.classList.toggle("active")
    })
    
}


document.addEventListener("click", function (event) {
    if (!mobileMenu.contains(event.target) && !burger_menu.contains(event.target)) {
        mobileMenu.classList.remove("active");
    }
});

if (document.querySelectorAll(".PPhIP")) {
    document.querySelectorAll(".PPhIP").forEach(ele => {
        ele.style.display = 'none';
    })
}