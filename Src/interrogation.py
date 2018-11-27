#This is an example of how to get data from logged in developer
#One method of preventing access to github is to add input field
#to allow user to type in login details or access token
#however the code below does exactly what is asked from the assignment
#it shows data about the logged in developer.

from github import Github
import getpass


def main():
    user = False
    while(not user):
        username = input("Enter your Github Username:\n")
        password = getpass.getpass(prompt='Enter your password:\n')
        try:
            g = Github(username, password)
            user = True
        except:
            print("Try again")


        for repo in g.get_user().get_repos():
            print("\n"+repo.name)

        print(g.get_user().login)

        myList = g.get_repo("sasunts/Lowest-common-ancestor").get_topics()
        print(*myList, sep=', ')

if __name__== "__main__":
  main()
