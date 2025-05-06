import { useScreenTrigger } from "../animationTriggers/screen";
import { useHeader } from "./header/script";
import { useMenu } from "./menu/script";
import { usePopups } from "./popups/script";
import { blockScrollOnPopup } from "./popupBlockScroll/script";

import './buttons/style.scss';
import './photos/align.scss';
import './styles.scss';

export const useCommonScripts = () => {
    useHeader();
    useMenu();
    usePopups();
    blockScrollOnPopup();
    useScreenTrigger();
};
