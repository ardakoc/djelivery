from django.template.loader import render_to_string
from django.utils.http import urlsafe_base64_encode
from django.utils.encoding import force_bytes
from django.contrib.auth.tokens import default_token_generator
from django.core.mail import EmailMessage
from django.conf import settings

def send_verification_email(user, subject, template):
    from_email = settings.DEFAULT_FROM_EMAIL
    message = render_to_string(template, {
        'user': user,
        'domain': settings.CURRENT_SITE,
        'uid': urlsafe_base64_encode(force_bytes(user.pk)),
        'token': default_token_generator.make_token(user),
    })
    to_email = [user.email]
    mail = EmailMessage(subject, message, from_email=from_email, to=to_email)
    mail.send()

def send_notification_email(user, subject, template, context):
    from_email = settings.DEFAULT_FROM_EMAIL
    message = render_to_string(template, context)
    to_email = [user.email]
    mail = EmailMessage(subject, message, from_email=from_email, to=to_email)
    mail.send()
