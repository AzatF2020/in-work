import Swiper from "swiper";
import "swiper/scss"

export default function clients(): void {
  const clients = document.querySelector<HTMLElement>(".clients")
  if(!clients) return

  const slider = clients.querySelector<HTMLElement>(".clients__cards")

  function initSlider(slider: HTMLElement) {
    return new Swiper(slider, {
      slidesPerView: "auto",
      spaceBetween: 0,
    })
  }
  if(window.matchMedia("(max-width: 1024px)").matches) {
    initSlider(slider!).init()
  }
}