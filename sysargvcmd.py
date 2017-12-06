import sys
def BalaHand():
    print("You entered the correct argument.")
print ("This is the name of the script: " + str(sys.argv[0]))
print ("Number of arguments: "+str(len(sys.argv)))
print ("The arguments are: "+str(sys.argv))
for i in range(0,len(sys.argv)):
    print(sys.argv[i])
    if sys.argv[i] == "BALALU":
        print("Found argv")
        BalaHand()
        break
print("dd")