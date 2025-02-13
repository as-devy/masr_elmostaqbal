const img_model = document.querySelector(".img_model")
const model_img = document.querySelector(".img_model img")

document.querySelectorAll(".personal .certificates img").forEach(img=>{
    img.addEventListener("click", ()=>{
       img_model.querySelector("img").src = img.src;
       img_model.classList.add("active")
    })
})

img_model.querySelector("#close").addEventListener("click", ()=>{
    img_model.classList.remove("active")
})

img_model.addEventListener("click", (e)=> {
    if (event.target !== img_model.querySelector("img")) {
        img_model.classList.remove("active");
    }
});

// let scale = 1;
// const scaleStep = 0.2;
// const maxScale = 1.5;
// const minScale = 1;

// model_img.addEventListener("click", function () {
//     if (scale === 1) {
//         scale = maxScale;
//         model_img.style.cursor = "zoom-out";
//     } else {
//         scale = minScale;
//         model_img.style.cursor = "zoom-in";
//     }
//     model_img.style.transform = `scale(${scale})`;
// });