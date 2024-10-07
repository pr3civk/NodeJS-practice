def next_lower_number(num):
    num_str = str(num)
    if len(num_str) <= 1 or len(num_str) > 5:
        return num

    num_list = list(num_str)
    for i in range(len(num_list) - 1, 0, -1):
        if num_list[i] < num_list[i - 1]:
            num_list[i], num_list[i - 1] = num_list[i - 1], num_list[i]
            new_num = int(''.join(num_list))
            return new_num

    return num

print(next_lower_number(50099))