
//
//   renderEventWithMemories(){
// the state hash, up in the constructor, just has one variable- memoryVisibility. It's set to false. This
// this line just sets that state variable to its opposite with the ! mark. So it's like a switch.
//     this.state.memoryVisibility = !this.state.memoryVisibility
// this if else block is where the logic inside Show Memory button happens. the instructions for how it should act.
// Let's say memory visibility is true, which means someone wants to see the memories.
//     if (this.state.memoryVisibility) {
//
//       this.memoryContainer.innerHTML = '<ul>' + this.memories.map(memoryTemplate).join('') + '</ul>'
//     } else {
//   to 'close' the memories, it just resets the html to an empty string. it's like an optical illusion,
//   bc it looks like it's collapsing to us. but it's just being set to empty visually.
//       this.memoryContainer.innerHTML = ''
//     }
//
//     console.log("---------------- this.title", this )
//   }
// }




----------

//
//
// createEvent(e){
//   e.preventDefault()
//   const value = this.newEventTitle.value
// // when you return the fetch in events adapter, you get a promise to chain
// // to the then here
// // there's an alternative where you have
//   // -'then' runs when the other promise is resolved. not like setTimeout
//   // -async await can be good to avoid lots of 'then's
//   this.adapter.createEvent(value).then(event => {
//     const newEvent = new Event(event)
//     this.events.push(newEvent)
//     this.newEventTitle.value = ''
// // this is adding the list item to the actual browser page
//     this.renderOne(newEvent)
//   })
// }



-------------------


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














if (this.state.memoryVisibility) {
  
}
