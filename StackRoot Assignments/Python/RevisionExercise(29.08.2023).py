# Question 1
# WAP that takes two lists and returns a new list which has common elements
def common_element(a, b):
    set_1 = set(a)
    set_2 = set(b)

    if set_1 & set_2:
        print(set_1 & set_2)
    else:
        print("No common elements")

a = ["Som", 1, 2, 3, 4, 5]
b = [3, 6, 7, 8, 9, "Som"]
common_element(a, b)

a = [11, 22, 33, 44, 55]
b = [13, 34, 6, 56]
common_element(a, b)


# Question 2
# WAP that takes a sentence as input and counts the number of occurrences of each word in the sentence.
def count_occ(str):
    counts = dict()
    words = str.split()

    for word in words:
        if word in counts:
            counts[word] += 1
        else:
            counts[word] = 1
    return counts

user_input = input("Enter the sentence:-")
print(count_occ(user_input))

# Question 3
# WAP that takes string as input and returns the reverse of the string as input.
name = input("Enter your Name:- ")
print("Proper Name:-", name)

def revStr(name):
    if len(name) == 0:
        return name
    else:
        return revStr(name[1:]) +name[0]


print("Reversed Name is:-", revStr(name))

# Question 4
# WAP that finds the largest element in a given list of numbers
list_1 = []
num = int(input("Enter number of elements in list: "))

for i in range(1, num + 1):
    ele = int(input("Enter elements: "))
#Enter the elements one by one.
    list_1.append(ele)

print("The largest element from the list is:", max(list_1))

# Question 5
# WAP that finds the prime factors of a given number.
def largest_prime_factor(n):
    i = 2
    while i * i <= n:
        if n % i:
            i += 1
        else:
            n //= i
    return n


pf = int(input("Enter the number:-"))
print(largest_prime_factor(pf))


# Question 6
# WAP that takes two sorted lists as input and merges them into a single sorted list.
list1 = [12, 48, 89, 39, 90]
list2 = [56, 54, 23, 3, 87]

sorted_list1 = sorted(list1)
sorted_list2 = sorted(list2)
# printing original lists
print("The original list 1 is : " + str(list1))
print("The Sorted list 1 is : " + str(sorted_list1))
print("The original list 2 is : " + str(list2))
print("The Sorted list 2 is : " + str(sorted_list2))

# sorting
final_result = sorted(list1 + list2)

print("The combined sorted list is : " + str(final_result))
