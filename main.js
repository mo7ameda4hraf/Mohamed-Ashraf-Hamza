// let btn = document.getElementById("btn");
// let para = document.querySelector("p");
// let bodyx = document.querySelector("body");
// let mood = "light";

// btn.onclick = function() {
//     if (mood === "light") {
//         para.style.color = "green"
//         bodyx.style.background = "white"
//         mood = "dark"
//     } else {
//         para.style.color = "white"
//         bodyx.style.background = "linear-gradient(to right, black, #020a31)"
//         mood = "light"
//     }
// };


let ele = document.querySelector(".scroll");

let height = document.documentElement.scrollHeight - document.documentElement.clientHeight;

window.addEventListener("scroll", function() {
    let scrollTop = document.documentElement.scrollTop;
    ele.style.width = ` ${(scrollTop / height)*100}%`;

})


//------------------------------------------------------------------------------------------------------------------
let navbar = document.querySelector(".navbar");

let translateBtn = document.querySelector(".translate");
let isArabic = false;

translateBtn.addEventListener("click", () => {
    if (!isArabic) {
        document.querySelector(".about p").textContent = " نبذه عني";
        document.querySelector(".skills p").textContent = "مهاراتي";
        document.querySelector(".projects p").textContent = "مشاريعي";
        document.querySelector(".communication p").textContent = "تواصل معي";
        translateBtn.querySelector("span").textContent = "En";
        isArabic = true;
        document.querySelector(".menu-items").style.textAlign = "right";

        document.querySelector(".txt").style.textAlign = "right";
        document.querySelector(".me").textContent = "انا";
        document.querySelector(".name").textContent = "محمد اشرف حمزه";
        document.querySelector(".p-work").textContent = "انا اعمل";
        document.querySelector(".work").textContent = "مطور واجهه امامي";
        document.querySelector(".content").style.direction = "rtl"
        document.querySelector(".content-image .btn").innerHTML = "نبذه مختصره عني"

        //----------------------------------------------------end header------------------------------
    } else {;

        document.querySelector(".about p").textContent = "About me";
        document.querySelector(".skills p").textContent = "Skills";
        document.querySelector(".projects p").textContent = "Projects";
        document.querySelector(".communication p").textContent = "Communication";
        translateBtn.querySelector("span").textContent = "Ar";
        isArabic = false;
        document.querySelector(".menu-items").style.textAlign = "left";

        document.querySelector(".txt").style.textAlign = "left";
        document.querySelector(".me").textContent = "I am";
        document.querySelector(".name").textContent = "Mohamed Ashraf Hamza";
        document.querySelector(".p-work").textContent = "I work as a";
        document.querySelector(".work").textContent = "Front End Developer";
        document.querySelector(".content").style.direction = "ltr"
        document.querySelector(".content-image .btn").innerHTML = "A brief about me";

        //----------------------------------------------------end header------------------------------


    }
});