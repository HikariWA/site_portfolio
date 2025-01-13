from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import ImageViewSet, MembersViewSet  

router = DefaultRouter()
router.register(r'images', ImageViewSet)  # API pour les images
router.register(r'members', MembersViewSet)  # API pour les membres

urlpatterns = [
    path('', include(router.urls)),  # pour inclure les routes de l'API pour les membres et les images
]
