import { Controller } from "stimulus"

export default class extends Controller {
  static targets = ["name"]

  asdf() {
    console.log(`Hello, ${this.nameTarget.value}`)
  }
}
