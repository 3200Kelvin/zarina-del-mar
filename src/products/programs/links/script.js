import './style.scss';

export const useProgramsLinks = () => {
    const links = document.querySelectorAll('.programs__short-list a');

    if (!links) {
        return;
    }

    links.forEach((link) => {
        link.setAttribute('href', `#${link.dataset.id}`);
    });
};
