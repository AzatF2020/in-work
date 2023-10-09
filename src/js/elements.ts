import Swiper from "swiper";
import {Navigation, EffectFade} from "swiper/modules";
import "swiper/scss";

import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

export default function elements(): void {
  const videoSpeed: number = 0.85;

  const elements = document?.querySelector<HTMLElement>(".elements");
  const elementsSlider = elements?.querySelector<HTMLElement>(".elements__slider")

  const videos =  [...elements!?.querySelectorAll<HTMLVideoElement>("video")]

  if(!elementsSlider) return

  function initSlider(slider: HTMLElement): Swiper | void {
    if(!slider) return

    return new Swiper(slider, {
      modules: [Navigation, EffectFade],
      effect: "fade",
      speed: 1000,
      navigation: {
        nextEl: elements?.querySelector<HTMLButtonElement>(".button-next"),
        prevEl: elements?.querySelector<HTMLButtonElement>(".button-prev")
      }
    })
  }

  function initVideoOptions(video: HTMLVideoElement): void {
    video.playbackRate = videoSpeed
  }

  function initVideoParallax(video: HTMLVideoElement): void {
    gsap.set(video, {yPercent: -10})

    const tl = gsap.timeline({
      delay: .5
    })

    tl.to(video, {
      yPercent: 10,
      scrollTrigger: {
        trigger: video,
        scrub: 1,
      }
    })
  }


  initSlider(elementsSlider!)?.init()

  videos?.forEach((video: HTMLVideoElement) => {
    initVideoOptions(video)
    initVideoParallax(video)
  })
}