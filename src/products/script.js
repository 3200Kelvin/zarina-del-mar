import { usePrograms } from "./programs/script";
import { useTestimonials } from "./testimonials/script";

export const useProductPageScripts = () => {
    usePrograms();
    useTestimonials();
};
