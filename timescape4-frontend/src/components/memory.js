

class Memory {
  constructor(memoryJSON) {
    this.id = memoryJSON.id
    this.content = memoryJSON.content
  }

  renderLi() {
    let mli = document.createElement('li')
    mli.textContent = this.content
    return `<li>${this.content}</li>`
  }
}
