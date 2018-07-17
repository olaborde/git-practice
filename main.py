# a list of numbers to search through:
number_list = [3, 14, 27, 39, 46, 57, 68, 72, 84, 91]
# the number we want to search for:
target_number = 27
# the "index" (position number) of the first element in the list
# counting starts at zero instead of 1:
start = 0
# the index of the last element in the list:
end = len(number_list) - 1
# a way of tracking if we found the number or not:
found_number = False

# "binary search" of the list for the number:
while start <= end:
    mid = int((start + end) / 2)
    if target_number < number_list[mid]:
        end = mid -1
    elif target_number > number_list[mid]:
        start = mid + 1
    else:
        found_number = True
        break

# print to the shell whether we found the number
if found_number == True:
    print("Found the number!", target_number)
else:
    print("Number not found.")