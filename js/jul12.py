#  remove duplicate
# best solution : probably apply the information to a data set that cannot be duplicated. tupples or dictoniary
# other solution: sort the elements, iterate and compare the first and second index
#   if true: remove the second element
def removeDuplicate(list):
    my_set=set(list)
    return my_set
res =removeDuplicate([1,2,4,6,4,3,2,12,4,5,3,2,5,6])
print(res)

# python jul12.py
