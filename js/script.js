const menuBTN = document.getElementById('menuBTN');
const rightNav = document.querySelector('.rightNav');

var FLAG = false;
menuBTN.addEventListener('click',function(){
    if (FLAG) {
        rightNav.classList.remove('navbarShort');
        menuBTN.innerHTML = '';
        menuBTN.classList.add('bx-menu');    
        rightNav.classList.add('rightNav');
    } else {
        rightNav.classList.remove('rightNav');
        rightNav.classList.add('navbarShort');
        menuBTN.classList.remove('bx-menu');
        menuBTN.innerHTML = '&times;';
    }

    FLAG = !FLAG;
})