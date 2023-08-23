from django.contrib.auth import get_user_model

from rest_framework.test import APITestCase
from rest_framework import status
from rest_framework.authtoken.models import Token

from vendor.models import Vendor
from accounts.models import UserProfile

User = get_user_model()


class VendorsAPITestCase(APITestCase):
    def setUp(self):
        """
        Initial create of test user and test vendor.
        """
        self.user = User.objects.create_user(
            first_name='test',
            last_name='user',
            email='testuser@test.com',
            username='testuser',
            password='testpassword',
        )
        self.user_profile = UserProfile.objects.get(user=self.user)
        self.vendor = Vendor.objects.create(
            user=self.user,
            user_profile=self.user_profile,
            vendor_name='Test Vendor'
        )

    def set_token(self):
        """
        Set token for the test cases need authenticate.
        """
        self.token = Token.objects.create(user=self.user)
        self.client.credentials(HTTP_AUTHORIZATION=f'Token {self.token.key}')

    # Test cases

    def test_retrieve_vendors(self):
        """
        Test retrieve all vendors.
        """
        response = self.client.get('/api/v1/vendors/')
        self.assertEqual(response.status_code, status.HTTP_200_OK)

    def test_register_valid_vendor(self):
        """
        Test valid vendor registration.
        """
        response = self.client.post(
            '/api/v1/vendors/',
            data={
                'user': {
                    'first_name': 'test',
                    'last_name': 'vendor',
                    'email': 'testvendor@test.com',
                    'username': 'testvendor',
                    'password': 'testpassword'
                },
                'vendor_name': 'Test Vendor'
            },
            format='json'
        )
        self.assertEqual(response.status_code, status.HTTP_201_CREATED)
        user = User.objects.get(uuid=response.data['user']['uuid'])
        self.assertEqual(user.get_role(), 'Vendor')
        self.assertIsInstance(UserProfile.objects.get(user=user), UserProfile)

    def test_register_invalid_vendor(self):
        """
        Test invalid vendor registration.
        """
        response = self.client.post(
            '/api/v1/vendors/',
            data={
                'user': {
                    'first_name': '',
                    'last_name': '',
                    'email': '',
                    'username': '',
                    'password': ''
                },
                'vendor_name': ''
            },
            format='json'
        )
        self.assertEqual(response.status_code, status.HTTP_400_BAD_REQUEST)

    def test_register_authenticated_vendor(self):
        """
        Test authenticated vendor register.
        """
        self.set_token()
        response = self.client.post(
            '/api/v1/vendors/',
            data={
                'user': {
                    'first_name': 'test',
                    'last_name': 'vendor',
                    'email': 'testvendor@test.com',
                    'username': 'testvendor',
                    'password': 'testpassword'
                },
                'vendor_name': 'Test Vendor'
            },
            format='json'
        )
        self.assertEqual(response.status_code, status.HTTP_405_METHOD_NOT_ALLOWED)
