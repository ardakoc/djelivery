from rest_framework.test import APITestCase
from rest_framework import status
from django.contrib.auth import get_user_model
from rest_framework.authtoken.models import Token

User = get_user_model()

class UserAPITestCase(APITestCase):
    def setUp(self):
        self.user = User.objects.create_user(
            first_name='test',
            last_name='user',
            email='testuser@test.com',
            username='testuser',
            password='testpassword',
        )
        self.token = Token.objects.create(user=self.user)
        self.client.credentials(HTTP_AUTHORIZATION=f'Token {self.token.key}')

    def test_retrieve_authenticated_user(self):
        response = self.client.get('/api/v1/users/{}/'.format(self.user.uuid))
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.assertEqual(response.data['username'], self.user.username)

    def test_retrieve_unauthenticated_user(self):
        self.client.credentials()  # Remove credentials
        response = self.client.get('/api/v1/users/{}/'.format(self.user.uuid))
        self.assertEqual(response.status_code, status.HTTP_401_UNAUTHORIZED)