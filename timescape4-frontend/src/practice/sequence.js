
1
starts in index.hmtl, where the html elements are created. the DOM is where you can dynamically
edit, remove, add etc html via javascript.

2
then it goes to index.js (technically it runs all the files, but only index.js contains
invoked code. like class does declare something, but without calling new or soemthing like
that, no actions are committed on the basis of the declarations )

3
then it goes to app, which then sends it to the constructor in Events

4
in Events.js, 
