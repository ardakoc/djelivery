from rest_framework import serializers

from accounts.models import User, UserProfile
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
        user.role = User.CUSTOMER
        user.save()
        return user


class VendorSerializer(serializers.ModelSerializer):
    user = UserSerializer()

    class Meta:
        model = Vendor
        fields = ['user', 'vendor_name', 'vendor_license']

    def create(self, validated_data):
        user_data = validated_data['user']
        user = User.objects.create_user(
            user_data['first_name'],
            user_data['last_name'],
            user_data['username'],
            user_data['email'],
            user_data['password']
        )
        user.role = User.VENDOR
        user.save()
        user_profile = UserProfile.objects.get(user=user)
        validated_data.pop('user')
        vendor = Vendor.objects.create(
            user=user,
            user_profile=user_profile,
            **validated_data
        )

        return vendor
    

class LoginSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['email', 'password']
