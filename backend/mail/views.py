from django.contrib.auth import get_user_model
from django.utils.http import urlsafe_base64_decode
from django.contrib.auth.tokens import default_token_generator
from django.shortcuts import HttpResponseRedirect

User = get_user_model()

def decode_uid_and_get_user(request, uidb64):
    try:
        uid = urlsafe_base64_decode(uidb64).decode()
        user = User._default_manager.get(pk=uid)
    except (TypeError, ValueError, OverflowError, User.DoesNotExist):
        user = None
    return uid, user

def activate(request, uidb64, token):
    uid, user = decode_uid_and_get_user(request, uidb64)
    if user is not None and default_token_generator.check_token(user, token):
        user.is_active = True
        user.save()
        status = 'success'
    else:
        status = 'error'
    return HttpResponseRedirect(f'http://localhost:5173/?activate={status}')


def reset_password_validate(request, uidb64, token):
    uid, user = decode_uid_and_get_user(request, uidb64)
    if user is not None and default_token_generator.check_token(user, token):
        request.session['uid'] = uid
        status = 'success'
        return HttpResponseRedirect(f'http://localhost:5173/reset-password')
    status = 'error'
    return HttpResponseRedirect(f'http://localhost:5173/?reset-password-error={status}')
