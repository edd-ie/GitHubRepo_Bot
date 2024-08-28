import os , random

month = input("Enter month as a number: ")  # Python 3
startDate = int(input("Enter start date: "))
endDate = int(input("Enter end date: ")) + 1

for i in range(startDate, endDate, 1): #date
    d = str(i) + 'days ago'
    with open('test.txt','a') as file:
        file.write(d+'\n')
    os.system('git add test.txt')
    os.system('git commit --date=" 2024-'+str(month)+'-'+d+'" -m 1')
os.system('git push -u origin main')

#git commit --amend --no-edit --date="Fri Nov 6 20:00:00 2015 -0600" 
#git fetch origin master
#git rebase origin/master