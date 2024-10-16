# # binary search
# x = [["raccoon", 10, 300], ["fox", 40, 600], ["reindeer", 20, 500], ["cat", 70, 800]]

# # inner y
# [print("inner y:", y) for y in x if y[0] == "reindeer"]
# # outer y
# y = [y for y in x if y[0] == "reindeer"]

# print("outer y:", y)


# # hash
# x = {"raccoon": [10, 300], "fox": [40, 600], "reindeer": [20, 500], "cat": [70, 800]}

# print(x["raccoon"])


# sort

# x = [5000, 12000, 3000, 8000, 15000]
# y = sorted(x, reverse=True)

# print(y)

x = [
    ["raccoon", 8000],
    ["rabbit", 5000],
    ["bear", 3000],
    ["beetle", 15000],
    ["snake", 12000],
]

print(sorted(x, key=lambda y: y[1], reverse=True))
