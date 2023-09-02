from django.contrib import admin

from .models import Vendor
from mail import utils


class VendorAdmin(admin.ModelAdmin):
    list_display = ('user', 'vendor_name', 'is_approved', 'created_at')
    list_display_links = ('user', 'vendor_name')
    list_editable = ('is_approved',)
    actions = ['approve_selected_vendors', 'reject_selected_vendors']

    def approve_selected_vendors(self, request, queryset):        
        queryset.update(is_approved=True)
        for vendor in queryset:
            vendor.set_approval_email_content(is_approved=True)

    def reject_selected_vendors(self, request, queryset):
        queryset.update(is_approved=False)
        for vendor in queryset:
            vendor.set_approval_email_content(is_approved=False)

admin.site.register(Vendor, VendorAdmin)
