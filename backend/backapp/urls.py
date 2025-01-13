from django.urls import path
from .views import members_list

urlpatterns = [
    path('', members_list, name='members_list'),
]