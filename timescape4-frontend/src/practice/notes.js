
// gen

how did he start showing event 1, event 2, etc. underneath the input box? to get that text there
in the render method (in events.js), he grabbed the events content div with document.getElementById.
he also changed that element's div in html to ul instead. then he changed its inner html to set it to
an li with event1, another with event2.


27:34
the app class in compenents folder, the only thing it's going to do when we create it or create a new version, is instantiate a new instance of my events class. that's it's function.

so if I go back to my index.js, all i did was create a new instance of app.

27:57
so when I create a new instance of app, that will kick off my constructor, which
will create a new instance of my notes (events) class.

28:05
notes class
so this is where the meat of our application is going to be.


29:00
we'll invoke a method called bindEventListeners

29:51
this function (fetchAndLoadNotes in the events.js file) is going to use our adapter (this.adapter below is equal to
  the new instance of EventsAdapter that we created on line 5 in the constructor.
This means we can get the notes, by taking advantage of that particular instance method (that is
the getNotes method in the EventsAdapter class in adapters folder).

30:00
that returns a promise where we get back our notes

*30:15
reviews the flow again, with visual examples from files.
we start the application, and index.js gets kicked off. 1;
it creates a new instance of App. 2;
then App, once it gets created, creates a new instance of our events component. 3;
when our events component is created, it sets various variables and calls a couple of methods. 4;
then we'll comment out bindEventListeners bc we don't ahve those yet. but
then the fetchAndLoadNotes method makes a call to the backend api. 5;
then we console log the notes, 6.

*35:10
you can’t do self closing tags for the script tags, and you have to put these tags in a certain order.
In order for App.js to be able to instantiate a new app, the js
for 'app' needed to be loaded first.

*35:30
some flow review
so now we see, in our events component

*37:50
EventsService and service classes in rails. what's the conneciton?

lookup document.querySelector and how to grab an element by class and id
lookup eventListeners for javascript impaticularly submit event listener for a form e.preventDefault() e.target


// Part 2

6:10 i'm going to want to make instances of Note, as i iterate through them in the notes class.

8:00 now (with the regular objects printing as Note objects / instances of the Notes class) we'll be able
to be more thoughtful with our code and add methods to the note calss they'll be able to take advantage of

18:30 the initBindingsAndEventListeners() method. he's putting the notesContinaer there.
'Any time we need to cache DOM elements, we would do that inside initBindingsAndEventListeners, which gets
triggered inside our constructor,' 'that way i don't have to always grab that DOM element every time i render...it'll
be saved in that property notesCOntainer.''

19:36 in the note class, note.renderLi.
..


1
starts in index.hmtl, where the html elements are created. the DOM is where you can dynamically
edit, remove, add etc html via javascript.

2

// a stack isn't just for technologies but refers to a specific data structure , a vertical 
// set of things...you can only access it in a vertical way from the top down or bottom up. it's
// more efficient
// linked lists and double ended queues are similar concepts, but there are many such data structures like
// trees, heaps etc.
// a call stack has to do with 'pressing down' on a functions context and popping off the top state
// stack overflow/underflow
// knowing how data strcutures and algorithms work helps you chooise a good one to suit the needs of that
// program in terms of memory and performance, or you optimize later as you learn
// premature optimization

// "this" refers to context, which is similiar but not identical to scope. these
// .bind things are enshrining the original context in which the function was declared.
// if we didn't use .bind, it wouldn't keep track of the functions and their contexts.
// event/resource pooling is actually 'garbage collection'
