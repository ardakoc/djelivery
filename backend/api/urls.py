from django.urls import path, include

from rest_framework.routers import DefaultRouter

from .viewsets import UserViewSet, VendorViewSet

router = DefaultRouter()
router.register(r'users', UserViewSet, basename='user')
router.register(r'vendors', VendorViewSet, basename='vendor')

urlpatterns = [
    path('', include(router.urls))
]
