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

urlpatterns = [
    path('', include(router.urls)),
    path('activate/<uidb64>/<token>/', views.activate, name='activate'),
]
