count = 0
dicFile = open("4LetterDictionary.txt", 'r')
letter_4words = []

for line in dicFile:
    letter_4words.append(line[:4])
    if len(line[:]) == 0:
        print(line)
    count+=1
#    if count % 6 == 0:
#        letter_4words.append("\ "+"\n")

dicFile.close()

print(letter_4words)
print(count)
