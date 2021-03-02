export default function goFullscreen() {
    let elem = document.querySelector(".screen")
    if (!document.fullscreenElement) {
      elem.requestFullscreen()
    } else {
      document.exitFullscreen()
    }
}