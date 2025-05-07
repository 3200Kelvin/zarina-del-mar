import './style.scss';

export const useHeader = () => {
    const header = document.querySelector('.header');
    if (!header) {
        return;
    }
    
    const { pathname } = window.location;
    const currentLink = header.querySelector(`[href*="${pathname}"]`);

    if (!currentLink) {
        return;
    }

    const entry = currentLink.closest('.header__nav__entry');
    if (entry) {
        entry.classList.add('header__nav__entry--active');
    }
};