from rest_framework import permissions


class IsAnonymousUser(permissions.BasePermission):
    """
    Permission check for anonymous user.
    """

    def has_permission(self, request, view):
        if request.user and request.user.is_authenticated:
            return False
        return True
