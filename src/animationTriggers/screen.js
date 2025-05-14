export const useScreenTrigger = () => {
    const elements = document.querySelectorAll('[data-animation-trigger="screen"]');

    if (!elements) {
        return;
    }

    const observers = {};

    elements.forEach((element) => {
        const observer = getObserver(element.dataset.triggerMargin || 0);
        observer.observe(element);
    });

    return () => {
        Object.values(observers).forEach((observer) => observer.disconnect());
    };

    function getObserver(margin = 15) {
        const key = margin;

        if (!observers[key]) {
            observers[key] = new IntersectionObserver((entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.animate?.();
                        if (!entry.target.reverse) {
                            observers[key].unobserve(entry.target);
                        }
                    } else {
                        entry.target.reverse?.();
                    }
                });
            }, { rootMargin: `-${margin}% 0% -${margin}% 0%`, threshold: 0 });
        }
        return observers[key];
    }
};
