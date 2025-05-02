import { useScreenTrigger } from "./src/animationTriggers/screen";
import { useMenu } from "./src/common/menu/script";
import { addCommonStyles } from "./src/common/styles";

addCommonStyles();
useScreenTrigger();
useMenu();