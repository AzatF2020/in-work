import Swiper from "swiper";
import "swiper/scss"

export default function industry(): void {
  const industry = document.querySelector<HTMLElement>(".industry")

  if(!industry) return

  const slider = industry.querySelector<HTMLElement>(".industry__cards")

  function initSlider(slider: HTMLElement) {
    return new Swiper(slider, {
      slidesPerView: "auto",
      spaceBetween: 5,
      centeredSlides: true,
    })
  }
  if(window.matchMedia("(max-width: 1024px)").matches) {
    initSlider(slider!).init()
  }
}