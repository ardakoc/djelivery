from rest_framework import serializers

from accounts.models import User
from vendor.models import Vendor


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = [
            'uuid',
            'first_name',
            'last_name',
            'email',
            'username',
            'password',
        ]

    def create(self, validated_data):
        user = User.objects.create_user(**validated_data)
        return user


class VendorSerializer(serializers.ModelSerializer):
    class Meta:
        model = Vendor
        fields = [
            'vendor_name', 'vendor_license',
        ]
