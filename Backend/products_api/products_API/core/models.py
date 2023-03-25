from django.db import models

categories = (
    ("mobile device", "mobile device"),
    ("home appliance", "home appliances"),
    ("wearable", "wearable"),
    ("computer/laptop/tablet", "computer, laptop, tablet")
)

class Products(models.Model):
    name = models.CharField(max_length=255)
    image = models.ImageField(upload_to='')
    category = models.CharField(max_length=30,choices=categories,default="device")
    description = models.TextField(max_length=1024)
    price = models.FloatField()
    
    class Meta:
        db_table = "Products"
        
    def __str__(self):
        return self.name

