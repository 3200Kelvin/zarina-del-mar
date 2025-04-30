import { useRunner } from "../../common/runner/script";

export const useMediaTicker = () => {
    const block = document.querySelector('.about__media');
    if (!block) {
        return;
    }

    const { toggleRunner } = useRunner(block, '.about__media__wrapper', '.about__media__list');

    block.animate = () => toggleRunner(true);
    block.reverse = () => toggleRunner(false);
    block.setAttribute('data-animation-trigger', 'screen');
};
