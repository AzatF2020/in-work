import gsap from "gsap"
//@ts-ignore
import { SplitText } from "./vendor/gsap/SplitText.js"

gsap.registerPlugin(SplitText)

export default function InitIntroSplitText(): void {
  // const heading = document.querySelectorAll<HTMLElement>(".intro__title > span")
  //
  // heading.forEach((element: HTMLElement) => {
  //
  //   const childLinesSplitTextInstance = new SplitText(element, {
  //     type: "lines",
  //     linesClass: "lineChild",
  //   });
  //
  //   const parentLinesSplitTextInstance = new SplitText(element, {
  //     type: "lines",
  //     linesClass: "lineParent",
  //   });
  //
  //   const childLines = childLinesSplitTextInstance.lines;
  //   const parentLines = parentLinesSplitTextInstance.lines;
  //
  //   const tl = gsap.timeline({
  //     delay: 1,
  //   })
  //
  //   gsap.set(parentLines, {
  //     overflow: "hidden",
  //   });
  //
  //   tl.fromTo(
  //     childLines,
  //     {
  //       yPercent: 100,
  //     },
  //     {
  //       yPercent: 0,
  //       duration: 1,
  //       stagger: 0.1,
  //     },
  //     ">-=0.5"
  //   );
  // })
}