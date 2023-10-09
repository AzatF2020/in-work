import "virtual:svg-icons-register";
import InitIntroSplitText from "./introSplitText.ts";
import elements from "./elements.ts"
import process from "./process.ts";
import industry from "./industry.ts";
import clients from "./clients.ts";
import burgerModal from "./burger-modal.ts";

document.addEventListener("DOMContentLoaded", () => {
  InitIntroSplitText()
  process()
  industry()
  clients()
  burgerModal()
  elements()
});

window.addEventListener("load", () => {

});
