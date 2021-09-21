# Taking input from user

name = input("Enter the hindi name: \n")

# Checking for the length of String

length = len(name)

######if last letter is a vowel, it is a Woman else it might be a Man and move to the next step
  

if name[length-1] in ('a', 'e', 'i', 'o', 'u'):
    print(name,": is the name of a woman")
else :
    print(name,": may be the name of a man, check with the next step :")
    # Moving on to next classifier, sonorants
    nameSONO = name[::-1]
    ##### getting last 3 chars of the name as a list ######  
    array1 = []
    for i in range(0,3):
        array1.append(nameSONO[i])
    ##### reversing the sonorant string and converting the list into a string ######
    sono = ''.join(array1)
    sonorant = sono[::-1]
    # print("The sonorant is ", sonorant)
    ### comparing the sonorant with the strings of our corpus ###
    if sono in ("mha", "nha", "lha", "vha", "rha"):
        print(name,": is the name of a woman")
    else: 
        print(name,": still not sure, may be a man, check with the next step:")
        ### checking open syllables from our corpus ###
        if sonorant in ("rin","be", "go", "hi","aja","avi", "kha", "eha","ali","eet"):
            print(name,":  is the name of a woman")
        else:
            print(name,": The best probability is,he is a man ")

# The above list can be increased depending upon the corpus of hindi words

## link for project https://github.com/Nrohit12/namechecker ##


