import { gsap } from "gsap";
import { useScreenTrigger } from "./src/animationTriggers/screen";
import { useMenu } from "./src/common/menu/script";

if (!window.gsap) {
    window.gsap = gsap;
    gsap.defaults({
        duration: 0,
        ease: 'power2.inOut',
    });
}

useScreenTrigger();
useMenu();