empty_tuple = ()
print(empty_tuple)
print(type(empty_tuple))

one_marx = ("Groucho",)
print(one_marx)
print(type(one_marx))

marx_tuple = "Groucho", "Chico", "Harpo"
print(marx_tuple)
print(type(marx_tuple))

marx_tuple2 = ("Groucho", "Chico", "Harpo")
print(marx_tuple2)
print(type(marx_tuple2))

print(
    type(
        "Groucho",
    )
)

print(type(("Groucho",)))

a, b, c = marx_tuple
print(a, type(a))
print(b)
print(c)

alphabet = a, b, c
print(alphabet, type(alphabet))

a, b, c = c, a, b
print(a)
print(b)
print(c)

marx_list = ["Groucho", "Chico", "Harpo"]
print(tuple(marx_list))

print((a,) + (b, c))
print(
    (a,),
    type((a,)),
)

another_empty_list = list()
print(another_empty_list)

print(list("cat"))

print(list(marx_tuple))
print(type(list(marx_tuple)))

print(marx_list[::-1])
print(marx_list[::-2])
print(marx_list[::-3])
