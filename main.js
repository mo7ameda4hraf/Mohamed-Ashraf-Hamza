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

//-------------------------------------------------------------------------------------------------------------

// scroll bar:

let ele = document.querySelector(".scroll");

let height = document.documentElement.scrollHeight - document.documentElement.clientHeight;

window.addEventListener("scroll", function() {
    let scrollTop = document.documentElement.scrollTop;
    ele.style.width = ` ${(scrollTop / height)*100}%`;

})


//------------------------------------------------------------------------------------------------------------------

//type writer effect:

let speed = 100;

function towrite(element, text) {
    let i = 0;

    function typing() {
        if (i < text.length) {
            element.textContent += text.charAt(i);
            i++;
            setTimeout(typing, speed);
        }
    }
    typing();
}

document.querySelectorAll(".head").forEach(el => {
    const text = el.getAttribute("data-text");

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                el.textContent = "";
                towrite(el, text);
                observer.unobserve(el);
            }
        });
    });

    observer.observe(el);
});