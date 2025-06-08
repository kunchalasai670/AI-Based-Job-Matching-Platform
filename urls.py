from django.urls import path
from app.views import upload_resume

urlpatterns = [
    path('upload-resume/', upload_resume, name='upload_resume'),
     path('api/suggest-jobs/', views.suggest_jobs, name='suggest_jobs'),
]
