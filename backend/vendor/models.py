from django.db import models

from accounts.models import User, UserProfile
from mail import utils


class Vendor(models.Model):
    user = models.OneToOneField(User, related_name='user', on_delete=models.CASCADE)
    user_profile = models.OneToOneField(
        UserProfile,
        related_name='user_profile',
        on_delete=models.CASCADE
    )
    vendor_name = models.CharField(max_length=50)
    vendor_license = models.FileField(
        upload_to='vendor/licenses',
        blank=True,
        null=True
    )
    is_approved = models.BooleanField(default=False)
    created_at = models.DateTimeField(auto_now_add=True)
    modified_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return self.vendor_name

    def save(self, *args, **kwargs):
        if self.pk is not None:
            # update
            vendor = Vendor.objects.get(pk=self.pk)
            if vendor.is_approved != self.is_approved:
                if self.is_approved == True:
                    self.set_approval_email_content(is_approved=True)
                else:
                    self.set_approval_email_content(is_approved=False)
                
        return super(Vendor, self).save(*args, **kwargs)

    def set_approval_email_content(self, is_approved):
        if is_approved:
            subject = 'Congratulations! Your restaurant has been approved.'
        else:
            subject = "We're sorry! You are not eligible for publishing your \
                food menu on our marketplace."
        template = 'admin_approval_email.html'
        context = {
            'user': self.user,
            'is_approved': self.is_approved,
        }
        utils.send_notification_email(self.user, subject, template, context)
