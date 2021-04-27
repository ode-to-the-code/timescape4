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


}
