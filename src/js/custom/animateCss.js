;
(function () {

    // VARS
    let menu = document.querySelector('.header-nav');
    let menuItems = menu.querySelectorAll('a');
    let screens = document.querySelectorAll('.screen');
    let animatedElements = document.querySelectorAll('.animated');

    // SCROLL SPY
    // function menuSize() {
    //     if (window.pageYOffset > 0) {
    //         menu.classList.add('small');
    //     } else {
    //         menu.classList.remove('small');
    //     }
    // }

    // function activeMenuItem(activeNum) {
    //     menu.querySelector('a.active').classList.remove('active');
    //     menuItems[activeNum].classList.add('active');
    // }

    function getVisibleScreen() {
        let visibleScreen = 0;
        let winHeight = window.innerHeight;
        let scrollTop = window.pageYOffset;
        let currentMiddle = winHeight / 2 - 100;
        let screenHeight, screenTop;
        screens.forEach(function (item, index) {
            screenHeight = item.offsetHeight;
            screenTop = item.offsetTop;
            if (currentMiddle > screenTop - scrollTop) {
                visibleScreen = index;
            }
        });
        return visibleScreen;
    }
    let timeout;

    function animateScrollTo(scrollValue, k) {
        let currentScroll = window.pageYOffset;
        let delta = (k) ? 50 : -50;
        if ((currentScroll >= scrollValue && k) || (currentScroll <= scrollValue && !k)) {
            window.scrollTo(0, scrollValue);
            clearTimeout(timeout);
        } else {
            window.scrollTo(0, currentScroll + delta);
            timeout = setTimeout(animateScrollTo, 20, scrollValue, k);
        }
    }

    // function animateElements(activeNum){
    //     animatedElements.forEach(function (item, index) {
    //         item.classList.add('animation-run');
    //     });
    // }

    function animateElements() {
        let winHeight = window.innerHeight;
        let scrollTop = window.pageYOffset;
        animatedElements.forEach(function (item, index) {
            if (item.offsetTop - scrollTop < winHeight - item.offsetHeight) {
                item.classList.add('animation-run');
            }
        });
    }

    window.addEventListener('scroll', function () {
        // menuSize();
        // activeMenuItem(getVisibleScreen());
        animateElements(getVisibleScreen());
        animateElements();
    });
    window.addEventListener('load', function () {
        // menuSize();
        // activeMenuItem(getVisibleScreen());
        animateElements(getVisibleScreen());
        animateElements();
    });

    // menuItems.forEach(function (item, index) {
    //     item.addEventListener('click', function (event) {
    //         event.preventDefault();
    //         var screenTop = screens[index].offsetTop;
    //         var direction = true;
    //         if (screenTop < window.pageYOffset) {
    //             direction = false;
    //         }
    //         animateScrollTo(screenTop, direction);
    //     });
    // });

    // const screens = document.querySelectorAll('.screen');
    // const animatedElements = document.querySelectorAll('.animated');


    // function getVisibleScreen() {
    //     let visibleScreen = 0;
    //     let winHeight = window.innerHeight;
    //     let scrollTop = window.pageYOffset;
    //     let currentMiddle = winHeight / 2 - 100;
    //     let screenHeight, screenTop;

    //     screens.forEach((item, index) => {
    //         screenHeight = item.offsetHeight;
    //         screenTop = item.offsetTop;

    //         if (currentMiddle > screenTop - scrollTop) {
    //             visibleScreen = index;
    //         }
    //     });
    //     return visibleScreen;
    // }

    // let timeout;

    // function animateScrollTo(scrollValue, k) {
    //     let currentScroll = window.pageYOffset;
    //     let delta = (k) ? 50 : -50;

    //     if ((currentScroll >= scrollValue && k) || (currentScroll <= scrollValue && !k)) {
    //         window.scrollTo(0, scrollValue);
    //         clearTimeout(timeout);
    //     } else {
    //         window.scrollTo(0, currentScroll + delta);
    //         timeout = setTimeout(animateScrollTo, 20, scrollValue, k);
    //     }
    // }

    // // function animateElements(activeNum){
    // //     animatedElements.forEach(function (item, index) {
    // //         item.classList.add('animation-run');
    // //     });
    // // }

    // function animateElements() {
    //     let winHeight = window.innerHeight;
    //     let scrollTop = window.pageYOffset;

    //     animatedElements.forEach((item, index) => {
    //         if (item.offsetTop - scrollTop < winHeight - item.offsetHeight) {
    //             item.classList.add('animation-run');
    //         }
    //     });
    // }

    // window.addEventListener('scroll', () => {
    //     // menuSize();
    //     // activeMenuItem(getVisibleScreen());
    //     animateElements(getVisibleScreen());
    //     animateElements();
    // });

    // window.addEventListener('load', () => {
    //     // menuSize();
    //     // activeMenuItem(getVisibleScreen());
    //     animateElements(getVisibleScreen());
    //     animateElements();
    // });

    // // menuItems.forEach(function (item, index) {
    // //     item.addEventListener('click', function (event) {
    // //         event.preventDefault();
    // //         var screenTop = screens[index].offsetTop;
    // //         var direction = true;
    // //         if(screenTop < window.pageYOffset) {
    // //             direction = false;
    // //         }
    // //         animateScrollTo(screenTop, direction);
    // //     });
    // // });

})();