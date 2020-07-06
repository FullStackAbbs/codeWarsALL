# Example:
# AlphabetWar("z");        //=> Right side wins!
# AlphabetWar("zdqmwpbs"); //=> Let's fight again!
# AlphabetWar("zzzzs");    //=> Right side wins!
# AlphabetWar("wwwwwwz");  //=> Left side wins!
#
# Input a string
# Output a string (left side or right side or tie)
# Example
# AlphabetWar("z");        //=> Right side wins!
# (1) take in the string
# (2) iterate through each side to check what letters on each side (leftsideCollection vs rightCollection)
# (3) turn the letters into intergers for their respective values
# (4) add the values of each countCollection
# (5) create a comparison to see which has a greater value and print the msg (left side won etc)
rightSide={
'm':4,
'q':3,
'd':2,
'z':1
}
leftSide={
'w':4,
'p':3,
'b':2,
's':1
}
rightCount=[]
leftCount=[]
def alphabetWar(str):
    for(key,value) in rightSide.items():
        for i in str:
            if i == key:
                rightCount.append(value)
        rightCheck=sum(rightCount)
    for(key,value) in leftSide.items():
        for i in str:
            if i == key:
                leftCount.append(value)
        leftCheck=sum(leftCount)
    if (rightCheck > leftCheck):
        return 'Right Side Wins!'
    if (leftCheck > rightCheck):
        return 'Left Side Wins!'
    if (rightCheck == leftCheck):
        return 'Tie!'
res = alphabetWar('abbey') #calling a function, taking in two input
print(res)
# python jul5.py
