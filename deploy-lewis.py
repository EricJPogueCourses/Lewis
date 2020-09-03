import os
os.system("cd /Users/epogue/Repositories/lewis")
os.system("git commit -a -m \"Update files.\"")
os.system("git push")
os.system("npm run build")
os.system("deploy lewis")

