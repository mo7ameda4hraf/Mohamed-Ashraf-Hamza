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



//mood:
const container = document.querySelector('.mood');
const box = document.querySelector('.box');
const innerCircle = document.querySelector('.inner-circle');
const body = document.body;

let isDark = true;

container.addEventListener('click', () => {
    box.classList.toggle('box-toggle');
    innerCircle.classList.toggle('inner-circle-toggle');
    container.classList.toggle('container-toggle');

    if (isDark) {
        body.classList.remove('dark-mode');
        body.classList.add('light-mode');
        isDark = false;
    } else {
        body.classList.remove('light-mode');
        body.classList.add('dark-mode');
        isDark = true;
    }
});