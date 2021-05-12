
class EventsAdapter {

one way to do this, and there are many with no particular standard, is to
make a memories adapter ... which talks to api/v1/memories. this would
maintain a list of all memories.
 upon retrieval from the database it would create an object
[{content, {content}] // From db
  mapped to
  {1 (event1_id): [{content}, {content}], 2 (event2_id): [{content}]}
When doing render call, then look up memories by event id
Runtime complexity (big O), n = event number, m = memories number
  Doing mapping version, runtime: O(n) * O(1) // Feel like order might be wrong but generally right
  Iterating over array of memories for every event: O(n) * O(m)

Update api/v1/events to include memories in response
[{name, memories:[{content}, {content}]}]
Would still have create/update endpoints for creation/updating (obviously)
   Could be POST /api/v1/events/1/memories (or use /v1/memories but requires `event_id`)
Could rely on `?include=memory` to conditionally include for broader usage
// query strings

can also take the memories from a dump with events
//
// technical debt is inevitable but good to consdier at the outset. but it's ambiguous
// and hard to plan for

  constructor() {
    this.baseUrl = 'http://localhost:3000/api/v1/events'
  }


  getEvents() {
    // console.log("events adapter")
    return fetch(this.baseUrl).then(res => res.json())
 }

  createEvent(value){
    const event = {
      title: value
    }

    return fetch(this.baseUrl, {
      method: 'POST',
      headers: {
        "content-type": "application/json"
      },
      body: JSON.stringify({event: event })
    }).then(res => res.json())

  }


  updateEvent(value){
    const event = {
      title: value
    }

    return fetch(`${this.baseUrl}/${id}`, {
      method: 'PATCH',
      headers: {
        "content-type": "application/json"
      },
      body: JSON.stringify({ event })
    }).then(res => res.json())

  }

}



// .....
class Event {
  constructor() {
    // might be good to make a class method instead of this empty array
    // since the constructor will run every time an instance is created. just like the  the ruby thing
    this.events = []
    // this.adapter = new EventsAdapter()
    const testAdapter1 = new EventsAdapter()
    // this has to be run outside the constructor, to avoid triggering an infinite loop
    this.fetchAndLoadEvents()
    // here instead of this.events = [] you can use something with static
  }


  static fetchAndLoadEvents() {

    // this function is going to use our adapter (this.adapter below is equal to
    //   the new instance of EventsAdapter that we created on line 5 in the constructor.
    // This means we can get the events, by taking advantage of that particular instance method (that is
   // the getEvents method in the EventsAdapter class in adapters folder).
   // console.log("in fetchAndLoadEvents")
    testAdapter1
      .getEvents()
      .then(events => {
         events.forEach(event => new Event(event)
)
        });

        // to make a new instance you want to use new keyword, like new Event

    }
      // .then(() => {
      //   this.render()
      // })
  // }


    render() {
      const eventContainer = document.getElementById('event-container')
      eventContainer.innerHTML = "hi"
    }
}

// ..........

<!-- <script>
  const testEvent = new EventsAdapter()
  testEvent.getEvents().then(res => {
    console.log('res: ', res);
    res.map(data => {
      console.log("data: ", data);
      const value = data.title
      const theEventContainer = document.querySelector('#event-container')
      const newDiv = document.createElement('div')
      newDiv.innerText = value
      theEventContainer.append(newDiv)
    })
  })
  .catch(err => console.log('err: ', err))
  const myForm = document.querySelector('#new-event-form')
  if (myForm) {
    myForm.addEventListener('submit', e => {
      e.preventDefault()
      const value = e.target.children[0].value
      const theEventContainer = document.querySelector('#event-container')
      const newDiv = document.createElement('div')
      newDiv.innerText = value
      theEventContainer.append(newDiv)
      fetch('http://localhost:3000/api/v1/events',
      {
             method: 'POST', 
        headers: { 'Accept': 'application/json', 'Content-Type': 'application/json'     }, 
        body: JSON.stringify({event: {title: value}})   });
    })
  }
</script> -->
