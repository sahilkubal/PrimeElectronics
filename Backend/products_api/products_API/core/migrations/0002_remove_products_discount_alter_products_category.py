# Generated by Django 4.1.7 on 2023-03-20 15:14

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('core', '0001_initial'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='products',
            name='discount',
        ),
        migrations.AlterField(
            model_name='products',
            name='category',
            field=models.CharField(choices=[('md', 'mobile device'), ('ha', 'home appliances'), ('we', 'wearable'), ('lct', 'computer, laptop, tablet')], default='device', max_length=30),
        ),
    ]
