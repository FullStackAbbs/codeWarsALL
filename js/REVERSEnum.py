# check if neg OR the length is more than 2, return false
# if NOT:
#  seperate the int into a list
# create a loop that goes thru half the length, *rounding*
# have a left pointer=index 0
# right pointer=index len-1

### check if lp index is rp index:
######. if its true lp+1 rp-1
### check if lp is rp :
######. if its true RETURN TRUE
class Solution(object):
    def isPalindrome(self, x):
        """
        :type x: int
        :rtype: bool
        """
        
