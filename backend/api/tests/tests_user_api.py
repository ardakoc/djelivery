from django.contrib.auth import get_user_model

from rest_framework.test import APITestCase
from rest_framework import status
from rest_framework.authtoken.models import Token

User = get_user_model()

class UserAPITestCase(APITestCase):
    def setUp(self):
        """
        Initial create of test user.
        """
        self.user = User.objects.create_user(
            first_name='test',
            last_name='user',
            email='testuser@test.com',
            username='testuser',
            password='testpassword',
        )

    def set_token(self):
        """
        Set token for the test cases need authenticate.
        """
        self.token = Token.objects.create(user=self.user)
        self.client.credentials(HTTP_AUTHORIZATION=f'Token {self.token.key}')

    ### Test cases ###

    def test_valid_retrieve_current_user(self):
        """
        Test valid request of retrieving current user's details.
        """
        self.set_token()
        response = self.client.get('/api/v1/user/current/')
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.assertEqual(response.data['username'], self.user.username)

    def test_invalid_retrieve_current_user(self):
        """
        Test invalid request of retrieving current user's details.
        """
        self.set_token()
        response = self.client.get('/api/v1/user/invalid-path/')
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.assertEqual(response.data['first_name'], '')
        self.assertEqual(response.data['last_name'], '')
        self.assertEqual(response.data['email'], '')
        self.assertEqual(response.data['username'], '')
        self.assertEqual(response.data['password'], '')

    def test_retrieve_current_user_when_unauthenticated(self):
        """
        Test invalid request of retrieving current user when unauthenticated.
        """
        response = self.client.get('/api/v1/user/current/')
        self.assertEqual(response.status_code, status.HTTP_401_UNAUTHORIZED)
