from rest_framework import serializers
from .models import Members, Image

class ImageSerializer(serializers.ModelSerializer):
    image_url = serializers.SerializerMethodField()

    class Meta:
        model = Image
        fields = ['image_url', 'created_at', 'updated_at']

    def get_image_url(self, obj):
        request = self.context.get('request')
        if obj.image and request:
            return request.build_absolute_uri(obj.image.url)
        return None

class MembersSerializer(serializers.ModelSerializer):
    image = ImageSerializer()  # emploi serialiseur d'image

    class Meta:
        model = Members
        fields = ['id', 'name', 'position', 'image', 'order', 'github', 'twitter', 'linkedin', 'instagram', 'email', 'phone']
