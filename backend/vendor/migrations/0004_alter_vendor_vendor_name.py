# Generated by Django 4.2.3 on 2023-08-23 04:38

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('vendor', '0003_alter_vendor_vendor_license'),
    ]

    operations = [
        migrations.AlterField(
            model_name='vendor',
            name='vendor_name',
            field=models.SlugField(max_length=100, unique=True),
        ),
    ]
