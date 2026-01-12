from django.db import models

class Tool(models.Model):
    name = models.CharField(max_length=100)
    description = models.TextField()
    url = models.URLField()
    icon = models.CharField(max_length=20)

    def __str__(self):
        return self.name
