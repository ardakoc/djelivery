from rest_framework import serializers

from accounts.models import User


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
