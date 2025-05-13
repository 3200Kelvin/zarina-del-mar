import { useProgramCards } from "./cards/script";
import { useProgramsLinks } from "./links/script";

export const usePrograms = () => {
    useProgramCards();
    useProgramsLinks();
};
