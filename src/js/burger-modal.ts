import gsap from "gsap"

export default function burgerModal(): void {
  const burgerModal = document.querySelector<HTMLElement>(".modal-burger")
  const burgerModalBtn = document.querySelector<HTMLButtonElement>(".header__burger-btn")

  let intermediateValue: boolean = false

  if(!burgerModal || !burgerModalBtn) return

  gsap.set(burgerModal, {yPercent: -100})

  function openModal():void {
    burgerModalBtn?.classList.remove("active")
    document.body.style.overflow = "auto"

    const tl = gsap.timeline({})

    tl.to(burgerModal, {
      ease: "power3",
      duration: 1,
      yPercent: -100
    })
  }


  function closeModal():void {
    burgerModalBtn?.classList.add("active")
    document.body.style.overflow = "hidden"

    const tl = gsap.timeline({})

    tl.to(burgerModal, {
      ease: "power3",
      duration: 1,
      yPercent: 0
    })
  }


  function toggleModal() {
    intermediateValue = !intermediateValue

    !intermediateValue ? openModal() : closeModal()
    console.log(intermediateValue)
  }

  burgerModalBtn.addEventListener("click", () => toggleModal())


}