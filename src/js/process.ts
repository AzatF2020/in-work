import Swiper from "swiper";
import "swiper/scss"

export default function process(): void {
  const process = document.querySelector<HTMLElement>(".process")
  if(!process) return

  const slider = process.querySelector<HTMLElement>(".process__cards")

  function initSlider(slider: HTMLElement) {
    return new Swiper(slider, {
      slidesPerView: "auto",
      spaceBetween: 0,
      centeredSlides: true,
    })
  }
  if(window.matchMedia("(max-width: 1024px)").matches) {
    initSlider(slider!).init()
  }
}