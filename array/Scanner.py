def find_max_value(arr):
    max_value = arr[0]

    for num in arr:
        if num > max_value:
            max_value = num
    return max_value

def find_min_value(arr):
    min_value = arr[0]

    for num in arr:
        if num < min_value:
            min_value = num
    return min_value

numbers = [3, 5, 2, 8, 1]
result1 = find_max_value(numbers)
result2 = find_min_value(numbers)

print(result1)
print(result2)