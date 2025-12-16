# leetcoode 560: Subarray Sum Equals K
from typing import List

class Solution:
    def subarraySum(self, nums: List[int], k: int) -> int:
        mp = {0:1}
        curr_sum , count = 0,0
        for num in nums:
            curr_sum +=num
            if curr_sum - k in mp:
                count+=mp[curr_sum-k]
            mp[curr_sum] = mp.get(curr_sum,0)+1
        return count
    
sol = Solution()
print(sol.subarraySum([1,1,1], 2))          # 2
print(sol.subarraySum([1,2,3], 3))          # 2
print(sol.subarraySum([1,2,1,2,1], 3))      # 4