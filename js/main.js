
// ACTIVE MENU

let menus = document.querySelectorAll('ul li');

menus.forEach(li => {
    li.addEventListener('click', function(){
        menus.forEach(btn => btn.classList.remove('underline'));
        this.classList.add('underline');

    });
});

// mixitup button
let buttons = document.querySelectorAll('button');

buttons.forEach(button => {
    button.addEventListener('click', function(){
        buttons.forEach(btn => btn.classList.remove('active'));
        this.classList.add('active');

    });
});

// Mobile menu
function openNav(){
    document.getElementById("myNav").style.width = "100%";
}

function closeNav(){
    document.getElementById("myNav").style.width = "0%";
}


