from django.http import JsonResponse
from .models import Members
from rest_framework.views import APIView
from rest_framework.response import Response
from .models import Members
from .serializers import MembersSerializer

from django.http import JsonResponse
from .models import Members

def members_list(request):
    members = Members.objects.all()
    data = {
        "members": list(members.values())  # convertion des membres en liste pour les envoyer en json
    }
    return JsonResponse(data)