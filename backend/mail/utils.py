from django.template.loader import render_to_string
from django.utils.http import urlsafe_base64_encode
from django.utils.encoding import force_bytes
from django.contrib.auth.tokens import default_token_generator
from django.core.mail import EmailMessage
from django.conf import settings

def send_email(user, subject, template):
    from_email = settings.DEFAULT_FROM_EMAIL
    mail_subject = subject
    message = render_to_string(template, {
        'user': user,
        'domain': settings.CURRENT_SITE,
        'uid': urlsafe_base64_encode(force_bytes(user.pk)),
        'token': default_token_generator.make_token(user),
    })
    to_email = [user.email]
    mail = EmailMessage(mail_subject, message, from_email=from_email, to=to_email)
    mail.send()
