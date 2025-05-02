import './style.scss';

export const useRunner = (block, wrapperSelector, entrySelector) => {
    const defaultDuration = '20s';
    const wrapper = block.querySelector(wrapperSelector);
    const entry = wrapper.querySelector(entrySelector);
    
    block.classList.add('runner');
    wrapper.classList.add('runner__wrapper');
    entry.classList.add('runner__entry');

    const { durationDesk = defaultDuration, durationTablet = durationDesk, durationMobile = durationTablet } = block.dataset;

    block.style.setProperty('--duration-desk', durationDesk);
    block.style.setProperty('--duration-tablet', durationTablet);
    block.style.setProperty('--duration-mobile', durationMobile);

    let wrapperClone;
    let currentNumber = 1;
    let debounce;

    const resizeObserver = new ResizeObserver(([entry]) => {
        clearTimeout(debounce);
        debounce = setTimeout(() => onResize(entry), 250);
    });
    resizeObserver.observe(entry);

    return { toggleRunner, cleanup };

    function cleanup () {
        resizeObserver.disconnect();
    }

    function onResize(entry) {
        const targetNumber = getTargetAmount(entry.contentRect.width);
        if (currentNumber !== targetNumber) {
            changeAmountOfEntries(targetNumber);
            currentNumber = targetNumber;
        }
    }

    function getTargetAmount(entryWidth) {
        return Math.ceil(window.innerWidth / entryWidth);
    }

    function changeAmountOfEntries(targetNumber) {
        if (targetNumber > currentNumber) {
            const toAdd = targetNumber - currentNumber;
            for (let i = 0; i < toAdd; i++) {
                const clone = entry.cloneNode(true);
                wrapper.appendChild(clone);
            }
        } else {
            const toRemove = currentNumber - targetNumber;
            for (let i = 0; i < toRemove; i++) {
                wrapper.removeChild(wrapper.lastElementChild);
            }
        }

        if (wrapperClone) {
            wrapperClone.remove();
        }

        wrapperClone = wrapper.cloneNode(true);
        wrapper.after(wrapperClone);

        block.classList.add('runner--reset');
        setTimeout(() => block.classList.remove('runner--reset'), 10);
    }

    function toggleRunner(isVisible = false) {
        if (isVisible) {
            block.classList.add('runner--visible');
        } else {
            block.classList.remove('runner--visible');
        }
    }
};
