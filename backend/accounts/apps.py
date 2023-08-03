from django.apps import AppConfig
from django.core.signals import request_finished


class AccountsConfig(AppConfig):
    default_auto_field = 'django.db.models.BigAutoField'
    name = 'accounts'

    def ready(self):
        from . import signals

        request_finished.connect(signals.post_save_create_profile_receiver)
