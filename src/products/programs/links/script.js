import './style.scss';

export const useProgramsLinks = () => {
    const links = document.querySelectorAll('.programs__short-list a');
    const cards = document.querySelectorAll('.program-card');

    if (!links) {
        return;
    }

    const idsToLinks = [...links].reduce((acc, link) => {
        link.setAttribute('href', `#${link.dataset.id}`);
        acc[link.dataset.id] = link;
        return acc;
    }, {});

    const intersectionObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                setActiveLink(entry.target.id);
            } else {
                resetActiveLink(entry.target.id);
            }
        });
    }, { rootMargin: '-49% 0% -50% 0%' });

    cards.forEach((card) => {
        intersectionObserver.observe(card);
    });

    function setActiveLink(id) {
        idsToLinks[id].classList.add('active');
    }

    function resetActiveLink(id) {
        idsToLinks[id].classList.remove('active');
    }
};
