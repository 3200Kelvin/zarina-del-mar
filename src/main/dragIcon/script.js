import './style.scss';

export const useDragIconAnimation = () => {
    const icon = document.querySelector('.methodology__drag-icon');
    if (!icon) {
        return;
    }

    icon.classList.add('oscillator');

    icon.animate = () => icon.classList.add('oscillator--active');
    icon.reverse = () => icon.classList.remove('oscillator--active');

    icon.setAttribute('data-animation-trigger', 'screen');
};
