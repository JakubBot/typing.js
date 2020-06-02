### Typing.js           
This library allows you to show and hide letter by letter on your page           

Getting Started
### At first everything what you need is to download typing.js from github.           
After that you need to connect script to your document. Library should be at the bottom of body tag. Script is in           
typing - master > src > typing.js            
Copy it to your folder and hook up the script           
It should be looking like this           
```
<script src="typing.js"></script>
or with minify version
<script src="typing.min.js"></script>
```
### Next you should create new script for initialize your object(make sure that script is under the library)
Pattern for initializing is: 
variable = new Typing("target",["your sentances","everything in array"],and object with your values(its optional))

for example it can be looking like that:           
let text1 = new Typing("#text1",["Welcome you here","and encourage you to see my small library","This library has lots of options that will help you control text"],{speedShowing: 100})
      
### For more exampels look at typing - master > examples > index.html

### Default values(everything you can change)
-line:true                                                                                                 
-once:false               
-hideLetters: true            
-delayShow:800            
-speedShowing:150           
-delayHide: 1000           
-speedHiding: 50           

### what every value means
line - true = vertical line is displaying, false = vertical line is not displaying            
once - is your script should be repeating once?              
hideLetters - you can stop hiding letters if you want only display them             
delayShow - time before you will see a text             
speedShowing - its speed between displaying every letter            
delayHide - its time when showing was ended and it's gonna hide letters             
speedHiding - its speed between hiding every letter           

### Authors
Jakub Bot

### License
This project is licensed under the MIT License - see the LICENSE.md file for details


### Tips for users this library
-make sure that when you initialize you object, the name does not repeat
-you have lots of options to control text like speed, delay etc, make sure that everything is suit to you
