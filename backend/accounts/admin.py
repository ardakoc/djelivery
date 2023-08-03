from django.contrib import admin
from django.contrib.auth.admin import UserAdmin

from .models import User, UserProfile


class CustomUserAdmin(UserAdmin):
    list_display = (
        'email',
        'first_name',
        'last_name',
        'username',
        'role',
        'date_joined',
        'is_active'
    )
    ordering = ('-date_joined',)
    filter_horizontal = ()
    list_filter = ()
    fieldsets = ()


admin.site.register(User, CustomUserAdmin)
admin.site.register(UserProfile)
