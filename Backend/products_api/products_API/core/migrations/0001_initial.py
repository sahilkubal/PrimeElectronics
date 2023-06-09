# Generated by Django 4.1.7 on 2023-03-20 14:38

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Products',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=255)),
                ('image', models.ImageField(upload_to='')),
                ('category', models.CharField(choices=[('md', 'mobile_device'), ('ha', 'home_appliance'), ('we', 'wearable'), ('lct', 'big_device')], default='device', max_length=30)),
                ('description', models.TextField(max_length=300)),
                ('discount', models.IntegerField()),
                ('price', models.FloatField()),
            ],
            options={
                'db_table': 'Products',
            },
        ),
    ]
