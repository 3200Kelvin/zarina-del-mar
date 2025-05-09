import './style.scss';

export const useProgramCards = () => {
    const cards = document.querySelectorAll('.program-card');
    if (!cards) {
        return;
    }

    cards.forEach(card => {
        const contentEntries = card.querySelectorAll('li');
        contentEntries.forEach((entry, index) => {
            entry.style.setProperty('--order', getLeadingZero(index + 1));
        });
    });

    function getLeadingZero(num) {
        return num < 10 ? `0${num}` : num;
    }
};
