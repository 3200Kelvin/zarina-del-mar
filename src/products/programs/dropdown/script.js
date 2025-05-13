export const useLinkDropdown = () => {
    const block = document.querySelector('.programs-mob');

    if (!block) {
        return;
    }

    let isOpened = false;

    const button = block.querySelector('.programs-mob__title');
    const collection = block.querySelector('.programs-mob__collection');
    const list = block.querySelector('.programs-mob__list');
    const links = list.querySelectorAll('.programs-mob__link');

    links.forEach((link) => {
        link.setAttribute('href', `#${link.dataset.id}`);
    });

    button.addEventListener('click', open);

    function open() {
        if (isOpened) {
            return;
        }

        isOpened = true;

        gsap.timeline()
            .to(list, {
                transform: 'translateY(-100%)',
            })
            .to(collection, { display: 'block' })
            .to(list, {
                transform: 'translateY(0%)',
                duration: 0.4,
            })
            .add(() => {
                document.body.addEventListener('click', close);
            });
    }
    
    function close() {
        isOpened = false;
        document.body.removeEventListener('click', close);

        gsap.timeline()
            .to(list, {
                transform: 'translateY(-100%)',
                duration: 0.2,
            })
            .to(collection, { display: 'none' });
    }
};
