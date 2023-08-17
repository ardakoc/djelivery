from django.contrib.auth import authenticate, login

from rest_framework import viewsets, status
from rest_framework.authtoken.models import Token
from rest_framework.response import Response

from accounts.models import User
from vendor.models import Vendor
from . import serializers, permissions 


class UserViewSet(viewsets.ModelViewSet):
    """
    Provides the standard actions for users.
    """
    queryset = User.objects.all()
    serializer_class = serializers.UserSerializer
    lookup_field = 'uuid'


class VendorViewSet(viewsets.ModelViewSet):
    """
    Provides the standard actions for vendors.
    """
    queryset = Vendor.objects.all()
    serializer_class = serializers.VendorSerializer


class LoginViewSet(viewsets.ModelViewSet):
    """
    Authenticates users.
    """
    queryset = User.objects.all()
    serializer_class = serializers.LoginSerializer
    permission_classes = [permissions.IsAnonymousUser]

    def retrieve(self, request):
        return Response(status=status.HTTP_405_METHOD_NOT_ALLOWED)
    
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
