str = str(98.6)
print(str)
print(type(str))

palindrome = "A man,\nA plan,\nA canal:\nPanama."
print(palindrome)

print("a\tbc")

a = "Duck."
b = "Grey Duck!"
print(a + b)
print(a, b)

start = "Na " * 4
print(start)

str_numbers = "0123456789"
print(str_numbers[:])
print(str_numbers[0:])
print(str_numbers[:-1])
print(str_numbers[5:9])
length = len(str_numbers)
print(length)
print(str_numbers[5:length])

print(str_numbers[::2])

crypto_list = ["Yeti", "Bigfoot", "Loch NEss Monster"]
crypto_string = " / ".join(crypto_list)
print(crypto_string)

blurt = "What the ...!!?"
print(blurt.strip(".!?"))

print(str_numbers.isalnum())
print(a.isalnum())
print(str.isalnum())
print(start.isalnum())

print(str_numbers.center(50))
print(str_numbers.ljust(50))
print(str_numbers.rjust(50))
