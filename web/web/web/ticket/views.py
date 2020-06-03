from django.http import JsonResponse
from django.shortcuts import render

# Create your views here.
from rest_framework import viewsets, status
from rest_framework.generics import get_object_or_404
from rest_framework.response import Response
from rest_framework.views import APIView
from .serializers import TicketSerializer,TicketCreateSerializer
from .models import Ticket
from User.models import User

class UserCreate(APIView):

    def post(self, request):
        if request.method == "POST":
            serializers = TicketCreateSerializer(data = request.data)
            if serializers.is_valid():
                print("----------------",request.user)
                ticket= Ticket.object.create_ticket(serializers.data['arival'],serializers.data['departure'],serializers.data['date'],serializers.data['child'],request.user)
                return JsonResponse(serializers.data,status=201)
            return JsonResponse(serializers.data,status = 400)

class GetUsers(viewsets.ViewSet):

    def list(self, request):
        user = User.objects.get(user_id = request.user.user_id)
        print(user)
        queryset = Ticket.object.filter(user = user)
        serializer = TicketSerializer(queryset, many=True)
        return Response(serializer.data)


class TaskDetail(APIView):

    def delete(self, request, *args, **kwargs):
        question = get_object_or_404(Ticket, pk=kwargs['id'])
        question.delete()
        return Response("Ticket deleted", status=status.HTTP_204_NO_CONTENT)

