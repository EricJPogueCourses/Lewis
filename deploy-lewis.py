import os
import time

print("Deploying lewis.education:")
os.chdir("/Users/epogue/Repositories/lewis")
os.system("git status")
os.system("git commit -a -m \"Update files.\"")
os.system("git push")
os.system("npm run build")
os.system("deploy lewis")
os.chdir("/Users/epogue/Repositories/lewis-education")
os.system("git status")
os.system("git add .")
os.system("git commit -a -m \"Update React client.\"")
os.system("git push")
os.chdir("/Users/epogue/Repositories/lewis")

print("Waiting 1 minute before opening browse:")
time.sleep(60)
os.system("open https://www.lewis.education/#/test/me")


