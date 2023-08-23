from django.contrib.auth import get_user_model

from rest_framework.test import APITestCase
from rest_framework import status
from rest_framework.authtoken.models import Token

from accounts.models import UserProfile

User = get_user_model()

class AuthenticationAPITestCase(APITestCase):
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
        self.assertEqual(user.get_role(), 'Customer')
        self.assertIsInstance(UserProfile.objects.get(user=user), UserProfile)

    def test_register_invalid_user(self):
        """
        Test invalid user registration.
        """
        # existing user case
        response = self.client.post(
            '/api/v1/users/',
            {
                'first_name': 'test',
                'last_name': 'register',
                'email': 'testuser@test.com',
                'username': 'testuser',
                'password': 'testpassword'
            }
        )
        self.assertEqual(response.status_code, status.HTTP_400_BAD_REQUEST)

        # blank form field case
        response = self.client.post(
            '/api/v1/users/',
            {
                'first_name': '',
                'last_name': '',
                'email': '',
                'username': '',
                'password': ''
            }
        )
        self.assertEqual(response.status_code, status.HTTP_400_BAD_REQUEST)  

    def test_register_authenticated_user(self):
        """
        Test authenticated user register.
        """
        self.set_token()
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
        self.assertEqual(response.status_code, status.HTTP_405_METHOD_NOT_ALLOWED)

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
