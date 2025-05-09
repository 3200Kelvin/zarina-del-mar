import { useProductPageScripts } from "./src/products/script";
import { addStyle } from "./src/common/addStyle";

addStyle(document.currentScript);

useProductPageScripts();
