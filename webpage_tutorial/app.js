//                      ----------
// You could build a website all in one text file or HTML file.

//HTML file for content and page structure. 
//A CSS file is for presentation and styling. 
//The JavaScript file is for behaviors and interactivity.

//                      ----------
//JavaScript (or ECMAScript) is a programming language that helps you add 
//interactivity to your webpage. When you select a button, 
//JavaScript is the code that defines the event or behavior 
//that will happen, such as opening a pop-up window. 

//Using JavaScript, you can add or remove content, like text from the webpage 
//without reloading it. As a web developer, you can use the browser 
//to test and get feedback about your scripts.
//                      ----------

//JavaScript tries to be friendly, make your code work, and provide you with a solution, 
//even if the result should be an error. 

//To combat these shortcomings, you can activate 
//strict mode, which reduces silent errors, 
//improves performance, provides more warnings, 
//and fewer unsafe features
//                      ----------

'use strict'

// ! button in HTML/CSS (after list)

// reference switcher to button .btn ref
const switcher = document.querySelector('.btn');

// event listener for click event
switcher.addEventListener('click', function () { // function passed here is the event handler
    // toggle method to switch to fluo-theme
    document.body.classList.toggle('dark-theme')
    //if statement to check current theme
    var className = document.body.className;
    if (className!="fluo-theme" ) {
        this.textContent = "Fluo";
    } else{
        this.textContent = "Dark";
    }
    // print console messages to keep track of results (developer tools)
    console.log('current class name is ' + className);
});


