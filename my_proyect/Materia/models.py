from django.db import models

# Create your models here.
class material(models.Model):
    name_material = models.CharField(max_length=(100))
    amount = models.IntegerField()
    job = models.IntegerField()

    def __str__(self):
        return self.name_material