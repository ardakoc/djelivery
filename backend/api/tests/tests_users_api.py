from django.contrib.auth import get_user_model

from rest_framework.test import APITestCase
from rest_framework import status
from rest_framework.authtoken.models import Token

User = get_user_model()

class UsersAPITestCase(APITestCase):
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

    def test_retrieve_users(self):
        """
        Test retrieve user's details.
        """
        self.set_token()
        response = self.client.get('/api/v1/users/{}/'.format(self.user.uuid))
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.assertEqual(response.data['username'], self.user.username)
