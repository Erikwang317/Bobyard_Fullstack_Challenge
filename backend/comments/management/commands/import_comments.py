from django.core.management.base import BaseCommand, CommandParser
from comments.models import Comment
from django.conf import settings
import json 
import os

class Command(BaseCommand):
    help = 'Load a list of comments mockdata into the database'
    
    def add_arguments(self, parser):
        parser.add_argument('json_file', type=str, help='The JSON file to load')
        
    def handle(self, *args, **options):
        file_path = os.path.join(settings.BASE_DIR, 'comments', 'data', 'comments.json')
        
        with open(file_path, 'r') as file:
            data = json.load(file)
            
        comment_data = data.get('comments', [])
        for comment_dict in comment_data:
            if isinstance(comment_dict, dict):
                Comment.objects.update_or_create(
                    id = comment_dict.get('id'),
                    defaults={
                        'author': comment_dict.get('author'),
                        'text': comment_dict.get('text'),
                        'date': comment_dict.get('date'),
                        'likes': comment_dict.get('likes'),
                        'image': comment_dict.get('image', '')
                    }
                )
            
        self.stdout.write(self.style.SUCCESS('Successfully loaded all comments'))