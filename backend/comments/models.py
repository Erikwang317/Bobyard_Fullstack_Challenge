from django.db import models

class Comment(models.Model):
    id = models.AutoField(primary_key=True)
    author = models.CharField(max_length=255)
    text = models.TextField()
    date = models.DateTimeField()
    likes = models.IntegerField(default=0)
    image = models.URLField(blank=True)

# Create your models here.
