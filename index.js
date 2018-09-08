document.addEventListener("DOMContentLoaded", () => {
    //grab the button
    const navButton = document.querySelector('.navbar-toggle');
    // grab the menu
    const menu = document.querySelector('#main-navigation');
    // listen for a click
    navButton.addEventListener('click', () => {
        // if menu is collapse, show it
        if (menu.hasAttribute('class', 'collapse')) {
            menu.removeAttribute('class', 'collapse');
        } else {
            // collapse it
            menu.setAttribute('class', 'collapse');
        }
    });
});