# BanderMac

## 1. What is BanderMac?
<img height = "150px" width="200px" src="assets/icon.png">
BanderMac is a text-based, Macalester-themed choose your own adventure horror game. We want to evoke suspense, fear, and interest in our audience through the use of compelling story, graphical effects, creepy sounds, and Macalester inside jokes. 


## 2. How to Run
Requirement: Either Python (above Python 2.7) installed or other IDEs (ex. WebStorm, IntelliJ) that can run html using a local host. 

First, clone this repository on the device you are using. Open your terminal and navigate to the directory you want to clone this repository to. 
```
cd Desktop
git clone https://github.com/sojinoh/comp225-bandermac.git
```

### (1) Accessing through url 
Open [https://sojinoh.github.io/bandermac](https://sojinoh.github.io/bandermac) on your favorite browser. But keep in mind that sound works only on Google Chrome and Microsoft Edge but not Safari.

### (2) Using IDE
If you have any IDEs, open this project and run the *home.html* file. You are all set!

### (3) Using Python and Web Browser of Your Choice
If you do not have any IDEs installed but have Python installed, open your terminal and navigate so that the current working directory is *comp225-bandermac*, and then create web server using a Python module SimpleHTTPServer.
```
cd comp225-bandermac
python2.7 -m SimpleHTTPServer
```
Now, open a web browser of your choice (ex. Google Chrome, Safari), and go to [http://localhost:8000/home.html](http://localhost:8000/home.html). You are all set!

## 3. Known Bugs & Future Steps

Currently, the known bugs are that 1) sound does not work in safari and 2) button shortening issue. Sometimes the buttons do not register clicks if the text in the button is long.

We have many features that we would improve or implement in the future. Adding a scrollbar would be useful so that users could reread text that they miss. We also need to finish adding graphics and audio to some scenes. We would like to add new graphics and effects to help give the game more variety. If we had more time, we would have added a settings page that allows users to customize the speed that the text is displayed. We would also add an “Ending History” page that tracks how which and how many Winning endings and Game Over endings the use has reached. Another future direction could be turning this game into a phone app.




