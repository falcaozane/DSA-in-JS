def mov_zeros(arr):

    i=0
    n = len(arr)

    for j in range(n):
        if arr[j] !=0:
            arr[i],arr[j] = arr[j],arr[i]
            i+=1
    
    return arr

numbers = [0, 3, 0, 5, 2, 0, 8, 1]
print("Original array:", numbers)
moved_zeros_array = mov_zeros(numbers)
print("Array after moving zeros to the end:", moved_zeros_array)