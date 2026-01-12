from django.http import JsonResponse
from django.shortcuts import render
from django.db import DatabaseError
from .models import Tool

def index(request):
    return render(request, 'index.html')

def get_tools(request):
    try:
        data = list(Tool.objects.values())
    except DatabaseError:
        data = []
    return JsonResponse(data, safe=False)
