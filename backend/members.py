import os
import django
os.environ.setdefault("DJANGO_SETTINGS_MODULE", "backend.settings")
django.setup()

from backapp.models import Members


member1 = Members.objects.create(
    name='Cactus',
    position='FullStack - Backend',
    image_id=1,
    order=1,
    github='https://github.com/',
    twitter='https://twitter.com/',
    linkedin='https://linkedin.com/',
    instagram='https://instagram.com/'
),
member2 = Members.objects.create(
    name='Kasia',
    position='FullStack - Frontend',
    image_id=2,
    order=1,
    github='https://github.com/',
    twitter='https://twitter.com/',
    linkedin='https://linkedin.com/',
    instagram='https://instagram.com/'
)
