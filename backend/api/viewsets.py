from django.contrib.auth import authenticate, login, logout
from django.urls import resolve

from rest_framework import viewsets, mixins, status, permissions
from rest_framework.authtoken.models import Token
from rest_framework.response import Response

from accounts.models import User
from vendor.models import Vendor
from . import serializers, permissions as custom_permissions
from mail import utils


class UserViewSet(viewsets.ModelViewSet):
    """
    Provides the standard actions for users.
    """
    queryset = User.objects.all().order_by('-created_date')
    serializer_class = serializers.UserSerializer
    lookup_field = 'uuid'

    def get_view_name(self):
        return "Users api"

    def create(self, request, *args, **kwargs):
        if request.user.is_authenticated:
            return Response(status=status.HTTP_405_METHOD_NOT_ALLOWED)
        return super().create(request, *args, **kwargs)


class CurrentUserViewset(viewsets.GenericViewSet,
                         mixins.RetrieveModelMixin,
                         mixins.UpdateModelMixin):
    """
    Retrieves current user details.
    """
    serializer_class = serializers.UserSerializer
    permission_classes = [permissions.IsAuthenticated,]
    lookup_field = 'uuid'

    def get_view_name(self):
        return "Current user api"

    def get_endpoint(self):
        return resolve(self.request.path_info).kwargs['uuid']

    def get_object(self):
        if self.get_endpoint() == 'current':
            return self.request.user

    def get_queryset(self):
        return User.objects.none()

    def update(self, request, *args, **kwargs):
        if self.get_endpoint() != 'current':
            return Response(status=status.HTTP_405_METHOD_NOT_ALLOWED)
        return super().update(request, *args, **kwargs)


class VendorViewSet(viewsets.ModelViewSet):
    """
    Provides the standard actions for vendors.
    """
    queryset = Vendor.objects.all()
    serializer_class = serializers.VendorSerializer

    def get_view_name(self):
        return "Vendors api"

    def create(self, request, *args, **kwargs):
        if request.user.is_authenticated:
            return Response(status=status.HTTP_405_METHOD_NOT_ALLOWED)
        return super().create(request, *args, **kwargs)


class LoginViewSet(viewsets.ModelViewSet):
    """
    Authenticates users.
    """
    queryset = User.objects.all()
    serializer_class = serializers.LoginSerializer
    permission_classes = [custom_permissions.IsAnonymousUser]

    def get_view_name(self):
        return "Login api"

    def list(self, request):
        return Response(status=status.HTTP_405_METHOD_NOT_ALLOWED)

    def create(self, request):
        email = request.data.get('email')
        password = request.data.get('password')

        user = authenticate(email=email, password=password)

        if user:
            login(request, user)
            token, created = Token.objects.get_or_create(user=user)
            return Response({'token': token.key}, status=status.HTTP_200_OK)
        return Response(
            {'error': 'Username or password is wrong. Please try again.'},
            status=status.HTTP_401_UNAUTHORIZED
        )


class LogoutViewSet(viewsets.ViewSet):
    """
    Removes credentials for authenticated user.
    """
    permission_classes = [permissions.IsAuthenticated]

    def get_view_name(self):
        return "Logout api"

    def create(self, request):
        user = request.user
        if request.user.is_authenticated:
            logout(request)
            token = Token.objects.get(user=user)
            token.delete()
            return Response(
                {'message': 'Logout successful.'},
                status=status.HTTP_200_OK
            )
        return Response(
            {'error': 'User is not authenticated'},
            status=status.HTTP_401_UNAUTHORIZED
        )


class ForgotPasswordViewSet(viewsets.ViewSet):
    """
    Send password reset link to the user's email.
    """
    permission_classes = [custom_permissions.IsAnonymousUser]

    def get_view_name(self):
        return "Forgot password api"

    def create(self, request):
        email = request.data.get('email')

        if email == '':
            return Response(
                {'error': 'Please enter an email.'},status=status.HTTP_400_BAD_REQUEST)            

        if User.objects.filter(email=email).exists():
            user = User.objects.get(email__exact=email)

            utils.send_email(
                user,
                subject='Djelivery - Reset your password',
                template='password_reset_email.html'
            )
            return Response(
                {'message': 'Password reset email is sent to the user.'},
                status=status.HTTP_200_OK
            )
        return Response(
            {'error': 'There is no user with email you entered, please check it.'},
            status=status.HTTP_404_NOT_FOUND
        )
