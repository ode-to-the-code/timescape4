
class Event {
  constructor(eventJSON) {
    this.id = eventJSON.id
    this.title = eventJSON.title
    this.liEl = document.createElement('li')
    this.memoryContainer = document.createElement('article')
    this.memoryAdapter = new MemoryAdapter()
    this.setMemories()
    this.memories = []
    this.state = {
      memoriesVisibility: false
    }
  }

  renderLi() {
    this.liEl.dataset.eventId = this.id
    this.liEl.textContent = this.title
    let showButton = document.createElement('button')
    this.liEl.appendChild(showButton)
    this.liEl.appendChild(this.memoryContainer)
    showButton.addEventListener('click', x => this.renderEventWithMemories())
    showButton.innerText = 'Show Memory'
    return this.liEl
  }

  setMemories(){
    this.memoryAdapter.getMemoriesByEventId(this.id)
      .then(memories => this.memories = memories)
  }


  renderEventWithMemories(){
    this.state.memoryVisibility = !this.state.memoryVisibility
    if (this.state.memoryVisibility) {
      this.memoryContainer.innerHTML = '<ul>' + this.memories.map(memoryTemplate).join('') + '</ul>'
    } else {
      this.memoryContainer.innerHTML = ''
    }

    console.log("---------------- this.title", this )
  }
}



  const memoryTemplate = function(data) {
    return `
      <li data-memoryId=${data.id}>
      ${data.content}
      </li>
    `
  }
