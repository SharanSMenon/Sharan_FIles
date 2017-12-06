import smtplib
guser = "sharansajivmenon@gmail.com"
gpass = "SuperMan123*"
sent_from = 'sharansajivmenon@gmail.com'
to = ['jahnvisajivmenon@gmail.com',"sharansajivmenon@gmail.com"]
subject = 'All your events'
body = '9-30-2017'
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
except:
    print('Something went wrong...')
[value for value in variable]
