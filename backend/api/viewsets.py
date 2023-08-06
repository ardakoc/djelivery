from rest_framework import viewsets

from accounts.models import User
from .serializers import UserSerializer


class UserViewSet(viewsets.ModelViewSet):
    """
    A viewset that provides the standard actions for users.
    """
    queryset = User.objects.all()
    serializer_class = UserSerializer
    lookup_field = 'uuid'
