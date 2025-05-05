import './style.scss';

export const usePopups = () => {
    const popups = document.querySelectorAll('.popup');
    if (!popups) {
        return;
    }

    popups.forEach(initPopup);

    function initPopup(popup) {
        const id = popup.id;
        const content = popup.querySelector('.popup__content');
        const openBtn = document.querySelectorAll(`[data-popup-trigger="${id}"]`);
        const closeBtns = popup.querySelectorAll('.popup__close, .popup__backdrop');

        openBtn.forEach((btn) => btn.addEventListener('click', open));
        closeBtns.forEach((btn) => btn.addEventListener('click', close));

        function open() {
            gsap.timeline()
                .to(popup, { display: 'block', opacity: 0, pointerEvents: 'none' })
                .to(popup, { opacity: 1, pointerEvents: 'all', duration: 0.5, ease: 'power2.inOut' })
                .add(() => content.focus());
        }

        function close() {
            gsap.timeline()
                .to(popup, { opacity: 0, duration: 0.5, ease: 'power2.inOut' })
                .to(popup, { display: 'none', pointerEvents: 'none' });
        }
    }
};
