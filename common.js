import { useScreenTrigger } from "./src/animationTriggers/screen";
import { useMenu } from "./src/common/menu/script";
import { addCommonStyles } from "./src/common/styles";
import { usePopups } from "./src/common/popups/script";
import { blockScrollOnPopup } from "./src/common/popupBlockScroll/script";

gsap.defaults({
    duration: 0,
});

addCommonStyles();
useScreenTrigger();
useMenu();
usePopups();
blockScrollOnPopup();
