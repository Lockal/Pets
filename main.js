const acc = document.querySelector('.m-header__menu'); {

const handleClick = () => document.querySelector('.m-header__menu-block').style.display = "flex";

acc.addEventListener('click', handleClick);
};

const acc2 = document.querySelector('.m-menu__close'); { 

const handleClick = () => document.querySelector('.m-header__menu-block').style.display = "none";

acc2.addEventListener('click', handleClick);
};

const acc3 = document.querySelector('.m-menu__element:nth-child(3)'); { 

    const handleClick = () => document.querySelector('.m-menu__submenu').style.display = "flex";
    
    acc3.addEventListener('click', handleClick);
};

const acc4 = document.querySelector('.back'); { 

    const handleClick = () => document.querySelector('.m-menu__submenu').style.display = "flex";
    
   acc4.addEventListener('click', handleClick);
};

