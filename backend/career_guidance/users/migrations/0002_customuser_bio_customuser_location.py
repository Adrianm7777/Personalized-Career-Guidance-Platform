# Generated by Django 5.1.1 on 2024-11-25 14:59

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('users', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='customuser',
            name='bio',
            field=models.TextField(blank=True, null=True),
        ),
        migrations.AddField(
            model_name='customuser',
            name='location',
            field=models.CharField(blank=True, max_length=100, null=True),
        ),
    ]