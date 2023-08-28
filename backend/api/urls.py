from django.urls import path, include

from rest_framework.routers import DefaultRouter

from . import viewsets
from mail import views

router = DefaultRouter()
router.register(r'users', viewsets.UserViewSet, basename='user')
router.register(r'user', viewsets.CurrentUserViewset, basename='current_user')
router.register(r'vendors', viewsets.VendorViewSet, basename='vendor')
router.register(r'login', viewsets.LoginViewSet, basename='login')
router.register(r'logout', viewsets.LogoutViewSet, basename='logout')
router.register(
    r'forgot-password',
    viewsets.ForgotPasswordViewSet,
    basename='forgot_password'
)

urlpatterns = [
    path('', include(router.urls)),
    path('activate/<uidb64>/<token>/', views.activate, name='activate'),
    path(
        'reset_password_validate/<uidb64>/<token>/',
        views.reset_password_validate,
        name='reset_password_validate'
    ),
]
