from django.contrib import admin
from django.urls import path
from django.conf.urls import url
from .views import *
from . import views
app_name = 'news'
urlpatterns = [
    path('news/create/',NewsCreate.as_view()),
    path('news/',GetNews.as_view({'get': 'list'})),
    path('news/<int:id>/',NewsDetail.as_view())
]
