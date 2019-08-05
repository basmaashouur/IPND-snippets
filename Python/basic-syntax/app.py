# Vars
numb = 5
fraction = 5.5
word = "Hello, World"
print(numb , fraction, word)

# Conditions 

a = 9
if(a > 10):
    print("Value of a is greater than 10")
elif (a < 10):
    print("Value of a is less than 10")    
else :
    print("Value of a is 10")

# Loops
#range (2, 10, 2), from, to, increment
for b in range(9):
    print(b)

color_list = ["Red", "Blue", "Green", "Black"]
for c in color_list:
    print(c)

# Strings
str = "heeeeeeey\""
print(str);

aa = '''Lorem ipsum dolor sit amet,
consectetur adipiscing elit,
sed do eiusmod tempor incididunt
ut labore et dolore magna aliqua.'''
print(aa, aa[0])

     
# Arrays
#Lists
my_list3 = ['red', 12, 112.12]
my_list3.append('shemp')         ## append elem at end
my_list3.insert(0, 'xxx')        ## insert elem at index 0
print(my_list3, my_list3[0])

# Tuples, like list but can't change it's content after the creation
tuplex = ('tuple', False, 3.2, 1)
print (tuplex, tuplex[0])

# Dictionary 
dict = {"col1" : "Red", "col2" : "Green", 40 : "Orange" }
dict.update({'key3':'geeks'}) 
print(dict, dict[40])

# Sets     
sett = set([0, 1, 2, 3, 4, 5])
sett.add(20)
print(sett)
