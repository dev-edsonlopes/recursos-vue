import { Directive } from 'vue'

const highlight: Directive = {
  beforeMount(el: HTMLElement, bidding) {
    if (bidding.arg === 'background') {
      el.style.background = bidding.value
    } else {
      el.style.color = bidding.value
    }
    if (bidding.modifiers.shadow) {
      el.style.boxShadow = '3px 3px 3px rgba(0, 0, 0, 0.5)'
    }
  }
}

export default highlight
