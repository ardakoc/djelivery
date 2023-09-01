from rest_framework import serializers

from accounts.models import User, UserProfile
from vendor.models import Vendor
from mail import utils


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
            'role',
        ]
        read_only_fields = ['role']

    def create(self, validated_data):
        user = User.objects.create_user(**validated_data)
        user.role = User.CUSTOMER
        user.is_active = False
        user.save()
        utils.send_verification_email(user)
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
        utils.send_email(
            user,
            subject='Welcome to Djelivery!',
            template='account_verification_email.html'
        )
        return vendor


class LoginSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['email', 'password']


class ResetPasswordSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['password']
