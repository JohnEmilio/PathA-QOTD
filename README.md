# PathA Question of the Day
This is a question of the day which picks a question at random from a MongoDB collection of over 100 questions (more to come!). It provides simple feedback on whether the answer selected was correct or not. 

**Link to project:** https://patha-qotd.herokuapp.com/

![alt tag](https://media.giphy.com/media/O1LdOFfiiVrXU0j50J/giphy.gif)

## How It's Made:

**Tech used:** EJS, CSS, HTML, JavaScript, Node.js, MongoDB

Using a handbuilt MongoDB collection, I use JavaScript to select a document at random from the collection. Then the information is sent to ejs and compiled into HTML. To check for a correct answer, a value is passed into an element in the DOM and after the main.js grabs that value from the DOM, that element is then deleted from the DOM so that no one can use the inspector to see the correct answer. Using query selectors, labels, radio buttons, and a submit button, I check for the correct answer using a JavaScript function that is called on click of the submit. It checks for the answer, and depending if the selected answer is right or wrong, different text will be animated by appending a class to a hidden element in the DOM.

## Optimizations

I am looking into ways to ensure there are no repeat questions until all the questions have been cycled through. Also I want to find a more streamlined way to insert a new document into my MongoDB collection.

## Lessons Learned:

Sometimes simple solutions can get the same results as more complex ones. It took me a while to figure out how to get the value for the correct answer without having to jump through a bunch of hoops. Since the answers are already sent to EJS I finally figured that I put the correct answer into an element in the DOM and then remove that element immediately after grabbing the value and placing it in a variable in my main JavaScript.  




