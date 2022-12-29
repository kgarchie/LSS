from django.shortcuts import render
from django.core.mail import send_mail

# Create your views here.

sys_email = 'lsscoke@lss.co.ke'


def lss_email_message(request):
    if request.method == 'GET':
        sender_email = request.GET['sender_email']
        sender_name = request.GET['sender_name']
        sender_message = request.GET['sender_message']

        # if name is blank, take first part of email as name
        if sender_name == '':
            sender_name = sender_email.split('@')[0]


        # Send email to admin
        send_mail(
            'Message from ' + sender_name +
            ' via LSS website' + ' (' + sender_email + ')',
            sender_message,
            sender_email,
            [sys_email],
            fail_silently=False,
        )

        # return json response for email success or fail send

