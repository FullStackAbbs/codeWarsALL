 # Complete the function so that it finds the mean of the three scores passed to it and returns the letter value associated with that grade.
 # Numerical Score	Letter Grade
 # 90 <= score <= 100	'A'
 # 80 <= score < 90	'B'
 # 70 <= score < 80	'C'
 # 60 <= score < 70	'D'
 # 0 <= score < 60	'F'
 # Tested values are all between 0 and 100. Theres is no need to check for negative values or values greater than 100
 # Input 3 number array
 # Output a string A to F
 # Example
 # [90,100,80]
 # sum these numbers and divide by the number of elements
 # check the range of the avg number and return the corresponding letter


def get_grade(s1,s2,s3):
    list=[s1,s2,s3]
    avgGrade =sum(list)/len(list)
    if 90 <=avgGrade<= 100:
        return 'A'
    if 80 <=avgGrade<= 90:
        return 'B'
    if 70 <=avgGrade<= 80:
        return 'C'
    if 60 <=avgGrade<= 70:
        return 'D'
    if 0 <=avgGrade<= 60:
        return 'F'
res = get_grade(98,65,79) #calling a function, taking in two input
print(res)
# python jul6.py
