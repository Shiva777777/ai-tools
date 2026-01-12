from django.urls import path
from .views import get_tools, index

urlpatterns = [
    path('api/tools/', get_tools, name='api-tools'),
    path('', index, name='home'),
]
