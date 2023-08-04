from rest_framework import viewsets

from accounts.models import User
from .serializers import UserSerializer


class UserViewSet(viewsets.ReadOnlyModelViewSet):
    """
    A viewset for viewing users.
    """
    queryset = User.objects.all()
    serializer_class = UserSerializer
    lookup_field = 'uuid'
    