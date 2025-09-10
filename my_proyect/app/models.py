from django.db import models

# Create your models here.

class Persona(models.Model):
    name = models.CharField(max_length=(100))
    age = models.IntegerField()

    def __str__(self):
        return self.name

class Job(models.Model):
    namejob = models.CharField(max_length=(100))
    person = models.ForeignKey(Persona, on_delete=models.CASCADE)

    def __str__(self):
        return self.namejob   
    
class materials(models.Model):
    name_material = models.CharField(max_length=(100))
    amount = models.IntegerField()
    job = models.ForeignKey(Job, on_delete=models.CASCADE)

    def __str__(self):
        return self.name_material
    
class necessary_experience(models.Model):
    years = models.IntegerField()
    details = models.CharField(max_length=(100))
    job = models.ForeignKey(Job, on_delete=models.CASCADE)

    def __str__(self):
        return self.years