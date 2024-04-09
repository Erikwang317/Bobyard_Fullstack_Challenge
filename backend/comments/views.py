from rest_framework import viewsets
from .models import Comment
from .serializers import CommentSerializer
from django.http import HttpResponse


class CommentViewSet(viewsets.ModelViewSet):
    queryset = Comment.objects.all()
    serializer_class = CommentSerializer
    
def home(request):
    return HttpResponse("Welcome to the home page!")
    
# Create your views here.


