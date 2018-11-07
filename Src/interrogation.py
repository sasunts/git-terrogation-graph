from github import Github

g = Github("aef65f876c340d835af0b469df6db362fa031a9b")

for repo in g.get_user().get_repos():
    print("\n"+repo.name)

print(g.get_user().login)

myList = g.get_repo("sasunts/Lowest-common-ancestor").get_topics()
print(*myList, sep='\n')
