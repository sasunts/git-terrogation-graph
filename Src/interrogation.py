from github import Github

g = Github("aef65f876c340d835af0b469df6db362fa031a9b")

for repo in g.get_user().get_repos():
    print("\n"+repo.name)
