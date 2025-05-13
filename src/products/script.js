import { usePrograms } from "./programs/script";
import { useTestimonials } from "./testimonials/script";
import { useLinkDropdown } from "./programs/dropdown/script";

export const useProductPageScripts = () => {
    usePrograms();
    useTestimonials();
    useLinkDropdown();
};
