# Generated by Django 4.2.3 on 2023-09-03 12:40

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('vendor', '0005_alter_vendor_vendor_name'),
    ]

    operations = [
        migrations.AlterField(
            model_name='vendor',
            name='vendor_name',
            field=models.CharField(max_length=50),
        ),
    ]