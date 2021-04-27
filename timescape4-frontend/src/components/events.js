
class Events {
  constructor() {
    this.events = []
    this.adapter = new EventsAdapter()
    this.fetchAndLoadEvents()
    this.initBindingsAndEventListeners()
  }



    initBindingsAndEventListeners(){
      this.eventContainer = document.getElementById('event-container')
      this.newEventTitle = document.getElementById('new-event-title')
      this.eventForm = document.getElementById('new-event-form')
      this.eventForm.addEventListener('submit', this.createEvent.bind(this))
      this.eventContainer.addEventListener('dblclick', this.handleEventClick.bind(this))
    }

    createEvent(e){
      e.preventDefault()
      const value = this.newEventTitle.value
      this.adapter.createEvent(value).then(event => {
        const newEvent = new Event(event)
        this.events.push(newEvent)
        this.newEventTitle.value = ''
        this.renderOne(newEvent)
      })
    }


    handleEventClick(e){
      this.toggleNote(e)
    }


    toggleNote(e) {
      const li = e.target
      li.contentEditable = true
      li.focus()
      li.classList.add('editable')
    }



    updateEvent(e){
      const li = e.target
      li.contentEditable = false
      li.classList.remove('editable')
      const newValue = li.innerHTML
      const id = li.dataset.id
      console.log("-------", li.getAttribute("data-eventid"))
      this.adapter.updateEvent(newValue, li.getAttribute("data-eventid"))

    }

    fetchAndLoadEvents() {
      this.adapter
        .getEvents()
        .then(events => {
          console.log(events)
          events
            .forEach(event => this.events.push( new Event(event)))

        })
        .then(() => {
          this.render()
        })

    }


    renderOne(event) {
      const children = this.eventContainer.childNodes;

        if(children.length>0){
            this.eventContainer.insertBefore(children[0], event.renderLi())
         } else {
	          this.eventContainer.append(event.renderLi())
        }
    }


    render() {
      this.events.sort((a, b) => a.id > b.id ? -1 : 1)
      this.events.forEach(event => {
        this.eventContainer.appendChild(event.renderLi())
      })

    }
}
