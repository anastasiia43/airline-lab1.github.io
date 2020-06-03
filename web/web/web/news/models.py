from django.contrib.auth.base_user import BaseUserManager
from django.db import models

class NewsManager(BaseUserManager):
  def create_news(self, title, about,date, photo1, photo2):
    news = self.model(
        title = title,
        about = about,
        date = date,
        photo1 = photo1,
        photo2=photo2
    )
    news.save(using=self._db)
    return news

class News (models.Model):
    title = models.CharField(verbose_name="title", max_length=50)
    about = models.TextField(verbose_name="text" , null=True )
    date = models.DateField(verbose_name="date", max_length=50)
    photo1 = models.TextField(verbose_name="photo",null=True )
    photo2 = models.TextField(verbose_name="photo",null=True )
    object = NewsManager()