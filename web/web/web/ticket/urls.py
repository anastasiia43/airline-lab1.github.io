from django.contrib import admin
from django.urls import path
from django.conf.urls import url
from .views import *
from . import views
app_name = 'ticket'
urlpatterns = [
    path('ticket/create/',UserCreate.as_view()),
    path('ticket/',GetUsers.as_view({'get': 'list'})),
    path('ticket/<int:id>/',TaskDetail.as_view())
]
