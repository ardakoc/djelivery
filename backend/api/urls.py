from django.urls import path, include

from rest_framework.routers import DefaultRouter

from . import viewsets

router = DefaultRouter()
router.register(r'users', viewsets.UserViewSet, basename='user')
router.register(r'vendors', viewsets.VendorViewSet, basename='vendor')
router.register(r'login', viewsets.LoginViewSet, basename='login')

urlpatterns = [
    path('', include(router.urls))
]
