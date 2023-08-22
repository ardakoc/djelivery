from django.contrib.auth import get_user_model
from django.contrib.auth.hashers import check_password

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

    def test_retrieve_authenticated_user(self):
        """
        Test retrieve authenticated user's details.
        """
        self.token = Token.objects.create(user=self.user)
        self.client.credentials(HTTP_AUTHORIZATION=f'Token {self.token.key}')
        response = self.client.get('/api/v1/users/{}/'.format(self.user.uuid))
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.assertEqual(response.data['username'], self.user.username)

    def test_retrieve_unauthenticated_user(self):
        """
        Test get 401 error on retrieving user's detail when unauthenticated.
        """
        response = self.client.get('/api/v1/users/{}/'.format(self.user.uuid))
        self.assertEqual(response.status_code, status.HTTP_401_UNAUTHORIZED)


    def test_login_valid_user(self):
        """
        Test valid user login.
        """
        response = self.client.post(
            '/api/v1/login/',
            {
                'email': 'testuser@test.com',
                'password': 'testpassword'
            }
        )
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.assertIn('token', response.data)

    def test_login_invalid_user(self):
        """
        Test invalid user login.
        """
        response = self.client.post(
            '/api/v1/login/',
            {
                'email': 'invaliduser',
                'password': 'invalidpassword'
            }
        )
        self.assertEqual(response.status_code, status.HTTP_401_UNAUTHORIZED)
