import { useRunner } from "../../common/runner/script";

export const useMediaTicker = () => {
    const block = document.querySelector('.media-runner');
    if (!block) {
        return;
    }

    const { toggleRunner } = useRunner(block, '.media-runner__wrapper', '.media-runner__list');

    block.animate = () => toggleRunner(true);
    block.reverse = () => toggleRunner(false);
    block.setAttribute('data-animation-trigger', 'screen');
    block.setAttribute('data-trigger-margin', '0');
};
