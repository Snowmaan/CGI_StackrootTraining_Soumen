# Q1)Lists
print("Answer Of Question-1""\n")
Movies = ["ZNMD", "Interstellar", "Narnia", "Conjuring", "Home Alone 3", "Dhoom2"]
print("Third movie is:- ", Movies[2])

Movies.append("Lakshya")
removed_element = Movies.pop(1)
print(Movies)

first_half = Movies[:3]
second_half = Movies[3:]
print('The primary list is: ', Movies)
print("First half of list is ", first_half)
print("Second half of list is ", second_half)


########################################
# Q2 Tuples
print("\n""Answer Of Question-2""\n")
colors = ("Red", "Green", "Blue", "Orange", "Black", "Purple")
print("Second Color:- ", colors[1])
# colors.append("Yellow")

print("The list of elements in Colors:-")
for color in colors:
    print(color)

########################################
# Q3 Sets
print("\n""Answer Of Question-3""\n")
prog_lang = {"Python", "Java", "C", "C++", "R", "Dart"}
prog_lang.add("C#")
print(prog_lang)

prog_lang.remove("Java")
print("Is apple in this set?", "Python" in prog_lang)
print(prog_lang)

prog_lanG = {"R", "Dart", "Java", "ReactJS", "Html", "MySql"}
print(prog_lanG)


def intersection(prog_lang, prog_lanG):
    intersec = [value for value in prog_lang if value in prog_lanG]
    return intersec


print("THe intersection is:-", (intersection(prog_lang, prog_lanG)))

########################################
# Q4 Dictionaries
print("\n""Answer Of Question-4""\n")

library = {
    "book_1": "The Alchemist",
    "author_1": "paulo coelho",
    "book_2": "The Guideist",
    "author_2": "R.K. Narayan"
}

library["book_3"] = "Invisible Man"
library["author_3"] = "H.G. Wells"

library["book_1"]: "The fifth mountain"

print("The books in library are:")
for key, value in library.items():
    print(key, ":", value)

########################################
# Q5 Inheritance
print("\n""Answer Of Question-5.1""\n")


# Part-1
class Vehicle:
    def __init__(self, make):
        self.make = make

    def speak(self):
        pass


# Derived class (child class) inheriting from Animal
class Car(Vehicle):

    def __init__(self, make, model):
        super().__init__(make)
        self.model = model


# Derived class (child class) inheriting from Animal
class Motorcycle(Vehicle):

    def __init__(self, make, Model, top_speed):
        super().__init__(make)
        self.Model = Model
        self.top_speed = top_speed


# Creating instances of derived classes
car = Car("Sports", "Porche")
bike = Motorcycle("Blue", "Ducati", "310kmph")

# Calculating and printing
print(f"I recently got a {car.model} {car.make} car!")
print(f"I also have a {bike.make} {bike.Model} and its top speed is {bike.top_speed}!")

# Part 2:-
print("\n""Answer Of Question-5.2""\n")


class Employee:
    def __init__(self, name, emp_id):
        self.name = name
        self.emp_id = emp_id

    def calculate_salary(self):
        raise NotImplementedError("Subclasses must implement this method")


class Manager(Employee):
    def __init__(self, name, emp_id, bonus):
        super().__init__(name, emp_id)
        self.bonus = bonus

    def calculate_salary(self):
        base_salary = 80000
        total_salary = base_salary + self.bonus
        return total_salary


class Developer(Employee):
    def __init__(self, name, emp_id, coding_languages):
        super().__init__(name, emp_id)
        self.coding_languages = coding_languages

    def calculate_salary(self):
        base_salary = 40000
        bonus_per_year = 10000 * len(self.coding_languages)
        total_salary = base_salary + bonus_per_year
        return total_salary


# Creating instances of the created classes
manager = Manager("John Doe", 100001, 30000)
developer = Developer("Jane Smith", 515307, ["Python", "Java", "ReactJs"])

# Calculating and printing salaries
print(f"{manager.name}'s salary: {manager.calculate_salary()}")
print(f"{developer.name}'s salary: {developer.calculate_salary()}")
