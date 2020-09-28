import os
import time

def printAndSystemExecute(executeString):
	print('Executing: ' + executeString)
	os.system(executeString)

print("Deploying lewis.education:")
os.chdir("/Users/epogue/Repositories/lewis")
printAndSystemExecute("git status")
print('Not automatically adding, committing, or pushing files for "lewis"')
printAndSystemExecute("npm run build")
printAndSystemExecute("deploy lewis")
os.chdir("/Users/epogue/Repositories/lewis-education")
printAndSystemExecute("git status")
print('Automatically adding, committing, or pushing files for "lewis-education"')
printAndSystemExecute("git add .")
printAndSystemExecute("git commit -a -m \"Update React client.\"")
printAndSystemExecute("git push")
os.chdir("/Users/epogue/Repositories/lewis")

print("Waiting 90 seconds before opening browser:")
time.sleep(90)
printAndSystemExecute("open https://www.lewis.education/#/test/me")


