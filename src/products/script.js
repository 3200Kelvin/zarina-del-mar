import { useProgramCards } from "./cards/script";
import { useTestimonials } from "./testimonials/script";

export const useProductPageScripts = () => {
    useProgramCards();
    useTestimonials();
};
