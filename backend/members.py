import os
import django

# definir la variable d'environnement pour Django 
os.environ.setdefault("DJANGO_SETTINGS_MODULE", "backend.settings")

# initialiser Django
django.setup()

def create_members():
    from backapp.models import Members, Image  

    # creation objet images
    image1 = Image.objects.create(
        image='images/eyes.png',  
        created_at='2025-01-01 12:00:00',  
        updated_at='2025-01-01 12:00:00'
    )

    image2 = Image.objects.create(
        image='images/eyes.png', 
        created_at='2025-01-01 12:00:00',
        updated_at='2025-01-01 12:00:00'
    )

    # recup de toutes les images
    images = Image.objects.all()

    # craetion membres (avec image associee)
    member1 = Members.objects.create(
        name='Cactus',
        position='FullStack - Backend',
        image=image1,  
        order=1,
        github='https://github.com/',
        twitter='https://twitter.com/',
        linkedin='https://linkedin.com/',
        instagram='https://instagram.com/'
    )

    member2 = Members.objects.create(
        name='Kasia',
        position='FullStack - Frontend',
        image=image2,  
        order=1,  
        github='https://github.com/',
        twitter='https://twitter.com/',
        linkedin='https://linkedin.com/',
        instagram='https://instagram.com/'
    )

    # affichage bonne creation
    print(f'Member 1: {member1.name}, {member1.position}')
    print(f'Member 2: {member2.name}, {member2.position}')

create_members()
