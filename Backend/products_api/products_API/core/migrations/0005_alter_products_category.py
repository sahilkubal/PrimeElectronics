# Generated by Django 4.1.7 on 2023-03-21 06:27

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('core', '0004_alter_products_description'),
    ]

    operations = [
        migrations.AlterField(
            model_name='products',
            name='category',
            field=models.CharField(choices=[('mobile device', 'mobile device'), ('home appliance', 'home appliances'), ('wearable', 'wearable'), ('computer/laptop/tablet', 'computer, laptop, tablet')], default='device', max_length=30),
        ),
    ]