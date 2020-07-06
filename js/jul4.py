# Given an array, find the duplicates in that array, and return a new array of those duplicates. The elements of the returned array should appear in the order when they first appeared as duplicates.
#
# Note: numbers and their corresponding string representations should not be treated as duplicates (i.e., "1" != 1).
#
# Examples
# [1, 2, 4, 4, 3, 3, 1, 5, 3, "5"]  ==>  [4, 3, 1]
# [0, 1, 2, 3, 4, 5]

# Input: an array that may have numbers and strings
# Output: an array of duplicates
# Example: [1, 2, 4, 4, 3, 3, 1, 5, 3, '5'] should give us 4,3,1 bc the count and times it appears greater than one
# Psuedocode:
# iterate through every element
# check how many time the element appears
# if the element appears more the once:
## add the element to the output list
alreadyHere=[]
help=set()
def duplicates(array):
    for element in array:
        if element not in alreadyHere:
            alreadyHere.append(element)
        else:
            help.add(element)
    output =list(help)
    return output
res = duplicates([1, 2, 4, 4, 3, 3, 1, 5, 3, '5'])
print(res)
# python jul4.py
# line 19 O(n) iteration
# ## line 21 O(1)
