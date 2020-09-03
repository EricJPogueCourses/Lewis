import os
os.system("cd /Users/epogue/Repositories/lewis")
os.system("git commit -a -m \"Update files.\"")
os.system("git push")
os.system("npm run build")
os.system("deploy lewis")
os.system("cd /Users/epogue/Repositories/lewis-education")
os.system("git add .")
os.system("git commit -a -m \"Update React client.\"")
os.system("git push")
os.system("cd /Users/epogue/Repositories/lewis")
os.system("open https://www.lewis.education/#/test/me")


