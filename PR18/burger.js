document.addEventListener('DOMContentLoaded', function () {
    const burgerMenu = document.querySelector('.burger-menu');
    const burgerIcon = document.querySelector('.burger-icon');
    const burgerNav = document.querySelector('.burger-nav');


    function closeMenu() {
        burgerMenu.classList.remove('open');
        burgerNav.style.display = 'none';
    }

    burgerIcon.addEventListener('click', function () {
        const isOpen = burgerMenu.classList.contains('open');

        if (isOpen) {
            closeMenu();
        } else {
            burgerMenu.classList.add('open');
            burgerNav.style.display = 'block';
        }
    });


    document.addEventListener('click', function (event) {
       
        if (!burgerMenu.contains(event.target) && !burgerIcon.contains(event.target)) {
            closeMenu();
        }
    });

    burgerNav.style.display = 'none';
});
