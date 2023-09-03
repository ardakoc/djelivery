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
        utils.send_verification_email(
            user,
            subject='Welcome to Djelivery!',
            template='account_verification_email.html'
        )
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
        utils.send_verification_email(
            user,
            subject='Welcome to Djelivery!',
            template='account_verification_email.html'
        )
        return vendor


class VendorProfileSerializer(serializers.ModelSerializer):
    full_address = serializers.SerializerMethodField()

    class Meta:
        model = UserProfile
        fields = ['profile_picture', 'cover_photo', 'address_line_1', 'address_line_2', 'full_address']

    def get_full_address(self, obj):
        return obj.full_address()


class CurrentVendorSerializer(serializers.ModelSerializer):
    user_profile = VendorProfileSerializer()

    class Meta:
        model = Vendor
        fields = ['user_profile', 'vendor_name', 'vendor_license']

    def update(self, instance, validated_data):
        instance.vendor_name = validated_data.get('vendor_name', instance.vendor_name)
        instance.vendor_license = validated_data.get(
            'vendor_license',
            instance.vendor_license
        )
        instance.save()

        profile_data = validated_data.get('user_profile', {})
        user_profile = instance.user_profile
        user_profile.profile_picture = profile_data.get(
            'profile_picture',
            user_profile.profile_picture
        )
        user_profile.cover_photo = profile_data.get(
            'cover_photo',
            user_profile.cover_photo
        )
        user_profile.address_line_1 = profile_data.get(
            'address_line_1',
            user_profile.address_line_1
        )
        user_profile.address_line_2 = profile_data.get(
            'address_line_2',
            user_profile.address_line_2
        )
        user_profile.save()

        return instance


class LoginSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['email', 'password']


class ResetPasswordSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['password']
