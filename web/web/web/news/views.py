from django.http import JsonResponse
from django.shortcuts import render, get_object_or_404

# Create your views here.
from rest_framework import viewsets, status
from rest_framework.response import Response
from rest_framework.views import APIView
from .serializers import NewsSerializer
from .models import News

class NewsDetail(APIView):

    def get(self, request, *args, **kwargs):
        question = get_object_or_404(News,pk=kwargs['id'])
        serializer = NewsSerializer(question)
        return Response(serializer.data)

    def patch(self, request, *args, **kwargs):
        question = get_object_or_404(News, pk=kwargs['id'])
        serializer = NewsSerializer(question, data=request.data, partial=True)
        if serializer.is_valid():
            question = serializer.save()
            return Response(NewsSerializer(question).data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def delete(self, request, *args, **kwargs):
        question = get_object_or_404(News, pk=kwargs['id'])
        question.delete()
        return Response("Task deleted", status=status.HTTP_204_NO_CONTENT)



class NewsCreate(APIView):

    def post(self, request):
        if request.method == "POST":
            serializers = NewsSerializer(data = request.data)
            if serializers.is_valid():
                ticket= News.object.create_news(serializers.data['title'],
                                                serializers.data['about'],
                                                serializers.data['date'],
                                                serializers.data['photo1'],
                                                serializers.data['photo2'],)
                return JsonResponse(serializers.data,status=201)
            return JsonResponse(serializers.errors,status = 400)

class GetNews(viewsets.ViewSet):

    def list(self, request):

        queryset = News.object.filter()
        serializer = NewsSerializer(queryset, many=True)
        return Response(serializer.data)