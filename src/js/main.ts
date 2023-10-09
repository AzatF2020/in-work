import "virtual:svg-icons-register";
import InitIntroSplitText from "./introSplitText.ts";
import elements from "./elements.ts"
import process from "./process.ts";
import industry from "./industry.ts";
import clients from "./clients.ts";

document.addEventListener("DOMContentLoaded", () => {
  InitIntroSplitText()
  process()
  industry()
  clients()
  // elements()
});

window.addEventListener("load", () => {

});
