from rest_framework import viewsets

from accounts.models import User
from vendor.models import Vendor
from .serializers import UserSerializer, VendorSerializer


class UserViewSet(viewsets.ModelViewSet):
    """
    A viewset that provides the standard actions for users.
    """
    queryset = User.objects.all()
    serializer_class = UserSerializer
    lookup_field = 'uuid'


class VendorViewSet(viewsets.ModelViewSet):
    """
    A viewset that provides the standard actions for vendors.
    """
    queryset = Vendor.objects.all()
    serializer_class = VendorSerializer
