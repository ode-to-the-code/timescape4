
class Event {
  constructor(eventJSON) {
    this.id = eventJSON.id
    this.title = eventJSON.title
    this.liEl = document.createElement('li')
    this.memoryContainer = document.createElement('ul')
    this.memoryAdapter = new MemoryAdapter()
    this.setMemories()
    this.memories = []
    this.state = {
      memoriesVisibility: false,
      newMemoryText: ""
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


  addMemory() {
    this.memoryAdapter.createMemory(this.state.newMemoryText)
    const memory = document.createElement('li')
    memory.innerHTML = this.state.newMemoryText
    this.memoryContainer.append(memory)
  }

  renderEventWithMemories(){
    this.state.memoryVisibility = !this.state.memoryVisibility
    if (this.state.memoryVisibility) {
      this.memoryContainer.innerHTML = '<ul>' + this.memories.map(memoryTemplate).join('') + '</ul>'
      const createMemoryButton = document.createElement('button')
      createMemoryButton.innerHTML = "Add Memory"
      const createMemoryInput = document.createElement('input')
      createMemoryInput.addEventListener('change', (e) => {
        const value = e.target.value
        this.state.newMemoryText = value
      })
      createMemoryButton.addEventListener('click', () => {
        this.addMemory();
      })
      const children = this.memoryContainer.childNodes
      this.memoryContainer.insertBefore(createMemoryInput, children[0])
      this.memoryContainer.insertBefore(createMemoryButton, children[0])
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
