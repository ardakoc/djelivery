from django.contrib.auth import get_user_model

from rest_framework.test import APITestCase
from rest_framework import status
from rest_framework.authtoken.models import Token

from accounts.models import UserProfile

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

    def test_retrieve_authenticated_user(self):
        """
        Test retrieve authenticated user's details.
        """
        self.set_token()
        response = self.client.get('/api/v1/users/{}/'.format(self.user.uuid))
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.assertEqual(response.data['username'], self.user.username)

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

    def test_logout_authenticated_user(self):
        """
        Test authenticated user logout.
        """
        self.set_token()
        response = self.client.post('/api/v1/logout/')
        self.assertEqual(response.status_code, status.HTTP_200_OK)

    def test_logout_unauthenticated_user(self):
        """
        Test unauthenticated user logout.
        """
        response = self.client.post('/api/v1/logout/')
        self.assertEqual(response.status_code, status.HTTP_401_UNAUTHORIZED)

    def test_register_valid_user_and_create_user_profile(self):
        """
        Test valid user registration.
        """
        response = self.client.post(
            '/api/v1/users/',
            {
                'first_name': 'test',
                'last_name': 'register',
                'email': 'testregister@test.com',
                'username': 'testregister',
                'password': 'testpassword'
            }
        )
        self.assertEqual(response.status_code, status.HTTP_201_CREATED)
        user = User.objects.get(uuid=response.data['uuid'])
        self.assertIsInstance(UserProfile.objects.get(user=user), UserProfile)
