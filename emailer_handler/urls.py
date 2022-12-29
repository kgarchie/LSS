from django.urls import path
from . import views

app_name = 'email_handler'

urlpatterns = [
    path('', views.lss_email_message, name='index'),
]