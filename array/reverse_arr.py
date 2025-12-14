def reverse_arr(arr):
    left = 0
    right = len(arr) - 1

    while left < right:
        temp = arr[left]
        arr[left] = arr[right]
        arr[right]=temp

        left+=1
        right-=1

    return arr


numbers = [3, 5, 2, 8, 1]
print("Original array:", numbers)
reversed_numbers = reverse_arr(numbers)
print("Reversed arr : ",reversed_numbers)