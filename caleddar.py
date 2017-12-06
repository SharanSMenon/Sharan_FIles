import psycopg2
import smtplib
import time
import sys
try:
    conn = psycopg2.connect(dbname="calendar",user="postgres",password="kingini123",port="5432")
    cur = conn.cursor()
    print("Connected")
except Exception as error:
    print("Failed to connect.")
    print("Problem: "+str(error))
class calendar:
    """Calendar Class."""
    def __init__(self):
        cur.execute("SELECT * FROM customers;")
        self.customers = cur.fetchall()
    def addCustomer(self,name,email):
        """
        Add Customer
        """
        cusid = int(self.customers[-1][0])+1
        command = "INSERT INTO customers VALUES("+str(cusid)+","+"'"+name+"'"+","+"'"+email+"'"+");"
        print(command)
        try:
            cur.execute(command)
            conn.commit()
            print("New user added")
        except Exception as e:
            print(e)
        cur.execute("SELECT * FROM customers;")
        self.customers = cur.fetchall()
        print(self.customers)
    def deleteCustomers(self,idn):
        """
        Delete Customer
        """
        command = "DELETE FROM customers WHERE id="+str(idn)+";"
        print(command)
        try:
            cur.execute(command)
            conn.commit()
            print("User Deleted")
        except Exception as e:
            print(e)
        cur.execute("SELECT * FROM customers;")
        self.customers = cur.fetchall()
        print(self.customers)
    def addEvent(self,name,date,cusid):
        """
        Add Event
        """
        cur.execute("SELECT * FROM events;")
        events = cur.fetchall()
        idd = int(events[-1][0])+1
        command = "INSERT INTO events VALUES("+str(idd)+","+"'"+str(name)+"',"+str(cusid)+","+"DATE('"+str(date)+"')"+");"
        print(command)
        try:
            cur.execute(command)
            conn.commit()
            print("Event added")
        except Exception as e:
            print(e)
    def deleteEvent(self,idn,cusid):
        command = "DELETE FROM events WHERE id="+str(idn)+";"
        print(command)
        try:
            cur.execute(command)
            conn.commit()
            print("Event Deleted")
        except Exception as e:
            print(e)
    def sendEmail(self,cusid):
        guser = "sharansajivmenon@gmail.com"
        gpass = "SuperMan123*"
        sent_from = 'sharansajivmenon@gmail.com'
        to = [str(self.customers[cusid-1][2])]
        command = "SELECT * FROM events WHERE customer_id="+str(cusid)+" AND eventdate=DATE('"+str(time.strftime("20%y-%m-%d"))+"');"
        print(command)
        cur.execute(command)
        events = cur.fetchall()
        print(events)
        #events = cur.fetchall()
        subject = 'Events from SCalendar'
        body = ""
        for i in range(0,len(events)):
            body+= "Event is "+str(events[i][1])+" and Date is "+str(time.strftime("%m-%d-20%y"))+"\n"
        body+="Please add these events and dates to your Google Calendar"
        email_text = """\
From: %s
To: %s
Subject: %s
%s
        """ % (sent_from, ", ".join(to), subject, body)
        print(email_text)
        try:
            server = smtplib.SMTP('smtp.gmail.com', 587)
            server.ehlo()
            server.starttls()
            server.login(guser,gpass)
            server.sendmail(sent_from, to, email_text)
            server.close()
            print("Success")
        except Exception as e:
            print(e)
calen = calendar()
def AddEvent():
    global calen
    name = str(input("Enter event name: "))
    cusName= str(input("Enter YOUR name: "));
    cur.execute("SELECT * FROM customers;")
    users = cur.fetchall();
    for i in range(len(users)):
        if cusName.lower() == users[i][1].lower():
            userid=users[i][0]
            break
    if userid == None:
        print("Invalid username")
        exit(0)
    print("Id: "+str(userid))
    date = str(input("Enter date in form mm/dd/yyyy: "))
    dt = "'"+date+"'"
    calen.addEvent(name,str(date),userid)
if len(sys.argv) > 2:
    print("You can enter 1 prompt only.")
    exit(0)
elif len(sys.argv)
else:
    if str(sys.argv[1].lower()) == "remind":
        cur.execute("SELECT * FROM customers;")
        customers = cur.fetchall()
        for i in range(0,len(customers)):
            calen.sendEmail(i)
    if str(sys.argv[1].lower()) == "addevent":
        AddEvent()
cur.execute("SELECT * FROM customers;")
customer = cur.fetchall()
#calen.addCustomer("Sample","Sample@something.com")
#calen.deleteCustomers(6)
#AddEvent()
#calen.addEvent("Drawing Classs",str("9/30/2017"),4)
#calen.sendEmail(4)
