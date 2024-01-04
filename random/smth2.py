from time import time


start = time()
for i in range(1000000):
    print(i, "func")
end = time()

print(end - start)
