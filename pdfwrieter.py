"""
pdfFileObj = open('C:/sharan/Sharan_website_files/samplePDF.pdf', 'rb')
pdfReader = PyPDF2.PdfFileReader(pdfFileObj)
pdfWriter = PyPDF2.PdfFileWriter()
#print("Pages: " +str(pdfReader.numPages))
lis = [method_name for method_name in dir(pdfReader)]
#print("Methods: "+str(lis))
page10 = pdfReader.getPage(10)
txt10 = page10.extractText()
pdfOutput = open('Doc1.pdf','wb')
#print(txt10)
"""
#file:///C:/sharan/Sharan_website_files/tuto1.pdf
import random
from fpdf import FPDF
pdf = FPDF()
pdf.add_page()
pdf.set_font('arial', 'B', 37)
operator = input("Choose your operator: ")
try:
    if operator == "x" or operator == "*":
        digits = 1
        maxN = 10
        minN = 2
    if operator == "/":
        digits = 1
        maxN = 20
        minN = 2
    elif operator == "+" or operator == "-":
        digits = input("How many digits do you want?")
        n = "1"
        for i in range(0, int(digits)):
            n += "0"
        n = int(n)
        maxN = n-1
        minN = n/10
        num1 = random.randint(minN, maxN)
        num2 = random.randint(minN, maxN)
except Exception as e:
    print(e)
    print("You did not type a integer. Run the program again")
#operator_list = [" + ", " - ", "*"]
pdf.cell(40, 10, 'Kinga Math Problems!', 0, 1)
pdf.set_font('arial', 'B', 14)
for i in range(0, 56):
    if operator == "*" or operator == "x":
        operator = "x"
        num1 = random.randint(minN, maxN)
        num2 = random.randint(minN, maxN)
    if operator == "-":
        num1 = random.randint(minN, maxN)
        while True:
            num2 = random.randint(minN, maxN)
            if num2 < num1:
                break
    if operator == "/":
        num1 = random.randint(minN, maxN)        
        num2 = 2
        while num1 % num2 != 0:
            num2 += 1
    if operator == "+":
        num1 = random.randint(minN, maxN)
        num2 = random.randint(minN, maxN)
    string = str(num1)+ str(operator) +str(num2)+" = "
    print(string)
    if i % 5 == 0:
        pdf.cell(40, 20, string, 0, 1)
    else:
        pdf.cell(40, 20, string, 0)
pdf.output('tuto1.pdf', 'F')
