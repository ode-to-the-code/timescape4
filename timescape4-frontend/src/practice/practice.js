
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





class Event{
  constructor(){
    this.id = eventJSON.id
    this.title = eventJSON.title
    this.liEl = document.createElement('li')
    this.memoryContainer = document.createElement('article')
    this.memoryAdapter = new MemoryAdapter();
    this.setMemories()

  }
}
