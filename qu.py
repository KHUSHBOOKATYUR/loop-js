
# i=0
# while i<10:
#     i=i+1
#     if i==3 or i==8:
#         pass
#     print(i)

a=[['g','f','g'],['i','s'],['b','e','s','t']]
i=0
b=[]
sum=""
while i<len(a):
    j=0
    while j<len(a[i]):
        sum=sum+a[i][j]
        # b.append(sum)
        j=j+1
    # i=i+1
    b.append(sum)
i=i+1
    # break
# print(str,b(sum))
print(b)
