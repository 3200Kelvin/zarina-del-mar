import { useMediaTicker } from "./media/script";
import { useDragIconAnimation } from "./dragIcon/script";

import './methodology/style.scss';

export const useMainPageScripts = () => {
    useMediaTicker();
    useDragIconAnimation();
}