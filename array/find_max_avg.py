from typing import List

class Solution:
    def findMaxAverage(self, nums: List[int], k: int) -> float:
        window_sum = sum(nums[:k])
        max_sum = window_sum

        for i in range(len(nums)-k):
            leaving_ele = nums[i]
            entering_ele = nums[i+k]
            window_sum = window_sum - leaving_ele + entering_ele

            max_sum = max(max_sum,window_sum)
        
        return max_sum / k
        


sol = Solution()

print(sol.findMaxAverage([1,12,-5,-6,50,3], 4))  # 12.75
print(sol.findMaxAverage([5,5,5,5], 2))         # 5.0
print(sol.findMaxAverage([-1,-2,-3,-4], 2))     # -1.5
print(sol.findMaxAverage([7,4,9,2], 1))         # 9.0
print(sol.findMaxAverage([3,3,4,3], 4))         # 3.25
