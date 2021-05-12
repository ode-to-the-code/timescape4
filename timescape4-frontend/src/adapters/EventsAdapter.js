class EventsAdapter {


  constructor() {
    this.baseUrl = 'http://localhost:3000/api/v1/events'
  }


  getEvents() {
    return fetch(this.baseUrl).then(res => res.json())
 }


  createEvent(value){
    const event = {
      title: value,
    }


     return fetch(this.baseUrl, {
      method: 'POST',
      headers: {
        "content-type": "application/json"
      },
      body: JSON.stringify({ event: event })
    }).then(res => {
      return res.json()
    })
  }


  updateEvent(value, id){
    console.log("update event")
    const event = {
      title: value,
    }

    return fetch(`${this.baseUrl}/${id}`, {
      method: 'PATCH',
      headers: {
        "content-type": "application/json"
      },
      body: JSON.stringify({ event })
    }).then(res => res.json())

  }



  deleteEvent(id){
    console.log("delete event")
  }




}
