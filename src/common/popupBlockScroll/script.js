export const blockScrollOnPopup = () => {
  const POPUP_OPENED_ATTR = 'popup-opened';

  addStyles();
  const cleanup = setScrollBarWidthListener();

  const elements = document.querySelectorAll('[data-block-scroll]');

  const observer = new IntersectionObserver((entries) => {
    for (const entry of entries) {
      if (entry.isIntersecting) {
        blockScroll();
        return;
      }
      
      unblockScroll();
    }
  });

  elements.forEach(element => {
    observer.observe(element);
  });

  return () => {
    observer.disconnect();
    unblockScroll();
    cleanup?.();
  };

  function blockScroll() {
    document.documentElement.setAttribute(POPUP_OPENED_ATTR, '');
    window.onBlockScroll?.();
  }

  function unblockScroll() {
    document.documentElement.removeAttribute(POPUP_OPENED_ATTR);
    window.onUnblockScroll?.();
  }

  function addStyles() {
    if (document.getElementById('popup-block-scroll-style')) {
      return;
    }

    const style = document.createElement('style');
    style.setAttribute('id', 'popup-block-scroll-style');
    style.innerHTML = `
      html {
        overflow: auto;
      }
      [${POPUP_OPENED_ATTR}] {
        overflow: hidden;

        @media screen and (min-width: 1000px) {
          [compensate-scrollbar-padding] {
            padding-right: var(--scroll-bar-width, 0);
          }

          [compensate-scrollbar-transform] {
            transform: translateX(calc(-1 * var(--scroll-bar-width, 0) / 2));
          }
        }
      }
    `;
    document.head.appendChild(style);
  }

  function setScrollBarWidthListener() {
    const cleanup = () => window.scrollBarListener?.disconnect?.();

    if (window.scrollBarListener) {
      return cleanup;
    }

    const onResize = () => {
        const currentValue = document.documentElement.style.getPropertyValue('--scroll-bar-width');
        const scrollBarWidth = window.innerWidth - document.documentElement.clientWidth;
        if (scrollBarWidth && currentValue !== `${scrollBarWidth}px`) {
            document.documentElement.style.setProperty('--scroll-bar-width', `${scrollBarWidth}px`);
        }
    };

    window.scrollBarListener = new ResizeObserver(onResize);
    window.scrollBarListener.observe(document.documentElement);
    onResize();

    return cleanup;
  }
};
