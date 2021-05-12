class MemoryAdapter {


  constructor() {
    this.baseUrl = 'http://localhost:3000/api/v1/memories'
  }


  getMemory() {
    return fetch(this.baseUrl).then(res => res.json())
 }

  getMemoriesByEventId(eventId){
    const memoriesUrl = `${this.baseUrl}/by_event/${eventId}`
    return fetch(memoriesUrl).then(res => res.json())
  }


    createMemory(value, event_id){
      const memory = {
        content: value,
        event_id: event_id
      }


       return fetch(this.baseUrl, {
        method: 'POST',
        headers: {
          "content-type": "application/json"
        },
        body: JSON.stringify({ memory: memory })
      }).then(res => {

        console.log("success")
        console.log("res", res)

        return res.json()
      })
    }



}
