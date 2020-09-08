def twoSum(nums, target):
        holder = {}
        for index,num in enumerate(nums):
            diff = target - num
            holder[num] = diff
        if holder[diff] == num:
            matchIndex = nums.index(holder[num])
            print(matchIndex,index)
twoSum([9,3,4,5,6],11)
# python twoSum.py
#         iterate thru all nums:
#           find the difference between the num and the target
#               save the difference into dictionary
#          once the difference matches object-index
#                 report the index of the object and the current array
