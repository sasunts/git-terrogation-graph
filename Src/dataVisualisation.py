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
        usernameList = []
        totalCommitList = []
        myList = g.get_repo("bitcoin/bitcoin").get_stats_contributors()
        for elements in myList:
            usernameList.append( str(elements.author).replace("NamedUser(login=\"", "").replace("\")",""))
            totalCommitList.append(elements.total)


        i = 70
        f = open("data.json", "w")
        f.write("{\"name\": \"Max\",\"value\": 2000,\"children\": [")
        while i < len(usernameList)-1:
            f = open("data.json", "a")
            f.write("{\"name\":"+"\""+usernameList[i]+"\","+"\"value\":"+str(totalCommitList[i])+"}," )
            i += 1
        f = open("data.json", "a")
        f.write("{\"name\":"+"\""+usernameList[len(usernameList)-1]+"\"," + "\"value\":"+str(totalCommitList[len(usernameList)-1])+
        "}]}")
        print("Json file outputted")

if __name__== "__main__":
  main()
