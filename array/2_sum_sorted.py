
def two_sum_sorted(nums,target):
    left = 0
    right = len(nums)-1
    
    while left < right:
        curr_sum = nums[left] + nums[right]
        
        if curr_sum == target:
            return [left, right]
        
        elif curr_sum < target:
            left +=1
        else:
            right -=1
    
    return []

# Test
nums = [2, 7, 11, 15] # Sorted!
print(two_sum_sorted(nums, 9)) # Output: [0, 1] (Because 2 + 7 = 9)