import { useRunner } from '../../common/runner/script';

import './style.scss';

export const useTestimonials = () => {
    const block = document.querySelector('.testimonials__content');

    if (!block) {
        return;
    }

    const columns = block.querySelectorAll('.testimonials__column');

    columns.forEach((column) => {
        const { toggleRunner } = useRunner(column, '.testimonials__list-wrapper', '.testimonials__list');
    
        column.animate = () => toggleRunner(true);
        column.reverse = () => toggleRunner(false);
        column.setAttribute('data-animation-trigger', 'screen');
        column.setAttribute('data-trigger-margin', '0');

        column.addEventListener('mouseenter', () => {
            toggleRunner(false);
        });

        column.addEventListener('mouseleave', () => {
            toggleRunner(true);
        });
    });
};