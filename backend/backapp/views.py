from django.http import JsonResponse
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import viewsets
from .models import Image, Members
from .serializers import ImageSerializer, MembersSerializer

class ImageViewSet(viewsets.ModelViewSet):
    queryset = Image.objects.all() # recup de toutes les img
    serializer_class = ImageSerializer


class MembersViewSet(viewsets.ModelViewSet):
    queryset = Members.objects.all()  # recup de tous les membres
    serializer_class = MembersSerializer

    def get_queryset(self):
        queryset = super().get_queryset()  # recup du queryset de base
        for member in queryset:
            image = member.image  # pr s'assurer que img est ImageField
            if image and hasattr(image, 'url'):  # verif si image existe et si elle a un attribut "url"
                member.image_url = image.url  # ajouter l'url de l'image au membre
            else:
                member.image_url = None  # si aucune image => none
        return queryset


