from github import Github
import json


g = Github("aef65f876c340d835af0b469df6db362fa031a9b")
x =  '{ "name":"John", "age":30, "city":"New York"}'

with open('data.json', 'w') as outfile:
    json.dump(x, outfile)

# for repo in g.get_user().get_repos():
#     print("\n"+repo.name)
#
# print(g.get_user().login)
#
# myList = g.get_repo("sasunts/Lowest-common-ancestor").get_topics()
# print(myList, sep='\n')
