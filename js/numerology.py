#soul number collection all the vowels
#Pythagrous
pyAlphabet={
'a':1,
'b':2,
'c':3,
'd':4,
'e':5,
'f':6,
'g':7,
'h':8,
'i':9,
'j':1,
'k':2,
'l':3,
'm':4,
'n':5,
'o':6,
'p':7,
'q':8,
'r':9,
's':1,
't':2,
'u':3,
'v':4,
'w':5,
'x':6,
'y':7,
'z':8,
}
pyAlphabetConst = pyAlphabet
keys_to_remove =['a','e','i','o','u']
for key in keys_to_remove:
    pyAlphabetConst.pop(key)
pyAlphabetVowel={
    'a':1,
    'e':5,
    'i':9,
    'o':6,
    'u':3
}
def soulNumber(string):
    str=string.lower()
    soulNumberCount=0
    letterCollection={}
    for char in str:
        if char in letterCollection:
            letterCollection[char]+=1
        else:
            letterCollection[char]=1
    for(letter,count) in letterCollection.items():
        for (vowel,value) in pyAlphabetVowel.items():
            if letter == vowel:
                middy=count*value
                soulNumberCount = soulNumberCount + middy
    def digital_root(n):
        return n%9 or n and 9
    digital_root(soulNumberCount)

    # (1 done) take in the str and find the element within the dictionery keys
    # (2 done) from the keys, add the value to the sum
    # (3) if the sum is greater than 9 then execute the digital reducer
    # (4) your soul number is BAM
res = soulNumber('George Edward Clinton')
print(res)
# python numerology.py
