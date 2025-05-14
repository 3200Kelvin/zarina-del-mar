import './style.scss';

export const useMenu = () => {
    const menu = document.querySelector('.menu');
    const trigger = document.querySelector('.burger-btn');
    const links = menu.querySelectorAll('a');

    if (!menu || !trigger) {
        return;
    }

    let isOpened = false;

    setTimeout(() => {
        trigger.classList.add('transition');
    }, 10);

    trigger.addEventListener('click', () => {
        if (isOpened) {
            closeMenu();
        } else {
            openMenu();
        }
    });

    links.forEach((link) => {
        const isSamaPage = link.href.split('#')[0] === location.href.split('#')[0];
        if (isSamaPage) {
            link.addEventListener('click', closeMenu);
        }
    });

    function openMenu() {
        trigger.classList.add('opened');
        isOpened = true;

        gsap.timeline()
            .to(menu, { display: 'block', clipPath: 'polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)' })
            .to(menu, { clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)', duration: 0.6 });
    }

    function closeMenu() {
        trigger.classList.remove('opened');
        isOpened = false;

        gsap.timeline()
            .to(menu, { clipPath: 'polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)', duration: 0.8 })
            .to(menu, { display: 'none' });
    }
};
