import { useProgramsLinks } from "./links/script";
import { useLinkDropdown } from "./dropdown/script";

import "./cards/style.scss";

export const usePrograms = () => {
    useProgramsLinks();
    useLinkDropdown();
};
