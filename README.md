# Git-Terrogation-Graph
Software Engineering Project


### Tasks:
* Interrogate the GitHub API to retrieve and display data regarding the logged in developer.
* Interrogate the GitHub API to build visualisation of data available tht elucidates some aspect of the softare engineering process, such as a social graph of developers and projects, or a visualisation of indiviudal of team performance. Provide a visualisation of this using the d3js library


### Complete:
##### Task 1
 `interrogation.py` is made to complete the first part of the task. This allows me to
login with my GitHub account and will print on the console with a few details such as
all my repos, my username and the topics of my Lowest common ancestor repo. I will improve
this by creating a menu with switch cases of all of my repos and the user can chose which
repo to print topics about.

##### Task 2
For the Github visualisation project I decided to look at a popular repo and one I found interesting
was the bitcoin repo. When you run `run.sh` or `winRun.bat`, you will be prompted to enter your GitHub
credentials and this is to generate an instance of Github in python. Once this is done the `dataVisualisation.py`
will run and generate an up to date JSON file which contains the author of the committer and the commit count.

This data is then shown on a large (size optimised for HIDPI screens) treemap, where those who commit more
get a larger rectangle to show how much exactly they have contributed compared to the rest. Since Bitcoin has
a lot of contributors I decided to show the top 30 of them.  

In order to get the website loading you must first install XAMPP, and run a local Apache server and either put
the files into the XAMPP install directory in htdocs or point the local server directory to the folder you have
the code in. Then simply type `localhost` in your browser and you're good to go!


### Example
When opened.
![alt text](https://github.com/sasunts/git-terrogation-graph/blob/master/img/gitscreenshot1.png)

Mouse on hover over a rectangle:
![alt text](https://github.com/sasunts/git-terrogation-graph/blob/master/img/gitscreen2.png)
*Note* The total commit is pushed more to the left in order to fit the text in all rectangles.
