let btn = document.getElementById('btn');
let nav = document.getElementById('nav');
let x = document.getElementById('x');
let up = document.getElementById('up');

btn.addEventListener('click', () => {
    nav.style.transform = 'translateX(0%)';
    nav.style.boxShadow = '2px 1px 15px rgb(0, 0, 0)';
});

function leave() {
    nav.style.transform = 'translateX(-100%)';
    nav.style.boxShadow = 'none';
}

function check() {
    if (window.matchMedia("(max-width:877px)").matches) {
        nav.onmouseleave = leave;
        x.onclick = leave;
    }
        nav.style.display = 'grid';
        nav.style.transform = 'none';
}

window.addEventListener('resize', check);
check();

let onscrolling = false;
window.onscroll = () => {
    onscrolling = !onscrolling;
    if (onscrolling) {
        up.style.opacity = '0';
    } else {
        setTimeout(() => {
            up.style.opacity = '1';
        }, 1000); 
    }
}